"use client";

import { useMemo, useState } from "react";

const BOOKING_URL =
  "https://charlestoncleanroutine.bookingkoala.com/booknow?embed=true";

type Answers = {
  property: string;
  bedrooms: string;
  bathrooms: string;
  squareFeet: string;
  condition: string;
  lastClean: string;
  pets: string;
  serviceType: string;
  extras: string[];
  frequency: string;
  timing: string;
  turnoverWindow: string;
  linenPlan: string;
  accessNotes: string;
  zipcode: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  acceptedPolicies: boolean;
  website: string;
};

const initialAnswers: Answers = {
  property: "",
  bedrooms: "",
  bathrooms: "",
  squareFeet: "",
  condition: "",
  lastClean: "",
  pets: "",
  serviceType: "",
  extras: [],
  frequency: "",
  timing: "",
  turnoverWindow: "",
  linenPlan: "",
  accessNotes: "",
  zipcode: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  acceptedPolicies: false,
  website: "",
};

const propertyOptions = [
  ["house", "House", "A primary or second home"],
  ["apartment", "Apartment", "From a studio to a full-service residence"],
  ["condo", "Condo or townhome", "An owned residence or second home"],
  ["airbnb", "Airbnb or short-term rental", "A guest-ready turnover"],
  ["beach", "Beach rental home", "Sand, linens, and tight turnarounds"],
  ["move", "Move-in or move-out", "An empty-home reset"],
];

const extraOptions = [
  "Inside refrigerator",
  "Inside oven",
  "Inside cabinets",
  "Interior windows",
  "Laundry or linens",
  "Restocking",
  "Post-clean photos",
  "Guest-Ready Turndown",
  "A priority room",
];

const stepLabels = ["Property", "Size", "Condition", "Priorities", "Schedule"];

