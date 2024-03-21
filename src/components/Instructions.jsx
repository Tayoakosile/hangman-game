import React, { useContext } from "react";
import { ReactComponent as IconBack } from "../assets/images/icon-back.svg";
import HeadingText from "./reusables/HeadingText";
import StoreContext from "../contexts/StoreContext";

const instructionList = [
  {
    title: "Choose a category",
    text: "First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.",
  },
  {
    title: "Guess letters",
    text: "Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses.",
  },
  {
    title: "Win or lose",
    text: "You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.",
  },
];
const Instructions = () => {
  const { handleUpdatePageIndex } = useContext(StoreContext);
  return (
    <div className="w-full h-full px-0">
      <div className="flex  items-center justify-between   pr-5 pt-4 md:pt-10 md:pr-10 md:pl-5">
        <button
          className="scale-50 md:scale-75 lg:scale-100 cursor-pointer active:scale-95 "
          onClick={() => handleUpdatePageIndex(0)}
        >
          <IconBack />
        </button>
        <HeadingText text="How to Play" />
      </div>

      <section className="space-y-6 lg:space-y-0 lg:space-x-6 px-6 md:px-10 lg:px-[7rem] mt-20 lg:mt-16 2xl:mt-24 pb-6 lg:grid lg:grid-cols-3">
        {instructionList.map((item, index) => (
          <button key={item.title} onClick={()=>handleUpdatePageIndex(2)}>
            <div className="min-h-[11.6rem] lg:min-h-[34.5rem]  rounded-[2rem] bg-white p-8 lg:p-0 space-y-2 md:space-y-0 md:flex md:items-center md:space-x-8 lg:space-x-0 ">
              <h2 className="space-x-4 text-2xl capitalize md:hidden">
                <span className="text-[#2463FF]">0{index + 1}</span>
                <span className="text-[#261676]">{item.title}</span>
              </h2>

              <div className="space-x-4 text-7xl capitalize hidden md:block text-[#2463FF] lg:hidden ">
                0{index + 1}
              </div>

              <div className="md:space-y-4 h-full lg:text-center flex justify-center items-center flex-col">
                <div className="space-x-4 text-7xl capitalize hidden  text-[#2463FF] lg:block lg:text-[5.5rem] ">
                  0{index + 1}
                </div>
                <h2 className="text-[#261676] md:text-4xl hidden md:block capitalize lg:text-5xl">
                  {item.title}
                </h2>
                <p className="text-[#887DC0] w-12/12 md:text-xl lg:text-[1.625rem] lg:leading-9 lg:w-9/12 ">
                  {item.text}
                </p>
              </div>
            </div>
          </button>
        ))}
      </section>
    </div>
  );
};

export default Instructions;
