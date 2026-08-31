"use client";

import { useMemo, useState } from "react";
import BrandIcon from "./brand-icon";
import "./price-planner.css";
import {
  ADD_ON_PRICING,
  PLATFORM_PRICING,
  PROPERTY_SIZES,
  type Frequency,
  type PropertySize,
  type ResidentialService,
} from "./pricing-data";

const BOOKING_URL = "https://www.jointidywise.com/book/charleston-clean-routine-7mjd3";

const serviceOptions: Array<{
  name: ResidentialService;
  label: string;
  description: string;
  icon: "routine-clean" | "deep-clean" | "move-in-out";
}> = [
  { name: "Home Routine Clean", label: "Routine", description: "Ongoing care for a home already at a maintained baseline.", icon: "routine-clean" },
  { name: "Home Deep Clean", label: "Deep", description: "More time and detail for buildup, resets, and a more intensive first visit.", icon: "deep-clean" },
  { name: "Move-In / Move-Out Clean", label: "Move-In / Move-Out", description: "A one-time empty-home reset designed around a transition.", icon: "move-in-out" },
];

const frequencies: Frequency[] = ["Bi-Weekly", "Weekly", "Monthly", "Single"];
type Condition = "Excellent" | "Good" | "Fair" | "Needs Work / Very Dirty";

type AddOns = {
  depositReady: boolean;
  refrigerator: boolean;
  oven: boolean;
  baseboards: boolean;
  windows: number;
  laundry: number;
  linens: number;
  bathrooms: number;
};

const emptyAddOns: AddOns = {
  depositReady: false,
  refrigerator: false,
  oven: false,
  baseboards: false,
  windows: 0,
  laundry: 0,
  linens: 0,
  bathrooms: 0,
};

const steps = ["Property", "Your Home", "Condition", "Service Level", "The Options", "Your Routine"];

function formatPrice(value: number) {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 2,
  });
}

function frequencyLabel(frequency: Frequency) {
  if (frequency === "Bi-Weekly") return "Every two weeks";
  if (frequency === "Single") return "One time";
  return frequency;
}

