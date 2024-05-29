import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { RangeOfServices } from "@/components/RangeOfServices";
import { SectionHeader } from "@/components/SectionHeader";
import { Services } from "@/components/Services";
import { Offer } from "@/public/Offer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      {/* <SectionHeader title="Vacation Destinations" /> */}
      <SectionHeader title="Our Range of Services" />
      <RangeOfServices />
      <Offer />
    </div>
  );
}
