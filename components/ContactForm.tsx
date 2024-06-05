'use client'

import Image from "next/image";
import React, { FormEvent, useState } from "react";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = (e: FormEvent) => {
    e.preventDefault();
    console.log("form message", name, email, subject, phone, message);
    setName('')
    setEmail('')
    setSubject('')
    setPhone('')
    setMessage('')
  };

  return (
    <div className="p-4 lg:pt-12 flex flex-col lg:flex-row lg:gap-8 lg:w-[80%] lg:mx-auto">
  <div className="relative w-full lg:w-1/2">
    <Image
      src="/lady_in_airport.jpeg"
      layout="responsive"
      width={300}
      height={200}
      alt=""
      className="rounded-lg object-cover"
    />
  </div>

  <div className="bg-white p-4 mt-4 lg:mt-0 lg:w-1/2 rounded-lg">
    <div className="p-4 bg-[#F6F5EF] rounded-lg">
      <form className="p-4" onSubmit={sendMessage}>
        <div className="flex flex-col lg:flex-row gap-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Your Name"
            className="w-full lg:w-1/2 p-4"
            style={{ fontFamily: "Montserrat-Light" }}
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Your Email"
            className="w-full lg:w-1/2 p-4"
            style={{ fontFamily: "Montserrat-Light" }}
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-4 mt-4">
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            placeholder="Phone"
            className="w-full lg:w-1/2 p-4"
            style={{ fontFamily: "Montserrat-Light" }}
          />
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            type="text"
            placeholder="Subject"
            className="w-full lg:w-1/2 p-4"
            style={{ fontFamily: "Montserrat-Light" }}
          />
        </div>
        <div className="w-full mt-4">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            className="w-full p-4"
            rows={4}
            style={{ fontFamily: "Montserrat-Light" }}
          ></textarea>
        </div>
        <div className="w-full mt-4">
          <button
            className="p-4 rounded-lg bg-[#ed701b] w-full text-white"
            style={{ fontFamily: "Montserrat-Black" }}
          >
            SEND MESSAGE
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

  
  );
};
