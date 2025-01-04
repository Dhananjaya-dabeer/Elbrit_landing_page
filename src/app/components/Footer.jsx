import React from 'react';
import ContactCard from './ContactCard';
import Image from 'next/image';

const Footer = () => {
    const contacts = [
        {
            svg: "/assets/Component-2.svg",
            type: "Phone Number",
            contact: "+974 3118 1843"
        },
        {
            svg: "/assets/Component-2-1.svg",
            type: "Email Address",
            contact: "Elbrithchqr@gmail.com"
        },
        {
            svg: "/assets/Component-2-2.svg",
            type: "Office Location",
            contact: "Ambassador Street Zone 61"
        },
    ];

    return (
        <div className='bg-[#17414F] px-5 sm:px-20 md:px-40 py-7 flex flex-col gap-10'>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
                {contacts.map((item, idx) => (
                    <ContactCard key={idx} contact={item.contact} svg={item.svg} type={item.type} />
                ))}
            </div>
            <div className='flex flex-wrap items-center justify-center gap-5'>
                <Image
                    src={"https://ik.imagekit.io/sm4doqwzz/Assets/image.png?updatedAt=1736014060413"}
                    width={200}
                    height={50}
                    alt='Logo'
                    className='w-full max-w-[200px]'
                />
                <p className='text-white text-sm font-thin text-center'>
                    Your health, physical and emotional well-being is important.<br />
                    We are always by your side and have made it even easier for you to find the necessary vitamins.
                </p>
            </div>
            <div className='flex items-center gap-2 text-white text-sm justify-center'>
                <Image
                    src={"/assets/Component-2-2.svg"}
                    width={14}
                    height={10}
                    alt='Location Icon'
                />
                <p>Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051</p>
            </div>
        </div>
    );
};

export default Footer;
