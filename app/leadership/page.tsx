import { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LeadershipTabs from "../components/LeadershipTabs";
import LeadershipHero from "../components/LeadershipHero";

const boardOfDirectors = [
  {
    name: "Lt Col Randeep Hundal",
    role: "CMD, Executive Director",
    image: "/images/Randeepsir.jpeg",
  },
  {
    name: "Mr. Uday Pal Singh",
    role: "CEO, Executive Director",
    image: "/images/uday.jpeg",
  },
  {
    name: "Lt Col Gurpal Singh",
    role: "Executive Director",
    image: "/images/gurpalsingh.jpg",
  },
];

const independentDirectors = [
   {
    name: "Ms. Sudha Hooda",
    role: "Independent Director (Non-Executive)",
    image: "/images/sudhahooda.png",
  },
  {
    name: "Captain Pawan Kumar",
    role: "Independent Director (Non-Executive)",
    image: "/images/pawankumar.png",
  },
 
  {
    name: "Ms. Sulekha Sharma",
    role: "Independent Director (Non-Executive)",
    image: "/images/sulekhasharma.png",
  },
];

export const metadata: Metadata = {
  title: "Leadership | Innovision Limited",
  description:
    "Meet Innovision Limited's Board of Directors and Independent Directors guiding strategic growth, governance, and operational excellence.",
  alternates: {
    canonical: "https://innovision.co.in/leadership",
  },
};

export default function LeadershipPage() {
  return (
    <>
      <Header />

      <LeadershipHero />

      <LeadershipTabs boardOfDirectors={boardOfDirectors} independentDirectors={independentDirectors} />
      <Footer />
    </>
  );
}
