import React, { useContext } from "react";
import Home from "./home";
import ProjectsDisplayCard from "../Components/Projects/ProjectsDisplayCard";
import PlaygroundsDisplayCard from "../Components/Playgrounds/PlaygroundsDisplayCard";
import Image from "next/image";
import Link from "next/link";
import { ProjectsContext } from "../Contexts/ProjectsContext";
import { PlaygroundContext } from "../Contexts/PlaygroundContext";
const thunder = require("../Assets/Stats/thunder.svg") as string;
const cup = require("../Assets/Stats/cup.svg") as string;
const star = require("../Assets/Stats/star.svg") as string;
const heart = require("../Assets/Stats/heart.svg") as string;

const Portfolio: React.FC = () => {
  const { projectsData, updateProjectsData } = useContext(ProjectsContext);
  const { playgroundData, updatePlaygroundData } = useContext(PlaygroundContext);

  return (
      <Home>
        <div className="w-full">
          <div className="text-2xl font-bold text-[#18181B] mb-6">
            <h1>Stats</h1>
          </div>

          <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 mb-10">
            <div className="px-24 py-3 bg-[#FAFAFA] border border-zinc-100 rounded-xl relative">
              <h1 className="text-xl font-bold text-[#18181B]">2</h1>
              <p className="text-sm text-[#71717A]">Longest Streak</p>
              <Image
                src={thunder}
                alt=""
                className="absolute left-6 top-[50%] translate-y-[-50%]"
              />
            </div>

            <div className="px-24 py-3 bg-[#FAFAFA] border border-zinc-100 rounded-xl relative">
              <h1 className="text-xl font-bold text-[#18181B]">1200</h1>
              <p className="text-sm text-[#71717A]">Experience Points</p>
              <Image
                src={star}
                alt=""
                className="absolute left-6 top-[50%] translate-y-[-50%]"
              />
            </div>

            <div className="px-24 py-3 bg-[#FAFAFA] border border-zinc-100 rounded-xl relative">
              <h1 className="text-xl font-bold text-[#18181B]">Novice</h1>
              <p className="text-sm text-[#71717A]">Current League</p>
              <Image
                src={cup}
                alt=""
                className="absolute left-6 top-[50%] translate-y-[-50%]"
              />
            </div>

            <div className="px-24 py-3 bg-[#FAFAFA] border border-zinc-100 rounded-xl relative">
              <h1 className="text-xl font-bold text-[#18181B]">120</h1>
              <p className="text-sm text-[#71717A]">Karma Points</p>
              <Image
                src={heart}
                alt=""
                className="absolute left-6 top-[50%] translate-y-[-50%]"
              />
            </div>
          </div>

          <div>
            <div className="w-full flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-[#18181B]">
                Projects
              </h1>

              <Link
                href="/portfolioEdit"
                className="text-[#4F46E5] md:text-base text-sm font-semibold cursor-pointer"
              >
                Create new project
              </Link>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
              {projectsData.map((item) => (
                <div>
                  <ProjectsDisplayCard
                    title={item.title}
                    demo={item.demo}
                    tech={item.tech}
                    img={item.img ?? ""}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-11">
            <div className="flex justify-between w-full items-center mb-6">
              <h1 className="text-2xl font-bold text-[#18181B]">
                Playgrounds
              </h1>

              <Link
                href="/portfolioEdit"
                className="text-[#4F46E5] md:text-base text-sm font-semibold cursor-pointer"
              >
                Create new playground
              </Link>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
              {playgroundData.map((item) => (
                <div>
                  <PlaygroundsDisplayCard title={item.title} tech={item.tech} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Home>
  );
};

export default Portfolio;
