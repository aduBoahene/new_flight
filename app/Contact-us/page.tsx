import { ContactForm } from "@/components/ContactForm";
import ContactList from "@/components/ContactList";
import React from "react";

export default function page() {
  return (
    <div>
  <div
    className="md:h-1/4 bg-cover relative h-64 md:h-[500px]"
    style={{ backgroundImage: `url('contactus.jpeg')` }}
  >
    <div className="w-[90%] md:w-[70%] flex justify-center md:pr-32 absolute bottom-8 right-0">
      <div className="bg-[#ed701bb0] w-full md:w-2/5 mb-8 md:mb-0">
        <h4
          className="text-white p-4 bg-transparent font-bold"
          style={{ fontFamily: "Montserrat-Medium" }}
        >
          We look forward to the opportunity to assist you with all your travel needs!
        </h4>
      </div>
    </div>

  </div>

  <ContactList/>

  <div className="bg-[#F6F5EF]">
  <ContactForm/>
  </div>

</div>


  );
}
