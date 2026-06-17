import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { home } from "@/content/sr/home";
import { pageMetadata, SITE_URL } from "@/lib/meta";

// Figtree — self-hostovan varijabilni font (300–900), subset latinica + latin-ext
// (srpske dijakritike č, ć, š, ž, đ) + interpunkcija/strelice. Bez poziva ka Google
// Fonts: brže, GDPR-čisto i build radi i bez mreže ka Googleu.
const figtree = localFont({
  src: "./fonts/Figtree-Variable.woff2",
  weight: "300 900",
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMetadata(home.meta, "/"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr" className={figtree.variable}>
      <body>{children}</body>
    </html>
  );
}
