import type { Metadata } from "next";
import Link from "next/link";
import ServiceScope from "../service-scope";

export const metadata: Metadata = {
  title: "What's Included | Charleston Clean Routine",
  description: "See exactly what is included in Routine, Deep, and Move-In / Move-Out cleaning services.",
};

export default function WhatsIncludedPage() {
  return (
    <main className="scope-page">
      <header className="scope-page-header">
        <Link href="/" aria-label="Charleston Clean Routine home"><img src="/charleston-clean-routine-logo.svg" alt="Charleston Clean Routine" /></Link>
        <nav aria-label="Service scope navigation"><Link href="/">Home</Link><Link href="/#pricing-tool">Get my price</Link><Link href="/service-policy">Service Policy</Link></nav>
      </header>
      <ServiceScope />
    </main>
  );
}
