import type { Metadata } from "next";
import PolicyShell from "../policy-shell";

export const metadata: Metadata = {
  title: "Cancellation Policy | Charleston Clean Routine",
  description: "Charleston Clean Routine cancellation and rescheduling terms.",
};

export default function CancellationPolicyPage() {
  return (
    <PolicyShell
      eyebrow="Cancellation Policy"
      title="Flexibility, with respect for reserved time."
      intro="We keep changes straightforward while protecting the time cleaning professionals reserve for your property."
    >
      <section>
        <h2>Rescheduling</h2>
        <ul>
          <li><strong>More than 24 hours before the arrival window:</strong> no rescheduling fee.</li>
          <li><strong>Within 24 hours:</strong> a $35 rescheduling fee applies.</li>
          <li><strong>After a provider is en route or has arrived:</strong> 50% of the scheduled service total applies.</li>
        </ul>
      </section>
      <section>
        <h2>Cancellations</h2>
        <ul>
          <li><strong>More than 24 hours before the arrival window:</strong> no cancellation fee.</li>
          <li><strong>Within 24 hours:</strong> 50% of the scheduled service total applies.</li>
          <li><strong>After a provider is en route, has arrived, or cannot gain access:</strong> 100% of the scheduled service total applies.</li>
        </ul>
      </section>
      <section>
        <h2>Recurring service</h2>
        <p>You may end recurring service without a termination fee. A fee still applies when a particular appointment is cancelled or changed inside the applicable late-change window.</p>
      </section>
      <section>
        <h2>Emergencies and severe weather</h2>
        <p>Verified emergencies or severe-weather circumstances may qualify for a waiver. Charleston Clean Routine reviews these situations individually and may request reasonable supporting information.</p>
      </section>
      <section>
        <h2>How to make a change</h2>
        <p>Use the change or cancellation options connected to your booking, call our 24-hour automated support at <a href="tel:+18436338648">(843) 633-8648</a>, submit an <a href="/contact">online inquiry</a>, or email us promptly at <a href="mailto:hello@charlestoncleanroutine.com">hello@charlestoncleanroutine.com</a>.</p>
      </section>
    </PolicyShell>
  );
}
