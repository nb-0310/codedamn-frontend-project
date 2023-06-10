import React from "react";

interface PlainbtnProps {
  text: string;
}

const Plainbtn: React.FC<PlainbtnProps> = ({ text }: PlainbtnProps) => {
  return (
    <button className="md:px-4 md:py-2.5 px-2 py-1 bg-[#F4F4F5] font-semibold md:text-sm text-xs rounded-lg outline-none">
      {text}
    </button>
  );
};

export default Plainbtn;
