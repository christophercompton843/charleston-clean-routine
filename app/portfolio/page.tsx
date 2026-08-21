import type { Metadata } from "next";
import Link from "next/link";
import "./portfolio.css";

export const metadata: Metadata = {
  title: "Portfolio Care | Charleston Clean Routine",
  description: "Flexible, locally managed vacation-rental turnover and portfolio care for Charleston property managers, hosts, and owners.",
};

const capabilities = [
  ["Plan ahead", "Schedule recurring services for a season or the year, with property-specific routines established well in advance."],
  ["Change anytime", "Adjust a property plan as guest patterns, seasons, owner preferences, or operating needs change."],
  ["Property memory", "Keep each property’s scope, presentation details, access notes, amenities, and recurring requests organized."],
  ["Flexible requests", "Ask us to evaluate special additions—from printed guest notes to amenity placement and property-specific touches."],
  ["Sourcing + placement", "We can explore sourcing approved soaps, candles, room sprays, and guest amenities, or coordinate pickup and placement of client-supplied items."],
  ["One point of contact", "Call Chris or message us through the app. We work directly with you, your assistant, or your property manager."],
];

export default function PortfolioPage() {
  return (
    <main className="portfolio-page">
      <header className="portfolio-nav">
        <Link href="/" className="portfolio-logo"><img src="/charleston-clean-routine-logo.svg" alt="Charleston Clean Routine" /></Link>
        <Link href="/contact?topic=partnership" className="portfolio-nav-cta">Request a portfolio plan →</Link>
      </header>

      <section className="portfolio-hero">
        <p className="portfolio-kicker">Vacation rentals + property portfolios · Charleston</p>
        <h1>One less thing<br />on your list.</h1>
        <p className="portfolio-lede">Set your properties up for the season—or the year—and let us manage the recurring cleaning routine behind them. You keep control. We take one ongoing responsibility off your list.</p>
        <div className="portfolio-actions">
          <Link href="/contact?topic=partnership" className="portfolio-button">Build my portfolio plan →</Link>
          <a href="tel:+18436338648" className="portfolio-text-link">Call our Charleston team</a>
        </div>
      </section>

      <section className="portfolio-statement">
        <p>Predictability without inflexibility.</p>
        <h2>Set it and forget it—<br />until you want to change it.</h2>
        <div>
          <p>Guaranteed recurring services can be planned further ahead, giving your team time to tailor each property before the season begins and making annual budgets and property-level allocations easier to forecast.</p>
          <p>But advance planning never means being locked into a decision made months ago. Add something for the next six turnovers, make it an indefinite part of a property plan, change the instructions for one stay, or remove it when the season changes.</p>
        </div>
      </section>

      <section className="portfolio-capabilities">
        <div className="portfolio-section-heading">
          <p>Built around the way you operate</p>
          <h2>Your properties have history.<br />Your preferences have context.</h2>
        </div>
        <div className="portfolio-grid">
          {capabilities.map(([title, body], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-example">
        <div>
          <p className="portfolio-kicker">Personal when it matters</p>
          <h2>Tell us once.<br />We’ll work from there.</h2>
        </div>
        <blockquote>“Add a signature candle to six beach rentals for the next six turnovers.”</blockquote>
        <p>Call Chris or send the request through the app. We can review sourcing or coordinate client-supplied products, confirm the affected properties and duration, and work to incorporate the change into the service plan. The same approach can apply to printed guest notes, soaps, room sprays, welcome items, restocking preferences, presentation details, and other appropriate property-specific requests.</p>
      </section>

      <section className="portfolio-relationship">
        <div>
          <p className="portfolio-kicker">A dedicated team, not a corporate call center</p>
          <h2>We know your name.<br />We learn your properties.</h2>
        </div>
        <div className="portfolio-relationship-copy">
          <p>Whether you, your assistant, or your property manager is the point of contact, we work directly with whoever is on your team. You are not a distant account number routed through a national service center.</p>
          <p>Use the app and client portal for everyday convenience, 24/7 automated support when you need an immediate answer, and direct local support when a request needs context or judgment.</p>
          <strong>Sophisticated tools. Local people. Personal service.</strong>
        </div>
      </section>

      <section className="portfolio-brand">
        <p>Rooted in Charleston. Built for what’s next.</p>
        <h2>A modern local partner, built for the demands of modern property management.</h2>
        <p>Charleston Clean Routine combines respect for the history, character, and community we serve with technology designed to make recurring property care easier to manage.</p>
      </section>

      <section className="portfolio-volume">
        <p className="portfolio-kicker">Preferred portfolio care</p>
        <h2>More committed volume can create more value.</h2>
        <p>Portfolio pricing is prepared personally so we can account for the number of properties, expected service frequency, property size, turnover requirements, special requests, and add-ons. Larger recurring commitments may allow us to extend preferred pricing or service arrangements while preserving the property-specific care your portfolio requires.</p>
        <small>Portfolio pricing and special requests are subject to review, provider capability, availability, scope, cost, and service requirements. We confirm approved additions before they become part of a property plan.</small>
      </section>

      <section className="portfolio-final">
        <p>One portfolio. One service plan. Multiple ways to reach us.</p>
        <h2>Let us take one thing<br />off your list.</h2>
        <Link href="/contact?topic=partnership" className="portfolio-button portfolio-button-light">Request a personalized portfolio plan →</Link>
      </section>
    </main>
  );
}
