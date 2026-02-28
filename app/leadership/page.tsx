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
    linkedin: "https://www.linkedin.com/in/lt-col-randeep-hundal-1a83ab12/",
  },
  {
    name: "Mr. Uday Pal Singh",
    role: "CEO, Executive Director",
    image: "/images/uday.jpeg",
    linkedin: "https://www.linkedin.com/in/uday-pal-singh-b86648320/",
  },
  {
    name: "Lt Col Gurpal Singh",
    role: "Executive Director",
    image: "/images/gurpalsingh.jpg",
    linkedin: "/leadership",
  },
];

const independentDirectors = [
   {
    name: "Ms. Sudha Hooda",
    role: "Independent Director (Non-Executive)",
    image: "/images/sudhahooda.png",
    linkedin: "https://www.linkedin.com/in/sudha-hooda/",
  },
  {
    name: "Captain Pawan Kumar",
    role: "Independent Director (Non-Executive)",
    image: "/images/pawankumar.png",
    linkedin: "https://www.linkedin.com/in/pawankalkal/",
  },
 
  {
    name: "Ms. Sulekha Sharma",
    role: "Independent Director (Non-Executive)",
    image: "/images/sulekhasharma.png",
    linkedin: "https://www.linkedin.com/in/sulekhas/",
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
