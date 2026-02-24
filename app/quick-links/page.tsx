import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Quick Links - Innovision Limited",
  description: "India's leading manpower solutions provider - Domestic & International Recruitment, Jobs, Training & Strategic Partnerships",
};

export default function QuickLinksPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden bg-gradient-to-br from-[#0d0d0f] to-[#1a1a1d]">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/20" />
        
        <div className="container relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pt-28">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-5xl font-bold text-white lg:text-6xl">
              Quick <span className="text-[#EF2B2D]">Links</span>
            </h1>
            <p className="text-lg leading-relaxed text-white/80">
              India's Leading Manpower Solutions Provider
            </p>
            <p className="text-base text-white/70 mt-2">
              Your trusted partner for Domestic & International Recruitment, Jobs, Training & Strategic Partnerships
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="bg-white">

        {/* Services Overview */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              
              {/* Manpower Security & Facility Services */}
              <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#EF2B2D]/50">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[#EF2B2D] to-red-600 text-white shadow-lg">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Manpower Security & Facility Services</h3>
                <p className="text-sm text-gray-600 mb-4">Submit your manpower requirement</p>
                <Link href="/contact" className="inline-flex items-center text-sm font-semibold text-[#EF2B2D] hover:text-red-700 transition">
                  Submit Requirement →
                </Link>
              </div>

              {/* Job Placements */}
              <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#EF2B2D]/50">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Job Placements</h3>
                <p className="text-sm text-gray-600 mb-4">Domestic & international opportunities across multiple industries</p>
                <Link href="/careers" className="inline-flex items-center text-sm font-semibold text-[#EF2B2D] hover:text-red-700 transition">
                  Explore Jobs →
                </Link>
              </div>

              {/* Recruitment Partners */}
              <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#EF2B2D]/50">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Recruitment Partners</h3>
                <p className="text-sm text-gray-600 mb-4">Join our ecosystem of consultants, vendors & training partners</p>
                <Link href="/contact" className="inline-flex items-center text-sm font-semibold text-[#EF2B2D] hover:text-red-700 transition">
                  Become Partner →
                </Link>
              </div>

              {/* Global Reach */}
              <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#EF2B2D]/50">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Global Reach</h3>
                <p className="text-sm text-gray-600 mb-4">Connecting skilled professionals worldwide</p>
                <Link href="/about" className="inline-flex items-center text-sm font-semibold text-[#EF2B2D] hover:text-red-700 transition">
                  Learn More →
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-7xl px-6">
            <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">
              Our <span className="text-[#EF2B2D]">Services</span>
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              
              {/* Candidate Application */}
              <div className="rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 text-center transition-all duration-300 hover:border-[#EF2B2D] hover:shadow-2xl">
                <div className="mb-6 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#EF2B2D] to-red-600 text-white shadow-xl">
                  <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-gray-900">Candidate Application</h3>
                <p className="mb-6 text-gray-600">Apply for verified overseas opportunities.</p>
                <Link 
                  href="/careers"
                  className="inline-block rounded-full bg-gradient-to-r from-[#EF2B2D] to-red-600 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  Apply Now
                </Link>
              </div>

              {/* Vendor Onboarding */}
              <div className="rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 text-center transition-all duration-300 hover:border-blue-500 hover:shadow-2xl">
                <div className="mb-6 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-xl">
                  <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-gray-900">Vendor Onboarding</h3>
                <p className="mb-6 text-gray-600">Partner with us for global recruitment.</p>
                <Link 
                  href="/contact"
                  className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  Become Partner
                </Link>
              </div>

              {/* Security & Facility */}
              <div className="rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 text-center transition-all duration-300 hover:border-purple-500 hover:shadow-2xl">
                <div className="mb-6 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-xl">
                  <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-gray-900">Security & Facility</h3>
                <p className="mb-6 text-gray-600">Security manpower & facility services.</p>
                <Link 
                  href="/services/security/manned-private-security"
                  className="inline-block rounded-full bg-gradient-to-r from-purple-500 to-purple-600 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  Submit Requirement
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* WhatsApp Channels */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="mb-4 text-4xl font-bold text-gray-900">
                Join Our Official <span className="text-[#25D366]">WhatsApp Channels</span>
              </h2>
              <p className="text-lg text-gray-600">Real-time job updates, industry insights & verified opportunities</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              
              {/* International & Domestic Jobs */}
              <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-green-600 text-white">
                  <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">International & Domestic Jobs</h3>
                <p className="mb-4 text-sm text-gray-600">Verified job openings across India & overseas.</p>
                <a 
                  href="https://whatsapp.com/channel/0029VaeeDvxF3rssBzBf4J3s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#25D366] hover:text-green-700 transition"
                >
                  Join Channel →
                </a>
              </div>

              {/* Consultants & Vendors */}
              <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                  <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">Consultants & Vendors</h3>
                <p className="mb-4 text-sm text-gray-600">Official updates for recruitment partners & vendors.</p>
                <a 
                  href="https://whatsapp.com/channel/0029VarjuV85Bb3zuHxJdV3b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition"
                >
                  Join Channel →
                </a>
              </div>

              {/* Ex-Servicemen Jobs */}
              <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white">
                  <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">Ex-Servicemen Jobs</h3>
                <p className="mb-4 text-sm text-gray-600">Dedicated employment channel for Ex-Defence personnel.</p>
                <a 
                  href="https://whatsapp.com/channel/0029Vaew0eV0IaKN4JJVS33V"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700 transition"
                >
                  Join Channel →
                </a>
              </div>

              {/* Professional Network */}
              <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                  <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">Professional Network</h3>
                <p className="mb-4 text-sm text-gray-600">Pan-India network for manpower & facility leaders.</p>
                <a 
                  href="https://chat.whatsapp.com/KAMTvKePJgLDkVEDdKNLEg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 transition"
                >
                  Join Network →
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* WhatsApp Groups - Ex-Servicemen */}
        <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="mb-4 text-4xl font-bold text-gray-900">
                Ex-Servicemen <span className="text-[#EF2B2D]">Job Groups</span>
              </h2>
              <p className="text-lg text-gray-600">Exclusive job groups for Ex-Army, Navy & Air Force personnel</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              
              {/* Navy & Air Force Jobs */}
              <div className="rounded-2xl bg-white border-2 border-orange-200 p-8 text-center shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <div className="mb-6 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">Navy & Air Force Jobs</h3>
                <p className="mb-6 text-sm text-gray-600">Job opportunities for Navy & Air Force JCO/OR.</p>
                <a 
                  href="https://chat.whatsapp.com/EyLXHe3kxmFHoZjHJk6cai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  Join Group
                </a>
              </div>

              {/* Innovision Ex-Servicemen */}
              <div className="rounded-2xl bg-white border-2 border-orange-200 p-8 text-center shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <div className="mb-6 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#EF2B2D] to-red-700 text-white shadow-lg">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">Innovision Ex-Servicemen</h3>
                <p className="mb-6 text-sm text-gray-600">Official Innovision Ex-Servicemen community.</p>
                <a 
                  href="https://chat.whatsapp.com/F00Tl1xHXJ6BPoJ9ZtZ8Mc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-gradient-to-r from-[#EF2B2D] to-red-700 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  Join Group
                </a>
              </div>

              {/* JCO / NCO / OR Jobs */}
              <div className="rounded-2xl bg-white border-2 border-orange-200 p-8 text-center shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <div className="mb-6 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-green-700 text-white shadow-lg">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">JCO / NCO / OR Jobs</h3>
                <p className="mb-6 text-sm text-gray-600">Combined job group for all ex-servicemen ranks.</p>
                <a 
                  href="https://chat.whatsapp.com/Bd7ND7KKU0e67vqsshiCHZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-gradient-to-r from-green-600 to-green-700 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  Join Group
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* Get in Touch */}
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="mb-4 text-4xl font-bold text-gray-900">
                Get in <span className="text-[#EF2B2D]">Touch</span>
              </h2>
              <p className="text-lg text-gray-600">Connect with our team for domestic or international opportunities</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
              
              {/* Domestic Jobs & Placements */}
              <div className="rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-blue-50 to-white p-10">
                <h3 className="mb-6 text-2xl font-bold text-gray-900">Domestic Jobs & Placements</h3>
                
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-500">Email</p>
                      <a href="mailto:contact@innovision.co.in" className="text-lg font-bold text-blue-600 hover:text-blue-700 transition">
                        contact@innovision.co.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-green-600 text-white">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-500">Phone</p>
                      <a href="tel:+919289062827" className="text-lg font-bold text-gray-900 hover:text-[#EF2B2D] transition">
                        +91 92890 62827
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#25D366] to-green-600 text-white">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-500">WhatsApp</p>
                      <a href="https://wa.me/919289062827" target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-[#25D366] hover:text-green-700 transition">
                        Message Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* International Jobs & Placements */}
              <div className="rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-purple-50 to-white p-10">
                <h3 className="mb-6 text-2xl font-bold text-gray-900">International Jobs & Placements</h3>
                
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-500">Email</p>
                      <a href="mailto:contactintl@innovision.co.in" className="text-lg font-bold text-purple-600 hover:text-purple-700 transition">
                        contactintl@innovision.co.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 text-white">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-500">Phone</p>
                      <a href="tel:+919818776874" className="text-lg font-bold text-gray-900 hover:text-[#EF2B2D] transition">
                        +91 98187 76874
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#25D366] to-green-600 text-white">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-500">WhatsApp</p>
                      <a href="https://wa.me/919818776874" target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-[#25D366] hover:text-green-700 transition">
                        Message Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Company Information */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
          <div className="container mx-auto max-w-7xl px-6">
            <h2 className="mb-12 text-center text-4xl font-bold">
              Innovision <span className="text-[#EF2B2D]">Limited</span>
            </h2>

            <div className="grid gap-8 lg:grid-cols-2">
              
              {/* Contact Information */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <h3 className="mb-6 text-2xl font-bold text-white">Contact Us</h3>
                
                <div className="space-y-4 text-white/80">
                  <div className="flex items-start gap-3">
                    <span className="text-[#EF2B2D]">📞</span>
                    <div>
                      <p className="font-semibold text-white">Phone:</p>
                      <p>0124-2341602, 0124-4387354</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-[#EF2B2D]">📧</span>
                    <div>
                      <p className="font-semibold text-white">Email:</p>
                      <p>contact@innovision.co.in</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <h3 className="mb-6 text-2xl font-bold text-white">Our Locations</h3>
                
                <div className="space-y-6 text-white/80">
                  <div className="flex items-start gap-3">
                    <span className="text-[#EF2B2D] text-xl">📍</span>
                    <div>
                      <p className="font-semibold text-white mb-1">Registered Address:</p>
                      <p className="text-sm">First Floor, 1/209, Sadar Bazaar, Delhi Cantonment, New Delhi, Delhi 110010</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-[#EF2B2D] text-xl">📍</span>
                    <div>
                      <p className="font-semibold text-white mb-1">Corporate Address:</p>
                      <p className="text-sm">Plot no. 251, Udyog Vihar, Phase IV, Sector 18, Gurgaon, Haryana - 122015</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Social Media Links */}
            <div className="mt-12 text-center">
              <h3 className="mb-6 text-xl font-bold text-white">Follow Us</h3>
              <div className="flex justify-center gap-4">
                <a href="https://www.facebook.com/innovision.co.in" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-[#EF2B2D] hover:border-[#EF2B2D]">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/innovisionlimited/" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-[#EF2B2D] hover:border-[#EF2B2D]">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
                <a href="https://x.com/Innovision_Ltd" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-[#EF2B2D] hover:border-[#EF2B2D]">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="https://in.linkedin.com/company/innovision-limited" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-[#EF2B2D] hover:border-[#EF2B2D]">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/@InnovisionLimited_" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-[#EF2B2D] hover:border-[#EF2B2D]">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Footer Note */}
            <div className="mt-12 border-t border-white/10 pt-8 text-center">
              <p className="text-sm text-white/50">© 2024 Innovision Limited. All rights reserved.</p>
              <div className="mt-4 flex justify-center gap-6 text-sm text-white/50">
                <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
                <Link href="#" className="hover:text-white transition">Terms & Conditions</Link>
              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
