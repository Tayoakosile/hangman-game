import React, { useContext, useEffect, useMemo, useState } from "react";
import { ReactComponent as IconHeart } from "../assets/images/icon-heart.svg";
import StoreContext from "../contexts/StoreContext";

const Word = ({ isDisabled = false, text = "U" }) => {
  return (
    <div
      className={` ${
        isDisabled ? "bg-[#1B2182]" : "bg-hm_blue"
      }   text-4xl md:text-[4rem] lg:text-[5.5rem] px-3 py-2 rounded-xl md:rounded-[3rem] max-w-[2.5rem] md:max-w-[5.5rem] lg:max-w-[7rem] text-white h-[3rem] md:h-[7rem]  lg:min-h-[8rem]   text-center flex items-center justify-center`}
    >
      {isDisabled ? "" : text}
    </div>
  );
};

const WordAsKeyboard = ({ isDisabled = false, text = "U", onClick }) => {
  return (
    <button
      className={` ${
        isDisabled
          ? "bg-[#52589D] cursor-not-allowed"
          : "bg-white active:bg-slate-100 active:scale-90 transition-all"
      }  w-fit text-4xl md:text-[3rem] capitalize px-3 py-2 rounded-xl min-h-[3rem] md:min-h-[5.25rem] min-w-[2.5rem] md:min-w-[4rem]  text-[#261676]`}
      onClick={() => {
        if (!isDisabled) return onClick(text);
      }}
    >
      {text}
    </button>
  );
};

const Game = () => {
  const {
    handleToggleModal,
    category,
    categorySelected,
    handleUpdateCategory,
  } = useContext(StoreContext);

  const [updatedCategories, setUpdatedCategories] = useState([]);
  const [allAlphabets, setAllAlphabets] = useState([
    { letter: "a", wasPicked: false },
    { letter: "b", wasPicked: false },
    { letter: "c", wasPicked: false },
    { letter: "d", wasPicked: false },
    { letter: "e", wasPicked: false },
    { letter: "f", wasPicked: false },
    { letter: "g", wasPicked: false },
    { letter: "h", wasPicked: false },
    { letter: "i", wasPicked: false },
    { letter: "j", wasPicked: false },
    { letter: "k", wasPicked: false },
    { letter: "l", wasPicked: false },
    { letter: "m", wasPicked: false },
    { letter: "n", wasPicked: false },
    { letter: "o", wasPicked: false },
    { letter: "p", wasPicked: false },
    { letter: "q", wasPicked: false },
    { letter: "r", wasPicked: false },
    { letter: "s", wasPicked: false },
    { letter: "t", wasPicked: false },
    { letter: "u", wasPicked: false },
    { letter: "v", wasPicked: false },
    { letter: "w", wasPicked: false },
    { letter: "x", wasPicked: false },
    { letter: "y", wasPicked: false },
    { letter: "z", wasPicked: false },
  ]);

  const handleOnLetterClicked = (selectedLetter) => {
    selectedLetter = selectedLetter?.toLowerCase();

   
    const isSelectedLetterCorrect = updatedCategories.some(
      (category) => category.letter === selectedLetter
    );

    setAllAlphabets(
      [...allAlphabets]?.map(({ letter, wasPicked }) => {
        if (
          wasPicked ||
          letter?.toLowerCase() === selectedLetter?.toLowerCase()
        ) {
          return {
            letter,
            wasPicked: true,
          };
        }
        return {
          letter,
          wasPicked,
        };
      })
    );
    if (isSelectedLetterCorrect) {
      setUpdatedCategories(
        [...updatedCategories]?.map((newCategory) => {
          return newCategory.letter === selectedLetter ||
            newCategory?.wasCorrectlyPicked
            ? {
                ...newCategory,
                wasCorrectlyPicked: true,
              }
            : newCategory;
        })
      );

      
      return;
    }

    
    
  };

  useEffect(() => {
    setUpdatedCategories(
      categorySelected?.name
        ?.replaceAll(" ", "")
        .split("")
        ?.map((letter) => {
          return {
            letter: letter?.toLowerCase(),
            wasPicked: false,
            wasCorrectlyPicked: false,
          };
        })
    );
  }, [categorySelected]);

  console.log(categorySelected?.name?.split(" "), "categorySelected");

  return (
    <section className="pt-[2rem] px-5 md:px-10 lg:px-[8.32rem]  capitalize">
      <nav>
        <ul className="flex justify-between space-x-4  ">
          <li className="flex space-x-4  text-white flex-[0.5] items-center">
            <button
              onClick={handleToggleModal}
              className=" bg-gradient-to-b from-[#FE71FE] via-[#B785FF] to-[#7199FF] bg-hm_blue rounded-full p-3  text-white text-4xl  shadow-[#FE71FE] shadow w-fit tracking-wide hover:bg-fuchsia-300 cursor-pointer ring-offset-fuchsia-400 ring-offset-1 focus:ring-4 active:scale-95 md:scale-150"
            >
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
            <h1 className="text-4xl">{category}</h1>
          </li>
          <li className=" flex items-center  flex-[0.5] ">
            <div className="w-[50%] ml-auto">
              <div
                className="flex w-full h-4 bg-white p-2 rounded-full overflow-hidden items-center"
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="flex flex-col justify-center rounded-full overflow-hidden bg-[#261676] text-md text-white text-center whitespace-nowrap transition h-2  duration-500  w-[100%]"></div>
              </div>
            </div>

            <div className="scale-50">
              <IconHeart />
            </div>
          </li>
        </ul>
      </nav>

      <section
        className={`${
          updatedCategories?.length <= 4
            ? "flex justify-center space-x-4"
            : "grid grid-cols-6 gap-4 "
        } mt-[4.76rem]  w-full xl:px-[14rem]`}
      >
        {updatedCategories?.map((category, index) => (
          <Word
            key={`${category?.letter}-${index}`}
            text={category?.letter}
            isDisabled={!category?.wasCorrectlyPicked}
          />
        ))}
      </section>

      <ul className="grid grid-cols-6 gap-4 pt-[7rem] space-x-1">
        {allAlphabets.map(({ letter, wasPicked }) => (
          <WordAsKeyboard
            key={letter}
            isDisabled={wasPicked}
            text={letter}
            onClick={handleOnLetterClicked}
          />
        ))}
        <WordAsKeyboard />
        <WordAsKeyboard />
      </ul>
    </section>
  );
};

export default Game;
