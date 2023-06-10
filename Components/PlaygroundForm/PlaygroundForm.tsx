import React, { useContext, useState } from "react";
import { PlaygroundContext } from "../../Contexts/PlaygroundContext";
import { Playground } from "../../Contexts/PlaygroundContext";
import Card from "../Card/Card";
import PlaygroundsModal from "../PlaygroundsModal/PlaygroundsModal";

interface PlaygroundFormProps {}

const PlaygroundForm: React.FC<PlaygroundFormProps> = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showAllPlaygrounds, setShowAllPlaygrounds] = useState<boolean>(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  
  const { playgroundData, updatePlaygroundData } =
    useContext(PlaygroundContext);

  const handleClose = () => {
    setShowModal(false);
    setEditIndex(null);
  };

  const handleShowMore = () => setShowAllPlaygrounds(!showAllPlaygrounds);

  const deletePlayground = (index: number) => {
    const updatedPlaygroundData = playgroundData.filter((_, i) => i !== index);
    updatePlaygroundData(updatedPlaygroundData);
  };

  const editPlayground = (index: number) => {
    setEditIndex(index);
    setShowModal(true);
  };

  const visiblePlaygrounds = showAllPlaygrounds
    ? playgroundData
    : playgroundData.slice(0, 4);

  return (
    <div className="mb-10">
      <div className="flex justify-between items-center w-full mb-6">
        <h1 className="text-2xl font-bold">Playgrounds</h1>
        <div className="text-[#71717A] flex justify-between gap-3 items-center">
          <span
            className="cursor-pointer hover:text-[#1A1A1A] text-[#71717A]
            py-1 px-2 rounded-md"
            onClick={handleShowMore}
          >
            {showAllPlaygrounds ? "See Less" : "See All"}
          </span>
          <span
            className="cursor-pointer hover:text-[#1A1A1A] text-[#71717A]
            py-1 px-2 rounded-md"
            onClick={() => {
              setShowModal(!showModal);
              setEditIndex(null);
            }}
          >
            Add
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {visiblePlaygrounds.map((item: Playground, index: number) => (
          <Card
            title={item.title}
            tech={item.tech}
            key={item.title}
            onDelete={() => deletePlayground(index)}
            onEdit={() => editPlayground(index)}
          />
        ))}
      </div>

      <PlaygroundsModal
        visible={showModal}
        onClose={handleClose}
        playgroundData={playgroundData}
        updatePlaygroundData={updatePlaygroundData}
        editPlayground={editIndex !== null ? playgroundData[editIndex] : null}
      />
    </div>
  );
};

export default PlaygroundForm;
