import profileImage from "../assets/onduty.jpeg";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

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
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="relative text-white w-full h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${profileImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative z-10 w-[90%] sm:w-[70%] text-center sm:text-left top-10 sm:top-0">
        <motion.h1
          className="pb-3 text-center sm:text-4xl text-medium font-extrabold"
          initial={{ opacity: 0, y: -30 }}
          animate={controlsName}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h1 className="text-2xl font-bold text-blue-400">Niyonkuru Bertin</h1>
          <h2 className="text-2xl text-white mb-4">Full Stack Developer</h2>
        </motion.h1>

        <motion.p
          className="flex font-bold text-lg justify-center gap-10 pt-2 sm:text-lg text-medium"
          initial={{ opacity: 0, y: -30 }}
          animate={controlsDescription}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <p>Build</p>
          <p>|</p>
          <p>Scale </p>
          <p>|</p>
          <p>Innovate</p>
        </motion.p>
      </div>
    </div>
  );
};

export default HeroSection;
