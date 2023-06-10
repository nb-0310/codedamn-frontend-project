import React, { useState, useRef } from "react";
import { AiOutlineUser, AiOutlineLink, AiOutlineFundProjectionScreen, AiOutlineFileText } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();

  const [active, setActive] = useState("Profile");
  const profileRef = useRef<HTMLLIElement>(null);
  const socialsRef = useRef<HTMLLIElement>(null);
  const portfolioRef = useRef<HTMLLIElement>(null);
  const resumeRef = useRef<HTMLLIElement>(null);

  const handleClick = (section: string) => {
    setActive(section);
  };

  return (
    <div className="md:w-64 w-8 md:py-9 md:px-7 md:mx-10 py-5 px-1 mx-1 bg-[#FAFAFA] border-2 border-[#F4F4F5] text-[#A1A1AA] rounded-2xl overflow-hidden self-start flex-shrink-0 sticky top-10">
      <ul>
        <Link
          href="/profileEdit">
          <li
            className={`transition-colors duration-300 relative flex gap-2 items-center py-5 font-semibold cursor-pointer ${router.pathname === "/profileEdit" ? 'active' : ''}`}
            onClick={() => handleClick("Profile")}
            ref={profileRef}
          >
            <AiOutlineUser />
            <div className="md:block hidden">Profile</div>
          </li>
        </Link>

        <Link
          href="/socialsEdit">
          <li
            className={`transition-colors duration-300 relative flex gap-2 items-center py-5 font-semibold cursor-pointer ${router.pathname === "/socialsEdit" ? 'active' : ''}`}
            onClick={() => handleClick("Socials")}
            ref={socialsRef}
          >
            <AiOutlineLink />
            <div className="md:block hidden">Socials</div>
          </li>
        </Link>

        <Link
          href="/portfolioEdit">
          <li
            className={`transition-colors duration-300 relative flex gap-2 items-center py-5 font-semibold cursor-pointer ${router.pathname === "/portfolioEdit" ? 'active' : ''}`}
            onClick={() => handleClick("Portfolio")}
            ref={portfolioRef}
          >
            <AiOutlineFundProjectionScreen />
            <div className="md:block hidden">Portfolio</div>
          </li>
        </Link>

        <Link href="/resumeEdit">
          <li
            className={`transition-colors duration-300 relative flex gap-2 items-center py-5 font-semibold cursor-pointer ${router.pathname === "/resumeEdit" ? 'active' : ''}`}
            onClick={() => handleClick("Resume")}
            ref={resumeRef}
          >
            <AiOutlineFileText />
            <div className="md:block hidden">Resume</div>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
