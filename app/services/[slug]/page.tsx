import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CustomerPageShell from "../../customer-page-shell";

const services = {
  "house-cleaning-charleston-sc": {
    title: "House Cleaning Services in Charleston, SC",
    description: "One-time and recurring house cleaning for Charleston-area homes, apartments, condos, and townhomes, with clear online pricing and advance booking.",
    eyebrow: "Recurring home cleaning",
    intro: "A dependable cleaning routine for kitchens, bathrooms, bedrooms, and living spaces—priced and scheduled online without waiting for a callback.",
    heading: "A cleaner home, kept on a reliable routine.",
    copy: "Choose weekly, biweekly, monthly, or one-time service. Home size, condition, and selected options determine the total. Every full cleaning concludes with The Charleston Finish: a final quality check and carefully presented space.",
    ctaHref: "/#pricing-tool",
    ctaLabel: "Get my live price →",
  },
  "deep-cleaning-charleston-sc": {
    title: "Deep Cleaning Services in Charleston, SC",
    description: "Detailed deep cleaning for Charleston-area homes that need more than routine upkeep, with a clear scope and online pricing.",
    eyebrow: "Home deep cleaning",
    intro: "For seasonal resets, accumulated buildup, or homes that need more attention before beginning a recurring cleaning plan.",
    heading: "More detail where routine cleaning is not enough.",
    copy: "Deep cleaning is designed for heavier buildup and expanded detail work. Describe the home's condition honestly in the pricing tool so the scope, timing, and price match the work required.",
    ctaHref: "/#pricing-tool",
    ctaLabel: "Get my live price →",
  },
  "move-in-move-out-cleaning-charleston-sc": {
    title: "Move-In & Move-Out Cleaning in Charleston, SC",
    description: "Move-in and move-out cleaning for Charleston-area houses, apartments, condos, and townhomes, with clear online pricing.",
    eyebrow: "Move-in + move-out cleaning",
    intro: "A thorough clean for an empty or nearly empty property before a new beginning, final walkthrough, or key handoff.",
    heading: "Make the transition feel finished.",
    copy: "Add Deposit Ready Detail when a move-out property needs extra attention before inspection. Cleaning support does not guarantee the return of a security deposit. Access, utilities, parking, and property condition must be confirmed before arrival.",
    ctaHref: "/#pricing-tool",
    ctaLabel: "Get my live price →",
  },
  "vacation-rental-cleaning-charleston-sc": {
    title: "Vacation Rental Cleaning in Charleston, SC",
    description: "Vacation-rental turnover cleaning and guest-ready property care across Charleston, Mount Pleasant, Isle of Palms, Sullivan's Island, Kiawah, Seabrook, Folly Beach, and nearby communities.",
    eyebrow: "Vacation-rental cleaning",
    intro: "Reliable turnover and property-readiness care for vacation homes, beach rentals, professionally managed properties, and seasonal rentals across the Charleston area.",
    heading: "A repeatable standard between every guest.",
    copy: "Vacation-rental care is built around the property, turnover requirements, access, linens, restocking, timing, and any owner- or guest-specific instructions. Same-day turns, island access, laundry, linen changes, and tight arrival windows are confirmed against provider availability before service is finalized.",
    ctaHref: "/portfolio",
    ctaLabel: "Build my property plan →",
  },
  "airbnb-cleaning-charleston-sc": {
    title: "Airbnb Cleaning Services in Charleston, SC",
    description: "Airbnb and short-term rental turnover cleaning in Charleston with consistent resets, guest-ready presentation, linen coordination, restocking, and property-specific routines.",
    eyebrow: "Airbnb + short-term rental cleaning",
    intro: "Stay-focused turnover care designed to move your property cleanly and consistently from one reservation to the next.",
    heading: "Ready for the next check-in, without reinventing the routine.",
    copy: "Airbnb Care combines turnover cleaning, careful resetting, guest-ready presentation, and property-specific instructions. Linen setup, restocking, reporting, access details, and special presentation requirements can be organized into the property plan so the routine stays clear across reservations.",
    ctaHref: "/portfolio",
    ctaLabel: "Build my Airbnb plan →",
  },
} as const;

type ServiceSlug = keyof typeof services;

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug as ServiceSlug];
  return service ? { title: `${service.title} | Charleston Clean Routine`, description: service.description, alternates: { canonical: `/services/${slug}` } } : {};
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services[slug as ServiceSlug];
  if (!service) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: { "@id": "https://charlestoncleanroutine.com/#business" },
    areaServed: { "@type": "AdministrativeArea", name: "Charleston metropolitan area, South Carolina" },
    url: `https://charlestoncleanroutine.com/services/${slug}`,
  };

  return (
    <CustomerPageShell eyebrow={service.eyebrow} title={service.title} intro={service.intro}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="contact-aside">
        <p className="eyebrow">Your home, handled.</p>
        <h2>{service.heading}</h2>
        <p>{service.copy}</p>
        <Link className="button button-small" href={service.ctaHref}>{service.ctaLabel}</Link>
      </section>
      <aside className="service-area-aside">
        <p className="eyebrow">Local coverage</p>
        <h2>Charleston-area service.</h2>
        <p>We serve homes and properties across Charleston and the surrounding Lowcountry. Exact service is confirmed by address, requested scope, timing, and provider availability so we can support the assignment consistently rather than overpromise coverage.</p>
        <Link href="/service-area">Check service at my address →</Link>
      </aside>
    </CustomerPageShell>
  );
}