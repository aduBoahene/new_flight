"use client";

import { Bed, Check, Plane, X } from "lucide-react";
import React, { ReactNode, useEffect, useState } from "react";

export const NewHero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["man_and_daugther.jpeg", "woman_in_plane.jpeg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]);

  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  const bookflight=()=>{
    setIsOpen(true)
  }


  const [isOpen, setIsOpen] = useState(false)

  return (
    // <div
    //   className="flex justify-between items-center h-[600px] md:w-[80%] md:mx-auto"
    //   style={{
    //     backgroundImage: `url(${images[currentImage]})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //   }}
    // >
    //   <div className="flex flex-col w-[90%] md:w-[80%] md:border-2 md:border-red-600">
    //     <div className="border w-full md:w-[80%] mx-auto border-0 bg-[#fffef7] p-4 md:p-8 rounded-md  md:border-2 md:border-red-600" >
    //       <div className="container mx-auto p-6 bg-white shadow rounded-lg border-0  md:border-2 md:border-green-600" >
    //         <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200">
    //           <li className="mr-2">
    //             <button
    //               className={`inline-block p-4 rounded-t-lg border-b-2 ${
    //                 activeTab === "tab1"
    //                   ? "bg-[#ed701b] text-white"
    //                   : "bg-[#ed701b2b]"
    //               }`}
    //               onClick={() => handleTabClick("tab1")}
    //             >
    //               <div className="flex gap-2 items-center">
    //                 <Plane /> <span className={`${!activeTab ? 'text-black-200':''}`}>Flight</span>
    //               </div>
    //             </button>
    //           </li>
    //           <li className="mr-2">
    //             <button
    //               className={`inline-block p-4 rounded-t-lg border-b-2 ${
    //                 activeTab === "tab2"
    //                   ? "bg-[#ed701b] text-white"
    //                   : "bg-[#ed701b2b] text-[#1c144d]"
    //               }`}
    //               onClick={() => handleTabClick("tab2")}
    //             >
    //               <div className="flex gap-2 items-center">
    //                 {/* <Bed /> <span className="text-[#1c144d]">Hotels</span> */}
    //                 <Bed /> <span className={`${!activeTab ? 'text-black-200':''}`}>Hotels</span>
    //               </div>
    //             </button>
    //           </li>
    //         </ul>
    //         <div className="p-4">
    //           {activeTab === "tab1" && (
    //             <div id="tab1">
                
    //               <div>
    //                 <div className="mb-2 md:flex md:gap-4">
    //                   <input
    //                     type="text"
    //                     placeholder="Origin"
    //                     className="w-full mb-2 md:w-1/2 rounded-md"
    //                   />
    //                   <input
    //                     type="text"
    //                     placeholder="Destination"
    //                     className="w-full md:w-1/2 rounded-md"
    //                   />
    //                 </div>
    //                 <div className="md:flex md:gap-2 md:items-center md:mt-2">
    //                   <input
    //                     type="date"
    //                     className="mb-2 rounded-md w-full md:w-1/4"
    //                   />
    //                   <input
    //                     type="date"
    //                     className="mb-2 rounded-md w-full md:w-1/4"
    //                   />
    //                   <input
    //                     type="text"
    //                     placeholder="No. of Passengers"
    //                     className="mb-2 w-full md:w-1/4 rounded-md"
    //                   />
    //                   <button onClick={()=> bookflight()} className="bg-[#ed701b] p-4 w-full mb-2 md:w-1/4 rounded-md text-white">
    //                     Search
    //                   </button>
    //                 </div>
    //               </div>
    //             </div>
    //           )}
    //           {activeTab === "tab2" && (
    //             <div id="tab2">
    //               <h1 className="text-xl font-semibold">Content for Tab 2</h1>
    //               <p className="mt-2 text-gray-700">
    //                 This is the content for tab 2.
    //               </p>
    //             </div>
    //           )}
    //         </div>
    //       </div>
    //     </div>
    //     <div className="w-full md:w-[80%] mx-auto mt-4 md:mt-8">
    //       <div className="md:w-[40%] md:ml-auto border-0 bg-[#ed701bab] p-2 md:p-4">
    //         <h5
    //           style={{ fontFamily: "Emmanuelle", fontSize: "22px" }}
    //           className="text-white font-bold"
    //         >
    //           Connecting you to your
    //         </h5>
    //         <h5
    //           style={{ fontFamily: "Emmanuelle", fontSize: "22px" }}
    //           className="text-white font-bold"
    //         >
    //           destination
    //         </h5>
    //         <p
    //           className="text-white text-sm md:text-base"
    //           style={{ fontFamily: "sans-serif" }}
    //         >
    //           Cheapest flights and hotels deals worldwide for your trip.
    //         </p>
    //       </div>
    //     </div>
    //   </div>

    //   <Modal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)} notificationTitle="Success" message="Booking Unuccessfull" icon={undefined} status={`ERRORR`}/>

    // </div>
    <div className="relative h-[500px] bg-gray-200 md:mb-24 md:w-[90%] md:mx-auto md:p-8" style={{
      backgroundImage: `url(${images[currentImage]})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
  }}>

    <div className="w-full md:w-[80%] mx-auto">

           <div className="md:w-[40%] md:ml-auto border-0 bg-[#ed701bab] p-2 md:p-4">
            <h5
              style={{ fontFamily: "Emmanuelle", fontSize: "22px" }}
              className="text-white font-bold"
            >
              Connecting you to your
            </h5>
            <h5
              style={{ fontFamily: "Emmanuelle", fontSize: "22px" }}
              className="text-white font-bold"
            >
              destination
            </h5>
            <p
              className="text-white text-sm md:text-base"
              style={{ fontFamily: "sans-serif" }}
            >
              Cheapest flights and hotels deals worldwide for your trip.
            </p>
          </div>
        
      </div>
    
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 text-white p-4 rounded w-full md:w-[80%] md:-mb-28 bg-[#fffef7]">
          <div className="container mx-auto p-6 bg-white shadow rounded-lg border-0 md:border-2">
              <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b">
                  <li className="mr-2">
                      <button
                          className={`inline-block p-4 rounded-t-lg border-b-2 ${activeTab === "tab1" ? "bg-[#ed701b] text-white" : "bg-[#ed701b2b]"}`}
                          onClick={() => handleTabClick("tab1")}
                      >
                          <div className="flex gap-2 items-center">
                              <Plane /> <span className={`${!activeTab ? 'text-black-200':''}`}>Flight</span>
                          </div>
                      </button>
                  </li>
                  <li className="mr-2">
                      <button
                          className={`inline-block p-4 rounded-t-lg border-b-2 ${activeTab === "tab2" ? "bg-[#ed701b] text-white" : "bg-[#ed701b2b] text-[#1c144d]"}`}
                          onClick={() => handleTabClick("tab2")}
                      >
                          <div className="flex gap-2 items-center">
                              <Bed /> <span className={`${!activeTab ? 'text-black-200':''}`}>Hotels</span>
                          </div>
                      </button>
                  </li>
              </ul>
              <div className="p-4">
                  {activeTab === "tab1" && (
                      <div id="tab1">
                          <div>
                              <div className="mb-2 md:flex md:gap-4">
                                  <input
                                      type="text"
                                      placeholder="Origin"
                                      className="w-full mb-2 md:w-1/2 rounded-md" style={{fontFamily:"Montserrat-Medium"}}
                                  />
                                  <input
                                      type="text"
                                      placeholder="Destination"
                                      className="w-full md:w-1/2 rounded-md"
                                  />
                              </div>
                              <div className="md:flex md:gap-2 md:items-center md:mt-2">
                                  <input
                                      type="date"
                                      className="mb-2 rounded-md w-full md:w-1/4" style={{fontFamily:"Montserrat-Medium"}}
                                  />
                                  <input
                                      type="date"
                                      className="mb-2 rounded-md w-full md:w-1/4" style={{fontFamily:"Montserrat-Medium"}}
                                  />
                                  <input
                                      type="text"
                                      placeholder="No. of Passengers"
                                      className="mb-2 w-full md:w-1/4 rounded-md" style={{fontFamily:"Montserrat-Medium"}}
                                  />
                                  <button onClick={() => bookflight()} className="bg-[#ed701b] p-4 w-full mb-2 md:w-1/4 rounded-md text-white" style={{fontFamily:"Montserrat-Medium"}}>
                                      Search
                                  </button>
                              </div>
                          </div>
                      </div>
                  )}
                  {activeTab === "tab2" && (
                      <div id="tab2">
                          <h1 className="text-xl font-semibold">Content for Tab 2</h1>
                          <p className="mt-2 text-gray-700">
                              This is the content for tab 2.
                          </p>
                      </div>
                  )}
              </div>
          </div>
      </div>
  </div>
  
  );
};


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string
  icon: ReactNode
  notificationTitle: string
  status: string
}


const Modal = ({ isOpen, onClose, message, icon , notificationTitle, status}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 p-4">
      <div className="bg-white rounded-lg p-6 w-80 relative">
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex flex-col items-center">
        {status!=='ERROR'?<h3 className="text-green-600 text-3xl font-bold" style={{fontFamily:'Montserrat-Light'}}>{notificationTitle}</h3>:<h3 className="text-red-600 text-3xl font-bold" style={{fontFamily:'Montserrat-Light'}}>{notificationTitle}</h3>}
          {status!=='ERROR'?<Check className="text-green-600 text-6xl rounded-full border border-2 border-green-600" style={{height:'100px', width:'100px'}}/>:<X className="text-red-600 text-6xl rounded-full border border-2 border-red-600" style={{height:'100px', width:'100px'}}/>
}
{status!=='ERROR'? <p className="mt-4 text-lg font-semibold text-green-600" style={{fontFamily:'Montserrat-Light'}}>{message}</p>: <p className="mt-4 text-lg font-semibold text-red-600" style={{fontFamily:'Montserrat-Light'}}>{message}</p>}
         
        </div>
      </div>
    </div>
  );
};