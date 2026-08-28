import "./brand-film.css";

export default function BrandFilm() {
  return (
    <section className="brand-film-section" aria-labelledby="brand-film-title">
      <div className="brand-film-copy">
        <p className="eyebrow">The work behind the finish</p>
        <h2 id="brand-film-title">A clean home should feel like one less thing to think about.</h2>
        <p>
          Professional care is more than the finished room. It is the people who arrive prepared,
          the details handled properly, and the calm that comes from knowing your home is in good hands.
        </p>
        <div className="brand-film-proof" aria-label="Charleston Clean Routine service qualities">
          <span>Prepared professionals</span>
          <span>Thoughtful detail</span>
          <span>A home ready to enjoy</span>
        </div>
      </div>

      <div className="brand-film-media">
        <div className="brand-film-frame">
          <video
            src="/ccr-life-gets-busy.mp4"
            controls
            muted
            playsInline
            preload="metadata"
            aria-label="Charleston Clean Routine professionals providing home cleaning service"
          />
        </div>
        <div className="brand-film-caption">
          <span>Your Home, Handled.</span>
          <strong>See the service in motion.</strong>
        </div>
      </div>
    </section>
  );
}
