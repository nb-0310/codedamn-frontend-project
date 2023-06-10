import React, { useContext, useState } from "react";
import { SkillsContext } from "../../Contexts/SkillsContext";
import Plainbtn from "../Buttons/PlainBtn";
import Brandbtn from "../Buttons/BrandBtn";
import Link from "next/link";

const SkillsForm = () => {
  const [addSkills, setAddSkills] = useState(false);

  const { skillsData, updateSkillsData } = useContext(SkillsContext);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      updateSkillsData([...skillsData, event.currentTarget.value]);
    }
  };

  const handleDelete = (idx: number) => {
    updateSkillsData(skillsData.filter((_, index) => index !== idx));
  };

  return (
    <div className="mb-10">
      <div className="w-full mb-6">
        <h1 className="text-2xl font-bold">Skills</h1>
      </div>

      <div className="flex md:gap-4 gap-0 items-center">
        <div className="flex flex-wrap gap-4 items-center text-sm text-[#4F46E5]">
          {skillsData.length > 0 &&
            skillsData.map((item, idx) => (
              <div className="bg-[#EEF2FF] relative px-4 py-1 rounded-full">
                {item}

                <div
                  className="absolute bg-red-300 text-white font-bold rounded-full w-4 h-4 flex justify-center items-center text-lg -top-1 -right-1 cursor-pointer"
                  onClick={() => handleDelete(idx)}
                >
                  -
                </div>
              </div>
            ))}
        </div>

        {addSkills && (
          <input
            type="text"
            onKeyDown={handleKeyDown}
            className="border border-[#E4E4E7] text-[#A1A1AA] text-sm rounded-md px-2 py-2"
          />
        )}
        <button
          className="bg-blue-300 text-white font-bold rounded-full md:w-6 md:h-6 w-4 h-4 flex justify-center items-center text-lg cursor-pointer"
          onClick={() => {
            setAddSkills(true);
          }}
        >
          +
        </button>
      </div>

      <div className="flex w-full justify-end gap-3 items-center mt-3 mb-5">
        <Link href="/">
          <Brandbtn text="Save Changes" />
        </Link>
      </div>
    </div>
  );
};

export default SkillsForm;
