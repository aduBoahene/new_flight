import { ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import React, { ReactElement } from 'react';

interface ServiceProps {
  title: string;
  description: string;
  logo: ReactElement;
  link: string;
}

export const Service = ({ title, description, logo,link }: ServiceProps) => {
  return (
    <div className="flex mb-4 gap-4 md:flex-row md:gap-6">
      {/* <ShieldCheck size={40} color="#ed701b" className='flex' /> */}
      {logo}
      <div className="t md:text-left max-w-xs md:max-w-none">
        <h3 className="text-lg md:text-xl" style={{ fontFamily: "Montserrat-Medium" }}>{title}</h3>
        <p className="mt-2" style={{ fontFamily: "Montserrat-Light" }}>{description}</p>
        <Link href={link}>
          <span className="text-[#ed701b] cursor-pointer mt-2 block">Read More</span>
        </Link>
      </div>
    </div>
  );
};
