import React from "react";
import { ImHtmlFive } from "react-icons/im";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCss3 } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { PiFileSqlLight } from "react-icons/pi";

const SkillSection: React.FC = () => {
  return (
    <div className="w-full top-20 z-30 relative pt-10">
      <div className="overflow-auto ml-[4%] mr-[4%]">
        <h1
          className="flex items-center text-white font-bold text-xl justify-center pb-4"
          id="skills"
        >
          SKILLS
        </h1>

        <div className="flex justify-center">
          <div className="relative w-72 h-72">
            {/* Circular Skill Container */}
            <div className="absolute top-0 left-0 w-full h-full rounded-full flex items-center justify-center ">
              <div className="flex justify-between items-center w-full h-full rotate-45 gap-8">
                <div className="flex justify-center items-center w-1/2 h-1/2">
                  <div className="flex flex-col items-center bg-gray-800 p-4 rounded-full shadow-md">
                    <ImHtmlFive className="text-3xl text-[#d4420d]" />
                    <p className="mt-2 text-center">HTML</p>
                  </div>
                </div>
                <div className="flex justify-center items-center w-1/2 h-1/2">
                  <div className="flex flex-col items-center bg-gray-800 p-4 rounded-full shadow-md">
                    <SiCss3 className="text-3xl text-[#381bf5]" />
                    <p className="mt-2 text-center">CSS</p>
                  </div>
                </div>
              </div>
              {/* Second row */}
              <div className="flex justify-between items-center w-full h-full rotate-45 gap-8">
                <div className="flex justify-center items-center w-1/2 h-1/2">
                  <div className="flex flex-col items-center bg-gray-800 p-4 rounded-full shadow-md">
                    <IoLogoJavascript className="text-3xl text-[#f5ee1b]" />
                    <p className="mt-2 text-center">JavaScript</p>
                  </div>
                </div>
                <div className="flex justify-center items-center w-1/2 h-1/2">
                  <div className="flex flex-col items-center bg-gray-800 p-4 rounded-full shadow-md">
                    <SiTypescript className="text-3xl text-[#1b88f5]" />
                    <p className="mt-2 text-center">TypeScript</p>
                  </div>
                </div>
              </div>
              {/* Third row */}
              <div className="flex justify-between items-center w-full h-full rotate-45 gap-8">
                <div className="flex justify-center items-center w-1/2 h-1/2">
                  <div className="flex flex-col items-center bg-gray-800 p-4 rounded-full shadow-md">
                    <FaReact className="text-3xl text-[#1bcdf5]" />
                    <p className="mt-2 text-center">React</p>
                  </div>
                </div>
                <div className="flex justify-center items-center w-1/2 h-1/2">
                  <div className="flex flex-col items-center bg-gray-800 p-4 rounded-full shadow-md">
                    <FaNodeJs className="text-3xl text-[#1bf522]" />
                    <p className="mt-2 text-center">Node.js</p>
                  </div>
                </div>
              </div>
              {/* Fourth row */}
              <div className="flex justify-between items-center w-full h-full rotate-45 gap-8">
                <div className="flex justify-center items-center w-1/2 h-1/2">
                  <div className="flex flex-col items-center bg-gray-800 p-4 rounded-full shadow-md">
                    <SiMongodb className="text-3xl text-[#1bf522]" />
                    <p className="mt-2 text-center">MongoDB</p>
                  </div>
                </div>
                <div className="flex justify-center items-center w-1/2 h-1/2">
                  <div className="flex flex-col items-center bg-gray-800 p-4 rounded-full shadow-md">
                    <BiLogoPostgresql className="text-3xl text-[#1b81f5]" />
                    <p className="mt-2 text-center">PostgreSQL</p>
                  </div>
                </div>
              </div>
              {/* Center Skill */}
              <div className=" flex flex-col items-center bg-gray-800 p-4 rounded-full shadow-md rotate-45">
                <PiFileSqlLight className="text-3xl text-[#1f1f1f]" />
                <p className="mt-2 text-center text-white">SQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
