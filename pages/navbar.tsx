import React, { ReactNode } from 'react';
import Navbar from '../Components/Navbar/Navbar';

interface NavbarContainerProps {
  children: ReactNode;
}

const NavbarContainer: React.FC<NavbarContainerProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default NavbarContainer;
