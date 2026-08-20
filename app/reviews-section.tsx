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
            ⭐⭐⭐⭐
            Charleston Clean Routine did a fantastic job making my home shine. 
            I highly recommend their services and am already looking forward to my next cleaning in two weeks. 
            Thank you! – B. Kelley
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
          <img src="/Christopher Compton.png" alt="Christopher Compton, founder and owner of Charleston Clean Routine" />
          <div><span>Locally owned</span><strong>Charleston, South Carolina</strong></div>
        </div>
      </section>

      <section className="home-proof-gallery" aria-labelledby="home-proof-title">
        <div className="home-proof-heading">
          <div>
            <p className="eyebrow">Care across the Lowcountry</p>
            <h2 id="home-proof-title">Every kind of Charleston home,<br />ready to enjoy.</h2>
          </div>
          <p>
            From modern condos and renovated downtown homes to coastal vacation properties,
            the standard is the same: a clean, composed space that feels ready when you walk in.
          </p>
        </div>
        <div className="home-proof-grid">
          <figure className="home-proof-large">
            <img src="/Freshly Cleaned Charleston Kitchen.png" alt="Freshly cleaned Charleston kitchen" />
            <figcaption><span>Charleston homes</span><strong>Clean, composed, ready for real life.</strong></figcaption>
          </figure>
          <figure>
            <img src="/Freshly cleaned Charleston bathroom.png" alt="Freshly cleaned Charleston bathroom" />
            <figcaption><span>Detail work</span><strong>Bathrooms finished with care.</strong></figcaption>
          </figure>
          <figure>
            <img src="/Freshly turned Charleston guest bedroom.png" alt="Freshly turned Charleston guest bedroom" />
            <figcaption><span>Guest ready</span><strong>Prepared before the next arrival.</strong></figcaption>
          </figure>
          <figure className="home-proof-large">
            <img src="/beach living room.png" alt="Clean Charleston-area beach home living room open to a pool and ocean view" />
            <figcaption><span>Beach homes</span><strong>Turned, reset, and ready for the coast.</strong></figcaption>
          </figure>
          <figure>
            <img src="/beach kitchen.png" alt="Clean Charleston-area beach home kitchen overlooking a pool and ocean" />
            <figcaption><span>Vacation rentals</span><strong>A polished reset between stays.</strong></figcaption>
          </figure>
          <figure>
            <img src="/ccr-quality-check.jpg" alt="A cleaning professional completing a quality check inside a home" />
            <figcaption><span>Professional care</span><strong>Details checked before we leave.</strong></figcaption>
          </figure>
        </div>
      </section>
    </section>
  );
}
