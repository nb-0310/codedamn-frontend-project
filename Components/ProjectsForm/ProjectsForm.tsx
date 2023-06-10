import React, { useState, useContext } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import Brandbtn from "../Buttons/BrandBtn";
import ProjectsModal from "../ProjectsModal/ProjectsModal";
import { ProjectsContext } from "../../Contexts/ProjectsContext";
import {Project} from "../../Contexts/ProjectsContext"
import Link from "next/link";

interface ProjectsFormProps {}

const ProjectsForm: React.FC<ProjectsFormProps> = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const { projectsData, updateProjectsData } = useContext(ProjectsContext);

  console.log(projectsData);

  const handleClose = () => {
    setShowModal(false);
    setEditIndex(null);
  };

  const deleteProject = (index: number) => {
    const updatedProjectsData = projectsData.filter((_, i) => i !== index);
    updateProjectsData(updatedProjectsData);
  };

  const editProjects = (index: number) => {
    setEditIndex(index);
    setShowModal(true);
  };

  const handleShowMore = () => {
    setShowAllProjects(!showAllProjects);
  };

  const visibleProjects = showAllProjects
    ? projectsData
    : projectsData.slice(0, 4);

  return (
    <div className="mb-10">
      <div className="flex justify-between items-center w-full mb-6">
        <h1 className="text-2xl font-bold">Projects</h1>
        <div className="text-[#71717A] flex justify-between gap-3 items-center">
          <span
            className="cursor-pointer hover:text-[#1A1A1A] text-[#71717A]
            py-1 px-2 rounded-md"
            onClick={handleShowMore}
          >
            {showAllProjects ? "See Less" : "See All"}
          </span>
          <span
            className="cursor-pointer hover:text-[#1A1A1A] text-[#71717A]
            py-1 px-2 rounded-md"
            onClick={() => {
              setShowModal(!showModal);
              setEditIndex(null)
            }}
          >
            Add
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {visibleProjects.map((item: Project, index: number) => (
            <ProjectCard
              title={item["title"]}
              demo={item["demo"]}
              tech={item["tech"]}
              img={item["img"]}
              contri={item["contri"]}
              key={item["title"]}
              onDelete={() => deleteProject(index)}
              onEdit={() => editProjects(index)}
            />
        ))}
      </div>

      <div className="flex w-full justify-end gap-3 items-center mt-10">
        <Link href="/">
          <Brandbtn text="Save Changes" />
        </Link>
      </div>

      <ProjectsModal
        visible={showModal}
        onClose={handleClose}
        projectsData={projectsData}
        updateProjectsData={updateProjectsData}
        editProjects={editIndex !== null ? projectsData[editIndex] : null}
      />
    </div>
  );
};

export default ProjectsForm;
