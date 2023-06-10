import React from "react";
const html = require("../../Assets/Icons/html.svg") as string;
const javascript = require("../../Assets/Icons/javascript.svg") as string;
const react = require("../../Assets/Icons/react.svg") as string;
const next = require("../../Assets/Icons/next.svg") as string;
const mongo = require("../../Assets/Icons/mongo.svg") as string;
const node = require("../../Assets/Icons/node.svg") as string;
import Image from "next/image";

interface ProjectDisplayCardProps {
  title: string;
  demo: string;
  tech: string[];
  img: string;
}

const ProjectsDisplayCard: React.FC<ProjectDisplayCardProps> = ({
  title,
  demo,
  tech,
  img,
}) => {
  const techImageMap: Record<string, string> = {
    "HTML/CSS": html,
    Javascript: javascript,
    React: react,
    "Mongo DB": mongo,
    "Node JS": node,
    "Next JS": next,
  };

  const techImageSource1 = techImageMap[tech[0]];
  const techImageSource2 = techImageMap[tech[1]];

  return (
    <div className="p-4 border-2 border-[#F4F4F5] rounded-md relative hover:bg-[#EEF2FF] bg-[#FAFAFA] hover:border-[#4F46E5] hover:border-2 transition-all duration-300 cursor-default">
      <div className="w-full">
        <Image
          src={img}
          alt="project img"
          className="w-full h-full object-cover"
          width={300}
          height={200}
        />
      </div>

      <div className="w-full mt-5">
        <div className="w-full flex justify-between items-center">
          <a
            href={demo}
            target="_blank"
            className="font-semibold md:text-xl text-md text-[#18181B] hover:text-[#4F46E5] transition-all duration-300 cursor-pointer"
          >
            {title}
          </a>
        </div>

        <div className="mt-2 flex gap-2 items-center text-[#71717A] md:text-sm text-xs">
          <p className="flex text-[#71717A] text-sm gap-2 items-center">
            <Image src={techImageSource1} alt="tech" />
            {tech[0]}
          </p>{" "}
          <div className="w-1 h-1 bg-[#71717A] rounded-full"></div>{" "}
          <p className="flex text-[#71717A] text-sm gap-2 items-center">
            <Image src={techImageSource2} alt="tech" />
            {tech[1]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDisplayCard;
