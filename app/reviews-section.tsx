export default function ReviewsSection() {
  return (
    <section className="trust-section" id="reviews">
      <div className="trust-review-block">
        <div className="section-heading split-heading trust-heading">
          <div>
            <p className="eyebrow">Trust, built in Charleston</p>
            <h2>New business.<br />Real standards.</h2>
          </div>
          <p>
            Charleston Clean Routine is newly launched, so we will never fill this space with
            invented testimonials. Verified customer reviews will be added as our clients complete
            service and share their experience.
          </p>
        </div>

        <div className="trust-proof-grid" aria-label="How Charleston Clean Routine earns trust">
          <article>
            <span>01</span>
            <strong>Screened providers</strong>
            <p>Experience, background screening, and required provider documentation are reviewed before assignments.</p>
          </article>
          <article>
            <span>02</span>
            <strong>Clear before arrival</strong>
            <p>Your selected service, price, timing, and property notes are organized before the visit begins.</p>
          </article>
          <article>
            <span>03</span>
            <strong>Quality checked</strong>
            <p>Every full cleaning closes with a final review and The Charleston Finish.</p>
          </article>
          <article>
            <span>04</span>
            <strong>Local accountability</strong>
            <p>You are booking a Charleston-owned company with a local owner responsible for the customer experience.</p>
          </article>
        </div>

        <div className="review-coming-card">
          <div>
            <span>Verified reviews</span>
            <h3>We would rather earn the first five stars than pretend they already exist.</h3>
            <p>
              As completed customers leave feedback, their verified reviews will appear here with the
              source clearly identified.
            </p>
          </div>
          <a className="button" href="/review">Share a completed-service review →</a>
        </div>
      </div>

      <section className="founder-trust" aria-labelledby="founder-trust-title">
        <div className="founder-trust-copy">
          <p className="eyebrow eyebrow-light">A note from the owner</p>
          <h2 id="founder-trust-title">This is my home, too.</h2>
          <p className="founder-quote">
            “I live here in Charleston, and I built Charleston Clean Routine around a simple idea:
            hiring someone to care for your home should feel clear, dependable, and personal—not like
            another task you have to manage.”
          </p>
          <p>
            My name is Christopher Compton, founder of Charleston Clean Routine. I want customers to
            know who is behind the company, what standards we expect, and who is accountable when
            something needs attention. We are building this business one home, one relationship, and
            one earned recommendation at a time.
          </p>
          <div className="founder-signoff">
            <strong>Christopher Compton</strong>
            <span>Founder / Owner · Charleston, South Carolina</span>
          </div>
        </div>
        <div className="founder-trust-visual">
          <img src="/ccr-arrival-reset.jpg" alt="A bright Charleston-area home prepared after a professional cleaning reset" />
          <div><span>Locally owned</span><strong>Charleston, South Carolina</strong></div>
        </div>
      </section>

      <section className="home-proof-gallery" aria-labelledby="home-proof-title">
        <div className="home-proof-heading">
          <div>
            <p className="eyebrow">Care you can picture</p>
            <h2 id="home-proof-title">Clean homes.<br />Professional care.</h2>
          </div>
          <p>
            More of the experience we are building: calm rooms, guest-ready spaces, and cleaning
            professionals completing the details inside the home.
          </p>
        </div>
        <div className="home-proof-grid">
          <figure className="home-proof-large">
            <img src="/charleston-home-warm.jpg" alt="A clean and composed Charleston-style living room" />
            <figcaption><span>Home reset</span><strong>Ready to live in again.</strong></figcaption>
          </figure>
          <figure>
            <img src="/ccr-quality-check.jpg" alt="A cleaning professional completing a quality check inside a home" />
            <figcaption><span>Professional care</span><strong>Details checked before we leave.</strong></figcaption>
          </figure>
          <figure>
            <img src="/ccr-guest-ready.jpg" alt="A clean coastal vacation rental prepared for arriving guests" />
            <figcaption><span>Guest ready</span><strong>Prepared before the next arrival.</strong></figcaption>
          </figure>
          <figure>
            <img src="/clean-routine-process-relevant.jpg" alt="A cleaning professional working in a bright residential kitchen" />
            <figcaption><span>In the home</span><strong>Work you can see. Standards you can feel.</strong></figcaption>
          </figure>
          <figure>
            <img src="/ccr-arrival-reset.jpg" alt="A bright home entry and living area after a thoughtful cleaning reset" />
            <figcaption><span>The result</span><strong>Come home to calm.</strong></figcaption>
          </figure>
        </div>
      </section>
    </section>
  );
}
