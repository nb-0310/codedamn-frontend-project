import React, { useContext, useState, useRef, ChangeEvent } from "react";
import Checkbox from "../Checkbox/Checkbox";
import Brandbtn from "../Buttons/BrandBtn";
import Plainbtn from "../Buttons/PlainBtn";
import { ProfileContext } from "../../Contexts/ProfileContext";
import Link from "next/link";
import Image from "next/image";

const pfp = require("../../Assets/Navbar/pfp.gif") as string;

interface ProfileFormProps {}

const ProfileForm: React.FC<ProfileFormProps> = () => {
  const { profileData, updateProfileData } = useContext(ProfileContext);

  const [name, setName] = useState(profileData.name);
  const [about, setAbout] = useState(profileData.about);
  const [dob, setDob] = useState(profileData.dob);
  const [prof, setProf] = useState(profileData.prof);
  const [gender, setGender] = useState(profileData.gender);
  const [followers, setFollowers] = useState(true);
  const [xp, setXp] = useState(true);
  const [achievements, setAchievements] = useState(true);

  const [img, setImg] = useState<File | null>(null);
  const [cover, setCover] = useState(profileData.cover);

  const imgref = useRef<HTMLInputElement | null>(null);

  const handleImageUpload = () => {
    if (imgref.current) {
      imgref.current.click();
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImg(e.target.files[0]);
    }
  };

  return (
    <div>
      <div className="flex items-center h-20 gap-6 w-full">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <Image
            src={
              profileData.img !== ""
                ? profileData.img
                : img
                ? URL.createObjectURL(img)
                : pfp
            }
            alt="profile-pic"
            className="w-full h-full"
            width={24}
            height={24}
          />
        </div>
        <div>
          <div onClick={handleImageUpload}>
            <Brandbtn text="Upload new picture" />
          </div>
          <input
            type="file"
            className="hidden"
            ref={imgref}
            onChange={handleImageChange}
          />
        </div>
        <div>
          <Plainbtn text="Delete" />
        </div>
      </div>
      <form>
        <div className="w-full mb-6">
          <label htmlFor="name" className="mb-1 block text-sm font-semibold">
            Display name
          </label>
          <input
            type="text"
            className="w-full px-3 py-3.5 text-sm text-[##18181B] border border-zinc-200 focus:outline-none focus:border-zinc-200 rounded-lg"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <div className="mt-2 text-sm text-[#71717A]">
            Name entered above will be used for all issued certificates
          </div>
        </div>

        <div className="w-full mb-6">
          <label htmlFor="about" className="mb-1 block text-sm font-semibold">
            About
          </label>
          <textarea
            className="w-full px-3 py-3.5 text-sm text-[##18181B] border border-zinc-200 focus:outline-none focus:border-zinc-200 rounded-lg"
            onChange={(e) => setAbout(e.target.value)}
            value={about}
          ></textarea>
        </div>

        <div className="w-full mb-6">
          <label
            htmlFor="profession"
            className="mb-1 block text-sm font-semibold"
          >
            Profession
          </label>
          <input
            type="text"
            className="w-full px-3 py-3.5 text-sm text-[##18181B] border border-zinc-200 focus:outline-none focus:border-zinc-200 rounded-lg"
            onChange={(e) => setProf(e.target.value)}
            value={prof}
          />
        </div>

        <div className="w-full mb-6">
          <label htmlFor="dob" className="mb-1 block text-sm font-semibold">
            Date of birth
          </label>
          <input
            type="date"
            className="w-full px-3 py-3.5 text-sm text-[##18181B] border border-zinc-200 focus:outline-none focus:border-zinc-200 rounded-lg"
            onChange={(e) => {
              setDob(e.target.value);
            }}
            value={dob}
          />
        </div>

        <div className="w-full mb-6">
          <label htmlFor="gender" className="mb-1 block text-sm font-semibold">
            Gender
          </label>
          <select
            name=""
            id=""
            className="w-full px-3 py-3.5 text-sm text-[##18181B] border border-zinc-200 focus:outline-none focus:border-zinc-200 rounded-lg"
            onChange={(e) => setGender(e.target.value)}
            value={gender}
          >
            What is you gender
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </form>

      <div className="w-full mt-10">
        <div>
          <h1 className="text-xl font-bold text-[#18181B]">
            Section Visibility
          </h1>
          <div className="mt-1 text-[#71717A] sm:text-xs text-sm">
            Select which sections and content should show on your profile page.
          </div>
        </div>

        <div className="p-6 w-full">
          <div className="flex justify-between gap-6 items-center mb-4">
            <div className="w-[70%] sm:w-auto">
              <h1 className="font-bold text-[#18181B]">
                Followers and following
              </h1>
              <div className="text-[#71717A] sm:text-sm text-xs sm:w-full w-[70%]">
                Shows your followers and the users you follow on codedamn
              </div>
            </div>

            <Checkbox val={followers} setVal={setFollowers} />
          </div>

          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="font-bold text-[#18181B]">XP</h1>
              <div className="text-[#71717A] sm:text-sm text-xs sm:w-full w-[70%]">
                Shows the XP you have earned
              </div>
            </div>

            <Checkbox val={xp} setVal={setXp} />
          </div>

          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="font-bold text-[#18181B]">Achievement badges</h1>
              <div className="text-[#71717A] sm:text-sm sm:w-full w-[70%] text-xs">
                Shows your relative percentile and proficiency
              </div>
            </div>

            <Checkbox val={achievements} setVal={setAchievements} />
          </div>
        </div>

        <div className="flex w-full justify-end gap-3 items-center mb-32 sm:pr-0 pr-5">
          <Link href="/">
            <Plainbtn text="Cancel" />
          </Link>

          <div
            onClick={() => {
              const imgValue = img ? URL.createObjectURL(img) : "";

              const obj = {
                name,
                about,
                dob,
                prof,
                gender,
                followers,
                xp,
                achievements,
                img: imgValue,
                cover,
              };

              updateProfileData(obj);
            }}
          >
            <Link href="/">
              <Brandbtn text="Save Changes" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
