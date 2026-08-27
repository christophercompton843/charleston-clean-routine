const menuItems = [
  ["Home Cleaning", "/#home-cleaning"],
  ["Vacation Rental Care", "/#vacation-rental-cleaning"],
  ["Airbnb Care", "/#airbnb-care"],
  ["Portfolio Care", "/#portfolio-partners"],
  ["What’s Included", "/#whats-included"],
  ["Get My Instant Price", "/#pricing-tool"],
  ["How It Works", "/#how-it-works"],
  ["Service Area", "/#rollout-map"],
  ["Client Tools", "/#client-tools"],
  ["FAQ", "/#answers"],
  ["Contact", "/contact"],
];

export default function SiteMenu() {
  return (
    <details className="site-menu">
      <summary aria-label="Open site navigation">
        <span></span><span></span><span></span>
      </summary>
      <nav aria-label="Site sections">
        <div className="site-menu-heading">
          <span>Navigate</span>
          <strong>Charleston Clean Routine</strong>
        </div>
        <div className="site-menu-links">
          {menuItems.map(([label, href]) => (
            <a key={`${label}-${href}`} href={href}>{label}<span aria-hidden="true">→</span></a>
          ))}
        </div>
      </nav>
    </details>
  );
}
