import React from "react";
import ExperienceForm from "../Components/ResumeForm/ExperienceForm";
import EducationForm from "../Components/ResumeForm/EducationForm";
import SkillsForm from "../Components/SkillsForm/SkillsForm";
import Edit from "./edit";

const ResumeEdit: React.FC = () => {
  return (
    <Edit>
      <div className="lg:ml-20 lg:mr-32 ml-2 mr-2">
        <ExperienceForm />
        <EducationForm />
        <SkillsForm />
      </div>
    </Edit>
  );
};

export default ResumeEdit;
