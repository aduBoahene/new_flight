import React from 'react';
import { Service } from './Service';

export const Services = () => {
  const services = [
    {
      title: "Visa Assistance",
      description: "All-inclusive visa assistance in a timely, and secure manner."
    },
    {
      title: "Protocol Services",
      description: "We take pride in providing one of the best protocol services."
    },
    {
      title: "Car Rental",
      description: "Rondure makes it simple to hire an automobile."
    },
  ];

  return (
    <div className="flex flex-col items-center sm:flex-row sm:flex sm:justify-center md:justify-between sm:w-[90vw] md:w-[80vw] lg:w-[70vw] mx-auto pt-4 sm:pt-6 md:pt-8 gap-4">
      {services.map((item, idx) => (
        <Service key={idx} title={item.title} description={item.description} />
      ))}
    </div>
  );
};
