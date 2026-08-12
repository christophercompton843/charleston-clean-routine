import type { Metadata } from "next";
import CustomerPageShell from "../customer-page-shell";
import ProviderApplicationForm from "./provider-application-form";

export const metadata: Metadata = {
  title: "Provider Opportunities | Charleston Clean Routine",
  description: "Apply to join Charleston Clean Routine’s selective network of experienced, independently insured cleaning professionals.",
};

export default function ProviderApplicationPage() {
  return (
    <CustomerPageShell
      eyebrow="Founding provider network"
      title="Bring exceptional care to Charleston homes."
      intro="Charleston Clean Routine is building a selective network of experienced independent cleaning professionals who value reliability, presentation, and meticulous service."
    >
      <aside className="contact-aside">
        <p className="eyebrow">Provider standards</p>
        <h2>Professional work, thoughtfully coordinated.</h2>
        <p>Qualified providers should have residential-cleaning experience, reliable transportation, professional supplies, strong references, and the ability to maintain independent liability insurance.</p>
        <div><span>Relationship</span><strong>Independent provider opportunity</strong></div>
        <div><span>Screening</span><strong>References, background screening, and document verification</strong></div>
        <div><span>Service area</span><strong>Charleston and nearby communities based on launch coverage</strong></div>
        <div><span>Assignments</span><strong>Accepted individually based on fit and availability</strong></div>
        <p>Submitting an application does not guarantee approval, an interview, assignments, hours, territory, or compensation. Please do not send sensitive tax, identity, banking, or access information through this form.</p>
      </aside>
      <ProviderApplicationForm />
    </CustomerPageShell>
  );
}
