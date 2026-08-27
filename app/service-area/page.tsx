import type { Metadata } from "next";
import CustomerPageShell from "../customer-page-shell";
import ServiceAreaChecker from "./service-area-checker";

export const metadata: Metadata = {
  title: "Charleston Cleaning Service Area | Charleston Clean Routine",
  description: "Check Charleston Clean Routine service coverage for homes, apartments, condos, townhomes, and vacation rentals.",
};

const communities = [
  "Charleston Peninsula", "West Ashley", "James Island", "North Charleston",
  "Mount Pleasant", "Daniel Island", "Johns Island", "Kiawah Island",
  "Seabrook Island", "Folly Beach", "Isle of Palms", "Sullivan’s Island",
];

export default function ServiceAreaPage() {
  return (
    <CustomerPageShell
      eyebrow="Charleston-area coverage"
      title="Local service, checked before you book."
      intro="We serve homes, apartments, condos, townhomes, and vacation rentals across the Charleston area. Coverage depends on the exact address, requested service, and provider availability."
    >
      <ServiceAreaChecker />
      <aside className="service-area-aside">
        <p className="eyebrow">Communities we review</p>
        <h2>Built around Charleston life.</h2>
        <div className="community-list">{communities.map((community) => <span key={community}>{community}</span>)}</div>
        <p>Our cleaning professionals are located throughout the Charleston and Lowcountry area. During our initial launch phase, some locations require a quick availability review so we can confirm the right provider for your property and schedule.</p>
        <p><strong>If there’s demand, we build the coverage.</strong> Once we know a location needs recurring service, we can recruit and onboard a qualified provider specifically for that area so the service can be supported consistently going forward.</p>
      </aside>
    </CustomerPageShell>
  );
}
