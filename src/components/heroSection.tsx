import profileImage from '../assets/profile.jpg';
import { FaChevronRight } from "react-icons/fa";
const HeroSection = () =>{
    return(
    <div className="text-white w-[100vw] top-20 z-30 relative overflow-auto pt-10">
        <div className='flex overflow-auto ml-[4%] mr-[4%]'>
            <div className='w-[100%]'>
                <p className='pt-[0%] pb-[3%] text-lg sm:text-lg sm:text-start text-center'>Hello,</p>
                <h1 className='pb-[3%] text-xl font-extrabold sm:text-lg text-base sm:text-start text-center'>I'M <span className="text-yellow-300">NIYONKURU Bertin</span><br/>
                A FULLSTACK SOFTWARE ENGINEER
                </h1>
                <p className='sm:text-lg text-base sm:text-start text-center pt-[2%]'>
                I am a Fullstack Software Engineer with a strong focus on JavaScript, specializing in both front-end and back-end development. I create responsive, interactive user interfaces using React,Redux and  build robust server-side logic and APIs with Node.js and Express.js. With expertise in databases like MongoDB and PostgreSQL, I ensure efficient and secure data management. I am passionate about delivering high-quality software solutions that provide seamless user experiences and continuous learning new technologies. 
                Ready to contribute to diverse projects and collaborate within a team environment.
                </p>

                <p>
                    <a href="" className='flex items-center sm:pt-24 pt-8 hover:text-yellow-300 text-lg font-bold justify-center'>About <span><FaChevronRight/></span></a>
                </p>
            </div>
            <div className='w-[60%] pt-[0%] flex iterms-center justify-end h-[30rem] sm:flex hidden'>
            <img src={profileImage} alt="profile" className=" w-[70%] h-[100%]  object-cover rounded-md " />
            </div>
        </div>
    </div>
)};

export default HeroSection;