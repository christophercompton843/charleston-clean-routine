const menuItems = [
  ["Booking", "/#pricing-tool"],
  ["Services", "/#services"],
  ["Providers", "/#providers"],
  ["Reviews", "/#reviews"],
  ["Home Cleaning", "/#home-cleaning"],
  ["Vacation Rental Cleaning", "/#vacation-rental-cleaning"],
  ["Our Signature Service Ritual", "/#signature-finish"],
  ["Service Areas", "/#rollout-map"],
  ["Our Philosophy", "/#our-story"],
  ["Recurring Service Launch Offer", "/#recurring-offer"],
  ["Portfolio Plans", "/#portfolio-partners"],
  ["Join the Provider Network", "/#providers"],
  ["A Note from the Owner", "/#founder-trust-title"],
  ["Client Tools", "/#client-tools"],
  ["FAQ", "/#answers"],
  ["Contact Us", "/contact"],
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
