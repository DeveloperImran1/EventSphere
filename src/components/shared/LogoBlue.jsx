import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const LogoBlue = () => {
    return (
        <Link href="/" className='flex items-center hover:scale-105 duration-300 transform'>
            <Image src="/asssets/images/logoBlue.png" alt='logo' width={30} height={30} className='object-cover rounded-full '/>
            <h2 className='text-[#1b88c0] font-bold'>vent<span className='text-[#eab308]'>Sphere</span></h2>
        </Link>
    );
};

export default LogoBlue;