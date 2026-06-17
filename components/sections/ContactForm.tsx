"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ui as uiSr } from "@/content/sr/ui";
import type { UiDict } from "@/lib/types";

type FormValues = {
  ime: string;
  kompanija?: string;
  email: string;
  telefon?: string;
  poruka: string;
  website?: string;
};

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm({
  ui = uiSr,
  privacyHref = "/politika-privatnosti",
}: {
  ui?: UiDict;
  privacyHref?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string>("");

  // Validaciona šema — poruke iz `ui` rečnika; usklađena sa proverama u worker/index.ts.
  const schema = useMemo(
    () =>
      z.object({
        ime: z.string().min(2, ui.form.errName),
        kompanija: z.string().max(120).optional(),
        email: z.string().email(ui.form.errEmail),
        telefon: z.string().max(40).optional(),
        poruka: z.string().min(10, ui.form.errMessage),
        // honeypot — sakriveno polje; ljudi ga ne popunjavaju
        website: z.string().max(0).optional(),
      }),
    [ui],
  );

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
      // Locale se na sajtu definiše „/en/" prefiksom — Worker ga koristi da vrati
      // poruke o grešci na odgovarajućem jeziku.
      const locale = window.location.pathname.startsWith("/en") ? "en" : "sr";
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, locale }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (res.ok && data.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
        setServerError(data.error || ui.form.errFailed);
      }
    } catch {
      setStatus("error");
      setServerError(ui.form.errNetwork);
    }
  };

  if (status === "success") {
    return (
      <div className="cf-success" role="status">
        <div className="cf-success-icon">✓</div>
        <h4>{ui.form.successTitle}</h4>
        <p>{ui.form.successBody}</p>
        <button type="button" className="btn btn-secondary" onClick={() => setStatus("idle")}>
          {ui.form.newEnquiry}
        </button>
      </div>
    );
  }

  return (
    <form className="cf-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="cf-row">
        <div className="cf-field">
          <label htmlFor="cf-ime">{ui.form.name} *</label>
          <input id="cf-ime" type="text" autoComplete="name" {...register("ime")} aria-invalid={!!errors.ime} />
          {errors.ime && <span className="cf-error">{errors.ime.message}</span>}
        </div>
        <div className="cf-field">
          <label htmlFor="cf-kompanija">{ui.form.company}</label>
          <input id="cf-kompanija" type="text" autoComplete="organization" {...register("kompanija")} />
        </div>
      </div>

      <div className="cf-row">
        <div className="cf-field">
          <label htmlFor="cf-email">{ui.form.email} *</label>
          <input id="cf-email" type="email" autoComplete="email" {...register("email")} aria-invalid={!!errors.email} />
          {errors.email && <span className="cf-error">{errors.email.message}</span>}
        </div>
        <div className="cf-field">
          <label htmlFor="cf-telefon">{ui.form.phone}</label>
          <input id="cf-telefon" type="tel" autoComplete="tel" {...register("telefon")} />
        </div>
      </div>

      <div className="cf-field">
        <label htmlFor="cf-poruka">{ui.form.message} *</label>
        <textarea id="cf-poruka" rows={5} {...register("poruka")} aria-invalid={!!errors.poruka} />
        {errors.poruka && <span className="cf-error">{errors.poruka.message}</span>}
      </div>

      {/* honeypot — sakriveno od korisnika, vidljivo botovima */}
      <div className="cf-hp" aria-hidden="true">
        <label htmlFor="cf-website">{ui.form.website}</label>
        <input id="cf-website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      {status === "error" && <div className="cf-server-error" role="alert">{serverError}</div>}

      <button type="submit" className="btn btn-primary cf-submit" disabled={status === "submitting"}>
        {status === "submitting" ? ui.form.submitting : <>{ui.form.submit} <i className="arrow-icon">↗</i></>}
      </button>

      <p className="cf-consent">
        {ui.form.consentPre} <Link href={privacyHref}>{ui.form.privacyLink}</Link>.
      </p>
    </form>
  );
}
