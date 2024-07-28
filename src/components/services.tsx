import React, { useState } from 'react';
import CartItem from './common/cart';
import api from '../assets/api.jpeg';
import ux from '../assets/ux.jpeg';
import mobileApp from '../assets/mobileApp.jpg';
import webDev from '../assets/web_development_Z62jy4k.jpg';
import database from '../assets/databases.jpeg';
import devOps from '../assets/dev ops.png';
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";
const ServiceSection: React.FC  = () =>{

    const services = [{
        image:ux,
        content: (
            <div>
              <h3 className="text-lg font-semibold">UI/UX Design</h3>
              <p className="white mt-4">Creating user-friendly and aesthetically pleasing interfaces and improving user experience.
              </p>
            </div>
        )
},
{
    image:webDev,
    content: (
        <div>
          <h3 className="text-lg font-semibold">Web Development</h3>
          <p className="white mt-4">Building and maintaining websites and web applications, including front-end and back-end development.
          </p>
        </div>
    )
},{
    image:mobileApp,
    content: (
        <div>
          <h3 className="text-lg font-semibold">Mobile App Development</h3>
          <p className="white mt-4">Creating mobile applications for iOS and Android platforms.
          </p>
        </div>
    )
},{
    image:api,
    content: (
        <div>
          <h3 className="text-lg font-semibold">API Development and Integration</h3>
          <p className="white mt-4">Designing and managing cloud-based solutions, including cloud migration, scaling, and cost optimization.
          </p>
        </div>
    )
},
{
    image:database,
    content: (
        <div>
          <h3 className="text-lg font-semibold">Database Design and Management</h3>
          <p className="white mt-4">Designing, implementing, and maintaining databases to ensure data integrity, security, and performance.
          </p>
        </div>
    )
},
{
    image:devOps,
    content: (
        <div>
          <h3 className="text-lg font-semibold">DevOps Services</h3>
          <p className="white mt-4">Implementing and managing continuous integration/continuous deployment (CI/CD) pipelines, cloud infrastructure, and automated testing.
          </p>
        </div>
    )
},]

const [currentIndex, setCurrentIndex] = useState(0);

const handlePrev = () => {
  setCurrentIndex((prevIndex) => (prevIndex === 0 ? services.length - 1 : prevIndex - 1));
};

const handleNext = () => {
  setCurrentIndex((prevIndex) => (prevIndex === services.length - 1 ? 0 : prevIndex + 1));
};
    return(
    <div className="text-white w-[100vw] top-20 z-30 relative overflow-auto pt-10">
        <div className='overflow-auto ml-[4%] mr-[4%]'>
          <h1 className='flex items-center text-yellow-300 font-bold text-xl justify-center pb-4' id='service'>SERVICE</h1>
          <div className="overflow-hidden ">
        <div
          className="sm:flex hidden transition-transform duration-300 gap-4"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {services.map((item, index) => (
            <div key={index} className="w-1/3 flex-shrink-0">
              <CartItem image={item.image} content={item.content} />
            </div>
          ))}
        </div>
      </div>
        </div>
        <button
        className="absolute top-1/2 left-16 transform -translate-y-1/2 bg-black opacity-25  px-4 py-4 rounded-full sm:flex hidden"
        onClick={handlePrev}
      >
        <FaChevronLeft  className="text-white" />
      </button>
      <button
        className="absolute top-1/2 right-16 transform -translate-y-1/2 bg-black opacity-25 px-4 py-4 rounded-full sm:flex hidden"
        onClick={handleNext}
      >
        <FaChevronRight  className="text-white" />
      </button>
      {/* Mobile View */}
     <div className="lg:hidden">
     <div className="flex flex-col ">
        {services.map((item, index) => (
          <div key={index} className="mb-3 p-2">
            <CartItem image={item.image} content={item.content} />
          </div>
        ))}
      </div>
     </div>
    </div>
)};

export default ServiceSection;