import React from "react";
import HeadingText from "./reusables/HeadingText";

const GameModal = () => {
  return (
    <div className="fixed right-0 left-0 flex justify-center items-center h-full w-full top-0 bottom-0 z-[999] bg-gray-400
    ">
      <div className="h-fit  rounded-[3rem] w-full  bg-hman_mobile-play-bg md:bg-hman_tablet-play-bg lg:bg-hman_desktop-play-bg flex items-center justify-center bg-no-repeat mx-4 md:bg-contain bg-center flex-col relative">
        {/* <div className="bg-hman_mobile-heading md:bg-hman_tablet-heading lg:bg-hman_desktop-heading  h-[11.7rem]   w-full bg-no-repeat lg:bg-contain bg-center " /> */}

        <HeadingText
          text="Paused"
          classNames="absolute -top-16 md:-top-20 !text-8xl md:!text-9xl lg:!text-[8.38rem]"
        />

        <div className="pb-12 space-y-8 pt-[6rem] flex flex-col ">
          <button className="bg-hm_blue block px-[4rem] py-3 rounded-[2.5rem]  text-white text-4xl w-full tracking-wide hover:bg-[#5A8AFF] cursor-pointer ring-offset-blue-400 ring-offset-1 focus:ring-4 active:scale-95">
            Continue
          </button>
          <button className="bg-hm_blue block px-[4rem] py-3 rounded-[2.5rem]  text-white text-4xl w-full tracking-wide hover:bg-[#5A8AFF] cursor-pointer ring-offset-blue-400 ring-offset-1 focus:ring-4 active:scale-95">
            New Category
          </button>
          <button className=" bg-gradient-to-b from-[#FE71FE] via-[#B785FF] to-[#7199FF] bg-hm_blue block px-[4rem] py-3 rounded-[2.5rem]  text-white text-4xl  shadow-[#FE71FE] shadow w-full tracking-wide hover:bg-fuchsia-300 cursor-pointer ring-offset-fuchsia-400 ring-offset-1 focus:ring-4 active:scale-95">
            {/* border-t-[#C643FC]  border-x-[#C643FC] border-4 border-b-[#140E66] */}
            Quit Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameModal;
