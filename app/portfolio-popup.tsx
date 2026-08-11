"use client";

import { useEffect, useState } from "react";

export default function PortfolioPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem("ccr-portfolio-prompt") === "dismissed") return;
    const timer = window.setTimeout(() => setOpen(true), 14000);
    return () => window.clearTimeout(timer);
  }, []);

  function close() {
    window.localStorage.setItem("ccr-portfolio-prompt", "dismissed");
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="portfolio-popover" role="dialog" aria-modal="false" aria-labelledby="portfolio-popover-title">
      <button className="portfolio-close" type="button" onClick={close} aria-label="Close portfolio invitation">×</button>
      <p className="eyebrow">Multiple properties or client referrals?</p>
      <h2 id="portfolio-popover-title">Let’s build one simpler plan.</h2>
      <p>Owners, hosts, realtors, and property managers can request saved property scopes, coordinated communication, and a tailored service routine.</p>
      <div>
        <a className="button button-spark" href="/contact?topic=partnership" onClick={close}>Request portfolio care →</a>
        <button className="portfolio-later" type="button" onClick={close}>Not right now</button>
      </div>
    </div>
  );
}
