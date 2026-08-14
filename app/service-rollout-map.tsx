const phases = [
  {
    number: "1",
    title: "East Cooper + the beaches",
    places: "Mount Pleasant · Daniel Island · Sullivan’s Island · Isle of Palms",
    note: "Launch area for recurring homes, condos, apartments, and coastal vacation rentals.",
  },
  {
    number: "2",
    title: "Charleston core + south",
    places: "Downtown Charleston · West Ashley · James Island · Folly Beach",
    note: "Second-stage coverage as route density and provider availability expand across the peninsula and nearby islands.",
  },
  {
    number: "3",
    title: "North Charleston corridor",
    places: "North Charleston · Ladson · Hanahan · Park Circle · Old Navy Base",
    note: "Third-stage growth along the northern residential, apartment, and mixed-use corridor.",
  },
  {
    number: "4",
    title: "Sea islands",
    places: "Johns Island · Kiawah Island · Seabrook Island",
    note: "Fourth-stage coverage for travel-sensitive residential, second-home, and vacation-rental routes.",
  },
];

const points = [
  { name: "Ladson", phase: 3, x: 164, y: 54, tx: 184, ty: 49 },
  { name: "Hanahan", phase: 3, x: 315, y: 113, tx: 335, ty: 108 },
  { name: "North Charleston", phase: 3, x: 286, y: 162, tx: 172, ty: 158 },
  { name: "Park Circle", phase: 3, x: 357, y: 178, tx: 378, ty: 174 },
  { name: "Old Navy Base", phase: 3, x: 390, y: 214, tx: 410, ty: 228 },
  { name: "Daniel Island", phase: 1, x: 481, y: 146, tx: 501, ty: 141 },
  { name: "Mount Pleasant", phase: 1, x: 572, y: 229, tx: 592, ty: 224 },
  { name: "Isle of Palms", phase: 1, x: 729, y: 245, tx: 709, ty: 229 },
  { name: "Sullivan’s Island", phase: 1, x: 664, y: 292, tx: 682, ty: 308 },
  { name: "Downtown", phase: 2, x: 431, y: 286, tx: 451, ty: 281 },
  { name: "West Ashley", phase: 2, x: 307, y: 310, tx: 211, ty: 304 },
  { name: "James Island", phase: 2, x: 426, y: 372, tx: 446, ty: 367 },
  { name: "Folly Beach", phase: 2, x: 477, y: 478, tx: 497, ty: 493 },
  { name: "Johns Island", phase: 4, x: 296, y: 413, tx: 201, ty: 408 },
  { name: "Kiawah Island", phase: 4, x: 270, y: 501, tx: 290, ty: 496 },
  { name: "Seabrook Island", phase: 4, x: 184, y: 519, tx: 70, ty: 514 },
];

export default function ServiceRolloutMap() {
  return (
    <section className="rollout-section" id="rollout-map">
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow">Planned service rollout</p>
          <h2>Starting east.<br />Growing deliberately.</h2>
        </div>
        <p>
          We are launching where routes can be supported well, then expanding in four
          measured phases. Exact availability is confirmed by address before booking.
        </p>
      </div>

      <div className="rollout-layout">
        <figure className="rollout-map">
          <div className="map-toolbar">
            <span>Charleston metro</span>
            <strong>Service rollout · 2026 onward</strong>
          </div>
          <svg viewBox="0 0 820 560" role="img" aria-labelledby="map-title map-description">
            <title id="map-title">Charleston Clean Routine four-phase service rollout</title>
            <desc id="map-description">
              A geographic orientation diagram showing launch service in Mount Pleasant,
              Daniel Island, Sullivan’s Island, and Isle of Palms, followed by three later phases.
            </desc>
            <defs>
              <pattern id="map-grid" width="44" height="44" patternUnits="userSpaceOnUse">
                <path d="M44 0H0V44" className="map-grid-line" />
              </pattern>
            </defs>
            <rect className="map-paper" x="0" y="0" width="820" height="560" />
            <rect x="0" y="0" width="820" height="560" fill="url(#map-grid)" />
            <path className="map-waterway" d="M385 0c9 91 26 150 78 211 37 44 22 89-13 134-29 38-20 112 20 215" />
            <path className="map-waterway secondary" d="M292 196c51 12 100 45 139 90" />
            <path className="map-waterway coast" d="M763 0c-20 106-7 181-38 259-27 67-72 98-91 162-13 44-8 90-3 139" />
            <text className="map-direction" x="37" y="47">NORTH ↑</text>
            <text className="map-water-label" x="676" y="429">ATLANTIC</text>
            <text className="map-water-label" x="686" y="445">COAST</text>
            <polyline className="phase-route phase-route-1" points="481,146 572,229 729,245 664,292" />
            <polyline className="phase-route phase-route-2" points="307,310 431,286 426,372 477,478" />
            <polyline className="phase-route phase-route-3" points="164,54 315,113 286,162 357,178 390,214" />
            <polyline className="phase-route phase-route-4" points="296,413 270,501 184,519" />
            {points.map((point) => (
              <g className={`map-point map-point-${point.phase}`} key={point.name}>
                <circle cx={point.x} cy={point.y} r="13" />
                <text className="map-point-number" x={point.x} y={point.y + 4}>{point.phase}</text>
                <text className="map-point-label" x={point.tx} y={point.ty}>{point.name}</text>
              </g>
            ))}
          </svg>
          <figcaption>
            Geographic orientation diagram · colored numbers show rollout order, not fixed boundaries
          </figcaption>
        </figure>

        <div className="rollout-phases">
          {phases.map((phase) => (
            <article key={phase.number} className={`rollout-phase phase-card-${phase.number}`}>
              <span className="phase-badge" aria-label={`Phase ${phase.number}`}>
                <small>Phase</small>
                <strong>{phase.number}</strong>
              </span>
              <div>
                <h3>{phase.title}</h3>
                <strong>{phase.places}</strong>
                <p>{phase.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
