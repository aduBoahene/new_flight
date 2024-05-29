import Image from 'next/image'
import React from 'react'


interface RangeOfServiceProps{
    title: string
    description: string
    image: string
}

export const RangeOfService = ({title, description, image}: RangeOfServiceProps) => {
  return (
    <div className='p-4 md:w-1/3'>
        <Image src={image} width={400} height={200} alt="" />
        <h3 className='mt-8 text-xl text-[#ed701b]' style={{fontFamily:"Montserrat-Black"}}>{title}</h3>
        <p className='mt-2' style={{fontFamily:"Montserrat-Light"}}>
            {description}
        </p>
        <span className='text-[#ed701b]' style={{fontFamily:"Montserrat-Light"}}>Read More</span>
    </div>
  )
}
