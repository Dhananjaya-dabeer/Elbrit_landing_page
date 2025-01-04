import Image from 'next/image';
import React from 'react';

const Card = ({ title, description, img }) => {
  return (
    <div className='relative bg-[#E2F5FB] flex justify-between rounded-2xl'>
      <div className='absolute top-0 left-0 right-0 bottom-0 z-10 from-[#E2F5FB] to-transparent px-5 py-5 flex flex-col justify-between'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-[#2D3F59] font-bold text-xl'>{title}</h2>
          <p className='text-sm text-[#727272]'>{description}</p>
        </div>
        <a href="#" className='text-xs text-[#003569] underline font-semibold'>SEE MORE</a>
      </div>
      <div className='relative'>
        <Image 
          src={img}
          width={400}
          height={200}
          layout='intrinsic'
          alt={title}
        />
      </div>
    </div>
  );
};

export default Card;
