import React from 'react'

export default function page(){
  return (
    <div>
      <div
        className="relative flex justify-center items-center h-64 md:h-[700px] bg-cover"
        style={{ backgroundImage: `url('business-travel.jpeg')` }}
      >
        <div className="w-full p-4 md:w-[70%] md:mx-auto">
          <h3
            className="text-xl md:text-4xl font-extrabold text-white"
            style={{ fontFamily: "Montserrat-Medium" }}
          >
            Business Travel
          </h3>
          <p
            className="text-white md:mt-4 text-2xl"
            style={{ fontFamily: "Montserrat-Light" }}
          >
           We make your business trips easier and more productive.
          </p>
        </div>
      </div>

    </div>
  )
}
