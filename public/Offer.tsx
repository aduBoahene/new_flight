import React from 'react'

export const Offer = () => {
  return (
    <div className="flex items-center justify-center" style={{ backgroundImage: 'url("/offer.jpeg")', height: '55vh', opacity:'0.5', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="text-center text-white">
        <h1 className="md:text-4xl font-bold">Nobody Ever comes close to us</h1>
        <h1 className="md:text-4xl font-bold">We Offer Reliable Assistance</h1>
      </div>
    </div>
  )
}
