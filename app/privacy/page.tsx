import type { Metadata } from "next";
import PolicyShell from "../policy-shell";

export const metadata: Metadata = {
  title: "Privacy Notice | Charleston Clean Routine",
  description: "How Charleston Clean Routine collects, uses, and protects customer information.",
};

export default function PrivacyPage() {
  return (
    <PolicyShell
      eyebrow="Privacy Notice"
      title="Your information should feel handled, too."
      intro="This notice explains what we collect, why we collect it, and the choices available to you when you plan or book a cleaning."
    >
      <section>
        <h2>Information we collect</h2>
        <p>We may collect your name, email address, optional mobile number, service address or ZIP code, property type and size, cleaning priorities, access notes, scheduling preferences, communications, and service history.</p>
        <p>When you use Build My Clean, the contact form, the availability-update form, or the concierge, we may save the details you choose to submit so we can prepare a plan, provide a quote, continue your booking, answer a question, or respond to your request.</p>
      </section>
      <section>
        <h2>AI concierge</h2>
        <p>The website concierge uses your submitted question and limited recent conversation context to provide service information. When AI processing is enabled, that content may be sent to our AI service provider to generate a response. Do not enter card numbers, passwords, property access codes, tax IDs, medical information, or other sensitive data in the concierge.</p>
        <p>Concierge answers are informational and may not reflect live availability, final pricing, or a confirmed booking. Use the booking system or contact our team when a decision requires confirmation.</p>
      </section>
      <section>
        <h2>Payments and booking partners</h2>
        <p>Booking details may be processed through TidyWise. Card information is handled by the connected payment processor and is not stored in this website’s booking-lead database. Those providers process information under their own privacy terms.</p>
      </section>
      <section>
        <h2>How we use information</h2>
        <ul>
          <li>Prepare pricing, quotes, and service recommendations.</li>
          <li>Schedule, coordinate, complete, and support cleaning services.</li>
          <li>Send essential booking, arrival, payment, and service communications.</li>
          <li>Prevent fraud, protect customers and providers, and maintain business records.</li>
          <li>Improve our service and website.</li>
        </ul>
        <p>We may use a mobile number you provide for transactional service alerts, confirmations, and reminders. Promotional email or text messages require the consent described on the relevant form. You may unsubscribe from marketing or opt out of texts at any time.</p>
      </section>
      <section>
        <h2>When we share information</h2>
        <p>We share only what is reasonably needed with cleaning providers assigned to a service and with companies that support booking, payments, communications, hosting, security, or professional business operations. We do not sell personal information.</p>
      </section>
      <section>
        <h2>Retention and security</h2>
        <p>We retain information for as long as reasonably needed to provide services, maintain required records, resolve concerns, and protect the business. We use reasonable administrative and technical safeguards, but no online system can be guaranteed completely secure.</p>
      </section>
      <section>
        <h2>Your choices</h2>
        <p>You may ask to access, correct, or delete information we hold about you, subject to legal and operational recordkeeping needs. You may also opt out of marketing at any time.</p>
      </section>
      <section>
        <h2>Contact us</h2>
        <p>Email <a href="mailto:hello@charlestoncleanroutine.com">hello@charlestoncleanroutine.com</a> or submit an <a href="/contact">online inquiry</a> with a privacy request or question.</p>
      </section>
    </PolicyShell>
  );
}
