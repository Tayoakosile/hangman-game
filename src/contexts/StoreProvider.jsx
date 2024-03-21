import { useState } from "react";
import StoreContext from "./StoreContext";

// Create a ThemeProvider component to provide the context value to child components
const StoreProvider = ({ children }) => {
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);

  // Function to toggle the theme between light and dark
  const handleUpdatePageIndex = (index = 1) => {
    setShouldShowModal(false)
    setPageIndex(index);
  };
  const handleToggleModal = (status) =>
    setShouldShowModal(status || !shouldShowModal);

  return (
    <StoreContext.Provider
      value={{
        shouldShowModal,
        pageIndex,
        handleToggleModal,
        handleUpdatePageIndex,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
export default StoreProvider;
