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
const portfolioCareGuide = "/portfolio-care-guide/download";
const staffLogin = "https://www.jointidywise.com/staff/login";
const providerApplication = "/provider-application";

export default function LoginPage() {
  return (
    <CustomerPageShell
      eyebrow="Secure account access"
      title="One doorway. The right dashboard."
      intro="Choose the access path connected to your role."
    >
      <section className="login-grid">
        <article>
          <span>Customer</span>
          <h2>Manage my home.</h2>
          <p>View the appointment and account tools enabled for your Charleston Clean Routine service.</p>
          <div className="login-actions">
            <a className="button" href={customerLogin} target="_blank" rel="noreferrer">Open Client Portal ↗</a>
            <div className="login-links">
              <a className="login-secondary" href={clientPortalGuide}>Download Client Portal Guide ↓</a>
              <a className="login-secondary" href="/client-portal-guide">View online guide →</a>
              <a className="login-secondary" href={portfolioCareGuide}>Portfolio Care guide ↓</a>
              <a className="login-secondary" href="/portfolio-care-guide">Portfolio Care online guide →</a>
            </div>
          </div>
        </article>

        <article>
          <span>Accepted provider</span>
          <h2>Manage my work.</h2>
          <p>Accepted cleaning professionals use the TidyWise Staff Portal for work connected to their Charleston Clean Routine provider account.</p>
          <div className="login-actions">
            <a className="button" href={staffLogin} target="_blank" rel="noreferrer">Staff Portal ↗</a>
            <div className="login-links">
              <a className="login-secondary" href={providerApplication}>Interested in becoming a provider? Apply here →</a>
            </div>
          </div>
        </article>

        <article className="admin-login">
          <span>Authorized administration</span>
          <h2>Manage the operation.</h2>
          <p>Open the protected website dashboard or authorized TidyWise staff access.</p>
          <div className="login-actions">
            <a className="button button-light" href="/admin">Website admin login →</a>
            <div className="login-links">
              <a className="login-secondary login-secondary-light" href={staffLogin} target="_blank" rel="noreferrer">TidyWise Staff Portal ↗</a>
            </div>
          </div>
        </article>
      </section>
    </CustomerPageShell>
  );
}
