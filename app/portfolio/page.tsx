import type { Metadata } from "next";
import Link from "next/link";
import "./portfolio.css";

export const metadata: Metadata = {
  title: "Vacation Rental Cleaning & Portfolio Care | Charleston Clean Routine",
  description: "Vacation-rental and Airbnb turnover cleaning, guest-ready presentation, and coordinated multi-property care for Charleston owners, hosts, and property managers.",
  alternates: { canonical: "/portfolio" },
};

const capabilities = [
  ["Turnover cleaning", "Reliable guest-to-guest cleaning shaped around each property, its checkout window, and its saved requirements."],
  ["Guest-ready presentation", "Property resets, presentation details, and property-specific finishing touches before the next arrival."],
  ["Plan ahead", "Schedule recurring services for a season or the year, with property-specific routines established well in advance."],
  ["Change as needed", "Adjust a property plan as guest patterns, seasons, owner preferences, or operating needs change."],
  ["Property memory", "Keep each property’s scope, presentation details, access notes, amenities, and recurring requests organized."],
  ["Custom property support", "Ask us to evaluate appropriate additions—from printed guest notes and restocking coordination to amenity sourcing, pickup, and placement."],
];

export default function PortfolioPage() {
  return (
    <main className="portfolio-page">
      <header className="portfolio-nav">
        <Link href="/" className="portfolio-logo"><img src="/charleston-clean-routine-logo.svg" alt="Charleston Clean Routine" /></Link>
        <Link href="/contact?topic=partnership" className="portfolio-nav-cta">Request vacation-rental service →</Link>
      </header>

      <section className="portfolio-hero">
        <div className="portfolio-hero-copy">
          <p className="portfolio-kicker">Short-term + vacation rental property services · Charleston</p>
          <h1>Turnovers handled.<br /><span>Properties ready.</span></h1>
          <p className="portfolio-lede">Turnover cleaning, guest-ready presentation, recurring property care, and custom support for Charleston vacation rentals—from one property to an entire group of homes.</p>
          <div className="portfolio-service-chips" aria-label="Vacation rental services">
            <span>Turnover cleaning</span><span>Guest-ready presentation</span><span>Deep cleaning</span><span>Restocking coordination</span><span>Amenity placement</span><span>Custom requests</span>
          </div>
          <div className="portfolio-actions">
            <Link href="/contact?topic=partnership" className="portfolio-button">Tell us about my rentals →</Link>
            <Link href="/service-area" className="portfolio-text-link">Check service at my address</Link>
          </div>
        </div>
        <figure className="portfolio-hero-visual">
          <img src="/charleston-rental-turnover.jpg" alt="A clean, guest-ready Charleston vacation rental prepared for the next arrival" />
          <figcaption><span>Vacation rental care</span><strong>Ready before the next guest arrives.</strong></figcaption>
        </figure>
      </section>

      <section className="portfolio-definition" aria-labelledby="portfolio-definition-title">
        <div>
          <p className="portfolio-kicker">What is Portfolio Care?</p>
          <h2 id="portfolio-definition-title">Multiple rentals.<br />One coordinated plan.</h2>
        </div>
        <div className="portfolio-definition-copy">
          <p><strong>If you manage more than one property, Portfolio Care is simply our multiple-property service.</strong> Instead of booking and explaining every rental separately, we learn each property once, save its requirements, and coordinate the ongoing cleaning routine with you.</p>
          <p>Each home can still have its own turnover schedule, cleaning scope, access instructions, linen needs, restocking preferences, guest amenities, and special requests. You get one local relationship for the group.</p>
          <div className="portfolio-definition-paths"><span><b>1 property</b> Vacation-rental service</span><span><b>Multiple properties</b> Portfolio Care</span></div>
        </div>
      </section>

      <section className="portfolio-statement">
        <p>One less thing on your list.</p>
        <h2>Set it and forget it—<br />until you want to change it.</h2>
        <div>
          <p>Recurring services can be planned further ahead, giving your team time to tailor each property before the season begins and making annual budgets and property-level allocations easier to forecast.</p>
          <p>But advance planning never means being locked into a decision made months ago. Add something for the next six turnovers, make it an indefinite part of a property plan, change the instructions for one stay, or remove it when the season changes.</p>
        </div>
      </section>

      <section className="portfolio-capabilities">
        <div className="portfolio-section-heading">
          <p>Short-term + vacation rental services</p>
          <h2>Cleaning is the foundation.<br />We can handle more around it.</h2>
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
        <p>Send the request through your Client Portal or our online contact path. We can review sourcing or coordinate client-supplied products, confirm the affected properties and duration, and work to incorporate the change into the service plan. The same approach can apply to printed guest notes, soaps, room sprays, welcome items, restocking preferences, presentation details, and other appropriate property-specific requests.</p>
      </section>

      <section className="portfolio-relationship">
        <div>
          <p className="portfolio-kicker">Technology for the routine. People when context matters.</p>
          <h2>We learn your properties.<br />You keep control.</h2>
        </div>
        <div className="portfolio-relationship-copy">
          <p>Whether you, your assistant, or your property manager is the point of contact, the property plan keeps requirements organized without forcing your team to repeat the same information for every turnover.</p>
          <p>Use the Client Portal for the account and appointment tools enabled for your service, the AI concierge for immediate guidance, and online support when a request needs context, review, or judgment. Phone support remains available when the digital path is not enough.</p>
          <strong>Sophisticated tools. Local accountability. Personal service.</strong>
          <div className="portfolio-actions" style={{ marginTop: "22px" }}>
            <a className="portfolio-button" href="https://www.jointidywise.com/portal/login" target="_blank" rel="noreferrer">Open Client Portal ↗</a>
            <a className="portfolio-text-link" href="/portfolio-care-guide/download">Download Portfolio Care Guide ↓</a>
            <a className="portfolio-text-link" href="/portfolio-care-guide">View online guide →</a>
          </div>
        </div>
      </section>

      <section className="portfolio-brand">
        <p>Rooted in Charleston. Built for what’s next.</p>
        <h2>A modern local partner, built for the demands of modern property management.</h2>
        <p>Charleston Clean Routine combines respect for the history, character, and community we serve with technology designed to make recurring property care easier to manage.</p>
      </section>

      <section className="portfolio-volume">
        <p className="portfolio-kicker">Preferred multiple-property care</p>
        <h2>More committed volume can create more value.</h2>
        <p>Vacation-rental pricing is prepared personally so we can account for the number of properties, expected service frequency, property size, turnover requirements, special requests, and add-ons. Larger recurring commitments may allow us to extend preferred pricing or service arrangements while preserving the property-specific care your rentals require.</p>
        <small>Pricing and special requests are subject to review, provider capability, availability, scope, cost, and service requirements. We confirm approved additions before they become part of a property plan.</small>
      </section>

      <section className="portfolio-final">
        <p>Vacation rental cleaning · One property or many</p>
        <h2>Let us take one thing<br />off your list.</h2>
        <Link href="/contact?topic=partnership" className="portfolio-button portfolio-button-light">Request personalized rental service →</Link>
      </section>
    </main>
  );
}
