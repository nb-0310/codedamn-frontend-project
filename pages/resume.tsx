import React, { useContext, useState } from "react";
import { SkillsContext } from "../Contexts/SkillsContext";
import { EducationContext, EducationContextType } from "../Contexts/EducationContaxt";
import { ExperienceContext, ExperienceContextType } from "../Contexts/ExperienceContext";
import { ProfileContext } from "../Contexts/ProfileContext";
const html = require("../Assets/Icons/html.svg") as string;
const css = require("../Assets/Icons/css.svg") as string;
const javascript = require("../Assets/Icons/javascript.svg") as string;
const react = require("../Assets/Icons/react.svg") as string;
const next = require("../Assets/Icons/next.svg") as string;
const mongo = require("../Assets/Icons/mongo.svg") as string;
const node = require("../Assets/Icons/node.svg") as string;
import Image from "next/image";
import Home from "./home";


const Resume: React.FC = () => {
  const { skillsData, updateSkillsData } = useContext(SkillsContext);
  const { profileData, updateProfileData } = useContext(ProfileContext);

  const educationContext = useContext<EducationContextType | null>(
    EducationContext
  );
  const { educationData = [], updateEducationData } = educationContext || {};
  
  const experienceContext = useContext<ExperienceContextType | null>(
    ExperienceContext
  );
  const { experienceData = [], updateExperienceData } = experienceContext || {};

  const [showMore, setShowMore] = useState(false);

  const handleReadMore = () => {
    setShowMore(!showMore);
  };

  const techImageMap: Record<string, any> = {
    HTML: html,
    CSS: css,
    Javascript: javascript,
    React: react,
    "Mongo DB": mongo,
    "Node JS": node,
    "Next JS": next,
  };

  return (
    <Home>
      <div className="w-full">
        <div className="text-center text-2xl font-bold text-[#18181B] mb-6">
          <h1>About me</h1>
        </div>

        <div className="p-6 md:pr-52 bg-[#FAFAFA] border border-zinc-100 rounded-xl">
          <p className="font-medium text-[#18181B] md:text-base text-sm mb-6">
            {showMore ? profileData.about : `${profileData.about.slice(0, 500)}...`}
            {showMore ? (
              <div>
                <br />
                <br />
                <button
                  className="bg-[#F4F4F5] md:px-4 md:py-2.5 md:text-base text-sm px-2 py-1 rounded-md font-semibold text-[#18181B]"
                  onClick={handleReadMore}
                >
                  Read Less
                </button>
              </div>
            ) : (
              <div>
                <br />
                <br />
                <button
                  className="bg-[#F4F4F5] md:px-4 md:py-2.5 md:text-base text-sm px-2 py-1 rounded-md font-semibold text-[#18181B]"
                  onClick={handleReadMore}
                >
                  Read More
                </button>
              </div>
            )}
          </p>
        </div>
      </div>

      <div className="w-full">
        <div className="text-center text-2xl font-bold text-[#18181B] mb-6">
          <h1>Work experience</h1>
        </div>

        <div className="flex flex-col justify-between items-center gap-5">
          {experienceData.map((item) => (
            <div className="w-full relative bg-[#FAFAFA] px-10 py-4 border-2 border-[#F4F4F5] text-[#A1A1AA] rounded-2xl">
              <div className="text-xl font-bold text-black mb-1">
                <h1>{item.title}</h1>
              </div>

              <div className="w-full flex flex-wrap gap-2 justify-between items-center mb-3">
                <div className="text-md">
                  <p>{item.company}</p>
                </div>

                <div className="text-sm">
                  <p>
                    {item.start} - {item.end}
                  </p>
                </div>
              </div>

              <div className="text-sm mb-5">
                <p>{item.desc}</p>
              </div>

              <div className="text-sm text-[#4F46E5]">
                <ul className="list-none flex flex-wrap gap-4 items-center">
                  {item.tech.map((i) => (
                    <li className="bg-[#EEF2FF] md:px-4 px-2 py-1 rounded-full">
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full mt-10 mb-10">
        <div className="text-2xl font-bold text-[#18181B] mb-6">
          <h1>Education</h1>
        </div>

        <div className="flex flex-col justify-between items-center gap-5">
          {educationData.map((item) => (
            <div className="w-full relative bg-[#FAFAFA] px-10 py-4 border-2 border-[#F4F4F5] text-[#A1A1AA] rounded-2xl">
              <div className="text-xl font-bold text-black mb-1">
                <h1>{item.name}</h1>
              </div>

              <div className="w-full flex gap-3 flex-wrap justify-between items-center mb-3">
                <p className="md:text-md text-sm">
                  {item.degree} . {item.sub} . CGPA :- {item.cgpa}
                </p>

                <p className="text-sm">
                  {item.start} - {item.end}
                </p>
              </div>

              <div className="text-sm mb-5">
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full">
        <div className="text-2xl font-bold text-[#18181B] mb-6">
          <h1>Tech Skills</h1>
        </div>

        <div className="flex gap-4 items-center">
          <div className="flex flex-wrap gap-4 items-center text-sm">
            {skillsData.length > 0 &&
              skillsData.map((item) => (
                <div className="py-2 px-3 bg-[#FAFAFA] rounded-md border border-zinc-100 font-semibold flex items-center gap-2.5">
                  <Image src={techImageMap[item]} alt="tech" />
                  {item}
                </div>
              ))}
          </div>
        </div>
      </div>
    </Home>
  );
};

export default Resume;
