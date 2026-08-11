import type { Metadata } from "next";
import CustomerPageShell from "../customer-page-shell";
import ServiceAreaChecker from "./service-area-checker";

export const metadata: Metadata = {
  title: "Charleston Cleaning Service Area | Charleston Clean Routine",
  description: "Check Charleston Clean Routine service coverage for homes, apartments, condos, townhomes, and vacation rentals.",
};

const communities = [
  "Charleston Peninsula", "West Ashley", "James Island", "North Charleston",
  "Mount Pleasant", "Daniel Island", "Johns Island", "Folly Beach",
  "Isle of Palms", "Sullivan’s Island",
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
        <p>Being listed here does not guarantee a particular date or arrival window. Beach-island, gated, high-rise, and same-day turnover properties may require additional access or timing confirmation.</p>
      </aside>
    </CustomerPageShell>
  );
}
