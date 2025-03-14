import React from "react";
import profileImage from "../assets/onduty.jpeg";
import { RiLinkedinFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
const About: React.FC = () => {
  return (
    <div className="justify-center pt-6">
      <div>
        <h1
          className="flex items-center text-white font-bold text-xl justify-center pb-4"
          id="about"
        >
          ABOUT
        </h1>
      </div>
      <div className="flex items-center justify-center p-6">
        <img
          src={profileImage}
          alt="Niyonkuru Bertin"
          className="w-80 h-80 rounded-full mb-6 shadow-md"
        />
        <div className="max-w-3xl shadow-lg rounded-2xl p-8 flex flex-col items-center">
          <p className="text-white text-center leading-relaxed">
            I'm a Full Stack Developer specializing in the MERN and PERN stacks.
            I have extensive experience in frontend development using React,
            Redux, TailwindCSS, and React Native with Expo, as well as backend
            development with Node.js, Express.js, and Prisma ORM.
          </p>
          <p className="text-white text-center leading-relaxed mt-4">
            I build scalable APIs, integrate real-time features (Socket.io), and
            manage databases like MongoDB and PostgreSQL. My expertise also
            includes Dockerized deployments, microservices architecture, and
            Kafka-based event-driven systems. I'm passionate about creating
            seamless user experiences and optimizing performance.
          </p>
          <p className="text-white text-center leading-relaxed mt-8">
            Connect with me{" "}
          </p>
          <ul className="flex gap-6 mt-4">
            <li className="flex gap-2 items-center">
              <a href="https://www.linkedin.com/in/niyonkuru-bertin-35438a240">
                <span>
                  <RiLinkedinFill />
                </span>
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <a href="https://x.com/NiyonkuruBertin">
                <span>
                  <BsTwitterX />
                </span>
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <a href="https://github.com/niyobertin">
                <span>
                  <FaGithub />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
