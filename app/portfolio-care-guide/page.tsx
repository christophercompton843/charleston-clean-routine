import type { Metadata } from "next";
import CustomerPageShell from "../customer-page-shell";

export const metadata: Metadata = {
  title: "Portfolio Care Client Portal Guide | Charleston Clean Routine",
  description: "Quick-start guide for Charleston Clean Routine Portfolio Care clients managing multiple properties through the TidyWise Client Portal.",
  alternates: { canonical: "/portfolio-care-guide" },
  robots: { index: false, follow: true },
};

const portalUrl = "https://www.jointidywise.com/portal/login";
const downloadUrl = "/portfolio-care-guide/download";

export default function PortfolioCareGuidePage() {
  return (
    <CustomerPageShell
      eyebrow="Portfolio Care Client Portal"
      title="Multiple properties. One coordinated plan."
      intro="A quick-start guide for Charleston Clean Routine Portfolio Care clients managing multiple rentals or properties. The portal handles routine account tasks; your approved property plans keep each home’s service requirements distinct."
    >
      <article className="portal-guide">
        <style>{`
          .portal-guide { max-width: 900px; }
          .portal-guide > section { margin-bottom: 20px; padding: 30px; border: 1px solid var(--line); border-radius: 22px; background: #fff; box-shadow: var(--shadow-sm); }
          .portal-guide h2 { margin: 0 0 12px; color: var(--harbor); font-size: 28px; letter-spacing: -.035em; }
          .portal-guide h3 { margin: 22px 0 8px; color: var(--harbor); font-size: 18px; }
          .portal-guide p, .portal-guide li { color: var(--muted); font-size: 14px; line-height: 1.7; }
          .portal-guide ul, .portal-guide ol { margin: 14px 0 0; padding-left: 22px; }
          .portal-guide li + li { margin-top: 7px; }
          .portal-guide .guide-actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 22px; }
          .portal-guide .guide-note { margin-top: 18px; padding: 16px 18px; border-radius: 14px; background: var(--sea-pale); color: var(--harbor); }
          .portal-guide .guide-note strong { color: var(--harbor); }
          .portal-guide .quick-steps { counter-reset: portal-step; list-style: none; padding: 0; }
          .portal-guide .quick-steps li { position: relative; padding: 18px 0 18px 50px; border-top: 1px solid var(--line); }
          .portal-guide .quick-steps li::before { counter-increment: portal-step; content: counter(portal-step); position: absolute; left: 0; top: 17px; width: 32px; height: 32px; display: grid; place-items: center; border-radius: 50%; background: var(--harbor); color: #fff; font-size: 12px; font-weight: 800; }
          .portal-guide .quick-steps strong { display: block; margin-bottom: 3px; color: var(--harbor); }
          @media (max-width: 640px) { .portal-guide > section { padding: 22px 18px; border-radius: 18px; } .portal-guide h2 { font-size: 24px; } }
        `}</style>

        <section>
          <h2>Welcome to Portfolio Care</h2>
          <p>
            Portfolio Care is designed for clients managing multiple Charleston-area rentals or properties. Your Client Portal is the primary self-service account area for the booking, billing, and communication tools enabled for your account. Charleston Clean Routine keeps the service plan property-specific so each home can retain its own schedule, access instructions, presentation details, linen needs, restocking preferences, amenities, and approved special requests.
          </p>
          <div className="guide-actions">
            <a className="button" href={portalUrl} target="_blank" rel="noreferrer">Open Client Portal ↗</a>
            <a className="button button-ghost" href={downloadUrl}>Download Portfolio Care Guide ↓</a>
          </div>
        </section>

        <section>
          <h2>What to manage by property</h2>
          <p>Keep the details that affect service current and easy to identify for each property:</p>
          <ul>
            <li>Property address and primary point of contact.</li>
            <li>Gate, parking, entry, lockbox, alarm, or access instructions.</li>
            <li>Turnover or recurring cleaning schedule and service level.</li>
            <li>Property-specific areas of focus, skip areas, and presentation standards.</li>
            <li>Linen, towel, bed setup, laundry, and restocking instructions when part of the approved service plan.</li>
            <li>Pet, owner-stay, maintenance, vendor, or occupancy notes that may affect access or cleaning.</li>
            <li>Approved amenities, guest items, or custom additions tied to that property.</li>
          </ul>
        </section>

        <section>
          <h2>What the portal may support</h2>
          <p>Depending on the tools enabled for your Charleston Clean Routine account, you may be able to:</p>
          <ul>
            <li>View upcoming and past bookings across your account.</li>
            <li>Request new appointments and manage supported recurring bookings.</li>
            <li>Review invoices and manage online payments through the platform.</li>
            <li>Receive booking confirmations, reminders, and enabled email or SMS updates.</li>
            <li>Use enabled messaging, review, tipping, cancellation, or loyalty tools where available.</li>
          </ul>
          <p className="guide-note"><strong>Important:</strong> If a feature or field is not visible in TidyWise, do not assume the property plan has changed. Use Charleston Clean Routine online support so the request can be attached to the correct property and reviewed in context.</p>
        </section>

        <section>
          <h2>Quick Start</h2>
          <ol className="quick-steps">
            <li><strong>Open the portal.</strong> Sign in from a current desktop, tablet, or mobile browser.</li>
            <li><strong>Confirm the property.</strong> Before changing a booking or sending a request, verify which property the request applies to.</li>
            <li><strong>Review upcoming service.</strong> Check the scheduled visit and the account tools available for that booking.</li>
            <li><strong>Keep instructions property-specific.</strong> Include the property address or recognizable property name whenever you send a special instruction or change.</li>
            <li><strong>Define the duration.</strong> Tell us whether a change applies once, for a set number of turnovers, through a date, or on an ongoing basis.</li>
            <li><strong>Use digital support for exceptions.</strong> For sourcing, amenities, unusual access, maintenance coordination, or anything the portal cannot express clearly, use Charleston Clean Routine online support.</li>
            <li><strong>Sign out on shared devices.</strong> Protect account and property information when using a shared device.</li>
          </ol>
        </section>

        <section>
          <h2>Changing a property plan</h2>
          <p>
            Portfolio Care is designed to change with your operating needs. A request can apply to one visit, a temporary series of turnovers, a season, or an ongoing property plan. For the cleanest handoff, identify the affected property or properties, the requested change, when it begins, when it ends if temporary, and whether any materials are client-supplied or need sourcing review.
          </p>
          <h3>Examples</h3>
          <ul>
            <li>“Add this welcome item to the next six turnovers at the beach properties.”</li>
            <li>“Use the revised owner-closet access instructions beginning September 15.”</li>
            <li>“Skip the upstairs guest room for this owner stay only.”</li>
            <li>“Make this restocking preference part of the ongoing plan for Property A.”</li>
          </ul>
        </section>

        <section>
          <h2>Turnover-day exceptions</h2>
          <p>If an urgent issue could affect access, occupancy, guest arrival, safety, or the ability to complete the approved scope, use the fastest enabled digital support path and identify the property and booking. Phone support remains available when the digital path is not enough.</p>
        </section>

        <section>
          <h2>Privacy and account security</h2>
          <p>TidyWise states that its platform uses encryption, role-based access controls, and organization-level data isolation. Payment processing is handled through Stripe. Keep portal credentials private, limit access to authorized members of your management team, and sign out on shared devices.</p>
        </section>

        <section>
          <h2>Troubleshooting</h2>
          <h3>Cannot find the right property or booking?</h3>
          <p>Do not submit the instruction against a different property. Send an online support request with the property address and service date.</p>
          <h3>Need a change the portal cannot describe?</h3>
          <p>State whether the change is one-time, temporary, seasonal, or ongoing so it can be reviewed and attached to the correct property plan.</p>
          <h3>Forgot your password?</h3>
          <p>Use the password-reset option on the TidyWise sign-in screen. Check your spam or junk folder if needed.</p>
          <h3>Browser issue?</h3>
          <p>Use a current version of Chrome, Safari, Firefox, or Edge. Refresh a stale page before submitting the same request again.</p>
          <div className="guide-actions">
            <a className="button" href={portalUrl} target="_blank" rel="noreferrer">Go to Client Portal ↗</a>
            <a className="button button-ghost" href={downloadUrl}>Download Portfolio Care Guide ↓</a>
            <a className="button button-ghost" href="/contact">Contact Support</a>
          </div>
        </section>
      </article>
    </CustomerPageShell>
  );
}
