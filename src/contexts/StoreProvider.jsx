import { useState } from "react";
import StoreContext from "./StoreContext";
import userLostAudio from "../assets/audio/user-lost.wav";
import userWonAudio from "../assets/audio/user-won.mp3";
import invalidSelectionAudio from "../assets/audio/invalid.mp3";
import validSelectionAudio from "../assets/audio/valid.wav";

// Create a ThemeProvider component to provide the context value to child components
const StoreProvider = ({ children }) => {
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);

  const [categoryTitle, setCategory] = useState("");
  const [chancesLeft, setChancesLeft] = useState(7);
  const [modalContent, setModalContent] = useState({
    won: false,
    lost: false,
    textContent: "You Lose",
  });
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

  const handleUpdateChanceLeft = () => {
    console.log('this ran here')
    if (chancesLeft <= 0) {
      handlePlayAudio('lost')
      handleUpdateModalContent(
        {
          ...modalContent,
          lost: true,
          textContent: "You Lose",
        },
        true
      );

      
      return;
    }
    setChancesLeft(chancesLeft - 1);
  };
  const handleUpdateCategory = (categories, name) => {
    // Update Category List and Filter `selected=true` category from the list.
    const newCategories = allCategories?.length ? allCategories : categories;
    const updatedCategories = [...newCategories]?.map((category) => {
      if (
        category?.name?.toLowerCase()?.replaceAll(" ", "") === name ||
        category?.selected
      ) {
        return { name: category?.name, selected: true };
      }
      return category;
    });
    setCategories(updatedCategories);
  };
  const handleCategorySelected = (categorySelected) =>
    setCategorySelected(categorySelected);

  const handleUpdateModalContent = (obj, value) => {
    setModalContent({...obj});
    setShouldShowModal(value);
  };

  const handlePlayAudio = (audioType = "lost") => {
    const allAudios = {
      won: userWonAudio,
      lost: userLostAudio,
      invalid: invalidSelectionAudio,
      valid: validSelectionAudio,
    };
    const audio = new Audio(allAudios[`${audioType}`]);

    audio.play();
  };

  const handlePlayAgain = () => {
    console.log('this ran also')
    setChancesLeft(7);
    setModalContent({
      lost: false,
      won: false,
      textContent: "Paused",
    });
  };

  return (
    <StoreContext.Provider
      value={{
        shouldShowModal,
        pageIndex,
        categoryTitle,
        chancesLeft,
        allCategories,
        modalContent,
        categorySelected,
        handleToggleModal,
        handleUpdatePageIndex,
        handleStoreCategoryPicked,
        handleSetOptions,
        handleUpdateCategory,
        handleUpdateChanceLeft,
        handlePlayAgain,
        handleCategorySelected,
        handleUpdateModalContent,
        handlePlayAudio,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
export default StoreProvider;
