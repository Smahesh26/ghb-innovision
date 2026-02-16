import Header from "../components/Header";
import About from "../components/About";
import Timeline from "../components/Timeline";
import BusinessModel from "../components/BusinessModel";
import InvestmentHighlights from "../components/InvestmentHighlights";
import Technology from "../components/Technology";
import Industries from "../components/Industries";
import MDMessage from "../components/MDMessage";
import Governance from "../components/Governance";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Stats from "../components/Stats";
import Clients from "../components/Clients";
import Reviews from "../components/Reviews";
import News from "../components/News";
import Contact from "../components/Contact";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Company Profile & Leadership",
  description: "Discover Innovision Limited's journey since 2007. From 10 guards to 20,000+ workforce, 500+ clients, 2,000+ sites. Learn about our governance, technology, and leadership preparing for IPO 2025. ISO 9001:2015 & 45001:2018 certified.",
  keywords: ['about innovision', 'company profile', 'security company India', 'Lt Col Randeep Hundal', 'IPO 2025', 'integrated security provider', 'facility management company', 'corporate governance', 'ISO certified security'],
  openGraph: {
    title: 'About Innovision Limited - 19+ Years of Excellence in Security Services',
    description: 'From 10 guards to 20,000+ workforce. Discover our journey, leadership, and vision for integrated security and infrastructure services in India.',
    url: 'https://innovision.co.in/about',
    siteName: 'Innovision Limited',
    images: [
      {
        url: '/images/banner1.png',
        width: 1200,
        height: 630,
        alt: 'Innovision Limited - About Us',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Innovision Limited - 19+ Years of Excellence',
    description: 'From 10 guards to 20,000+ workforce. Discover our journey, leadership, and vision.',
    images: ['/images/banner1.png'],
  },
  alternates: {
    canonical: 'https://innovision.co.in/about',
  },
};

export default function AboutPage() {
  // Structured Data for About Page
  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Innovision Limited",
      "url": "https://innovision.co.in",
      "foundingDate": "2007",
      "founder": {
        "@type": "Person",
        "name": "Lt. Col. Randeep Hundal",
        "jobTitle": "Managing Director"
      },
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": 20000
      },
      "description": "Innovision Limited has grown from a team of 10 security guards in 2007 to India's leading integrated security and infrastructure services provider with 20,000+ workforce, 500+ clients, and operations across 15 states.",
      "areaServed": [
        "Haryana", "West Bengal", "Odisha", "Rajasthan", "Delhi", "Punjab",
        "Uttar Pradesh", "Chhattisgarh", "Bihar", "Madhya Pradesh",
        "Karnataka", "Tamil Nadu", "Telangana", "Maharashtra", "Gujarat"
      ],
      "award": "ISO 9001:2015 & ISO 45001:2018 Certified",
      "knowsAbout": [
        "Security Services",
        "Facility Management",
        "Toll Plaza Management",
        "Workforce Solutions",
        "Infrastructure Services"
      ]
    },
    "about": "Innovision Limited is preparing for its IPO in 2025, showcasing 19+ years of excellence in integrated security services, facility management, and infrastructure solutions across India."
  };

  // Breadcrumb Structured Data
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://innovision.co.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://innovision.co.in/about"
      }
    ]
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      
      <Header />
      
      {/* Hero Banner for About Page */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-gradient-to-br from-[#0d0d0f] via-[#1a1a1d] to-[#0d0d0f]" aria-label="About Us Hero">
        <div className="absolute inset-0 bg-[url('/images/banner1.png')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        
        <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-xs text-white/70" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a href="/" itemProp="item" className="hover:text-[#EF2B2D] transition">
                  <span itemProp="name">Home</span>
                </a>
                <meta itemProp="position" content="1" />
              </li>
              <li className="text-white/40">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" className="text-white font-medium">About Us</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>

          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.4em] text-white/70">
            <span className="h-px w-12 bg-[#EF2B2D]" aria-hidden="true" />
            <span>Our Story</span>
            <span className="h-px w-12 bg-[#EF2B2D]" aria-hidden="true" />
          </div>

          <h1 className="mt-6 text-5xl font-bold sm:text-6xl lg:text-7xl">
            About Innovision
          </h1>

          <p className="mt-5 max-w-3xl text-lg text-white/80">
            Building India's most trusted integrated workforce and infrastructure support platform through discipline, technology, and governance excellence
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <main id="main-content" role="main">
      <MDMessage />
      <About />
      <Timeline />
      <BusinessModel />
      <InvestmentHighlights />
      <Technology />
      <Industries />
      <Governance />
      <Services />
      <WhyChooseUs />
      <Stats />
      <Clients />
      <Reviews />
      <News />
      <Contact />
      <CTA />
      </main>
      <Footer />
    </>
  );
}
