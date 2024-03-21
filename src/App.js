// import Instructions from "./components/Instructions";
import { useContext } from "react";
import Game from "./components/Game";
import GameModal from "./components/GameModal";
import Instructions from "./components/Instructions";
import MainMenu from "./components/MainMenu";
import PickCategory from "./components/PickCategory";
import StoreProvider from "./contexts/StoreProvider";
import StoreContext from "./contexts/StoreContext";

function App() {
  const { shouldShowModal, pageIndex } = useContext(StoreContext);

  return (
    <div className="bg-hman_bg--mobile md:bg-hman_bg--tablet lg:bg-hman_bg--desktop @apply h-dvh bg-no-repeat w-dvw bg-cover overflow-y-scroll pb-6">
      {pageIndex === 0 ? (
        <MainMenu />
      ) : pageIndex === 1 ? (
        <Instructions />
      ) : pageIndex === 2 ? (
        <PickCategory />
      ) : (
        <Game />
      )}

      {shouldShowModal ? <GameModal /> : null}


    </div>
  );
}

export default App;
