import React from "react";
import ProfileForm from "../Components/ProfileForm/ProfileForm";
import Edit from "./edit";

const ProfileEdit: React.FC = () => {
  return (
    <Edit>
      <div className="sm:ml-20 sm:mr-32 ml-2">
        <ProfileForm />
      </div>
    </Edit>
  );
};

export default ProfileEdit;
