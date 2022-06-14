import React, { ReactNode } from "react";
import Cards from "../components/Cards";

const Iniciativas = () => (
  <div className=" md:py-24 py-16">
    <div className="xl:container mx-auto xl:px-0 lg:px-6 px-4">
      <div className="w-full flex justify-center">
        <div className="space-y-5 w-full">
          <h1 className="uppercase font-bold md:text-[45px] text-[35px] font-monts">
            Iniciativas 2018
          </h1>
          <a
            href="#"
            className="uppercase text-btnYellow text-[14px] font-monts hover:underline"
          >
            foroforbes.com
          </a>
        </div>
      </div>
      <div>
        <Cards />
      </div>
    </div>
  </div>
);

export default Iniciativas;
