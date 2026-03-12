import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Privacy Policy - Innovision Limited",
  description:
    "Read Innovision Limited's privacy policy, including cookie usage, personal information handling, and third-party website guidance.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c0c0f] via-[#15151a] to-[#0b0b0d]">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(239,43,45,0.15),transparent_42%)]" />

        <div className="container relative mx-auto px-6 pb-16 pt-36 sm:pt-40 text-center text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-white/65">Policy</p>
          <h1 className="mx-auto mt-5 max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl">
            Privacy <span className="text-[#EF2B2D]">Policy</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/75">
            This policy covers our use of information collected by the Innovision website
            and linked Innovision websites during your visit.
          </p>
        </div>
      </section>

      <main className="bg-gradient-to-b from-[#f8f8f9] via-white to-[#f6f7f8] pb-24">
        <section className="container mx-auto px-6 pt-16">
          <div className="flex justify-center">
            <article className="w-full max-w-4xl rounded-3xl border border-black/10 bg-white p-7 text-left shadow-[0_14px_34px_rgba(0,0,0,0.08)] sm:p-10">
            <p className="text-sm leading-7 text-neutral-700">
              This privacy policy covers our use of the information collected by the
              INNOVISION website (or other linked INNOVISION websites) during your visit
              to our site.
            </p>

            <h2 className="mt-8 text-center text-xl font-bold text-neutral-900">Cookies</h2>
            <p className="mt-3 text-sm leading-7 text-neutral-700">
              INNOVISION may store a small file (commonly known as a "cookie") on your
              computer when you visit{" "}
              <a
                href="http://www.innovision.co.in"
                className="font-semibold text-[#EF2B2D] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                innovision.co.in
              </a>
              .
            </p>
            <p className="mt-3 text-sm leading-7 text-neutral-700">
              We use cookies to improve our knowledge of the use of our website and to
              help us determine how well our website is operating.
            </p>
            <p className="mt-3 text-sm leading-7 text-neutral-700">
              The type of information we collect using cookies is specific to your PC and
              does not include personal information about you. We collect information such
              as IP address, visit date and time, pages visited, and whether those pages
              were delivered quickly and successfully.
            </p>
            <p className="mt-3 text-sm leading-7 text-neutral-700">
              Using this information allows us to improve our website and provide a better
              online experience.
            </p>
            <p className="mt-3 text-sm leading-7 text-neutral-700">
              You can delete our cookies or block this information by changing your device
              or browser settings. If you block this information, you may not be able to
              use some features of the site.
            </p>

            <h2 className="mt-8 text-center text-xl font-bold text-neutral-900">Personal Information</h2>
            <p className="mt-3 text-sm leading-7 text-neutral-700">
              We collect and use personal information (including name, address, telephone
              number, and email) in order to:
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-neutral-700">
              <li>Respond to queries or requests submitted by you.</li>
              <li>Provide services such as our Email Alert service.</li>
              <li>Process orders or applications submitted by you.</li>
              <li>
                Administer or otherwise carry out our obligations in relation to any
                agreement you have with us.
              </li>
              <li>Anticipate and resolve problems with any services supplied to you.</li>
              <li>We do not share this personal information with any other party.</li>
            </ul>

            <h2 className="mt-8 text-center text-xl font-bold text-neutral-900">Visiting Other Sites</h2>
            <p className="mt-3 text-sm leading-7 text-neutral-700">
              This policy applies to innovision.co.in. Other INNOVISION websites may have
              privacy policies that differ from this one. If you visit other INNOVISION
              websites, please check the privacy policy of that website.
            </p>
            <p className="mt-3 text-sm leading-7 text-neutral-700">
              We cannot be responsible for the privacy policies and practices of other
              websites even if:
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-neutral-700">
              <li>You accessed the third-party website using links from our website.</li>
              <li>You linked to our website from a third-party website.</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-neutral-700">
              We recommend that you check the policy of each site you visit and contact
              the owner or operator of that site if you have concerns or questions.
            </p>

            <h2 className="mt-8 text-center text-xl font-bold text-neutral-900">Contact</h2>
            <p className="mt-3 text-sm leading-7 text-neutral-700">
              For more information about our privacy policy, please contact: {" "}
              <a
                href="mailto:info@innovision.co.in"
                className="font-semibold text-[#EF2B2D] underline"
              >
                info@innovision.co.in
              </a>
            </p>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
