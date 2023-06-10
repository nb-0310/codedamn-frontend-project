import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import Image from "next/image";
const profile2 = require("../../Assets/Navbar/profile2.svg") as string;
const pfp = require("../../Assets/Navbar/pfp.svg") as string;

interface ProjectCardProps {
  title: string;
  demo: string;
  tech: string[];
  img: string | null;
  contri: string[];
  onDelete: () => void;
  onEdit: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  demo,
  tech,
  img,
  contri,
  onDelete,
  onEdit,
}) => {
  return (
    <div className="md:w-80 p-4 border-2 border-[#F4F4F5] rounded-md relative hover:bg-[#EEF2FF] bg-[#FAFAFA] hover:border-[#4F46E5] hover:border-2 transition-all duration-300">
      {img && (
        <div className="w-full h-40">
          <Image
            src={img}
            alt="project img"
            className="w-full h-full object-cover"
            width={300}
            height={200}
          />
        </div>
      )}

      <div className="w-full mt-5">
        <div className="w-full flex justify-between items-center">
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#18181B] hover:text-[#4F46E5] transition-all duration-300 cursor-pointer"
          >
            {title}
          </a>

          <div className="flex gap-1">
            <BsThreeDots
              className="rounded-full cursor-pointer hover:bg-zinc-300 w-6 h-6 text-base p-1 transition-all duration-300"
              onClick={onEdit}
            />

            <AiFillDelete
              className="rounded-full cursor-pointer hover:bg-zinc-300 w-6 h-6 text-base p-1 transition-all duration-300"
              onClick={onDelete}
            />
          </div>
        </div>

        <div className="mt-2 flex gap-2 items-center text-[#71717A] text-sm">
          <p>{tech[0]}</p> . <p>{tech[1]}</p> . <p>1 min ago</p>
        </div>

        <div className="flex items-center w-full gap-10 mt-3">
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

          <div className="text-xs text-[#71717A]">
            {contri.length} Contributors
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;