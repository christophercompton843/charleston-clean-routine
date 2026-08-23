"use client";

import { useMemo, useState } from "react";
import BrandIcon from "./brand-icon";
import {
  ADD_ON_PRICING,
  LAUNCH_DISCOUNT,
  PLATFORM_PRICING,
  PROPERTY_SIZES,
  ZONE_OPTIONS,
  type PricingZone,
  type PropertySize,
  type ResidentialService,
} from "./pricing-data";

const BOOKING_URL = "https://www.jointidywise.com/book/charleston-clean-routine-7mjd3";

const serviceOptions: Array<{ name: ResidentialService; label: string; icon: "routine-clean" | "deep-clean" | "move-in-out" }> = [
  { name: "Home Routine Clean", label: "Routine Clean", icon: "routine-clean" },
  { name: "Home Deep Clean", label: "Deep Clean", icon: "deep-clean" },
  { name: "Move-In / Move-Out Clean", label: "Move-In / Move-Out", icon: "move-in-out" },
];

const frequencies = ["Single", "Monthly", "Bi-Weekly", "Weekly"] as const;
type Frequency = (typeof frequencies)[number];
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

export default function PricePlanner() {
  const [firstName, setFirstName] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [zone, setZone] = useState<PricingZone>("Standard");
  const [service, setService] = useState<ResidentialService>("Home Routine Clean");
  const [propertySize, setPropertySize] = useState<PropertySize>(PROPERTY_SIZES[2]);
  const [frequency, setFrequency] = useState<Frequency>("Single");
  const [condition, setCondition] = useState<Condition>("Good");
  const [addOns, setAddOns] = useState<AddOns>(emptyAddOns);
  const [showEstimate, setShowEstimate] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const effectiveService: ResidentialService = condition === "Fair" && service === "Home Routine Clean" ? "Home Deep Clean" : service;
  const requiresReview = condition === "Needs Work / Very Dirty";

  const basePrice = PLATFORM_PRICING[effectiveService][propertySize][zone];
  const addOnTotal = useMemo(() => {
    return (
      (addOns.depositReady ? ADD_ON_PRICING.depositReady.price : 0) +
      (addOns.refrigerator ? ADD_ON_PRICING.refrigerator.price : 0) +
      (addOns.oven ? ADD_ON_PRICING.oven.price : 0) +
      (addOns.baseboards ? ADD_ON_PRICING.baseboards.price : 0) +
      addOns.windows * ADD_ON_PRICING.windows.price +
      addOns.laundry * ADD_ON_PRICING.laundry.price +
      addOns.linens * ADD_ON_PRICING.linens.price
    );
  }, [addOns]);

  const recurringEligible = frequency !== "Single" && effectiveService === "Home Routine Clean";
  const displayedPrice = basePrice + addOnTotal;
  const firstVisitPrice = recurringEligible ? Math.max(0, displayedPrice - LAUNCH_DISCOUNT) : displayedPrice;

  const bookingLink = useMemo(() => {
    const url = new URL(BOOKING_URL);
    if (firstName) url.searchParams.set("f_name", firstName.trim());
    if (email) url.searchParams.set("email", email.trim().toLowerCase());
    if (phone) url.searchParams.set("phone", phone.replace(/\D/g, ""));
    if (zipcode) url.searchParams.set("zipcode", zipcode);
    return url.toString();
  }, [email, firstName, phone, zipcode]);

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
          <li><BrandIcon name="discount" /> LAUNCH35 applies to the first eligible recurring Routine Clean</li>
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
          <div className="choice-grid zone-grid">
            {ZONE_OPTIONS.map((option) => (
              <button key={option.zone} type="button" className={`choice-card ${zone === option.zone ? "selected" : ""}`} onClick={() => setZone(option.zone)}>
                <BrandIcon name="service-area" className="choice-icon" />
                <strong>{option.title}</strong><small>{option.places}</small>
              </button>
            ))}
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
            <label className="estimator-field"><span>Frequency</span><select value={frequency} onChange={(e) => setFrequency(e.target.value as Frequency)}>{frequencies.map((item) => <option key={item}>{item}</option>)}</select></label>
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
              ["depositReady", "Deposit Ready Detail", 90, "add-ons"],
              ["refrigerator", "Inside refrigerator", 50, "kitchen"],
              ["oven", "Inside oven", 50, "kitchen"],
              ["baseboards", "Baseboards", 65, "deep-clean"],
            ] as const).map(([key, label, price, icon]) => (
              <button key={key} type="button" className={`addon-card ${addOns[key] ? "selected" : ""}`} onClick={() => setAddOns((current) => ({ ...current, [key]: !current[key] }))}>
                <img src={`/icons/${icon}.png`} alt="" />
                <span><strong>{label}</strong><small>+${price}</small></span>
              </button>
            ))}
            {([
              ["windows", "Interior windows", 20, "window-cleaning"],
              ["laundry", "Wash & fold", 50, "laundry"],
              ["linens", "Change linens", 25, "bedroom"],
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
            <strong>${displayedPrice}</strong>
            {recurringEligible && <p><b>First eligible recurring visit with LAUNCH35: ${firstVisitPrice}</b><br />Regular recurring visit price: ${displayedPrice}</p>}
            <p className="estimate-disclaimer">Estimate is based on the property, condition, service, zone and add-ons you selected. Final price assumes those details are accurate. Material differences in property condition, size or requested scope may require an adjustment before work begins.</p>
            <div className="save-estimate">
              <h4>Want to keep this estimate?</h4>
              <p>Add contact information only if you want to carry your details into booking.</p>
              <div className="estimator-grid two-col">
                <label className="estimator-field"><span>Email</span><input type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
                <label className="estimator-field"><span>Mobile</span><input type="tel" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} /></label>
              </div>
              <a className="button" href={bookingLink}>Book this service →</a>
              <p className="booking-availability-note">If the booking calendar shows no available time, contact us rather than starting over. Your estimate remains visible on this page.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
