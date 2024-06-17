
// components/Navbar.js

'use client'

import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';
import 'flowbite/dist/flowbite.min.css';
import 'flowbite';

export const NewNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;900&display=swap"
          rel="stylesheet"
        />
      </Head>
     

      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src="/rondure-logo-new.png" width={180} height={180} alt="logo" />
        </a>
        <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="/" className="block py-2 px-3 text-[#ed701b] rounded md:bg-transparent md:text-[#ed701b] md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page" style={{fontSize:'11px', fontFamily:'Montserrat-Medium'}}>Home</a>
            </li>
            {/* <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#ed701bb0] md:p-0 dark:text-white md:dark:hover:text-[#ed701bb0] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" style={{fontSize:'11px', fontFamily:'Montserrat-Medium'}}>Flights & Hotels</a>
            </li> */}
            <li className="relative group">
              <button id="dropdownNavbarLink" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#ed701bb0] md:p-0 md:w-auto dark:text-white md:dark:hover:text-[#ed701bb0] dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent" style={{fontSize:'11px', fontFamily:'Montserrat-Medium'}}>
                Visa Assistance
                <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <div id="dropdownNavbar" className="absolute left-0 z-10 hidden font-normal bg-[#171766] divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 group-hover:block">
                <ul className="py-2 text-sm text-white dark:text-white" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="/travel-restrictions" className="block px-4 py-2 hover:bg-white-100 md:hover:text-[#ed701bb0] dark:hover:bg-white dark:hover:text-[#ed701bb0]" style={{fontSize:'11px', fontFamily:'Montserrat-Medium'}}>Travel Restrictions</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-white-100 md:hover:text-[#ed701bb0] dark:hover:bg-white dark:hover:text-[#ed701bb0]" style={{fontSize:'11px', fontFamily:'Montserrat-Medium'}}>Visa Services</a>
                  </li>
                 
                </ul>
               
              </div>
            </li>
            <li className="relative group">
              <button style={{fontSize:'11px', fontFamily:'Montserrat-Medium'}} id="dropdownNavbarLink" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#ed701bb0] md:p-0 md:w-auto dark:text-white md:dark:hover:text-[#ed701bb0] dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                Business Travel
                <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <div id="dropdownNavbar" className="absolute left-0 z-10 hidden font-normal bg-[#171766] divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 group-hover:block">
                <ul className="py-2 text-sm text-white dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="/business-travel" className="block px-4 py-2 hover:bg-[#171766] md:hover:text-[#ed701bb0] dark:hover:bg-[#171766] dark:hover:text-[#ed701bb0]" style={{fontSize:'13px'}}>Flight Ticket Reservation</a>
                  </li>
                </ul>
                
              </div>
            </li>
            <li>
              <a href="/logistics-solutions" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#ed701bb0] md:p-0 dark:text-white md:dark:hover:text-[#ed701bb0] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" style={{fontSize:'11px', fontFamily:'Montserrat-Medium'}}>Logistics Solutions</a>
            </li>
            <li>
              <a href="vacation" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#ed701bb0] md:p-0 dark:text-white md:dark:hover:text-[#ed701bb0] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" style={{fontSize:'11px', fontFamily:'Montserrat-Medium'}}>Vacations</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#ed701bb0] md:p-0 dark:text-white md:dark:hover:text-[#ed701bb0] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" style={{fontSize:'11px', fontFamily:'Montserrat-Medium'}}>Cars</a>
            </li>
            <li>
              <a href="/about-us" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#ed701bb0] md:p-0 dark:text-white md:dark:hover:text-[#ed701bb0] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" style={{fontSize:'11px', fontFamily:'Montserrat-Medium'}}>About Us</a>
            </li>
            <li>
              <a href="/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#ed701bb0] md:p-0 dark:text-white md:dark:hover:text-[#ed701bb0] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" style={{fontSize:'11px', fontFamily:'Montserrat-Medium'}}>Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    </>
  );
};
// components/Dropdown.js

