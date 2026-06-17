import { HtmlLang } from "@/components/HtmlLang";

// EN pod-stablo: postavlja document lang na „en" (root layout je „sr").
export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HtmlLang lang="en" />
      {children}
    </>
  );
}
