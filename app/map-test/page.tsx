import type { Metadata } from "next";
import MapTestClientShell from "./MapTestClientShell";

export const metadata: Metadata = {
  title: "Map Test | Innovision Security",
  description: "India map test with custom pins.",
};

export default function MapTestPage() {
  return (
    <main className="min-h-screen bg-white p-6 md:p-10">
      <MapTestClientShell />
    </main>
  );
}