import type { Metadata } from "next";
import CustomerPageShell from "../customer-page-shell";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Contact | Charleston Clean Routine",
  description: "Contact Charleston Clean Routine about residential cleaning, vacation-rental turnovers, an existing booking, or a local partnership.",
};

export default function ContactPage() {
  return (
    <CustomerPageShell
      eyebrow="Online help, when needed"
      title="Tell us what needs handling."
      intro="Use this form for a question that does not require starting a new cleaning plan. Existing clients can also use the account tools connected to their booking."
    >
      <aside className="contact-aside">
        <p className="eyebrow">Charleston team</p>
        <h2>A clear path to the right answer.</h2>
        <p>Choose the closest topic and include the property ZIP code, timing, or booking details that matter. Please do not send card numbers, passwords, access codes, or other sensitive information.</p>
        <div><span>Online inquiry</span><strong>Send the form for a written response</strong></div>
        <div><span>AI concierge</span><strong>Available from the chat button on every page</strong></div>
        <div><span>Existing clients</span><a href="/login">Open the Client Portal</a></div>
        <div><span>Email</span><a href="mailto:hello@charlestoncleanroutine.com">hello@charlestoncleanroutine.com</a></div>
      </aside>
      <ContactForm />
    </CustomerPageShell>
  );
}
