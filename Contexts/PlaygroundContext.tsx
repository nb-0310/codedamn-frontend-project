import React, { createContext, useState, ReactNode } from "react";
import { playgrounds } from "../Constants/Constants";

export interface Playground {
  title: string;
  tech: string;
}

interface PlaygroundContextType {
  playgroundData: Playground[];
  updatePlaygroundData: (newData: Playground[]) => void;
}

const defaultPlaygrounds: Playground[] = playgrounds;

const PlaygroundContext = createContext<PlaygroundContextType>({
  playgroundData: defaultPlaygrounds,
  updatePlaygroundData: () => {},
});

interface PlaygroundProviderProps {
  children: ReactNode;
}

const PlaygroundProvider: React.FC<PlaygroundProviderProps> = ({ children }) => {
  const [playgroundData, setPlaygroundData] = useState<Playground[]>(defaultPlaygrounds);

  const updatePlaygroundData = (newData: Playground[]) => {
    setPlaygroundData(newData);
  };

  return (
    <PlaygroundContext.Provider value={{ playgroundData, updatePlaygroundData }}>
      {children}
    </PlaygroundContext.Provider>
  );
};

export { PlaygroundContext, PlaygroundProvider };