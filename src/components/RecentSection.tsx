import React from "react";
import Slider from "../components/Slider";

type Props = {
  msg?: string;
};

const MostRecent = ({ msg }: Props) => {
  return (
    <>
      <div className="h-full w-full">
        <div className="flex justify-center 2xl:ml-36 xl:ml-28 ml-0">
          <div className="2xl:w-[72%] xl:w-4/5 w-11/12 space-y-28 mt-20">
            <div className="space-y-5 w-full">
              <p className="uppercase text-yellow-300 text-sm ">
                MANTENTE AL DÍA
              </p>
              <h1 className="uppercase font-monts font-bold md:text-[45px] text-[38px]">
                LO MÁS RECIENTE
              </h1>
            </div>
            <div className="h-[65%] w-full flex xl:justify-start lg:justify-end md:justify-center">
              <Slider />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MostRecent;
