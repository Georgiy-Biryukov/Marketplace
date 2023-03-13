import React, { useState, createContext } from "react";

interface IFilterMenuContext {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
interface IPropsChildren {
  children: React.ReactNode;
}

export const Context = createContext<IFilterMenuContext>({
  isOpen: true,
  setIsOpen: () => {},
});

export const FilterMenuContext: React.FC<IPropsChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <Context.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </Context.Provider>
  );
};