export default function PricePlanner() {
  const [step, setStep] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [service, setService] = useState<ResidentialService>("Home Routine Clean");
  const [propertySize, setPropertySize] = useState<PropertySize>(PROPERTY_SIZES[2]);
  const [frequency, setFrequency] = useState<Frequency>("Bi-Weekly");
  const [condition, setCondition] = useState<Condition>("Good");
  const [addOns, setAddOns] = useState<AddOns>(emptyAddOns);
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [leadError, setLeadError] = useState("");

  const effectiveService: ResidentialService = condition === "Fair" && service === "Home Routine Clean" ? "Home Deep Clean" : service;
  const requiresConditionReview = condition === "Needs Work / Very Dirty";
  const requiresBathroomReview = addOns.bathrooms > 0;
  const requiresReview = requiresConditionReview || requiresBathroomReview;
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
  const selectedOptions = [
    addOns.depositReady && effectiveService === "Move-In / Move-Out Clean" ? ADD_ON_PRICING.depositReady.label : null,
    addOns.refrigerator ? ADD_ON_PRICING.refrigerator.label : null,
    addOns.oven ? ADD_ON_PRICING.oven.label : null,
    addOns.baseboards ? ADD_ON_PRICING.baseboards.label : null,
    addOns.windows ? `${addOns.windows} interior window${addOns.windows === 1 ? "" : "s"}` : null,
    addOns.laundry ? `${addOns.laundry} laundry load${addOns.laundry === 1 ? "" : "s"}` : null,
    addOns.linens ? `${addOns.linens} additional bed linen change${addOns.linens === 1 ? "" : "s"}` : null,
    addOns.bathrooms ? `${addOns.bathrooms} additional bathroom${addOns.bathrooms === 1 ? "" : "s"}` : null,
  ].filter(Boolean) as string[];

  function increment(key: "windows" | "laundry" | "linens" | "bathrooms", delta: number) {
    setAddOns((current) => ({ ...current, [key]: Math.max(0, current[key] + delta) }));
  }

  async function captureLead(stage: "pricing-start" | "pricing-complete") {
    if (!firstName.trim() || !email.trim()) return;
    try {
      const data = new URLSearchParams({
        "form-name": "pricing-lead",
        firstName: firstName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        address: address.trim(),
        zipcode: zipcode.trim(),
        stage,
        service: effectiveService,
        propertySize,
        condition,
        frequency: effectiveFrequency,
        options: selectedOptions.join(", "),
        displayedPrice: requiresReview ? "Review required" : formatPrice(displayedPrice),
      });
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString(),
      });
      if (!response.ok) throw new Error("Lead capture failed");
      setLeadCaptured(true);
      setLeadError("");
    } catch {
      setLeadError("Your estimate can continue, but we could not save your details yet.");
    }
  }

  function next() {
    if (step === 0) {
      if (!firstName.trim() || !email.trim()) {
        setLeadError("Please enter your first name and email so we can save your estimate.");
        return;
      }
      void captureLead("pricing-start");
    }
    if (step === 5) void captureLead("pricing-complete");
    setStep((current) => Math.min(steps.length, current + 1));
  }

  function back() {
    setStep((current) => Math.max(0, current - 1));
  }

  return (
    <section className="routine-builder" id="pricing-tool">
      <form name="pricing-lead" data-netlify="true" hidden>
        <input type="hidden" name="form-name" value="pricing-lead" />
        <input name="firstName" />
        <input name="email" />
        <input name="phone" />
        <input name="address" />
        <input name="zipcode" />
        <input name="stage" />
        <input name="service" />
        <input name="propertySize" />
        <input name="condition" />
        <input name="frequency" />
        <input name="options" />
        <input name="displayedPrice" />
      </form>

      <div className="planner-intro">
        <p className="eyebrow icon-eyebrow"><BrandIcon name="estimate" />Build Your Routine</p>
        <h2>Build it for your home. See your price.</h2>
        <p>
          Configure the property, service level, options, and frequency that actually affect the work.
          We save your estimate as you build it so you do not have to start over if you need help or come back later.
        </p>
        <ul>
          <li><BrandIcon name="pricing" /> Current Charleston Clean Routine residential pricing</li>
          <li><BrandIcon name="secure-verified" /> Your estimate stays tied to the contact information you provide</li>
        </ul>
      </div>

      <div className="routine-builder-shell">
        <div className="builder-rail" aria-label="Build Your Routine progress">
          {steps.map((label, index) => (
            <span key={label} className={index === step ? "active" : index < step ? "done" : ""}>{index + 1}. {label}</span>
          ))}
        </div>

        {step === 0 && (
          <div className="builder-stage">
            <span className="builder-kicker">01 · Property</span>
            <h3>Start with you and the home.</h3>
            <p>We ask for just enough information to save the estimate and reconnect it to you if you need help. Your mobile number remains optional.</p>
            <div className="lead-grid">
              <label className="builder-field"><span>First name</span><input value={firstName} onChange={(e) => setFirstName(e.target.value)} autoComplete="given-name" required placeholder="First name" /></label>
              <label className="builder-field"><span>Email</span><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required placeholder="you@example.com" /></label>
              <label className="builder-field"><span>Mobile · optional</span><input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" placeholder="(843) 555-0123" /></label>
            </div>
            <div className="address-grid">
              <label className="builder-field"><span>Property address · optional</span><input value={address} onChange={(e) => setAddress(e.target.value)} autoComplete="street-address" placeholder="123 Tradd Street" /></label>
              <label className="builder-field"><span>ZIP code</span><input inputMode="numeric" maxLength={5} value={zipcode} onChange={(e) => setZipcode(e.target.value.replace(/\D/g, ""))} placeholder="29401" /></label>
            </div>
            <div className="builder-help">We use these details to save and respond to your pricing inquiry. You will still see the price before booking.</div>
            {leadError && <div className="builder-warning" role="alert">{leadError}</div>}
            {leadCaptured && !leadError && <div className="lead-saved" role="status">Estimate details saved.</div>}
          </div>
        )}

        {step === 1 && (
          <div className="builder-stage">
            <span className="builder-kicker">02 · Your Home</span>
            <h3>Give the plan its scale.</h3>
            <p>Choose the bedroom-and-bath configuration that best matches the property. The furnished plan is representative—it helps make the scope tangible without pretending every Charleston home has the same layout.</p>
            <div className="home-config">
              <div className="home-plan">
                <span className="home-plan-badge">Representative plan · {propertySize}</span>
                <img src="/ccr-interactive-floorplan.png" alt="Representative furnished home floorplan for configuring a residential cleaning" />
              </div>
              <div className="size-list">
                {PROPERTY_SIZES.map((size) => <button key={size} type="button" className={`size-choice ${propertySize === size ? "selected" : ""}`} onClick={() => setPropertySize(size)}>{size}</button>)}
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="builder-stage">
            <span className="builder-kicker">03 · Current Condition</span>
            <h3>Tell us where the home is starting.</h3>
            <p>Condition matters because the first visit has to allow enough time to reach the standard you are booking.</p>
            <div className="choice-quad">
              {([
                ["Excellent", "Already exceptionally maintained; little or no buildup."],
                ["Good", "Normally maintained with ordinary lived-in use."],
                ["Fair", "Visible buildup or deferred detail work needs a deeper reset."],
                ["Needs Work / Very Dirty", "Heavy buildup or an unusually intensive scope that needs review."],
              ] as const).map(([item, description]) => (
                <button key={item} type="button" className={`condition-choice ${condition === item ? "selected" : ""}`} onClick={() => setCondition(item)}><strong>{item}</strong><small>{description}</small></button>
              ))}
            </div>
            {condition === "Fair" && service === "Home Routine Clean" && <div className="routine-note"><strong>Why the price changes:</strong> a Fair-condition home selected as Routine is priced as a Deep Clean so the first visit has enough time to establish the maintained baseline.</div>}
            {requiresConditionReview && <div className="builder-warning">Homes marked Needs Work / Very Dirty require a custom scope review rather than an automated quote. The site will not invent a price for work we have not defined.</div>}
          </div>
        )}

        {step === 3 && (
          <div className="builder-stage">
            <span className="builder-kicker">04 · Service Levels</span>
            <h3>Choose the level of care.</h3>
            <p>The quality standard does not change. What changes is the amount and type of work included in the visit.</p>
            <div className="service-builder-grid">
              {serviceOptions.map((option) => {
                const oneTimeOnly = option.name === "Move-In / Move-Out Clean";
                return (
                  <button key={option.name} type="button" className={`service-choice ${service === option.name ? "selected" : ""} ${oneTimeOnly ? "one-time-service" : ""}`} onClick={() => setService(option.name)}>
                    <BrandIcon name={option.icon} />
                    {oneTimeOnly && <span className="choice-label">One-time service</span>}
                    <strong>{option.label}</strong><small>{option.description}</small>
                  </button>
                );
              })}
            </div>
            <div className="builder-help"><a href="#whats-included">Want the room-by-room detail first? Open The Details above →</a></div>
          </div>
        )}

        {step === 4 && (
          <div className="builder-stage">
            <span className="builder-kicker">05 · The Options</span>
            <h3>Add only what your home needs.</h3>
            <p>Each published option shows its price. If your home has more bathrooms than the closest listed configuration, add them here so the scope is not understated.</p>
            <div className="addon-builder-grid">
              {effectiveService === "Move-In / Move-Out Clean" && <button type="button" className={`addon-choice ${addOns.depositReady ? "selected" : ""}`} onClick={() => setAddOns((c) => ({ ...c, depositReady: !c.depositReady }))}><strong>{ADD_ON_PRICING.depositReady.label}</strong><small>+${ADD_ON_PRICING.depositReady.price}</small></button>}
              <button type="button" className={`addon-choice ${addOns.refrigerator ? "selected" : ""}`} onClick={() => setAddOns((c) => ({ ...c, refrigerator: !c.refrigerator }))}><strong>{ADD_ON_PRICING.refrigerator.label}</strong><small>+${ADD_ON_PRICING.refrigerator.price}</small></button>
              <button type="button" className={`addon-choice ${addOns.oven ? "selected" : ""}`} onClick={() => setAddOns((c) => ({ ...c, oven: !c.oven }))}><strong>{ADD_ON_PRICING.oven.label}</strong><small>+${ADD_ON_PRICING.oven.price}</small></button>
              <button type="button" className={`addon-choice ${addOns.baseboards ? "selected" : ""}`} onClick={() => setAddOns((c) => ({ ...c, baseboards: !c.baseboards }))}><strong>{ADD_ON_PRICING.baseboards.label}</strong><small>+${ADD_ON_PRICING.baseboards.price}</small></button>
              {(["bathrooms", "windows", "laundry", "linens"] as const).map((key) => {
                if (key === "bathrooms") {
                  return <div className="quantity-addon" key={key}><div><strong>Additional bathrooms</strong><small>Beyond the selected home size · price confirmed before booking</small></div><div className="quantity-control"><button type="button" aria-label="Remove one additional bathroom" onClick={() => increment(key, -1)}>−</button><b>{addOns.bathrooms}</b><button type="button" aria-label="Add one additional bathroom" onClick={() => increment(key, 1)}>+</button></div></div>;
                }
                const data = key === "windows" ? ADD_ON_PRICING.windows : key === "laundry" ? ADD_ON_PRICING.laundry : ADD_ON_PRICING.linens;
                return <div className="quantity-addon" key={key}><div><strong>{data.label}</strong><small>+${data.price} each</small></div><div className="quantity-control"><button type="button" aria-label={`Remove one ${data.label}`} onClick={() => increment(key, -1)}>−</button><b>{addOns[key]}</b><button type="button" aria-label={`Add one ${data.label}`} onClick={() => increment(key, 1)}>+</button></div></div>;
              })}
            </div>
            {requiresBathroomReview && <div className="routine-note"><strong>Additional bathrooms included in the request:</strong> your base service and published add-ons remain visible, but the bathroom adjustment will be confirmed before booking because there is not yet an approved standalone bathroom add-on price in the pricing catalog.</div>}
            <div className="routine-note"><strong>The Charleston Finish:</strong> the finishing standard is part of the service. Optional scent pricing is not being added here until its final customer-facing price is formally set.</div>
          </div>
        )}

        {step === 5 && (
          <div className="builder-stage">
            <span className="builder-kicker">06 · Your Routine</span>
            <h3>Choose how often it stays handled.</h3>
            <p>{effectiveService === "Move-In / Move-Out Clean" ? "Move-In / Move-Out is intentionally a one-time service." : "We start with every two weeks—the most popular maintenance rhythm—while keeping weekly, monthly, and one-time service available when they fit better."}</p>
            <div className="frequency-builder-grid">
              {availableFrequencies.map((item) => {
                const price = PLATFORM_PRICING[effectiveService][propertySize][item] ?? PLATFORM_PRICING[effectiveService][propertySize].Single;
                const isPopular = item === "Bi-Weekly";
                const isOneTime = item === "Single";
                return (
                  <button key={item} type="button" className={`frequency-choice ${effectiveFrequency === item ? "selected" : ""} ${isPopular ? "popular-frequency" : ""} ${isOneTime ? "one-time-frequency" : ""}`} onClick={() => setFrequency(item)}>
                    {isPopular && <em>Most Popular</em>}
                    {isOneTime && <em>One-time option</em>}
                    <span>{frequencyLabel(item)}</span>
                    <strong>${formatPrice((price ?? 0) + addOnTotal)}</strong>
                    <small>per visit with published options</small>
                  </button>
                );
              })}
            </div>
            {effectiveService === "Home Routine Clean" && effectiveFrequency !== "Single" && <div className="routine-note"><strong>Your recurring routine:</strong> the same selected service structure and frequency provide the baseline for each recurring visit, with changes handled through the service process when needed.</div>}
            {effectiveFrequency === "Single" && effectiveService !== "Move-In / Move-Out Clean" && <div className="routine-note one-time-note"><strong>Choosing one time:</strong> this creates a single visit rather than an ongoing cleaning routine. You can switch back to recurring service at any time before booking.</div>}
          </div>
        )}

        {step === steps.length && (
          <div className="builder-stage">
            <span className="builder-kicker">Comprehensive Estimate</span>
            <h3>Here is the routine you built.</h3>
            <p>No mystery total. The summary keeps the property, service, frequency, and selected options together so you can see what the number represents.</p>
            {requiresReview ? (
              <>
                <div className="builder-summary">
                  <div className="summary-card"><dl>
                    <div><dt>Name</dt><dd>{firstName}</dd></div>
                    <div><dt>Property</dt><dd>{address || "Residential property"}{zipcode ? ` · ${zipcode}` : ""}</dd></div>
                    <div><dt>Home</dt><dd>{propertySize}</dd></div>
                    <div><dt>Condition</dt><dd>{condition}</dd></div>
                    <div><dt>Service</dt><dd>{effectiveService.replace("Home ", "")}</dd></div>
                    <div><dt>Routine</dt><dd>{frequencyLabel(effectiveFrequency)}</dd></div>
                    <div><dt>Options</dt><dd>{selectedOptions.length ? selectedOptions.join(", ") : "None added"}</dd></div>
                  </dl></div>
                  <div className="price-card"><span>Published-price subtotal</span><strong>${formatPrice(displayedPrice)}</strong><small>before any required scope adjustment</small></div>
                </div>
                <div className="builder-warning">{requiresConditionReview ? "This condition requires a custom scope review. " : ""}{requiresBathroomReview ? "Additional bathrooms require a confirmed price adjustment. " : ""}We will not invent a final price for work that is not yet in the approved pricing catalog.</div>
                <div className="builder-booking"><a className="button" href="/contact?topic=residential">Confirm My Scope →</a></div>
              </>
            ) : (
              <>
                <div className="builder-summary">
                  <div className="summary-card"><dl>
                    <div><dt>Name</dt><dd>{firstName}</dd></div>
                    <div><dt>Property</dt><dd>{address || "Residential property"}{zipcode ? ` · ${zipcode}` : ""}</dd></div>
                    <div><dt>Home</dt><dd>{propertySize}</dd></div>
                    <div><dt>Condition</dt><dd>{condition}</dd></div>
                    <div><dt>Service</dt><dd>{effectiveService.replace("Home ", "")}</dd></div>
                    <div><dt>Routine</dt><dd>{frequencyLabel(effectiveFrequency)}</dd></div>
                    <div><dt>Options</dt><dd>{selectedOptions.length ? selectedOptions.join(", ") : "None added"}</dd></div>
                  </dl></div>
                  <div className="price-card"><span>Your service price</span><strong>${formatPrice(displayedPrice)}</strong><small>{effectiveFrequency === "Single" ? "for this visit" : "per visit"} · based on the selections shown</small></div>
                </div>
                <div className="builder-booking"><a className="button button-spark" href={BOOKING_URL}>Book This Routine →</a><p>The booking page confirms live scheduling availability before you finalize.</p></div>
              </>
            )}
          </div>
        )}

        <div className="builder-controls">
          <button className="builder-back" type="button" onClick={back} disabled={step === 0}>{step === 0 ? "Start here" : "← Back"}</button>
          {step < steps.length ? <button className="button" type="button" onClick={next}>Continue →</button> : <button className="builder-back" type="button" onClick={() => setStep(0)}>Start over</button>}
        </div>
      </div>
    </section>
  );
}