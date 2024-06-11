import Carousel from "@/components/Caousel";
import { SectionHeader } from "./SectionHeader";

export default function CarouselDisplay() {
  const items = [
    {
      url: "london.jpeg",
      city: "London",
    },
    {
      url: "paris.jpeg",
      city: "Paris",
    },
    {
      url: "tokyo.jpeg",
      city: "Tokyo",
    },
    {
      url: "newyork.jpeg",
      city: "New York",
    },
    {
      url: "london.jpeg",
      city: "London",
    },
    {
      url: "paris.jpeg",
      city: "Paris",
    },
    {
      url: "tokyo.jpeg",
      city: "Tokyo",
    },
    {
      url: "newyork.jpeg",
      city: "New York",
    },
  ];

  return (
    <div className="bg-[#FFFEF7] md:p-16">
      <div className="md:flex md:w-[70%] md:mx-auto md:flex-wrap md:mb-16">
        <SectionHeader title="Vacation Destinations" />
        <Carousel items={items} />
      </div>
    </div>
  );
}
