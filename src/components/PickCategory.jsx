import React, { useContext } from "react";
import { ReactComponent as IconBack } from "../assets/images/icon-back.svg";
import HeadingText from "./reusables/HeadingText";
import StoreContext from "../contexts/StoreContext";
import data from "../data.json";

const PickCategory = () => {
  const {
    handleUpdatePageIndex,
    handleCategorySelected,
    handleSetOptions,
    handleUpdateCategory,
  } = useContext(StoreContext);

  const categoriesToSelectFrom = [
    "Movies",
    "TV Shows",
    "Countries",
    "Capital Cities",
    "Animals",
    "Sports",
  ];
  return (
    <div>
      <div className="flex items-center justify-between pr-5 pt-4 md:pt-10 md:pr-10 md:pl-5">
        <button
          className="scale-50 md:scale-75 lg:scale-100 active:scale-95 "
          onClick={() => handleUpdatePageIndex(1)}
        >
          <IconBack />
        </button>
        <HeadingText text="Pick a Category" />
      </div>
      <ul className=" mt-[7.12rem] [&>li]:w-full px-6 md:px-10   shadow-lg text-2xl md:text-5xl capitalize  text-white space-y-4 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6">
        {categoriesToSelectFrom.map((category) => (
          <li key={category}>
            <button
              className="py-6 md:py-16 rounded-3xl transition-all outline-hm_blue  bg-hm_blue w-full tracking-wide hover:bg-[#5A8AFF] cursor-pointer ring-offset-blue-400 ring-offset-1 focus:ring-4 active:scale-95 "
              onClick={() => {
                const allCategories =
                  data.categories[`${category?.toLowerCase()}`];
                handleSetOptions(data.categories[`${category?.toLowerCase()}`]);

                const nonSelectedCategory = allCategories.filter(
                  (category) => !category.selected
                );

                const randomIndex = Math.floor(
                  Math.random() * nonSelectedCategory.length
                );

                const updatedSelectedCategory = {
                  name: nonSelectedCategory[randomIndex]?.name
                    ?.toLowerCase()
                    .replaceAll(" ", ""),
                  selected: nonSelectedCategory[randomIndex]?.selected,
                };

                handleUpdateCategory(
                  allCategories,
                  nonSelectedCategory[randomIndex]
                );
                handleCategorySelected(updatedSelectedCategory);
                handleUpdatePageIndex(3);
              }}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PickCategory;
