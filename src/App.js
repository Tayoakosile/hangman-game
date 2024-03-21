// import Instructions from "./components/Instructions";
import Game from "./components/Game";
import GameModal from "./components/GameModal";
import Instructions from "./components/Instructions";
import MainMenu from "./components/MainMenu";
import PickCategory from "./components/PickCategory";

function App() {
  return (
    <div class='bg-hman_bg--mobile md:bg-hman_bg--tablet lg:bg-hman_bg--desktop @apply h-dvh bg-no-repeat w-dvw bg-cover overflow-y-scroll pb-6'>
      {/* <MainMenu/> */}
      {/* <Instructions/> */}
      {/* <GameModal/> */}
      {/* <PickCategory/> */}
      <Game />
    </div>
  );
}

export default App;
