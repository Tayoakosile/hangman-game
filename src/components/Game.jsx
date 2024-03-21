import React from "react";
import { ReactComponent as IconHeart } from "../assets/images/icon-heart.svg";

const Word = ({ shouldDisable = false, text = "U" }) => {
  return (
    <div
      className={` ${
        shouldDisable ? "bg-[#1B2182]" : "bg-hm_blue"
      }   text-4xl md:text-[4rem] px-3 py-2 rounded-xl md:rounded-[3rem] text-white h-[3rem] md:h-[7rem] w-[5.5rem]   text-center flex items-center justify-center`}
    >
      {shouldDisable ? "" : text}
    </div>
  );
};

const WordAsKeyboard = ({ shouldDisable = false, text = "U" }) => {
  return (
    <button
      className={` ${
        shouldDisable ? "bg-[#52589D]" : "bg-white"
      }  w-fit text-4xl md:text-[3rem] px-3 py-2 rounded-xl min-h-[3rem] md:min-h-[5.25rem] min-w-[2.5rem] md:min-w-[4rem]  text-[#261676]`}
    >
      {text}
    </button>
  );
};

const Game = () => {
  return (
    <section className="pt-[2rem] px-5 md:px-10 lg:px-[8rem]">
      <nav>
        <ul className="flex justify-between space-x-4  ">
          <li className="flex space-x-4  text-white flex-[0.5] items-center">
            <button className=" bg-gradient-to-b from-[#FE71FE] via-[#B785FF] to-[#7199FF] bg-hm_blue rounded-full p-3  text-white text-4xl  shadow-[#FE71FE] shadow w-fit tracking-wide hover:bg-fuchsia-300 cursor-pointer ring-offset-fuchsia-400 ring-offset-1 focus:ring-4 active:scale-95">
              <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.914917"
                  y="0.191406"
                  width="16.1702"
                  height="2.97872"
                  fill="white"
                />
                <rect
                  x="0.914917"
                  y="5.72363"
                  width="16.1702"
                  height="2.55319"
                  fill="white"
                />
                <rect
                  x="0.914917"
                  y="10.8301"
                  width="16.1702"
                  height="2.97872"
                  fill="white"
                />
              </svg>
            </button>
            <h1 className="text-4xl">Countries</h1>
          </li>
          <li className=" flex items-center  flex-[0.5] ">
            <div className="w-[50%] ml-auto">
              <div
                class="flex w-full h-4 bg-white rounded-full overflow-hidden items-center"
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="flex flex-col justify-center rounded-full overflow-hidden bg-[#261676] text-md text-white text-center whitespace-nowrap transition h-2 ml-1  duration-500  w-[70%]"></div>
              </div>
            </div>

            <div className="scale-50">
              <IconHeart />
            </div>
          </li>
        </ul>
      </nav>

      <ul className="grid grid-cols-6 gap-4 mt-[4.76rem]  w-full">
        <Word />
        <Word  />
        <Word  />
        <Word  />
        <Word  />
        <Word  />
        <Word  />
        <Word  />
        <Word  />
        <Word  />
        <Word  />
        <Word  />
        <Word  />
        <Word  />
        <Word  />
        <Word  />
        <Word  />
        <Word  />
      </ul>

      <ul className="grid grid-cols-6 gap-4 pt-[7rem]">
        <WordAsKeyboard  />
      </ul>
    </section>
  );
};

export default Game;
