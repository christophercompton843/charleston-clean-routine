"use client";

import { useMemo, useState } from "react";
import BrandIcon from "./brand-icon";
import {
  ADD_ON_PRICING,
  LAUNCH_DISCOUNT,
  PLATFORM_PRICING,
  PROPERTY_SIZES,
  type Frequency,
  type PropertySize,
  type ResidentialService,
} from "./pricing-data";

const BOOKING_URL = "https://www.jointidywise.com/book/charleston-clean-routine-7mjd3";

const serviceOptions: Array<{ name: ResidentialService; label: string; icon: "routine-clean" | "deep-clean" | "move-in-out" }> = [
  { name: "Home Routine Clean", label: "Routine Clean", icon: "routine-clean" },
  { name: "Home Deep Clean", label: "Deep Clean", icon: "deep-clean" },
  { name: "Move-In / Move-Out Clean", label: "Move-In / Move-Out", icon: "move-in-out" },
];

const frequencies: Frequency[] = ["Single", "Monthly", "Bi-Weekly", "Weekly"];
type Condition = "Excellent" | "Good" | "Fair" | "Needs Work / Very Dirty";

type AddOns = {
  depositReady: boolean;
  refrigerator: boolean;
  oven: boolean;
  baseboards: boolean;
  windows: number;
  laundry: number;
  linens: number;
};

const emptyAddOns: AddOns = {
  depositReady: false,
  refrigerator: false,
  oven: false,
  baseboards: false,
  windows: 0,
  laundry: 0,
  linens: 0,
};

function formatPrice(value: number) {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 2,
  });
}

