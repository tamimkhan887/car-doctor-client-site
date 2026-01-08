import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Team = ({ team }) => {
    const { title, expert, img } = team;
    return (
        <div className='p-6 shadow riunded-lg'>
            <img src={img} alt="" className='rounded-lg ' />
            <h3 className='text-2xl font-bold text-center mt-4 text-[#444444]'>{title}</h3>
            <p className='text-xl font-semibold text-[#737373] text-center mt-2'>{expert}</p>
            <div className='flex justify-center items-center gap-2 mt-2'>
                <div className='bg-[#395185] flex justify-center items-center h-8 w-8 rounded-full'>
                    <a href="https://www.facebook.com"
                        target='_blank'
                    >
                        <FaFacebookF size={20} color='white' />
                    </a>
                </div>
                <div className='bg-[#55ACEE] flex justify-center items-center h-8 w-8 rounded-full'>
                    <FaTwitter size={20} color='white' />
                </div>
                <div className='bg-[#0A66C2] flex justify-center items-center h-8 w-8 rounded-full'>
                    <FaLinkedinIn size={18} color='white' />
                </div>
                <div className='bg-gradient-to-b 
                               from-[#774ADF] 
                               via-[#9748BE] 
                               via-[#BD4697] 
                               via-[#D8447A] 
                               via-[#E94369] 
                               via-[#EF4363] 
                               via-[#EF545E] 
                               via-[#F08053] 
                               to-[#F2C141] 
                            flex justify-center items-center h-8 w-8 rounded-full'><FaInstagram size={20} color='white' />
                </div>

            </div>
        </div>
    );
};

export default Team;