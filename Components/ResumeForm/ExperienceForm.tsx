import React, { useContext, useState, ChangeEvent, KeyboardEvent } from "react";
import {
  ExperienceContext,
  ExperienceContextType,
  Experience,
} from "../../Contexts/ExperienceContext";
import { AiFillDelete } from "react-icons/ai";
import Plainbtn from "../Buttons/PlainBtn";
import Brandbtn from "../Buttons/BrandBtn";

const ExperienceForm = (): JSX.Element => {
  const [isEditing, setIsEditing] = useState(false);
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [desc, setDesc] = useState("");
  const [tech, setTech] = useState<string[]>([]);
  const [addTech, setAddTech] = useState(false);
  const [error, setError] = useState(false);

  const experienceContext = useContext<ExperienceContextType | null>(
    ExperienceContext
  );
  const { experienceData = [], updateExperienceData } = experienceContext || {};

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setTech([...tech, event.currentTarget.value]);
    }
  };

  const handleDelete = (idx: number) => {
    if (updateExperienceData) {
      updateExperienceData(experienceData.filter((_, index) => index !== idx));
    }
  };

  const validateForm = () => {
    const dateRegex = /^[a-zA-Z]+\s*,\s*\d{4}$/;
    const isStartValid = dateRegex.test(start);
    const isEndValid = dateRegex.test(end);

    const startDate = new Date(start);
    const endDate = new Date(end);
    const isDateValid = startDate <= endDate;

    return (
      position.trim() !== "" &&
      company.trim() !== "" &&
      start.trim() !== "" &&
      end.trim() !== "" &&
      desc.trim() !== "" &&
      tech.length > 0 &&
      isStartValid &&
      isEndValid &&
      isDateValid
    );
  };

  const handleSave = () => {
    const formValid = validateForm();

    if (formValid) {
      if (updateExperienceData && validateForm()) {
        const obj = {
          title: position,
          company: company,
          desc,
          start,
          end,
          tech: tech,
        };
        updateExperienceData([obj, ...experienceData]);
        setIsEditing(false);
        setError(false);
      }
    } else {
      setError(true);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="mb-10">
      <div className="flex justify-between items-center w-full mb-6">
        <h1 className="text-2xl font-bold">Experience</h1>
        <span
          className="cursor-pointer text-[#71717A] hover:text-[#1A1A1A]
            py-1 px-2 rounded-md"
          onClick={() => {
            setIsEditing(true);
          }}
        >
          Add
        </span>
      </div>

      <div className="flex flex-col justify-between items-center gap-5">
        {isEditing && (
          <div className="w-full relative bg-[#FAFAFA] px-10 py-4 border-2 border-[#F4F4F5] text-[#A1A1AA] rounded-2xl">
            <div className="text-black mb-3">
              <input
                type="text"
                className="w-full border border-[#E4E4E7] text-[#A1A1AA] text-sm rounded-md px-3 py-3.5"
                placeholder="Position"
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setPosition(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="w-full border border-[#E4E4E7] text-[#A1A1AA] text-sm rounded-md px-3 py-3.5"
                placeholder="Company Name"
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setCompany(e.target.value);
                }}
              />
            </div>

            <div className="text-sm mb-3">
              <p className="flex gap-4">
                <input
                  type="text"
                  className="border border-[#E4E4E7] text-[#A1A1AA] text-sm rounded-md px-3 py-3.5"
                  placeholder="Start Month, Start Year"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setStart(e.target.value);
                  }}
                />

                <input
                  type="text"
                  className="border border-[#E4E4E7] text-[#A1A1AA] text-sm rounded-md px-3 py-3.5"
                  placeholder="End Month, End Year/Present"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setEnd(e.target.value);
                  }}
                />
              </p>
            </div>

            <div className="text-sm mb-5">
              <textarea
                className="w-full border border-[#E4E4E7] text-[#A1A1AA] text-sm rounded-md px-3 py-3.5"
                placeholder="Description"
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                  setDesc(e.target.value);
                }}
              ></textarea>
            </div>

            <div className="text-sm mb-3">
              Click '+', enter the tech, and press 'Enter'
            </div>

            <div className="flex gap-4 items-center mb-3">
              <div className="flex gap-4 items-center text-sm text-[#4F46E5]">
                {tech.length > 0 &&
                  tech.map((item, index) => (
                    <div
                      className="bg-[#EEF2FF] px-4 py-1 rounded-full"
                      key={index}
                    >
                      {item}
                    </div>
                  ))}
              </div>

              {addTech && (
                <input
                  type="text"
                  onKeyDown={handleKeyDown}
                  className="border border-[#E4E4E7] text-[#A1A1AA] text-sm rounded-md px-2 py-2"
                />
              )}
              <button
                onClick={() => {
                  setAddTech(true);
                }}
              >
                +
              </button>
            </div>

            {error && (
              <div className="text-sm text-red-600 mb-3">
                Please input data correctly as mentioned in the form! All fields
                are required!
              </div>
            )}

            <div className="flex w-full justify-end gap-3 items-center mb-5">
              <div onClick={handleCancel}>
                <Plainbtn text="Cancel" />
              </div>
              <div onClick={handleSave}>
                <Brandbtn text="Save Changes" />
              </div>
            </div>
          </div>
        )}

        {experienceData.map((item, idx) => (
          <div
            className="w-full relative bg-[#FAFAFA] md:px-10 md:py-4 px-4 py-2 border-2 border-[#F4F4F5] text-[#A1A1AA] rounded-2xl"
            key={idx}
          >
            <AiFillDelete
              className="absolute md:top-4 md:right-10 top-0 right-0 rounded-full cursor-pointer hover:bg-zinc-300 text-2xl p-1 transition-all duration-300"
              onClick={() => handleDelete(idx)}
            />
            <div className="text-xl font-bold text-black mb-1">
              <h1>{item.title}</h1>
            </div>

            <div className="w-full flex justify-between items-center mb-3">
              <div className="text-md">
                <p>{item.company}</p>
              </div>

              <div className="text-sm">
                <p>
                  {item.start} - {item.end}
                </p>
              </div>
            </div>

            <div className="text-sm mb-5">
              <p>{item.desc}</p>
            </div>

            <div className="text-sm text-[#4F46E5]">
              <ul className="list-none flex flex-wrap gap-4 items-center md:mb-0 mb-3">
                {item.tech.map((i, index) => (
                  <li
                    className="bg-[#EEF2FF] px-4 py-1 rounded-full"
                    key={index}
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceForm;
