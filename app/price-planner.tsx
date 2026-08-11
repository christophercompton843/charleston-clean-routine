"use client";

import { FormEvent, useMemo, useState } from "react";

const BOOKING_URL = "https://www.jointidywise.com/book/charleston-clean-routine-7mjd3";

type BookingStart = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  zipcode: string;
  acceptedPolicies: boolean;
  website: string;
};

const initialValues: BookingStart = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  zipcode: "",
  acceptedPolicies: false,
  website: "",
};

export default function PricePlanner() {
  const [values, setValues] = useState<BookingStart>(initialValues);
  const [state, setState] = useState<"idle" | "saving" | "error">("idle");
  const [error, setError] = useState("");

  const bookingLink = useMemo(() => {
    const url = new URL(BOOKING_URL);
    if (values.firstName) url.searchParams.set("f_name", values.firstName.trim());
    if (values.lastName) url.searchParams.set("l_name", values.lastName.trim());
    if (values.email) url.searchParams.set("email", values.email.trim().toLowerCase());
    if (values.phone) url.searchParams.set("phone", values.phone.replace(/\D/g, ""));
    if (values.zipcode) url.searchParams.set("zipcode", values.zipcode);
    return url.toString();
  }, [values]);

  const update = <K extends keyof BookingStart>(key: K, value: BookingStart[K]) => {
    setValues((current) => ({ ...current, [key]: value }));
  };

  async function beginBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("saving");
    setError("");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "booking-start",
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phone: values.phone,
          zipcode: values.zipcode,
          website: values.website,
        }).toString(),
      });
      if (!response.ok) throw new Error("We could not save your details.");

      window.location.assign(bookingLink);
    } catch (caught) {
      setState("error");
      setError(caught instanceof Error ? caught.message : "We could not save your details. Please try again.");
    }
  }

  return (
    <section className="planner-section simplified-booking" id="pricing-tool">
      <div className="planner-intro">
        <p className="eyebrow">One simple path to a confirmed clean</p>
        <h2>Save your details. See your price. Book your time.</h2>
        <p>
          Ready when you are. Schedule your clean routine and get live pricing at any
          hour. Plus, our 24/7 automated support is always here to help—no lost emails,
          missed calls, or waiting required.
        </p>
        <ul>
          <li><span aria-hidden="true">✓</span> No callback required</li>
          <li><span aria-hidden="true">✓</span> Live pricing and availability next</li>
          <li><span aria-hidden="true">✓</span> $35 off with code LAUNCH35 when you start recurring service</li>
        </ul>
      </div>

      <div className="planner-shell booking-start-card">
        <div className="booking-start-heading">
          <span>Step 1 of 2</span>
          <h3>Where should we send your booking details?</h3>
          <p>Next, choose your cleaning options and see the actual price and available times.</p>
        </div>
        <form name="booking-start" data-netlify="true" netlify-honeypot="website" onSubmit={beginBooking}>
          <input type="hidden" name="form-name" value="booking-start" />
          <div className="contact-grid">
            <label><span>First name</span><input required maxLength={80} autoComplete="given-name" value={values.firstName} onChange={(event) => update("firstName", event.target.value)} /></label>
            <label><span>Last name</span><input required maxLength={80} autoComplete="family-name" value={values.lastName} onChange={(event) => update("lastName", event.target.value)} /></label>
            <label><span>Email</span><input required maxLength={180} type="email" autoComplete="email" value={values.email} onChange={(event) => update("email", event.target.value)} /></label>
            <label><span>Mobile <small>(optional)</small></span><input maxLength={40} type="tel" autoComplete="tel" value={values.phone} onChange={(event) => update("phone", event.target.value)} /></label>
            <label><span>Service ZIP code</span><input required inputMode="numeric" pattern="[0-9]{5}" maxLength={5} autoComplete="postal-code" value={values.zipcode} onChange={(event) => update("zipcode", event.target.value.replace(/\D/g, ""))} /></label>
          </div>
          <label className="honeypot-field" aria-hidden="true">Website<input tabIndex={-1} autoComplete="off" value={values.website} onChange={(event) => update("website", event.target.value)} /></label>
          <label className="consent-check">
            <input required type="checkbox" checked={values.acceptedPolicies} onChange={(event) => update("acceptedPolicies", event.target.checked)} />
            <span>I agree to the <a href="/terms" target="_blank">Terms</a> and acknowledge the <a href="/privacy" target="_blank">Privacy Notice</a>.</span>
          </label>
          <p className="privacy-note">If you provide a mobile number, it may be used for transactional confirmations, reminders, and service alerts. Promotional texts require a separate opt-in.</p>
          {state === "error" && <p className="planner-error" role="alert">{error}</p>}
          <button className="button booking-continue" type="submit" disabled={state === "saving"}>
            {state === "saving" ? "Saving your details…" : "Continue to price & booking"} <span aria-hidden="true">→</span>
          </button>
          <p className="booking-handoff-note">Step 2 opens in this window with your contact details ready. Your appointment is confirmed only after you choose a service, price, and available time.</p>
        </form>
      </div>
    </section>
  );
}
