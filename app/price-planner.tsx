"use client";

import { useMemo, useState } from "react";
import BrandIcon from "./brand-icon";
import {
  ADD_ON_PRICING,
  PLATFORM_PRICING,
  PROPERTY_SIZES,
  type Frequency,
  type PropertySize,
  type ResidentialService,
} from "./pricing-data";

const BOOKING_URL = "https://www.jointidywise.com/book/charleston-clean-routine-7mjd3";

const serviceOptions: Array<{ name: ResidentialService; label: string; icon: "routine-clean" | "deep-clean" | "move-in-out"; note: string }> = [
  { name: "Home Routine Clean", label: "Routine", icon: "routine-clean", note: "Ongoing care for a home that is already being maintained." },
  { name: "Home Deep Clean", label: "Deep", icon: "deep-clean", note: "A more detailed reset with added time for buildup and detail work." },
  { name: "Move-In / Move-Out Clean", label: "Move-In / Move-Out", icon: "move-in-out", note: "A one-time transition clean for an empty or changing home." },
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

  const displayedPrice = basePrice + addOnTotal;

  function increment(key: "windows" | "laundry" | "linens", delta: number) {
    setAddOns((current) => ({ ...current, [key]: Math.max(0, current[key] + delta) }));
  }

  return (
    <section className="planner-section instant-pricing" id="pricing-tool">
      <div className="planner-intro">
        <p className="eyebrow icon-eyebrow"><BrandIcon name="estimate" />Build Your Routine</p>
        <h2>See the service before you book it.</h2>
        <p>Configure your home, service level, options, and frequency. Your price appears before we ask you to book or provide contact information.</p>
        <ul>
          <li><BrandIcon name="pricing" /> Uses the current Charleston Clean Routine residential pricing schedule</li>
          <li><BrandIcon name="secure-verified" /> No contact information required to see your price</li>
        </ul>
        <div className="planner-story-image">
          <img src="/ccr-interactive-floorplan.png" alt="Representative furnished home floorplan used to explain cleaning scope" />
          <span>Representative plan · your price is based on the selections you make below</span>
        </div>
      </div>

      <div className="planner-shell estimator-card">
        <div className="estimator-step">
          <span className="step-kicker">1 · Property</span>
          <h3>Where is the home?</h3>
          <div className="estimator-grid">
            <label className="estimator-field"><span>ZIP code</span><input inputMode="numeric" maxLength={5} value={zipcode} onChange={(e) => setZipcode(e.target.value.replace(/\D/g, ""))} placeholder="29401" /></label>
          </div>
        </div>

        <div className="estimator-step">
          <span className="step-kicker">2 · Your Home</span>
          <h3>Choose the closest bedroom and bathroom configuration.</h3>
          <div className="estimator-grid">
            <label className="estimator-field"><span>Bedrooms & bathrooms</span><select value={propertySize} onChange={(e) => setPropertySize(e.target.value as PropertySize)}>{PROPERTY_SIZES.map((size) => <option key={size}>{size}</option>)}</select></label>
          </div>
          <p className="estimator-note">The floorplan above is a visual guide, not a representation of your exact architecture.</p>
        </div>

        <div className="estimator-step condition-step">
          <span className="step-kicker">3 · Current Condition</span>
          <h3>Tell us what the home needs today.</h3>
          <div className="condition-row">
            {(["Excellent", "Good", "Fair", "Needs Work / Very Dirty"] as Condition[]).map((item) => (
              <button key={item} type="button" className={`condition-button ${condition === item ? "selected" : ""}`} onClick={() => setCondition(item)}>{item}</button>
            ))}
          </div>
          <p className="estimator-note">Homes in good condition are not upcharged. Condition is used to make sure the selected service has enough time and scope to be successful.</p>
          {condition === "Fair" && service === "Home Routine Clean" && <p className="estimator-note">A Fair-condition Routine request is priced as a Deep Clean for the first visit so the home can be brought to the maintenance standard.</p>}
          {requiresReview && <p className="estimator-warning">Homes marked Needs Work / Very Dirty require a custom scope review rather than an automatic quote.</p>}
        </div>

        <div className="estimator-step service-level-step">
          <span className="step-kicker">4 · Service Levels</span>
          <h3>Choose the level of care.</h3>
          <div className="choice-grid service-choice-grid">
            {serviceOptions.map((option) => (
              <button key={option.name} type="button" className={`choice-card ${service === option.name ? "selected" : ""}`} onClick={() => setService(option.name)}>
                <BrandIcon name={option.icon} className="choice-icon" />
                <strong>{option.label}</strong>
                <small>{option.note}</small>
              </button>
            ))}
          </div>
          <a className="rental-quote-link" href="/portfolio">Vacation rental, Airbnb, or multiple properties? Use the property-care pricing path →</a>
        </div>

        <div className="estimator-step options-step">
          <span className="step-kicker">5 · The Options</span>
          <h3>Add only what your visit needs.</h3>
          <div className="options-visual"><img src="/ccr-options-addons.jpg" alt="Professional detail cleaning representing optional service enhancements" /></div>
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

        <div className="estimator-step routine-step">
          <span className="step-kicker">6 · Your Routine</span>
          <h3>One visit or an ongoing routine?</h3>
          <div className="frequency-choice-grid">
            {availableFrequencies.map((item) => (
              <button key={item} type="button" className={`condition-button ${effectiveFrequency === item ? "selected" : ""}`} onClick={() => setFrequency(item)}>{item}</button>
            ))}
          </div>
          {effectiveFrequency !== "Single" && effectiveService === "Home Routine Clean" && (
            <div className="founding-routine-note estimator-founding-note">
              <span>Founding Routine</span>
              <p>Recurring routines established during the founding enrollment period may qualify for introductory recurring-service benefits. Any applicable benefit is shown before booking.</p>
            </div>
          )}
        </div>

        <div className="estimator-step estimate-step">
          <span className="step-kicker">7 · Comprehensive Estimate</span>
          <h3>See the number, then decide.</h3>
          <p className="estimator-note">Prepaid multi-month pricing is not shown until the applicable discount schedule is finalized. We will not invent a discount or bury it in the estimate.</p>
          <button className="button estimate-button" type="button" onClick={() => setShowEstimate(true)} disabled={requiresReview}>Show My Price</button>
          {requiresReview && <a className="button secondary-button" href="/contact">Request a custom scope review</a>}
        </div>

        {showEstimate && !requiresReview && (
          <div className="estimate-result" aria-live="polite">
            <BrandIcon name="estimate" className="result-icon" />
            <span>Your configured service price</span>
            <strong>${formatPrice(displayedPrice)}</strong>
            <div className="estimate-summary">
              <p><b>Home:</b> {propertySize}</p>
              <p><b>Service:</b> {effectiveService}</p>
              <p><b>Condition:</b> {condition}</p>
              <p><b>Routine:</b> {effectiveFrequency}</p>
              <p><b>Options:</b> {addOnTotal > 0 ? `$${formatPrice(addOnTotal)} selected` : "None selected"}</p>
            </div>
            <p className="estimate-disclaimer">Price is based on the property, condition, service, frequency, and options selected above. Material differences in property condition, size, or requested scope may require an adjustment before work begins.</p>
            <div className="save-estimate">
              <h4>Ready to make it your routine?</h4>
              <p>Continue to live availability. The booking page confirms the appointment details before you finalize.</p>
              <a className="button" href={BOOKING_URL}>Book This Cleaning →</a>
              <p className="booking-availability-note">No callback is required to begin a standard residential booking.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
