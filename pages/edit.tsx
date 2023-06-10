import React, { ReactNode } from "react";
import Sidebar from "../Components/Sidebar/Sidebar";

interface EditProps {
  children: ReactNode;
}

const Edit: React.FC<EditProps> = ({ children }) => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Edit;
