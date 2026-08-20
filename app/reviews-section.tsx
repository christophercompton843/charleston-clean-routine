export default function ReviewsSection() {
  return (
    <section className="trust-section" id="reviews">
      <style>{`
        .trust-section { background: var(--porcelain); }
        .trust-review-block, .home-proof-gallery { padding: 88px max(28px, calc((100vw - 1180px) / 2)); }
        .trust-heading { align-items: end; }
        .trust-heading > p { max-width: 520px; padding: 24px 26px; border: 1px solid var(--line); border-radius: 20px; background: #fff; box-shadow: var(--shadow-sm); color: var(--ink); font-size: 15px; line-height: 1.7; }
        .trust-proof-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px; margin-top: 34px; }
        .trust-proof-grid article { min-height: 150px; padding: 22px; border: 1px solid var(--line); border-radius: 18px; background: #fff; }
        .trust-proof-grid article > span { color: var(--accent-ink); font-size: 10px; font-weight: 800; }
        .trust-proof-grid strong { display: block; margin: 17px 0 8px; color: var(--harbor); font-size: 17px; }
        .trust-proof-grid p { margin: 0; color: var(--muted); font-size: 12px; line-height: 1.55; }
        .review-coming-card { margin-top: 14px; padding: 20px 22px; display: flex; align-items: center; justify-content: space-between; gap: 24px; border: 1px solid var(--line); border-radius: 18px; background: var(--cloud); }
        .review-coming-card span { color: var(--accent-ink); font-size: 9px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
        .review-coming-card h3 { margin: 6px 0 0; color: var(--harbor); font-size: 18px; }
        .review-coming-card p { display: none; }
        .review-coming-card .button { min-height: 42px; padding-inline: 17px; font-size: 11px; white-space: nowrap; }
        .founder-trust { padding: 72px max(28px, calc((100vw - 1180px) / 2)); display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(280px, .75fr); gap: 52px; align-items: center; background: var(--harbor-black); color: white; }
        .founder-trust-copy { max-width: 680px; }
        .founder-trust-copy h2 { margin: 0; font-size: clamp(42px, 5vw, 68px); line-height: .98; letter-spacing: -.055em; }
        .founder-quote { margin: 24px 0 18px; color: #eef5f3; font-size: 20px; line-height: 1.55; }
        .founder-trust-copy > p:not(.eyebrow):not(.founder-quote) { color: #b9cbc7; font-size: 14px; line-height: 1.7; }
        .founder-signoff { margin-top: 24px; display: flex; flex-direction: column; gap: 4px; }
        .founder-signoff strong { font-size: 17px; }
        .founder-signoff span { color: #9fb7b2; font-size: 11px; }
        .founder-trust-visual { position: relative; justify-self: end; width: min(100%, 340px); aspect-ratio: 4 / 5; overflow: hidden; border-radius: 24px; box-shadow: var(--shadow-lg); }
        .founder-trust-visual img { width: 100%; height: 100%; object-fit: cover; object-position: center 18%; }
        .founder-trust-visual div { position: absolute; right: 14px; bottom: 14px; left: 14px; padding: 12px 14px; border-radius: 14px; background: rgba(4,30,29,.82); backdrop-filter: blur(10px); }
        .founder-trust-visual div span, .founder-trust-visual div strong { display: block; }
        .founder-trust-visual div span { color: var(--sea-bright); font-size: 9px; text-transform: uppercase; letter-spacing: .1em; }
        .founder-trust-visual div strong { margin-top: 4px; font-size: 13px; }
        .home-proof-gallery { background: #fff; }
        .home-proof-heading { display: grid; grid-template-columns: 1fr .8fr; gap: 56px; align-items: end; }
        .home-proof-heading h2 { margin: 0; color: var(--harbor); font-size: clamp(40px, 4.6vw, 62px); line-height: .98; letter-spacing: -.055em; }
        .home-proof-heading > p { margin: 0 0 4px; color: var(--muted); font-size: 14px; line-height: 1.7; }
        .home-proof-grid { margin-top: 34px; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px; }
        .home-proof-grid figure, .home-proof-grid figure.home-proof-large { margin: 0; position: relative; grid-column: auto; height: 245px; overflow: hidden; border-radius: 18px; background: var(--cloud); }
        .home-proof-grid img { width: 100%; height: 100%; object-fit: cover; }
        .home-proof-grid figcaption { position: absolute; right: 10px; bottom: 10px; left: 10px; padding: 10px 12px; border-radius: 12px; background: rgba(4,30,29,.78); color: white; backdrop-filter: blur(8px); }
        .home-proof-grid figcaption span { display: block; color: var(--sea-bright); font-size: 8px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; }
        .home-proof-grid figcaption strong { display: block; margin-top: 3px; font-size: 12px; line-height: 1.25; }
        @media (max-width: 900px) {
          .trust-proof-grid { grid-template-columns: repeat(2, 1fr); }
          .founder-trust { grid-template-columns: 1fr; gap: 30px; }
          .founder-trust-visual { justify-self: start; width: min(320px, 100%); }
          .home-proof-grid { grid-template-columns: repeat(2, 1fr); }
          .home-proof-heading { grid-template-columns: 1fr; gap: 18px; }
        }
        @media (max-width: 620px) {
          .trust-review-block, .home-proof-gallery { padding-block: 64px; }
          .trust-proof-grid, .home-proof-grid { grid-template-columns: 1fr; }
          .review-coming-card { align-items: flex-start; flex-direction: column; }
          .founder-trust { padding-block: 64px; }
          .founder-trust-visual { width: 100%; max-width: 330px; }
          .home-proof-grid figure, .home-proof-grid figure.home-proof-large { height: 220px; }
        }
      `}</style>
      <div className="trust-review-block">
        <div className="section-heading split-heading trust-heading">
          <div><p className="eyebrow">Trust, built in Charleston</p><h2>New business.<br />Real standards.</h2></div>
          <p>⭐⭐⭐⭐<br />Charleston Clean Routine did a fantastic job making my home shine. I highly recommend their services and am already looking forward to my next cleaning in two weeks. Thank you! – B. Kelley</p>
        </div>
        <div className="trust-proof-grid" aria-label="How Charleston Clean Routine earns trust">
          <article><span>01</span><strong>Screened providers</strong><p>Experience, background screening, and required provider documentation are reviewed before assignments.</p></article>
          <article><span>02</span><strong>Clear before arrival</strong><p>Your selected service, price, timing, and property notes are organized before the visit begins.</p></article>
          <article><span>03</span><strong>Quality checked</strong><p>Every full cleaning closes with a final review and The Charleston Finish.</p></article>
          <article><span>04</span><strong>Local accountability</strong><p>You are booking a Charleston-owned company with a local owner responsible for the customer experience.</p></article>
        </div>
        <div className="review-coming-card"><div><span>Verified reviews</span><h3>More customer feedback will appear here as it is earned.</h3><p>Verified customer reviews will be added with their source clearly identified.</p></div><a className="button" href="/review">Share a completed-service review →</a></div>
      </div>
      <section className="founder-trust" aria-labelledby="founder-trust-title">
        <div className="founder-trust-copy"><p className="eyebrow eyebrow-light">A note from the owner</p><h2 id="founder-trust-title">This is my home, too.</h2><p className="founder-quote">“I live here in Charleston, and I built Charleston Clean Routine around a simple idea: hiring someone to care for your home should feel clear, dependable, and personal—not like another task you have to manage.”</p><p>I want customers to know who is behind the company, what standards we expect, and who is accountable when something needs attention. We are building this business one home, one relationship, and one earned recommendation at a time.</p><div className="founder-signoff"><strong>Christopher </strong><span>Founder / Owner · Charleston, South Carolina</span></div></div>
        <div className="founder-trust-visual"><img src="/Christopher Compton.png" alt="Christopher, founder and owner of Charleston Clean Routine" /><div><span>Locally owned</span><strong>Charleston, South Carolina</strong></div></div>
      </section>
      <section className="home-proof-gallery" aria-labelledby="home-proof-title">
        <div className="home-proof-heading"><div><p className="eyebrow">Care across the Lowcountry</p><h2 id="home-proof-title">Made for Charleston homes.</h2></div><p>From renovated downtown homes to coastal vacation properties, the standard is the same: a clean, composed space that feels ready when you walk in.</p></div>
        <div className="home-proof-grid">
          <figure><img src="/Freshly Cleaned Charleston Kitchen.png" alt="Freshly cleaned Charleston kitchen" /><figcaption><span>Charleston homes</span><strong>Clean and composed.</strong></figcaption></figure>
          <figure><img src="/Freshly turned Charleston guest bedroom.png" alt="Freshly turned Charleston guest bedroom" /><figcaption><span>Guest ready</span><strong>Prepared before arrival.</strong></figcaption></figure>
          <figure><img src="/beach living room.png" alt="Clean Charleston-area beach home living room open to a pool and ocean view" /><figcaption><span>Beach homes</span><strong>Reset for the coast.</strong></figcaption></figure>
          <figure><img src="/ccr-quality-check.jpg" alt="A cleaning professional completing a quality check inside a home" /><figcaption><span>Professional care</span><strong>Details checked.</strong></figcaption></figure>
        </div>
      </section>
    </section>
  );
}
