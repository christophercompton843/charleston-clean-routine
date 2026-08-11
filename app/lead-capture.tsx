"use client";

import { FormEvent, useState } from "react";

export default function LeadCapture() {
  const [state, setState] = useState<"idle" | "saving" | "success" | "error">("idle");
  const [leadStatus, setLeadStatus] = useState<"available" | "coming-soon" | "coverage-review" | "priority-partner" | null>(null);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setState("saving");
    const data = new FormData(form);
    data.set("form-name", "service-area-lead");
    const response = await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams(data as unknown as Record<string, string>).toString() });
    if (response.ok) {
      const zipcode = String(data.get("zipcode") || "");
      const interest = String(data.get("interest") || "");
      const available = new Set(["29451", "29464", "29466", "29482", "29492"]);
      const comingSoon = new Set(["29401", "29403", "29405", "29406", "29407", "29410", "29412", "29414", "29418", "29420", "29439", "29455"]);
      setLeadStatus(interest === "Vacation-rental turnover" && available.has(zipcode) ? "priority-partner" : available.has(zipcode) ? "available" : comingSoon.has(zipcode) ? "coming-soon" : "coverage-review");
      form.reset();
      setState("success");
    } else setState("error");
  }

  return (
    <section className="lead-section" id="lead-capture" aria-labelledby="lead-title">
      <div>
        <p className="eyebrow eyebrow-light">Not ready to choose a date?</p>
        <h2 id="lead-title">Get launch availability for your area.</h2>
        <p>Tell us what you need and where. We’ll save your interest and send relevant availability—not a stream of generic email.</p>
        <div className="lead-next">
          <span>What happens next</span>
          <p><strong>1.</strong> We confirm whether your ZIP is in the current launch area.</p>
          <p><strong>2.</strong> We send the most relevant service or booking path.</p>
          <p><strong>3.</strong> No payment is due for submitting this form.</p>
        </div>
      </div>
      {state === "success" ? <div className="lead-success" role="status">
        {leadStatus === "available" && <><strong>Service is available in your area.</strong><span>We saved your details. Continue to live pricing and availability when you are ready.</span><a className="button button-spark" href="#pricing-tool">Continue to pricing →</a></>}
        {leadStatus === "coming-soon" && <><strong>We’re coming to your area.</strong><span>We’ll send launch and service updates relevant to your ZIP code.</span></>}
        {leadStatus === "priority-partner" && <><strong>Your property may qualify for portfolio care.</strong><span>We saved your turnover interest and will use your details for the most relevant property-service path.</span><a className="button button-spark" href="/contact?topic=partnership">Tell us about the property →</a></>}
        {leadStatus === "coverage-review" && <><strong>We’ll review coverage for your address.</strong><span>Your interest is saved. We’ll use the details provided to confirm availability or notify you when service expands.</span></>}
      </div> : <form name="service-area-lead" data-netlify="true" netlify-honeypot="website" onSubmit={submit}>
        <input type="hidden" name="form-name" value="service-area-lead" />
        <div className="lead-fields">
          <label><span>First name</span><input name="firstName" autoComplete="given-name" required maxLength={80} /></label>
          <label><span>Email</span><input name="email" type="email" autoComplete="email" required maxLength={180} /></label>
          <label><span>Mobile <small>(optional)</small></span><input name="phone" type="tel" autoComplete="tel" maxLength={40} /></label>
          <label><span>Service ZIP</span><input name="zipcode" inputMode="numeric" pattern="[0-9]{5}" maxLength={5} autoComplete="postal-code" required /></label>
          <label className="lead-service"><span>Interested in</span><select name="interest" defaultValue="Home cleaning"><option>Home cleaning</option><option>Apartment or condo cleaning</option><option>Vacation-rental turnover</option><option>Move-in or move-out cleaning</option><option>Provider opportunities</option></select></label>
        </div>
        <label className="honeypot-field" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
        <label className="lead-consent"><input name="consent" type="checkbox" value="yes" required /><span>I agree to receive relevant service and availability emails. If I provide a mobile number, I also agree to transactional availability and service-alert texts. Message and data rates may apply. I can opt out at any time.</span></label>
        {state === "error" && <p className="lead-error" role="alert">We could not save your details just now. Please try again.</p>}
        <button className="button button-spark" type="submit" disabled={state === "saving"}>{state === "saving" ? "Saving…" : "Send me availability"} →</button>
      </form>}
    </section>
  );
}
