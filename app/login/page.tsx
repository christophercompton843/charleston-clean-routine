import type { Metadata } from "next";
import CustomerPageShell from "../customer-page-shell";

export const metadata: Metadata = {
  title: "Account Access | Charleston Clean Routine",
  description: "Secure account access for Charleston Clean Routine customers, providers, and authorized administrators.",
  alternates: { canonical: "/login" },
  robots: { index: false, follow: true },
};

const customerLogin = "https://www.jointidywise.com/portal/login";
const clientPortalGuide = "/client-portal-guide/download";
const staffLogin = "https://www.jointidywise.com/staff/login";
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
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <a className="button" href={customerLogin} target="_blank" rel="noreferrer">Open Client Portal ↗</a>
            <a className="button button-ghost" href={clientPortalGuide}>Download Client Portal Guide ↓</a>
          </div>
          <a className="login-secondary" href="/client-portal-guide">View the online portal guide →</a>
        </article>

        <article>
          <span>Accepted provider</span>
          <h2>Manage my work.</h2>
          <p>Accepted cleaning professionals use the TidyWise Staff Portal for the work tools connected to their Charleston Clean Routine provider account.</p>
          <a className="button" href={staffLogin} target="_blank" rel="noreferrer">Staff Portal ↗</a>
          <a className="login-secondary" href={providerApplication}>Interested in becoming a provider? Apply here →</a>
        </article>

        <article className="admin-login">
          <span>Authorized administration</span>
          <h2>Manage the operation.</h2>
          <p>Open the protected website dashboard for website activity. TidyWise staff access is available separately for authorized Charleston Clean Routine operations.</p>
          <a className="button button-light" href="/admin">Website admin login →</a>
          <a className="login-secondary login-secondary-light" href={staffLogin} target="_blank" rel="noreferrer">Staff Portal ↗</a>
        </article>
      </section>
    </CustomerPageShell>
  );
}
