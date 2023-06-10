import React, { useContext, useState, useRef, ChangeEvent } from "react";
import { BsBookmarks } from "react-icons/bs";
import { SkillsContext } from "../../Contexts/SkillsContext";
import Brandbtn from "../Buttons/BrandBtn";
import { ProfileContext } from "../../Contexts/ProfileContext";
import Link from "next/link";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineDribbble } from "react-icons/ai";
import { AiOutlineBehance } from "react-icons/ai";
import { SocialsContext } from "../../Contexts/SocialsContext";

const pfp = require("../../Assets/Navbar/pfp.gif") as string;
const profile5 = require("../../Assets/Navbar/profile5.svg") as string;
const Location = require("../../Assets/Icons/location.svg") as string;
const bg = require("../../Assets/cover-bg.gif") as string;
const edit = require("../../Assets/edit.svg") as string;

interface ProfileHeaderProps {}

const ProfileHeader: React.FC<ProfileHeaderProps> = () => {
  const { profileData, updateProfileData } = useContext(ProfileContext);
  const { skillsData, updateSkillsData } = useContext(SkillsContext);
  const { socialsData, updateSocialsData } = useContext(SocialsContext);

  const [img, setImg] = useState<File | null>(null);

  const imgref = useRef<HTMLInputElement>(null);

  const handleImageUpload = () => {
    if (imgref.current) {
      imgref.current.click();
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImg(e.target.files[0]);
      profileData.cover = URL.createObjectURL(e.target.files[0]);
    }
  };

  return (
    <div>
      <div className="w-full h-44 relative border rounded-t-xl">
        <Image
          src={
            profileData.cover !== ""
              ? profileData.cover
              : img
              ? URL.createObjectURL(img)
              : bg
          }
          fill={true}
          className="w-full h-full object-cover rounded-t-xl"
          alt="cover"
        />
        <Image
          src={edit}
          className="absolute top-6 right-6 cursor-pointer"
          onClick={handleImageUpload}
          alt="edit-cover"
        />
        <input
          type="file"
          ref={imgref}
          className="hidden"
          onChange={handleImageChange}
        />
        <div className="md:w-36 md:h-36 w-24 h-24 rounded-full border border-white absolute top-[50%] left-6">
          <div className="md:w-36 md:h-36 w-24 h-24 rounded-full overflow-hidden border border-white">
            <Image
              src={profileData.img !== "" ? profileData.img : pfp}
              alt="pfp"
              className="w-full h-full object-cover"
              fill={true}
            />
          </div>
          <div className="sm:w-20 sm:h-20 w-16 h-16 absolute -right-5 -bottom-5">
            <Image
              src={profile5}
              alt="5"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-[48%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-bold text-lg">
              5
            </div>
          </div>
        </div>
      </div>

      <div className="md:pl-48 pt-6 md:pr-6 pb-8 pl-8 pr-8 border border-zinc-200 rounded-b-xl">
        <div className="w-full flex sm:gap-3 gap-5 items-center mb-2">
          <h1 className="md:text-3xl sm:text-2xl text-md font-bold text-[#18181B]">
            {profileData.name}
          </h1>
          <div className="md:px-3 md:py-0.5 px-1.5 py-0.5 md:text-base text-xs font-semibold bg-[#BEF264] rounded-md text-[#18181B]">
            Pro
          </div>
          <div className="md:px-3 md:py-0.5 px-1.5 py-0.5 md:text-base text-xs font-semibold bg-[#E0F2FE] rounded-md text-[#075985]">
            Looking for job
          </div>
        </div>

        <div className="text-[#71717A] md:text-base text-xs mb-2">
          Fullstack dev at codedamn | Harvard 22
        </div>

        <div className="flex gap-1.5 items-center mb-8">
          <Image src={Location} alt="location" />
          <span className="text-[#A1A1AA] md:text-base text-xs">
            Mumbai, India
          </span>
        </div>

        <div className="w-full relative before:absolute before:bg-zinc-100 before:w-full before:h-0.5 before:-bottom-8 mb-14">
          <ul className="flex gap-3 flex-wrap">
            {skillsData.map((item) => (
              <li
                className="md:px-3 md:py-2 px-2 py-0.5 md:text-base text-xs bg-[#F4F4F5] rounded-md text-[#18181B] font-semibold"
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full flex justify-between md:gap-5 gap-5 items-center">
          <div className="w-full flex md:gap-3 gap-1 items-center">
            <a
              href={socialsData.github}
              target="_blank"
              className="md:p-2 p-0.5 rounded-lg border-2 border-zinc-200"
            >
              <AiFillGithub className="w-full h-full object-cover" />
            </a>

            <a
              href={socialsData.linkedin}
              target="_blank"
              className="md:p-2 p-0.5 rounded-lg border-2 border-zinc-200"
            >
              <AiFillLinkedin className="w-full h-full object-cover" />
            </a>

            <a
              href={socialsData.facebook}
              target="_blank"
              className="md:p-2 p-0.5 rounded-lg border-2 border-zinc-200"
            >
              <AiFillFacebook className="w-full h-full object-cover" />
            </a>

            <a
              href={socialsData.instagram}
              target="_blank"
              className="md:p-2 p-0.5 rounded-lg border-2 border-zinc-200"
            >
              <AiOutlineInstagram className="w-full h-full object-cover" />
            </a>

            <a
              href={socialsData.dribbble}
              target="_blank"
              className="md:p-2 p-0.5 rounded-lg border-2 border-zinc-200"
            >
              <AiOutlineDribbble className="w-full h-full object-cover" />
            </a>

            <a
              href={socialsData.behance}
              target="_blank"
              className="md:p-2 p-0.5 rounded-lg border-2 border-zinc-200"
            >
              <AiOutlineBehance className="w-full h-full object-cover" />
            </a>
          </div>

          <div className="flex md:gap-4 gap-2 items-center">
            <div className="md:p-4 p-0.5 bg-[#F4F4F5] rounded-lg font-bold">
              <BsBookmarks className="font-bold" />
            </div>

            <div>
              <Brandbtn text="Contact" />
            </div>
          </div>
        </div>
      </div>

      <div className="border border-zinc-200 rounded-2xl mt-10 flex md:gap-6 gap-4 md:px-6 px-3 md:py-2 py-1 mb-10">
        <Link href="/">
          <button className="md:px-3 md:py-2 px-2 py-1 rounded-md md:text-sm text-xs bg-[#F4F4F5] text-[#3F3F46] font-medium">
            Portfolio
          </button>
        </Link>

        <Link href="/resume">
          <button className="md:px-3 md:py-2 px-2 py-1 rounded-md md:text-sm text-xs bg-[#F4F4F5] text-[#3F3F46] font-medium">
            Resume
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileHeader;
