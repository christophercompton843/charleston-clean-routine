import type { Metadata } from "next";
import CustomerPageShell from "../customer-page-shell";

export const metadata: Metadata = {
  title: "Account Access | Charleston Clean Routine",
  description: "Secure account access for Charleston Clean Routine customers, providers, and authorized administrators.",
};

const customerLogin = "https://jointidywise.com/portal/login";
const tidyWiseLogin = "https://www.jointidywise.com/";
const providerApplication = "/provider-application";

export default function LoginPage() {
  return (
    <CustomerPageShell
      eyebrow="Secure account access"
      title="One doorway. The right dashboard."
      intro="Customers, accepted providers, and authorized administrators use different account tools. Choose the access path connected to your role."
    >
      <section className="login-grid">
        <article>
          <span>Customer</span>
          <h2>Manage my home.</h2>
          <p>Open your private Client Portal to view the appointment and account tools enabled for your Charleston Clean Routine service.</p>
          <a className="button" href={customerLogin} target="_blank" rel="noreferrer">Customer login ↗</a>
        </article>

        <article>
          <span>Accepted provider</span>
          <h2>Manage my work.</h2>
          <p>Accepted cleaning professionals receive their provider access during onboarding. Use the TidyWise Staff Portal or provider access supplied with your activation—not the customer booking page.</p>
          <a className="button" href={tidyWiseLogin} target="_blank" rel="noreferrer">Open TidyWise ↗</a>
          <a className="login-secondary" href={providerApplication}>Interested in becoming a provider? Apply here →</a>
        </article>

        <article className="admin-login">
          <span>Authorized administration</span>
          <h2>Manage the operation.</h2>
          <p>Open the protected website dashboard for website activity. Scheduling, dispatch, client records, and booking operations are managed in the Charleston Clean Routine TidyWise account.</p>
          <a className="button button-light" href="/admin">Website admin login →</a>
          <a className="login-secondary login-secondary-light" href={tidyWiseLogin} target="_blank" rel="noreferrer">Open TidyWise operations ↗</a>
        </article>
      </section>
    </CustomerPageShell>
  );
}
