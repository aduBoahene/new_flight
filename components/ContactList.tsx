import React from 'react'
import { ContactCard } from './ContactCard'
import { Mail, MapPin, Smartphone } from 'lucide-react'

export default function ContactList(){


    const contact = [
        {
            logo: <MapPin size={40} color='#ed701b'/>,
            title:"location",
            description: "20 Nii Nortei Nyanchi Street, Dzorwulu"
        },
        {
            logo:<Smartphone size={40} color='#ed701b'/>,
            title:"Phone",
            description: "+233 50910 0990\n\
            +233 50910 0990"
        },
        {
            logo: <Mail size={40} color='#ed701b'/>,
            title:"Email",
            description: "info@rondureconnect.com"
        }
    ]

  return (
   

    <div className='p-4 md:p-6 flex flex-col md:flex-row md:justify-between md:w-full lg:w-[80%] mx-auto gap-4'>
    {contact.map((item, idx) => (
      <ContactCard 
        key={idx}
        title={item.title} 
        description={item.description} 
        logo={item.logo} 
      />
    ))}
  </div>
  )
}
