import React, { useState } from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoGoogle } from "react-icons/io";
import { RiTumblrFill } from "react-icons/ri";
import { FaPinterestP } from "react-icons/fa";
import cn from "classnames";
import Link from "next/Link";

type Props = {
  name?: string;
};

const Sidebar = ({ name }: Props) => {
  let [showSidebar, setShowSidebar] = useState<boolean>(true);
  let [showSocialIcons, setShowSocialIcons] = useState<boolean>(false);

  const handleShowSocialIcons = () => {
    setShowSocialIcons(!showSocialIcons);
  };
  return (
    <>
      {showSidebar === true ? (
        <div className="bg-sideColor md:w-[61px] md:h-screen h-14 w-14 md:rounded-none rounded-full md:p-0 p-5 fixed flex flex-col items-center duration-700 z-[99999]">
          <a className="duration-700 h-1/3 md:block hidden">
            <img
              className="h-[60px] w-[22px] mt-[51px] ml-1 cursor-pointer"
              src="/img/imageOne.svg"
              alt=""
            />
          </a>
          <div className="h-1/3 flex items-center">
            <svg
              onClick={() => setShowSidebar(false)}
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mt-4 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <div className="space-y-[0.7rem] h-1/3 flex flex-col justify-end mb-4 -ml-[2px]">
            {showSocialIcons === true && (
              <div className="space-y-[0.7rem]">
                <div className="h-[30px] w-[30px] rounded-full flex justify-center items-center bg-[#B61E24] hover:scale-125 duration-500 cursor-pointer">
                  <FaPinterestP className="h-5 w-5 text-white" />
                </div>
                <div className="h-[30px] w-[30px] rounded-full flex justify-center items-center bg-[#343467] cursor-pointer hover:scale-125 duration-500">
                  <RiTumblrFill className="h-5 w-5 text-white" />
                </div>
                <div className="h-[30px] w-[30px] rounded-full flex justify-center items-center bg-[#DB4538] cursor-pointer hover:scale-125 duration-500">
                  <IoLogoGoogle className="h-5 w-5 text-white" />
                </div>
                <div className="h-[30px] w-[30px] rounded-full flex justify-center items-center bg-[#47639E] cursor-pointer hover:scale-125 duration-500">
                  <TiSocialFacebook className="h-6 w-6 text-white" />
                </div>
              </div>
            )}

            <div className="md:block hidden">
              <div
                onClick={handleShowSocialIcons}
                className={cn(
                  "h-[30px] w-[30px] rounded-full text-white flex justify-center items-center cursor-pointer",
                  {
                    "bg-black": !showSocialIcons,
                    "bg-[#BABABA]": showSocialIcons,
                  }
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={cn("h-4 w-4", {
                    "rotate-0 duration-700": !showSocialIcons,
                    "rotate-45 duration-700": showSocialIcons,
                  })}
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
      ) : (
        <div className="w-full h-screen fixed bg-white z-[99999999] duration-700">
          <div className="md:h-1/2 h-full w-full flex flex-col justify-between">
            <div className="p-5 md:h-1/2">
              <svg
                onClick={() => setShowSidebar(true)}
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20 12H4"
                />
              </svg>
            </div>
            <div className="gap-y-3 px-3 w-full md:h-1/2 flex flex-col md:justify-center justify-start">
              <a
                href="#"
                className="uppercase text-5xl font-bold hover:text-btnYellow duration-700"
              >
                Home
              </a>
              <a
                href="#"
                className="uppercase text-5xl font-bold hover:text-btnYellow duration-700"
              >
                Eventos
              </a>
              <a
                href="#"
                className="uppercase text-5xl font-bold hover:text-btnYellow duration-700"
              >
                Contact
              </a>
            </div>
            <div className="w-full md:hidden mb-3">
              <div className="gap-x-[0.7rem] px-3 flex bottom-0 h-full">
                <div className="h-[30px] w-[30px] rounded-full flex justify-center items-center bg-[#B61E24] hover:scale-125 duration-500 cursor-pointer">
                  <FaPinterestP className="h-5 w-5 text-white" />
                </div>
                <div className="h-[30px] w-[30px] rounded-full flex justify-center items-center bg-[#343467] cursor-pointer hover:scale-125 duration-500">
                  <RiTumblrFill className="h-5 w-5 text-white" />
                </div>
                <div className="h-[30px] w-[30px] rounded-full flex justify-center items-center bg-[#DB4538] cursor-pointer hover:scale-125 duration-500">
                  <IoLogoGoogle className="h-5 w-5 text-white" />
                </div>
                <div className="h-[30px] w-[30px] rounded-full flex justify-center items-center bg-[#47639E] cursor-pointer hover:scale-125 duration-500">
                  <TiSocialFacebook className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
