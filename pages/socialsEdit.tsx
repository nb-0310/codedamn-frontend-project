import React from "react";
import SocialsForm from "../Components/SocialsForm/SocialsForm";
import Edit from "./edit";

const SocialsEdit: React.FC = () => {
  return (
    <Edit>
      <div className="sm:ml-20 sm:mr-32 ml-2 mr-2">
        <SocialsForm />
      </div>
    </Edit>
  );
};

export default SocialsEdit;
