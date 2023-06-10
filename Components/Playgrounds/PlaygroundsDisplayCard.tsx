import React from "react";
const html = require("../../Assets/Icons/html.svg") as string;
const javascript = require("../../Assets/Icons/javascript.svg") as string;
const react = require("../../Assets/Icons/react.svg") as string;
const next = require("../../Assets/Icons/next.svg") as string;
const mongo = require("../../Assets/Icons/mongo.svg") as string;
const node = require("../../Assets/Icons/node.svg") as string;
const profile2 = require("../../Assets/Navbar/profile2.svg") as string;
const pfp = require("../../Assets/Navbar/pfp.svg") as string;
import Image from "next/image";

interface PlaygroundsDisplayCardProps {
  title: string;
  tech: string;
}

const PlaygroundsDisplayCard: React.FC<PlaygroundsDisplayCardProps> = ({
  title,
  tech,
}) => {
  const techImageMap: Record<string, string> = {
    "HTML/CSS": html,
    Javascript: javascript,
    React: react,
    "Mongo DB": mongo,
    "Node JS": node,
    "Next JS": next,
  };

  const techImageSource = techImageMap[tech];

  return (
    <div className="p-4 flex items-center gap-5 border-2 border-[#F4F4F5] rounded-md relative bg-[#FAFAFA] hover:bg-[#EEF2FF] hover:border-[#4F46E5] hover:border-2 transition-all duration-300 cursor-default">
      <div className="w-12 self-start">
        <Image
          src={techImageSource}
          alt="html"
          className="w-full h-full object-cover"
        />
      </div>

      <div>
        <h1 className="text-lg font-bold">{title}</h1>
        <span className="text-sm text-[#71717A] flex items-center gap-2">
          {tech} <div className="w-1 h-1 bg-[#71717A] rounded-full"></div> 1 min
          ago
        </span>
        <div className="flex justify-between items-center w-full gap-10 mt-3">
          <div className="flex justify-center items-center relative">
            <div className="w-8 h-8 overflow-hidden rounded-full">
              <Image
                src={profile2}
                alt="profile2"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-8 h-8 overflow-hidden rounded-full absolute left-7 border border-white">
              <Image
                src={pfp}
                alt="profile5"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-xs text-[#71717A] w-36">
            Shared with Adam, Anna & 17 more
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaygroundsDisplayCard;
