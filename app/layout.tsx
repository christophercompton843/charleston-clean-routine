import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./layout-fixes.css";
import "./pricing-tool.css";
import "./hero-fix.css";
import "./mobile-home-fix.css";
import SiteMenu from "./site-menu";
import LaunchNotice from "./launch-notice";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://charlestoncleanroutine.com"),
  title: "Charleston Clean Routine | Your Home, Handled",
  description: "Get an instant residential cleaning price and explore thoughtfully designed home, vacation-rental, Airbnb, and portfolio cleaning throughout the Charleston area.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg", apple: "/favicon.svg" },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", locale: "en_US", title: "Charleston Clean Routine | Your Home, Handled",
    description: "Clear residential pricing, defined service standards, screened cleaning professionals, and thoughtfully designed care for Charleston-area homes and short-term rentals.",
    siteName: "Charleston Clean Routine",
    images: [{ url: "/charleston-home-warm.jpg", width: 1600, height: 1067, alt: "A warm Charleston home after professional cleaning" }],
  },
  twitter: { card: "summary_large_image", title: "Charleston Clean Routine | Your Home, Handled", description: "Home, vacation-rental, Airbnb, and portfolio cleaning shaped around Charleston life.", images: ["/charleston-home-warm.jpg"] },
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
    description: "Charleston-area cleaning service offering recurring home cleaning, deep cleaning, move-in and move-out cleaning, vacation-rental and Airbnb turnover care, and coordinated portfolio cleaning.",
    priceRange: "$$",
    areaServed: [
      "Charleston, SC", "Mount Pleasant, SC", "Daniel Island, SC", "Sullivan's Island, SC", "Isle of Palms, SC",
      "West Ashley, SC", "James Island, SC", "Folly Beach, SC", "North Charleston, SC", "Hanahan, SC",
      "Johns Island, SC", "Kiawah Island, SC", "Seabrook Island, SC", "Summerville, SC", "Goose Creek, SC", "Ladson, SC"
    ].map((name) => ({ "@type": "Place", name })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cleaning services",
      itemListElement: [
        "Recurring home cleaning",
        "Deep cleaning",
        "Move-in and move-out cleaning",
        "Vacation rental cleaning",
        "Airbnb turnover cleaning",
        "Portfolio cleaning services"
      ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } }))
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WNLGJFTV');`,
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8SLBBWFTRM"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8SLBBWFTRM');
            `,
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WNLGJFTV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <LaunchNotice />
        <SiteMenu />
        {children}
      </body>
    </html>
  );
}
