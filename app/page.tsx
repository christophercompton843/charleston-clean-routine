import PricePlanner from "./price-planner";
import ReviewsSection from "./reviews-section";
import ServiceScope from "./service-scope";
import Concierge from "./concierge";
import BrandFilm from "./brand-film";

export const metadata = {
  title: "Charleston Clean Routine | Your Home, Handled",
  description:
    "Thoughtfully designed home, vacation rental, Airbnb, and portfolio cleaning in Charleston. Clear service standards, instant residential pricing, easy booking, and documented completion.",
};

const phoneUrl = "tel:+18436338648";
const clientPortalUrl = "/login";
const providerApplicationUrl = "/provider-application";

function BrandLogo({ footer = false, reversed = false }: { footer?: boolean; reversed?: boolean }) {
  return (
    <a
      className={footer ? "brand-logo footer-logo" : "brand-logo"}
      href="#top"
      aria-label="Charleston Clean Routine home"
    >
      <img
        src={reversed ? "/charleston-clean-routine-logo-reversed.svg" : "/charleston-clean-routine-logo.svg"}
        alt="Charleston Clean Routine"
      />
    </a>
  );
}

const processSteps = [
  ["1", "Your Choice", "Begin with the kind of property care you need: Home, Vacation Rental, Airbnb, or Portfolio Care."],
  ["2", "The Details", "Explore the rooms, scope, and specific work behind the service before you commit."],
  ["3", "Service Levels", "Compare the levels of care and understand what changes from one to the next."],
  ["4", "The Options", "Add only the enhancements, frequency, and property-specific details that matter to you."],
  ["5", "Our Promise", "Know the standard behind the service: thoughtful communication, defined expectations, and accountable completion."],
  ["6", "Build Your Routine", "Configure the service, see the applicable price, choose your timing, and book."],
  ["7", "What to Expect", "See what happens before, during, and after the visit so there is no uncertainty once you book."],
];

