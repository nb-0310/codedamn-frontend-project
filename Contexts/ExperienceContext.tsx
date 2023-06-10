import React, { createContext, useState, ReactNode } from "react";
import { experience } from "../Constants/Constants";

export interface Experience {
  title: string;
  company: string;
  desc: string;
  start: string;
  end: string;
  tech: string[];
}

export interface ExperienceContextType {
  experienceData: Experience[];
  updateExperienceData: (newData: Experience[]) => void;
}

const ExperienceContext = createContext<ExperienceContextType | null>(null);

interface ExperienceProviderProps {
  children: ReactNode;
}

const ExperienceProvider = ({ children }: ExperienceProviderProps) => {
  const [experienceData, setExperienceData] = useState<Experience[]>(experience);

  const updateExperienceData = (newData: Experience[]) => {
    setExperienceData(newData);
  };

  const experienceContextValue: ExperienceContextType = {
    experienceData,
    updateExperienceData
  };

  return (
    <ExperienceContext.Provider value={experienceContextValue}>
      {children}
    </ExperienceContext.Provider>
  );
};

export { ExperienceContext, ExperienceProvider };