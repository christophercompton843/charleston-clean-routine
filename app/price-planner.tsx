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
        <p className="eyebrow icon-eyebrow"><BrandIcon name="estimate" />Instant residential pricing</p>
        <h2>Your home. Your price.</h2>
        <p>See your residential cleaning price before entering contact information. Vacation rentals and multi-property portfolios use a property-specific pricing path.</p>
        <ul>
          <li><BrandIcon name="pricing" /> Prices use the current Charleston Clean Routine pricing schedule</li>
          <li><BrandIcon name="secure-verified" /> No contact information required to see your price</li>
        </ul>
      </div>

      <div className="planner-shell estimator-card">
        <div className="estimator-step">
          <span className="step-kicker">1 · Property</span>
          <div className="estimator-grid">
            <label className="estimator-field"><span>ZIP code</span><input inputMode="numeric" maxLength={5} value={zipcode} onChange={(e) => setZipcode(e.target.value.replace(/\D/g, ""))} placeholder="29401" /></label>
          </div>
        </div>

        <div className="estimator-step">
          <span className="step-kicker">2 · Service</span>
          <div className="choice-grid service-choice-grid">
            {serviceOptions.map((option) => (
              <button key={option.name} type="button" className={`choice-card ${service === option.name ? "selected" : ""}`} onClick={() => setService(option.name)}>
                <BrandIcon name={option.icon} className="choice-icon" />
                <strong>{option.label}</strong>
              </button>
            ))}
          </div>
          <a className="rental-quote-link" href="/portfolio">Vacation rental, Airbnb, or multiple properties? Use the property-care pricing path →</a>
        </div>

        <div className="estimator-step">
          <span className="step-kicker">3 · Home details</span>
          <div className="estimator-grid two-col">
            <label className="estimator-field"><span>Bedrooms & bathrooms</span><select value={propertySize} onChange={(e) => setPropertySize(e.target.value as PropertySize)}>{PROPERTY_SIZES.map((size) => <option key={size}>{size}</option>)}</select></label>
            <label className="estimator-field"><span>Frequency</span><select value={effectiveFrequency} onChange={(e) => setFrequency(e.target.value as Frequency)}>{availableFrequencies.map((item) => <option key={item}>{item}</option>)}</select></label>
          </div>
          {effectiveFrequency !== "Single" && effectiveService === "Home Routine Clean" && (
            <div className="founding-routine-note estimator-founding-note">
              <span>Founding Routine</span>
              <p>
                Recurring routines established during the founding enrollment period
                receive access to a premium recurring-service benefit. A limited number
                will also receive the Charleston Finish scent experience with every
                recurring visit for the life of that routine.
              </p>
            </div>
          )}
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

        <button className="button estimate-button" type="button" onClick={() => setShowEstimate(true)} disabled={requiresReview}>Get My Instant Price</button>

        {requiresReview && <a className="button secondary-button" href="/contact">Request a custom scope review</a>}

        {showEstimate && !requiresReview && (
          <div className="estimate-result" aria-live="polite">
            <BrandIcon name="estimate" className="result-icon" />
            <span>Your service price</span>
            <strong>${formatPrice(displayedPrice)}</strong>
            <p className="estimate-disclaimer">Estimate is based on the property, condition, service, frequency and add-ons you selected. Final price assumes those details are accurate. Material differences in property condition, size or requested scope may require an adjustment before work begins.</p>
            <div className="save-estimate">
              <h4>Ready to book?</h4>
              <p>Choose an available time and enter only the details needed to confirm your appointment.</p>
              <a className="button" href={BOOKING_URL}>Book This Cleaning →</a>
              <p className="booking-availability-note">The booking page confirms live availability and the service details before you finalize.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
