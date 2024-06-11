'use client'

import React, { useEffect, useState } from 'react';
import './Carousel.css';
import Image from 'next/image';

interface CarouselProps {
  items: { city: string; url: string }[]
}

const Carousel = ({ items }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const totalItems = items.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth <= 600) {
        setItemsPerPage(1);
      } else if (window.innerWidth <= 900) {
        setItemsPerPage(2);
      } else if (window.innerWidth <= 1200) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(4);
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);

    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="carousel-container">
      <div 
        className="carousel-inner" 
        style={{ transform: `translateX(-${(currentIndex * (100 / itemsPerPage))}%)` }}
      >
        <div className="carousel-items">
          {items.concat(items).map((item, index) => (
            <div key={index} className="h-40 carousel-item md:h-48 md:mx-4">
              <Image 
                src={`/${item.url}`} 
                alt={item.city} 
                layout="fill" 
                objectFit="cover"
              />
              <div className="text-overlay">{item.city}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
