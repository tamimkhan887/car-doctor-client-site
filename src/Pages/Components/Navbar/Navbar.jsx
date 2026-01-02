import React, { useEffect, useState } from 'react';
import logoImage from "../../../assets/icons/logo.svg"
import { NavLink } from 'react-router-dom';
import { HiOutlineShoppingBag } from "react-icons/hi";
import { GoSearch } from "react-icons/go";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleMenubar = () => {
        setIsOpen(!isOpen)
    }
    useEffect(()=>{
        const handleResize = () =>{
            if(window.innerWidth >= 1024){
                setIsOpen(false)
            }
        }
        window.addEventListener('resize' , handleResize)
        
        return ()=>{
            window.removeEventListener('resize', handleResize)
        }
    })
    const navLinks = <>
        <li className='text-[#444444] text-lg font-semibold'><NavLink>Home</NavLink></li>
        <li className='text-[#444444] text-lg font-semibold'><NavLink>About</NavLink></li>
        <li className='text-[#444444] text-lg font-semibold'><NavLink>Services</NavLink></li>
        <li className='text-[#444444] text-lg font-semibold'><NavLink>Blog</NavLink></li>
        <li className='text-[#444444] text-lg font-semibold'><NavLink>Contact</NavLink></li>
    </>
    return (
        <div>
            <div className='flex justify-between lg:grid-cols-5 items-center my-8 mx-6 '>
                <div className='z-20'>
                    <img src={logoImage} alt="" className='w-20' />
                </div>
                <div className='lg:flex list-none gap-6 justify-center items-center col-span-2 hidden'>
                    {
                        navLinks
                    }
                </div>
                <div className='flex items-center gap-6 z-20'>
                    <div className='lg:flex gap-6 items-center justify-end col-span-2'>
                        <div className='lg:flex items-center gap-4 hidden'>
                            <HiOutlineShoppingBag size={26} color='#444444' />
                            <GoSearch size={24} color='#444444' />
                        </div>
                        <button className='text-[#FF3811] font-semibold text-lg border border-[#FF3811] rounded p-3'>Appointment</button>
                    </div>
                    <div className='lg:hidden'>
                        {
                            !isOpen ? <CiMenuBurger onClick={handleMenubar} size={24} color='gray'></CiMenuBurger> : <RxCross1 onClick={handleMenubar} size={24} color='gray'></RxCross1>
                        }
                    </div>
                </div>
            </div>
            <div>
                {isOpen?<div className='overflow-y-hidden fixed z-10 top-0 left-0 w-screen min-h-screen flex flex-col justify-center items-center list-none gap-4 duration-500 ease-in bg-amber-50'>
                    {
                        navLinks
                    }
                </div>:<div className='overflow-y-hidden fixed z-10 top-0 left-[-150%] w-screen min-h-screen flex flex-col justify-center items-center list-none gap-4 duration-500 ease-in bg-amber-50'></div>} 
            </div>
        </div>
    );
};

export default Navbar;