import React from "react";

const HeadingText = ({text='How To Play',classNames=''}) => {
  return (
    <h1 className={`text-5xl lg:text-[8.5rem] md:text-[6.5rem] text-center w-full  bg-gradient-to-b from-[#5DA9EF] via-[#5DA9EF]  to-[#fff] inline-block text-transparent  bg-clip-text ${classNames}`}>
      {text}
    </h1>
  );
};

export default HeadingText;
