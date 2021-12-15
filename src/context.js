import React, { useState, useContext } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isShowSidebar, setIsShowSidebar] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);

  const toggleSidebar = () => {
    setIsShowSidebar(!isShowSidebar);
  };
  const toggleModal = () => {
    setIsShowModal(!isShowModal);
  };
  return (
    <AppContext.Provider
      value={{
        isShowSidebar,
        isShowModal,
        toggleModal,
        toggleSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
