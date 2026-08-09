import Image from "next/image";
import Hero from "./components/Hero";
import Aboutus from "./components/Aboutus";
import Ourpackages from "./components/Ourpackages";
import HowItWorks from "./components/HowItWorks";
import Payment from "./components/Payment";
import ContactUs from "./components/ContactUs";

export default function Home() {
  return (
    <div className="min-h-[100vh] ">
      <Hero />
      <Aboutus />
      <Ourpackages />
      <HowItWorks />
      <Payment />
      <ContactUs />
    </div>
  );
}
