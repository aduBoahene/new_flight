import React from "react";

export default function page() {
  return (
    <div className="w-full p-4 md:w-[70%] md:mx-auto">
    <h3 className="text-[#171766] md:text-3xl font-bold md:my-8">Travel Restrictions</h3>

      <p className="md:mt-4">
        The travel status of individual countries can change suddenly, and we
        know it can be hard to stay on top of it all. That’s why we’re getting
        you the information you need to consider when planning travel. Learn
        about country-specific entry requirements such as the border status,
        COVID-19 testing requirements, and quarantine requirements. Many
        countries are reopening their borders for international travel. Find out
        which countries are open to vaccinated travelers.
      </p>

      <p className="md:mt-4">
        Just enter your departure country above – the map will update to reflect
        countries’ opening status and any entry requirements for air travelers.
        Before you book, be sure to double check your country’s official
        government site.
      </p>

      <h3 className="text-[#171766] md:text-3xl font-bold md:my-8">Destinations you can travel to now</h3>
    </div>
  );
}
