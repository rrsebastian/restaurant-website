import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("home");

  const setPage = (item) => {
    setCurrentPage(item);
  };

  return (
    <AppContext.Provider value={{ currentPage, setPage }}>
      {children}
    </AppContext.Provider>
  );
};
