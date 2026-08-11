import PricePlanner from "./price-planner";
import LeadCapture from "./lead-capture";
import ReviewsSection from "./reviews-section";
import ServiceRolloutMap from "./service-rollout-map";
import Concierge from "./concierge";
import PortfolioPopup from "./portfolio-popup";

export const metadata = {
  title: "Charleston Clean Routine | Your Home, Handled",
  description:
    "Modern cleaning for Charleston-area apartments, condos, houses, townhomes, Airbnbs, and beach rentals. Upfront pricing and predictable service.",
};

const bookingUrl = "#pricing-tool";
const clientPortalUrl = "/login";
const rentalQuoteUrl = "#pricing-tool";
const phoneUrl = "tel:+18436338648";

const steps = [
  {
    number: "1",
    title: "Find",
    body: "See exactly what we clean, where we launch, and what the service includes.",
  },
  {
    number: "2",
    title: "Price",
    body: "Answer the details that affect the work and see your price online.",
  },
  {
    number: "3",
    title: "Book",
    body: "Choose an available arrival window and confirm without waiting for a callback.",
  },
  {
    number: "4",
    title: "Clean",
    body: "An experienced, screened, independently insured provider completes your routine.",
  },
  {
    number: "5",
    title: "Check",
    body: "Every full clean closes with a final review and The Charleston Finish.",
  },
  {
    number: "6",
    title: "Repeat",
    body: "Recurring visits stay on schedule, with account tools available when plans change.",
  },
];

const principles = [
  {
    label: "Clarity",
    title: "Know before you book.",
    body: "The service, price, arrival window, and payment process are clear from the start.",
  },
  {
    label: "Restraint",
    title: "Only what matters.",
    body: "No quote chasing, unnecessary messages, or complicated account management.",
  },
  {
    label: "Care",
    title: "Local and accountable.",
    body: "Charleston-focused coordination, professional standards, and human support when needed.",
  },
];

function BrandLogo({ footer = false, reversed = false }: { footer?: boolean; reversed?: boolean }) {
  return (
    <a
      className={footer ? "brand-logo footer-logo" : "brand-logo"}
      href="#top"
      aria-label="Charleston Clean Routine home"
    >
      <img
        src={reversed ? "/charleston-clean-routine-logo-reversed.svg" : "/charleston-clean-routine-logo.svg"}
        alt="Charleston Clean Routine — Look, Book, Pay, Clean"
      />
    </a>
  );
}

function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span className={`brand-mark ${className}`} aria-hidden="true">
      <img src="/charleston-clean-routine-monogram.svg" alt="" />
    </span>
  );
}

