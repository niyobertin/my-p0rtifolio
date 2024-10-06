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
import skilsImage from '../assets/iStock-1428711812-896x504.webp';

const SkillSection: React.FC = () => {

    return (
        <div className="text-black w-[100vw] top-20 z-30 relative overflow-auto pt-10">
            <div className='overflow-auto ml-[4%] mr-[4%]'>
                <h1 className='flex items-center text-black font-bold text-xl justify-center pb-4' id='skills'>SKILLS</h1>
                <div className='flex gap-[5%] '>
                    <div className='sm:block hidden'>
                        <img src={skilsImage} alt="skills" />
                    </div>
                    <div className=' grid gap-8 grid-cols-4 bg-[#e0e7ff] p-6 rounded-[20px]'>

                        {/* Frontend Skills */}
                        <div className='col-span-4'>
                            <h2 className='text-lg font-bold pb-2'>Frontend</h2>
                            <p className='text-sm pb-4'>Technologies used for building user interfaces and client-side development.</p>
                            <div className='grid grid-cols-2 gap-4'>
                                <div className='flex gap-2'>
                                    <ImHtmlFive className='text-2xl text-[#d4420d]' />
                                    <p>HTML</p>
                                </div>
                                <div className='flex gap-2'>
                                    <SiCss3 className='text-2xl text-[#381bf5]' />
                                    <p>CSS</p>
                                </div>
                                <div className='flex gap-2'>
                                    <IoLogoJavascript className='text-2xl text-[#f5ee1b]' />
                                    <p>JavaScript</p>
                                </div>
                                <div className='flex gap-2'>
                                    <SiTypescript className='text-2xl text-[#1b88f5]' />
                                    <p>TypeScript</p>
                                </div>
                                <div className='flex gap-2'>
                                    <FaReact className='text-2xl text-[#1bcdf5]' />
                                    <p>React</p>
                                </div>
                            </div>
                        </div>

                        {/* Backend Skills */}
                        <div className='col-span-4'>
                            <h2 className='text-lg font-bold pb-2'>Backend</h2>
                            <p className='text-sm pb-4'>Technologies used for server-side development, databases, and APIs.</p>
                            <div className='grid grid-cols-2 gap-4'>
                                <div className='flex gap-2'>
                                    <FaNodeJs className='text-2xl text-[#1bf522]' />
                                    <p>Node.js/Express.js</p>
                                </div>
                                <div className='flex gap-2'>
                                    <SiMongodb className='text-2xl text-[#1bf522]' />
                                    <p>MongoDB</p>
                                </div>
                                <div className='flex gap-2'>
                                    <BiLogoPostgresql className='text-2xl text-[#1b81f5]' />
                                    <p>PostgreSQL</p>
                                </div>
                                <div className='flex gap-2'>
                                    <PiFileSqlLight className='text-2xl' />
                                    <p>SQL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SkillSection;
