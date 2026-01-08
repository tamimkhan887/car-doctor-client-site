import React from 'react';
import logo from "../../../assets/icons/logoWhite.svg"
import { IoLogoInstagram } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='mt-24 bg-[#151515] px-6'>
            <footer className="footer sm:footer-horizontal  text-base-content  py-24 max-w-7xl mx-auto">
                <aside>
                    <img src={logo} alt="" className='h-20 w-20' />
                    <p className='text-[#E8E8E8]'>
                        Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial .
                    </p>
                    <div className='flex gap-2 mt-3'>
                        <div className='bg-[#FF3811] p-2 rounded-full'>
                            <FaGoogle size={20} color='white'></FaGoogle>
                        </div>
                        <div className='bg-[#FF3811] p-2 rounded-full'>
                            <FaTwitter size={20} color='white'></FaTwitter>
                        </div>
                        <div className='bg-[#FF3811] p-2 rounded-full'>
                            <IoLogoInstagram size={20} color='white'></IoLogoInstagram>
                        </div>
                        <div className='bg-[#FF3811] p-2 rounded-full'>
                            <FaLinkedin size={20} color='white'></FaLinkedin>
                        </div>
                    </div>
                </aside>
                <nav>
                    <h6 className="footer-title text-[#E8E8E8]">Services</h6>
                    <a className="link link-hover text-[#E8E8E8]">Branding</a>
                    <a className="link link-hover text-[#E8E8E8]">Design</a>
                    <a className="link link-hover text-[#E8E8E8]">Marketing</a>
                    <a className="link link-hover text-[#E8E8E8]">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-[#E8E8E8]">Company</h6>
                    <a className="link link-hover text-[#E8E8E8]">About us</a>
                    <a className="link link-hover text-[#E8E8E8]">Contact</a>
                    <a className="link link-hover text-[#E8E8E8]">Jobs</a>
                    <a className="link link-hover text-[#E8E8E8]">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-[#E8E8E8]">Legal</h6>
                    <a className="link link-hover text-[#E8E8E8]">Terms of use</a>
                    <a className="link link-hover text-[#E8E8E8]">Privacy policy</a>
                    <a className="link link-hover text-[#E8E8E8]">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;