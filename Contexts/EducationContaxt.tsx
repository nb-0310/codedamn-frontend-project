import React, { createContext, useState, ReactNode } from "react";
import { education } from "../Constants/Constants";

export interface Education {
  name: string;
  degree: string;
  sub: string;
  cgpa: string;
  start: string;
  end: string;
  desc: string;
}

export interface EducationContextType {
  educationData: Education[];
  updateEducationData: (newData: Education[]) => void;
}

interface EducationProviderProps {
  children: ReactNode;
}

const EducationContext = createContext<EducationContextType | null>(null);

const EducationProvider: React.FC<EducationProviderProps> = ({ children }) => {
  const [educationData, setEducationData] = useState<Education[]>(education);

  const updateEducationData = (newData: Education[]) => {
    setEducationData(newData);
  };

  return (
    <EducationContext.Provider value={{ educationData, updateEducationData }}>
      {children}
    </EducationContext.Provider>
  );
};

export { EducationContext, EducationProvider };
