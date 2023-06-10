import React, { useContext, useState } from "react";
import Plainbtn from "../Buttons/PlainBtn";
import Brandbtn from "../Buttons/BrandBtn";
import Link from "next/link";
import { SocialsContext, Socials } from "../../Contexts/SocialsContext";

interface SocialsFormState {
  git: string;
  li: string;
  fb: string;
  insta: string;
  drib: string;
  beh: string;
}

const SocialsForm = () => {
  const [git, setGit] = useState("");
  const [li, setLi] = useState("");
  const [fb, setFb] = useState("");
  const [insta, setInsta] = useState("");
  const [drib, setDrib] = useState("");
  const [beh, setBeh] = useState("");
  const { socialsData, updateSocialsData } = useContext(SocialsContext);

  const handleFormSubmit = () => {
    if (updateSocialsData) {
      const updatedData: Socials = {
        github: git,
        linkedin: li,
        facebook: fb,
        instagram: insta,
        dribbble: drib,
        behance: beh,
      };
      updateSocialsData(updatedData);
    }
  };

  return (
    <div className="w-full">
      <form>
        <div className="w-full mb-6">
          <label htmlFor="about" className="mb-1 block text-sm font-semibold">
            Github
          </label>
          <input
            type="url"
            className="w-full px-3 py-3.5 text-sm text-[##18181B] border border-zinc-200 focus:outline-none focus:border-zinc-200 rounded-lg"
            placeholder="Github profile URL"
            onChange={(e) => {
              setGit(e.target.value);
            }}
          />
        </div>

        <div className="w-full mb-6">
          <label htmlFor="about" className="mb-1 block text-sm font-semibold">
            LinkedIn
          </label>
          <input
            type="url"
            className="w-full px-3 py-3.5 text-sm text-[##18181B] border border-zinc-200 focus:outline-none focus:border-zinc-200 rounded-lg"
            placeholder="LinkedIn profile URL"
            onChange={(e) => {
              setLi(e.target.value);
            }}
          />
        </div>

        <div className="w-full mb-6">
          <label htmlFor="about" className="mb-1 block text-sm font-semibold">
            Facebook
          </label>
          <input
            type="url"
            className="w-full px-3 py-3.5 text-sm text-[##18181B] border border-zinc-200 focus:outline-none focus:border-zinc-200 rounded-lg"
            placeholder="Facebook profile URL"
            onChange={(e) => {
              setFb(e.target.value);
            }}
          />
        </div>

        <div className="w-full mb-6">
          <label htmlFor="about" className="mb-1 block text-sm font-semibold">
            Instagram
          </label>
          <input
            type="url"
            className="w-full px-3 py-3.5 text-sm text-[##18181B] border border-zinc-200 focus:outline-none focus:border-zinc-200 rounded-lg"
            placeholder="Instagram profile URL"
            onChange={(e) => {
              setInsta(e.target.value);
            }}
          />
        </div>

        <div className="w-full mb-6">
          <label htmlFor="about" className="mb-1 block text-sm font-semibold">
            Dribbble
          </label>
          <input
            type="url"
            className="w-full px-3 py-3.5 text-sm text-[##18181B] border border-zinc-200 focus:outline-none focus:border-zinc-200 rounded-lg"
            placeholder="Dribbble profile URL"
            onChange={(e) => {
              setDrib(e.target.value);
            }}
          />
        </div>

        <div className="w-full mb-6">
          <label htmlFor="about" className="mb-1 block text-sm font-semibold">
            Behance
          </label>
          <input
            type="url"
            className="w-full px-3 py-3.5 text-sm text-[##18181B] border border-zinc-200 focus:outline-none focus:border-zinc-200 rounded-lg"
            placeholder="Behance profile URL"
            onChange={(e) => {
              setBeh(e.target.value);
            }}
          />
        </div>

        <div className="flex w-full justify-end gap-3 items-center mb-32">
          <div>
            <Link href="/">
              <Plainbtn text="Cancel" />
            </Link>
          </div>

          <div onClick={handleFormSubmit}>
            <Link href="/">
              <Brandbtn text="Save Changes" />
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SocialsForm;