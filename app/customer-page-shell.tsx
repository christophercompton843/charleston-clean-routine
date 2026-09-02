import type { ReactNode } from "react";
import Link from "next/link";
import Concierge from "./concierge";

export default function CustomerPageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <main className="customer-page">
      <header className="policy-header">
        <Link href="/" aria-label="Charleston Clean Routine home">
          <img src="/ccr-logo-primary.webp" alt="Charleston Clean Routine — Your Home, Handled." />
        </Link>
        <Link className="button button-small" href="/#pricing-tool">Build my clean</Link>
      </header>
      <section className="customer-page-hero">
        <p className="eyebrow eyebrow-light">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </section>
      <div className="customer-page-body">{children}</div>
      <footer className="policy-footer">
        <span>© 2026 Charleston Clean Routine</span>
        <Link href="/">Home</Link>
        <a href="tel:+18436338648">24-hour support: (843) 633-8648</a>
        <a href="mailto:hello@charlestoncleanroutine.com">hello@charlestoncleanroutine.com</a>
        <Link href="/contact">Online inquiry</Link>
      </footer>
      <Concierge />
    </main>
  );
}
