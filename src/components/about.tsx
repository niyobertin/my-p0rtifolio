import React from "react";
import profileImage from "../assets/onduty.jpeg";
import { RiLinkedinFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
const About: React.FC = () => {
  return (
    <div className="justify-center pt-24" id="about">
      <div>
        <h1 className="flex items-center text-white font-bold text-xl justify-center pb-4">
          ABOUT
        </h1>
      </div>
      <div className="flex items-center justify-center p-6">
        <img
          src={profileImage}
          alt="Niyonkuru Bertin"
          className="sm:flex hidden w-80 h-80 rounded-full mb-6 shadow-md"
        />
        <div className="max-w-3xl shadow-lg rounded-2xl sm:p-8 p-2 flex flex-col items-center">
          <p className="text-white text-center leading-relaxed">
            I am <b>Niyonkuru Bertin</b>, a passionate Full Stack Developer
            specializing in JavaScript and TypeScript, with expertise in both
            web and mobile development. I build scalable applications using
            React, React Native, Redux, Tailwind CSS, and Sass for intuitive and
            responsive user interfaces. On the backend, I design robust
            architectures with Node.js, Express.js, GraphQL, MongoDB, and
            PostgreSQL, implementing RESTful APIs, JWT authentication, real-time
            features with Socket.io, and microservices communication using Kafka
            to ensure seamless performance.
          </p>
          <p className="text-white text-center leading-relaxed mt-4">
            Beyond coding, I thrive in agile environments, collaborating with
            teams to develop efficient, secure, and scalable solutions. I have
            hands-on experience with Docker, GitHub Actions, CircleCI, and CI/CD
            pipelines, ensuring smooth deployment workflows. Whether optimizing
            system performance, building cross-platform mobile apps with React
            Native, or integrating DevOps practices, I am always eager to tackle
            new challenges and create impactful software solutions.
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
