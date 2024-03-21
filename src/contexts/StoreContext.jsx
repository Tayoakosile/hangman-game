import { createContext } from "react";

const StoreContext = createContext({
  shouldShowModal:false,
  pageIndex:0,
  handleToggleModal: () => {},
  handleUpdatePageIndex: () => {},
});
export default StoreContext;
