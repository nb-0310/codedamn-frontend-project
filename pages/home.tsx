import React, { ReactNode } from 'react';
import ProfileHeader from '../Components/ProfileHeader/ProfileHeader';

interface HomeProps {
  children: ReactNode;
}

const Home: React.FC<HomeProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="my-14 lg:w-[60vw] md:w-[70vw] sm:w-[80vw] w-[90vw]">
        <ProfileHeader />
        {children}
      </div>
    </div>
  );
};

export default Home;