export default function Home() {
  return (
    <main id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>

      <div className="site-chrome">
        <header className="site-header">
          <BrandLogo />
          <nav aria-label="Primary navigation">
            <a href="#your-choice">Your Choice</a>
            <a href="#whats-included">The Details</a>
            <a href="#our-story">Our Promise</a>
            <a href="#how-it-works">What to Expect</a>
          </nav>
          <div className="header-actions">
            <a className="header-contact" href={phoneUrl} aria-label="Call Charleston Clean Routine at 843-633-8648">
              (843) 633-8648
            </a>
            <a className="button button-small" href="#pricing-tool">Get My Instant Price</a>
          </div>
        </header>
      </div>

      <section className="hero" id="main-content">
        <div className="hero-copy">
          <p className="eyebrow eyebrow-light"><span /> The Charleston Standard of Care</p>
          <h1>Your home,<br /><span>handled.</span></h1>
          <p className="hero-lede">
            Thoughtful home and property care designed for people who want to know
            exactly what they are choosing, what it includes, what happens next,
            and how the standard is carried through to completion.
          </p>
          <div className="hero-actions">
            <a className="button button-spark" href="#pricing-tool">Build Your Routine</a>
            <a className="button button-ghost" href="#your-choice">Your Choice</a>
          </div>
          <div className="hero-proof" aria-label="Charleston Clean Routine experience">
            <p><span>01</span><strong>See the standard.</strong></p>
            <p><span>02</span><strong>Build what fits.</strong></p>
            <p><span>03</span><strong>Know what follows.</strong></p>
          </div>
        </div>

        <div className="hero-visual" aria-label="A freshly cared-for Charleston home">
          <img src="/charleston-home-warm.jpg" alt="A composed Charleston living room after professional home care" />
          <div className="hero-image-caption">
            <span>The Charleston Finish</span>
            <strong>Quietly considered.</strong>
            <p>Your space cared for properly, without becoming another thing to manage.</p>
          </div>
        </div>
      </section>

      <nav className="journey-bar" aria-label="Your Charleston Clean Routine journey">
        <a href="#your-choice"><span>01</span>Your Choice</a>
        <a href="#whats-included"><span>02</span>The Details</a>
        <a href="#whats-included"><span>03</span>Service Levels</a>
        <a href="#pricing-tool"><span>04</span>The Options</a>
        <a href="#our-story"><span>05</span>Our Promise</a>
        <a href="#pricing-tool"><span>06</span>Build Your Routine</a>
        <a href="#how-it-works"><span>07</span>What to Expect</a>
      </nav>

      <BrandFilm />

      <section className="services-section" id="your-choice" aria-labelledby="services-title">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Your Choice</p>
            <h2 id="services-title">Start with what<br />you need handled.</h2>
          </div>
          <p>
            Start with the property in front of you. Each service area explains
            what it is, what is included, what can be added, how pricing works,
            and exactly what to do next.
          </p>
        </div>

        <div className="service-grid">
          <article className="service-card home-service" id="home-cleaning">
            <div className="service-image">
              <img src="/charleston-home-warm.jpg" alt="Charleston residence prepared for everyday living" />
              <span>Home</span>
            </div>
            <div className="service-copy">
              <p className="card-kicker">For the place you call home</p>
              <h3>Home Cleaning</h3>
              <p>
                For privately owned homes, apartments, condominiums, townhomes, second homes,
                and other residential spaces. Choose <strong>Routine, Deep, or Move-In / Move-Out</strong>
                cleaning, then keep it one-time or make it recurring and add only what your space needs.
              </p>
              <div className="service-tags"><span>Routine</span><span>Deep</span><span>Move-In / Out</span><span>Recurring</span></div>
              <div className="founding-routine-note">
                <span>Founding Routine</span>
                <p>
                  Recurring routines established during the founding enrollment period
                  receive access to a premium recurring-service benefit. A very limited
                  number of qualifying routines will also receive the Charleston Finish
                  Scent Experience with every recurring visit for the life of that routine.
                  If that introductory experience is no longer available, it can still be
                  added at any time as a paid enhancement for one visit or for every recurring visit.
                </p>
              </div>
              <div className="hero-actions">
                <a className="button button-small" href="#whats-included">See What’s Included</a>
                <a className="button button-small" href="#pricing-tool">Get My Instant Price</a>
              </div>
            </div>
          </article>

          <article className="service-card rental-service" id="vacation-rental-cleaning">
            <div className="service-image">
              <img src="/charleston-rental-turnover.jpg" alt="Charleston vacation rental prepared for arriving guests" />
              <span>Vacation Rental</span>
            </div>
            <div className="service-copy">
              <p className="card-kicker">For vacation homes + managed short-term rentals</p>
              <h3>Vacation Rental Care</h3>
              <p>
                Coordinated care for vacation properties that need to be ready for owners or guests,
                including turnover cleaning, periodic deep cleaning, arrival preparation, and
                property-specific instructions.
              </p>
              <div className="service-tags"><span>Turnover</span><span>Deep Reset</span><span>Arrival Prep</span><span>Add-Ons</span></div>
              <div className="hero-actions">
                <a className="button button-small" href="/services">Explore Rental Care</a>
                <a className="button button-small" href="#pricing-tool">Price My Rental</a>
              </div>
            </div>
          </article>

          <article className="service-card rental-service" id="airbnb-care">
            <div className="service-image">
              <img src="/ccr-guest-ready.jpg" alt="Guest-ready Airbnb bedroom prepared for check-in" />
              <span>Airbnb</span>
            </div>
            <div className="service-copy">
              <p className="card-kicker">For hosts who want ongoing property care already in place</p>
              <h3>Airbnb Care</h3>
              <p>
                Set Airbnb Care as a recurring service so your property has an established cleaning
                routine in place. Adjust the frequency through the client portal as rental activity
                changes throughout the year—more often during high-demand periods, less often when
                bookings slow—while keeping the same care structure ready when you need it.
              </p>
              <div className="service-tags"><span>Turnover</span><span>Bed Setup</span><span>Restocking</span><span>Reporting</span></div>
              <div className="hero-actions">
                <a className="button button-small" href="/services">Explore Airbnb Care</a>
                <a className="button button-small" href="#pricing-tool">Price My Airbnb</a>
              </div>
            </div>
          </article>

          <article className="service-card home-service" id="portfolio-service-card">
            <div className="service-image">
              <img src="/downtown%20condo.png" alt="Charleston residential property suited to coordinated portfolio care" />
              <span>Portfolio</span>
            </div>
            <div className="service-copy">
              <p className="card-kicker">For owners, property managers + multi-property operators</p>
              <h3>Portfolio Care</h3>
              <p>
                For clients coordinating cleaning across multiple properties, units, or residences.
                We organize the portfolio under one management structure while preserving the unique
                service level, schedule, access instructions, and specifications of each individual property.
              </p>
              <div className="service-tags"><span>Property Plans</span><span>Central Scheduling</span><span>Quality Oversight</span><span>Scalable</span></div>
              <div className="hero-actions">
                <a className="button button-small" href="#portfolio-partners">See Portfolio Care</a>
                <a className="button button-small" href="/portfolio">Build My Property Plan</a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <ServiceScope />

      <PricePlanner />

      <section className="partner-section" id="portfolio-partners" aria-labelledby="partner-title">
        <div className="partner-copy">
          <p className="eyebrow eyebrow-light">Portfolio Care</p>
          <h2 id="partner-title">One standard.<br />Every property understood.</h2>
          <p>
            Multi-property care should not mean repeating yourself for every address.
            We organize each property’s service level, frequency, access instructions,
            add-ons, and special requirements into one easy-to-understand operating plan.
          </p>
          <div className="partner-benefits">
            <span>Property-specific scopes</span>
            <span>Centralized scheduling</span>
            <span>Consistent service standards</span>
            <span>Documented completion</span>
            <span>Consolidated communication</span>
            <span>Flexible as properties change</span>
          </div>
          <div className="hero-actions">
            <a className="button button-spark" href="/portfolio">Build My Property Plan</a>
            <a className="button button-ghost" href="/contact?topic=portfolio">Request a Portfolio Proposal</a>
          </div>
        </div>
        <div className="partner-card">
          <span>What happens next</span>
          <strong>A clear plan, not a lead form.</strong>
          <p>
            Tell us about the properties. We organize the requirements, identify what
            can be standardized and what should remain property-specific, and return
            a proposal that makes the service easy to understand and manage.
          </p>
          <small>If clarification is needed, we contact you only about what is required to complete the plan.</small>
        </div>
      </section>

      <section className="principles-section" id="our-story" aria-labelledby="why-title">
        <div className="section-heading compact-heading">
          <p className="eyebrow">Built the way we wanted to book it</p>
          <h2 id="why-title">Simple because the complexity is already handled.</h2>
          <p>
            We designed Charleston Clean Routine around the customer: clear choices,
            immediate answers, meticulous checklists, useful communication, documented
            completion, and discretion when nothing needs your attention.
          </p>
        </div>
        <div className="principle-grid">
          <article><span className="principle-label">Clarity</span><h3>Know before you book.</h3><p>What it is, what it includes, what it costs, and what happens next.</p></article>
          <article><span className="principle-label">Reliability</span><h3>Do what we said.</h3><p>Defined standards, property instructions, and a process built for consistency.</p></article>
          <article><span className="principle-label">Proof</span><h3>No guessing afterward.</h3><p>The work follows a checklist and completion is documented.</p></article>
          <article><span className="principle-label">Discretion</span><h3>Useful communication only.</h3><p>Accountability when something needs attention. Quiet competence when it does not.</p></article>
        </div>
      </section>

      <section className="process-section" id="how-it-works" aria-labelledby="process-title">
        <div className="section-heading process-heading">
          <p className="eyebrow eyebrow-light">From need to done</p>
          <h2 id="process-title">Exactly what happens next.</h2>
          <p>No information void. No unnecessary callback loop. Every step should resolve the question in front of you.</p>
        </div>
        <ol className="process-grid">
          {processSteps.map(([number, title, body]) => (
            <li key={number}>
              <span className="step-number">{number}</span>
              <div className="step-signal"><i /></div>
              <h3>{title}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ol>
      </section>

      <ReviewsSection />

      <section className="client-tools-section" id="client-tools">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Already with us?</p>
            <h2>The things you need,<br />where you expect them.</h2>
          </div>
          <p>Manage an existing visit, confirm service coverage, or reach support without beginning another sales process.</p>
        </div>
        <div className="client-tool-grid">
          <a href={clientPortalUrl}>
            <span>Existing clients</span>
            <h3>Manage My Booking</h3>
            <p>View appointment details and use the account tools connected to your service.</p>
            <strong>Open Client Portal →</strong>
          </a>
          <a href="/service-area">
            <span>Before booking</span>
            <h3>Check Service Area</h3>
            <p>Confirm whether your Charleston-area address is currently covered.</p>
            <strong>Check My Address →</strong>
          </a>
          <a href={phoneUrl}>
            <span>Support</span>
            <h3>Call Charleston Clean Routine</h3>
            <p>Get an answer, booking help, or leave a message when something actually needs attention.</p>
            <strong>(843) 633-8648 →</strong>
          </a>
        </div>
      </section>

      <section className="faq-section" id="answers">
        <div className="faq-heading">
          <p className="eyebrow">Clear answers</p>
          <h2>Before you book.</h2>
          <p>If the answer matters before you commit, it belongs here.</p>
        </div>
        <div className="faq-list">
          <details open>
            <summary>What is included in my cleaning?</summary>
            <p>Use the room-by-room service guide above to compare Routine, Deep, and Move-In / Move-Out cleaning. Your confirmed service scope is the standard your cleaning professional follows.</p>
          </details>
          <details>
            <summary>Can I see my price before giving you my information?</summary>
            <p>Yes. Residential pricing is designed to give you an immediate price from the property and service details that actually affect the work. We do not require a callback just to tell you what your cleaning costs.</p>
          </details>
          <details>
            <summary>Do you clean Airbnbs and vacation rentals?</summary>
            <p>Yes. We provide guest turnover and property-readiness services for Airbnbs, vacation homes, and coastal rentals, with optional linen setup, restocking, reporting, and deeper resets.</p>
          </details>
          <details>
            <summary>What is Portfolio Care?</summary>
            <p>Portfolio Care organizes multiple properties under one relationship while preserving the service requirements of each address. We create a clear property-by-property plan and proposal rather than forcing every unit into the same scope.</p>
          </details>
          <details>
            <summary>Who will clean my home?</summary>
            <p>Approved providers are screened for professional cleaning experience, background requirements, insurance, reliability, and the ability to follow Charleston Clean Routine service standards and property instructions.</p>
          </details>
          <details>
            <summary>What happens if something is missed?</summary>
            <p>Tell us promptly. We acknowledge the concern, review what happened, correct what needs correcting, and close the loop. You should not have to manage our mistake for us.</p>
          </details>
          <details>
            <summary>How will you communicate with me?</summary>
            <p>Useful communication when something matters; discretion when it does not. Confirmations, reminders, completion information, and issues that require attention are communicated clearly without unnecessary messages.</p>
          </details>
        </div>
      </section>

      <section className="final-cta" id="book">
        <img className="final-cta-logo" src="/charleston-clean-routine-logo-reversed.svg" alt="Charleston Clean Routine" />
        <p className="eyebrow eyebrow-light">One less thing on your list</p>
        <h2>Isn’t it about time?</h2>
        <p>See what you’re booking, know what it costs, choose your time, and get it handled.</p>
        <div>
          <a className="button button-light" href="#pricing-tool">Get My Instant Price</a>
          <a className="button button-ghost" href="#services">Explore Services</a>
        </div>
      </section>

      <footer>
        <div className="footer-top">
          <BrandLogo footer reversed />
          <p>Clear service. Thoughtful communication.<br />Your home, handled.</p>
        </div>
        <div className="footer-links">
          <div>
            <span>Services</span>
            <a href="#home-cleaning">Home Cleaning</a>
            <a href="#vacation-rental-cleaning">Vacation Rental Care</a>
            <a href="#airbnb-care">Airbnb Care</a>
            <a href="#portfolio-partners">Portfolio Care</a>
          </div>
          <div>
            <span>Start</span>
            <a href="#whats-included">See What’s Included</a>
            <a href="#pricing-tool">Get My Instant Price</a>
            <a href="/service-area">Check Service Area</a>
            <a href={clientPortalUrl}>Client Portal</a>
          </div>
          <div>
            <span>Contact</span>
            <a href={phoneUrl}>(843) 633-8648</a>
            <a href="mailto:hello@charlestoncleanroutine.com">hello@charlestoncleanroutine.com</a>
            <a href="/contact">Contact</a>
            <a href={providerApplicationUrl}>Provider Opportunities</a>
          </div>
        </div>
        <div className="footer-legal">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/cancellation-policy">Cancellation</a>
          <a href="/service-policy">Service Policy</a>
          <a href="/review">Share Feedback</a>
        </div>
        <div className="footer-bottom"><span>© 2026 Charleston Clean Routine</span><span>Charleston, South Carolina</span></div>
      </footer>

      <nav className="mobile-action-dock" aria-label="Quick actions">
        <a href={phoneUrl}>Call <span aria-hidden="true">→</span></a>
        <a href="#pricing-tool">Get My Instant Price <span aria-hidden="true">→</span></a>
      </nav>
      <Concierge />
    </main>
  );
}
