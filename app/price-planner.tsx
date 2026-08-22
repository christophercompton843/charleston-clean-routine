"use client";

import { FormEvent, useMemo, useState } from "react";
import BrandIcon from "./brand-icon";
import {
  getPlatformPrice,
  isLaunch35Eligible,
  LAUNCH35,
  pricingZoneForZip,
  propertyTierFor,
  type PricingFrequency,
  type PricingService,
} from "./pricing-data";

const BOOKING_URL = "https://www.jointidywise.com/book/charleston-clean-routine-7mjd3";
const TOTAL_STEPS = 9;

type PlannerValues = {
  firstName: string;
  lastName: string;
  address: string;
  zipcode: string;
  squareFeet: string;
  bedrooms: string;
  bathrooms: string;
  service: PricingService | "";
  condition: "" | "Excellent" | "Good" | "Fair" | "Needs Work" | "Very Dirty";
  frequency: PricingFrequency | "";
  email: string;
  phone: string;
  acceptedPolicies: boolean;
  website: string;
};

const initialValues: PlannerValues = {
  firstName: "", lastName: "", address: "", zipcode: "", squareFeet: "1500", bedrooms: "", bathrooms: "",
  service: "", condition: "", frequency: "", email: "", phone: "", acceptedPolicies: false, website: "",
};

const services: Array<{ value: PricingService; label: string; detail: string }> = [
  { value: "Home Routine Clean", label: "Routine clean", detail: "For a normally maintained home." },
  { value: "Home Deep Clean", label: "Deep clean", detail: "For buildup or a more detailed reset." },
  { value: "Move-In / Move-Out Clean", label: "Move-in / move-out", detail: "For an empty or nearly empty property." },
  { value: "Vacation Rental Turnover", label: "Vacation-rental turnover", detail: "For guest-ready resets between stays." },
];

const frequencies: Array<{ value: PricingFrequency; label: string }> = [
  { value: "Single", label: "One time" },
  { value: "Monthly", label: "Every 4 weeks" },
  { value: "Bi-Weekly", label: "Every other week" },
  { value: "Weekly", label: "Weekly" },
];

function bathroomOptions(bedrooms: number) {
  if (bedrooms <= 1) return [1];
  if (bedrooms === 2) return [1, 2];
  if (bedrooms === 3) return [2];
  if (bedrooms === 4) return [2, 3];
  return [3, 4];
}

