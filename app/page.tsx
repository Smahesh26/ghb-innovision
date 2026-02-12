import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Stats from "./components/Stats";
import Reviews from "./components/Reviews";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import News from "./components/News";
import Footer from "./components/Footer";
// import Services from "./components/Services";
// import WhyChooseUs from "./components/WhyChooseUs";
// import Industries from "./components/Industries";
// import CTA from "./components/CTA";
// import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Stats />
      <Reviews />
      <Clients />
      <Contact />
      <News />
      <Footer />
      {/* <Stats />
      <Services />
      <WhyChooseUs />
      <Industries />
      <CTA />
      <Footer /> */}
    </>
  );
}
