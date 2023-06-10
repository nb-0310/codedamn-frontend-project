import React, { useState, useEffect } from "react";
import Plainbtn from "../Buttons/PlainBtn";
import Brandbtn from "../Buttons/BrandBtn";
import { Playground } from "../../Contexts/PlaygroundContext";

interface PlaygroundsModalProps {
  visible: boolean;
  onClose: () => void;
  playgroundData: Playground[];
  updatePlaygroundData: (newData: Playground[]) => void;
  editPlayground: Playground | null;
}

const PlaygroundsModal: React.FC<PlaygroundsModalProps> = ({
  visible,
  onClose,
  playgroundData,
  updatePlaygroundData,
  editPlayground,
}) => {
  if (!visible) return null;

  const [title, setTitle] = useState("");
  const [tech, setTech] = useState("");

  useEffect(() => {
    if (editPlayground) {
      setTitle(editPlayground.title);
      setTech(editPlayground.tech);
    } else {
      setTitle("");
      setTech("");
    }
  }, [editPlayground]);

  const handleOnClose = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.id === "modal-container") onClose();
  };

  const handleSave = () => {
    if (editPlayground) {
      const updatedPlaygroundData = playgroundData.map((item) =>
        item === editPlayground ? { ...item, title, tech } : item
      );
      updatePlaygroundData(updatedPlaygroundData);
    } else {
      updatePlaygroundData([...playgroundData, { title, tech }]);
    }
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-30 z-40 backdrop-blur-sm flex justify-center items-center"
      onClick={handleOnClose}
      id="modal-container"
    >
      <div className="bg-white flex flex-col justify-center items-center p-8 rounded-lg">
        <form className="w-full">
          <div className="w-full mb-6">
            <label htmlFor="about" className="mb-1 block text-sm font-semibold">
              Title
            </label>
            <input
              type="text"
              className="w-full px-3 py-3.5 text-sm text-[##18181B] border border-zinc-200 focus:outline-none focus:border-zinc-200 rounded-lg"
              placeholder="Playground title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>

          <div className="w-full mb-6">
            <label htmlFor="about" className="mb-1 block text-sm font-semibold">
              What is the tech stack used in the playground?
            </label>
            <select
              name=""
              id=""
              className="w-full px-3 py-3.5 text-sm text-[##18181B] border border-zinc-200 focus:outline-none focus:border-zinc-200 rounded-lg "
              placeholder="Tech Stack"
              value={tech}
              onChange={(e) => {
                setTech(e.target.value);
              }}
            >
              <option value="HTML/CSS">HTML/CSS</option>
              <option value="Javascript">Javascript</option>
              <option value="React">React</option>
              <option value="Node JS">Node JS</option>
              <option value="Mongo DB">Mongo DB</option>
              <option value="Next JS">Next JS</option>
            </select>
          </div>
        </form>
        <div className="flex w-full justify-end gap-3 items-center">
          <div onClick={handleCancel}>
            <Plainbtn text="Cancel" />
          </div>

          <div onClick={handleSave}>
            <Brandbtn text="Save Changes" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaygroundsModal;
