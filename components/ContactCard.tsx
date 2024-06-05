import { Bed } from 'lucide-react'
import React, { ReactElement } from 'react'


interface ContactCardProps{
    logo: ReactElement
    title: string
    description: string
}

export const ContactCard = ({logo, title, description}: ContactCardProps) => {
    return (
        <div className='flex gap-4 border-2 w-full md:w-1/2 lg:w-1/4 p-4 rounded-md md:items-start'>
        {logo}
        <div>
          <h4 className='text-lg font-bold' style={{ fontFamily: "Montserrat-Light" }}>{title}</h4>
          <p className='text-gray-700' style={{ fontFamily: "Montserrat-Light" }}>{description}</p>
        </div>
      </div>
  )
}
