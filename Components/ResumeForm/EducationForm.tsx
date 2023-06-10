import React, { useState, useContext, ChangeEvent } from "react";
import { AiFillDelete } from "react-icons/ai";
import {
  EducationContext,
  EducationContextType,
  Education,
} from "../../Contexts/EducationContaxt";
import Plainbtn from "../Buttons/PlainBtn";
import Brandbtn from "../Buttons/BrandBtn";

const EducationForm: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [degree, setDegree] = useState("");
  const [sub, setSub] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState<boolean>(false);

  const educationContext = useContext<EducationContextType | null>(
    EducationContext
  );
  const { educationData = [], updateEducationData } = educationContext || {};

  const handleDelete = (idx: number) => {
    if (updateEducationData) {
      updateEducationData(educationData.filter((_, index) => index !== idx));
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
      name.trim() !== "" &&
      degree.trim() !== "" &&
      sub.trim() !== "" &&
      cgpa.trim() !== "" &&
      start.trim() !== "" &&
      end.trim() !== "" &&
      desc.trim() !== ""
    ) && isStartValid && isEndValid && isDateValid;
  };

  const handleSave = () => {
    const formValid = validateForm();

    if (formValid) {
      if (updateEducationData) {
        const obj = {
          name,
          degree,
          sub,
          cgpa,
          start,
          end,
          desc,
        };

        updateEducationData([obj, ...educationData]);
        setIsEditing(false);
        setError(false)
      }
    } else {
      setError(true);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "degree":
        setDegree(value);
        break;
      case "sub":
        setSub(value);
        break;
      case "cgpa":
        setCgpa(value);
        break;
      case "start":
        setStart(value);
        break;
      case "end":
        setEnd(value);
        break;
      case "desc":
        setDesc(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="mb-10">
      <div className="flex justify-between items-center w-full mb-6">
        <h1 className="text-2xl font-bold">Education</h1>
        <span
          className="cursor-pointer text-[#71717A] hover:text-[#1A1A1A]
            py-1 px-2 rounded-md"
          onClick={() => setIsEditing(true)}
        >
          Add
        </span>
      </div>

      {isEditing && (
        <div className="w-full relative bg-[#FAFAFA] px-10 py-6 border-2 border-[#F4F4F5] text-[#A1A1AA] rounded-2xl">
          <div className="text-black mb-3">
            <input
              type="text"
              className="w-full border border-[#E4E4E7] text-[#A1A1AA] text-sm rounded-md px-3 py-3.5"
              placeholder="Institute Name"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="w-full border border-[#E4E4E7] text-[#A1A1AA] text-sm rounded-md px-3 py-3.5"
              placeholder="Degree Name"
              name="degree"
              value={degree}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="w-full border border-[#E4E4E7] text-[#A1A1AA] text-sm rounded-md px-3 py-3.5"
              placeholder="Subject"
              name="sub"
              value={sub}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="w-full border border-[#E4E4E7] text-[#A1A1AA] text-sm rounded-md px-3 py-3.5"
              placeholder="CGPA"
              name="cgpa"
              value={cgpa}
              onChange={handleChange}
            />
          </div>

          <div className="text-sm mb-3">
            <p className="flex gap-4">
              <input
                type="text"
                className="border border-[#E4E4E7] text-[#A1A1AA] text-sm rounded-md px-3 py-3.5"
                placeholder="Start Month, Start Year"
                name="start"
                value={start}
                onChange={handleChange}
              />

              <input
                type="text"
                className="border border-[#E4E4E7] text-[#A1A1AA] text-sm rounded-md px-3 py-3.5"
                placeholder="End Month, End Year/Present"
                name="end"
                value={end}
                onChange={handleChange}
              />
            </p>
          </div>

          <div className="text-sm mb-3">
            <textarea
              className="w-full border border-[#E4E4E7] text-[#A1A1AA] text-sm rounded-md px-3 py-3.5"
              placeholder="Description"
              name="desc"
              value={desc}
              onChange={handleChange}
            ></textarea>
          </div>

          {error && (
            <div className="text-sm text-red-600 mb-3">Please input data correctly as mentioned in the form! All fields are required!</div>
          )}

          <div className="flex w-full justify-end gap-3 items-center">
            <div onClick={handleCancel}>
              <Plainbtn text="Cancel" />
            </div>
            <div onClick={handleSave}>
              <Brandbtn text="Save Changes" />
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col justify-between items-center gap-5">
        {educationData.map((item: Education, idx: number) => (
          <div
            className="w-full relative bg-[#FAFAFA] px-10 py-4 border-2 border-[#F4F4F5] text-[#A1A1AA] rounded-2xl"
            key={idx}
          >
            <AiFillDelete
              className="absolute md:top-4 md:right-10 top-0 right-0 rounded-full cursor-pointer hover:bg-zinc-300 text-2xl p-1 transition-all duration-300"
              onClick={() => handleDelete(idx)}
            />

            <div className="text-xl font-bold text-black mb-1">
              <h1>{item.name}</h1>
            </div>

            <div className="w-full flex flex-wrap justify-between items-center mb-3">
              <p className="text-md">
                {item.degree} . {item.sub} . CGPA :- {item.cgpa}
              </p>

              <p className="text-sm">
                {item.start} - {item.end}
              </p>
            </div>

            <div className="text-sm mb-5">
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationForm;