export default function Home() {
  return (
    <main id="top">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="site-chrome">
        <a className="launch-offer-bar" href="#recurring-offer">
          <strong>Launch offer</strong>
          <span>$35 off your first cleaning when you start a recurring plan.</span>
          <em>Claim offer →</em>
        </a>
        <header className="site-header">
          <BrandLogo />
          <nav aria-label="Primary navigation">
            <a href="#services">Services</a>
            <a href="#how-it-works">How it works</a>
            <a href="#rollout-map">Service area</a>
            <a href="#answers">FAQs</a>
          </nav>
          <div className="header-actions">
            <a className="header-contact" href={phoneUrl} aria-label="Call 24-hour automated support at 843-633-8648">(843) 633-8648</a>
            <a className="button button-small" href="#pricing-tool">
              Get my price <span aria-hidden="true">↓</span>
            </a>
          </div>
        </header>
      </div>

      <section className="hero" id="main-content">
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <div className="hero-glow hero-glow-two" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow eyebrow-light">
            <span /> Home + vacation-rental cleaning · Charleston area
          </p>
          <h1>Charleston cleaning,<br /><span>handled.</span></h1>
          <p className="hero-lede">
            Get an instant online price, choose your time, and keep your home on a
            reliable routine—launching first in Mount Pleasant, Daniel Island,
            Sullivan’s Island, and Isle of Palms.
          </p>
          <div className="hero-actions">
            <a className="button button-spark" href="#pricing-tool">
              Get my instant price <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-ghost" href={bookingUrl}>
              Start booking <span aria-hidden="true">↓</span>
            </a>
          </div>
          <a className="hero-offer" href="#recurring-offer">
            <span>$35</span>
            <p><strong>off your first cleaning</strong><small>when you begin recurring service</small></p>
            <i>Offer details →</i>
          </a>
          <div className="hero-proof" aria-label="Service promises">
            <p><strong>01</strong><span>Instant online<br />pricing</span></p>
            <p><strong>02</strong><span>Screened, experienced<br />providers</span></p>
            <p><strong>03</strong><span>Quality check +<br />recurring schedule</span></p>
          </div>
        </div>

        <div className="hero-visual" aria-label="A freshly reset Charleston home">
          <img src="/charleston-home-warm.jpg" alt="A warm, modern Charleston living room after a home reset" />
          <div className="hero-image-caption">
            <span>01 / The home reset</span>
            <strong>The quiet after.</strong>
            <p>Clear counters. Soft light. Your evening returned.</p>
          </div>
        </div>
      </section>

      <section className="promise-bar" aria-label="Charleston Clean Routine promise">
        <span className="promise-intro"><BrandMark />A simpler way home</span>
        <div><p>Price.</p><i /><p>Book.</p><i /><p>Clean.</p><i /><p>Check.</p><i /><p>Repeat.</p></div>
      </section>

      <section className="confidence-strip" aria-label="What customers can expect">
        <p><span>Price</span><strong>See the cost before you confirm.</strong></p>
        <p><span>Provider</span><strong>Experience, background, and insurance verified.</strong></p>
        <p><span>Quality</span><strong>Every full clean ends with The Charleston Finish.</strong></p>
        <p><span>Routine</span><strong>Future visits stay scheduled and easy to manage.</strong></p>
      </section>

      <section className="acquisition-loop" aria-labelledby="acquisition-loop-title">
        <div className="acquisition-loop-copy">
          <p className="eyebrow eyebrow-light">One system from search to next visit</p>
          <h2 id="acquisition-loop-title">Book once.<br />Keep life handled.</h2>
          <p>Charleston Clean Routine coordinates the customer journey from instant pricing through provider fulfillment, final quality review, and the next scheduled clean.</p>
          <a className="button button-spark" href="#pricing-tool">Price my cleaning →</a>
        </div>
        <ol className="acquisition-loop-steps">
          {steps.map((step) => (
            <li key={step.number}>
              <span>{step.number.padStart(2, "0")}</span>
              <div><strong>{step.title}</strong><small>{step.body}</small></div>
            </li>
          ))}
        </ol>
      </section>

      <section className="experience-strip" id="explore" aria-label="Explore the Charleston Clean Routine experience">
        <div className="experience-intro">
          <p className="eyebrow">The feeling we are after</p>
          <h2>Not spotless for show.<br />Reset for real life.</h2>
        </div>
        <div className="experience-paths">
          <a href="#services"><span>01</span><strong>The sink is empty.</strong><small>Explore home cleaning</small><i>↘</i></a>
          <a href="#how-it-works"><span>02</span><strong>The details are quiet.</strong><small>See how the routine works</small><i>↘</i></a>
          <a href="#our-story"><span>03</span><strong>The day feels lighter.</strong><small>Meet the thinking behind it</small><i>↘</i></a>
        </div>
      </section>

      <section className="principles-section" aria-label="Our service principles">
        <div className="section-heading compact-heading">
          <div className="heading-signature">
            <p className="eyebrow">The Clean Routine standard</p>
            <BrandMark className="brand-mark-spark" />
          </div>
          <h2>Simple on the surface.<br />Thoughtful underneath.</h2>
        </div>
        <div className="principle-grid">
          {principles.map((principle, index) => (
            <article key={principle.label}>
              <div className="principle-topline">
                <span className="principle-number">{index + 1}</span>
                <span className="principle-label">{principle.label}</span>
              </div>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="visual-proof-section" aria-label="The Charleston Clean Routine experience in three moments">
        <div className="visual-proof-heading">
          <div>
            <p className="eyebrow eyebrow-light">The routine, in view</p>
            <h2>Less to read.<br />More to feel.</h2>
          </div>
          <p>From the first step inside to the final quality check, every part of the service is designed to leave the space calm, composed, and ready.</p>
        </div>
        <div className="visual-proof-grid">
          <figure className="visual-proof-card visual-proof-arrival">
            <img src="/ccr-arrival-reset.jpg" alt="A bright Mount Pleasant entry and living area after a thoughtful home reset" />
            <figcaption><span>01 · Arrive</span><strong>Come home to calm.</strong><small>Clear surfaces, considered details, and the day returned to you.</small></figcaption>
          </figure>
          <figure className="visual-proof-card visual-proof-guest">
            <img src="/ccr-guest-ready.jpg" alt="A modern coastal vacation rental prepared for arriving guests" />
            <figcaption><span>02 · Welcome</span><strong>Ready before the knock.</strong><small>A guest-ready reset for coastal homes and vacation rentals.</small></figcaption>
          </figure>
          <figure className="visual-proof-card visual-proof-quality">
            <img src="/ccr-quality-check.jpg" alt="A cleaning professional completing a final quality check in a Charleston bathroom" />
            <figcaption><span>03 · Verify</span><strong>Quality, checked.</strong><small>The final review behind every Charleston Finish.</small></figcaption>
          </figure>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="section-heading split-heading">
          <div>
            <div className="heading-signature">
            <p className="eyebrow">One standard. Every kind of stay.</p>
              <BrandMark />
            </div>
            <h2>Made for the way<br />Charleston lives.</h2>
          </div>
          <p>
            From the home you live in to the property your guests arrive to,
            the right routine starts with understanding how the space is used.
          </p>
        </div>

        <div className="service-grid">
          <article className="service-card home-service">
            <div className="service-image">
              <img src="/charleston-home-warm.jpg" alt="Warm modern living room prepared for everyday life" />
              <span>01 · Home</span>
            </div>
            <div className="service-copy">
              <p className="card-kicker">For residents</p>
              <h3>Home Cleaning</h3>
              <p>
                One-time and recurring service for apartments, condos, houses,
                and townhomes—with the price shown before you confirm.
              </p>
              <div className="service-tags"><span>Routine</span><span>Deep clean</span><span>Move-in/out</span></div>
              <a className="card-link" href={bookingUrl}>
                Price my home clean <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>

          <article className="service-card rental-service">
            <div className="service-image">
              <img src="/charleston-rental-turnover.jpg" alt="Modern coastal rental bedroom prepared for arriving guests" />
              <span>02 · Stays</span>
            </div>
            <div className="service-copy">
              <p className="card-kicker">For hosts + property managers</p>
              <h3>Rental Turnovers</h3>
              <p>
                Guest-ready cleaning for Airbnbs, vacation homes, and beach
                rentals, shaped around the property and turnover window.
              </p>
              <div className="service-tags"><span>Airbnb</span><span>Beach homes</span><span>Host checklist</span></div>
              <a className="card-link" href={rentalQuoteUrl}>
                Build a turnover plan <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="signature-section" id="signature-finish">
        <div className="signature-visual" aria-label="The Charleston Finish completion card and wrapped peppermint">
          <div className="finish-card">
            <BrandMark />
            <span>THE CHARLESTON FINISH</span>
            <strong>Every detail, quietly handled.</strong>
            <small>Quality checked · reset · ready</small>
          </div>
          <div className="mint-wrapper" aria-hidden="true">
            <i />
            <b>C</b>
            <i />
          </div>
          <p>One small signal that the whole space has been considered.</p>
        </div>
        <div className="signature-copy">
          <div className="heading-signature">
            <p className="eyebrow">Our signature service ritual</p>
            <BrandMark className="brand-mark-spark" />
          </div>
          <h2>The clean ends.<br />The feeling stays.</h2>
          <p className="signature-lede">
            Every full cleaning concludes with The Charleston Finish: a final quality check,
            thoughtful room reset, and a sealed branded peppermint placed on a completion card
            in the kitchen or entry.
          </p>
          <div className="finish-options">
            <article>
              <span>Included</span>
              <h3>The Charleston Finish</h3>
              <p>Surfaces checked, pillows and towels reset, rooms composed, and the final detail placed.</p>
            </article>
            <article>
              <span>Focused visit</span>
              <h3>Refresh &amp; Reset</h3>
              <p>A lighter visit between full cleanings for kitchens, baths, floors, straightening, and bed presentation.</p>
            </article>
            <article>
              <span>Premium add-on</span>
              <h3>Deposit Ready Detail</h3>
              <p>Inside appliances, cabinets and drawers, baseboards, doors, trim, and inspection-focused detailing for move-outs.</p>
            </article>
          </div>
          <a className="inline-link" href="#pricing-tool">Add the right finish to my plan <span>→</span></a>
        </div>
      </section>

      <LeadCapture />

      <PricePlanner />

      <section className="process-section" id="how-it-works">
        <div className="section-heading process-heading">
          <p className="eyebrow eyebrow-light">The complete routine</p>
          <h2>A clear path<br />home.</h2>
          <p>Six connected steps. No quote chasing, schedule confusion, or starting over after every clean.</p>
        </div>
        <figure className="process-analogy">
          <img
            src="/clean-routine-process-relevant.jpg"
            alt="A Charleston cleaning professional completing the final reset in a sunlit kitchen"
          />
          <figcaption>One managed routine, from first click to next visit.</figcaption>
        </figure>
        <ol className="process-grid">
          {steps.map((step) => (
            <li key={step.number}>
              <span className="step-number" aria-label={`Step ${step.number}`}>{step.number}</span>
              <div className="step-signal"><i /></div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
        <div className="process-finish">
          <img src="/charleston-clean-routine-monogram.svg" alt="" />
          <p><strong>That’s the point.</strong> The cleaning can be thorough without the process becoming another chore to manage.</p>
          <a className="button button-light" href="#pricing-tool">Get my instant price →</a>
        </div>
      </section>

      <section className="story-section" id="our-story">
        <div className="story-intro">
          <div className="heading-signature">
            <p className="eyebrow">Our philosophy</p>
            <BrandMark className="brand-mark-spark" />
          </div>
          <h2>We built the cleaning company we wanted to book.</h2>
          <p className="story-lede">
            Professional enough to trust. Simple enough to disappear into your life.
          </p>
        </div>
        <div className="story-body">
          <p>
            Charleston homes have their own rhythm: downtown apartments,
            waterfront condos, family houses, workdays and school runs, beach
            sand, visiting family, and guests checking out while the next ones
            are already on the way. Reliable help should make that life
            lighter—not create more coordination.
          </p>
          <p>
            Charleston Clean Routine provides thoughtful, professional cleaning
            for homes, apartments, condos, townhomes, and vacation rentals
            throughout the Charleston area. Services include recurring cleaning,
            deep cleaning, move-in and move-out cleaning, vacation-rental
            turnovers, Refresh &amp; Reset visits, and Guest-Ready Turndown service.
            Our approach combines clear expectations, dependable care, and
            meticulous attention to detail. Every full cleaning concludes with
            The Charleston Finish—a final quality check and carefully presented
            space designed to feel calm, refreshed, and ready to enjoy. Your home,
            handled.
          </p>
          <blockquote>Less friction. More care. A home that feels handled.</blockquote>
          <a href="#pricing-tool" className="inline-link">Build the right clean for my home <span>→</span></a>
        </div>
        <div className="local-rhythm" aria-label="The Charleston realities built into our service">
          <p><span>01</span><strong>Salt + sand</strong><small>Beach days should not follow you through the house.</small></p>
          <p><span>02</span><strong>Every kind of home</strong><small>Studios, elevator buildings, condos, and historic houses each have their own rhythm.</small></p>
          <p><span>03</span><strong>Fast turnarounds</strong><small>Guest-ready means ready before the next knock.</small></p>
          <p><span>04</span><strong>Full lives</strong><small>The service fits your routine—not the other way around.</small></p>
        </div>
      </section>

      <section className="rhythm-section">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Built for real routines</p>
            <h2>Start once. Stay<br />consistently clean.</h2>
          </div>
          <p>Choose a one-time reset or a recurring cadence that fits the way your household actually lives.</p>
        </div>
        <div className="rhythm-grid">
          <article className="featured"><span>Most popular</span><h3>Every Other Week</h3><p>A dependable rhythm for kitchens, baths, floors, and dust.</p><i>Recommended</i></article>
          <article><span>More frequent</span><h3>Weekly</h3><p>For active homes that want less buildup between visits.</p></article>
          <article><span>Lighter cadence</span><h3>Every 4 Weeks</h3><p>A monthly reset that keeps the essentials from getting away.</p></article>
          <article><span>As needed</span><h3>One-Time</h3><p>A single reset for a busy stretch, event, or move.</p></article>
        </div>
      </section>

      <section className="routine-value-section" aria-labelledby="routine-value-title">
        <div className="routine-value-heading">
          <p className="eyebrow eyebrow-light">Professional care, made practical</p>
          <h2 id="routine-value-title">A professionally cleaned home—<br />made simple.</h2>
        </div>
        <div className="routine-value-copy">
          <p>
            Start with your first clean from just <strong>$94</strong>. Then, keep your home
            feeling calm, refreshed, and handled with a recurring Home Clean Routine
            starting at <strong>$123 per month</strong>.
          </p>
          <p>
            That’s about <strong>$4 a day</strong> for the comfort and peace of mind of a
            professionally maintained home—while supporting a locally owned Charleston
            business.
          </p>
          <div className="routine-value-close">
            <span>Simple pricing.</span><span>Dependable care.</span><span>Your home, handled.</span>
          </div>
          <small>
            Starting prices shown. Home size, service needs, condition, and selected
            add-ons may affect your total. First-clean pricing reflects the $35
            introductory offer with an eligible recurring plan.
          </small>
        </div>
      </section>

      <section className="recurring-offer-section" id="recurring-offer" aria-labelledby="recurring-offer-title">
        <div className="recurring-offer-value"><span>$</span><strong>35</strong><small>OFF</small></div>
        <div className="recurring-offer-copy">
          <p className="eyebrow">Recurring-service launch offer</p>
          <h2 id="recurring-offer-title">Start your routine.<br />Save on the first clean.</h2>
          <p>Receive $35 off your first cleaning when you begin weekly, every-other-week, or every-four-week recurring service.</p>
          <div className="offer-terms"><span>New residential customers</span><span>Recurring plans only</span><span>One offer per household</span></div>
        </div>
        <div className="recurring-offer-action">
          <a className="button button-spark" href={bookingUrl}>Choose my recurring plan →</a>
          <small>Enter code <strong>LAUNCH35</strong> at checkout. Valid on an initial recurring-plan cleaning of $119 or more. Cannot be combined with another promotion.</small>
        </div>
      </section>

      <ServiceRolloutMap />

      <section className="partner-section" id="portfolio-partners" aria-labelledby="partner-title">
        <div className="partner-copy">
          <p className="eyebrow eyebrow-light">For portfolios + trusted local professionals</p>
          <h2 id="partner-title">One contact.<br />Every property handled.</h2>
          <p>Realtors, property managers, management companies, hosts, and owners with multiple properties receive a tailored operating plan instead of repeating the same setup for every address.</p>
          <div className="partner-benefits">
            <span>Saved property scopes</span><span>Priority scheduling review</span><span>Consolidated communication</span><span>Turnover + maintenance routines</span>
          </div>
          <a className="button button-spark" href="/contact?topic=partnership">Request a portfolio plan →</a>
        </div>
        <div className="partner-card">
          <span>Portfolio care</span>
          <strong>Built for repeat work.</strong>
          <p>Tell us how many properties or clients you support, where they are, and how often service is needed. We will recommend the simplest workable structure.</p>
          <small>Single-property turnovers can still book through the standard online path.</small>
        </div>
      </section>

      <section className="provider-section" id="providers" aria-labelledby="provider-title">
        <div>
          <p className="eyebrow">Independent provider opportunities</p>
          <h2 id="provider-title">Do excellent work.<br />Keep your independence.</h2>
          <p>Charleston Clean Routine is building a selective network of experienced cleaning professionals who value clear scopes, respectful communication, organized scheduling, and quality work.</p>
          <a className="button" href="/contact?topic=provider">See provider opportunities →</a>
        </div>
        <div className="provider-benefit-grid">
          <article><span>01</span><strong>Clear before arrival</strong><p>Property details, selected scope, timing, and customer notes are organized before the visit.</p></article>
          <article><span>02</span><strong>Professional standards</strong><p>A polished local brand, defined expectations, and a final quality process support excellent work.</p></article>
          <article><span>03</span><strong>Flexible opportunities</strong><p>Accepted independent providers choose availability and receive assignments that fit their coverage.</p></article>
          <article><span>04</span><strong>Less admin friction</strong><p>Scheduling, job records, checklists, and provider-pay calculations stay in one operating system.</p></article>
        </div>
      </section>

      <ReviewsSection />

      <section className="helpful-section" id="helpful">
        <div className="section-heading split-heading">
          <div><p className="eyebrow">Useful, not overwhelming</p><h2>Everything you need.<br />Nothing you don’t.</h2></div>
          <p>Clear guidance before the first visit, whether we are cleaning your home or preparing a rental for its next guest.</p>
        </div>
        <div className="resource-grid">
          <a className="resource-scope" href={bookingUrl}><span>Service guide · 01</span><em>Room by room</em><h3>What’s included?</h3><p>Start the single booking path and choose the exact scope before checkout.</p><i>→</i></a>
          <a className="resource-prep" href="/service-policy"><span>First visit · 02</span><em>Ten easy minutes</em><h3>Prep without overthinking.</h3><p>Secure pets, clear fragile items, and tell us your priority area.</p><i>→</i></a>
          <a className="resource-host" href={rentalQuoteUrl}><span>For hosts · 03</span><em>Between every guest</em><h3>A smoother turnover.</h3><p>Plan timing, linens, restocking, and property-specific details.</p><i>→</i></a>
        </div>
      </section>

      <section className="client-tools-section" id="client-tools">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Client tools</p>
            <h2>The practical details,<br />kept in one place.</h2>
          </div>
          <p>Manage an existing visit, check whether your address is in our Charleston-area coverage, or reach our 24-hour automated support without starting a new booking.</p>
        </div>
        <div className="client-tool-grid">
          <a href={clientPortalUrl}>
            <span>01 · Existing clients</span>
            <h3>Manage my booking</h3>
            <p>View appointment details and use the account tools connected to your booking.</p>
            <strong>Open client portal ↗</strong>
          </a>
          <a href="/service-area">
            <span>02 · Before booking</span>
            <h3>Check service area</h3>
            <p>Enter a ZIP code before continuing to pricing and availability.</p>
            <strong>Check my ZIP →</strong>
          </a>
          <a href={phoneUrl}>
            <span>03 · 24-hour support</span>
            <h3>Call Claire, our virtual receptionist</h3>
            <p>Get answers, booking help, or leave a message for our Charleston team—24 hours a day.</p>
            <strong>(843) 633-8648 →</strong>
          </a>
        </div>
        <div className="booking-reassurance" aria-label="Booking reassurance">
          <p><span>Account</span><strong>Manage details online</strong></p>
          <p><span>Pricing</span><strong>Review before confirming</strong></p>
          <p><span>Payment</span><strong>Secure card handling</strong></p>
          <p><span>Support</span><strong>Automated help, 24 hours a day</strong></p>
        </div>
      </section>

      <section className="faq-section" id="answers">
        <div className="faq-heading">
          <p className="eyebrow">Clear answers</p>
          <h2>Before you book.</h2>
          <p>Need help? <a href={phoneUrl}>Call (843) 633-8648 for 24-hour automated support.</a></p>
        </div>
        <div className="faq-list">
          <details open><summary>Do you clean apartments and condos?</summary><p>Yes. We clean Charleston-area apartments, condos, townhomes, and houses—from studios to larger full-service residences. Share any front-desk, parking, elevator, or building-access instructions when booking so arrival is smooth.</p></details>
          <details><summary>Do you clean Airbnbs and beach rental homes?</summary><p>Yes. We offer turnover cleaning for Charleston-area Airbnbs, vacation rentals, and beach houses. Each property is quoted around its size, guest window, checklist, and optional linen or restocking needs.</p></details>
          <details><summary>What is The Charleston Finish?</summary><p>It is our included closing ritual for every full cleaning: a final quality check, thoughtful room presentation, and a sealed, xylitol-free branded peppermint placed on a completion card in the kitchen or entry—not on bedding.</p></details>
          <details><summary>Can I add a focused refresh or move-out detail?</summary><p>Yes. Refresh &amp; Reset is a focused visit between full cleanings. Deposit Ready Detail adds inspection-focused work to a Move-In/Move-Out Clean, including inside appliances, cabinets and drawers, baseboards, doors, and trim.</p></details>
          <details><summary>When is my card charged?</summary><p>A temporary authorization may be placed up to 48 hours before service. The final card charge is processed after the cleaning is completed.</p></details>
          <details><summary>How does the $35 recurring-service offer work?</summary><p>New residential customers receive $35 off their initial cleaning when beginning weekly, every-other-week, or every-four-week recurring service. Enter code <strong>LAUNCH35</strong> at checkout. The initial cleaning must total at least $119. The offer is limited to one per household and cannot be combined with another promotion.</p></details>
          <details><summary>Who will clean my home?</summary><p>Every approved provider must demonstrate residential-cleaning experience, complete a background screening, and maintain independently verified liability insurance before accepting assignments.</p></details>
          <details><summary>Can I reschedule or cancel online?</summary><p>Yes. Changes made more than 24 hours before the appointment are free. A $35 rescheduling fee or the applicable late-cancellation fee may apply inside the 24-hour window.</p></details>
          <details><summary>What areas do you serve?</summary><p>We serve Charleston and nearby communities based on provider coverage. Enter your service address when booking, or contact us to confirm coverage for a vacation-rental property.</p></details>
          <details><summary>What if something was missed?</summary><p>Tell us promptly. We will review the concern and, when appropriate, coordinate a corrective visit so the service is handled fairly and clearly.</p></details>
        </div>
      </section>

      <section className="final-cta" id="book">
        <img
          className="final-cta-logo"
          src="/charleston-clean-routine-logo-reversed.svg"
          alt="Charleston Clean Routine — Look, Book, Pay, Clean"
        />
        <p className="eyebrow eyebrow-light">Your home, handled</p>
        <h2>Ready for one less thing<br />on your list?</h2>
        <p>See your price, choose a time, and save $35 with code <strong>LAUNCH35</strong> when you start a recurring home-cleaning plan.</p>
        <div>
          <a className="button button-light" href="#pricing-tool">Get my instant price →</a>
          <a className="button button-ghost" href={rentalQuoteUrl}>Rental turnover quote →</a>
        </div>
      </section>

      <footer>
        <div className="footer-top">
          <BrandLogo footer reversed />
          <p>Upfront pricing. Predictable service.<br />Essential updates only.</p>
        </div>
        <div className="footer-links">
          <div><span>Services</span><a href={bookingUrl}>Home cleaning →</a><a href={rentalQuoteUrl}>Rental turnovers</a><a href="#signature-finish">Signature finish</a><a href="#pricing-tool">Start booking</a></div>
          <div><span>Client tools</span><a href={clientPortalUrl}>Account access</a><a href="/service-area">Check service area</a><a href="/contact">Contact our team</a><a href="#answers">FAQs</a></div>
          <div><span>Connect</span><a href={phoneUrl}>24-hour support · (843) 633-8648</a><a href="mailto:hello@charlestoncleanroutine.com">Email us</a><a href="/contact">Online inquiry</a><a href="/contact?topic=provider">Become a provider</a></div>
        </div>
        <div className="footer-legal"><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/cancellation-policy">Cancellation</a><a href="/service-policy">Service policy</a><a href="/review">Share feedback</a><a href="/login">Account access</a></div>
        <div className="footer-bottom"><span>© 2026 Charleston Clean Routine</span><span>Charleston, South Carolina</span></div>
      </footer>
      <nav className="mobile-action-dock" aria-label="Quick inquiry and booking">
        <a href={phoneUrl}>Call 24/7 <span aria-hidden="true">→</span></a>
        <a href="#pricing-tool">Get my price <span aria-hidden="true">→</span></a>
      </nav>
      <Concierge />
      <PortfolioPopup />
    </main>
  );
}
