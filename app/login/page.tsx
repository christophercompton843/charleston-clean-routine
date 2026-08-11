import type { Metadata } from "next";
import CustomerPageShell from "../customer-page-shell";

export const metadata: Metadata = {
  title: "Account Access | Charleston Clean Routine",
  description: "Secure account access for Charleston Clean Routine customers, providers, and authorized administrators.",
};

const secureLogin = "https://www.jointidywise.com/book/charleston-clean-routine-7mjd3";
const providerApplication = "/contact?topic=provider";

export default function LoginPage() {
  return (
    <CustomerPageShell eyebrow="Secure account access" title="One doorway. The right dashboard." intro="TidyWise securely routes customers, accepted providers, and authorized administrators to the tools connected to their account credentials.">
      <section className="login-grid">
        <article><span>Customer</span><h2>Manage my home.</h2><p>View booking details, update account information, and use the appointment tools enabled for your account.</p><a className="button" href={secureLogin} target="_blank" rel="noreferrer">Customer login ↗</a></article>
        <article><span>Provider</span><h2>Manage my work.</h2><p>Accepted cleaning professionals can view their provider dashboard, schedule, assignments, and enabled service tools.</p><a className="button" href={secureLogin} target="_blank" rel="noreferrer">Provider login ↗</a><a className="login-secondary" href={providerApplication} target="_blank" rel="noreferrer">Interested in becoming a provider? Apply here ↗</a></article>
        <article className="admin-login"><span>Authorized administration</span><h2>Manage the operation.</h2><p>Open the protected website dashboard for leads, inquiries, booking starts, and review approvals. Booking operations are managed in TidyWise.</p><a className="button button-light" href="/admin">Website admin login →</a><a className="login-secondary login-secondary-light" href={secureLogin} target="_blank" rel="noreferrer">Booking operations login ↗</a></article>
      </section>
    </CustomerPageShell>
  );
}
