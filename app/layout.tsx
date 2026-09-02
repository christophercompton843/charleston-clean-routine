import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./layout-fixes.css";
import "./pricing-tool.css";
import "./hero-fix.css";
import "./mobile-home-fix.css";
import "./premium-polish.css";
import "./final-overrides.css";
import SiteMenu from "./site-menu";
import LaunchNotice from "./launch-notice";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://charlestoncleanroutine.com"),
  title: "House Cleaning Charleston SC | Charleston Clean Routine",
  description:
    "Professional house cleaning in Charleston, SC, including recurring cleaning, deep cleaning, move-in and move-out service, vacation-rental cleaning, Airbnb care, and multi-property portfolio cleaning. See the scope, build your estimate, and book online.",
  keywords: [
    "house cleaning Charleston SC",
    "home cleaning Charleston SC",
    "recurring house cleaning Charleston",
    "deep cleaning Charleston SC",
    "move out cleaning Charleston SC",
    "vacation rental cleaning Charleston SC",
    "Airbnb cleaning Charleston SC",
    "property cleaning Charleston SC",
  ],
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg", apple: "/favicon.svg" },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://charlestoncleanroutine.com",
    title: "Professional House Cleaning in Charleston, SC | Charleston Clean Routine",
    description:
      "Home cleaning, vacation-rental care, Airbnb cleaning, and coordinated portfolio service throughout the Charleston area. Clear scope, online pricing, and accountable completion.",
    siteName: "Charleston Clean Routine",
    images: [
      {
        url: "/charleston-home-warm.jpg",
        width: 1600,
        height: 1067,
        alt: "Charleston home cared for by Charleston Clean Routine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "House Cleaning Charleston SC | Charleston Clean Routine",
    description:
      "Professional home cleaning, vacation-rental care, Airbnb cleaning, and portfolio service throughout Charleston, South Carolina.",
    images: ["/charleston-home-warm.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HouseCleaning",
    "@id": "https://charlestoncleanroutine.com/#business",
    name: "Charleston Clean Routine",
    url: "https://charlestoncleanroutine.com",
    logo: "https://charlestoncleanroutine.com/ccr-logo-primary.webp",
    image: "https://charlestoncleanroutine.com/charleston-home-warm.jpg",
    email: "hello@charlestoncleanroutine.com",
    telephone: "+1-843-633-8648",
    description:
      "Charleston-area cleaning company providing recurring house cleaning, deep cleaning, move-in and move-out cleaning, vacation-rental and Airbnb care, and coordinated multi-property portfolio cleaning.",
    priceRange: "$$",
    knowsAbout: [
      "Recurring house cleaning",
      "Deep cleaning",
      "Move-in cleaning",
      "Move-out cleaning",
      "Vacation rental cleaning",
      "Airbnb turnover cleaning",
      "Multi-property cleaning",
    ],
    areaServed: [
      "Charleston, SC",
      "Mount Pleasant, SC",
      "Daniel Island, SC",
      "Sullivan's Island, SC",
      "Isle of Palms, SC",
      "West Ashley, SC",
      "James Island, SC",
      "Folly Beach, SC",
      "North Charleston, SC",
      "Hanahan, SC",
      "Johns Island, SC",
      "Kiawah Island, SC",
      "Seabrook Island, SC",
      "Summerville, SC",
      "Goose Creek, SC",
      "Ladson, SC",
    ].map((name) => ({ "@type": "Place", name })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Charleston cleaning services",
      itemListElement: [
        "Recurring house cleaning",
        "Deep cleaning",
        "Move-in and move-out cleaning",
        "Vacation rental cleaning",
        "Airbnb turnover cleaning",
        "Portfolio cleaning services",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name, areaServed: "Charleston, South Carolina" },
      })),
    },
  };
 const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is included in my cleaning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use the room-by-room service guide to compare Routine, Deep, and Move-In / Move-Out cleaning. Your confirmed service scope is the standard your cleaning professional follows.",
        },
      },
      {
        "@type": "Question",
        name: "What information do you need for my instant price?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can configure the published residential price first. Charleston Clean Routine asks for your first name and email only when you choose to save the estimate, request a review, or request a pending appointment; a mobile number remains optional.",
        },
      },
      {
        "@type": "Question",
        name: "Why does Charleston Clean Routine cost more than some cleaning services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Charleston Clean Routine does not depend on artificially low introductory pricing, rushed appointments, or compensation that makes quality harder to sustain. Cleaning professionals who are paid fairly are better positioned to do careful, consistent work.",
        },
      },
      {
        "@type": "Question",
        name: "Do you clean Airbnbs and vacation rentals?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Charleston Clean Routine provides guest turnover and property-readiness services for Airbnbs, vacation homes, and coastal rentals, with options such as linen setup, restocking coordination, reporting, and deeper resets based on the property plan.",
        },
      },
      {
        "@type": "Question",
        name: "What is Portfolio Care?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Portfolio Care organizes multiple properties under one relationship while preserving the service requirements of each address, with a clear property-by-property plan and proposal.",
        },
      },
      {
        "@type": "Question",
        name: "Who will clean my home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Approved providers are screened for professional cleaning experience, background requirements, insurance, reliability, and the ability to follow Charleston Clean Routine service standards and property instructions.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if something is missed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Clients can report the concern and Charleston Clean Routine acknowledges it, reviews what happened, corrects what needs correcting, and closes the loop.",
        },
      },
      {
        "@type": "Question",
        name: "Can I call Charleston Clean Routine?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. For pricing, booking, service-area checks, and account management, the website and Client Portal are usually the fastest route. Phone support is available at (843) 633-8648.",
        },
      },
    ],
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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
