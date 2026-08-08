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
        <p>We may collect your name, email address, telephone number, service address or ZIP code, property type and size, cleaning priorities, access notes, scheduling preferences, communications, and service history.</p>
        <p>When you use Build My Clean, we save the details you submit so we can prepare a plan, provide a quote, continue your booking, or respond to your request.</p>
      </section>
      <section>
        <h2>Payments and booking partners</h2>
        <p>Booking details may be processed through BookingKoala. Card information is handled by the connected payment processor and is not stored in this website’s cleaning-plan database. Those providers process information under their own privacy terms.</p>
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
        <p>Promotional text messages require a separate opt-in. Service-related communications do not enroll you in marketing.</p>
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
        <p>Email <a href="mailto:hello@charlestoncleanroutine.com">hello@charlestoncleanroutine.com</a> or call <a href="tel:+18436081082">843-608-1082</a> with a privacy request or question.</p>
      </section>
    </PolicyShell>
  );
}
