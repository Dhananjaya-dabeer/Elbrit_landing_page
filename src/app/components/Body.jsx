import React from 'react'
import Card from './Card'
import Image from 'next/image'
import ImageCard from './ImageCard'

const Body = () => {
    const cardValues = [
        {
            title: "Vitamin C",
            description: "Vitamin C as ascorbic acid",
            img: "https://ik.imagekit.io/sm4doqwzz/Assets/h2-b1.jpg.png?updatedAt=1735918305365"
        },
        {
            title: "Vitamin B3",
            description: "Niacin for healthy gut and skin",
            img: "https://ik.imagekit.io/sm4doqwzz/Assets/bn2-2.jpg.png?updatedAt=1735918305491"
        },
        {
            title: "Magnesium",
            description: "Boost energy and  support muscle function",
            img: "https://ik.imagekit.io/sm4doqwzz/Assets/bn2-3.jpg.png?updatedAt=1735918305380"
        },
        {
            title: "Hyaluronic acid",
            description: "For smooth, supple and soft skin!",
            img: "https://ik.imagekit.io/sm4doqwzz/Assets/bn2-4.jpg.png?updatedAt=1735918305335"
        },
        {
            title: "Lactobacillus",
            description: "Invigorate your gut microbiome",
            img: "https://ik.imagekit.io/sm4doqwzz/Assets/bn2-5.jpg.png?updatedAt=1735918305498"
        },
        
    ]
    

 return (
    <div className='mx-10 sm:mx-32'>
        <div className=' mt-16 flex flex-wrap gap-2 md:gap-5 lg:gap-12  items-center'>
            <div className='flex flex-col sm:px-4 space-y-5 text-[#17414F] w-full md:w-5/12 '>
                <h4 className='font-semibold'>INGREDIENTS</h4>
                <h1 className='sm:text-5xl text-3xl'>Better Ingredients</h1>
                <p className='text-[#727272] text-sm'>Only the best when you choose products offered on our platform - high-quality ingredients for high quality products!</p>
            </div>
            {cardValues.map((card,idx) => (
                <div className="w-full  md:1/3  lg:w-1/4" key={idx}>
                    <Card title={card.title} description={card.description} img={card.img}/>
                </div>
            ))}
          <div className='w-24 ml-16 hidden 2xl:block'>
                    <Image
                        className='w-full'
                        src={"/assets/shape.svg"}
                        width={50}
                        height={20}
                        layout='intrinsic'
                        alt='Image'
                    />
            </div>
        </div>
        <div className="mt-10">
            <div className="text-center space-y-5">
                <h3 className='text-[#003569] text-xs font-semibold'>OUR BLOG</h3>
                <h1 className='text-[#17414F] text-3xl'>Latest News</h1>
            </div>
            <ImageCard/>
        </div>
    </div>
  )
}

export default Body