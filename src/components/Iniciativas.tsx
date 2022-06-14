import React, { ReactNode } from "react";
import Cards from "../components/Cards";

type Props = {
  title?: string;
  subTitle?: string;
};

const Layout = ({ title, subTitle }: Props) => (
  <div className="flex justify-center w-full">
    <div className="xl:w-[75%] w-11/12 space-y-8 py-16">
      <div className="w-full flex justify-center">
        <div className="space-y-5 2xl:w-[85%] xl:w-3/4 w-4/5">
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

export default Layout;
