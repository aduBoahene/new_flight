import Carousel from "@/components/Caousel";
import CarouselDisplay from "@/components/CarouselDisplay";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { NewNav } from "@/components/NewNav";
import { RangeOfServices } from "@/components/RangeOfServices";
import { SectionHeader } from "@/components/SectionHeader";
import { Services } from "@/components/Services";
import { Offer } from "@/public/Offer";

export default function Home() {
  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
  ];

  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Services />
      <CarouselDisplay/>
      <SectionHeader title="Our Range of Services" />
      <RangeOfServices />
      <Offer />
    </div>
  );
}
