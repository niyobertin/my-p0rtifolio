import React from "react";
import { ImHtmlFive } from "react-icons/im";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCss3 } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { PiFileSqlLight } from "react-icons/pi";

const SkillSection: React.FC = () => {
  return (
    <div className="w-full pt-24" id="skills">
      <div className="ml-[4%] mr-[4%]">
        <h1 className="flex items-center text-white font-bold text-xl justify-center pb-4">
          SKILLS
        </h1>

        <div className="flex justify-center">
          {/* Container for the circular ring */}
          <div className="relative lg:w-96 lg:h-96 w-72 h-72 sm:w-80 sm:h-80">
            {/* Center Skill */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center bg-gray-800 p-4 rounded-full shadow-md z-10">
                <PiFileSqlLight className="text-3xl text-[#1f1f1f]" />
                <p className="mt-2 text-center text-white">SQL</p>
              </div>
            </div>

            {/* Skills positioned in a circular ring */}
            {[
              {
                icon: <ImHtmlFive className="text-3xl text-[#d4420d]" />,
                label: "HTML",
                angle: 0,
              },
              {
                icon: <SiCss3 className="text-3xl text-[#381bf5]" />,
                label: "CSS",
                angle: 45,
              },
              {
                icon: <IoLogoJavascript className="text-3xl text-[#f5ee1b]" />,
                label: "JavaScript",
                angle: 90,
              },
              {
                icon: <SiTypescript className="text-3xl text-[#1b88f5]" />,
                label: "TypeScript",
                angle: 135,
              },
              {
                icon: <FaReact className="text-3xl text-[#1bcdf5]" />,
                label: "React",
                angle: 180,
              },
              {
                icon: <FaNodeJs className="text-3xl text-[#1bf522]" />,
                label: "Node.js",
                angle: 225,
              },
              {
                icon: <SiMongodb className="text-3xl text-[#1bf522]" />,
                label: "MongoDB",
                angle: 270,
              },
              {
                icon: <BiLogoPostgresql className="text-3xl text-[#1b81f5]" />,
                label: "PostgreSQL",
                angle: 315,
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="absolute inset-0 flex items-center justify-center transform"
              >
                <div
                  className={`
      flex flex-col items-center bg-gray-800 p-4 rounded-full shadow-md
      ${
        skill.angle === 0 &&
        "translate-x-24 sm:translate-x-28 lg:translate-x-40"
      }
      ${
        skill.angle === 45 &&
        "translate-x-16 translate-y-16 sm:translate-x-20 sm:translate-y-20 lg:translate-x-28 lg:translate-y-28"
      }
      ${
        skill.angle === 90 &&
        "translate-y-24 sm:translate-y-28 lg:translate-y-40"
      }
      ${
        skill.angle === 135 &&
        "-translate-x-16 translate-y-16 sm:-translate-x-20 sm:translate-y-20 lg:-translate-x-28 lg:translate-y-28"
      }
      ${
        skill.angle === 180 &&
        "-translate-x-24 sm:-translate-x-28 lg:-translate-x-40"
      }
      ${
        skill.angle === 225 &&
        "-translate-x-16 -translate-y-16 sm:-translate-x-20 sm:-translate-y-20 lg:-translate-x-28 lg:-translate-y-28"
      }
      ${
        skill.angle === 270 &&
        "-translate-y-24 sm:-translate-y-28 lg:-translate-y-40"
      }
      ${
        skill.angle === 315 &&
        "translate-x-16 -translate-y-16 sm:translate-x-20 sm:-translate-y-20 lg:translate-x-28 lg:-translate-y-28"
      }
    `}
                >
                  {skill.icon}
                  <p className="mt-2 text-center">{skill.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
