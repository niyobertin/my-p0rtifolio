import Hamburger from 'hamburger-react';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode'; 
import { FaRegUser } from "react-icons/fa";
import { JwtPayload } from 'jsonwebtoken';

interface CustomJwtPayload extends JwtPayload {
  email?: string;
  role?: string;
}

const NavigationBar = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const loggedIn: any = localStorage.getItem('accessToken');
  let decoded = loggedIn ? jwtDecode(loggedIn) as CustomJwtPayload : null;

  useEffect(() => {
    if (loggedIn) {
      setIsLoggedIn(true);
    }
  }, [loggedIn]);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
    window.location.href = '/';  
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className="fixed flex w-full justify-between bg-[#1e1e1e]  pt-5 pb-5 text-white z-50">
      <div className="ml-[4%]">
        <h1 className='font-bold text-lg'>Niyonkuru<span className='text-yellow-200 font-bold text-lg'>.</span></h1>
      </div>
      <div className="flex justify-between gap-7 items-center mr-[4%] hidden sm:flex ">
        <a className="hover:text-yellow-300" href="#home">Home</a>
        <a className="hover:text-yellow-300" href="#service">Service</a>
        <a className="hover:text-yellow-300" href="#portfolio">Portfolio</a>
        <a className="hover:text-yellow-300" href="#skills">Skills</a>
        <a className="hover:text-yellow-300" href="#blogs">Blogs</a>
        <a className="hover:text-yellow-300" href="/contacts">Contact us</a> 
        {isLoggedIn ? (
          <div className="relative">
            <span onClick={toggleDropdown} className='flex gap-2 items-center border-l-2 pl-2 cursor-pointer'>
              <FaRegUser size={30} className='bg-gray-200 p-1 rounded-full text-black' />
            </span>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-62 bg-white text-black rounded-md shadow-lg py-2 z-50">
                <p className="block px-4 py-2">{decoded?.email}</p>
                {decoded?.role === "admin" && (
                  <a href="/dashboard" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setDropdownOpen(false)}>My Dashboard</a>
                )}
                <button className="block px-4 py-2 hover:bg-gray-200" onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <span className='flex gap-4'>
            <a href="/register">
              <span><button className='bg-green-400 px-3 py-1 rounded-md hover:bg-yellow-500'>Register</button></span>
            </a>
            <a href="/login">
              <span><button className='bg-yellow-400 px-3 py-1 rounded-md hover:bg-green-400'>Login</button></span>
            </a>
          </span>
        )}
      </div>
      <div className='block sm:hidden'>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <div
        className={`absolute top-16 w-[50%] right-[0%] bg-[#1e1e1e] text-white p-5 rounded shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
        }`}
      >
        <a className="block hover:text-yellow-300 mb-2" href="#home" onClick={closeMenu}>Home</a>
        <a className="block hover:text-yellow-300 mb-2" href="#service" onClick={closeMenu}>Service</a>
        <a className="block hover:text-yellow-300 mb-2" href="#portfolio" onClick={closeMenu}>Portfolio</a>
        <a className="block hover:text-yellow-300 mb-2" href="#skills" onClick={closeMenu}>Skills</a>
        <a className="block hover:text-yellow-300 mb-2" href="#blogs" onClick={closeMenu}>Blogs</a>
        <a className="block hover:text-yellow-300 mb-2" href="/contacts" onClick={closeMenu}>Contact us</a> 
        {isLoggedIn ? (
          <div className="relative">
            <span onClick={toggleDropdown} className='flex gap-2 items-center border-l-2 pl-2 cursor-pointer'>
              <FaRegUser size={30} className='bg-gray-200 p-1 rounded-full text-black' />
            </span>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-62 bg-white text-black rounded-md shadow-lg py-2 z-50">
                <p className="block px-4 py-2">{decoded?.email}</p>
                {decoded?.role === "admin" && (
                  <a href="/dashboard" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setDropdownOpen(false)}>My Dashboard</a>
                )}
                <button className="block px-4 py-2 hover:bg-gray-200" onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
          
        ) : (
          <span className='flex gap-4'>
            <a href="/register">
              <span><button className='bg-green-400 px-3 py-1 rounded-md hover:bg-yellow-500'>Register</button></span>
            </a>
            <a href="/login">
              <span><button className='bg-yellow-400 px-3 py-1 rounded-md hover:bg-green-400'>Login</button></span>
            </a>
          </span>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
