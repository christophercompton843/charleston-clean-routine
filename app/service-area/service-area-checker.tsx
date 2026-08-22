"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import BrandIcon from "../brand-icon";

const standardZips = new Set([
  "29401", "29403", "29405", "29406", "29407", "29410", "29412", "29414",
  "29418", "29420", "29425", "29439", "29451", "29455", "29464", "29466", "29482", "29492",
]);

export default function ServiceAreaChecker() {
  const [result, setResult] = useState<"standard" | "review" | null>(null);
  const [checkedZip, setCheckedZip] = useState("");

  function check(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const zip = String(new FormData(event.currentTarget).get("zipcode") || "").replace(/\D/g, "").slice(0, 5);
    if (!/^\d{5}$/.test(zip)) return;
    setCheckedZip(zip);
    setResult(standardZips.has(zip) ? "standard" : "review");
  }

  return (
    <div className="zip-checker">
      <p className="eyebrow icon-eyebrow"><BrandIcon name="service-area" />Check before booking</p>
      <h2>Is your ZIP in our service area?</h2>
      <form onSubmit={check}>
        <label htmlFor="service-zip">Service ZIP code</label>
        <div><input id="service-zip" name="zipcode" inputMode="numeric" autoComplete="postal-code" maxLength={5} pattern="[0-9]{5}" onInput={() => setResult(null)} placeholder="29401" required /><button className="button" type="submit">Check ZIP</button></div>
      </form>
      {result === "standard" && <div className="zip-result available" role="status"><BrandIcon name="secure-verified" /><strong>This ZIP is in our standard Charleston-area review zone.</strong><p>Continue to the cleaning planner. Your exact address, requested service, and provider availability are confirmed before the appointment.</p><Link className="button" href="/#pricing-tool">Build my clean →</Link></div>}
      {result === "review" && <div className="zip-result review" role="status"><BrandIcon name="waitlist-coming-soon" /><strong>This ZIP needs a quick coverage review.</strong><p>We may still be able to help, especially with a recurring home or vacation-rental property. Send the address and service details to our Charleston team before booking.</p><Link className="button" href={`/contact?zip=${checkedZip}`}>Request coverage review →</Link></div>}
    </div>
  );
}
