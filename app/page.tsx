import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import BusinessModel from "./components/BusinessModel";
import Timeline from "./components/Timeline";
import InvestmentHighlights from "./components/InvestmentHighlights";
import Technology from "./components/Technology";
import Industries from "./components/Industries";
import MDMessage from "./components/MDMessage";
import CTA from "./components/CTA";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import News from "./components/News";
import Footer from "./components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home - Integrated Security & Facility Management Services',
  description: 'Innovision Limited offers comprehensive integrated security services, facility management, toll plaza operations, and workforce solutions across India. 19+ years experience, 20,000+ trained professionals, 1000+ clients, ISO certified.',
  keywords: ['security services', 'facility management', 'integrated security solutions', 'manpower supply India', 'toll plaza management', 'security guards', 'workforce management', 'infrastructure services', 'manned guarding', 'electronic security'],
  openGraph: {
    title: 'Innovision Limited - Integrated Security & Infrastructure Services',
    description: 'Comprehensive integrated security services, facility management, and workforce solutions across India. 19+ years of excellence serving 1000+ clients.',
    url: 'https://innovision.co.in',
    siteName: 'Innovision Limited',
    images: [
      {
        url: '/images/banner1.png',
        width: 1200,
        height: 630,
        alt: 'Innovision Security Services',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Innovision Limited - Integrated Security & Infrastructure Services',
    description: 'Comprehensive security services, facility management, and workforce solutions across India.',
    images: ['/images/banner1.png'],
  },
  alternates: {
    canonical: 'https://innovision.co.in',
  },
};

export default function Home() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Innovision Limited",
    "alternateName": "Innovision Security Services",
    "url": "https://innovision.co.in",
    "logo": "https://innovision.co.in/images/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9289063231",
      "contactType": "customer service",
      "email": "contact@innovision.co.in",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot no. 251, Udyog Vihar, Phase IV, Sector 18",
      "addressLocality": "Gurgaon",
      "addressRegion": "Haryana",
      "postalCode": "122015",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.linkedin.com/company/innovision-limited",
      "https://www.facebook.com/innovisionlimited",
      "https://twitter.com/innovisionltd"
    ],
    "description": "Innovision Limited is India's leading integrated security and infrastructure services provider with 19+ years of excellence, 20,000+ workforce, and 1000+ clients across the nation.",
    "foundingDate": "2007",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": 20000
    },
    "areaServed": {
      "@type": "Place",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Security and Infrastructure Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Manned Guarding Services",
            "description": "Professional security guards and manned guarding solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Facility Management",
            "description": "Comprehensive facility management and maintenance services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Toll Plaza Management",
            "description": "Highway toll plaza operations and management"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Manpower Supply",
            "description": "Skilled and trained workforce solutions"
          }
        }
      ]
    }
  };

  // FAQ Structured Data for Rich Snippets
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Innovision Limited provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Innovision Limited provides comprehensive integrated security services including manned guarding, facility management, toll plaza management, manpower supply, electronic security systems, and workforce training solutions across India."
        }
      },
      {
        "@type": "Question",
        "name": "How many employees does Innovision have?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Innovision Limited has a workforce of over 20,000 trained professionals serving 1000+ clients across 2,000+ sites in India."
        }
      },
      {
        "@type": "Question",
        "name": "Is Innovision certified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Innovision Limited is ISO 9001:2015 and ISO 45001:2018 certified, demonstrating our commitment to quality management and occupational health & safety standards."
        }
      },
      {
        "@type": "Question",
        "name": "Which states does Innovision operate in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Innovision Limited operates across 15 states in India including Haryana, Delhi, Punjab, Uttar Pradesh, Rajasthan, Maharashtra, Gujarat, Karnataka, Tamil Nadu, Telangana, West Bengal, Odisha, Bihar, Madhya Pradesh, and Chhattisgarh."
        }
      },
      {
        "@type": "Question",
        "name": "When was Innovision Limited founded?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Innovision Limited was founded in 2007 and has grown from 10 security guards to become India's leading integrated security and infrastructure services provider with 19+ years of excellence."
        }
      }
    ]
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      
      <Header />
      <main id="main-content" role="main">
        <Hero />
        <About />
      {/* <BusinessModel /> */}
      <Timeline />
      <Reviews />
      <InvestmentHighlights />
      <Industries />
      <Technology />
      <Clients />
      {/* <MDMessage /> */}
      <CTA />
      <Contact />
      <Services />
      <News />
      </main>
      <Footer />
    </>
  );
}
