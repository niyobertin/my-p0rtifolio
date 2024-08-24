import profileImage from '../assets/onduty.jpeg';

const HeroSection = () => {
    return (
        <div
            className="relative text-white w-full h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${profileImage})`,
                backgroundSize: 'cover',
                 backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div> 
            <div className="relative z-10 w-[90%] sm:w-[70%] text-center sm:text-left">
                <p className='pb-3 text-lg'>Hello,</p>
                <h1 className='pb-3 text-4xl font-extrabold'>
                    I'M <span className="text-yellow-300">NIYONKURU Bertin</span><br />
                    A FULLSTACK SOFTWARE ENGINEER
                </h1>
                <p className='pt-2 text-lg'>
                    I am a Fullstack Software Engineer with a strong focus on JavaScript, specializing in both front-end and back-end development. I create responsive, interactive user interfaces using React and Redux, and build robust server-side logic and APIs with Node.js and Express.js. With expertise in databases like MongoDB and PostgreSQL, I ensure efficient and secure data management. I am passionate about delivering high-quality software solutions that provide seamless user experiences and continuously learning new technologies. 
                    Ready to contribute to diverse projects and collaborate within a team environment.
                </p>
            </div>
        </div>
    );
};

export default HeroSection;
