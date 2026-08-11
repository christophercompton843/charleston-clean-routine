import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CustomerPageShell from "../../customer-page-shell";

const services = {
  "house-cleaning-charleston-sc": { title: "House Cleaning Services in Charleston, SC", description: "One-time and recurring house cleaning for Charleston-area homes, apartments, condos, and townhomes, with online pricing and booking.", eyebrow: "Recurring home cleaning", intro: "A dependable cleaning routine for kitchens, bathrooms, bedrooms, and living spaces—priced and scheduled online without waiting for a callback.", heading: "A cleaner home, kept on a reliable routine.", copy: "Choose weekly, every-other-week, every-four-week, or one-time service. Home size, condition, and selected add-ons determine the final total. Every full cleaning concludes with The Charleston Finish: a final quality check and carefully presented space." },
  "deep-cleaning-charleston-sc": { title: "Deep Cleaning Services in Charleston, SC", description: "Detailed deep cleaning for Charleston-area homes that need more than routine upkeep, with a clear scope and online pricing.", eyebrow: "Home deep cleaning", intro: "For seasonal resets, accumulated buildup, or homes that need more attention before beginning a recurring cleaning plan.", heading: "More detail where routine cleaning is not enough.", copy: "Deep cleaning is designed for heavier buildup and expanded detail work. Describe the home's condition honestly in the pricing tool so the scope, timing, and price match the work required." },
  "move-in-move-out-cleaning-charleston-sc": { title: "Move-In & Move-Out Cleaning in Charleston, SC", description: "Move-in and move-out cleaning for Charleston-area houses, apartments, condos, and townhomes, with online pricing.", eyebrow: "Move-in + move-out cleaning", intro: "A thorough clean for an empty or nearly empty property before a new beginning, final walkthrough, or key handoff.", heading: "Make the transition feel finished.", copy: "Add Deposit Ready Detail when a move-out property needs extra attention before inspection. Cleaning support does not guarantee the return of a security deposit. Access, utilities, parking, and property condition must be confirmed before arrival." },
  "vacation-rental-cleaning-charleston-sc": { title: "Vacation Rental Cleaning in Charleston, SC", description: "Vacation-rental turnover cleaning for Charleston, Mount Pleasant, Daniel Island, Sullivan's Island, Isle of Palms, and nearby coastal communities.", eyebrow: "Vacation-rental turnovers", intro: "Reliable turnover cleaning for Airbnb, Vrbo, beach-rental, and professionally managed properties across the Charleston area.", heading: "A repeatable standard between every guest.", copy: "Single-property turnovers can begin through online pricing. Owners and managers with multiple properties can request a portfolio plan. Same-day turns, island access, laundry, linen changes, and tight arrival windows require availability confirmation." },
} as const;
type ServiceSlug = keyof typeof services;
export function generateStaticParams() { return Object.keys(services).map((slug) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const service = services[slug as ServiceSlug];
  return service ? { title: `${service.title} | Charleston Clean Routine`, description: service.description, alternates: { canonical: `/services/${slug}` } } : {};
}
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const service = services[slug as ServiceSlug]; if (!service) notFound();
  const schema = { "@context": "https://schema.org", "@type": "Service", name: service.title, description: service.description, provider: { "@id": "https://charlestoncleanroutine.com/#business" }, areaServed: { "@type": "City", name: "Charleston", containedInPlace: { "@type": "State", name: "South Carolina" } }, url: `https://charlestoncleanroutine.com/services/${slug}` };
  return <CustomerPageShell eyebrow={service.eyebrow} title={service.title} intro={service.intro}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <section className="contact-aside"><p className="eyebrow">Your home, handled.</p><h2>{service.heading}</h2><p>{service.copy}</p><a className="button button-small" href="/#pricing-tool">Get my live price →</a></section>
    <aside className="service-area-aside"><p className="eyebrow">Local coverage</p><h2>Charleston-area service.</h2><p>Launching first in Mount Pleasant, Daniel Island, Sullivan&apos;s Island, and Isle of Palms, with planned expansion across the Charleston area.</p><a href="/service-area">Check service at my address →</a></aside>
  </CustomerPageShell>;
}
