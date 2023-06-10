import React from "react";

interface BrandbtnProps {
  text: string;
}

const Brandbtn: React.FC<BrandbtnProps> = ({ text }: BrandbtnProps) => {
  return (
    <button className="md:px-4 md:py-2.5 px-2 py-1 bg-[#4F46E5] font-semibold md:text-sm text-xs text-white rounded-lg outline-none">
      {text}
    </button>
  );
};

export default Brandbtn;