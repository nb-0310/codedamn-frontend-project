import React, { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { ProfileContext } from "../../Contexts/ProfileContext";
import Link from "next/link";
import Image from "next/image";

const thunder = require("../../Assets/Navbar/thunder.svg") as string;
const bell = require("../../Assets/Navbar/bell.svg") as string;
const pfp = require("../../Assets/Navbar/pfp.gif") as string;

const Navbar: React.FC = () => {
  const { profileData, updateProfileData } = useContext(ProfileContext);

  return (
    <div className="w-full md:px-10 md:py-7 px-5 py-2 flex justify-between items-center">
      <Link href="/">
        <div className="md:text-2xl text-md font-bold">codedamn</div>
      </Link>

      <div>
        <div className="md:w-96 relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 px-3.5 py-2.5 
            border border-zinc-100 rounded-lg focus:border-zinc-100 focus:outline-none 
            text-[#71717A] font-400 text-medium
            relative"
          />

          <AiOutlineSearch className="absolute text-2xl text-[#71717A] left-2.5 top-[50%] translate-y-[-50%]" />

          <select
            name=""
            id=""
            className="absolute bg-zinc-100 text-[#71717A]
          py-1 px-2 rounded-md
          right-2.5 top-[50%] translate-y-[-50%]
          md:w-28 w-20"
          >
            <option value="Courses">Courses</option>
            <option value="Courses">Frontend</option>
            <option value="Courses">Backend</option>
            <option value="Courses">ML</option>
          </select>
        </div>
      </div>

      <div className="flex justify-between items-center gap-4">
        <div className="flex justify-between items-center">
          <Image src={thunder} alt="thunder" />
          2
        </div>
        <div>
          <Image src={bell} alt="bell-icon" />
        </div>
        <div className="relative w-10 h-10 rounded-full">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              src={profileData.img === "" ? pfp : profileData.img}
              alt="profile-pic"
              className="w-full h-full"
              width={16}
              height={16}
            />
          </div>
          <div
            className="hexagon absolute -top-1 -right-1 
          text-sm font-bold text-white
          flex justify-center items-center z-40"
          >
            5
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;