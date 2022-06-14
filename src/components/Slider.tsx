import React, { useEffect, useState } from "react";
import cn from "classnames";
type Props = {
  name?: string;
};

const Slider = ({ name }: Props) => {
  let [showFirst, setShowFirst] = useState<boolean>(false);
  let [showSecond, setShowSecond] = useState<boolean>(false);
  let [showThird, setShowThird] = useState<boolean>(false);
  let [sliderSteps, setSliderSteps] = useState<number>(1);
  const [isActive, setIsActive] = useState<boolean>(false);

  const renderSliderSteps = () => {
    switch (sliderSteps) {
      case 1:
        return (
          <div className="h-full w-full absolute bg-[url(/img/promesas_use.jpg)] bg-cover bg-no-repeat bg-center duration-500 md:p-20 p-7">
            <div className="h-80 sm:w-[19rem] w-[14rem] bg-white p-10 space-y-3 mt-5">
              <h1 className="font-monts font-bold">
                30 promesas de los negocios
              </h1>
              <h5 className="font-monts font-semibold text-btnYellow">2022</h5>
              <p className="font-monts font-semibold">
                Resiliencia, la fórmula frente a un entorno en recuperación
              </p>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="h-full w-full absolute  bg-[url(/img/ecommerce.jpg)] bg-cover bg-no-repeat bg-center duration-500 md:p-20 p-7">
            <div className="h-80 sm:w-[19rem] w-[14rem] bg-white p-10 space-y-3 mt-5">
              <h1 className="font-monts font-bold">
                E-commerce, fintech, & logstica
              </h1>
              <h5 className="font-monts font-semibold text-btnYellow">2022</h5>
              <p className="font-monts font-semibold">Disruptores digitales</p>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="h-full w-full absolute  bg-[url(/img/foro_hitachi.webp)] bg-cover bg-no-repeat bg-center duration-500 md:p-20 p-7">
            <div className="h-80 sm:w-[19rem] w-[14rem] bg-white p-10 space-y-3 mt-5">
              <h1 className="font-monts font-bold">Hitachi Gathering</h1>
              <h5 className="font-monts font-semibold text-btnYellow">2018</h5>
              <p className="font-monts font-semibold">
                México hacia un futuro energético sostenible
              </p>
            </div>
          </div>
        );
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (sliderSteps === 3) {
        setSliderSteps(1);
      } else {
        setSliderSteps((steps) => steps + 1);
      }
    }, 3000);
  });
  return (
    <>
      <div className="flex lg:flex-row flex-col items-center xl:gap-16 gap-10 h-[530px] xl:w-[1190px] lg:w-[930px w-full mb-10">
        <div className="gap-5 flex lg:flex-col sm:-ml-20 -ml-0">
          <div
            onClick={() => setSliderSteps(1)}
            className={cn(" h-5 w-5 cursor-pointer", {
              "bg-yellow-300": sliderSteps === 1,
              "border-2 border-yellow-300": sliderSteps !== 1,
            })}
            // className="bg-yellow-300 h-5 w-5 cursor-pointer"
          ></div>
          <div
            onClick={() => setSliderSteps(2)}
            className={cn(" h-5 w-5 cursor-pointer", {
              "bg-yellow-300": sliderSteps === 2,
              "border-2 border-yellow-300": sliderSteps !== 2,
            })}
          ></div>
          <div
            onClick={() => setSliderSteps(3)}
            className={cn(" h-5 w-5 cursor-pointer", {
              "bg-yellow-300": sliderSteps === 3,
              "border-2 border-yellow-300": sliderSteps !== 3,
            })}
          ></div>
        </div>
        <div className="relative w-full h-full">{renderSliderSteps()}</div>
      </div>
    </>
  );
};

export default Slider;
