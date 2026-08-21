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
      <p className="eyebrow">Vacation rentals + property portfolios</p>
      <h2 id="portfolio-popover-title">One less thing on your list.</h2>
      <p>Plan recurring turnovers for the season or year, save each property’s preferences, and adjust the routine whenever your needs change. Sophisticated tools. Local people. Personal service.</p>
      <div>
        <a className="button button-spark" href="/portfolio" onClick={close}>Explore portfolio care →</a>
        <button className="portfolio-later" type="button" onClick={close}>Not right now</button>
      </div>
    </div>
  );
}
