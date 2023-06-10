import React from "react";

interface CheckboxProps {
  val: boolean;
  setVal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Checkbox: React.FC<CheckboxProps> = ({ val, setVal }) => {
  return (
    <label
      className={`w-11 h-6 rounded-full relative transition-all duration-300 ${
        val ? "bg-[#4F46E5]" : "bg-[#71717A]"
      }`}
    >
      <input
        type="checkbox"
        className="sr-only peer"
        checked={val}
        onChange={() => {
          setVal(!val);
        }}
      />
      <span
        className={`w-4 h-4 rounded-full bg-white absolute top-[50%] translate-y-[-50%] transition-all duration-300 ${
          val ? "left-6" : "left-1"
        }`}
      ></span>
    </label>
  );
};

export default Checkbox;