'use client'

import { Menu } from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className='p-4 flex justify-between items-center lg:w-[70%] lg:mx-auto lg:p-2'>
        <Image src="/rondure-logo-new.png" width={180} height={180} alt="logo" />

        <div className='hidden lg:flex gap-8 items-center' style={{fontFamily:'Montserrat-Medium'}}>
          <span>Home</span>
          <span>Flights & Hotels</span>
          <span>Visa Assistance</span>
          <span>Business Travels</span>
          <span>Vacations</span>
          <span>Car Rental</span>
          <span>About</span>
          <span>Contact Us</span>
        </div>

        <Menu className='block lg:hidden cursor-pointer' onClick={toggleMenu} />

        {isMenuOpen && (
          <div className='absolute top-16 right-4 bg-white shadow-md p-4 rounded-md flex flex-col gap-4 lg:hidden'>
            <span onClick={toggleMenu}>Home</span>
            <span onClick={toggleMenu}>Flights & Hotels</span>
            <span onClick={toggleMenu}>Visa Assistance</span>
            <span onClick={toggleMenu}>Business Travels</span>
            <span onClick={toggleMenu}>Vacations</span>
            <span onClick={toggleMenu}>Car Rental</span>
            <span onClick={toggleMenu}>About</span>
            <span onClick={toggleMenu}>Contact Us</span>
          </div>
        )}
      </div>
    </>
  );
};
