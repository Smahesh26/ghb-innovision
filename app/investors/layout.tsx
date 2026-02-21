import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investors | Innovision Limited",
  description: "Investor Relations, Financial Information, Corporate Governance, Stock Information and key disclosures for Innovision Limited.",
};

export default function InvestorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
