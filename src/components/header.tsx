import Hamburger from 'hamburger-react'
import { useState } from 'react';
import { FaRegUser } from "react-icons/fa";

const NavigationBar = () =>{
    const [isOpen, setOpen] = useState<boolean>(false);
    const closeMenu = () => {
      setOpen(false);
    };
    return(
    <div className="fixed flex w-full justify-between bg-[#1e1e1e] pt-5 pb-5 text-white z-50">
        <div className="ml-[4%]">
            <h1 className='font-bold text-lg'>Niyonkuru<span className='text-yellow-200 font-bold text-lg'>.</span></h1>
        </div>
        <div className="flex justify-between gap-7 iterms-center mr-[4%] hidden sm:flex">
                <a className="hover:text-yellow-300" href="#home">Home</a>
                <a className="hover:text-yellow-300" href="#service">Service</a>
                <a className="hover:text-yellow-300" href="#portfolio">Portfolio</a>
                <a className="hover:text-yellow-300" href="#blogs">Blogs</a>
                <a className="hover:text-yellow-300" href="">Skills</a>
                <a className="hover:text-yellow-300" href="">Contact us</a>
                <a className="hover:text-yellow-300" href="">
                    <span><FaRegUser/></span>
                </a>
        </div>
        <div className='block sm:hidden'>
        <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <div
        className={`absolute top-16 w-[50%]  right-[0%] bg-[#1e1e1e] text-white p-5 rounded shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
        }`}
      >
          <a className="block hover:text-yellow-300 mb-2" href="#home" onClick={closeMenu}>Home</a>
          <a className="block hover:text-yellow-300 mb-2" href="#service" onClick={closeMenu}>Service</a>
          <a className="block hover:text-yellow-300 mb-2" href="#portfolio" onClick={closeMenu}>Portfolio</a>
          <a className="block hover:text-yellow-300 mb-2" href="#blogs" onClick={closeMenu}>Blogs</a>
          <a className="block hover:text-yellow-300 mb-2" href="" onClick={closeMenu}>Skills</a>
          <a className="block hover:text-yellow-300 mb-2" href="" onClick={closeMenu}>Contact us</a>
          <a className="block hover:text-yellow-300" href="">
            <span><FaRegUser/></span>
          </a>
        </div>
    </div>
)};

export default NavigationBar;