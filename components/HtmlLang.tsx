"use client";

import { useEffect } from "react";

/**
 * Postavlja `<html lang>` na klijentu za pod-stabla sa drugim jezikom (EN rute).
 * App Router ima jedan root layout (`lang="sr"`); ovaj helper, montiran u
 * `app/en/layout.tsx`, prebacuje lang na „en" i vraća prethodnu vrednost pri
 * napuštanju EN sekcije. (hreflang/canonical u <head> su glavni SEO signal.)
 */
export function HtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    const prev = document.documentElement.lang;
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = prev;
    };
  }, [lang]);
  return null;
}
