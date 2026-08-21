import type { Metadata } from "next";
import ServiceScope from "../service-scope";

export const metadata: Metadata = {
  title: "What's Included | Charleston Clean Routine",
  description: "See exactly what is included in Routine, Deep, and Move-In / Move-Out cleaning services.",
};

export default function WhatsIncludedPage() {
  return (
    <main className="scope-page">
      <header className="scope-page-header">
        <a href="/" aria-label="Charleston Clean Routine home"><img src="/charleston-clean-routine-logo.svg" alt="Charleston Clean Routine" /></a>
        <nav aria-label="Service scope navigation"><a href="/">Home</a><a href="/#pricing-tool">Get my price</a><a href="/service-policy">Service Policy</a></nav>
      </header>
      <ServiceScope />
    </main>
  );
}
