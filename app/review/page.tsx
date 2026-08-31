import type { Metadata } from "next";
import CustomerPageShell from "../customer-page-shell";
import ReviewForm from "./review-form";

export const metadata: Metadata = {
  title: "Share Feedback | Charleston Clean Routine",
  description: "Share verified feedback about a Charleston Clean Routine service.",
  alternates: { canonical: "/review" },
  robots: { index: false, follow: true },
};

export default function ReviewPage() {
  return <CustomerPageShell eyebrow="Verified customer feedback" title="Tell us how the space felt." intro="We welcome honest feedback from customers after a completed service. Every review is checked against a customer record before it can appear publicly."><aside className="contact-aside"><p className="eyebrow">Real experiences only</p><h2>Specific is helpful.</h2><p>Tell us what service you received, what stood out, and what could be better. We publish only verified reviews with clear consent, and submitting feedback never changes your right to raise a service concern privately.</p><div><span>Need service support?</span><a href="/contact">Contact our Charleston team</a></div></aside><ReviewForm /></CustomerPageShell>;
}
