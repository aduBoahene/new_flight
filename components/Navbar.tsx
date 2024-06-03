'use client'
// components/Navbar.js

import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { label: 'Home', href: '#' },
    {
      label: 'Flights & Hotels',
      dropdownItems: [
        { label: 'Flights', href: '#' },
        { label: 'Hotels', href: '#' },
      ],
    },
    {
      label: 'Visa Assistance',
      dropdownItems: [
        { label: 'Visa Application', href: '#' },
        { label: 'Visa Tracking', href: '#' },
      ],
    },
    {
      label: 'Business Travels',
      dropdownItems: [
        { label: 'Corporate Packages', href: '#' },
        { label: 'MICE', href: '#' },
      ],
    },
    {
      label: 'Vacations',
      dropdownItems: [
        { label: 'Beach Destinations', href: '#' },
        { label: 'Mountain Trips', href: '#' },
      ],
    },
    { label: 'Car Rental', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Contact Us', href: '#' },
  ];

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="navbar-container">
        <Image src="/rondure-logo-new.png" width={180} height={180} alt="logo" />

        <div className="menu-items" style={{ fontFamily: 'Montserrat-Medium' }}>
          {menuItems.map((menuItem, index) =>
            menuItem.dropdownItems ? (
              <Dropdown key={index} label={menuItem.label} items={menuItem.dropdownItems} />
            ) : (
              <span key={index}>{menuItem.label}</span>
            )
          )}
        </div>

        <Menu className="menu-icon" onClick={toggleMenu} />

        {isMenuOpen && (
          <div className="dropdown-menu">
            {menuItems.map((menuItem, index) => (
              <span key={index} className="menu-item" onClick={toggleMenu}>
                {menuItem.label}
              </span>
            ))}
          </div>
        )}
      </div>
      <style jsx>{`
        .navbar-container {
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 80%;
          margin-left: auto;
          margin-right: auto;
          
        }

        .menu-item {
          font-size: 13px;
        }

        @media (min-width: 1024px) and (max-width: 1673px) {
          .navbar-container {
            width: 100%;
            padding: 0.5rem;
            flex-direction: column;
            align-items: flex-start;
          }

          .menu-item {
            font-size: 13px;
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



// components/Dropdown.js

interface Props{
  label: string
  items: any[]
}

const Dropdown = ({ label, items }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          onMouseEnter={toggleDropdown}
          onMouseLeave={() => setIsOpen(false)}
          className="inline-flex justify-center w-full rounded-md border-0 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          {label}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0l-4.25-4.25a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            {items.map((item:any, index:any) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                role="menuitem"
                tabIndex={-1}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
