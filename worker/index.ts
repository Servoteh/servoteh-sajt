/**
 * Cloudflare Worker — servira statički sajt iz /out i obrađuje kontakt formu.
 *
 * Rute:
 *   POST /api/contact  → validacija + slanje mejla preko Resend API-ja
 *   sve ostalo         → statički asseti (env.ASSETS)
 *
 * Env (Cloudflare → Worker → Settings):
 *   RESEND_API_KEY  (secret, OBAVEZNO)  — API ključ sa resend.com
 *   CONTACT_TO      (var, opc.)         — prima upite; default office@servoteh.com
 *   CONTACT_FROM    (var, opc.)         — 'from' adresa; mora biti sa verifikovanog
 *                                         domena u Resend-u (npr. "Servoteh sajt
 *                                         <upit@servoteh.com>"). Default je Resend
 *                                         test adresa (radi samo ka vlasniku naloga).
 */

interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
  RESEND_API_KEY?: string;
  CONTACT_TO?: string;
  CONTACT_FROM?: string;
}

type ContactPayload = {
  ime?: string;
  kompanija?: string;
  email?: string;
  telefon?: string;
  poruka?: string;
  /** honeypot — popunjava ga samo bot; mora ostati prazan */
  website?: string;
  /** jezik stranice sa koje je upit poslat ("sr" | "en") — bira jezik poruka */
  locale?: string;
};

// Poruke o grešci po jeziku. Klijent (ContactForm) šalje `locale` iz putanje
// ("/en/" → en); fallback je srpski. Vidljive poruke i validacija polja.
const MESSAGES = {
  sr: {
    badRequest: "Neispravan format zahteva.",
    invalid: "Proverite unos.",
    unavailable: "Slanje trenutno nije dostupno.",
    sendFailed: "Slanje nije uspelo. Pokušajte ponovo ili nas kontaktirajte mejlom.",
    sendFailedRetry: "Slanje nije uspelo. Pokušajte ponovo kasnije.",
    name: "Unesite ime.",
    email: "Unesite ispravnu email adresu.",
    messageShort: "Poruka je prekratka.",
    tooLong: "Unos je predugačak.",
  },
  en: {
    badRequest: "Invalid request format.",
    invalid: "Please check your input.",
    unavailable: "Submission is currently unavailable.",
    sendFailed: "Sending failed. Please try again or contact us by email.",
    sendFailedRetry: "Sending failed. Please try again later.",
    name: "Please enter your name.",
    email: "Please enter a valid email address.",
    messageShort: "Your message is too short.",
    tooLong: "Your input is too long.",
  },
} as const;

type Locale = keyof typeof MESSAGES;

/** Bira jezik: eksplicitni `locale` iz tela; fallback iz Referer putanje; pa sr. */
function localeOf(request: Request, bodyLocale?: string): Locale {
  if (bodyLocale === "en" || bodyLocale === "sr") return bodyLocale;
  try {
    return new URL(request.headers.get("Referer") ?? "").pathname.startsWith("/en") ? "en" : "sr";
  } catch {
    return "sr";
  }
}

/**
 * 301 redirect mapa: stari indeksirani URL-ovi servoteh.com → nove rute.
 * Izvor: `www.servoteh.com/sitemap.xml` (8 URL-ova) + stariji indeksirani URL-ovi
 * iz ranije strukture sajta (provereno preko Google-a 2026-06-17). Stari sajt je
 * bio na engleskom; sve „defence" stranice (artillery_plant, ammunition,
 * development, loaders) su defence sadržaj → vode na /defence/. Poddomen
 * `automation.servoteh.com` je zaseban host → rešava se DNS/Cloudflare redirektom,
 * NE ovde. Sve nemapirane putanje hvata `not_found_handling` iz `wrangler.jsonc`
 * (→ 404 stranica) — namerno bez blanket 404→home. EN URL-ovi: Faza 4.
 */
