"use client";

import Link from "next/link";
import { useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function IpoDisclaimerPage() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#fbfbfa] via-[#f7f7f5] to-[#f2f2f0]">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,43,45,0.08),transparent_45%)]" />
      <div className="pointer-events-none absolute left-[-120px] top-20 h-72 w-72 bg-black/5 blur-3xl" />
      
      <div className="relative mx-auto max-w-4xl px-6 py-24">
        <div className="rounded-sm border border-neutral-200/80 bg-white/95 p-8 shadow-[0_20px_50px_rgba(15,15,18,0.08)] lg:p-12">
          {/* Logo/Header */}
          <div className="mb-8 border-b border-neutral-200 pb-6">
            <h1 className="text-3xl font-bold text-neutral-900 sm:text-4xl">IPO Disclaimer</h1>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#EF2B2D]">
              Innovision Limited
            </p>
          </div>

          {/* Disclaimer Content */}
          <div className="space-y-6 text-neutral-700">
            <div className="rounded-sm border border-red-200/80 bg-red-50/50 p-6">
              <h2 className="text-lg font-bold text-red-900 uppercase tracking-wide">Important Notice</h2>
              <p className="mt-3 text-sm leading-relaxed text-red-800 font-semibold">
                NOT FOR ACCESS IN OR BY, OR DISTRIBUTION OR TRANSMISSION IN, INTO OR TO, DIRECTLY OR INDIRECTLY, 
                THE UNITED STATES OF AMERICA (INCLUDING ITS TERRITORIES AND POSSESSIONS), ANY STATE OF THE UNITED 
                STATES AND THE DISTRICT OF COLUMBIA (THE "UNITED STATES") OR ANY OTHER JURISDICTION WHERE IT IS 
                UNLAWFUL TO DO SO.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-red-800 font-semibold">
                THESE MATERIALS ARE NOT DIRECTED AT OR INTENDED TO BE ACCESSED BY PERSONS LOCATED OUTSIDE INDIA.
              </p>
            </div>

            <div className="space-y-4 text-sm leading-relaxed">
              <p className="font-semibold text-neutral-900 text-base">
                IMPORTANT: You must read and agree with the terms and conditions of the following disclaimer before continuing.
              </p>

              <p>
                The following disclaimer applies to the audio visual film of Innovision Limited (the "Company") dated 
                December 19, 2024, (the "IPO AV"), in relation to the initial public offering of the equity shares of 
                face value of ₹ 10 each ("Equity Shares") of the Company ("Issue").
              </p>

              <p>
                The Company is proposing, subject to receipt of requisite approvals, market conditions and other 
                considerations, to make an initial public offering of its Equity Shares and has filed a draft red 
                herring prospectus dated December 13, 2024 ("DRHP") with the Securities and Exchange Board of India 
                ("SEBI"), the BSE Limited and the National Stock Exchange of India Limited ("Stock Exchanges").
              </p>

              <p>
                The DRHP is available on the website of SEBI at{" "}
                <a href="https://www.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="text-[#EF2B2D] underline hover:text-[#d62426]">
                  www.sebi.gov.in
                </a>, as well as on the websites of the Stock Exchanges i.e. BSE and NSE at{" "}
                <a href="https://www.bseindia.com" target="_blank" rel="noopener noreferrer" className="text-[#EF2B2D] underline hover:text-[#d62426]">
                  www.bseindia.com
                </a> and{" "}
                <a href="https://www.nseindia.com" target="_blank" rel="noopener noreferrer" className="text-[#EF2B2D] underline hover:text-[#d62426]">
                  www.nseindia.com
                </a>, respectively, on the website of the Company at{" "}
                <a href="https://www.innovision.co.in" target="_blank" rel="noopener noreferrer" className="text-[#EF2B2D] underline hover:text-[#d62426]">
                  www.innovision.co.in
                </a>; and on the websites of the Book Running Lead Manager, i.e. – Emkay Global Financial Services Limited on{" "}
                <a href="https://www.emkayglobal.com" target="_blank" rel="noopener noreferrer" className="text-[#EF2B2D] underline hover:text-[#d62426]">
                  www.emkayglobal.com
                </a>.
              </p>

              <div className="rounded-sm border border-blue-200/80 bg-blue-50/50 p-4">
                <p className="font-semibold text-blue-900 uppercase text-xs tracking-wide">
                  THE IPO AV IS BEING MADE AVAILABLE ON THIS WEBSITE IN ACCORDANCE WITH CIRCULAR ON "AUDIOVISUAL (AV) 
                  PRESENTATION OF DISCLOSURES MADE IN PUBLIC ISSUE OFFER DOCUMENTS" DATED MAY 24, 2024, ISSUED BY THE 
                  SECURITIES AND EXCHANGE BOARD OF INDIA.
                </p>
              </div>

              <p>
                You are advised to read this disclaimer carefully before reading, accessing or making any other use of 
                the IPO AV. In accessing the IPO AV, you agree to be bound by the following terms and conditions, 
                including any modifications to them from time to time.
              </p>

              <p className="font-semibold text-neutral-900">
                Distribution and Access Restrictions:
              </p>

              <p>
                The IPO AV is directed at, and is intended for distribution to, and use by, residents of India only. 
                The information in the IPO AV, is not intended for, and may not be accessed in or by, or distributed 
                or transmitted in, into or to, directly or indirectly, the United States or any other jurisdiction 
                where it is unlawful to do so.
              </p>

              <p>
                All persons residing outside of the United States who wish to access the IPO AV contained on the following 
                page of this website should first ensure that they are not subject to local laws or regulations that 
                prohibit or restrict their right to access this website or require registration or approval for any 
                acquisition of securities by them.
              </p>

              <p className="font-semibold text-neutral-900">
                No Offer or Solicitation:
              </p>

              <p>
                No part of the contents of the IPO AV shall be copied or duplicated in any form by any means or 
                redistributed. The IPO AV do not constitute an offer to sell, or the solicitation of an offer to 
                purchase or acquire, any securities of the Company in the United States or in any other jurisdiction 
                in which such offer or solicitation would be unlawful prior to registration or qualification under 
                the securities laws of such jurisdiction.
              </p>

              <p>
                The Equity Shares have not been and will not be registered under the United States Securities Act of 
                1933, as amended (the "U.S. Securities Act") or any other applicable law of the United States and may 
                not be offered or sold within the United States except pursuant to an exemption from, or in a transaction 
                not subject to, the registration requirements of the U.S. Securities Act and applicable United States 
                state securities laws.
              </p>

              <p>
                The IPO AV does not constitute, and should not be construed as, "general solicitation" or "general 
                advertising" as defined under the U.S. Securities Act, or "directed selling efforts" under Regulation S 
                of the U.S. Securities Act.
              </p>

              <p className="font-semibold text-neutral-900">
                Limitation of Liability:
              </p>

              <p>
                The Company, and Emkay Global Financial Services Limited (the "Book Running Lead Manager") and their 
                respective affiliates, directors, officers, agents, representatives, advisers and employees do not accept 
                any liability whatsoever, direct or indirect, that may arise from the use of the information contained 
                on this website.
              </p>

              <p>
                The information in the IPO AV is as of the date thereof and neither the Company, the Promoters, the Book 
                Running Lead Manager nor their respective affiliates, directors, officers, agents, representatives, 
                advisers or employees are under any obligation to update or revise the IPO AV to reflect circumstances 
                arising after the date thereof.
              </p>

              <p>
                You are reminded that documents transmitted in electronic form may be altered or changed during the 
                process of transmission and consequently, neither the Company, the Book Running Lead Manager nor any of 
                their respective affiliates, directors, officers, agents, representatives, advisers or employees accepts 
                any liability or responsibility whatsoever in respect of alterations or changes which have taken place 
                during the course of transmission of the IPO AV in electronic format.
              </p>

              <p className="font-semibold text-neutral-900">
                Important Investor Advisory:
              </p>

              <p>
                Investors are advised not to rely on any other document, content or information provided in respect to 
                the Issue on the internet/ online websites/ social media platforms/ micro-blogging platforms and by 
                influencers/finfluencers since the same is not authorized/ approved/ commissioned/ paid by the Company 
                or its Promoters/Directors/KMPs or SMPs in any manner.
              </p>

              <p>
                Any such posts, including on social media platforms, may be illegal in certain jurisdictions and only 
                certain categories of persons may be authorized to access such information. Such posts, including on 
                social media platforms, do not constitute an offer or solicitation of an offer, or any advice or 
                recommendation to purchase, sell or transact in any of the Company's securities.
              </p>

              <div className="rounded-sm border border-amber-200/80 bg-amber-50/50 p-4">
                <p className="font-semibold text-amber-900">Risk Warning:</p>
                <p className="mt-2 text-amber-800">
                  Any potential investor should note that investment in equity shares involves a high degree of risk and 
                  for details relating to such risks, see the section titled "Risk Factors" of the Red Herring Prospectus 
                  when available.
                </p>
              </div>

              <p>
                Potential investors should also refer to the Prospectus which will be filed with the Registrar of 
                Companies, Delhi and Haryana at Delhi ("RoC") and SEBI in the future, including the section titled 
                "Risk Factors".
              </p>

              <p>
                The IPO AV provides only the salient features of the Issue and accordingly, potential investors should 
                not rely on the IPO AV. Any decision on whether to invest in the equity shares must be made solely on 
                the basis of the Red Herring Prospectus when available.
              </p>

              <p className="font-semibold text-neutral-900">
                Website Access and Security:
              </p>

              <p>
                You are accessing this website at your own risk and it is your responsibility to take precautions to 
                ensure that it is free from viruses. Neither the Company, Promoters, the Book Running Lead Manager nor 
                their respective affiliates, directors, officers, agents, representatives, advisers or employees will be 
                liable or have any responsibility of any kind for any loss or damage that you incur in the event of any 
                failure or disruption of this website, or resulting from the act or omission of any other party involved 
                in making this website or the data contained therein available to you, or from any other cause relating 
                to your access to, inability to access, or use of this website or the IPO AV.
              </p>

              <p>
                Failure to comply with this disclaimer may result in a violation of the applicable laws of India and 
                other jurisdictions. Any other information contained in, or that can be accessed via this website does 
                not constitute a part of the IPO AV.
              </p>

              <div className="mt-8 rounded-sm border-2 border-red-300 bg-red-50 p-6">
                <p className="text-center font-bold text-red-900 uppercase tracking-wide">
                  IF YOU ARE NOT PERMITTED TO VIEW THE MATERIALS ON THIS WEBSITE OR ARE IN ANY DOUBT AS TO WHETHER YOU 
                  ARE PERMITTED TO VIEW THESE MATERIALS, PLEASE EXIT THIS WEBPAGE.
                </p>
              </div>

              <p className="text-xs italic text-neutral-600 mt-8">
                Disclaimer Date: December 19, 2024
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col gap-4 border-t border-neutral-200 pt-8 sm:flex-row sm:justify-end">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-sm border border-neutral-300 bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-neutral-700 transition-all duration-300 hover:border-neutral-400 hover:bg-neutral-50"
            >
              Go Back
            </Link>
            <Link
              href="/investors/ipo-disclaimer/confirm"
              className="inline-flex items-center justify-center rounded-sm border border-[#EF2B2D] bg-gradient-to-r from-[#EF2B2D] to-[#d62426] px-8 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white shadow-[0_10px_25px_rgba(239,43,45,0.35)] transition-all duration-300 hover:shadow-[0_15px_35px_rgba(239,43,45,0.45)]"
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}
