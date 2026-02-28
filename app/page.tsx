import Header from "./components/Header";
import Hero from "./components/Hero";
import MoreAboutUs from "./components/MoreAboutUs";
import BusinessModel from "./components/BusinessModel";
import InvestmentHighlights from "./components/InvestmentHighlights";
import Industries from "./components/Industries";
import MDMessage from "./components/MDMessage";
import CTA from "./components/CTA";
import Services from "./components/Services";
import HomeClients from "./components/HomeClients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home - Integrated Security & Facility Management Services',
  description: 'Innovision Limited offers integrated security services, facility management, manpower sourcing & payroll, toll plaza management, skill development, overseas recruitment, and drone training across India. 19+ years experience, 20,000+ trained professionals, 1000+ clients, ISO certified.',
  keywords: ['security services', 'facility management', 'integrated security solutions', 'manpower supply India', 'toll plaza management', 'security guards', 'workforce management', 'infrastructure services', 'manned guarding', 'electronic security'],
  openGraph: {
    title: 'Innovision Limited - Integrated Security & Infrastructure Services',
    description: 'Integrated security services, facility management, manpower sourcing & payroll, toll plaza management, skill development, overseas recruitment, and drone training across India. 19+ years of excellence serving 1000+ clients.',
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
    description: 'Integrated security services, facility management, manpower sourcing & payroll, toll plaza management, skill development, overseas recruitment, and drone training across India.',
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
      "streetAddress": "Plot 251, 1st Floor, Udyog Vihar IV",
      "addressLocality": "Gurugram",
      "addressRegion": "HR",
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
          "text": "Innovision Limited provides integrated services including manned private security, facility management, manpower sourcing & payroll, toll plaza management, skill development, overseas recruitment, and drone flying training across India."
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

  const localBusinessStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Innovision Limited",
    "image": "https://innovision.co.in/images/logo.png",
    "url": "https://innovision.co.in",
    "telephone": "+91-124-2341602",
    "email": "contact@innovision.co.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot 251, 1st Floor, Udyog Vihar IV",
      "addressLocality": "Gurugram",
      "addressRegion": "HR",
      "postalCode": "122015",
      "addressCountry": "IN"
    },
    "areaServed": "India"
  };

  const videoStructuredData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Innovision Corporate & IPO Overview",
    "description": "Corporate overview and investor communication video of Innovision Limited.",
    "thumbnailUrl": "https://innovision.co.in/images/video-poster-en.jpg",
    "uploadDate": "2026-02-21",
    "publisher": {
      "@type": "Organization",
      "name": "Innovision Limited",
      "logo": {
        "@type": "ImageObject",
        "url": "https://innovision.co.in/images/logo.png"
      }
    },
    "contentUrl": "https://innovision.co.in/investors/ipo-disclaimer/confirm"
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoStructuredData) }}
      />
      
      <Header />
      <main id="main-content" role="main">
        {/* 1. Banners */}
        <Hero />
        
        {/* 2. More About Us Section */}
        <MoreAboutUs />
        
        {/* 3. Our Services */}
        <Services />
        {/* 4. Why Choose Us */}
        {/* <WhyChooseUs /> */}
        
        {/* 5. Facts & Figures */}
        <InvestmentHighlights />
        
        {/* 6. Industries Served */}
        <Industries />
        
        {/* 8. Our Clients (Home Page) */}
        <HomeClients />
        
        {/* 9. Client Testimonials (hidden for now) */}
        
        {/* 10. IPO Ready */}
        <CTA />
        
        {/* 11-13. Our Footprints + Get in Touch + Contact Form */}
        <Contact />
        
      </main>
      <Footer />
    </>
  );
}