export default function PricePlanner() {
  const [firstName, setFirstName] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [service, setService] = useState<ResidentialService>("Home Routine Clean");
  const [propertySize, setPropertySize] = useState<PropertySize>(PROPERTY_SIZES[2]);
  const [frequency, setFrequency] = useState<Frequency>("Single");
  const [condition, setCondition] = useState<Condition>("Good");
  const [addOns, setAddOns] = useState<AddOns>(emptyAddOns);
  const [showEstimate, setShowEstimate] = useState(false);

  const effectiveService: ResidentialService = condition === "Fair" && service === "Home Routine Clean" ? "Home Deep Clean" : service;
  const requiresReview = condition === "Needs Work / Very Dirty";

  const effectiveFrequency: Frequency = effectiveService === "Move-In / Move-Out Clean" ? "Single" : frequency;
  const availableFrequencies: Frequency[] = effectiveService === "Move-In / Move-Out Clean" ? ["Single"] : frequencies;
  const basePrice = PLATFORM_PRICING[effectiveService][propertySize][effectiveFrequency] ?? PLATFORM_PRICING[effectiveService][propertySize].Single;
  if (basePrice == null) throw new Error(`No published price for ${effectiveService}, ${propertySize}, ${effectiveFrequency}.`);
  const addOnTotal = useMemo(() => {
    return (
      (effectiveService === "Move-In / Move-Out Clean" && addOns.depositReady ? ADD_ON_PRICING.depositReady.price : 0) +
      (addOns.refrigerator ? ADD_ON_PRICING.refrigerator.price : 0) +
      (addOns.oven ? ADD_ON_PRICING.oven.price : 0) +
      (addOns.baseboards ? ADD_ON_PRICING.baseboards.price : 0) +
      addOns.windows * ADD_ON_PRICING.windows.price +
      addOns.laundry * ADD_ON_PRICING.laundry.price +
      addOns.linens * ADD_ON_PRICING.linens.price
    );
  }, [addOns, effectiveService]);

  const recurringEligible = effectiveFrequency !== "Single" && effectiveService !== "Move-In / Move-Out Clean";
  const displayedPrice = basePrice + addOnTotal;
  const firstVisitPrice = recurringEligible ? Math.max(0, displayedPrice - LAUNCH_DISCOUNT) : displayedPrice;

  function increment(key: "windows" | "laundry" | "linens", delta: number) {
    setAddOns((current) => ({ ...current, [key]: Math.max(0, current[key] + delta) }));
  }

  return (
    <section className="planner-section instant-pricing" id="pricing-tool">
      <div className="planner-intro">
        <p className="eyebrow icon-eyebrow"><BrandIcon name="estimate" />Instant residential pricing</p>
        <h2>Your home. Your price.</h2>
        <p>Build an estimated price here before giving us your email or phone number. Vacation rentals and multi-property portfolios receive a personalized quote instead.</p>
        <ul>
          <li><BrandIcon name="pricing" /> Prices use the current Charleston Clean Routine pricing schedule</li>
          <li><BrandIcon name="secure-verified" /> Contact information is optional until you want to save or book</li>
          <li><BrandIcon name="discount" /> LAUNCH35 applies to the first eligible recurring Routine or Deep Clean</li>
        </ul>
      </div>

      <div className="planner-shell estimator-card">
        <div className="estimator-step">
          <span className="step-kicker">1 · Start with your name</span>
          <h3>{firstName ? `Thanks, ${firstName}. Let’s price your home.` : "What should we call you?"}</h3>
          <label className="estimator-field"><span>First name</span><input autoComplete="given-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First name" /></label>
        </div>

        <div className="estimator-step">
          <span className="step-kicker">2 · Property</span>
          <div className="estimator-grid two-col">
            <label className="estimator-field"><span>Street address</span><input autoComplete="street-address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Service address" /></label>
            <label className="estimator-field"><span>ZIP code</span><input inputMode="numeric" maxLength={5} value={zipcode} onChange={(e) => setZipcode(e.target.value.replace(/\D/g, ""))} placeholder="29401" /></label>
          </div>
        </div>

        <div className="estimator-step">
          <span className="step-kicker">3 · Service</span>
          <div className="choice-grid service-choice-grid">
            {serviceOptions.map((option) => (
              <button key={option.name} type="button" className={`choice-card ${service === option.name ? "selected" : ""}`} onClick={() => setService(option.name)}>
                <BrandIcon name={option.icon} className="choice-icon" />
                <strong>{option.label}</strong>
              </button>
            ))}
          </div>
          <a className="rental-quote-link" href="/portfolio">Vacation rental or multiple properties? Request a personalized property quote →</a>
        </div>

        <div className="estimator-step">
          <span className="step-kicker">4 · Home details</span>
          <div className="estimator-grid two-col">
            <label className="estimator-field"><span>Bedrooms & bathrooms</span><select value={propertySize} onChange={(e) => setPropertySize(e.target.value as PropertySize)}>{PROPERTY_SIZES.map((size) => <option key={size}>{size}</option>)}</select></label>
            <label className="estimator-field"><span>Frequency</span><select value={effectiveFrequency} onChange={(e) => setFrequency(e.target.value as Frequency)}>{availableFrequencies.map((item) => <option key={item}>{item}</option>)}</select></label>
          </div>
          <div className="condition-row">
            {(["Excellent", "Good", "Fair", "Needs Work / Very Dirty"] as Condition[]).map((item) => (
              <button key={item} type="button" className={`condition-button ${condition === item ? "selected" : ""}`} onClick={() => setCondition(item)}>{item}</button>
            ))}
          </div>
          {condition === "Fair" && service === "Home Routine Clean" && <p className="estimator-note">Fair-condition Routine Clean requests are priced as Deep Clean so the first visit has enough time for the property.</p>}
          {requiresReview && <p className="estimator-warning">Homes marked Needs Work / Very Dirty require a custom scope review and are not auto-quoted.</p>}
        </div>

        <div className="estimator-step">
          <span className="step-kicker">5 · Optional add-ons</span>
          <div className="addon-grid">
            {([
              ["depositReady", ADD_ON_PRICING.depositReady.label, ADD_ON_PRICING.depositReady.price, "add-ons"],
              ["refrigerator", ADD_ON_PRICING.refrigerator.label, ADD_ON_PRICING.refrigerator.price, "kitchen"],
              ["oven", ADD_ON_PRICING.oven.label, ADD_ON_PRICING.oven.price, "kitchen"],
              ["baseboards", ADD_ON_PRICING.baseboards.label, ADD_ON_PRICING.baseboards.price, "deep-clean"],
            ] as const).map(([key, label, price, icon]) => key === "depositReady" && effectiveService !== "Move-In / Move-Out Clean" ? null : (
              <button key={key} type="button" className={`addon-card ${addOns[key] ? "selected" : ""}`} onClick={() => setAddOns((current) => ({ ...current, [key]: !current[key] }))}>
                <img src={`/icons/${icon}.png`} alt="" />
                <span><strong>{label}</strong><small>+${price}</small></span>
              </button>
            ))}
            {([
              ["windows", ADD_ON_PRICING.windows.label, ADD_ON_PRICING.windows.price, "window-cleaning"],
              ["laundry", ADD_ON_PRICING.laundry.label, ADD_ON_PRICING.laundry.price, "laundry"],
              ["linens", ADD_ON_PRICING.linens.label, ADD_ON_PRICING.linens.price, "bedroom"],
            ] as const).map(([key, label, price, icon]) => (
              <div className="addon-card quantity-card" key={key}>
                <img src={`/icons/${icon}.png`} alt="" />
                <span><strong>{label}</strong><small>+${price} each</small></span>
                <div className="quantity-control"><button type="button" onClick={() => increment(key, -1)}>−</button><b>{addOns[key]}</b><button type="button" onClick={() => increment(key, 1)}>+</button></div>
              </div>
            ))}
          </div>
        </div>

        <button className="button estimate-button" type="button" onClick={() => setShowEstimate(true)} disabled={!firstName.trim() || requiresReview}>See my estimated price</button>

        {requiresReview && <a className="button secondary-button" href="/contact">Request a custom scope review</a>}

        {showEstimate && !requiresReview && (
          <div className="estimate-result" aria-live="polite">
            <BrandIcon name="estimate" className="result-icon" />
            <span>Estimated service price</span>
            <strong>${formatPrice(displayedPrice)}</strong>
            {recurringEligible && <p><b>First eligible recurring visit with LAUNCH35: ${formatPrice(firstVisitPrice)}</b><br />Regular recurring visit price: ${formatPrice(displayedPrice)}</p>}
            <p className="estimate-disclaimer">Estimate is based on the property, condition, service, frequency and add-ons you selected. Final price assumes those details are accurate. Material differences in property condition, size or requested scope may require an adjustment before work begins.</p>
            <div className="save-estimate">
              <h4>Ready to choose live availability?</h4>
              <p>Continue to the secure booking page to select your service, arrival time, and enter the contact details needed for the appointment.</p>
              <a className="button" href={BOOKING_URL}>Continue to live booking →</a>
              <p className="booking-availability-note">The booking page confirms the live service price and availability. If no suitable time appears, contact us rather than starting over; your estimate remains visible here.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
