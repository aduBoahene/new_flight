import React from 'react';

interface SectionHeaderProps {
  title: string;
}

export const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div className="p-4 flex sm:justify-start sm:w-[80vw] md:w-[70vw] lg:w-[70vw] mx-auto sm:pt-6 md:pt-8">
      <h3 className='text-2xl md:text-xl lg:text-3xl' style={{ fontFamily: 'Emmanuelle' }}>{title}</h3>
    </div>
  );
};
