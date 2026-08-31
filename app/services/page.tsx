import type { Metadata } from "next";
import Link from "next/link";
import CustomerPageShell from "../customer-page-shell";
import "./services.css";

export const metadata: Metadata = {
  title: "Cleaning Services | Charleston Clean Routine",
  description: "Explore Charleston Clean Routine home cleaning, deep cleaning, move-in and move-out cleaning, vacation-rental cleaning, Airbnb cleaning, and portfolio care.",
};

const serviceCards = [
  {
    eyebrow: "Home",
    title: "Home Cleaning",
    copy: "Routine, Deep, and Move-In / Move-Out care for privately owned homes, apartments, condos, townhomes, and second homes.",
    href: "/services/house-cleaning-charleston-sc",
    action: "Explore home cleaning →",
  },
  {
    eyebrow: "More detail",
    title: "Deep Cleaning",
    copy: "Expanded detail work for seasonal resets, accumulated buildup, or homes that need more attention before beginning a recurring routine.",
    href: "/services/deep-cleaning-charleston-sc",
    action: "Explore deep cleaning →",
  },
  {
    eyebrow: "Transitions",
    title: "Move-In / Move-Out",
    copy: "Thorough care for empty or nearly empty properties before move-in, final walkthrough, key handoff, or the close of a lease.",
    href: "/services/move-in-move-out-cleaning-charleston-sc",
    action: "Explore move cleaning →",
  },
  {
    eyebrow: "Vacation properties",
    title: "Vacation Rental Cleaning",
    copy: "Turnover cleaning, deep resets, arrival preparation, linen and restocking coordination, and property-specific routines for guest-ready vacation homes.",
    href: "/services/vacation-rental-cleaning-charleston-sc",
    action: "Explore vacation rental care →",
  },
  {
    eyebrow: "Short-term stays",
    title: "Airbnb Cleaning",
    copy: "Stay-focused turnover care with consistent cleaning, resetting, guest-ready presentation, and property-specific routines between reservations.",
    href: "/services/airbnb-cleaning-charleston-sc",
    action: "Explore Airbnb care →",
  },
  {
    eyebrow: "Multiple properties",
    title: "Portfolio Care",
    copy: "One management structure for multiple homes or units while preserving each property's schedule, scope, access instructions, and service requirements.",
    href: "/portfolio",
    action: "Build my property plan →",
  },
] as const;

export default function ServicesPage() {
  return (
    <CustomerPageShell
      eyebrow="Your Choice"
      title="Start with what you need handled."
      intro="Choose the kind of property care you need, understand the scope, and move directly to the next useful step. Residential pricing is available now; vacation-rental, Airbnb, and portfolio care are built around the specific property requirements."
    >
      <section className="service-index-grid" aria-label="Charleston Clean Routine services">
        {serviceCards.map((service) => (
          <article key={service.title}>
            <span>{service.eyebrow}</span>
            <h2>{service.title}</h2>
            <p>{service.copy}</p>
            <Link className="button button-small" href={service.href}>{service.action}</Link>
          </article>
        ))}
      </section>
      <aside className="service-area-aside">
        <p className="eyebrow">Ready to start?</p>
        <h2>Use the path that matches the property.</h2>
        <p>Residential customers can build an instant estimate now. Vacation-rental, Airbnb, and portfolio clients can begin with a property plan so access, turnover timing, linens, restocking, and property-specific requirements are handled correctly from the start.</p>
        <div className="hero-actions">
          <Link className="button" href="/#pricing-tool">Build my residential routine →</Link>
          <Link className="button" href="/portfolio">Build my property plan →</Link>
        </div>
      </aside>
    </CustomerPageShell>
  );
}