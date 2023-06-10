import React, { createContext, useState, ReactNode } from "react";
import { projects } from "../Constants/Constants";

export interface Project {
  title: string;
  demo: string;
  tech: string[];
  img: string | null;
  contri: string[];
}

interface ProjectsContextType {
  projectsData: Project[];
  updateProjectsData: (newData: Project[]) => void;
}

interface ProjectsProviderProps {
  children: ReactNode;
}

const defaultProjects: Project[] = projects;

const ProjectsContext = createContext<ProjectsContextType>({
  projectsData: defaultProjects,
  updateProjectsData: () => {},
});

const ProjectsProvider: React.FC<ProjectsProviderProps> = ({ children }) => {
  const [projectsData, setProjectsData] = useState<Project[]>(defaultProjects);

  const updateProjectsData = (newData: Project[]) => {
    setProjectsData(newData);
  };

  return (
    <ProjectsContext.Provider value={{ projectsData, updateProjectsData }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export { ProjectsContext, ProjectsProvider };