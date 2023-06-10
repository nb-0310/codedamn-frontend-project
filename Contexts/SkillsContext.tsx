import React, { createContext, useState, ReactNode } from "react";
import { skills } from "../Constants/Constants";

interface SkillsContextType {
  skillsData: string[];
  updateSkillsData: (newData: string[]) => void;
}

const SkillsContext = createContext<SkillsContextType>({
  skillsData: [],
  updateSkillsData: () => {},
});

interface SkillsProviderProps {
  children: ReactNode;
}

const SkillsProvider: React.FC<SkillsProviderProps> = ({ children }) => {
  const [skillsData, setSkillsData] = useState<string[]>(skills);

  const updateSkillsData = (newData: string[]) => {
    setSkillsData(newData);
  };

  return (
    <SkillsContext.Provider value={{ skillsData, updateSkillsData }}>
      {children}
    </SkillsContext.Provider>
  );
};

export { SkillsContext, SkillsProvider };
