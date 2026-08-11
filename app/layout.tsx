import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://charlestoncleanroutine.com"),
  title: "Charleston Clean Routine | Your Home, Handled",
  description:
    "Get an instant price, book online, and keep your Charleston-area home on a reliable cleaning routine. $35 off your first clean with recurring service.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Charleston Clean Routine | Your Home, Handled",
    description:
      "Instant pricing, online booking, vetted providers, quality checks, and recurring scheduling for Charleston-area homes.",
    siteName: "Charleston Clean Routine",
    images: [
      {
        url: "/charleston-home-warm.jpg",
        width: 1600,
        height: 1067,
        alt: "A warm Charleston home after a professional reset",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Charleston Clean Routine | Your Home, Handled",
    description:
      "Modern home and vacation-rental cleaning shaped around Charleston life.",
    images: ["/charleston-home-warm.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
