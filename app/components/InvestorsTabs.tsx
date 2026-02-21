"use client";

import { useState, useEffect } from "react";

type Doc = {
  title: string;
  url?: string;
};

type CompanyDocs = {
  company: string;
  docs: Doc[];
};

const tabs = [
  { id: "relations", label: "Investor Relations" },
  { id: "financial", label: "Financial Statements" },
  { id: "governance", label: "Corporate Governance" },
  { id: "stock", label: "Stock Information" },
] as const;

type TabId = (typeof tabs)[number]["id"];

// Add smooth animation styles for details/summary
const smoothDetailsStyles = `
  details {
    overflow: hidden;
  }
  
  details > summary {
    cursor: pointer;
    user-select: none;
    list-style: none;
    transition: background-color 250ms ease-out;
  }
  
  details > summary::-webkit-details-marker {
    display: none;
  }
  
  details > summary:hover {
    background-color: rgba(59, 130, 246, 0.1) !important;
  }
  
  details[open] > summary {
    background-color: rgba(59, 130, 246, 0.08);
  }
  
  details > summary span {
    display: inline-block;
    transition: transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1);
  }
  
  details[open] > summary span {
    transform: rotate(180deg);
  }
  
  @keyframes expandDetailsSmooth {
    from {
      opacity: 0;
      transform: translateY(-15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes collapseDetailsSmooth {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-15px);
    }
  }
`;

