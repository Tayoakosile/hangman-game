import { createContext } from "react";

const StoreContext = createContext({
  shouldShowModal:false,
  pageIndex:0,
  chancesLeft:8,
  category:'',
  categorySelected:{},
  allCategories:[],
  handleToggleModal: () => {}, 
  handleStoreCategoryPicked: () => {},
  handleUpdateCategory: ()=>{},
  handleCategorySelected: ()=>{},
  handleUpdatePageIndex: () => {},
  handleSetOptions: () => {},
  
});
export default StoreContext;
