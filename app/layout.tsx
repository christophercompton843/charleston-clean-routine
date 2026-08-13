import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://charlestoncleanroutine.com"),
  title: "Charleston Clean Routine | Your Home, Handled",
  description: "Get an instant price, book online, and keep your Charleston-area home on a reliable cleaning routine. $35 off your first clean with recurring service.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg", apple: "/favicon.svg" },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", locale: "en_US", title: "Charleston Clean Routine | Your Home, Handled",
    description: "Instant pricing, online booking, screened providers, quality checks, and recurring scheduling for Charleston-area homes.",
    siteName: "Charleston Clean Routine",
    images: [{ url: "/charleston-home-warm.jpg", width: 1600, height: 1067, alt: "A warm Charleston home after a professional reset" }],
  },
  twitter: { card: "summary_large_image", title: "Charleston Clean Routine | Your Home, Handled", description: "Modern home and vacation-rental cleaning shaped around Charleston life.", images: ["/charleston-home-warm.jpg"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const localBusinessSchema = {
    "@context": "https://schema.org", "@type": "HouseCleaning",
    "@id": "https://charlestoncleanroutine.com/#business",
    name: "Charleston Clean Routine", url: "https://charlestoncleanroutine.com",
    logo: "https://charlestoncleanroutine.com/charleston-clean-routine-logo.svg",
    image: "https://charlestoncleanroutine.com/charleston-home-warm.jpg",
    email: "hello@charlestoncleanroutine.com",
    telephone: "+1-843-633-8648",
    description: "Locally owned Charleston-area residential and vacation-rental cleaning service offering recurring home cleaning, deep cleaning, move-in and move-out cleaning, vacation-rental turnovers, and Refresh & Reset visits.",
    priceRange: "$$",
    areaServed: ["Mount Pleasant, SC", "Daniel Island, SC", "Sullivan's Island, SC", "Isle of Palms, SC", "Charleston, SC", "West Ashley, SC", "James Island, SC", "Folly Beach, SC"].map((name) => ({ "@type": "Place", name })),
    hasOfferCatalog: { "@type": "OfferCatalog", name: "Cleaning services", itemListElement: ["Recurring home cleaning", "Deep cleaning", "Move-in and move-out cleaning", "Vacation-rental turnover cleaning", "Refresh & Reset visits"].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })) },
  };

  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8HYGH9DRGX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8HYGH9DRGX');
            `,
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
