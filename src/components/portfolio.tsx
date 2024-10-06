import React from 'react';
import CartItem from './common/cart';
import customeWeb from '../assets/web-app-dev-banner@2x.png'
import studentManagement from '../assets/Student-Information-Management-System.jpg';
import schoolImage from '../assets/scholl.jpeg';
import ecommerce from '../assets/ecommerce.webp';
const PortfolioSection: React.FC  = () =>{

    const portfolios = [{
        content: (
            <a href="https://niyobertin.github.io/es_nyange/pages/home.html">
                <div>
              <h3 className="text-lg font-semibold">School website</h3>
              <p className="white mt-4">This is a school website that shows historical infomation of the school and services offerd by school.
              </p>
            </div>
            </a>
        )
},
{
    content: (
     <a href="https://eagles-ec-fe-staging.vercel.app">   
     <div>
     <h3 className="text-lg font-semibold">E-commerce website</h3>
     <p className="white mt-4">I have corraborated with the team to build this e-commerce platform during Andela Techincal Leadership Program(ATLP) cohort 31.
     </p>
   </div></a>
    )
},{
    content: (
        <a href=""><div>
        <h3 className="text-lg font-semibold">Student Managment System</h3>
        <p className="white mt-4">This protifolio focuses on recoding stundents information like registration, marks and etc ...
        </p>
      </div></a>
    )
},]

    return(
    <div className="text-black w-[100vw] top-20 z-30 relative overflow-auto pt-10">
        <div className='overflow-auto ml-[4%] mr-[4%]'>
          <h1 className='flex items-center text-black font-bold text-xl justify-center pb-4' id='portfolio'>PORTFOLIO</h1>
       <div className='flex gap-10'>
          <div className="bg-[#e0e7ff] p-3 rounded-[20px]">
              {portfolios.map((item, index) => (
                <div key={index} className="w-full">
                  {item.content}
                </div>
              ))}
              <p className='p-3 text-center text-lg'>For more portfolioes vist my github page <a href="https://github.com/niyobertin" className='text-blue-500 font-bold'>here...</a></p>
          </div>
          <div className='sm:block hidden'>
            <img src={customeWeb} alt="portifolio" className='object-cover'/>
          </div>
       </div>
    </div>
    </div>
)};

export default PortfolioSection;