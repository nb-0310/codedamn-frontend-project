import React, { createContext, useState, ReactNode } from "react";
import { socials } from "../Constants/Constants";

export interface Socials {
  github: string;
  linkedin: string;
  facebook: string;
  instagram: string;
  dribbble: string;
  behance: string;
}

interface SocialsContextType {
  socialsData: Socials;
  updateSocialsData: (newData: Socials) => void;
}

const SocialsContext = createContext<SocialsContextType>({
  socialsData: {
    github: "",
    linkedin: "",
    facebook: "",
    instagram: "",
    dribbble: "",
    behance: "",
  },
  updateSocialsData: () => {},
});

interface SocialsProviderProps {
  children: ReactNode;
}

const SocialsProvider: React.FC<SocialsProviderProps> = ({ children }) => {
  const [socialsData, setSocialsData] = useState<Socials>(socials);

  const updateSocialsData = (newData: Socials) => {
    setSocialsData(newData);
  };

  return (
    <SocialsContext.Provider value={{ socialsData, updateSocialsData }}>
      {children}
    </SocialsContext.Provider>
  );
};

export { SocialsContext, SocialsProvider };