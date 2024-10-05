import React, { useEffect, useRef } from 'react';
import service from '../assets/software-development.png';
import { motion, useAnimation } from 'framer-motion';

const ServiceSection: React.FC = () => {
    const controlsServiceItem = useAnimation();
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Start the animation when the section comes into view
                        controlsServiceItem.start({ opacity: 1, y: 0 });
                    } else {
                        // Optionally reverse the animation when leaving the view
                        controlsServiceItem.start({ opacity: 0, y: 50 });
                    }
                });
            },
            {
                threshold: 0.2, // Trigger when 20% of the section is in view
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        // Cleanup the observer when the component unmounts
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [controlsServiceItem]);

    const services = [
        {
            content: (
                <div>
                    <h3 className="text-lg font-semibold">UI/UX Design</h3>
                    <p className="white mt-1">
                        Creating user-friendly and aesthetically pleasing interfaces and improving user experience.
                    </p>
                </div>
            )
        },
        {
            content: (
                <div>
                    <h3 className="text-lg font-semibold">Web Development</h3>
                    <p className="mt-1">
                        Building and maintaining websites and web applications, including front-end and back-end development.
                    </p>
                </div>
            )
        },
        {
            content: (
                <div>
                    <h3 className="text-lg font-semibold">API Development and Integration</h3>
                    <p className="mt-1">
                        Designing and managing cloud-based solutions, including cloud migration, scaling, and cost optimization.
                    </p>
                </div>
            )
        },
        {
            content: (
                <div>
                    <h3 className="text-lg font-semibold">Database Design and Management</h3>
                    <p className="mt-1">
                        Designing, implementing, and maintaining databases to ensure data integrity, security, and performance.
                    </p>
                </div>
            )
        },
        {
            content: (
                <div>
                    <h3 className="text-lg font-semibold">DevOps Services</h3>
                    <p className="mt-1">
                        Implementing and managing continuous integration/continuous deployment (CI/CD) pipelines, cloud infrastructure, and automated testing.
                    </p>
                </div>
            )
        },
    ];

    return (
        <div
            ref={sectionRef} 
            id="service-section"
            className="text-black w-[100vw] top-20 z-30 relative pt-4"
        >
            <h1 className="flex items-center text-black font-bold text-xl justify-center pb-4" id="service">
                SERVICE
            </h1>
            <div className='flex gap-4'>
                <div className='ml-[4%] sm:block hidden'>
                    <img src={service} alt="service" />
                </div>
                <div className="mr-[4%]">

                    {/* Grid Layout for Services */}
                    <div className="grid">
                        {services.map((item, index) => (
                            <motion.div
                                key={index}
                                className="p-2"
                                initial={{ opacity: 0, y: 50 }}
                                animate={controlsServiceItem}
                                transition={{ duration: 0.5, delay: index * 0.3 }}
                            >
                                {item.content}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;
