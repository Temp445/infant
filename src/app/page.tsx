import HeroSection from "@/components/HomePage/HeroSection";
import WhoWeAre from "@/components/HomePage/WhoWeAre";
import Clients from "@/components/HomePage/Clients";
import DemoCard from "@/components/HomePage/DemoCard";
import ProductSection from "@/components/HomePage/ProductSection";
import Service from "@/components/HomePage/Service";
import Testimonial from "@/components/HomePage/Testimonial";
import WhyChooseUs from "@/components/HomePage/WhyChooseUs";
import CertificationCard from "@/components/HomePage/CertificationCard";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <CertificationCard/>
    <WhoWeAre/>
     <ProductSection/>
     <DemoCard/>
     <WhyChooseUs/>
     <Service/>
     <Clients/>
     <Testimonial/>
    </>
  );
}
