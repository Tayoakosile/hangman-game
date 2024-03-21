import { useState } from "react";
import StoreContext from "./StoreContext";

// Create a ThemeProvider component to provide the context value to child components
const StoreProvider = ({ children }) => {
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const [category, setCategory] = useState("");
  const [allCategories, setCategories] = useState([]);
  const [categorySelected, setCategorySelected] = useState(null);

  // Function to toggle the theme between light and dark
  const handleUpdatePageIndex = (index = 1) => {
    setShouldShowModal(false);
    setPageIndex(index);
  };
  const handleToggleModal = (status) =>
    setShouldShowModal(status || !shouldShowModal);

  const handleSetOptions = (categories) => setCategories(categories);

  const handleStoreCategoryPicked = (categoryPicked) =>
    setCategory(categoryPicked);

  const handleUpdateCategory = (categories, name) => {
    const newCategories = allCategories?.length ? allCategories : categories;
    const updatedCategories = [...newCategories]?.map((category) => {
      
      if (category?.name?.toLowerCase()?.replaceAll(' ', '') === name || category?.selected) {
        return { name: category?.name, selected: true };
      }
      return category;
    });
    setCategories(updatedCategories);
    
  };
  const handleCategorySelected = (categorySelected) =>
    setCategorySelected(categorySelected);

  return (
    <StoreContext.Provider
      value={{
        shouldShowModal,
        pageIndex,
        handleToggleModal,
        handleUpdatePageIndex,
        handleStoreCategoryPicked,
        handleSetOptions,
        handleUpdateCategory,
        category,
        allCategories,
        categorySelected,
        handleCategorySelected,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
export default StoreProvider;
