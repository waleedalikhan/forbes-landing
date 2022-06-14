import React from "react";

type Props = {
  name?: string;
};

const PlanBar = ({ name }: Props) => {
  return (
    <>
      <div className="w-full h-40 bg-btnYellow flex justify-center items-center">
        <div className="w-full h-full flex md:justify-evenly items-center md:flex-nowrap flex-wrap md:pl-0 pl-4">
          <h2 className="text-white font-monts font-bold md:text-[35px] text-[28px]">
            PLANIFIQUE SU CAMPAÑA
          </h2>
          <a href="#">
            <span className="text-[18px] w-56 h-12 bg-black text-white flex hover:border-2 border-black hover:bg-transparent duration-300 hover:text-black justify-start items-center pl-8 font-monts">
              MEDIA KIT
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default PlanBar;
