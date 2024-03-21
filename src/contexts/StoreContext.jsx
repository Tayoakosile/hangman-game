import { createContext } from "react";

const StoreContext = createContext({
  shouldShowModal: false,
  pageIndex: 0,
  chancesLeft: 8,
  category: "",
  categorySelected: {},
  allCategories: [],
  modalContent: {
    won: false,
    lost: false,
    textContent: "Paused",
  },
  handleToggleModal: () => {},
  // handleToggleModal: () => {},
  handleStoreCategoryPicked: () => {},
  handleUpdateCategory: () => {},
  handleUpdateChanceLeft: () => {},
  handleCategorySelected: () => {},
  handleUpdatePageIndex: () => {},
  handleSetOptions: () => {},
});
export default StoreContext;
