import React from 'react';
import Image from 'next/image';

const Head = () => {

    const features = [
        {
          title: 'Clinically Studied',
          description: 'All products that we offer have undergone lab and safety tests',
          icon: '/assets/Beaker.svg',
        },
        {
          title: 'Vegetarian Friendly',
          description: 'We have a wide selection of vegetarian products to meet your needs',
          icon: '/assets/Leaf.svg',
        },
        {
          title: 'Made In India',
          description: 'Shop local and explore health products made right here in India',
          icon: '/assets/Flag.svg',
        },
        {
          title: 'Free Shipping',
          description: 'We deliver to your door while helping you save on shipping costs',
          icon: '/assets/Shipping.svg',
        },
        {
          title: 'No Risk',
          description: 'We ensure that all products are safe to try within their expiry date',
          icon: '/assets/NoRisk.svg',
        },
        {
          title: 'GMO Free',
          description: 'Natural, non-modified products are derived for those who need it',
          icon: '/assets/GMOFree.svg',
        },
    ];

    return (
        <div className="w-full">
            <div className="w-1/3 ml-5 sm:w-1/4 md:w-1/6 lg:w-1/12 sm:ml-24 mb-2">
                <Image 
                    src="/assets/Logo2.svg"
                    alt="Logo"
                    width={100} 
                    height={50} 
                    layout="responsive" 
                />
            </div>
            <div className='bg-[#E2F5FB] mx-2'>
                <div className='w-full flex justify-center'>
                    <h1 className='text-4xl sm:text-6xl font-bold text-[#003569] mt-16'>Essential Vitamins</h1>
                </div>
                <div className='flex justify-evenly items-center mt-4 flex-wrap'>
                    <div className="space-y-3 mb-10 sm:mb-0">
                        <p className='text-[#727272] text-sm'>Online Medical Supplies</p>
                        <h3 className='text-xl text-[#17414F]'>Get Your Vitamins <br/> & Minerals</h3>
                        <button className='bg-[#17414F] rounded-2xl px-6 py-2 text-white text-xs'>EXPLORE</button>
                    </div>
                    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:ml-24 bg-[#FFE9B5] rounded-tl-[150px] rounded-br-[150px]'>
                        <Image 
                            className='-mt-16'
                            src="/assets/Probotics.svg"
                            alt="Logo"
                            width={100} 
                            height={50} 
                            layout="responsive" 
                        />
                    </div>
                    <div className='flex flex-col gap-10 mt-10'>
                        <div className='flex items-center gap-4'>
                            <div className='w-1/3 sm:w-1/6'>
                                <Image
                                    alt="Logo"
                                    width={100} 
                                    height={50} 
                                    layout="responsive"
                                    src={"/assets/Vitamin.svg"}
                                />
                            </div>
                            <div className='text-[#727272]'>
                                <h3 className='text-xl sm:text-sm text-[#17414F]'>Vitamins</h3>
                                <p className='text-md sm:text-xs'>Increased Vitamins and <br/> minerals in your diet</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4 '>
                            <div className='w-1/3 sm:w-1/6'>
                                <Image
                                    alt="Logo"
                                    width={100} 
                                    height={50} 
                                    layout="responsive"
                                    src={"/assets/Weight.svg"}
                                />
                            </div>
                            <div className='text-[#727272]'>
                                <h3 className='text-xl sm:text-sm text-[#17414F]'>Weight Loss</h3>
                                <p className='text-md sm:text-xs'>Weight Loss <br/> Find scientifically proven solutions</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div className='w-1/3 sm:w-1/6'>
                                <Image
                                    alt="Logo"
                                    width={100} 
                                    height={50} 
                                    layout="responsive"
                                    src={"/assets/FunctionalFoods.svg"}
                                />
                            </div>
                            <div className='text-[#727272]'>
                                <h3 className='text-xl sm:text-sm text-[#17414F]'>Functional Foods</h3>
                                <p className='text-md sm:text-xs'>Functional Foods <br/> From protein powers to baby formula</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 md:ml-44 mt-10 pt-10 pb-44">
                  <div className="bg-[#727272] rounded-full w-8 h-8 md:w-10 md:h-10"></div>
                  <div className="bg-[#727272] rounded-full w-8 h-8 md:w-10 md:h-10"></div>
                </div>

            </div>
            <div className='bg-[#17414F] mx-4 md:mx-16 lg:mx-32 rounded-3xl -mt-36 h-auto md:h-96 flex flex-wrap justify-evenly gap-24  px-4 py-10'>
    {
        features.map((feature, idx) => (
            <div className="w-full md:w-1/4 flex flex-col items-center" key={idx}>
                <div className='bg-white w-24 h-24 p-6 rounded-full shadow-md text-center -mt-20 '>
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
                <div className='flex flex-col w-full justify-center items-center'>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                    <p className="text-sm text-white mt-2 w-10/12 text-center">{feature.description}</p>
                </div>
            </div>
        ))
    }
</div>

        </div>
    );
}

export default Head;
