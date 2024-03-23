// import Instructions from "./components/Instructions";
import { useContext } from "react";
import Game from "./components/Game";
import GameModal from "./components/GameModal";
import Instructions from "./components/Instructions";
import MainMenu from "./components/MainMenu";
import PickCategory from "./components/PickCategory";
import StoreContext from "./contexts/StoreContext";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const { shouldShowModal, pageIndex } = useContext(StoreContext);

  return (
    <div className="bg-hman_bg--mobile md:bg-hman_bg--tablet lg:bg-hman_bg--desktop @apply h-dvh bg-no-repeat w-dvw bg-cover overflow-y-scroll pb-6 bg-right-top">
      <AnimatePresence mode="wait">
        {pageIndex === 0 ? (
          <motion.div
            key="mainmenu"
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            // exit={{ opacity: 0 }}
            exit={{ scale: 0.4, opacity: 0 }}
            transition={{
              duration: 0.2,
            }}
          >
            <MainMenu />
          </motion.div>
        ) : pageIndex === 1 ? (
          <motion.div
            key="Instructions"
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            // exit={{ opacity: 0 }}
            exit={{ scale: 0.4, opacity: 0 }}
            transition={{
              duration: 0.2,
            }}
          >
            <Instructions />
          </motion.div>
        ) : pageIndex === 2 ? (
          <motion.div
            key="PickCategory"
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              duration: 0.2,
            }}
          >
            <PickCategory />
          </motion.div>
        ) : (
          <motion.div
            key="game"
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            // exit={{ opacity: 0 }}
            exit={{ scale: 0.4, opacity: 0 }}
            transition={{
              duration: 0.2,
            }}
          >
            <Game />
          </motion.div>
        )}
      </AnimatePresence>
      
      {shouldShowModal && (
        <motion.div
          key="game_modal"
          initial={{ opacity: 0, transitionDuration: 0.2 }}
          animate={{ opacity: 1, transitionDuration: 0.2 }}
          exit={{ opacity: 0, transitionDuration: 0.1 }}
        >
          <GameModal />
        </motion.div>
      )}
      {/* </AnimatePresence> */}
    </div>
  );
}

export default App;
