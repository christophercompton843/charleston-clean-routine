"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import BrandIcon from "../brand-icon";

const standardZips = new Set([
  "29401", "29403", "29405", "29406", "29407", "29410", "29412", "29414",
  "29418", "29420", "29425", "29439", "29445", "29451", "29455", "29456", "29464",
  "29466", "29482", "29483", "29485", "29486", "29492",
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
      {result === "standard" && (
        <div className="zip-result available" role="status">
          <BrandIcon name="secure-verified" />
          <strong>Yes. This ZIP is within our current Charleston service area.</strong>
          <p>Build your service and see your residential price now. Your exact address and live provider availability are confirmed when you choose the appointment.</p>
          <Link className="button" href="/#pricing-tool">Build my routine →</Link>
        </div>
      )}
      {result === "review" && (
        <div className="zip-result review" role="status">
          <BrandIcon name="waitlist-coming-soon" />
          <strong>This ZIP needs a quick coverage check—but that is not a no.</strong>
          <p>Send us the address and service you need. We will check current coverage and, when appropriate, identify the next workable option rather than leaving you with a dead end.</p>
          <Link className="button" href={`/contact?zip=${checkedZip}`}>Check my address →</Link>
        </div>
      )}
    </div>
  );
}