import Carousel from "@/components/Caousel";
import React from "react";

export default function Page() {
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
    <div>
      <div
        className="relative flex justify-center items-center h-64 md:h-[700px] bg-cover"
        style={{ backgroundImage: `url('KN.jpg')` }}
      >
        <div className="w-full p-4 md:w-[70%] md:mx-auto">
          <h3
            className="text-xl md:text-4xl font-extrabold text-white"
            style={{ fontFamily: "Montserrat-Medium" }}
          >
            Let's Connect You to Your Destination
          </h3>
          <p
            className="text-white md:mt-4"
            style={{ fontFamily: "Montserrat-Light" }}
          >
            There is no request too small or too large. We are here to satisfy
            you and make sure your travel experience is as delightful and
            memorable as possible. In order for us to give you exactly what you
            require, we need a little information to complete your quote. Our
            vacation specialist will contact you within the next 48 hours.
          </p>
        </div>
      </div>

      <div className="mt-4 md:mt-8">
        <h4 className="text-[#171766] md:text-3xl text-center" style={{fontFamily:'Montserrat-Black'}}>Explore Vacation Destinations</h4>
        <Carousel items={items} />
      </div>
    </div>
  );
}
