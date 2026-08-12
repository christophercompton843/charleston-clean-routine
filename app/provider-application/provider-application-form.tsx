"use client";

import { FormEvent, useState } from "react";

export default function ProviderApplicationForm() {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setError("");
    const form = event.currentTarget;

    try {
      const formData = new FormData(form);
      formData.set("form-name", "provider-application");
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      if (!response.ok) throw new Error("We could not send your application.");
      form.reset();
      setState("success");
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "We could not send your application. Please try again.");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="contact-success" role="status">
        <span aria-hidden="true">✓</span>
        <h2>Application received.</h2>
        <p>Thank you for your interest in the Charleston Clean Routine provider network. Our team will review your information and contact qualified applicants using the details provided.</p>
        <button className="button" type="button" onClick={() => setState("idle")}>Submit another application</button>
      </div>
    );
  }

  return (
    <form
      name="provider-application"
      data-netlify="true"
      netlify-honeypot="website"
      className="contact-form"
      onSubmit={submit}
    >
      <input type="hidden" name="form-name" value="provider-application" />
      <div className="contact-form-grid">
        <label><span>First name</span><input name="firstName" autoComplete="given-name" required maxLength={80} /></label>
        <label><span>Last name</span><input name="lastName" autoComplete="family-name" required maxLength={80} /></label>
        <label><span>Email</span><input name="email" type="email" autoComplete="email" required maxLength={180} /></label>
        <label><span>Mobile</span><input name="phone" type="tel" autoComplete="tel" required maxLength={40} /></label>
        <label><span>Business name <small>(if applicable)</small></span><input name="businessName" maxLength={120} /></label>
        <label><span>Primary ZIP code</span><input name="primaryZip" inputMode="numeric" pattern="[0-9]{5}" maxLength={5} required /></label>
        <label><span>Years of residential cleaning experience</span><input name="experienceYears" type="number" min="0" max="50" required /></label>
        <label><span>Preferred service radius</span><select name="serviceRadius" required><option value="">Choose one</option><option>Up to 10 miles</option><option>Up to 20 miles</option><option>Up to 30 miles</option><option>More than 30 miles</option></select></label>
        <label className="contact-form-wide"><span>Charleston-area communities you can serve</span><textarea name="serviceAreas" rows={3} required maxLength={600} placeholder="Example: Mount Pleasant, Daniel Island, Isle of Palms, Sullivan’s Island" /></label>
        <label><span>Current general liability insurance</span><select name="insuranceStatus" required><option value="">Choose one</option><option>Yes — current coverage</option><option>I can obtain coverage before accepting assignments</option><option>No</option></select></label>
        <label><span>Reliable transportation</span><select name="transportation" required><option value="">Choose one</option><option>Yes</option><option>No</option></select></label>
        <label><span>Professional supplies and equipment</span><select name="supplies" required><option value="">Choose one</option><option>Yes</option><option>I can obtain them before accepting assignments</option><option>No</option></select></label>
        <label><span>Eligible to provide a completed Form W-9</span><select name="w9Eligible" required><option value="">Choose one</option><option>Yes</option><option>No</option></select></label>
        <label><span>Authorize a background screening</span><select name="backgroundAuthorization" required><option value="">Choose one</option><option>Yes</option><option>No</option></select></label>
        <label><span>Available weekdays</span><select name="weekdayAvailability" required><option value="">Choose one</option><option>Yes — mornings and afternoons</option><option>Limited weekday availability</option><option>No</option></select></label>
        <label><span>Available weekends</span><select name="weekendAvailability" required><option value="">Choose one</option><option>Yes</option><option>Limited weekend availability</option><option>No</option></select></label>
        <label className="contact-form-wide"><span>Relevant experience and service standards</span><textarea name="experienceSummary" rows={5} minLength={40} maxLength={1500} required placeholder="Tell us about the homes or rentals you clean, your quality-control routine, and what dependable service means to you." /></label>
        <label><span>Reference 1 — name and telephone</span><input name="referenceOne" required maxLength={180} /></label>
        <label><span>Reference 2 — name and telephone</span><input name="referenceTwo" required maxLength={180} /></label>
        <label className="contact-form-wide"><span>Anything else we should know? <small>(optional)</small></span><textarea name="additionalNotes" rows={4} maxLength={1200} /></label>
      </div>

      <label className="honeypot-field" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>

      <label className="consent-check">
        <input name="independentContractorAcknowledgment" type="checkbox" value="Acknowledged" required />
        <span>I understand that this is an opportunity to join an independent provider network, not an offer of employment. Assignments are not guaranteed, and final approval requires verification of applicable documents and service standards.</span>
      </label>

      <label className="consent-check">
        <input name="accuracyCertification" type="checkbox" value="Certified" required />
        <span>I certify that the information in this application is accurate and authorize Charleston Clean Routine to contact the references provided.</span>
      </label>

      <p className="contact-privacy">Do not submit a Social Security number, tax document, driver’s-license number, insurance document, banking information, or other sensitive credentials through this form. Qualified applicants will receive secure instructions for any later verification.</p>
      {state === "error" && <p className="contact-error" role="alert">{error}</p>}
      <button className="button" type="submit" disabled={state === "sending"}>{state === "sending" ? "Submitting…" : "Submit provider application"} <span aria-hidden="true">→</span></button>
    </form>
  );
}
