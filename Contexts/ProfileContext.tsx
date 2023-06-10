import React, { createContext, useState, ReactNode } from "react";
import { profile } from "../Constants/Constants";

interface Profile {
  name: string;
  about: string;
  dob: string;
  gender: string;
  prof: string;
  followers: boolean;
  xp: boolean;
  achievements: boolean;
  img: string;
  cover: string;
}

interface ProfileContextType {
  profileData: Profile;
  updateProfileData: (newData: Profile) => void;
}

const defaultProfile: Profile = profile;

const ProfileContext = createContext<ProfileContextType>({
  profileData: defaultProfile,
  updateProfileData: () => {},
});

interface ProfileProviderProps {
  children: ReactNode;
}

const ProfileProvider: React.FC<ProfileProviderProps> = ({ children }) => {
  const [profileData, setProfileData] = useState<Profile>(defaultProfile);

  const updateProfileData = (newData: Profile) => {
    setProfileData(newData);
  };

  return (
    <ProfileContext.Provider value={{ profileData, updateProfileData }}>
      {children}
    </ProfileContext.Provider>
  );
};

export { ProfileContext, ProfileProvider };
