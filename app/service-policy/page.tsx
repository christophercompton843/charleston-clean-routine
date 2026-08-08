import type { Metadata } from "next";
import PolicyShell from "../policy-shell";

export const metadata: Metadata = {
  title: "Service Policy | Charleston Clean Routine",
  description: "How to prepare for Charleston Clean Routine services and what to expect during a visit.",
};

export default function ServicePolicyPage() {
  return (
    <PolicyShell
      eyebrow="Service Policy"
      title="A smoother clean begins before the door opens."
      intro="These practical standards help customers, guests, properties, and cleaning professionals have a clear and safe experience."
    >
      <section>
        <h2>Before the visit</h2>
        <ul>
          <li>Provide accurate address, parking, gate, front-desk, elevator, and entry information.</li>
          <li>Secure pets and tell us about any animal or access consideration.</li>
          <li>Put away cash, jewelry, medications, firearms, confidential material, and fragile or irreplaceable items.</li>
          <li>Clear excessive clutter that would prevent access to surfaces or floors.</li>
          <li>Identify the priority area and disclose unusual buildup, pests, biohazards, construction dust, or unsafe conditions in advance.</li>
        </ul>
      </section>
      <section>
        <h2>Scope and timing</h2>
        <p>The confirmed booking controls the rooms, tasks, extras, arrival window, and estimated work time. An arrival window is not a promise that the provider will arrive at its first minute. If the property condition or requested work differs materially, we may propose an adjustment before continuing.</p>
      </section>
      <section>
        <h2>Services requiring advance agreement</h2>
        <p>Heavy lifting, high or exterior windows, biohazards, active infestations, mold remediation, exterior pressure washing, construction cleanup, and other specialized or unsafe work are not included unless expressly confirmed.</p>
      </section>
      <section>
        <h2>Vacation rentals</h2>
        <p>Hosts and property managers should provide the departure and arrival window, access method, property checklist, linen process, laundry expectations, owner-closet instructions, restocking list, damage-reporting preference, and an emergency contact. Same-day turnover acceptance depends on property scope and provider availability.</p>
      </section>
      <section>
        <h2>The Charleston Finish</h2>
        <p>Every full cleaning concludes with a final quality check and thoughtful room reset. When used, the complimentary peppermint is individually sealed, xylitol-free, and placed on a branded card in the kitchen or entry rather than on bedding. Ingredient information remains on the wrapper. Customers may opt out in advance, and property managers may request neutral or co-branded presentation.</p>
      </section>
      <section>
        <h2>Refresh &amp; Reset and Guest-Ready Turndown</h2>
        <p>Refresh &amp; Reset is a focused visit rather than a full cleaning. Guest-Ready Turndown is a presentation add-on and includes only the tasks confirmed for the booking. Linen changes, laundry, restocking, and amenities must be selected or quoted separately when they affect the work.</p>
      </section>
      <section>
        <h2>After the visit</h2>
        <p>Review the property promptly and report a concern with relevant photos or details. We will review the confirmed scope and, when appropriate, coordinate a corrective visit. Please do not arrange third-party correction before giving us a reasonable opportunity to assess the concern.</p>
      </section>
    </PolicyShell>
  );
}
