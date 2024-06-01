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
      <div className='navbar-container'>
        <Image src="/rondure-logo-new.png" width={180} height={180} alt="logo" />

        <div className='menu-items' style={{fontFamily:'Montserrat-Medium'}}>
          <span>Home</span>
          <span>Flights & Hotels</span>
          <span>Visa Assistance</span>
          <span>Business Travels</span>
          <span>Vacations</span>
          <span>Car Rental</span>
          <span>About</span>
          <span>Contact Us</span>
        </div>

        <Menu className='menu-icon' onClick={toggleMenu} />

        {isMenuOpen && (
          <div className='dropdown-menu'>
            <span className='menu-item font-bold' onClick={toggleMenu}>Home</span>
            <span className='menu-item' onClick={toggleMenu}>Flights & Hotels</span>
            <span className='menu-item' onClick={toggleMenu}>Visa Assistance</span>
            <span className='menu-item' onClick={toggleMenu}>Business Travels</span>
            <span className='menu-item' onClick={toggleMenu}>Vacations</span>
            <span className='menu-item' onClick={toggleMenu}>Car Rental</span>
            <span className='menu-item' onClick={toggleMenu}>About</span>
            <span className='menu-item' onClick={toggleMenu}>Contact Us</span>
          </div>
        )}
      </div>
      <style jsx>{`
        .navbar-container {
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 70%;
          margin-left: auto;
          margin-right: auto;
        }
       

        @media (min-width:1024px) and (max-width:1673px) {
          .navbar-container {
            width: 100%;
            padding: 0.5rem;
            flex-direction: column;
            align-items: flex-start;
            
          }

          .menu-item{
            font-size: 13px
          }
        }

        @media (max-width: 1024px) {
          .navbar-container {
              background-color: white;
          }
      }
      
        .menu-items {
          display: none;
        }
        .menu-icon {
          display: block;
          cursor: pointer;
        }
        @media (min-width: 1024px) {
          .menu-items {
            display: flex;
            gap: 2rem;
            align-items: center;
          }
          .menu-icon {
            display: none;
          }
        }
        .dropdown-menu {
          position: absolute;
          top: 4rem;
          right: 1rem;
          background: white;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 1rem;
          border-radius: 0.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
      `}</style>
    </>
  );
};
