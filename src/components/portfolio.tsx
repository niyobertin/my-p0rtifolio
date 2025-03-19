import React from "react";
import profile from "../assets/profile.png";
import ecomerce from "../assets/eagels.png";
import devepulse from "../assets/devpurce.png";
import nzamura from "../assets/nzamura.png";
import villagetalks from "../assets/WhatsApp Image 2025-03-14 at 22.29.25.jpeg";

const PortfolioSection: React.FC = () => {
  const portfolios = [
    {
      title: "My profile",
      description:
        "Showcasing my skills and services in software development, along with a blog featuring tech-related topics.",
      image: profile,
      link: "https://nbertin-tech.vercel.app/",
    },
    {
      title: "E-commerce Website",
      description:
        "Developed during ATLP Cohort 31, this platform enables users to browse and purchase products seamlessly.",
      image: ecomerce,
      link: "https://eagles-ec-fe-staging.vercel.app",
    },
    {
      title: "DevPulse",
      description:
        "A rating platform for Ed-tech companies, initially designed for Andela, built with React.js and modern web technologies.",
      image: devepulse,
      link: "https://metron-devpulse.vercel.app",
    },
    {
      title: "Nzamura",
      description:
        "This is a digital marketing platform which has developed with the aim of publishing product to connect product owner and clients",
      image: nzamura,
      link: "https://nzamura.vercel.app/",
    },
    {
      title: "VillageTalks",
      description:
        "A mobile blogging mobile app. that help villagers to connect and share stories around.",
      image: villagetalks,
      link: "https://github.com/niyobertin/villageTalks",
    },
    {
      title: "View more..",
      description: "Visit my github account for more",
      image:
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      link: "https://github.com/niyobertin",
    },
  ];

  return (
    <div
      className="text-white w-full top-20 z-30 relative overflow-auto pt-20"
      id="portfolio"
    >
      <div className="overflow-auto mx-[4%]">
        <h1 className="flex items-center text-white font-bold text-xl justify-center pb-8 pt-8">
          PORTFOLIOS
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolios.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all"
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl font-bold">
                  {item.title}
                </div>
              </a>
              <div className="p-4">
                <p className="text-white text-sm mb-2">{item.description}</p>
                <div className="flex justify-between items-center">
                  <a
                    href={item.link}
                    className="text-blue-500 font-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
