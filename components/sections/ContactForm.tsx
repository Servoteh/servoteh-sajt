"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Validaciona šema — poruke na srpskom; usklađena sa proverama u worker/index.ts.
const schema = z.object({
  ime: z.string().min(2, "Unesite ime."),
  kompanija: z.string().max(120).optional(),
  email: z.string().email("Unesite ispravnu email adresu."),
  telefon: z.string().max(40).optional(),
  poruka: z.string().min(10, "Poruka je prekratka (najmanje 10 karaktera)."),
  // honeypot — sakriveno polje; ljudi ga ne popunjavaju
  website: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof schema>;

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    setStatus("submitting");
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (res.ok && data.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
        setServerError(data.error || "Slanje nije uspelo. Pokušajte ponovo.");
      }
    } catch {
      setStatus("error");
      setServerError("Mreža trenutno nije dostupna. Pokušajte ponovo ili nam pišite na office@servoteh.com.");
    }
  };

  if (status === "success") {
    return (
      <div className="cf-success" role="status">
        <div className="cf-success-icon">✓</div>
        <h4>Hvala na upitu</h4>
        <p>Vaša poruka je poslata. Naš tim će vam se javiti u najkraćem roku.</p>
        <button type="button" className="btn btn-secondary" onClick={() => setStatus("idle")}>
          Pošaljite novi upit
        </button>
      </div>
    );
  }

  return (
    <form className="cf-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="cf-row">
        <div className="cf-field">
          <label htmlFor="cf-ime">Ime i prezime *</label>
          <input id="cf-ime" type="text" autoComplete="name" {...register("ime")} aria-invalid={!!errors.ime} />
          {errors.ime && <span className="cf-error">{errors.ime.message}</span>}
        </div>
        <div className="cf-field">
          <label htmlFor="cf-kompanija">Kompanija</label>
          <input id="cf-kompanija" type="text" autoComplete="organization" {...register("kompanija")} />
        </div>
      </div>

      <div className="cf-row">
        <div className="cf-field">
          <label htmlFor="cf-email">Email *</label>
          <input id="cf-email" type="email" autoComplete="email" {...register("email")} aria-invalid={!!errors.email} />
          {errors.email && <span className="cf-error">{errors.email.message}</span>}
        </div>
        <div className="cf-field">
          <label htmlFor="cf-telefon">Telefon</label>
          <input id="cf-telefon" type="tel" autoComplete="tel" {...register("telefon")} />
        </div>
      </div>

      <div className="cf-field">
        <label htmlFor="cf-poruka">Poruka *</label>
        <textarea id="cf-poruka" rows={5} {...register("poruka")} aria-invalid={!!errors.poruka} />
        {errors.poruka && <span className="cf-error">{errors.poruka.message}</span>}
      </div>

      {/* honeypot — sakriveno od korisnika, vidljivo botovima */}
      <div className="cf-hp" aria-hidden="true">
        <label htmlFor="cf-website">Website</label>
        <input id="cf-website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      {status === "error" && <div className="cf-server-error" role="alert">{serverError}</div>}

      <button type="submit" className="btn btn-primary cf-submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Slanje…" : <>Pošaljite upit <i className="arrow-icon">↗</i></>}
      </button>

      <p className="cf-consent">
        Slanjem upita prihvatate <Link href="/politika-privatnosti">Politiku privatnosti</Link>.
      </p>
    </form>
  );
}
