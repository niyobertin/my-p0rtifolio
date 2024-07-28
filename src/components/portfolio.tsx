import React from 'react';
import CartItem from './common/cart';
import studentManagement from '../assets/Student-Information-Management-System.jpg';
import schoolImage from '../assets/scholl.jpeg';
import ecommerce from '../assets/ecommerce.webp';
const PortfolioSection: React.FC  = () =>{

    const portfolios = [{
        image:schoolImage,
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
    image:ecommerce,
    content: (
     <a href="https://eagles-ec-fe-staging.vercel.app">   
     <div>
     <h3 className="text-lg font-semibold">E-commerce website</h3>
     <p className="white mt-4">I have corraborated with the team to build this e-commerce platform duting Andela Techincal Leadership Program(ATLP) cohort 31.
     </p>
   </div></a>
    )
},{
    image:studentManagement,
    content: (
        <a href=""><div>
        <h3 className="text-lg font-semibold">Student Managment System</h3>
        <p className="white mt-4">This protifolio focuses on recoding stundents information like registration, marks and etc ...
        </p>
      </div></a>
    )
},]

    return(
    <div className="text-white w-[100vw] top-20 z-30 relative overflow-auto pt-10">
        <div className='overflow-auto ml-[4%] mr-[4%]'>
          <h1 className='flex items-center text-yellow-300 font-bold text-xl justify-center pb-4' id='portfolio'>PORTFOLIO</h1>
          <div className="sm:flex hidden overflow-hidden gap-4  justfay-center items-center">
          {portfolios.map((item, index) => (
            <div key={index} className="w-1/4 flex-shrink-0 ">
              <CartItem image={item.image} content={item.content} />
            </div>
          ))}
          <div className='transform rotate-90 text-2xl font-bold sm:flex hidden'>PORTFOLIOS</div>
      </div>
      <div className="lg:hidden">
     <div className="flex flex-col ">
        {portfolios.map((item, index) => (
          <div key={index} className="mb-3">
            <CartItem image={item.image} content={item.content} />
          </div>
        ))}
      </div>
     </div>
      <p className='p-3 text-center text-lg'>For more portfolioes vist my github page <a href="https://github.com/niyobertin" className='text-yellow-300 font-bold'>here...</a></p>
    </div>
    </div>
)};

export default PortfolioSection;