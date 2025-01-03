import React from 'react';
import Image from 'next/image';

const Head = () => {

    const features = [
        {
          title: 'Clinically Studied',
          description: 'All products that we offer have undergone lab and safety tests',
          icon: 'https://ik.imagekit.io/sm4doqwzz/Assets/image(1).png?updatedAt=1735927432651',
        },
        {
          title: 'Vegetarian Friendly',
          description: 'We have a wide selection of vegetarian products to meet your needs',
          icon: 'https://ik.imagekit.io/sm4doqwzz/Assets/image.png?updatedAt=1735927432879',
        },
        {
          title: 'Made In India',
          description: 'Shop local and explore health products made right here in India',
          icon: 'https://ik.imagekit.io/sm4doqwzz/Assets/image(2).png?updatedAt=1735927432646',
        },
        {
          title: 'Free Shipping',
          description: 'We deliver to your door while helping you save on shipping costs',
          icon: 'https://ik.imagekit.io/sm4doqwzz/Assets/image(3).png?updatedAt=1735927432642',
        },
        {
          title: 'No Risk',
          description: 'We ensure that all products are safe to try within their expiry date',
          icon: 'https://ik.imagekit.io/sm4doqwzz/Assets/image(4).png?updatedAt=1735927432407',
        },
        {
          title: 'GMO Free',
          description: 'Natural, non-modified products are derived for those who need it',
          icon: 'https://ik.imagekit.io/sm4doqwzz/Assets/image(5).png',
        },
      ];


  return (
    <div className="w-full">
      <div className="w-1/3 ml-5 sm:w-1/4 md:w-1/6 lg:w-1/12 sm:ml-24 mb-2"> {/* Make sure the container is responsive */}
        <Image 
          src="https://ik.imagekit.io/sm4doqwzz/Assets/image(1).png?updatedAt=1735918423426"
          alt="Logo"
          width={100} 
          height={50} 
          layout="responsive" 
        />
      </div>
      <div className='bg-[#E2F5FB] mx-2'>
       <div className='w-full flex justify-center'>
        <h1 className='text-6xl font-bold text-[#003569] mt-16'>Essential Vitamins</h1>
       </div>
       <div className='flex justify-evenly items-center mt-4'>
        <div className="space-y-3">
            <p className='text-[#727272] text-sm'>Online Medical Supplies</p>
            <h3 className='text-xl text-[#17414F]'>Get Your Vitamins <br/> & Minerals</h3>
            <button className='bg-[#17414F] rounded-2xl px-6 py-2 text-white text-xs'>EXPLORE</button>
        </div>
        <div className=' w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:ml-24 bg-[#FFE9B5] rounded-tl-[150px] rounded-br-[150px]  '>
            <Image 
            className='-mt-16'
            src="https://ik.imagekit.io/sm4doqwzz/Assets/image.png?updatedAt=1735921100793"
            alt="Logo"
            width={100} 
            height={50} 
            layout="responsive" 
            />
        </div>
        <div className='flex flex-col gap-10'>
           <div className='flex items-center gap-4'>
               <div className='w-1/6'>
               <Image
                alt="Logo"
                width={100} 
                height={50} 
                layout="responsive"
                src={"https://ik.imagekit.io/sm4doqwzz/Assets/image(1).png"}
                />
               </div>
                <div className='text-xs text-[#727272]'>
                    <h3 className='text-sm text-[#17414F]'>Vitamins</h3>
                    <p className='text-xs'>Increased Vitamins and <br/> minerals in your diet</p>
                </div>
           </div>
           <div className='flex items-center gap-4'>
                <div className='w-1/6'>
                <Image
                alt="Logo"
                width={100} 
                height={50} 
                layout="responsive"
                src={"https://ik.imagekit.io/sm4doqwzz/Assets/image(2).png"}
                />
                </div>
                 <div className='text-[#727272]'>
                    <h3 className='text-sm text-[#17414F]'>Weight Loss</h3>
                    <p className='text-xs'>Weight Loss <br/> Find scientifically proven solutions</p>
                </div>
           </div>
           <div className='flex items-center gap-4'>
               <div className='w-1/6'>
               <Image
                alt="Logo"
                width={100} 
                height={50} 
                layout="responsive"
                src={"https://ik.imagekit.io/sm4doqwzz/Assets/image(3).png"}
                />
               </div>
                 <div className='text-[#727272]'>
                    <h3 className='text-sm text-[#17414F]'>Functional Foods</h3>
                    <p className='text-xs'>Functional Foods <br/> From protein powers to baby formula</p>
                </div>
           </div>

        </div>
        
       </div>
       <div className="flex gap-2 ml-44 mt-10 pt-10 pb-44">
            <div className="bg-[#727272] rounded-full w-10 h-10"></div>
            <div className="bg-[#727272] rounded-full w-10 h-10"></div>
        </div>
      </div>
      <div className='bg-[#17414F] mx-32 rounded-3xl -mt-36 h-96 flex flex-wrap justify-evenly gap-10 px-4'>
        {
            features.map((feature,idx) => (
                <div className="w-1/4 flex flex-col items-center" key={idx}>
                   <div className='bg-white w-24 h-24 p-6 rounded-full shadow-md text-center -mt-12'>
                   <div className="w-12 h-12 mx-auto mb-4 flex justify-center items-center">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={32}
                      height={32}
                      layout="responsive"
                    />
                  </div>
                   </div>
                   
                  <div className='flex flex-col w-full justify-center items-center '>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                    <p className="text-sm text-white mt-2 w-10/12 text-center ">{feature.description}</p>
                  </div>
                </div>
            ))
        }
      </div>
    </div>
  );
}

export default Head;
