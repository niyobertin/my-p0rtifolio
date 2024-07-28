import React from 'react';
import { ImHtmlFive } from "react-icons/im";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCss3 } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { PiFileSqlLight } from "react-icons/pi";
const SkillSection: React.FC  = () =>{

    return(
    <div className="text-white w-[100vw] top-20 z-30 relative overflow-auto pt-10">
        <div className='overflow-auto ml-[4%] mr-[4%]'>
          <h1 className='flex items-center text-yellow-300 font-bold text-xl justify-center pb-4' id='skills' >SKILLS</h1>
          <div className='flex gap-[10%]'>
            <div className=' transform rotate-90 text-2xl font-bold sm:flex hidden'>SKILLS</div>
          <div className='flex sm:justify-between justify-center flex-wrap p-2'>
          <div className='bg-[#1e1e1e] shadow-lg sm:w-[30.3%] w-[100%] p-6 gap-2 mb-4 rounded-md flex items-center justify-center hover:scale-105'>
          <ImHtmlFive className='text-2xl text-[#d4420d] '/>
          <p>HTML </p>
          </div>
          <div className='bg-[#1e1e1e] shadow-lg sm:w-[30.3%] w-[100%] p-6 gap-2 mb-4 rounded-md flex items-center justify-center hover:scale-105'>
          <IoLogoJavascript className='text-2xl text-[#f5ee1b]' />
          <p>JavaScript</p>
          </div>
          <div className='bg-[#1e1e1e] shadow-lg sm:w-[30.3%] w-[100%] p-6 gap-2 mb-4 rounded-md flex items-center justify-center hover:scale-105'>
          <SiCss3 className='text-2xl text-[#381bf5]'/>
          <p>CSS</p>
          </div>
          <div className='bg-[#1e1e1e] shadow-lg sm:w-[30.3%] w-[100%] p-6 gap-2 mb-4 rounded-md flex items-center justify-center hover:scale-105'>
          <SiTypescript className='text-2xl text-[#1b88f5]'/>
          <p>TypeScript</p>
          </div>
          <div className='bg-[#1e1e1e] shadow-lg sm:w-[30.3%] w-[100%] p-6 gap-2 mb-4 rounded-md flex items-center justify-center hover:scale-105'>
          <FaReact className='text-2xl text-[#1bcdf5]'/>
          <p>React</p>
          </div>
          <div className='bg-[#1e1e1e] shadow-lg sm:w-[30.3%] w-[100%] p-6 gap-2 mb-4 rounded-md flex items-center justify-center hover:scale-105'>
          <FaNodeJs className='text-2xl text-[#1bf522]'/>
          <p>Node.js/Express.js</p>
          </div>
          <div className='bg-[#1e1e1e] shadow-lg sm:w-[30.3%] w-[100%] p-6 gap-2 mb-4 rounded-md flex items-center justify-center hover:scale-105'>
          <SiMongodb className='text-2xl text-[#1bf522]'/>
          <p>Mongodb</p>
          </div>
          <div className='bg-[#1e1e1e] shadow-lg sm:w-[30.3%] w-[100%] p-6 gap-2 mb-4 rounded-md flex items-center justify-center hover:scale-105'>
          <BiLogoPostgresql className='text-2xl text-[#1b81f5]'/>
          <p>PostgreSQL</p>
          </div>
          <div className='bg-[#1e1e1e] shadow-lg sm:w-[30.3%] w-[100%] p-6 gap-2 mb-4 rounded-md flex items-center justify-center hover:scale-105'>
          <PiFileSqlLight className='text-2xl'/>
          <p>SQL</p>
          </div>
          </div>
     </div>    
    </div>
    </div>
)};

export default SkillSection;