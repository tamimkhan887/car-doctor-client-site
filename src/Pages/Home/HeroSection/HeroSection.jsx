import React from 'react';
import HeroImg1 from "../../../assets/images/about_us/person.jpg"
import HeroImg2 from "../../../assets/images/about_us/parts.jpg"
const HeroSection = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row gap-8 mt-6 md:mt-20'>
            <div className='relative'>
                <img src={HeroImg1} alt="" className='rounded-lg lg:pr-20' />
                <img src={HeroImg2} alt="" className='hidden lg:flex absolute border-12 border-white rounded-lg bottom-0 w-80 h-76 right-0 ' />
            </div>
            <div className='space-y-4 md:space-y-6'>
                <h4 className='text-[#FF3811] font-bold text-xl'>About Us</h4>
                <h2 className='text-[#151515] font-bold text-5xl'>We are qualified <br className='hidden md:flex'/> & of experience <br className='hidden md:flex'/> in this field</h2>
                <p className='text-[#737373] font-normal text-base'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p className='text-[#737373] font-normal text-base'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                <button className='bg-[#FF3811] px-6 py-3 font-semibold text-lg text-white rounded-lg'>Get More Info</button>
            </div>
        </div>
    );
};

export default HeroSection;