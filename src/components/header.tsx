import Hamburger from "hamburger-react";
import { useEffect, useState, useRef } from "react";

const NavigationBar = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div
      className={`fixed flex items-center w-full justify-between px-[4%] pt-8 pb-5 text-white text-lg font-bold z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0D0D0D]" : "bg-transparent"
      }`}
    >
      <div className="flex justify-start sm:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <div className="hidden sm:flex justify-between gap-20 items-center">
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

      {/* Mobile menu (slides down from top) */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 w-full bg-gray-800 text-white p-5 rounded-b-lg shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <a
          className="block hover:text-yellow-300 mb-4"
          href="#home"
          onClick={closeMenu}
        >
          Home
        </a>
        <a
          className="block hover:text-yellow-300 mb-4"
          href="#about"
          onClick={closeMenu}
        >
          About
        </a>
        <a
          className="block hover:text-yellow-300 mb-4"
          href="#service"
          onClick={closeMenu}
        >
          Service
        </a>
        <a
          className="block hover:text-yellow-300 mb-4"
          href="#portfolio"
          onClick={closeMenu}
        >
          Portfolio
        </a>
        <a
          className="block hover:text-yellow-300 mb-4"
          href="#skills"
          onClick={closeMenu}
        >
          Skills
        </a>
        <a
          className="block hover:text-yellow-300 mb-4"
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
