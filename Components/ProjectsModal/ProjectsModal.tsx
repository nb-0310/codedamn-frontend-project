import React, { useState, useEffect, ChangeEvent } from "react";
import Plainbtn from "../Buttons/PlainBtn";
import Brandbtn from "../Buttons/BrandBtn";

interface Project {
  title: string;
  demo: string;
  img: string | null;
  tech: string[];
  contri: string[];
}

interface ProjectsModalProps {
  visible: boolean;
  onClose: () => void;
  projectsData: Project[];
  updateProjectsData: (newData: Project[]) => void;
  editProjects: Project | null;
}

const ProjectsModal: React.FC<ProjectsModalProps> = ({
  visible,
  onClose,
  projectsData,
  updateProjectsData,
  editProjects
}) => {
  if (!visible) return null;

  const [title, setTitle] = useState("");
  const [demo, setDemo] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [tech, setTech] = useState<string[]>([]);
  const [contributors, setContributors] = useState<string[]>([]);

  useEffect(() => {
    if (editProjects) {
      setTitle(editProjects.title);
      setDemo(editProjects.demo);
      setImage(editProjects.img);
      setTech(editProjects.tech);
      setContributors(editProjects.contri);
    } else {
      setTitle("");
      setDemo("");
      setImage(null);
      setTech([]);
      setContributors([]);
    }
  }, [editProjects]);

  const handleOnClose = (e: React.MouseEvent) => {
    if (e.target && (e.target as HTMLElement).id === "projects-modal-container")
      onClose();
  };

  const handleSave = () => {
    if (editProjects) {
      const updatedProjectsData = projectsData.map((item) =>
        item === editProjects
          ? { ...item, title, demo, img: image, tech, contri: contributors }
          : item
      );
      updateProjectsData(updatedProjectsData);
    } else {
      updateProjectsData([
        ...projectsData,
        { title, demo, img: image, tech, contri: contributors },
      ]);
    }
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  const handleTechChange = (e: ChangeEvent<HTMLInputElement>) => {
    const checkedTech = Array.from(
      e.target.parentNode!.parentNode!.querySelectorAll<HTMLInputElement>(
        "input[type='checkbox']:checked"
      )
    ).map((checkbox) => checkbox.value);

    if (checkedTech.length <= 2) {
      setTech(checkedTech);
    } else {
      e.target.checked = false;
    }
  };

  const handleContributorsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const checkedContributors = Array.from(
      e.target.parentNode!.parentNode!.querySelectorAll<HTMLInputElement>(
        "input[type='checkbox']:checked"
      )
    ).map((checkbox) => checkbox.value);

    if (checkedContributors.length <= 2) {
      setContributors(checkedContributors);
    } else {
      e.target.checked = false;
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    setImage(URL.createObjectURL(file));
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-30 z-40 backdrop-blur-sm flex justify-center items-center"
      onClick={handleOnClose}
      id="projects-modal-container"
    >
      <div className="bg-white flex flex-col justify-between items-center p-8 rounded-lg w-[50vw] h-[50vh] overflow-y-scroll scrollbar-hide scroll-smooth">
        <form className="w-full">
          <div className="w-full mb-6">
            <label htmlFor="title" className="mb-1 block text-sm font-semibold">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full px-3 py-3.5 text-sm text-[##18181B] border border-zinc-200 focus:outline-none focus:border-zinc-200 rounded-lg"
              placeholder="Project title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="w-full mb-6">
            <label htmlFor="title" className="mb-1 block text-sm font-semibold">
              Live Demo
            </label>
            <input
              type="url"
              id="demo"
              className="w-full px-3 py-3.5 text-sm text-[##18181B] border border-zinc-200 focus:outline-none focus:border-zinc-200 rounded-lg"
              placeholder="https://www.react-project.varcel.app/"
              value={demo}
              onChange={(e) => setDemo(e.target.value)}
            />
          </div>

          <div className="w-full mb-6">
            <label htmlFor="image" className="mb-1 block text-sm font-semibold">
              Image
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              className="w-full px-3 py-3.5 text-sm text-[##18181B] border border-zinc-200 focus:outline-none focus:border-zinc-200 rounded-lg"
              onChange={handleImageChange}
            />
          </div>

          <div className="w-full mb-6">
            <label htmlFor="tech" className="mb-1 block text-sm font-semibold">
              Tech Stack (Select 2)
            </label>
            <div>
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  value="HTML/CSS"
                  checked={tech.includes("HTML/CSS")}
                  onChange={handleTechChange}
                  className="form-checkbox border-zinc-200 focus:outline-none text-black rounded"
                />
                <span className="ml-2">HTML/CSS</span>
              </label>
              <br />
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  value="Javascript"
                  checked={tech.includes("Javascript")}
                  onChange={handleTechChange}
                  className="form-checkbox border-zinc-200 focus:outline-none text-black rounded"
                />
                <span className="ml-2">Javascript</span>
              </label>
              <br />
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  value="React"
                  checked={tech.includes("React")}
                  onChange={handleTechChange}
                  className="form-checkbox border-zinc-200 focus:outline-none text-black rounded"
                />
                <span className="ml-2">React</span>
              </label>
              <br />
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  value="NextJS"
                  checked={tech.includes("NextJS")}
                  onChange={handleTechChange}
                  className="form-checkbox border-zinc-200 focus:outline-none text-black rounded"
                />
                <span className="ml-2">NextJS</span>
              </label>
              <br />
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  value="Node JS"
                  checked={tech.includes("Node JS")}
                  onChange={handleTechChange}
                  className="form-checkbox border-zinc-200 focus:outline-none text-black rounded"
                />
                <span className="ml-2">Node JS</span>
              </label>
              <br />
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  value="Mongo DB"
                  checked={tech.includes("Mongo DB")}
                  onChange={handleTechChange}
                  className="form-checkbox border-zinc-200 focus:outline-none text-black rounded"
                />
                <span className="ml-2">Mongo DB</span>
              </label>
              <br />
            </div>
          </div>

          <div className="w-full mb-6">
            <label
              htmlFor="contributors"
              className="mb-1 block text-sm font-semibold"
            >
              Contributors (Select 2)
            </label>
            <div>
              <label className=" inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  value="Nirzar Bhatt"
                  checked={contributors.includes("Nirzar Bhatt")}
                  onChange={handleContributorsChange}
                  className="form-checkbox text-black border-zinc-200 focus:outline-none rounded"
                />
                <span>Nirzar Bhatt</span>
              </label>
              <br />
              <label className=" inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  value="Minato Namikaze"
                  checked={contributors.includes("Minato Namikaze")}
                  onChange={handleContributorsChange}
                  className="form-checkbox text-black border-zinc-200 focus:outline-none rounded"
                />
                <span>Minato Namikaze</span>
              </label>
              <br />
              <label className=" inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  value="Naruto Uzumaki"
                  checked={contributors.includes("Naruto Uzumaki")}
                  onChange={handleContributorsChange}
                  className="form-checkbox text-black border-zinc-200 focus:outline-none rounded"
                />
                <span>Naruto Uzumaki</span>
              </label>
              <br />
            </div>
          </div>

          <div className="flex w-full justify-end gap-3 items-center">
            <div onClick={handleCancel}>
              <Plainbtn text="Cancel" />
            </div>

            <div onClick={handleSave}>
              <Brandbtn text="Save Changes" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectsModal;
