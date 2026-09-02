import PricePlanner from "./price-planner";
import ReviewsSection from "./reviews-section";
import ServiceScope from "./service-scope";
import Concierge from "./concierge";
import BrandFilm from "./brand-film";

export const metadata = {
  title: "House Cleaning Charleston SC | Charleston Clean Routine",
  description:
    "Professional house cleaning in Charleston, SC, plus vacation-rental care, Airbnb cleaning, and coordinated portfolio service. See what is included, build your estimate, and book online.",
};

const phoneUrl = "tel:+18436338648";
const clientPortalUrl = "/login";
const providerApplicationUrl = "/provider-application";

function BrandLogo({ footer = false }: { footer?: boolean }) {
  return (
    <a className={footer ? "brand-logo footer-logo" : "brand-logo"} href="#top" aria-label="Charleston Clean Routine home">
      <img src="/ccr-logo-primary.webp" alt="Charleston Clean Routine — Your Home, Handled." />
    </a>
  );
}

export default function Home() {
  return (
    <main id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="site-chrome"><header className="site-header"><BrandLogo /><nav aria-label="Primary navigation"><a href="#your-choice">Services</a><a href="#whats-included">What&apos;s Included</a><a href="#our-story">Our Standard</a><a href="#client-tools">Client Portal</a></nav><div className="header-actions"><a className="button button-small" href="#pricing-tool">Build My Routine</a></div></header></div>

      <section className="hero" id="main-content">
        <div className="hero-copy">
          <p className="eyebrow eyebrow-light"><span /> One less thing on your list</p>
          <h1>Your home,<br /><span>handled.</span></h1>
          <p className="hero-lede">Professional home cleaning, vacation-rental care, and property services throughout Charleston.</p>
          <p className="hero-support">See what&apos;s included. Build your service. Know your price. Book when you&apos;re ready.</p>
          <div className="hero-actions"><a className="button button-spark" href="#pricing-tool">Build My Routine</a><a className="button button-ghost" href="#your-choice">Explore Services</a></div>
          <div className="hero-proof" aria-label="Charleston Clean Routine experience"><p><span>01</span><strong>Clear scope</strong></p><p><span>02</span><strong>Reliable care</strong></p><p><span>03</span><strong>Documented finish</strong></p></div>
        </div>
        <div className="hero-visual" aria-label="Charleston residence, coastal vacation home, and multifamily property">
          <img src="/ccr-hero-final.jpg" alt="Charleston residence, coastal vacation home, and multifamily property representing Charleston Clean Routine services" />
          <div className="hero-image-caption"><span>The Charleston Finish</span><strong>Clean. Documented. Secured. Cared for.</strong></div>
        </div>
      </section>

      <nav className="journey-bar" aria-label="Your Charleston Clean Routine journey"><a href="#your-choice"><span>01</span>Your Choice</a><a href="#whats-included"><span>02</span>The Details</a><a href="#whats-included"><span>03</span>Service Levels</a><a href="#pricing-tool"><span>04</span>The Options</a><a href="#our-story"><span>05</span>Our Promise</a><a href="#pricing-tool"><span>06</span>Build Your Routine</a><a href="#client-tools"><span>07</span>What to Expect</a></nav>
      <BrandFilm />

      <section className="services-section" id="your-choice" aria-labelledby="services-title">
        <div className="section-heading split-heading"><div><p className="eyebrow">Your Choice</p><h2 id="services-title">What do you need<br />handled?</h2></div><p>Choose the property or service that fits. We&apos;ll show you what&apos;s included, what can be added, how pricing works, and what happens next.</p></div>
        <div className="service-grid">
          <article className="service-card home-service" id="home-cleaning"><div className="service-image"><img src="/charleston-home-warm.jpg" alt="Charleston residence prepared for everyday living" /><span>Home</span></div><div className="service-copy"><p className="card-kicker">For the place you call home</p><h3>Home Cleaning</h3><p>Routine, Deep, and Move-In / Move-Out cleaning for homes, apartments, condominiums, townhomes, and second homes.</p><div className="service-tags"><span>Routine</span><span>Deep</span><span>Move-In / Out</span><span>Recurring</span></div><div className="hero-actions"><a className="button button-small" href="#whats-included">See What&apos;s Included</a><a className="button button-small" href="#pricing-tool">Build My Routine</a></div></div></article>
          <article className="service-card rental-service" id="vacation-rental-cleaning"><div className="service-image"><img src="/charleston-rental-turnover.jpg" alt="Charleston vacation rental prepared for arriving guests" /><span>Vacation Rental</span></div><div className="service-copy"><p className="card-kicker">For vacation homes + managed short-term rentals</p><h3>Vacation Rental Care</h3><p>Turnover cleaning, deep resets, arrival preparation, and property-specific care for vacation homes and managed rentals.</p><div className="service-tags"><span>Turnover</span><span>Deep Reset</span><span>Arrival Prep</span><span>Add-Ons</span></div><div className="hero-actions"><a className="button button-small" href="/services/vacation-rental-cleaning-charleston-sc">Explore Rental Care</a><a className="button button-small" href="/portfolio">Build My Rental Plan</a></div></div></article>
          <article className="service-card rental-service" id="airbnb-care"><div className="service-image"><img src="/ccr-guest-ready.jpg" alt="Guest-ready Airbnb bedroom prepared for check-in" /><span>Airbnb</span></div><div className="service-copy"><p className="card-kicker">For hosts who want reliable care already in place</p><h3>Airbnb Care</h3><p>Reliable turnover and property-readiness service that can adapt with your booking calendar throughout the year.</p><div className="service-tags"><span>Turnover</span><span>Bed Setup</span><span>Restocking Coordination</span><span>Reporting</span></div><div className="hero-actions"><a className="button button-small" href="/services/airbnb-cleaning-charleston-sc">Explore Airbnb Care</a><a className="button button-small" href="/portfolio">Build My Airbnb Plan</a></div></div></article>
          <article className="service-card home-service" id="portfolio-service-card"><div className="service-image"><img src="/downtown%20condo.png" alt="Charleston residential property suited to coordinated portfolio care" /><span>Portfolio</span></div><div className="service-copy"><p className="card-kicker">For owners, property managers + multi-property operators</p><h3>Portfolio Care</h3><p>Coordinated service for multiple homes, units, or properties—one relationship, with each property managed according to its own requirements.</p><div className="service-tags"><span>Property Plans</span><span>Central Scheduling</span><span>Quality Oversight</span><span>Scalable</span></div><div className="hero-actions"><a className="button button-small" href="#portfolio-partners">See Portfolio Care</a><a className="button button-small" href="/portfolio">Build My Property Plan</a></div></div></article>
        </div>
      </section>

      <ServiceScope />
      <PricePlanner />

      <section className="partner-section" id="portfolio-partners" aria-labelledby="partner-title"><div className="partner-copy"><p className="eyebrow eyebrow-light">Portfolio Care</p><h2 id="partner-title">Different homes.<br />One standard of care.</h2><p>Whether you manage two residences or a larger property portfolio, each address keeps its own service level, schedule, access instructions, and property requirements—organized under one relationship.</p><div className="partner-benefits"><span>Property-specific plans</span><span>Centralized scheduling</span><span>Consistent standards</span><span>Documented completion</span><span>Consolidated communication</span></div><div className="hero-actions"><a className="button button-spark" href="/portfolio">Build My Property Plan</a><a className="button button-ghost" href="/contact?topic=portfolio">Request a Portfolio Proposal</a></div></div><div className="partner-card"><span>What happens next</span><strong>A clear plan, not a generic inquiry.</strong><p>Tell us about the properties. We organize the requirements, identify what can be standardized and what should remain property-specific, and return a plan that is easy to manage.</p><small>If clarification is needed, we contact you only about what is required to complete the plan.</small></div></section>

      <section className="principles-section" id="our-story" aria-labelledby="why-title"><div className="section-heading compact-heading"><p className="eyebrow">Built the way we wanted to book it</p><h2 id="why-title">Simple because the complexity is already handled.</h2><p>Clear choices, defined standards, useful communication, and accountable completion—without making you supervise a service you hired us to manage.</p></div><div className="principle-grid"><article><span className="principle-label">Clarity</span><h3>Know before you book.</h3><p>What the service includes, what it costs, and what happens next.</p></article><article><span className="principle-label">Reliability</span><h3>A process built for consistency.</h3><p>Defined standards and property-specific instructions guide every visit.</p></article><article><span className="principle-label">Proof</span><h3>Completion is documented.</h3><p>Checklists, final review, and service documentation create accountability.</p></article><article><span className="principle-label">Discretion</span><h3>Communicate with purpose.</h3><p>We contact you when something matters. We do not make you supervise a service you hired us to manage.</p></article></div></section>

      <ReviewsSection />

      <section className="client-tools-section" id="client-tools"><div className="section-heading split-heading"><div><p className="eyebrow">Your Client Portal</p><h2>Your service,<br />in one place.</h2></div><p>After booking, your Client Portal becomes the place to manage the appointment and account tools available for your service.</p></div><div className="client-tool-grid"><a href={clientPortalUrl}><span>Existing clients</span><h3>Manage My Account</h3><p>Open the secure Client Portal to manage the appointment and account tools available for your service.</p><small>Your portal access is connected to your activated client account.</small><strong>Open Client Portal →</strong></a><a href="/service-area"><span>Before booking</span><h3>Check Service Area</h3><p>Confirm whether your Charleston-area address is currently covered.</p><strong>Check My Address →</strong></a><a href="/contact"><span>Need help?</span><h3>Get Help Online</h3><p>Send the question or service issue the site or Client Portal did not resolve.</p><strong>Contact Support →</strong></a></div></section>

      <section className="faq-section" id="answers"><div className="faq-heading"><p className="eyebrow">Clear answers</p><h2>Before you book.</h2><p>The information that matters before you commit.</p></div><div className="faq-list"><details open><summary>What is included in my cleaning?</summary><p>Use the interactive room-by-room guide above to compare Routine, Deep, and Move-In / Move-Out cleaning. The service you confirm becomes the scope your cleaning professional follows.</p></details><details><summary>Why do you ask for information before showing my estimate?</summary><p>The details we request affect the scope and allow us to save your selections. Our goal is to give you a useful estimate upfront rather than a generic starting price that changes later.</p></details><details><summary>Why might Charleston Clean Routine cost more than another service?</summary><p>We price the service to support the time, standards, documentation, and professional compensation needed to do the work properly. We do not build the model around rushed appointments or artificially low introductory pricing.</p></details><details><summary>Do you clean Airbnbs and vacation rentals?</summary><p>Yes. We provide turnover, property-readiness, deep-reset, and related services for Airbnbs, vacation homes, and managed short-term rentals.</p></details><details><summary>Who will clean my home?</summary><p>Assignments are made to approved cleaning professionals who meet Charleston Clean Routine screening, documentation, and service-standard requirements.</p></details><details><summary>What happens if something is missed?</summary><p>Tell us. We review what happened, address what needs correction, and close the loop. You should not have to manage our mistake for us.</p></details><details><summary>Will I get constant texts and updates?</summary><p>No. We communicate when the information is useful: confirmations, necessary reminders, completion information, or something that requires your attention.</p></details><details><summary>Can I call Charleston Clean Routine?</summary><p>Yes. For pricing, booking, service-area checks, and account management, the website and Client Portal are usually the fastest route. If you specifically need phone support, call <a href={phoneUrl}>(843) 633-8648</a>.</p></details></div></section>

      <section className="final-cta" id="book"><p className="eyebrow eyebrow-light">One less thing on your list</p><h2>Your home, handled.</h2><p>See what&apos;s included. Build your service. Know your price. Book when you&apos;re ready.</p><div><a className="button button-spark" href="#pricing-tool">Build My Routine</a><a className="button button-ghost" href="#your-choice">Explore Services</a></div></section>

      <footer><div className="footer-top"><BrandLogo footer /><p>Clear service. Thoughtful communication. Reliable follow-through.<br /><strong>Your home, handled.</strong></p></div><div className="footer-links"><div><span>Start</span><a href="#your-choice">Services</a><a href="#whats-included">What&apos;s Included</a><a href="#pricing-tool">Build My Routine</a><a href="/service-area">Service Area</a></div><div><span>Account</span><a href={clientPortalUrl}>Client Portal</a><a href="/contact">Contact</a><a href={providerApplicationUrl}>Provider Opportunities</a></div><div><span>Charleston Clean Routine</span><a href="/services/vacation-rental-cleaning-charleston-sc">Vacation Rental Care</a><a href="/services/airbnb-cleaning-charleston-sc">Airbnb Care</a><a href="/portfolio">Portfolio Care</a></div></div><div className="footer-legal"><a href="/terms">Terms</a><a href="/privacy">Privacy</a><a href="/cancellation-policy">Cancellation Policy</a><a href="/service-policy">Service Standards</a></div><div className="footer-bottom"><span>© 2026 Charleston Clean Routine LLC</span><span>Charleston, South Carolina</span></div></footer>
      <Concierge />
    </main>
  );
}