const menuItems = [
  ["Your Choice", "/#your-choice"],
  ["The Details", "/#whats-included"],
  ["Service Levels", "/#whats-included"],
  ["The Options", "/#pricing-tool"],
  ["Our Promise", "/#our-story"],
  ["Build Your Routine", "/#pricing-tool"],
  ["What to Expect", "/#how-it-works"],
  ["Service Area", "/service-area"],
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
