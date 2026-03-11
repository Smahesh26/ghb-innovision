import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Terms and Conditions - Innovision Limited",
  description:
    "Read the official Terms and Conditions governing access to and use of Innovision Limited website and services.",
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <Header />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c0c0f] via-[#15151a] to-[#0b0b0d]">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(239,43,45,0.15),transparent_42%)]" />

        <div className="container relative mx-auto px-6 pb-16 pt-28 text-center text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-white/65">Legal</p>
          <h1 className="mx-auto mt-5 max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl">
            Terms &amp; <span className="text-[#EF2B2D]">Conditions</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/75">
            Effective Date: 10th March 2026
          </p>
        </div>
      </section>

      <main className="bg-gradient-to-b from-[#f8f8f9] via-white to-[#f6f7f8] pb-24">
        <section className="container mx-auto px-6 pt-16">
          <div className="flex justify-center">
            <article className="w-full max-w-4xl rounded-3xl border border-black/10 bg-white p-7 text-left shadow-[0_14px_34px_rgba(0,0,0,0.08)] sm:p-10">
              <p className="text-sm leading-7 text-neutral-700">
                These Terms and Conditions ("Terms") govern your access to and use of the website and services provided by Innovision Limited ("Innovision", "we", "our", or "us"). By using our website, you agree to these Terms.
              </p>

              <h2 className="mt-8 text-xl font-bold text-neutral-900">1. Acceptance of Terms</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-700">
                By accessing or using this website, you confirm that you have read, understood, and agreed to be bound by these Terms and all applicable laws.
              </p>

              <h2 className="mt-8 text-xl font-bold text-neutral-900">2. Use of Website</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-700">
                You agree to use this website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else&apos;s use and enjoyment of the website.
              </p>
              <p className="mt-3 text-sm leading-7 text-neutral-700">You must not:</p>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-neutral-700">
                <li>Attempt unauthorized access to website systems or data.</li>
                <li>Use the website to transmit harmful, illegal, or misleading content.</li>
                <li>Copy, scrape, or reproduce website content for commercial use without permission.</li>
              </ul>

              <h2 className="mt-8 text-xl font-bold text-neutral-900">3. Services and Information</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-700">
                Information provided on this website is for general information purposes only. While we strive for accuracy, Innovision does not guarantee that all information is complete, current, or error-free at all times.
              </p>
              <p className="mt-3 text-sm leading-7 text-neutral-700">
                Any service descriptions, opportunities, or updates may be modified, suspended, or withdrawn at our discretion without prior notice.
              </p>

              <h2 className="mt-8 text-xl font-bold text-neutral-900">4. Intellectual Property</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-700">
                All content on this website, including text, graphics, logos, images, documents, and design elements, is owned by or licensed to Innovision and is protected under applicable intellectual property laws.
              </p>
              <p className="mt-3 text-sm leading-7 text-neutral-700">
                No part of this website may be reproduced, distributed, or used without prior written permission from Innovision.
              </p>

              <h2 className="mt-8 text-xl font-bold text-neutral-900">5. Third-Party Links</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-700">
                Our website may contain links to third-party websites for convenience. Innovision is not responsible for the content, terms, privacy practices, or availability of those external websites.
              </p>
              <p className="mt-3 text-sm leading-7 text-neutral-700">Use of third-party websites is at your own risk.</p>

              <h2 className="mt-8 text-xl font-bold text-neutral-900">6. Privacy</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-700">
                Your use of this website is also governed by our Privacy Policy. By using this website, you consent to the collection and use of information as described in that policy.
              </p>

              <h2 className="mt-8 text-xl font-bold text-neutral-900">7. User Submissions</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-700">
                If you submit any information (including inquiries, resumes, forms, or contact details), you agree that:
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-neutral-700">
                <li>The information provided by you is accurate and lawful.</li>
                <li>You grant Innovision the right to process this information to respond to your requests or provide relevant services.</li>
                <li>Innovision may reject or remove submissions that are incomplete, unlawful, or inappropriate.</li>
              </ul>

              <h2 className="mt-8 text-xl font-bold text-neutral-900">8. Limitation of Liability</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-700">
                To the maximum extent permitted by law, Innovision shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from:
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-neutral-700">
                <li>Use or inability to use the website;</li>
                <li>Reliance on website information;</li>
                <li>Technical interruptions, delays, or errors.</li>
              </ul>

              <h2 className="mt-8 text-xl font-bold text-neutral-900">9. Indemnity</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-700">
                You agree to indemnify and hold harmless Innovision, its directors, employees, and affiliates from any claims, losses, liabilities, and expenses arising out of your misuse of the website or violation of these Terms.
              </p>

              <h2 className="mt-8 text-xl font-bold text-neutral-900">10. Modifications to Terms</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-700">
                Innovision reserves the right to update or modify these Terms at any time. Updated Terms will be posted on this page with a revised effective date. Continued use of the website after updates means acceptance of the revised Terms.
              </p>

              <h2 className="mt-8 text-xl font-bold text-neutral-900">11. Governing Law and Jurisdiction</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-700">
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Gurugram, Haryana.
              </p>

              <h2 className="mt-8 text-xl font-bold text-neutral-900">12. Contact Information</h2>
              <div className="mt-3 space-y-1 text-sm leading-7 text-neutral-700">
                <p>Innovision Limited</p>
                <p>
                  Email: {" "}
                  <a href="mailto:contact@innovision.co.in" className="font-semibold text-[#EF2B2D] underline">
                    contact@innovision.co.in
                  </a>
                </p>
                <p>Registered Phone No: +91-9289063231</p>
                <p>Corporate Phone No: 0124-4387354</p>
                <p>Corporate Phone No (F): 0124-2341602</p>
                <p>
                  Website: {" "}
                  <a
                    href="https://www.innovision.co.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#EF2B2D] underline"
                  >
                    https://www.innovision.co.in
                  </a>
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
