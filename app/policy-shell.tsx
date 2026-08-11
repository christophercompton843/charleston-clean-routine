import type { ReactNode } from "react";
import Link from "next/link";
import Concierge from "./concierge";

export default function PolicyShell({
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
    <main className="policy-page">
      <header className="policy-header">
        <Link href="/" aria-label="Charleston Clean Routine home">
          <img src="/charleston-clean-routine-logo.svg" alt="Charleston Clean Routine" />
        </Link>
        <Link className="button button-small" href="/#pricing-tool">Build my clean</Link>
      </header>
      <section className="policy-hero">
        <p className="eyebrow eyebrow-light">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
        <span>Last updated August 9, 2026</span>
      </section>
      <div className="policy-body">
        <nav aria-label="Customer policies">
          <span>Customer policies</span>
          <Link href="/privacy">Privacy Notice</Link>
          <Link href="/terms">Terms of Use</Link>
          <Link href="/cancellation-policy">Cancellation Policy</Link>
          <Link href="/service-policy">Service Policy</Link>
        </nav>
        <article>{children}</article>
      </div>
      <footer className="policy-footer">
        <span>© 2026 Charleston Clean Routine</span>
        <a href="tel:+18436338648">24-hour support: (843) 633-8648</a>
        <a href="mailto:hello@charlestoncleanroutine.com">hello@charlestoncleanroutine.com</a>
        <Link href="/contact">Online inquiry</Link>
      </footer>
      <Concierge />
    </main>
  );
}
