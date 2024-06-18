import React from 'react';
import { Service } from './Service';
import { Book, CarFront, Earth, PackageOpen, Plane, ShieldCheck } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      title: "Visa Assistance",
      description: "All-inclusive visa assistance in a timely, and secure manner.",
      logo: <Earth size={60} color="#ed701b" className='flex'/>,
      link: "#"
    },
    {
      title: "Protocol Services",
      description: "We take pride in providing one of the best protocol services.",
      logo: <ShieldCheck size={60} color="#ed701b" className='flex' />,
      link: "#"
    },
    {
      title: "Logistics Solutions",
      description: "Rondure makes it simple to hire an automobile.",
      logo: <PackageOpen size={60} color="#ed701b" className='flex'/>,
      link: "/logistics-solutions"
    },
    {
      title: "Cars",
      description: "Rondure makes it simple to hire an automobile.",
      logo: <CarFront  size={60} color="#ed701b" className='flex'/>,
      link: "#"
    },
  ];

  return (
    <div className="flex flex-col items-start md:items-start sm:flex-row sm:flex sm:justify-center md:justify-between sm:w-[90vw] md:w-[80vw] lg:w-[70vw] mx-auto py-4 px-2 sm:pt-6 md:pt-12 gap-4">
      {services.map((item, idx) => (
        <Service key={idx} title={item.title} description={item.description} logo={item.logo} link={item.link}/>
      ))}
    </div>
  );
};
