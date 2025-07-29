// src/context/NavContext.js
import { createContext, useState } from "react";

export const NavContext = createContext();

const NavContextProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen((prev) => !prev);
  const openNav = () => setIsNavOpen(true);
  const closeNav = () => setIsNavOpen(false);

  return (
    <NavContext.Provider value={{ isNavOpen, toggleNav, openNav, closeNav }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavContextProvider;
