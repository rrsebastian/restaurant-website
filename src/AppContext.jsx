import React, { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export const AppProvider = ({ children }) => {
  // Get the currentPage from localStorage on initial load
  const initialPage = localStorage.getItem("currentPage") || "home";
  const [currentPage, setCurrentPage] = useState(initialPage);

  const setPage = (item) => {
    setCurrentPage(item);
  };

  // Update localStorage whenever currentPage changes
  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  return (
    <AppContext.Provider value={{ currentPage, setPage }}>
      {children}
    </AppContext.Provider>
  );
};
