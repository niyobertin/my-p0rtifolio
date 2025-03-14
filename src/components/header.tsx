import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";

const NavigationBar = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 555) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div
      className={`fixed flex items-center w-full justify-center pt-8 pb-5 text-white text-lg font-bold z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0D0D0D]" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between gap-20 items-center mr-[4%] hidden sm:flex ">
        <a className="hover:text-yellow-300" href="#home">
          Home
        </a>
        <a className="hover:text-yellow-300" href="#about">
          About
        </a>
        <a className="hover:text-yellow-300" href="#service">
          Service
        </a>
        <a className="hover:text-yellow-300" href="#portfolio">
          Portfolio
        </a>
        <a className="hover:text-yellow-300" href="#skills">
          Skills
        </a>
        <a className="hover:text-yellow-300" href="#contacts">
          Contact us
        </a>
      </div>
      <div className="block sm:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <div
        className={`absolute top-16 w-[50%] right-[0%] bg-[#0063b4] text-white p-5 rounded shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "scale-100 opacity-100" : "scale-75 opacity-0"
        }`}
      >
        <a
          className="block hover:text-yellow-300 mb-2"
          href="#home"
          onClick={closeMenu}
        >
          Home
        </a>
        <a
          className="block hover:text-yellow-300 mb-2"
          href="#about"
          onClick={closeMenu}
        >
          About
        </a>
        <a className="hover:text-yellow-300" href="#service">
          Service
        </a>
        <a
          className="block hover:text-yellow-300 mb-2"
          href="#portfolio"
          onClick={closeMenu}
        >
          Portfolio
        </a>
        <a
          className="block hover:text-yellow-300 mb-2"
          href="#skills"
          onClick={closeMenu}
        >
          Skills
        </a>
        <a
          className="block hover:text-yellow-300 mb-2"
          href="#contacts"
          onClick={closeMenu}
        >
          Contact us
        </a>
      </div>
    </div>
  );
};

export default NavigationBar;