const REDIRECTS: Record<string, string> = {
  // www.servoteh.com/sitemap.xml (bez ekstenzije)
  "/about_us": "/#about",
  "/defence": "/defence/",
  "/artillery_plant": "/defence/",
  "/ammunition": "/defence/",
  "/development": "/defence/",
  "/loaders": "/defence/",
  "/contact": "/#cta",
  // Stariji indeksirani URL-ovi (van sitemap-a, ranija struktura)
  "/solutions": "/industrijska-automatizacija/",
  "/solutions/electrical-control-systems": "/industrijska-automatizacija/",
  "/sales": "/#aftersales",
  "/sales-and-service": "/#aftersales",
  "/forming-technology": "/proizvodne-linije/",
  "/forming-technology/complete-production-lines": "/proizvodne-linije/",
  "/industries/servoteh-in-automotive-industry/machine-tools-and-equipment": "/automobilska-industrija/",
  "/industries/servoteh-custom-automation-solutions/automatic-drilling-machine/automatic-drilling-machine": "/specijalne-masine/",
  // Zadržani `.html` slugovi iz _legacy/ rebuild-a (bezopasni)
  "/index.html": "/",
  "/defence.html": "/defence/",
  "/specijalne-masine.html": "/specijalne-masine/",
  "/proizvodne-linije.html": "/proizvodne-linije/",
  "/industrijska-automatizacija.html": "/industrijska-automatizacija/",
  "/reference.html": "/reference/",
};

const JSON_HEADERS = { "Content-Type": "application/json; charset=utf-8" };

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), { status, headers: JSON_HEADERS });
}

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function handleContact(request: Request, env: Env): Promise<Response> {
  let data: ContactPayload;
  try {
    data = (await request.json()) as ContactPayload;
  } catch {
    return json({ ok: false, error: MESSAGES[localeOf(request)].badRequest }, 400);
  }

  const m = MESSAGES[localeOf(request, data.locale)];

  // Honeypot: ako je popunjen, tiho "uspeh" (bot ne dobija povratnu informaciju).
  if (data.website && data.website.trim() !== "") {
    return json({ ok: true });
  }

  const ime = (data.ime ?? "").trim();
  const email = (data.email ?? "").trim();
  const poruka = (data.poruka ?? "").trim();
  const kompanija = (data.kompanija ?? "").trim();
  const telefon = (data.telefon ?? "").trim();

  const errors: Record<string, string> = {};
  if (ime.length < 2) errors.ime = m.name;
  if (!EMAIL_RE.test(email)) errors.email = m.email;
  if (poruka.length < 10) errors.poruka = m.messageShort;
  if (ime.length > 120 || email.length > 160 || poruka.length > 5000) {
    errors.poruka = m.tooLong;
  }
  if (Object.keys(errors).length > 0) {
    return json({ ok: false, error: m.invalid, fields: errors }, 400);
  }

  if (!env.RESEND_API_KEY) {
    return json({ ok: false, error: m.unavailable }, 503);
  }

  const to = env.CONTACT_TO || "office@servoteh.com";
  const from = env.CONTACT_FROM || "Servoteh sajt <onboarding@resend.dev>";

  const html = `
    <h2>Novi upit sa sajta</h2>
    <p><strong>Ime:</strong> ${esc(ime)}</p>
    ${kompanija ? `<p><strong>Kompanija:</strong> ${esc(kompanija)}</p>` : ""}
    <p><strong>Email:</strong> ${esc(email)}</p>
    ${telefon ? `<p><strong>Telefon:</strong> ${esc(telefon)}</p>` : ""}
    <p><strong>Poruka:</strong></p>
    <p>${esc(poruka).replace(/\n/g, "<br>")}</p>
  `;

  const text =
    `Novi upit sa sajta\n\nIme: ${ime}\n` +
    (kompanija ? `Kompanija: ${kompanija}\n` : "") +
    `Email: ${email}\n` +
    (telefon ? `Telefon: ${telefon}\n` : "") +
    `\nPoruka:\n${poruka}\n`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: email,
        subject: `Upit sa sajta — ${ime}${kompanija ? ` (${kompanija})` : ""}`,
        html,
        text,
      }),
    });

    if (!res.ok) {
      return json({ ok: false, error: m.sendFailed }, 502);
    }
    return json({ ok: true });
  } catch {
    return json({ ok: false, error: m.sendFailedRetry }, 502);
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === "/api/contact") {
      if (request.method !== "POST") {
        return json({ ok: false, error: "Method Not Allowed" }, 405);
      }
      return handleContact(request, env);
    }

    // 301 redirecti sa starih URL-ova (case-insensitive poređenje putanje).
    const target = REDIRECTS[url.pathname.toLowerCase()];
    if (target) {
      return Response.redirect(new URL(target, url.origin).toString(), 301);
    }

    // Sve ostalo: statički asseti iz /out.
    return env.ASSETS.fetch(request);
  },
};
