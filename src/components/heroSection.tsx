import profileImage from '../assets/onduty.jpeg';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const HeroSection = () => {
    // Animation controls for different elements
    const controlsGreeting = useAnimation();
    const controlsName = useAnimation();
    const controlsDescription = useAnimation();

    // Animation for startup
    useEffect(() => {
        controlsGreeting.start({ opacity: 1, y: 0 });
        controlsName.start({ opacity: 1, y: 0 });
        controlsDescription.start({ opacity: 1, y: 0 });
    }, [controlsGreeting, controlsName, controlsDescription]);

    const handleScroll = () => {
        const scrollY = window.scrollY;

        // Animate based on scroll position
        if (scrollY > 0) {
            controlsGreeting.start({ opacity: 0.5, y: -20 });
            controlsName.start({ opacity: 0.5, y: -20 });
            controlsDescription.start({ opacity: 0.5, y: -20 });
        } else {
            controlsGreeting.start({ opacity: 1, y: 0 });
            controlsName.start({ opacity: 1, y: 0 });
            controlsDescription.start({ opacity: 1, y: 0 });
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className="relative text-white w-full h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${profileImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-black opacity-70"></div>

            <div className="relative z-10 w-[90%] sm:w-[70%] text-center sm:text-left top-10 sm:top-0">
                <motion.p
                    className='pb-3 text-lg'
                    initial={{ opacity: 0, y: -30 }} 
                    animate={controlsGreeting} 
                    transition={{ duration: 0.5, delay: 0.2 }} 
                >
                    Hello,
                </motion.p>

                <motion.h1
                    className='pb-3 sm:text-4xl text-medium font-extrabold'
                    initial={{ opacity: 0, y: -30 }} 
                    animate={controlsName}
                    transition={{ duration: 0.5, delay: 0.6 }} 
                >
                    I'M <span className="text-yellow-300">NIYONKURU Bertin</span><br />
                    A FULLSTACK SOFTWARE ENGINEER
                </motion.h1>

                <motion.p
                    className='pt-2 sm:text-lg text-medium'
                    initial={{ opacity: 0, y: -30 }} 
                    animate={controlsDescription} 
                    transition={{ duration: 0.5, delay: 1 }} 
                >
                    I'm a Fullstack Software Engineer with a strong focus on JavaScript, specializing in 
                    front-end development using React and Redux, and back-end development with Node.js and Express.js. 
                    I have experience building APIs, managing databases like MongoDB and PostgreSQL, and delivering responsive,
                    high-quality solutions. Passionate about creating seamless 
                    user experiences and eager to contribute to diverse projects and collaborative teams.
                </motion.p>
            </div>
        </div>
    );
};

export default HeroSection;
