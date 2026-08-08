import PricePlanner from "./price-planner";

export const metadata = {
  title: "Charleston Clean Routine | Your Home, Handled",
  description:
    "Modern cleaning for Charleston-area apartments, condos, houses, townhomes, Airbnbs, and beach rentals. Upfront pricing and predictable service.",
};

const bookingUrl =
  "https://charlestoncleanroutine.bookingkoala.com/booknow?embed=true";
const rentalQuoteUrl = "#pricing-tool";

const steps = [
  {
    number: "1",
    title: "Look",
    body: "Tell us about the space. We ask only what changes the work or the price.",
  },
  {
    number: "2",
    title: "Book",
    body: "See your price, choose an available arrival window, and confirm online.",
  },
  {
    number: "3",
    title: "Pay",
    body: "Your saved card is securely charged after the service is completed.",
  },
  {
    number: "4",
    title: "Clean",
    body: "We complete the work, quality-check the space, and leave it with The Charleston Finish.",
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

function BrandLogo({ footer = false }: { footer?: boolean }) {
  return (
    <a
      className={footer ? "brand-logo footer-logo" : "brand-logo"}
      href="#top"
      aria-label="Charleston Clean Routine home"
    >
      <img
        src="/charleston-clean-routine-logo.svg"
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
        <header className="site-header">
          <BrandLogo />
          <nav aria-label="Primary navigation">
            <a href="#explore">Explore</a>
            <a href="#services">Services</a>
            <a href="#how-it-works">How it works</a>
            <a href="#our-story">Our story</a>
            <a href="#answers">Answers</a>
          </nav>
          <a className="button button-small" href={bookingUrl} target="_blank" rel="noreferrer">
            Book now <span aria-hidden="true">↗</span>
          </a>
        </header>
      </div>

      <section className="hero" id="main-content">
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <div className="hero-glow hero-glow-two" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow eyebrow-light">
            <span /> Housekeeping, rethought for Charleston
          </p>
          <h1>Your home,<br /><span>handled.</span></h1>
          <p className="hero-lede">
            Come home to the part you enjoy. We make cleaning feel like a
            quiet system running in the background—thoughtful, predictable,
            and shaped around the way your space is actually lived in.
          </p>
          <div className="hero-actions">
            <a className="button button-spark" href="#pricing-tool">
              Build my clean <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-ghost" href="#explore">
              Explore the routine <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="hero-proof" aria-label="Service promises">
            <p><strong>01</strong><span>Price shown<br />before booking</span></p>
            <p><strong>02</strong><span>Clear arrival<br />window</span></p>
            <p><strong>03</strong><span>Human help<br />when needed</span></p>
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
        <div><p>Look.</p><i /><p>Book.</p><i /><p>Pay.</p><i /><p>Clean.</p></div>
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
              <a className="card-link" href={bookingUrl} target="_blank" rel="noreferrer">
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
              <h3>Guest-Ready Turndown</h3>
              <p>Elevated bed, bath, towel, kitchen, and approved amenity presentation for homes and guest stays.</p>
            </article>
          </div>
          <a className="inline-link" href="#pricing-tool">Add the right finish to my plan <span>→</span></a>
        </div>
      </section>

      <PricePlanner />

      <section className="process-section" id="how-it-works">
        <div className="section-heading process-heading">
          <p className="eyebrow eyebrow-light">The complete routine</p>
          <h2>A clear path<br />home.</h2>
          <p>Four simple handoffs. No calls to coordinate, price mystery, or cash at the door.</p>
        </div>
        <figure className="process-analogy">
          <img
            src="/clean-routine-process-relevant.jpg"
            alt="A Charleston cleaning professional completing the final reset in a sunlit kitchen"
          />
          <figcaption>Four clear steps. One home that feels reset.</figcaption>
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
          <p><strong>That’s the point.</strong> The cleaning can be thorough without the process becoming another chore.</p>
          <a className="button button-light" href={bookingUrl} target="_blank" rel="noreferrer">Start my routine ↗</a>
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
            So we designed Charleston Clean Routine around certainty. You tell
            us what matters, see the price, choose a time, and receive the
            updates you actually need. Behind that calm experience are clear
            standards, local coordination, and independent cleaning
            professionals who understand the work.
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
          <article><span>As needed</span><h3>One-Time</h3><p>A single reset for a busy stretch, event, or move.</p></article>
          <article className="featured"><span>Most popular</span><h3>Every Other Week</h3><p>A dependable rhythm for kitchens, baths, floors, and dust.</p><i>Recommended</i></article>
          <article><span>More frequent</span><h3>Weekly</h3><p>For active homes that want less buildup between visits.</p></article>
          <article><span>Lighter cadence</span><h3>Every 4 Weeks</h3><p>A monthly reset that keeps the essentials from getting away.</p></article>
        </div>
      </section>

      <section className="helpful-section" id="helpful">
        <div className="section-heading split-heading">
          <div><p className="eyebrow">Useful, not overwhelming</p><h2>Everything you need.<br />Nothing you don’t.</h2></div>
          <p>Clear guidance before the first visit, whether we are cleaning your home or preparing a rental for its next guest.</p>
        </div>
        <div className="resource-grid">
          <a className="resource-scope" href={bookingUrl} target="_blank" rel="noreferrer"><span>Service guide · 01</span><em>Room by room</em><h3>What’s included?</h3><p>See live options and choose the exact scope before checkout.</p><i>↗</i></a>
          <a className="resource-prep" href="/service-policy"><span>First visit · 02</span><em>Ten easy minutes</em><h3>Prep without overthinking.</h3><p>Secure pets, clear fragile items, and tell us your priority area.</p><i>→</i></a>
          <a className="resource-host" href={rentalQuoteUrl}><span>For hosts · 03</span><em>Between every guest</em><h3>A smoother turnover.</h3><p>Plan timing, linens, restocking, and property-specific details.</p><i>→</i></a>
        </div>
      </section>

      <section className="faq-section" id="answers">
        <div className="faq-heading">
          <p className="eyebrow">Clear answers</p>
          <h2>Before you book.</h2>
          <p>Need a human? <a href="mailto:hello@charlestoncleanroutine.com">Email our Charleston team.</a></p>
        </div>
        <div className="faq-list">
          <details open><summary>Do you clean apartments and condos?</summary><p>Yes. We clean Charleston-area apartments, condos, townhomes, and houses—from studios to larger full-service residences. Share any front-desk, parking, elevator, or building-access instructions when booking so arrival is smooth.</p></details>
          <details><summary>Do you clean Airbnbs and beach rental homes?</summary><p>Yes. We offer turnover cleaning for Charleston-area Airbnbs, vacation rentals, and beach houses. Each property is quoted around its size, guest window, checklist, and optional linen or restocking needs.</p></details>
          <details><summary>What is The Charleston Finish?</summary><p>It is our included closing ritual for every full cleaning: a final quality check, thoughtful room presentation, and a sealed, xylitol-free branded peppermint placed on a completion card in the kitchen or entry—not on bedding.</p></details>
          <details><summary>Can I add a refresh or turndown?</summary><p>Yes. Refresh &amp; Reset is a focused visit between full cleanings. Guest-Ready Turndown is a presentation upgrade for residences, owner arrivals, mid-stay guests, and vacation rentals. Choose either in the cleaning-plan tool so we can confirm scope and pricing.</p></details>
          <details><summary>When is my card charged?</summary><p>A temporary authorization may be placed up to 48 hours before service. The final card charge is processed after the cleaning is completed.</p></details>
          <details><summary>Can I reschedule or cancel online?</summary><p>Yes. Changes made more than 24 hours before the appointment are free. A $35 rescheduling fee or the applicable late-cancellation fee may apply inside the 24-hour window.</p></details>
          <details><summary>What areas do you serve?</summary><p>We serve Charleston and nearby communities based on provider coverage. Enter your service address when booking, or contact us to confirm coverage for a vacation-rental property.</p></details>
          <details><summary>What if something was missed?</summary><p>Tell us promptly. We will review the concern and, when appropriate, coordinate a corrective visit so the service is handled fairly and clearly.</p></details>
        </div>
      </section>

      <section className="final-cta" id="book">
        <img src="/charleston-clean-routine-monogram.svg" alt="" />
        <p className="eyebrow eyebrow-light">Your home, handled</p>
        <h2>Ready for one less thing<br />on your list?</h2>
        <p>See your home-cleaning price online, or build a tailored plan for a vacation rental.</p>
        <div>
          <a className="button button-light" href={bookingUrl} target="_blank" rel="noreferrer">See pricing &amp; book ↗</a>
          <a className="button button-ghost" href={rentalQuoteUrl}>Rental turnover quote →</a>
        </div>
      </section>

      <footer>
        <div className="footer-top">
          <BrandLogo footer />
          <p>Upfront pricing. Predictable service.<br />Essential updates only.</p>
        </div>
        <div className="footer-links">
          <div><span>Services</span><a href={bookingUrl} target="_blank" rel="noreferrer">Home cleaning ↗</a><a href={rentalQuoteUrl}>Rental turnovers</a><a href="#signature-finish">Signature finish</a><a href="#pricing-tool">Build my clean</a></div>
          <div><span>Company</span><a href="#our-story">Our philosophy</a><a href="#helpful">Helpful info</a><a href="#answers">FAQs</a></div>
          <div><span>Connect</span><a href="mailto:hello@charlestoncleanroutine.com">Email us</a><a href="tel:+18436081082">843-608-1082</a><a href="https://charlestoncleanroutine.bookingkoala.com/hiring/form/6a74db6ef15695b50e4232f1?embed=true" target="_blank" rel="noreferrer">Become a provider ↗</a></div>
        </div>
        <div className="footer-legal"><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/cancellation-policy">Cancellation</a><a href="/service-policy">Service policy</a></div>
        <div className="footer-bottom"><span>© 2026 Charleston Clean Routine</span><span>Charleston, South Carolina · 843</span></div>
      </footer>
    </main>
  );
}
