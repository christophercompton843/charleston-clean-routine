import type { Metadata } from "next";
import PolicyShell from "../policy-shell";

export const metadata: Metadata = {
  title: "Terms of Use | Charleston Clean Routine",
  description: "Terms for using Charleston Clean Routine's website and booking services.",
};

export default function TermsPage() {
  return (
    <PolicyShell
      eyebrow="Terms of Use"
      title="Clear expectations from the start."
      intro="These terms govern use of the Charleston Clean Routine website and the service requests you submit through it."
    >
      <section>
        <h2>Using this website</h2>
        <p>You agree to provide accurate information, use the website only for lawful purposes, and avoid interfering with its security or operation. You must be at least 18 years old and authorized to request service for the property.</p>
      </section>
      <section>
        <h2>Quotes, bookings, and availability</h2>
        <p>A cleaning plan or preliminary recommendation is not a confirmed appointment. Service is confirmed only after the required booking steps are completed and availability is accepted. Vacation-rental and specialty services may require a tailored quote.</p>
        <p>Pricing may change when the submitted property details, condition, service scope, access requirements, or timing differ materially from the information provided.</p>
      </section>
      <section>
        <h2>Payments</h2>
        <p>Bookings are card-only. A temporary card authorization may be placed up to 48 hours before service. The final charge is generally processed one hour after the service is marked complete, subject to approved adjustments.</p>
      </section>
      <section>
        <h2>Changes and cancellations</h2>
        <p>Our <a href="/cancellation-policy">Cancellation Policy</a> applies to appointment changes, late cancellations, no-access situations, and recurring-service termination.</p>
      </section>
      <section>
        <h2>Property conditions and safety</h2>
        <p>You are responsible for safe access, accurate disclosure of material conditions, securing pets, identifying fragile or high-value items, and keeping hazardous materials or unsafe conditions away from the work area. We may decline or stop work when conditions are unsafe or outside the agreed scope.</p>
      </section>
      <section>
        <h2>Service concerns</h2>
        <p>Please report a concern promptly with enough detail for review. When appropriate, we may coordinate a corrective visit. The specific response depends on the circumstances, access, reported scope, and timing.</p>
      </section>
      <section>
        <h2>Website availability and content</h2>
        <p>We may update website content, service descriptions, pricing structures, or these terms. We do not promise uninterrupted website access. Nothing on the website creates a guarantee beyond the service scope confirmed for a booking.</p>
      </section>
      <section>
        <h2>Concierge information</h2>
        <p>The website concierge provides general service guidance and may use automated or AI-generated responses. Its answers do not confirm availability, establish final pricing, modify a booking, create provider employment or contractor status, or replace the written terms connected to a confirmed service. Please use the booking system or contact our team when confirmation is required.</p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>Call our 24-hour automated support at <a href="tel:+18436338648">(843) 633-8648</a> or email <a href="mailto:hello@charlestoncleanroutine.com">hello@charlestoncleanroutine.com</a>.</p>
      </section>
    </PolicyShell>
  );
}
