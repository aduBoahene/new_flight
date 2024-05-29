'use client'

import React, { useEffect, useState } from "react";

export const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    'man_and_daugther.jpeg',
    'woman_in_plane.jpeg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="flex justify-center items-center h-[800px] border border"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col w-[90%] md:w-[80%]">
        <div className="border w-full md:w-[80%] mx-auto border-2 bg-[#fffef7] p-4 md:p-8 rounded-md">
          form
        </div>
        <div className="w-full md:w-[80%] mx-auto mt-4 md:mt-8">
          <div className="md:w-[40%] md:ml-auto border-0 bg-[#ed701bab] p-2 md:p-4">
            <h5
              style={{ fontFamily: 'Emmanuelle', fontSize: '22px' }}
              className="text-white font-bold"
            >
              Connecting you to your
            </h5>
            <h5
              style={{ fontFamily: 'Emmanuelle', fontSize: '22px' }}
              className="text-white font-bold"
            >
             destination
            </h5>
            <p className="text-white text-sm md:text-base" style={{ fontFamily: 'sans-serif' }}>
              Cheapest flights and hotels deals worldwide for your trip.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
