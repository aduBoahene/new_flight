import { BatteryFull, Bed, Handshake, Infinity } from "lucide-react";
import React, { ReactElement } from "react";

export default function Page() {

    const aboutUs = [
        {
            logo: <Infinity size={40} color="#ed701bb0"/>,
            des:"We ensure that our clients enjoy a seamless less experience while managing their travels;"
        },
        {
            logo: <Handshake size={40} color="#ed701bb0"/>,
            des:"We connect corporate bodies and individuals alike to any destination around the globe and;"
        },
        {
            logo: <BatteryFull size={40} color="#ed701bb0"/>,
            des:"We offer reliable assistance in planning both business and leisure trips."
        }
    ]

  return (
    <div>
      <div
        className="md:h-1/4 bg-cover relative h-64 md:h-[700px]"
        style={{ backgroundImage: `url('family-vacation.jpeg')` }}
      >
         <div className="bg-[#ed701b] w-full md:mx-auto md:w-1/6 mb-8 md:mb-0">
            <h4
              className="text-white text-center p-4 bg-transparent font-bold"
              style={{ fontFamily: "Emmanuelle" }}
            >
              TRAVEL THE World Hassle FREE.
            </h4>
          </div>
       
      </div>

      <div className="text-center flex flex-col justify-center mt-4 md:mt-8">
        <h3
          className="text-3xl text-[#1C144D] md:m-8"
          style={{ fontFamily: "Montserrat-Black" }}
        >
          About Us
        </h3>
        <p className="p-2 md:w-1/2 md:mx-auto text-[#686A6A]">
          Travel management can be a time-consuming and costly endeavour. A good
          travel management solution must herefore offer end-to-end service to
          the client, while combining exceptional service which saves time, with
          real value for money. An all-round travel solution is exactly what the
          Rondure Connect experience offers.
        </p>
      </div>

      <div className="mt-8 p-4 md:w-[70%] md:mx-auto md:flex justify-between md:mt-12 md:mb-12">
          
    {
        aboutUs.map((item,idx)=><SingleAbout logo={item.logo} des={item.des}/>)
    }
      </div>
    </div>
  );
}


interface SingleAboutProps{
    logo: ReactElement
    des: string
}

function SingleAbout({logo, des}: SingleAboutProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      {logo}
      <p className="text-center text-[#686a6a] mt-4 ">
       {des}
      </p>
    </div>
  );
}
