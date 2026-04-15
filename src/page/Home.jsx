
import BenefitSection from "../componets/homeSection/BenefitSection";
import Features from "../componets/homeSection/Features";
import Hero from "../componets/homeSection/Hero";
import LandlordSection from "../componets/homeSection/LandlordSection";
import PropertySection from "../componets/homeSection/PropertySection";



export default function Home() {
  return (
    <>
    <Hero/>
    <Features/>
    <PropertySection/>
    <BenefitSection/>
    <LandlordSection/>
    </>
  );
}
