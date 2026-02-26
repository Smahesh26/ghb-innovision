import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import FloatingSocialBar from "@/app/components/FloatingSocialBar";
import PageTransition from "@/app/components/PageTransition";
import GlobalScrollReveal from "@/app/components/GlobalScrollReveal";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const albertus = localFont({
  src: "../public/fonts/Albertus Extra Bold Regular.ttf",
  variable: "--font-albertus",
  display: "swap",
});


export const metadata: Metadata = {
  metadataBase: new URL('https://innovision.co.in'),
  title: {
    default: 'Innovision Limited - India\'s Leading Integrated Security & Infrastructure Services',
    template: '%s | Innovision Limited'
  },
  description: 'Innovision Limited: 19+ years of excellence in integrated security services, facility management, and infrastructure solutions. 20,000+ workforce, 1000+ clients, 2,000+ sites across India. Preparing for IPO 2025.',
  keywords: ['security services India', 'facility management', 'integrated security solutions', 'manpower supply', 'toll plaza management', 'infrastructure services', 'security guards', 'workforce management', 'Innovision Limited', 'IPO 2025'],
  authors: [{ name: 'Innovision Limited' }],
  creator: 'Innovision Limited',
  publisher: 'Innovision Limited',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://innovision.co.in',
    siteName: 'Innovision Limited',
    title: 'Innovision Limited - India\'s Leading Integrated Security & Infrastructure Services',
    description: '19+ years of excellence in integrated security services, facility management, and infrastructure solutions. 20,000+ workforce, 1000+ clients across India.',
    images: [
      {
        url: '/images/banner1.png',
        width: 1200,
        height: 630,
        alt: 'Innovision Limited - Leading Security Services Provider',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Innovision Limited - India\'s Leading Security & Infrastructure Services',
    description: '19+ years of excellence in integrated security services, facility management, and infrastructure solutions.',
    images: ['/images/banner1.png'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
  alternates: {
    canonical: 'https://innovision.co.in',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${albertus.variable} ${inter.className}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#EF2B2D" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="antialiased">
        <GlobalScrollReveal />
        <PageTransition>{children}</PageTransition>
        <FloatingSocialBar />
      </body>
    </html>
  );
}
