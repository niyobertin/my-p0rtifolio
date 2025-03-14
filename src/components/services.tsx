import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const ServiceSection: React.FC = () => {
  const controlsServiceItem = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controlsServiceItem.start({ opacity: 1, y: 0 });
          } else {
            controlsServiceItem.start({ opacity: 0, y: 50 });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controlsServiceItem]);

  const services = [
    {
      title: "Web Development",
      description:
        "Building and maintaining websites and web applications, including front-end and back-end development.",
    },
    {
      title: "API Development & Integration",
      description:
        "Building scalable APIs and integrating third-party services for seamless application connectivity.",
    },
    {
      title: "Database Design & Management",
      description:
        "Designing, implementing, and maintaining databases to ensure data integrity, security, and performance.",
    },
    {
      title: "DevOps Services",
      description:
        "Implementing CI/CD pipelines, cloud infrastructure management, and automated deployments.",
    },
    {
      title: "Real-Time Applications",
      description:
        "Building real-time chat, notifications, and event-driven systems.",
    },
    {
      title: "Mobile App Development",
      description:
        "Developing cross-platform mobile apps with React Native and Expo for iOS and Android.",
    },
  ];

  return (
    <div
      ref={sectionRef}
      id="service"
      className="text-white w-full top-20 z-30 relative pt-4"
    >
      <h1 className="text-center text-white font-bold text-2xl pb-6">
        SERVICES
      </h1>
      <div className="flex justify-center gap-6 ml-[4%] mr-[4%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md text-center hover:bg-gray-700 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={controlsServiceItem}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-blue-400">
                {service.title}
              </h3>
              <p className="text-gray-300 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
