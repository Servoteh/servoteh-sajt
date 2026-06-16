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
};

/**
 * 301 redirect mapa: stari URL-ovi sa ranijeg (ručno kodiranog) sajta → nove rute.
 * Pokriva potvrđene `.html` putanje iz `_legacy/`. EN `.html` URL-ovi se dodaju
 * u Fazi 4 (EN još ne postoji). Sve nemapirane putanje hvata `not_found_handling`
 * iz `wrangler.jsonc` (→ 404 stranica) — namerno bez blanket 404→home.
 */
const REDIRECTS: Record<string, string> = {
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
    return json({ ok: false, error: "Neispravan format zahteva." }, 400);
  }

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
  if (ime.length < 2) errors.ime = "Unesite ime.";
  if (!EMAIL_RE.test(email)) errors.email = "Unesite ispravnu email adresu.";
  if (poruka.length < 10) errors.poruka = "Poruka je prekratka.";
  if (ime.length > 120 || email.length > 160 || poruka.length > 5000) {
    errors.poruka = "Unos je predugačak.";
  }
  if (Object.keys(errors).length > 0) {
    return json({ ok: false, error: "Proverite unos.", fields: errors }, 400);
  }

  if (!env.RESEND_API_KEY) {
    return json({ ok: false, error: "Slanje trenutno nije dostupno." }, 503);
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
      return json({ ok: false, error: "Slanje nije uspelo. Pokušajte ponovo ili nas kontaktirajte mejlom." }, 502);
    }
    return json({ ok: true });
  } catch {
    return json({ ok: false, error: "Slanje nije uspelo. Pokušajte ponovo kasnije." }, 502);
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
