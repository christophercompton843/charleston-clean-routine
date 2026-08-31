import type { Metadata } from "next";
import CustomerPageShell from "../customer-page-shell";

export const metadata: Metadata = {
  title: "Client Portal Guide | Charleston Clean Routine",
  description: "Quick-start guide for Charleston Clean Routine clients using the TidyWise Client Portal.",
  alternates: { canonical: "/client-portal-guide" },
  robots: { index: false, follow: true },
};

const portalUrl = "https://www.jointidywise.com/portal/login";
const pdfUrl = "/client-portal-guide/download";

export default function ClientPortalGuidePage() {
  return (
    <CustomerPageShell
      eyebrow="TidyWise Client Portal"
      title="Your cleaning, managed in one place."
      intro="A quick-start guide for Charleston Clean Routine homeowners and property managers. The portal is browser-based, so there is nothing to install. Available tools can vary by account and by the features enabled for your service."
    >
      <article className="portal-guide">
        <style>{`
          .portal-guide { max-width: 900px; }
          .portal-guide > section { margin-bottom: 20px; padding: 30px; border: 1px solid var(--line); border-radius: 22px; background: #fff; box-shadow: var(--shadow-sm); }
          .portal-guide h2 { margin: 0 0 12px; color: var(--harbor); font-size: 28px; letter-spacing: -.035em; }
          .portal-guide h3 { margin: 22px 0 8px; color: var(--harbor); font-size: 18px; }
          .portal-guide p, .portal-guide li { color: var(--muted); font-size: 14px; line-height: 1.7; }
          .portal-guide ul, .portal-guide ol { margin: 14px 0 0; padding-left: 22px; }
          .portal-guide li + li { margin-top: 7px; }
          .portal-guide .guide-actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 22px; }
          .portal-guide .guide-note { margin-top: 18px; padding: 16px 18px; border-radius: 14px; background: var(--sea-pale); color: var(--harbor); }
          .portal-guide .guide-note strong { color: var(--harbor); }
          .portal-guide .quick-steps { counter-reset: portal-step; list-style: none; padding: 0; }
          .portal-guide .quick-steps li { position: relative; padding: 18px 0 18px 50px; border-top: 1px solid var(--line); }
          .portal-guide .quick-steps li::before { counter-increment: portal-step; content: counter(portal-step); position: absolute; left: 0; top: 17px; width: 32px; height: 32px; display: grid; place-items: center; border-radius: 50%; background: var(--harbor); color: #fff; font-size: 12px; font-weight: 800; }
          .portal-guide .quick-steps strong { display: block; margin-bottom: 3px; color: var(--harbor); }
          @media (max-width: 640px) { .portal-guide > section { padding: 22px 18px; border-radius: 18px; } .portal-guide h2 { font-size: 24px; } }
        `}</style>

        <section>
          <h2>Welcome to your Client Portal</h2>
          <p>
            Your TidyWise Client Portal is the primary self-service account area for Charleston Clean Routine. Use it to view the booking and account-management tools available for your service without having to call for routine account tasks.
          </p>
          <div className="guide-actions">
            <a className="button" href={portalUrl} target="_blank" rel="noreferrer">Open Client Portal ↗</a>
            <a className="button button-ghost" href={pdfUrl}>Download Client Portal Guide ↓</a>
            <a className="button button-ghost" href="/contact">Get online support</a>
          </div>
        </section>

        <section>
          <h2>What you can do</h2>
          <p>TidyWise supports a client self-service portal. Depending on the tools enabled for your Charleston Clean Routine account, you may be able to:</p>
          <ul>
            <li>View upcoming and past bookings.</li>
            <li>Request new cleaning appointments.</li>
            <li>Manage recurring bookings and account details.</li>
            <li>View invoices and manage online payments through the platform.</li>
            <li>Receive booking confirmations, reminders, and other enabled email or SMS updates.</li>
            <li>Use enabled self-service options such as cancellation, tipping, messaging, reviews, or loyalty rewards where available on your account.</li>
          </ul>
          <p className="guide-note"><strong>Important:</strong> If a tool is not visible in your portal, that does not necessarily mean your account is broken. Some TidyWise features depend on the business plan, account configuration, service type, or permissions enabled for that client.</p>
        </section>

        <section>
          <h2>Quick Start</h2>
          <ol className="quick-steps">
            <li><strong>Open the portal.</strong> Visit the secure TidyWise Client Portal from any modern desktop, tablet, or mobile browser.</li>
            <li><strong>Sign in.</strong> Use the credentials connected to your Charleston Clean Routine client account.</li>
            <li><strong>Review your dashboard.</strong> Check the booking, account, billing, and communication tools available to you.</li>
            <li><strong>Manage routine requests online.</strong> Use the portal first for supported appointment and account tasks so changes stay connected to your client record.</li>
            <li><strong>Ask for help only when needed.</strong> If the portal does not resolve the issue, use Charleston Clean Routine online support and include the booking or property involved.</li>
            <li><strong>Sign out on shared devices.</strong> Protect account information by logging out when you are finished.</li>
          </ol>
        </section>

        <section>
          <h2>Privacy and account security</h2>
          <p>
            TidyWise states that its platform uses encryption, role-based access controls, and organization-level data isolation. Payment processing is handled through Stripe. Use a unique password, keep your login private, and sign out when using a shared device.
          </p>
          <p>If you no longer recognize an account session or believe your credentials have been compromised, reset your password and contact Charleston Clean Routine through the online support path.</p>
        </section>

        <section>
          <h2>Troubleshooting</h2>
          <h3>Forgot your password?</h3>
          <p>Use the password-reset option on the TidyWise sign-in screen. Check your spam or junk folder if the reset email does not arrive promptly.</p>
          <h3>Portal invitation or access issue?</h3>
          <p>If you have booked service but cannot access your client account, send us an online support request. Include the email address used for the booking so we can identify the correct client record.</p>
          <h3>Browser issue?</h3>
          <p>Use a current version of Chrome, Safari, Firefox, or Edge. If a page appears stale, refresh it before submitting the same request again.</p>
          <div className="guide-actions">
            <a className="button" href={portalUrl} target="_blank" rel="noreferrer">Open Client Portal ↗</a>
            <a className="button button-ghost" href={pdfUrl}>Download Client Portal Guide ↓</a>
            <a className="button button-ghost" href="/contact">Contact Support</a>
          </div>
        </section>
      </article>
    </CustomerPageShell>
  );
}