export default function PricePlanner() {
  const [values, setValues] = useState<PlannerValues>(initialValues);
  const [step, setStep] = useState(0);
  const [outOfArea, setOutOfArea] = useState(false);
  const [state, setState] = useState<"idle" | "saving" | "error" | "sent">("idle");
  const [error, setError] = useState("");
  const [quoteNumber, setQuoteNumber] = useState("");

  const zone = pricingZoneForZip(values.zipcode);
  const tier = propertyTierFor(Number(values.bedrooms), Number(values.bathrooms));
  const needsReview = values.condition === "Needs Work" || values.condition === "Very Dirty";
  const estimate = values.service && tier && zone && !needsReview ? getPlatformPrice(values.service, tier, zone) : null;
  const promoEligible = Boolean(values.service && values.frequency && isLaunch35Eligible(values.service, values.frequency));
  const firstCleanPrice = estimate === null ? null : estimate - (promoEligible ? LAUNCH35 : 0);

  const bookingLink = useMemo(() => {
    const url = new URL(BOOKING_URL);
    if (values.firstName) url.searchParams.set("f_name", values.firstName.trim());
    if (values.lastName) url.searchParams.set("l_name", values.lastName.trim());
    if (values.email) url.searchParams.set("email", values.email.trim().toLowerCase());
    if (values.phone) url.searchParams.set("phone", values.phone.replace(/\D/g, ""));
    if (values.zipcode) url.searchParams.set("zipcode", values.zipcode);
    return url.toString();
  }, [values.email, values.firstName, values.lastName, values.phone, values.zipcode]);

  const update = <K extends keyof PlannerValues>(key: K, value: PlannerValues[K]) => {
    setValues((current) => ({ ...current, [key]: value }));
    setError("");
  };

  function next() {
    if (step === 0 && (!values.firstName.trim() || !values.lastName.trim())) return setError("Please enter your first and last name.");
    if (step === 1) {
      if (!values.address.trim() || !/^\d{5}$/.test(values.zipcode)) return setError("Please enter the service address and five-digit ZIP code.");
      if (!zone) { setOutOfArea(true); setStep(8); return; }
    }
    if (step === 2 && (!values.squareFeet || Number(values.squareFeet) < 1)) return setError("Please enter the approximate square footage.");
    if (step === 3 && !values.bedrooms) return setError("Please choose the number of bedrooms.");
    if (step === 4 && !values.bathrooms) return setError("Please choose the number of bathrooms.");
    if (step === 5 && !values.service) return setError("Please choose a cleaning service.");
    if (step === 6 && !values.condition) return setError("Please choose the home’s current condition.");
    if (step === 7 && !values.frequency) return setError("Please choose a cleaning frequency.");
    setStep((current) => Math.min(current + 1, TOTAL_STEPS - 1));
  }

  function chooseBedrooms(value: string) {
    update("bedrooms", value);
    update("bathrooms", "");
  }

  function chooseService(value: PricingService) {
    update("service", value);
    if (value === "Move-In / Move-Out Clean") update("frequency", "Single");
  }

  function chooseCondition(value: PlannerValues["condition"]) {
    update("condition", value);
    if (value === "Fair" && values.service === "Home Routine Clean") update("service", "Home Deep Clean");
  }

  function goBack() {
    setError("");
    if (outOfArea) {
      setOutOfArea(false);
      setStep(1);
      return;
    }
    setStep((current) => Math.max(0, current - 1));
  }

  async function saveEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!values.email.trim() && !values.phone.replace(/\D/g, "")) return setError("Enter an email address or mobile number so we can send your estimate.");
    if (!values.acceptedPolicies) return setError("Please acknowledge the Terms and Privacy Notice.");

    setState("saving");
    setError("");
    const quote = quoteNumber || `CCR-${Date.now().toString(36).toUpperCase().slice(-7)}`;
    setQuoteNumber(quote);
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "cleaning-plan", firstName: values.firstName, lastName: values.lastName, email: values.email,
          phone: values.phone, address: values.address, zipcode: values.zipcode, squareFeet: values.squareFeet,
          bedrooms: values.bedrooms, bathrooms: values.bathrooms, serviceType: values.service, condition: values.condition, frequency: values.frequency,
          zone: zone || "Outside current service area", estimate: estimate === null ? "Waitlist" : String(estimate),
          firstCleanPrice: firstCleanPrice === null ? "Waitlist" : String(firstCleanPrice), quoteNumber: quote,
          recommendation: outOfArea ? "Service-area waitlist with launch-offer availability notice" : needsReview ? "Custom scope review required; no condition surcharge quoted" : "Approved platform price; no good-condition surcharge",
          "bot-field": values.website,
        }).toString(),
      });
      if (!response.ok) throw new Error("We could not save your estimate.");
      setState("sent");
    } catch (caught) {
      setState("error");
      setError(caught instanceof Error ? caught.message : "We could not save your estimate. Please try again.");
    }
  }

  if (state === "sent") {
    return (
      <section className="planner-section" id="pricing-tool">
        <div className="planner-intro">
          <p className="eyebrow icon-eyebrow"><BrandIcon name="secure-verified" />Estimate saved</p>
          <h2>{outOfArea ? "We’ll keep you in the loop." : "Your price is ready."}</h2>
          <p>{outOfArea ? "We saved your service-area request and will contact you when coverage opens." : "Your estimate and quote number are saved. Continue to live availability when you’re ready."}</p>
        </div>
        <div className="planner-shell planner-result">
          <p className="eyebrow">Quote number</p><h3>{quoteNumber}</h3>
          {!outOfArea && estimate !== null && <p>Your approved list price is <strong>${estimate}</strong>{promoEligible ? `, with a first-clean price of $${firstCleanPrice} after LAUNCH35.` : "."}</p>}
          {!outOfArea && !needsReview && <a className="button planner-primary-action" href={bookingLink}>Choose an available time →</a>}
          {needsReview && <p className="planner-offer-note">No automatic condition fee was added. We’ll review the scope before confirming a price.</p>}
          {outOfArea && <p className="planner-offer-note">When service becomes available, we’ll send the applicable launch offer and coverage details.</p>}
          <button className="planner-start-over" type="button" onClick={() => { setValues(initialValues); setStep(0); setOutOfArea(false); setState("idle"); setQuoteNumber(""); }}>Start another estimate</button>
        </div>
      </section>
    );
  }

  return (
    <section className="planner-section" id="pricing-tool">
      <div className="planner-intro">
        <p className="eyebrow icon-eyebrow"><BrandIcon name="estimate" />Instant, zone-accurate pricing</p>
        <h2>One simple question at a time.</h2>
        <p>Tell us only what affects the work. We’ll show your approved price before asking where to send it.</p>
        <ul>
          <li><BrandIcon name="service-area" /> Premium, Standard, and Value zone pricing</li>
          <li><BrandIcon name="pricing" /> No callback or quote chasing</li>
          <li><BrandIcon name="discount" /> LAUNCH35 protects your first recurring-clean price</li>
        </ul>
      </div>

      <form className="planner-shell" name="cleaning-plan" data-netlify="true" netlify-honeypot="bot-field" onSubmit={saveEstimate}>
        <input type="hidden" name="form-name" value="cleaning-plan" />
        <input className="honeypot-field" tabIndex={-1} autoComplete="off" name="bot-field" value={values.website} onChange={(event) => update("website", event.target.value)} />
        <div className="planner-progress"><div className="planner-progress-top"><span>Instant estimate</span><strong>{Math.min(step + 1, TOTAL_STEPS)} of {TOTAL_STEPS}</strong></div><div className="planner-progress-track"><span style={{ width: `${((step + 1) / TOTAL_STEPS) * 100}%` }} /></div></div>

        {step === 0 && <fieldset className="planner-panel"><legend>What should we call you?</legend><p>Let’s keep this personal and simple.</p><div className="contact-grid"><label><span>First name</span><input autoFocus required autoComplete="given-name" value={values.firstName} onChange={(event) => update("firstName", event.target.value)} /></label><label><span>Last name</span><input required autoComplete="family-name" value={values.lastName} onChange={(event) => update("lastName", event.target.value)} /></label></div></fieldset>}
        {step === 1 && <fieldset className="planner-panel"><legend>Where are we cleaning?</legend><p>Your address places the property in the correct pricing and service zone.</p><div className="contact-grid"><label><span>Street address</span><input autoFocus required autoComplete="street-address" value={values.address} onChange={(event) => update("address", event.target.value)} /></label><label><span>ZIP code</span><input required inputMode="numeric" pattern="[0-9]{5}" maxLength={5} autoComplete="postal-code" value={values.zipcode} onChange={(event) => update("zipcode", event.target.value.replace(/\D/g, ""))} /></label></div></fieldset>}
        {step === 2 && <fieldset className="planner-panel"><legend>About how large is the home?</legend><p>Square footage helps us confirm the scope, even though the approved price is based on the bedroom-and-bathroom tier.</p><label className="planner-range"><span>Approximate square footage</span><strong>{Number(values.squareFeet).toLocaleString()} sq. ft.</strong><input autoFocus required type="range" min="300" max="7000" step="100" value={values.squareFeet} onChange={(event) => update("squareFeet", event.target.value)} /><small>300 sq. ft.<em>7,000+ sq. ft.</em></small></label></fieldset>}
        {step === 3 && <fieldset className="planner-panel"><legend>How many bedrooms?</legend><p>Choose the closest approved property tier.</p><div className="planner-choice-grid">{[1, 2, 3, 4, 5].map((count) => <button className={values.bedrooms === String(count) ? "planner-choice selected" : "planner-choice"} type="button" key={count} onClick={() => chooseBedrooms(String(count))}><strong>{count}</strong><span>{count === 1 ? "Bedroom / studio" : "Bedrooms"}</span></button>)}</div></fieldset>}
        {step === 4 && <fieldset className="planner-panel"><legend>How many bathrooms?</legend><p>Only the approved combinations for your bedroom count are shown.</p><div className="planner-choice-grid">{bathroomOptions(Number(values.bedrooms)).map((count) => <button className={values.bathrooms === String(count) ? "planner-choice selected" : "planner-choice"} type="button" key={count} onClick={() => update("bathrooms", String(count))}><strong>{count}</strong><span>{count === 1 ? "Bathroom" : "Bathrooms"}</span></button>)}</div></fieldset>}
        {step === 5 && <fieldset className="planner-panel"><legend>What kind of clean?</legend><p>Choose the service that best matches the work.</p><div className="planner-choice-grid service-choices">{services.map((service) => <button className={values.service === service.value ? "planner-choice selected" : "planner-choice"} type="button" key={service.value} onClick={() => chooseService(service.value)}><strong>{service.label}</strong><span>{service.detail}</span></button>)}</div></fieldset>}
        {step === 6 && <fieldset className="planner-panel"><legend>What is the home’s current condition?</legend><p>Excellent and Good are included with no surcharge. Condition helps us recommend the correct service instead of stacking surprise fees.</p><div className="planner-choice-grid condition-choices">{[
          ["Excellent", "Light cleaning needed · $0 condition fee"],
          ["Good", "Normal upkeep · $0 condition fee"],
          ["Fair", "Some buildup · Deep Clean if Routine was selected"],
          ["Needs Work", "Heavy cleaning · scope review required"],
          ["Very Dirty", "Significant buildup · scope review required"],
        ].map(([condition, detail]) => <button className={values.condition === condition ? "planner-choice selected" : "planner-choice"} type="button" key={condition} onClick={() => chooseCondition(condition as PlannerValues["condition"])}><strong>{condition}</strong><span>{detail}</span></button>)}</div></fieldset>}
        {step === 7 && <fieldset className="planner-panel"><legend>How often would you like service?</legend><p>LAUNCH35 applies to the first eligible recurring residential clean. Automatic percentage discounts are not added.</p><div className="planner-choice-grid">{frequencies.filter((frequency) => values.service !== "Move-In / Move-Out Clean" || frequency.value === "Single").map((frequency) => <button className={values.frequency === frequency.value ? "planner-choice selected" : "planner-choice"} type="button" key={frequency.value} onClick={() => update("frequency", frequency.value)}><strong>{frequency.label}</strong><span>{frequency.value === "Bi-Weekly" ? "Most popular" : "Approved cadence"}</span></button>)}</div></fieldset>}
        {step === 8 && <fieldset className="planner-panel estimate-panel"><legend>{outOfArea ? "We’re not in your ZIP yet." : needsReview ? "This home needs a scope review." : `Your approved estimate is $${estimate}.`}</legend>{outOfArea ? <p>Leave an email address or mobile number and we’ll contact you when coverage opens, along with the applicable launch offer.</p> : needsReview ? <p>We did not add an automatic condition surcharge. Leave your preferred contact method and we’ll confirm the correct scope before quoting.</p> : <><p>{zone} Zone · {tier} · {values.condition} condition · {values.frequency}. {promoEligible ? `Your first eligible clean is $${firstCleanPrice} after LAUNCH35; later visits return to $${estimate}.` : "This price already meets the final platform margin policy."}</p><dl className="estimate-summary"><div><dt>Service</dt><dd>{values.service}</dd></div><div><dt>Zone</dt><dd>{zone}</dd></div><div><dt>Regular price</dt><dd>${estimate}</dd></div><div><dt>Condition fee</dt><dd>$0</dd></div></dl></>}<div className="contact-grid"><label><span>Email</span><input type="email" autoComplete="email" value={values.email} onChange={(event) => update("email", event.target.value)} /></label><label><span>Mobile</span><input type="tel" autoComplete="tel" value={values.phone} onChange={(event) => update("phone", event.target.value)} /></label></div><label className="consent-check"><input type="checkbox" checked={values.acceptedPolicies} onChange={(event) => update("acceptedPolicies", event.target.checked)} /><span>I agree to the <a href="/terms" target="_blank">Terms</a> and acknowledge the <a href="/privacy" target="_blank">Privacy Notice</a>.</span></label><p className="privacy-note">Choose email, mobile, or both. Transactional confirmations and service alerts may be sent through the channel you provide.</p></fieldset>}

        <div className="planner-controls"><button className="planner-back" type="button" disabled={step === 0} onClick={goBack}>Back</button><div className="planner-control-action">{error && <p className="planner-error" role="alert">{error}</p>}{step < 8 ? <button className="button" type="button" onClick={next}>Next →</button> : <button className="button" type="submit" disabled={state === "saving"}>{state === "saving" ? "Saving…" : outOfArea ? "Join the availability list →" : needsReview ? "Request scope review →" : "Send & lock my estimate →"}</button>}</div></div>
      </form>
    </section>
  );
}
