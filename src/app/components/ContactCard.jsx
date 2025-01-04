import Image from 'next/image'
import React from 'react'

const ContactCard = ({svg, type, contact}) => {
  return (
    <div className=' flex gap-4 py-4 px-5 sm:px-20  items-center bg-[#215D72] rounded-2xl '>
        <div className='flex items-center'>
            <Image
                src={svg}
                width={40}
                height={10}
                alt={type}
            />
        </div>
        <div className='flex flex-col gap-2'>
            <p className='text-white text-sm'>{type}</p>
            <p className='text-white font-bold'>{contact}</p>
        </div>
    </div>
  )
}

export default ContactCard