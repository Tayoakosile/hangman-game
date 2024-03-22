import React, { useContext, useEffect, useState } from "react";
import { ReactComponent as IconHeart } from "../assets/images/icon-heart.svg";
import StoreContext from "../contexts/StoreContext";

const Word = ({ isDisabled = false, text = "U" }) => {
  return (
    <div
      className={` ${
        isDisabled ? "bg-[#1B2182]" : "bg-hm_blue"
      }   text-4xl md:text-[4rem] w-full  lg:text-[5.5rem] px-3 py-2 rounded-xl md:rounded-[3rem] max-w-[2.5rem] md:max-w-[5rem] lg:max-w-[7rem] text-white h-[4.13rem] md:h-[7rem]  xl:h-[8rem]   text-center flex items-center justify-center`}
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
          : "bg-white active:scale-95 transition-all hover:bg-hm_blue hover:text-white"
      }  w-fit text-4xl md:text-[3rem] capitalize px-3 py-2 rounded-xl min-h-[3rem] md:min-h-[5.25rem] max-w-[2.5rem] md:min-w-[4rem] lg:min-w-[6.82rem]  text-[#261676]`}
      onClick={() => (!isDisabled ? onClick(text) : null)}
    >
      {text}
    </button>
  );
};

const Game = () => {
  const {
    categoryTitle,
    categorySelected,
    chancesLeft,
    handleUpdateChanceLeft,
    handleUpdateModalContent,
    handleToggleModal,
  } = useContext(StoreContext);

  const [updatedCategories, setUpdatedCategories] = useState([]);
  const [progressBarPercentage, setProgressBarPercentage] = useState(100);

  const alphabets = [
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
  ];
  const [allAlphabets, setAllAlphabets] = useState([...alphabets]);

  const handleOnLetterClicked = (selectedLetter) => {
    selectedLetter = selectedLetter?.toLowerCase();

    // Disable Letter user selected
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

    const isSelectedLetterCorrect = updatedCategories.some(
      (category) => category.letter === selectedLetter
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
    handleUpdateChanceLeft();
  };

  useEffect(() => {
    setAllAlphabets([...alphabets]);
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

  useEffect(() => {
    setProgressBarPercentage(14.286 * chancesLeft);
  }, [chancesLeft]);

  useEffect(() => {
    if (!updatedCategories.length) return;

    if (
      updatedCategories.every(
        (category) => category.wasCorrectlyPicked === true
      )
    ) {
      handleUpdateModalContent(
        {
          textContent: "You Won",
          won: true,
          lost: false,
        },
        true
      );
    }
  }, [updatedCategories, chancesLeft]);

  return (
    <section className="pt-[1.5rem] md:pt-16 lg:pt-16 px-5 md:px-10 lg:px-[6.5rem] 2xl:px-[7rem] capitalize">
      <nav>
        <ul className="flex justify-between space-x-4  ">
          <li className="flex space-x-4  text-white flex-[0.5] items-center">
            <button
              onClick={() => {
                handleToggleModal();
                return;
                handleUpdateModalContent(
                  {
                    textContent: "Paused",
                    lost: false,
                    win: false,
                  },
                  true
                );
              }}
              className=" bg-gradient-to-b from-[#FE71FE] via-[#B785FF] to-[#7199FF] bg-hm_blue rounded-full p-3  text-white text-4xl  shadow-[#FE71FE] shadow w-fit tracking-wide hover:bg-fuchsia-300 cursor-pointer ring-offset-fuchsia-400 ring-offset-1 focus:ring-4 active:scale-95 md:scale-150 lg:scale-[2.5] transition-all ease-in"
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
            <h1 className="text-4xl lg:pl-14 md:text-5xl md:pl-8 lg:text-[5.5rem]">
              {categoryTitle}
            </h1>
          </li>
          <li className=" flex items-center  flex-[0.5]  lg:space-x-10">
            <div className="w-[50%] ml-auto ">
              <div
                className="flex w-full h-[24] bg-white py-2.5 px-2 rounded-full overflow-hidden items-center"
                role="progressbar"
                aria-valuenow={progressBarPercentage}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="flex flex-col justify-center rounded-full overflow-hidden bg-[#261676] text-md text-white text-center whitespace-nowrap  h-3  duration-500 transition-all ease-in-out"
                  style={{ width: `${progressBarPercentage}%` }}
                ></div>
              </div>
            </div>

            <div className="scale-50 lg:scale-100">
              <IconHeart />
            </div>
          </li>
        </ul>
      </nav>

      <section
        className={`${
          updatedCategories?.length <= 4
            ? "flex justify-center space-x-4"
            : `md:grid md:grid-cols-${updatedCategories?.length >=9 ? 7:updatedCategories?.length} md:gap-4 lg:flex lg:flex-wrap justify-center`
        } mt-[4.76rem] md:mt-[7rem] lg:mt-[5.5rem] w-full xl:px-[12rem]`}
      >
        {updatedCategories?.map((category, index) => (
          <Word
            key={`${index}`}
            text={category?.letter}
            isDisabled={!category?.wasCorrectlyPicked}
          />
        ))}
      </section>

      <ul className="md:grid md:grid-cols-9 lg:flex lg:flex-wrap lg:w-[100%] mt-[5rem] md:mt-[8.4rem] w-full grid grid-cols-8 gap-4 lg:justify-center 2xl:w-[80%] 2xl:mx-auto ">
        {allAlphabets.map(({ letter, wasPicked }) => (
          <WordAsKeyboard
            key={letter}
            isDisabled={wasPicked}
            text={letter}
            onClick={handleOnLetterClicked}
          />
        ))}
      </ul>
    </section>
  );
};

export default Game;
