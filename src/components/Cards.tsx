import React from "react";

type Props = {
  name?: string;
};

const Cards = ({ name }: Props) => {
  return (
    <div className="w-full space-y-6 flex flex-col justify-between">
      <div className="flex flex-wrap w-full h-full xl:gap-4  gap-7 justify-between mt-20">
        <div className="2xl:w-[25%] xl:w-[28%] lg:w-[32%] md:w-2/5 w-full h-full cursor-pointer flex flex-col items-center">
          <div className="xl:w-[300px] w-[250px]">
            <img src="/img/cardOne.svg" alt="" />
          </div>
          <div className="w-16 h-1 bg-btnYellow mt-8 rounded-full"></div>
        </div>
        <div className="2xl:w-[25%] xl:w-[28%] lg:w-[32%] md:w-2/5 w-full h-full flex flex-col items-center">
          <div className="xl:w-[220px] w-[183px]">
            <img src="/img/cardTwo.svg" alt="" />
          </div>
          <div className="w-16 h-1 bg-btnYellow mt-8 rounded-full"></div>
        </div>
        <div className="2xl:w-[25%] xl:w-[28%] lg:w-[32%] md:w-2/5 w-full flex flex-col items-center">
          <div className="xl:w-[220px] w-[183px]">
            <img src="/img/cardThree.png" alt="" />
          </div>
          <div className="w-16 h-1 bg-btnYellow mt-10 rounded-full"></div>
        </div>
        <div className="2xl:w-[25%] xl:w-[28%] lg:w-[32%] md:w-2/5 w-full">
          <img src="/img/cardFour.svg" alt="" />
          <div className="flex justify-center">
            <div className="bg-btnYellow h-9 w-8 flex justify-center items-center hover:border-[1px] border-black hover:bg-transparent cursor-pointer duration-150">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="2xl:w-[25%] xl:w-[28%] lg:w-[32%] md:w-2/5 w-full">
          <img src="/img/cardFive.svg" alt="" />
          <div className="flex justify-center">
            <div className="bg-btnYellow h-9 w-8 flex justify-center items-center hover:border-[1px] border-black hover:bg-transparent cursor-pointer duration-150">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="2xl:w-[25%] xl:w-[28%] lg:w-[32%] md:w-2/5 w-full flex flex-col justify-end">
          <img src="/img/cardSix.svg" alt="" />
          <div className="flex justify-center">
            <div className="bg-btnYellow h-9 w-8 flex justify-center items-center hover:border-[1px] border-black hover:bg-transparent cursor-pointer duration-150">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="2xl:w-[25%] xl:w-[28%] lg:w-[32%] md:w-2/5 w-full">
          <img src="/img/cardSeven.svg" alt="" />
          <div className="flex justify-center">
            <div className="bg-btnYellow h-9 w-8 flex justify-center items-center hover:border-[1px] border-black hover:bg-transparent cursor-pointer duration-150 ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
