"use client";

import { FormEvent, useState } from "react";

export default function ReviewForm() {
  const [state, setState] = useState<"idle" | "saving" | "success" | "error">("idle");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setState("saving");
    const data = new FormData(form);
    data.set("form-name", "customer-review");
    const response = await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams(data as unknown as Record<string, string>).toString() });
    if (response.ok) { form.reset(); setState("success"); } else setState("error");
  }
  if (state === "success") return <div className="contact-success" role="status"><span>✓</span><h2>Thank you.</h2><p>Your feedback has been received for verification. Reviews are displayed only after Charleston Clean Routine confirms the customer record and publication consent.</p></div>;
  return <form name="customer-review" data-netlify="true" netlify-honeypot="website" className="contact-form" onSubmit={submit}><input type="hidden" name="form-name" value="customer-review" /><div className="contact-form-grid">
    <label><span>Display name</span><input name="displayName" required maxLength={80} placeholder="First name and last initial" /></label>
    <label><span>Email used for service</span><input name="email" type="email" required maxLength={180} /></label>
    <label className="contact-form-wide"><span>Service</span><select name="service" required defaultValue=""><option value="" disabled>Choose one</option><option>Home cleaning</option><option>Apartment or condo cleaning</option><option>Deep cleaning</option><option>Move-in or move-out</option><option>Vacation-rental turnover</option><option>Refresh &amp; Reset</option><option>Deposit Ready Detail</option></select></label>
    <label className="contact-form-wide"><span>Rating</span><select name="rating" required defaultValue="5"><option value="5">5 — Excellent</option><option value="4">4 — Very good</option><option value="3">3 — Good</option><option value="2">2 — Needs improvement</option><option value="1">1 — Poor</option></select></label>
    <label className="contact-form-wide"><span>Your review</span><textarea name="text" rows={7} minLength={20} maxLength={1200} required /></label>
  </div><label className="honeypot-field">Website<input name="website" tabIndex={-1} /></label><label className="lead-consent review-consent"><input name="displayConsent" type="checkbox" value="yes" required /><span>I confirm this is my genuine experience and authorize Charleston Clean Routine to display my review and display name after verification. My email will not be published.</span></label>{state === "error" && <p className="contact-error">We could not save your review. Please check the fields and try again.</p>}<button className="button" type="submit" disabled={state === "saving"}>{state === "saving" ? "Submitting…" : "Submit review"} →</button></form>;
}
