"use client";

import React, { useState } from "react";

export default function page() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };
  return (
    <div className="md: border border-2">
      <div
        className="relative flex items-center h-64 md:h-[600px] bg-cover"
        style={{ backgroundImage: `url('logistics-packing.jpeg')` }}
      >
        <div className="w-full p-4 md:w-[70%] md:mx-auto bg-black-200">
          <h3
            className="md: text-3xl text-white font-extrabold"
            style={{ fontFamily: "Montserrat-Medium" }}
          >
            Rondure E-Commerce
          </h3>
          <h3
            className="md: text-3xl text-white font-extrabold"
            style={{ fontFamily: "Montserrat-Medium" }}
          >
            Logistics
          </h3>

          <p
            className="md: mt-8 text-white text-xl md:w-3/5 leading-relaxed"
            style={{ fontFamily: "Montserrat-Medium" }}
          >
            Optimise your end-to-end e-commerce logistics, with order
            fulfilment, last-mile and cross-border delivery.
          </p>

          <button className="bg-white rounded-lg py-4 px-6 text-black md:mt-4">
            Contact Us
          </button>
        </div>
      </div>

      <div className="border-b border-gray-200 dark:border-gray-700 md:w-[70%] md:mx-auto md:mt-8">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="me-2" style={{ fontFamily: "Montserrat-Medium" }} onClick={() => handleTabClick("tab1")} >
            <a
              href="#"
              className="inline-flex items-center justify-center p-4 border-b-2 border-transparent active rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
              aria-current="page"
            >
              Overview
            </a>
          </li>
          <li className="me-2" style={{ fontFamily: "Montserrat-Medium" }} onClick={() => handleTabClick("tab2")} >
            <a
              href="#"
              className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
            >
              Services
            </a>
          </li>
          <li className="me-2" style={{ fontFamily: "Montserrat-Medium" }} onClick={() => handleTabClick("tab3")} >
            <a
              href="#"
              className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
            >
              Settings
            </a>
          </li>
          <li className="me-2" style={{ fontFamily: "Montserrat-Medium" }} onClick={() => handleTabClick("tab4")}          >
            <a
              href="#"
              className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
            >
              Global Coverage
            </a>
          </li>
          <li
            className="me-2"
            style={{ fontFamily: "Montserrat-Medium" }}
             onClick={() => handleTabClick("tab5")}
          >
            <a
              href="#"
              className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
            >
              Insights
            </a>
          </li>
        </ul>
        <div className="p-4">
          {activeTab === "tab1" && <div id="tab1">Tab 1</div>}
          {activeTab === "tab2" && <div id="tab2">Tab 2</div>}
          {activeTab === "tab3" && <div id="tab3">Tab 3</div>}
          {activeTab === "tab4" && <div id="tab4">Tab 4</div>}
          {activeTab === "tab5" && <div id="tab5">Tab 5</div>}
        </div>
      </div>
    </div>
  );
}
