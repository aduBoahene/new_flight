import React from 'react';
import { RangeOfService } from './RangeOfService';

export const RangeOfServices = () => {
  const rangeOfServices = [
    {
      title: "Business Travel",
      description: "We make your business trips easier and more productive. Rondure travel managers are trained to spot the best travel destinations.",
      image: "man_in_bus.jpeg"
    },
    {
      title: "Visa Assistance",
      description: "We have done a lot to maintain a 90% visa approval. Due to the fact we’ve done these many times, we’re familiar with every step of the process.",
      image: "at_the_airport.jpeg"
    },
    {
      title: "Vacations",
      description: "We are here to satisfy you and make sure your travel experience is as delightful and memorable as possible.",
      image: "vacation.jpeg"
    }
  ];

  return (
    <div className='md:flex md:w-[70%] md:mx-auto md:flex-wrap md:mb-16'>
      {rangeOfServices.map((item, idx) => (
        <RangeOfService key={idx} title={item.title} description={item.description} image={`/${item.image}`} />
      ))}
    </div>
  );
};
