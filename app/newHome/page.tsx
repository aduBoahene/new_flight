import Carousel from "@/components/Caousel";
import CarouselDisplay from "@/components/CarouselDisplay";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { NewHero } from "@/components/NewHero";
import { NewNav } from "@/components/NewNav";
import { RangeOfServices } from "@/components/RangeOfServices";
import { SectionHeader } from "@/components/SectionHeader";
import { Services } from "@/components/Services";
import { Offer } from "@/public/Offer";

export default function Home() {


  return (
    <div>
      <NewHero />
      {/* <Hero/> */}
      <Services />
      <CarouselDisplay/>
      <SectionHeader title="Our Range of Services" />
      <RangeOfServices />
      <Offer />
    </div>
  );
}
