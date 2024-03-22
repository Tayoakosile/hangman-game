import React, { useContext } from "react";
import { ReactComponent as IconPlayContainer } from "../assets/images/icon-play-container.svg";
import { ReactComponent as PlayIcon } from "../assets/images/icon-play.svg";
import StoreContext from "../contexts/StoreContext";

const MainMenu = () => {
  const { handleUpdatePageIndex, handleUpdatePreviousIndex } =
    useContext(StoreContext);

  return (
    <section className=" pt-24 md:pt-32 lg:pt-52 h-full w-full px-5 flex items-center relative overflow-hidden">
      {/* The Hangman Game Heading */}

      <div className="h-[30.07rem] lg:h-[31.25rem] rounded-[3rem] w-full bg-hman_mobile-play-bg md:bg-hman_tablet-play-bg lg:bg-hman_desktop-play-bg flex items-center justify-center bg-no-repeat bg-contain bg-center flex-col relative">
        <div className="bg-hman_mobile-heading md:bg-hman_tablet-heading lg:bg-hman_desktop-heading absolute h-[11.7rem]   w-full bg-no-repeat lg:bg-contain bg-center -top-24" />

        <button
          className="relative lg:mt-24"
          onClick={() => {
            handleUpdatePageIndex(2);
            handleUpdatePreviousIndex(0);
          }}
        >
          <IconPlayContainer />
          <div className="absolute top-12 right-[5.4rem] w-5 h-5 ">
            <PlayIcon />
          </div>
        </button>

        <button
          className="bg-[#2463FF] px-[4rem] py-3 rounded-[2.5rem] mt-[3.63rem] text-white text-4xl tracking-wide hover:bg-[#5A8AFF] cursor-pointer ring-offset-blue-400 ring-offset-1 focus:ring-4 active:scale-95 shadow-inner shadow-[#344ABA]"
          onClick={() => handleUpdatePageIndex(1)}
        >
          How to Play
        </button>
      </div>
    </section>
  );
};

export default MainMenu;