function FieldSelect({
  label,
  value,
  onChange,
  children,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
}) {
  return (
    <label className="planner-select">
      <span>{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        <option value="">Choose one</option>
        {children}
      </select>
    </label>
  );
}

export default function PricePlanner() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  const [attemptedNext, setAttemptedNext] = useState(false);
  const [submissionState, setSubmissionState] = useState<"idle" | "saving" | "error">("idle");
  const [submissionError, setSubmissionError] = useState("");

  const isRental = answers.property === "airbnb" || answers.property === "beach";

  const recommendation = useMemo(() => {
    if (answers.serviceType === "refresh") return "Refresh & Reset";
    const turndown = answers.extras.includes("Guest-Ready Turndown")
      ? " + Guest-Ready Turndown"
      : "";
    if (isRental) return `Vacation Rental Turnover${turndown}`;
    if (answers.property === "move" || answers.condition === "move") {
      return `Move-In / Move-Out Clean${turndown}`;
    }
    if (answers.condition === "reset" || answers.lastClean === "six-plus") {
      return `Deep Home Reset${turndown}`;
    }
    return `Routine Home Clean${turndown}`;
  }, [answers.condition, answers.extras, answers.lastClean, answers.property, answers.serviceType, isRental]);

  const bookingLink = useMemo(() => {
    const url = new URL(BOOKING_URL);
    if (answers.firstName) url.searchParams.set("f_name", answers.firstName);
    if (answers.lastName) url.searchParams.set("l_name", answers.lastName);
    if (answers.email) url.searchParams.set("email", answers.email);
    if (answers.phone) url.searchParams.set("phone", answers.phone.replace(/\D/g, ""));
    if (answers.zipcode) url.searchParams.set("zipcode", answers.zipcode);
    return url.toString();
  }, [answers.email, answers.firstName, answers.lastName, answers.phone, answers.zipcode]);

  const update = <K extends keyof Answers>(key: K, value: Answers[K]) => {
    setAnswers((current) => ({ ...current, [key]: value }));
  };

  const toggleExtra = (extra: string) => {
    setAnswers((current) => ({
      ...current,
      extras: current.extras.includes(extra)
        ? current.extras.filter((item) => item !== extra)
        : [...current.extras, extra],
    }));
  };

  const stepValid = [
    Boolean(answers.property),
    Boolean(answers.bedrooms && answers.bathrooms && answers.squareFeet),
    Boolean(answers.condition && answers.lastClean && answers.pets),
    Boolean(answers.serviceType),
    Boolean(
      answers.frequency &&
      answers.timing &&
      (!isRental || (answers.turnoverWindow && answers.linenPlan)) &&
      /^\d{5}$/.test(answers.zipcode) &&
      answers.firstName &&
      answers.lastName &&
      /^\S+@\S+\.\S+$/.test(answers.email) &&
      answers.acceptedPolicies,
    ),
  ];

  const next = () => {
    if (!stepValid[step]) {
      setAttemptedNext(true);
      return;
    }
    setAttemptedNext(false);
    setStep((current) => Math.min(current + 1, 5));
  };

  const submitPlan = async () => {
    if (!stepValid[4]) {
      setAttemptedNext(true);
      return;
    }

    setAttemptedNext(false);
    setSubmissionState("saving");
    setSubmissionError("");

    try {
      const submission = new URLSearchParams({
        "form-name": "cleaning-plan",
        "bot-field": answers.website,
        firstName: answers.firstName,
        lastName: answers.lastName,
        email: answers.email,
        phone: answers.phone,
        zipcode: answers.zipcode,
        property: answers.property,
        bedrooms: answers.bedrooms,
        bathrooms: answers.bathrooms,
        squareFeet: answers.squareFeet,
        condition: answers.condition,
        lastClean: answers.lastClean,
        pets: answers.pets,
        serviceType: answers.serviceType,
        extras: answers.extras.join(", "),
        frequency: answers.frequency,
        timing: answers.timing,
        turnoverWindow: answers.turnoverWindow,
        linenPlan: answers.linenPlan,
        accessNotes: answers.accessNotes,
        recommendation,
        isRental: isRental ? "Yes" : "No",
      });

      const response = await fetch("/cleaning-plan-form.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: submission.toString(),
      });
      if (!response.ok) {
        throw new Error("We could not save your plan just now.");
      }
      setSubmissionState("idle");
      setStep(5);
    } catch (error) {
      setSubmissionState("error");
      setSubmissionError(
        error instanceof Error ? error.message : "We could not save your plan just now. Please try again.",
      );
    }
  };

  const previous = () => {
    setAttemptedNext(false);
    setSubmissionError("");
    setStep((current) => Math.max(current - 1, 0));
  };

  return (
    <section className="planner-section" id="pricing-tool">
      <div className="planner-intro">
        <p className="eyebrow">Personalized pricing, without the interrogation</p>
        <h2>Build the right clean in a few thoughtful questions.</h2>
        <p>
          We ask what affects the work, skip what does not, and turn your answers
          into a clear plan. Home-cleaning customers can continue into live
          pricing and availability without re-entering contact details.
        </p>
        <ul>
          <li><span aria-hidden="true">✓</span> About two minutes</li>
          <li><span aria-hidden="true">✓</span> No surprise add-ons</li>
          <li><span aria-hidden="true">✓</span> Rental-specific questions when needed</li>
        </ul>
      </div>

      <div className="planner-shell">
        {step < 5 && (
          <div className="planner-progress" aria-label={`Step ${step + 1} of 5`}>
            <div className="planner-progress-top">
              <span>Step {step + 1} of 5</span>
              <strong>{stepLabels[step]}</strong>
            </div>
            <div className="planner-progress-track" aria-hidden="true">
              <span style={{ width: `${((step + 1) / 5) * 100}%` }} />
            </div>
          </div>
        )}

        {step === 0 && (
          <fieldset className="planner-panel">
            <legend>What are we helping you clean?</legend>
            <p>Choose the closest match. We will tailor the next questions.</p>
            <div className="option-grid property-options">
              {propertyOptions.map(([value, title, description]) => (
                <label key={value} className={answers.property === value ? "selected" : ""}>
                  <input
                    type="radio"
                    name="property"
                    value={value}
                    checked={answers.property === value}
                    onChange={() => update("property", value)}
                  />
                  <span aria-hidden="true">{value === "beach" ? "≈" : value === "move" ? "→" : value === "apartment" ? "▦" : "⌂"}</span>
                  <strong>{title}</strong>
                  <small>{description}</small>
                </label>
              ))}
            </div>
          </fieldset>
        )}

        {step === 1 && (
          <fieldset className="planner-panel">
            <legend>Help us understand the size.</legend>
            <p>These three details do most of the work in creating an accurate price.</p>
            <div className="planner-select-grid">
              <FieldSelect label="Bedrooms" value={answers.bedrooms} onChange={(value) => update("bedrooms", value)}>
                {["Studio", "1", "2", "3", "4", "5", "6+"].map((value) => <option key={value}>{value}</option>)}
              </FieldSelect>
              <FieldSelect label="Bathrooms" value={answers.bathrooms} onChange={(value) => update("bathrooms", value)}>
                {["1", "1.5", "2", "2.5", "3", "3.5", "4", "5+"].map((value) => <option key={value}>{value}</option>)}
              </FieldSelect>
              <FieldSelect label="Approximate square footage" value={answers.squareFeet} onChange={(value) => update("squareFeet", value)}>
                {["Under 1,000 sq. ft.", "1,000–1,499 sq. ft.", "1,500–1,999 sq. ft.", "2,000–2,999 sq. ft.", "3,000–3,999 sq. ft.", "4,000+ sq. ft."].map((value) => <option key={value}>{value}</option>)}
              </FieldSelect>
            </div>
            <div className="planner-note">
              <span aria-hidden="true">i</span>
              <p>An estimate is fine. The final booking form will confirm the pricing details that apply to your service.</p>
            </div>
          </fieldset>
        )}

        {step === 2 && (
          <fieldset className="planner-panel">
            <legend>What does the space need right now?</legend>
            <p>This helps us recommend a routine clean, deeper reset, or turnover plan.</p>
            <div className="option-grid condition-options">
              {[
                ["maintained", "Well maintained", "Regular dust and buildup"],
                ["lived-in", "Lived-in", "A few areas need extra attention"],
                ["reset", "Ready for a reset", "Noticeable buildup throughout"],
                ["move", "Empty or changing hands", "Move or guest transition"],
              ].map(([value, title, description]) => (
                <label key={value} className={answers.condition === value ? "selected" : ""}>
                  <input type="radio" name="condition" checked={answers.condition === value} onChange={() => update("condition", value)} />
                  <strong>{title}</strong>
                  <small>{description}</small>
                </label>
              ))}
            </div>
            <div className="planner-select-grid compact">
              <FieldSelect label="Last professional clean" value={answers.lastClean} onChange={(value) => update("lastClean", value)}>
                <option value="month">Within the last month</option>
                <option value="three">1–3 months ago</option>
                <option value="six">3–6 months ago</option>
                <option value="six-plus">More than 6 months / not sure</option>
              </FieldSelect>
              <FieldSelect label="Pets in the home" value={answers.pets} onChange={(value) => update("pets", value)}>
                <option value="none">No pets</option>
                <option value="one">One pet</option>
                <option value="multiple">Two or more pets</option>
              </FieldSelect>
            </div>
          </fieldset>
        )}

        {step === 3 && (
          <fieldset className="planner-panel">
            <legend>What kind of visit fits best?</legend>
            <p>Choose the main service, then add only the finishing details that matter.</p>
            <div className="option-grid condition-options service-type-options">
              {[
                [
                  "full",
                  isRental ? "Full turnover clean" : "Full home clean",
                  isRental ? "A complete guest-to-guest reset" : "Routine, deep, or move cleaning",
                ],
                [
                  "refresh",
                  "Refresh & Reset",
                  isRental ? "A focused mid-stay or owner-arrival refresh" : "A focused visit between full cleanings",
                ],
              ].map(([value, title, description]) => (
                <label key={value} className={answers.serviceType === value ? "selected" : ""}>
                  <input
                    type="radio"
                    name="serviceType"
                    checked={answers.serviceType === value}
                    onChange={() => update("serviceType", value)}
                  />
                  <strong>{title}</strong>
                  <small>{description}</small>
                </label>
              ))}
            </div>
            <p className="planner-subheading">Finishing details</p>
            <div className="extras-grid">
              {extraOptions
                .filter((extra) => isRental || !["Restocking", "Post-clean photos"].includes(extra))
                .map((extra) => (
                  <label key={extra} className={answers.extras.includes(extra) ? "selected" : ""}>
                    <input type="checkbox" checked={answers.extras.includes(extra)} onChange={() => toggleExtra(extra)} />
                    <span aria-hidden="true">✓</span>
                    <strong>{extra}</strong>
                  </label>
                ))}
            </div>
            <p className="planner-skip-note">
              Every full cleaning already includes The Charleston Finish. Guest-Ready Turndown is an optional presentation upgrade.
            </p>
          </fieldset>
        )}

        {step === 4 && (
          <fieldset className="planner-panel">
            <legend>How should this fit your routine?</legend>
            <p>One last step lets us prepare the right next screen for you.</p>
            <div className="planner-select-grid compact">
              <FieldSelect label={isRental ? "Turnover frequency" : "Cleaning frequency"} value={answers.frequency} onChange={(value) => update("frequency", value)}>
                <option value="one-time">One time</option>
                <option value="weekly">Weekly</option>
                <option value="every-other-week">Every other week</option>
                <option value="every-four-weeks">Every 4 weeks</option>
                {isRental && <option value="guest-schedule">Based on guest schedule</option>}
              </FieldSelect>
              <FieldSelect label="When do you need it?" value={answers.timing} onChange={(value) => update("timing", value)}>
                <option value="this-week">This week</option>
                <option value="next-two-weeks">Within 2 weeks</option>
                <option value="this-month">This month</option>
                <option value="planning">I am planning ahead</option>
              </FieldSelect>
            </div>
            {isRental && (
              <div className="rental-details">
                <p className="planner-subheading">Turnover details</p>
                <div className="planner-select-grid compact">
                  <FieldSelect label="Typical turnover window" value={answers.turnoverWindow} onChange={(value) => update("turnoverWindow", value)}>
                    <option value="under-four">Under 4 hours</option>
                    <option value="four-to-six">4–6 hours</option>
                    <option value="six-plus">More than 6 hours</option>
                    <option value="varies">It varies by reservation</option>
                  </FieldSelect>
                  <FieldSelect label="Linen plan" value={answers.linenPlan} onChange={(value) => update("linenPlan", value)}>
                    <option value="host-ready">Fresh linens will be ready on-site</option>
                    <option value="on-site-laundry">Laundry is completed on-site</option>
                    <option value="off-site">Linens require off-site service</option>
                    <option value="discuss">I need help choosing a system</option>
                  </FieldSelect>
                </div>
                <label className="planner-textarea">
                  <span>Access or host notes <small>(optional)</small></span>
                  <textarea
                    rows={3}
                    maxLength={500}
                    value={answers.accessNotes}
                    onChange={(event) => update("accessNotes", event.target.value)}
                    placeholder="Building access, owner closet, parking, restocking, or other useful details"
                  />
                </label>
              </div>
            )}
            <div className="contact-grid">
              <label><span>First name</span><input autoComplete="given-name" value={answers.firstName} onChange={(event) => update("firstName", event.target.value)} /></label>
              <label><span>Last name</span><input autoComplete="family-name" value={answers.lastName} onChange={(event) => update("lastName", event.target.value)} /></label>
              <label><span>Email</span><input type="email" autoComplete="email" value={answers.email} onChange={(event) => update("email", event.target.value)} /></label>
              <label><span>Mobile <small>(optional)</small></span><input type="tel" autoComplete="tel" value={answers.phone} onChange={(event) => update("phone", event.target.value)} /></label>
              <label><span>Service ZIP code</span><input inputMode="numeric" maxLength={5} autoComplete="postal-code" value={answers.zipcode} onChange={(event) => update("zipcode", event.target.value.replace(/\D/g, ""))} /></label>
            </div>
            <label className="honeypot-field" aria-hidden="true">
              Website
              <input tabIndex={-1} autoComplete="off" value={answers.website} onChange={(event) => update("website", event.target.value)} />
            </label>
            <label className="consent-check">
              <input
                type="checkbox"
                checked={answers.acceptedPolicies}
                onChange={(event) => update("acceptedPolicies", event.target.checked)}
              />
              <span>
                I agree to the <a href="/terms" target="_blank">Terms</a> and acknowledge the <a href="/privacy" target="_blank">Privacy Notice</a>.
              </span>
            </label>
            <p className="privacy-note">We save these details to prepare your plan or respond to your request. Promotional texts require a separate opt-in.</p>
          </fieldset>
        )}

        {step === 5 && (
          <div className="planner-result" aria-live="polite">
            <p className="eyebrow">Your clean, considered</p>
            <span className="result-kicker">We recommend</span>
            <h3>{recommendation}</h3>
            <p>
              {isRental
                ? "Your property details and turnover needs are saved. Our Charleston team can now review the guest window, linen scope, and host requirements for a tailored quote."
                : "Your cleaning plan is saved, and your contact details and service ZIP are ready to carry into our secure live-pricing form. Confirm the home details, choose priced extras, and see available times."}
            </p>
            <dl>
              <div><dt>Property</dt><dd>{answers.bedrooms} bed · {answers.bathrooms} bath</dd></div>
              <div><dt>Condition</dt><dd>{answers.condition.replace("-", " ")}</dd></div>
              <div><dt>Routine</dt><dd>{answers.frequency.replaceAll("-", " ")}</dd></div>
              <div><dt>Priorities</dt><dd>{answers.extras.length ? `${answers.extras.length} selected` : "Routine scope"}</dd></div>
            </dl>

            {isRental ? (
              <div className="planner-confirmation">
                <strong>Plan received</strong>
                <span>We’ll follow up at {answers.email} with the next step.</span>
              </div>
            ) : (
              <>
                <a className="button planner-primary-action" href={bookingLink} target="_blank" rel="noreferrer">See my live price &amp; times <span aria-hidden="true">↗</span></a>
                <span className="planner-secondary-action saved-plan-note">Your personalized plan has been saved for follow-up.</span>
              </>
            )}

            <button className="planner-start-over" type="button" onClick={() => { setAnswers(initialAnswers); setStep(0); }}>
              Start over
            </button>
          </div>
        )}

        {step < 5 && (
          <div className="planner-controls">
            <button type="button" className="planner-back" onClick={previous} disabled={step === 0}>Back</button>
            <div className="planner-control-action">
              {(attemptedNext || submissionState === "error") && (
                <p className="planner-error" role="alert">
                  {submissionError || "Please complete the required fields above before continuing."}
                </p>
              )}
              <button
                type="button"
                className="button"
                onClick={step === 4 ? submitPlan : next}
                disabled={submissionState === "saving"}
              >
                {submissionState === "saving"
                  ? "Saving your plan…"
                  : step === 4
                    ? "Save & build my plan"
                    : "Continue"} <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