function ViewLink({ doc }: { doc: Doc }) {
  return (
    <a
      href={doc.url || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center rounded-sm border border-[#EF2B2D]/25 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-[#EF2B2D] transition-all duration-300 hover:border-[#EF2B2D] hover:bg-[#EF2B2D] hover:text-white"
    >
      View
    </a>
  );
}

function DocList({ title, docs }: { title: string; docs: Doc[] }) {
  return (
    <div className="rounded-sm border border-neutral-200/80 bg-white p-6 shadow-[0_12px_32px_rgba(15,15,18,0.06)]">
      <h3 className="text-lg font-bold leading-snug text-neutral-900">{title}</h3>
      <div className="mt-5 space-y-3">
        {docs.map((doc) => (
          <div
            key={doc.title}
            className="flex flex-col gap-3 rounded-sm border border-neutral-200/80 bg-[#fafaf9] p-4 transition hover:border-[#EF2B2D]/25 hover:bg-white sm:flex-row sm:items-center sm:justify-between"
          >
            <p className="text-sm font-medium text-neutral-700">{doc.title}</p>
            <ViewLink doc={doc} />
          </div>
        ))}
      </div>
    </div>
  );
}

function CompanyBlock({ item }: { item: CompanyDocs }) {
  return (
    <div className="rounded-sm border border-neutral-200/80 bg-[#fafaf9] p-4 shadow-[0_6px_16px_rgba(15,15,18,0.04)]">
      <p className="font-semibold text-neutral-900">{item.company}</p>
      <div className="mt-3 space-y-2">
        {item.docs.map((doc) => (
          <div key={doc.title} className="flex items-center justify-between gap-3">
            <p className="text-sm text-neutral-700">{doc.title}</p>
            <ViewLink doc={doc} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function InvestorsTabs() {
  const [activeTab, setActiveTab] = useState<TabId>("relations");
  const [governanceYear, setGovernanceYear] = useState("2024-2025");
  const [selectedCommittee, setSelectedCommittee] = useState("audit");

  useEffect(() => {
    const handleDetailsToggle = (e: Event) => {
      const details = e.target as HTMLDetailsElement;
      const children = Array.from(details.children);
      const content = children.find(child => child.tagName !== 'SUMMARY') as HTMLElement;
      
      if (!content) return;
      
      if (details.open) {
        content.style.display = 'block';
        content.style.animation = 'expandDetailsSmooth 400ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards';
      } else {
        content.style.animation = 'collapseDetailsSmooth 300ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards';
        setTimeout(() => {
          content.style.display = 'none';
        }, 300);
      }
    };
    
    const detailsElements = document.querySelectorAll('details');
    detailsElements.forEach(detail => {
      detail.addEventListener('toggle', handleDetailsToggle);
    });
    
    return () => {
      detailsElements.forEach(detail => {
        detail.removeEventListener('toggle', handleDetailsToggle);
      });
    };
  }, []);


  const investorRelations2023: Doc[] = [
    { title: "Annual Return", url: "/images/pdfs/annualreturn2023-2024.pdf" },
    { title: "Corporate Social Responsibility Report", url: "/images/pdfs/CorporateSocialResponsibilityReport2023-2024.pdf" },
  ];

  const investorRelations2024: Doc[] = [
    { title: "Annual Return", url: "/images/pdfs/annualreturn2024-2025.pdf" },
    { title: "Corporate Social Responsibility Report", url: "/images/pdfs/CorporateSocialResponsibilityReport2024-2025.pdf" },
    { title: "Material Documents As mentioned in issue documents", url: "/" },
    { title: "Contact details of Compliance Officer", url: "/" },
  ];

  const ratingRationale: Doc[] = [
    { title: "Crisil Ratings - Rating Rationale", url: "/images/pdfs/RatingRationale.pdf" }
  ];

  const ipoDocs: Doc[] = [
    { title: "Draft Red Herring Prospectus (DRHP)", url: "/images/pdfs/DraftRedHerringProspectus(DRHP).pdf" },
    { title: "Industry Report", url: "/images/pdfs/industryreport.pdf" },
    { title: "Addendum to DRHP", url: "/images/pdfs/addendumtodrhp.pdf" },
    { title: "Innovision Limited IPO Audio Visual", url: "/investors/ipo-disclaimer" },
  ];

  const subsidiary2023: CompanyDocs[] = [
    {
      company: "Aerodrone Robotics Pvt Ltd",
      docs: [
        { title: "INDEPENDENT AUDITORS REPORT MARCH24", url: "/images/pdfs/independentauditorsreportmarch24.pdf" },
        { title: "SIGNIFICANT POLICIES", url: "/images/pdfs/SIGNIFICANT POLICIES.pdf" },
        { title: "Aerodrone Balance Sheet March 24", url: "/images/pdfs/Aerodrone Balance Sheet March 24.pdf" },
      ],
    },
    {
      company: "Innovision International Pvt Ltd",
      docs: [{ title: "Balance Sheet Innovision International", url: "/images/pdfs/Balance Sheet Innovision International.pdf" }],
    },
  ];

  const subsidiary2024: CompanyDocs[] = [
    {
      company: "Aerodrone Robotics Pvt Ltd",
      docs: [{ title: "Aerodrone Balance Sheet March 25", url: "/images/pdfs/Aerodrone Robotics Pvt Ltd Aerodrone Balance Sheet March 25.pdf" }],
    },
    {
      company: "Innovision International Pvt Ltd",
      docs: [
        { title: "Accounting Policy", url: "/images/pdfs/Accounting Policy.pdf" },
        { title: "Auditor Report", url: "/images/pdfs/Auditor Report.pdf" },
        { title: "Innovision International BS 24-25", url: "/images/pdfs/Innovision International BS 24-25.pdf" },
      ],
    },
    {
      company: "Woke India Foundation",
      docs: [
        { title: "Woke Auditor Report Mar-25", url: "/images/pdfs/Woke Auditor Report Mar-25.pdf" },
        { title: "Woke Financials March 2025", url: "/images/pdfs/Woke Financials March 2025.pdf" },
        { title: "Woke Accounts Mar-25", url: "/images/pdfs/Woke Accounts Mar-25.pdf" },
      ],
    },
  ];

  const group2023: CompanyDocs[] = [
    {
      company: "Vetted Consultant Pvt Ltd",
      docs: [{ title: "Vetted Consultant Pvt Ltd", url: "/images/pdfs/Vetted Consultant Pvt Ltd.pdf" }],
    },
    {
      company: "Apoint Infotech Pvt Ltd",
      docs: [{ title: "Apoint Infotech", url: "/images/pdfs/Apoint Infotech.pdf" }],
    },
  ];

  const group2024: CompanyDocs[] = [
    {
      company: "Vetted Consultant Pvt Ltd",
      docs: [
        { title: "Vetted Auditor Report March-25", url: "/images/pdfs/Vetted Auditor Report March-25.pdf" },
        { title: "Vetted BS 24-25", url: "/images/pdfs/Vetted BS 24-25.pdf" },
        { title: "Vetted Notes to Accounts Mar-25", url: "/images/pdfs/Vetted Notes to Accounts Mar-25.pdf" },
      ],
    },
    {
      company: "Apoint Infotech Pvt Ltd",
      docs: [
        { title: "APOINT AUDIT REPORT MARCH-25", url: "/images/pdfs/Apoint Audit Report March-25.pdf" },
        { title: "APOINT BS 24-25", url: "/images/pdfs/Apoint BS 24-25.pdf" },
        { title: "APOINT NOTES MARCH-25", url: "/images/pdfs/Apoint Notes March-25.pdf" },
      ],
    },
  ];

  const annualReports: Doc[] = [
    { title: "Annual Report/Board Report (2023-2024)", url: "/images/pdfs/Annual Report-Board Report2023-2024.pdf" },
    { title: "Annual Report/Board Report (2024-2025)", url: "/images/pdfs/Annual Report-Board Report2024-2025.pdf" },
  ];

  const financialStatements2023: Doc[] = [
    { title: "Standalone Balance Sheet and Profit & Loss Account", url: "/images/pdfs/Standalone Balance Sheet and Profit & Loss Account.pdf" },
    { title: "Consolidate Balance Sheet and Profit & Loss Account", url: "/images/pdfs/Consolidate Balance Sheet and profit & Loss Account.pdf" },
  ];

  const financialStatements2024: Doc[] = [
    { title: "Standalone Balance Sheet and Profit & Loss Account", url: "/images/pdfs/Standalone Balance Sheet and Profit & Loss Account2024-2025.pdf" },
    { title: "Consolidate Balance Sheet and Profit & Loss Account", url: "/images/pdfs/Consolidate Balance Sheet and profit & Loss Account2024-2025.pdf" },
  ];

  const boardDirectors = [
    { name: "Lt Col Randeep Hundal", role: "CMD, Executive Director" },
    { name: "Mr. Uday Pal Singh", role: "CEO, Executive Director" },
    { name: "Lt Col Gurpal Singh", role: "Executive Director" },
    { name: "Captain Pawan Kumar", role: "Independent Director (Non-Executive)" },
    { name: "Ms. Sudha Hooda", role: "Independent Director (Non-Executive)" },
    { name: "Ms. Sulekha Sharma", role: "Independent Director (Non-Executive)" },
  ];

  const policies: Doc[] = [
    { title: "Code of Conduct of BOD, KMP & SMP", url: "/images/pdfs/investor/Code of Conduct of BOD, KMP & SMP.pdf" },
    { title: "Archival Policy", url: "/images/pdfs/investor/Archival Policy.pdf" },
    { title: "Nomination & Remuneration Policy", url: "/images/pdfs/investor/Nomination & Remuneration Policy.pdf" },
    { title: "Internal Procedures and Conduct for Prevention of Insider Trading", url: "/images/pdfs/investor/Internal Procedures and Conduct for Prevention of Insider Trading.pdf" },
    { title: "Policy on Preservation Of Records", url: "/images/pdfs/investor/Policy on Preservation Of Records.pdf" },
    { title: "Policy on determination and reporting of materiality of Events/ information", url: "/images/pdfs/investor/Policy on determination and reporting of materiality of Events/ information.pdf" },
    { title: "Materiality Policy", url: "/images/pdfs/investor/Materiality Policy.pdf" },
    { title: "Policy on Materiality of Related Party Transactions", url: "/images/pdfs/investor/Policy on Materiality of Related Party Transactions.pdf" },
    { title: "Policy on Material Subsidiaries", url: "/images/pdfs/investor/Policy on Material Subsidiaries.pdf" },
    { title: "Dividend Distribution Policy", url: "/images/pdfs/investor/Dividend Distribution Policy.pdf" },
    { title: "Corporate Social Responsibility Policy", url: "/images/pdfs/investor/Corporate Social Responsibility Policy.pdf" },
    { title: "Policy for Evaluation of Performance of Board", url: "/images/pdfs/investor/Policy for Evaluation of Performance of Board.pdf" },
    { title: "Policy on Diversity of BOD", url: "/images/pdfs/investor/Policy on Diversity of BOD.pdf" },
    { title: "Policy On Succession Planning", url: "/images/pdfs/investor/Policy On Succession Planning.pdf" },
    { title: "Risk Management Policy", url: "/images/pdfs/investor/Risk Management Policy.pdf" },
    { title: "Vigil Mechanism/Whistle Blower Policy", url: "/images/pdfs/investor/Vigil Mechanism/Whistle Blower Policy.pdf" },
    { title: "Global Policy on POSH", url: "/images/pdfs/investor/Global Policy on POSH.pdf" },
    { title: "Code of Practices & Procedures for Fair Disclosures of UPSI", url: "/images/pdfs/investor/Code of Practices & Procedures for Fair Disclosures of UPSI.pdf" },
    { title: "Familarisation Programme Independent Directors", url: "/images/pdfs/investor/Familarisation Programme Independent Directors.pdf" },
    { title: "Terms of Appointment of Independent Directors", url: "/images/pdfs/investor/Terms of Appointment of Independent Directors.pdf" },
  ];

  const quarters = ["Q1", "Q2", "Q3", "Q4"];

  return (
    <>
      <style>{smoothDetailsStyles}</style>
      <main className="relative overflow-hidden bg-gradient-to-b from-[#fbfbfa] via-[#f7f7f5] to-[#f2f2f0] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,43,45,0.08),transparent_45%)]" />
      <div className="pointer-events-none absolute left-[-120px] top-20 h-72 w-72 bg-black/5 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="sticky top-24 z-20 rounded-sm border border-neutral-200/80 bg-white/80 p-3 backdrop-blur-xl shadow-[0_18px_40px_rgba(15,15,18,0.08)]">
          <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-sm px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-[#EF2B2D] to-[#d62426] text-white shadow-[0_10px_25px_rgba(239,43,45,0.35)]"
                    : "bg-[#fafaf9] text-neutral-700 hover:bg-white hover:text-[#EF2B2D]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 space-y-8">
          {activeTab === "relations" && (
            <section className="space-y-8 rounded-sm border border-neutral-200/80 bg-white/95 p-8 shadow-[0_20px_50px_rgba(15,15,18,0.08)] lg:p-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#EF2B2D]">Investor Relations</p>
                <h2 className="mt-4 text-3xl font-bold text-neutral-900 sm:text-4xl">Investor Documents</h2>
              </div>

              <details className="rounded-sm border border-neutral-200/80 bg-blue-50 shadow-[0_8px_24px_rgba(15,15,18,0.04)]">
                <summary className="cursor-pointer flex items-center justify-between px-5 py-3 rounded-sm bg-blue-100 text-neutral-900 font-semibold">Filter by financial year: 2023-2024
                  <span className="text-neutral-600">▼</span>
                </summary>
                <div className="mt-0 p-5 bg-white">
                  <DocList title="" docs={investorRelations2023} />
                </div>
              </details>

              <details className="rounded-sm border border-neutral-200/80 bg-blue-50 shadow-[0_8px_24px_rgba(15,15,18,0.04)]">
                <summary className="cursor-pointer flex items-center justify-between px-5 py-3 rounded-sm bg-blue-100 text-neutral-900 font-semibold">Filter by financial year: 2024-2025
                  <span className="text-neutral-600">▼</span>
                </summary>
                <div className="mt-0 p-5 bg-white">
                  <DocList title="" docs={investorRelations2024} />
                </div>
              </details>

              <div id="compliance-officer" className="rounded-sm border border-neutral-200/80 bg-gradient-to-b from-[#ffffff] to-[#fafaf9] p-6 shadow-[0_10px_30px_rgba(15,15,18,0.05)]">
                <h3 className="text-lg font-bold text-neutral-900">Contact details of Compliance Officer</h3>
                <div className="mt-4 grid gap-2 text-sm text-neutral-700">
                  <p><span className="font-semibold">Name:</span> Ms. Jyoti Sachdeva</p>
                  <p><span className="font-semibold">Email:</span> investor@innovision.co.in , cs@innovision.co.in</p>
                  <p><span className="font-semibold">Phone:</span> 0124-2341602</p>
                </div>
              </div>

              <details className="rounded-sm border border-neutral-200/80 bg-blue-50 shadow-[0_8px_24px_rgba(15,15,18,0.04)]">
                <summary className="cursor-pointer flex items-center justify-between px-5 py-3 rounded-sm bg-blue-100 text-neutral-900 font-semibold">Rating Rationale
                  <span className="text-neutral-600">▼</span>
                </summary>
                <div className="mt-0 p-5 bg-white">
                  <DocList title="" docs={ratingRationale} />
                </div>
              </details>

              <details className="rounded-sm border border-neutral-200/80 bg-blue-50 shadow-[0_8px_24px_rgba(15,15,18,0.04)]">
                <summary className="cursor-pointer flex items-center justify-between px-5 py-3 rounded-sm bg-blue-100 text-neutral-900 font-semibold">IPO Offer Documents
                  <span className="text-neutral-600">▼</span>
                </summary>
                <div className="mt-0 p-5 bg-white">
                  <DocList title="" docs={ipoDocs} />
                </div>
              </details>

              <details className="rounded-sm border border-neutral-200/80 bg-blue-50 shadow-[0_8px_24px_rgba(15,15,18,0.04)]">
                <summary className="cursor-pointer flex items-center justify-between px-5 py-3 rounded-sm bg-blue-100 text-neutral-900 font-semibold">Subsidiary Financials
                  <span className="text-neutral-600">▼</span>
                </summary>
                <div className="mt-5 grid gap-6 lg:grid-cols-2">
                  <div className="rounded-sm border border-neutral-200/80 bg-[#fafaf9] p-6">
                    <h4 className="text-base font-semibold text-neutral-900">Filter by financial year: 2023-2024</h4>
                    <div className="mt-4 space-y-4">
                      {subsidiary2023.map((item) => (
                        <CompanyBlock key={item.company} item={item} />
                      ))}
                    </div>
                  </div>

                  <div className="rounded-sm border border-neutral-200/80 bg-[#fafaf9] p-6">
                    <h4 className="text-base font-semibold text-neutral-900">Filter by financial year: 2024-2025</h4>
                    <div className="mt-4 space-y-4">
                      {subsidiary2024.map((item) => (
                        <CompanyBlock key={item.company} item={item} />
                      ))}
                    </div>
                  </div>
                </div>
              </details>

              <details className="rounded-sm border border-neutral-200/80 bg-blue-50 shadow-[0_8px_24px_rgba(15,15,18,0.04)]">
                <summary className="cursor-pointer flex items-center justify-between px-5 py-3 rounded-sm bg-blue-100 text-neutral-900 font-semibold">Group Company Financials
                  <span className="text-neutral-600">▼</span>
                </summary>
                <div className="mt-5 grid gap-6 lg:grid-cols-2">
                  <div className="rounded-sm border border-neutral-200/80 bg-[#fafaf9] p-6">
                    <h4 className="text-base font-semibold text-neutral-900">Filter by financial year: 2023-2024</h4>
                    <div className="mt-4 space-y-4">
                      {group2023.map((item) => (
                        <CompanyBlock key={item.company} item={item} />
                      ))}
                    </div>
                  </div>

                  <div className="rounded-sm border border-neutral-200/80 bg-[#fafaf9] p-6">
                    <h4 className="text-base font-semibold text-neutral-900">Filter by financial year: 2024-2025</h4>
                    <div className="mt-4 space-y-4">
                      {group2024.map((item) => (
                        <CompanyBlock key={item.company} item={item} />
                      ))}
                    </div>
                  </div>
                </div>
              </details>
            </section>
          )}

          {activeTab === "financial" && (
            <section className="space-y-8 rounded-sm border border-neutral-200/80 bg-white/95 p-8 shadow-[0_20px_50px_rgba(15,15,18,0.08)] lg:p-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#EF2B2D]">Financial Information</p>
                <h2 className="mt-4 text-3xl font-bold text-neutral-900 sm:text-4xl">Financial Statements</h2>
              </div>

              {/* Financial Information Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-neutral-900">Financial Information</h3>
                
                <details className="rounded-sm border border-neutral-200/80 bg-blue-50 shadow-[0_8px_24px_rgba(15,15,18,0.04)]">
                  <summary className="cursor-pointer flex items-center justify-between px-5 py-3 rounded-sm bg-blue-100 text-neutral-900 font-semibold">
                    Filter by financial year 2023-2024
                    <span className="text-neutral-600">▼</span>
                  </summary>
                  <div className="mt-0 p-5 bg-white">
                    <DocList title="" docs={annualReports.filter(d => d.title.includes("2023"))} />
                  </div>
                </details>

                <details className="rounded-sm border border-neutral-200/80 bg-blue-50 shadow-[0_8px_24px_rgba(15,15,18,0.04)]">
                  <summary className="cursor-pointer flex items-center justify-between px-5 py-3 rounded-sm bg-blue-100 text-neutral-900 font-semibold">
                    Filter by financial year 2024-2025
                    <span className="text-neutral-600">▼</span>
                  </summary>
                  <div className="mt-0 p-5 bg-white">
                    <DocList title="" docs={annualReports.filter(d => d.title.includes("2024") || !d.title.includes("2023"))} />
                  </div>
                </details>
              </div>

              {/* Financial Statements Section */}
              <div className="space-y-6 pt-6 border-t border-neutral-200">
                <h3 className="text-2xl font-bold text-neutral-900">Financial Statements</h3>
                
                <details className="rounded-sm border border-neutral-200/80 bg-blue-50 shadow-[0_8px_24px_rgba(15,15,18,0.04)]">
                  <summary className="cursor-pointer flex items-center justify-between px-5 py-3 rounded-sm bg-blue-100 text-neutral-900 font-semibold">
                    Filter by financial year 2023-2024
                    <span className="text-neutral-600">▼</span>
                  </summary>
                  <div className="mt-0 p-5 bg-white">
                    <DocList title="" docs={financialStatements2023} />
                  </div>
                </details>

                <details className="rounded-sm border border-neutral-200/80 bg-blue-50 shadow-[0_8px_24px_rgba(15,15,18,0.04)]">
                  <summary className="cursor-pointer flex items-center justify-between px-5 py-3 rounded-sm bg-blue-100 text-neutral-900 font-semibold">
                    Filter by financial year 2024-2025
                    <span className="text-neutral-600">▼</span>
                  </summary>
                  <div className="mt-0 p-5 bg-white">
                    <DocList title="" docs={financialStatements2024} />
                  </div>
                </details>
              </div>
            </section>
          )}

          {activeTab === "governance" && (
            <section className="space-y-8 rounded-sm border border-neutral-200/80 bg-white/95 p-8 shadow-[0_20px_50px_rgba(15,15,18,0.08)] lg:p-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#EF2B2D]">Corporate Governance</p>
                <h2 className="mt-4 text-3xl font-bold text-neutral-900 sm:text-4xl">Board & Policies</h2>
              </div>

              <div className="rounded-sm border border-neutral-200/80 bg-gradient-to-b from-[#ffffff] to-[#fafaf9] p-6 shadow-[0_10px_30px_rgba(15,15,18,0.05)]">
                <h3 className="text-xl font-bold text-neutral-900">Board of Directors</h3>
                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {boardDirectors.map((director) => (
                    <div key={director.name} className="rounded-sm border border-neutral-200 bg-white p-4">
                      <p className="font-semibold text-neutral-900">{director.name}</p>
                      <p className="mt-1 text-sm text-neutral-600">{director.role}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-sm border border-neutral-200/80 bg-gradient-to-b from-[#ffffff] to-[#fafaf9] p-6 shadow-[0_10px_30px_rgba(15,15,18,0.05)]">
                <h3 className="text-xl font-bold text-neutral-900">Committees of Board of Directors</h3>
                
                {/* Committee Dropdown */}
                <div className="mt-4">
                  <select
                    value={selectedCommittee}
                    onChange={(e) => setSelectedCommittee(e.target.value)}
                    className="w-full rounded-sm border border-neutral-300 bg-white px-4 py-3 text-sm font-semibold text-neutral-700 transition focus:border-[#EF2B2D] focus:outline-none focus:ring-2 focus:ring-[#EF2B2D]/20 sm:w-auto sm:min-w-[320px]"
                  >
                    <option value="audit">Audit Committee</option>
                    <option value="nomination">Nomination And Remuneration Committee</option>
                    <option value="stakeholders">Stakeholders Relationship Committee</option>
                    <option value="csr">Corporate Social Responsibility Committee</option>
                    <option value="risk">Risk Management Committee</option>
                  </select>
                </div>

                {/* Committee Content */}
                <div className="mt-6">
                  {selectedCommittee === "audit" && (
                    <div className="overflow-x-auto rounded-sm border border-neutral-200 bg-white shadow-sm">
                      <table className="min-w-full text-left text-sm">
                        <thead className="bg-neutral-100">
                          <tr>
                            <th className="border-b border-neutral-200 px-4 py-3 font-semibold text-neutral-900">Name</th>
                            <th className="border-b border-neutral-200 px-4 py-3 font-semibold text-neutral-900">Position</th>
                            <th className="border-b border-neutral-200 px-4 py-3 font-semibold text-neutral-900">Nature of Directorship</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-200 bg-white">
                          <tr className="hover:bg-neutral-50">
                            <td className="px-4 py-3 text-neutral-900">Ms. Sudha Hooda</td>
                            <td className="px-4 py-3 text-neutral-700">Chairperson</td>
                            <td className="px-4 py-3 text-neutral-700">Independent, Non-Executive Director</td>
                          </tr>
                          <tr className="hover:bg-neutral-50">
                            <td className="px-4 py-3 text-neutral-900">Mr. Pawan Kumar</td>
                            <td className="px-4 py-3 text-neutral-700">Member</td>
                            <td className="px-4 py-3 text-neutral-700">Independent, Non-Executive Director</td>
                          </tr>
                          <tr className="hover:bg-neutral-50">
                            <td className="px-4 py-3 text-neutral-900">Col Randeep Hundal</td>
                            <td className="px-4 py-3 text-neutral-700">Member</td>
                            <td className="px-4 py-3 text-neutral-700">CMD, Executive</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}

                  {selectedCommittee === "nomination" && (
                    <div className="overflow-x-auto rounded-sm border border-neutral-200 bg-white shadow-sm">
                      <table className="min-w-full text-left text-sm">
                        <thead className="bg-neutral-100">
                          <tr>
                            <th className="border-b border-neutral-200 px-4 py-3 font-semibold text-neutral-900">Name</th>
                            <th className="border-b border-neutral-200 px-4 py-3 font-semibold text-neutral-900">Position</th>
                            <th className="border-b border-neutral-200 px-4 py-3 font-semibold text-neutral-900">Nature of Directorship</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-200 bg-white">
                          <tr className="hover:bg-neutral-50">
                            <td className="px-4 py-3 text-neutral-900">Mr. Pawan Kumar</td>
                            <td className="px-4 py-3 text-neutral-700">Chairperson</td>
                            <td className="px-4 py-3 text-neutral-700">Independent Director</td>
                          </tr>
                          <tr className="hover:bg-neutral-50">
                            <td className="px-4 py-3 text-neutral-900">Ms. Sudha Hooda</td>
                            <td className="px-4 py-3 text-neutral-700">Member</td>
                            <td className="px-4 py-3 text-neutral-700">Independent Director</td>
                          </tr>
                          <tr className="hover:bg-neutral-50">
                            <td className="px-4 py-3 text-neutral-900">Mrs. Sulekha Sharma</td>
                            <td className="px-4 py-3 text-neutral-700">Member</td>
                            <td className="px-4 py-3 text-neutral-700">Independent Director</td>
                          </tr>
                          <tr className="hover:bg-neutral-50">
                            <td className="px-4 py-3 text-neutral-900">Lt. Col Randeep Hundal</td>
                            <td className="px-4 py-3 text-neutral-700">Member</td>
                            <td className="px-4 py-3 text-neutral-700">CMD, Executive</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}

                  {selectedCommittee === "stakeholders" && (
                    <div className="overflow-x-auto rounded-sm border border-neutral-200 bg-white shadow-sm">
                      <table className="min-w-full text-left text-sm">
                        <thead className="bg-neutral-100">
                          <tr>
                            <th className="border-b border-neutral-200 px-4 py-3 font-semibold text-neutral-900">Name</th>
                            <th className="border-b border-neutral-200 px-4 py-3 font-semibold text-neutral-900">Position</th>
                            <th className="border-b border-neutral-200 px-4 py-3 font-semibold text-neutral-900">Nature of Directorship</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-200 bg-white">
                          <tr className="hover:bg-neutral-50">
                            <td className="px-4 py-3 text-neutral-900">Mr. Pawan Kumar</td>
                            <td className="px-4 py-3 text-neutral-700">Chairperson</td>
                            <td className="px-4 py-3 text-neutral-700">Independent Director</td>
                          </tr>
                          <tr className="hover:bg-neutral-50">
                            <td className="px-4 py-3 text-neutral-900">Lt. Col Randeep Hundal</td>
                            <td className="px-4 py-3 text-neutral-700">Member</td>
                            <td className="px-4 py-3 text-neutral-700">CMD, Executive</td>
                          </tr>
                          <tr className="hover:bg-neutral-50">
                            <td className="px-4 py-3 text-neutral-900">Mr. Uday Pal Singh</td>
                            <td className="px-4 py-3 text-neutral-700">Member</td>
                            <td className="px-4 py-3 text-neutral-700">Director (CEO)(WTD)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}

                  {selectedCommittee === "csr" && (
                    <div className="overflow-x-auto rounded-sm border border-neutral-200 bg-white shadow-sm">
                      <table className="min-w-full text-left text-sm">
                        <thead className="bg-neutral-100">
                          <tr>
                            <th className="border-b border-neutral-200 px-4 py-3 font-semibold text-neutral-900">Name</th>
                            <th className="border-b border-neutral-200 px-4 py-3 font-semibold text-neutral-900">Position</th>
                            <th className="border-b border-neutral-200 px-4 py-3 font-semibold text-neutral-900">Nature of Directorship</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-200 bg-white">
                          <tr className="hover:bg-neutral-50">
                            <td className="px-4 py-3 text-neutral-900">Mr. Pawan Kumar</td>
                            <td className="px-4 py-3 text-neutral-700">Chairman</td>
                            <td className="px-4 py-3 text-neutral-700">Independent Director</td>
                          </tr>
                          <tr className="hover:bg-neutral-50">
                            <td className="px-4 py-3 text-neutral-900">Lt. Col Randeep Hundal</td>
                            <td className="px-4 py-3 text-neutral-700">Member</td>
                            <td className="px-4 py-3 text-neutral-700">CMD, Executive</td>
                          </tr>
                          <tr className="hover:bg-neutral-50">
                            <td className="px-4 py-3 text-neutral-900">Mr. Uday Pal Singh</td>
                            <td className="px-4 py-3 text-neutral-700">Member</td>
                            <td className="px-4 py-3 text-neutral-700">Director (CEO)(WTD)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}

                  {selectedCommittee === "risk" && (
                    <div className="overflow-x-auto rounded-sm border border-neutral-200 bg-white shadow-sm">
                      <table className="min-w-full text-left text-sm">
                        <thead className="bg-neutral-100">
                          <tr>
                            <th className="border-b border-neutral-200 px-4 py-3 font-semibold text-neutral-900">Name</th>
                            <th className="border-b border-neutral-200 px-4 py-3 font-semibold text-neutral-900">Position</th>
                            <th className="border-b border-neutral-200 px-4 py-3 font-semibold text-neutral-900">Nature of Directorship</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-200 bg-white">
                          <tr className="hover:bg-neutral-50">
                            <td className="px-4 py-3 text-neutral-900">Mr. Pawan Kumar</td>
                            <td className="px-4 py-3 text-neutral-700">Chairperson</td>
                            <td className="px-4 py-3 text-neutral-700">Independent Director</td>
                          </tr>
                          <tr className="hover:bg-neutral-50">
                            <td className="px-4 py-3 text-neutral-900">Lt. Col Randeep Hundal</td>
                            <td className="px-4 py-3 text-neutral-700">Member</td>
                            <td className="px-4 py-3 text-neutral-700">CMD, Executive</td>
                          </tr>
                          <tr className="hover:bg-neutral-50">
                            <td className="px-4 py-3 text-neutral-900">Mr. Uday Pal Singh</td>
                            <td className="px-4 py-3 text-neutral-700">Member</td>
                            <td className="px-4 py-3 text-neutral-700">Director (CEO)(WTD)</td>
                          </tr>
                          <tr className="hover:bg-neutral-50">
                            <td className="px-4 py-3 text-neutral-900">Lt. Col Parminder Malik</td>
                            <td className="px-4 py-3 text-neutral-700">Member</td>
                            <td className="px-4 py-3 text-neutral-700">SVP</td>
                          </tr>
                          <tr className="hover:bg-neutral-50">
                            <td className="px-4 py-3 text-neutral-900">Mr. Shyam B. Singh</td>
                            <td className="px-4 py-3 text-neutral-700">Member</td>
                            <td className="px-4 py-3 text-neutral-700">AVP</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>

              <details className="rounded-sm border border-neutral-200/80 bg-blue-50 shadow-[0_8px_24px_rgba(15,15,18,0.04)]">
                <summary className="cursor-pointer flex items-center justify-between px-5 py-3 rounded-sm bg-blue-100 text-neutral-900 font-semibold">
                  Policies and Disclosures
                  <span className="text-neutral-600">▼</span>
                </summary>
                <div className="mt-0 p-5 bg-white">
                  <DocList title="" docs={policies} />
                </div>
              </details>

              <details className="rounded-sm border border-neutral-200/80 bg-blue-50 shadow-[0_8px_24px_rgba(15,15,18,0.04)]">
                <summary className="cursor-pointer flex items-center justify-between px-5 py-3 rounded-sm bg-blue-100 text-neutral-900 font-semibold">
                  Corporate Governance Reports
                  <span className="text-neutral-600">▼</span>
                </summary>
                <div className="mt-5 p-5 bg-white space-y-6">
                  {/* Dropdown Filter */}
                  <div className="flex items-center gap-3 pb-4 border-b border-neutral-200">
                    <label htmlFor="governance-year" className="text-sm font-semibold text-neutral-700">
                      Filter by financial year:
                    </label>
                    <select
                      id="governance-year"
                      value={governanceYear}
                      onChange={(e) => setGovernanceYear(e.target.value)}
                      className="rounded-sm border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition focus:border-[#EF2B2D] focus:outline-none focus:ring-2 focus:ring-[#EF2B2D]/20"
                    >
                      <option value="2024-2025">2024-2025</option>
                      <option value="2023-2024">2023-2024</option>
                    </select>
                  </div>

                  {/* Quarters Grid */}
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {quarters.map((q) => (
                      <div key={q} className="rounded-sm border border-neutral-200 bg-white p-5 shadow-[0_4px_12px_rgba(15,15,18,0.04)]">
                        <div className="mb-3 flex items-center justify-between">
                          <h4 className="text-lg font-bold text-neutral-900">{q}</h4>
                          <span className="rounded-sm bg-[#EF2B2D]/10 px-2 py-1 text-xs font-semibold text-[#EF2B2D]">
                            {governanceYear}
                          </span>
                        </div>
                        <a
                          href="#"
                          className="inline-flex w-full items-center justify-center rounded-sm border border-[#EF2B2D]/25 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#EF2B2D] transition-all duration-300 hover:border-[#EF2B2D] hover:bg-[#EF2B2D] hover:text-white"
                        >
                          View Report
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </details>
            </section>
          )}

          {activeTab === "stock" && (
            <section className="space-y-8 rounded-sm border border-neutral-200/80 bg-white/95 p-8 shadow-[0_20px_50px_rgba(15,15,18,0.08)] lg:p-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#EF2B2D]">Stock Information</p>
                <h2 className="mt-4 text-3xl font-bold text-neutral-900 sm:text-4xl">Shareholding & Complaints</h2>
              </div>

              <details className="rounded-sm border border-neutral-200/80 bg-blue-50 shadow-[0_8px_24px_rgba(15,15,18,0.04)]">
                <summary className="cursor-pointer flex items-center justify-between px-5 py-3 rounded-sm bg-blue-100 text-neutral-900 font-semibold">
                  Share Holding
                  <span className="text-neutral-600">▼</span>
                </summary>
                <div className="mt-0 p-5 bg-white">
                  <p className="mb-4 text-sm text-neutral-600">Filter by financial year: 2024-2025</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {quarters.map((q) => (
                      <a
                        key={`share-${q}`}
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-sm border border-neutral-200 bg-white px-4 py-3 text-center text-sm font-semibold text-neutral-700 transition hover:border-[#EF2B2D]/30 hover:text-[#EF2B2D]"
                      >
                        {q}
                      </a>
                    ))}
                  </div>
                </div>
              </details>

              <details className="rounded-sm border border-neutral-200/80 bg-blue-50 shadow-[0_8px_24px_rgba(15,15,18,0.04)]">
                <summary className="cursor-pointer flex items-center justify-between px-5 py-3 rounded-sm bg-blue-100 text-neutral-900 font-semibold">
                  Investor Complaints
                  <span className="text-neutral-600">▼</span>
                </summary>
                <div className="mt-0 p-5 bg-white">
                  <p className="mb-4 text-sm text-neutral-600">Filter by financial year: 2024-2025</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {quarters.map((q) => (
                      <a
                        key={`complaints-${q}`}
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-sm border border-neutral-200 bg-white px-4 py-3 text-center text-sm font-semibold text-neutral-700 transition hover:border-[#EF2B2D]/30 hover:text-[#EF2B2D]"
                      >
                        {q}
                      </a>
                    ))}
                  </div>
                </div>
              </details>

              <details className="rounded-sm border border-neutral-200/80 bg-blue-50 shadow-[0_8px_24px_rgba(15,15,18,0.04)]">
                <summary className="cursor-pointer flex items-center justify-between px-5 py-3 rounded-sm bg-blue-100 text-neutral-900 font-semibold">
                  Unpaid Dividend
                  <span className="text-neutral-600">▼</span>
                </summary>
                <div className="mt-0 p-5 bg-white">
                  <p className="text-sm text-neutral-600">Details will be updated in this section.</p>
                </div>
              </details>
            </section>
          )}
        </div>
      </div>
      </main>
    </>
  );
}
