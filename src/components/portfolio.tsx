import React from 'react';
import customeWeb from '../assets/web-app-dev-banner@2x.png'
const PortfolioSection: React.FC  = () =>{

    const portfolios = [{
        content: (
            <a href="https://nbertin-tech.vercel.app/">
                <div>
              <h3 className="text-lg font-semibold">My website </h3>
              <p className="white mb-4">Here, I showcase the skills and services I offer in software development. Additionally, I maintain a blog where you can explore a variety of tech-related topics. Feel free to like or comment on any blog post after opening and reading its content. Your feedback is always appreciated!.
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
     <p className="white mb-4">During the Andela Technical Leadership Program (ATLP), cohort 31, I collaborated with a team to build a dynamic e-commerce platform.
     This platform enables users to browse and purchase products seamlessly, offering features like product listings, shopping carts, and secure checkout. Our goal was to provide a user-friendly shopping experience while ensuring backend efficiency and scalability.
     </p>
   </div></a>
    )
},{
    content: (
        <a href="https://beta.devpulse.org"><div>
        <h3 className="text-lg font-semibold">DevPulse</h3>
        <p className="white mb-4">Pulse is a platform designed to handle ratings for the companies in the Ed-tech industries with the its first paying customer being Andela. It is currently under development using modern web technologies that prioritize speed and security. This repo holds the codebase for the frontend part of the platform which uses Reactjs javascript framework for build modern UIs.
        </p>
      </div></a>
    )
},]

    return(
    <div className="text-black w-[100vw] top-20 z-30 relative overflow-auto pt-10">
        <div className='overflow-auto ml-[4%] mr-[4%]'>
          <h1 className='flex items-center text-black font-bold text-xl justify-center pb-4' id='portfolio'>PORTFOLIO</h1>
       <div className='flex justify-between gap-10'>
          <div className="bg-[#e0e7ff] p-3 rounded-[20px] sm:w-[50%] w-full">
              {portfolios.map((item, index) => (
                <div key={index} className="w-full">
                  {item.content}
                </div>
              ))}
              <p className='p-3 text-center text-lg'>For more projects vist my github page <a href="https://github.com/niyobertin" className='text-blue-500 font-bold'>here...</a></p>
          </div>
          <div className='sm:block hidden'>
            <img src={customeWeb} alt="portifolio" className='object-cover'/>
          </div>
       </div>
    </div>
    </div>
)};

export default PortfolioSection;