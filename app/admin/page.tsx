import Link from "next/link";

export default function AdminPage() {
  return (
    <main className="admin-page">
      <header><div><span>Charleston Clean Routine</span><h1>Operations access</h1></div><nav><Link href="/">View site</Link></nav></header>
      <section className="admin-stats">
        <article><span>Bookings + customers</span><strong>TidyWise</strong><a href="https://www.jointidywise.com/dashboard" target="_blank" rel="noreferrer">Open operations ↗</a></article>
        <article><span>Website inquiries</span><strong>Netlify</strong><p>Open Forms in the site dashboard to review booking starts, service-area leads, partner and provider inquiries, and review submissions.</p></article>
      </section>
    </main>
  );
}
