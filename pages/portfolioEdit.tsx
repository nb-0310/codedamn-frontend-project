import React from "react";
import PlaygroundForm from "../Components/PlaygroundForm/PlaygroundForm";
import ProjectsForm from "../Components/ProjectsForm/ProjectsForm";
import Edit from "./edit";

const PortfolioEdit: React.FC = () => {
  return (
    <Edit>
      <div className="md:ml-16 md:mr-28 lg:w-[660px] ml-2 mr-2">
        <PlaygroundForm />
        <ProjectsForm />
      </div>
    </Edit>
  );
};

export default PortfolioEdit;
