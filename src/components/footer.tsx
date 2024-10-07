import React from 'react';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiLinkedinFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { FaRegCopyright } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
const Footer: React.FC  = () =>{

    return(
    <div className="text-black w-[100vw] top-20 z-30 relative overflow-auto pt-10 bg-[#e0e7ff] mt-[3%]">
        <div className='overflow-auto ml-[4%] mr-[4%] '>
        <div className='sm:flex block justify-between pb-6'>
        <div className='sm:w-[27.3%] w-full'>
            <h1 className='font-bold pb-2'>Niyonkuru Bertin</h1>

            <p>
                I am a  Full Stack Developer with a strong focus on JavaScript technologies.| Leaning never ends
            </p>
            <ul className='flex gap-4 mt-4'>
                <li className='flex gap-2 items-center'><a href='https://www.linkedin.com/in/niyonkuru-bertin-35438a240'><span><RiLinkedinFill/></span></a></li>
                <li className='flex gap-2 items-center'><a href="https://x.com/NiyonkuruBertin"><span><BsTwitterX/></span></a></li>
                <li className='flex gap-2 items-center'><a href="https://github.com/niyobertin"><span><FaGithub /></span></a></li>
            </ul>
        </div>
        <div>
            <h1 className='font-bold pb-2'>Pages</h1>
            <ul>
                <li><a className="hover:text-blue-500" href="#home">Home</a></li>
                <li><a className="hover:text-blue-500" href="#service">Service</a></li>
                <li><a className="hover:text-blue-500" href="#portfolio">Portfolio</a></li>
                <li><a className="hover:text-blue-500" href="#skills">Skills</a></li>
            </ul>   
        </div>
        <div>
            <h1 className='font-bold pb-2'>Adress</h1>

            <ul>
                <p>Rwanda | Kigali</p>
                <p>Rwanda | West | Rutsiro</p>
                <li className='flex gap-2 items-center'><span><FaPhone/></span>+250783021801</li>
                <li className='flex gap-2 items-center'><span><MdEmail/></span>niyonkurubbertin@gmail.com</li>
            </ul>
        </div>
    </div>
    <p className='flex gap-2 items-center justify-center border-t-[1px] border-black '>
        <FaRegCopyright /> {new Date().getFullYear()} Niyonkuru Bertin. All rights reserved.
        </p>
        </div>
    </div>
)};

export default Footer;