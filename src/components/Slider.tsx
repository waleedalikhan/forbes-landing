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
          <div className="h-full w-full absolute bg-[url(/img/slideOne.jpg)] bg-cover bg-no-repeat bg-center duration-500 md:p-20 p-7">
            <div className="h-80 w-[19rem] bg-white p-10 space-y-3 mt-5">
              <h3 className="font-monts font-bold">CYBER SECURITY</h3>
              <h5 className="font-monts font-semibold text-btnYellow">
                SUMMIT
              </h5>
              <p className="font-monts">
                Primer foro de ciberseguridad en México
              </p>
              <button className="h-10 w-36 bg-btnYellow hover:bg-black hover:text-white duration-500 font-monts font-semibold text-sm">
                SABER MÁS
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="h-full w-full absolute  bg-[url(/img/slideTwo.jpg)] bg-cover bg-no-repeat bg-center duration-500 md:p-20 p-7">
            <div className="h-80 w-[19rem] bg-white p-10 space-y-3 mt-5">
              <h3 className="font-monts font-bold">FORO FORBES</h3>
              <h5 className="font-monts font-semibold text-btnYellow">2018</h5>
              <p className="font-monts font-semibold">
                EL CAMINO A LA TRANSICIÓN{" "}
                <span className="font-normal">
                  El evento de negocios en México | 17 de Septiembre
                </span>
              </p>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="h-full w-full absolute  bg-[url(/img/slideThree.jpg)] bg-cover bg-no-repeat bg-center duration-500 md:p-20 p-7">
            <div className="h-80 w-[19rem] bg-white p-10 space-y-3 mt-5">
              <h3 className="font-monts font-bold">Foro Energía</h3>
              <h5 className="font-monts font-semibold text-btnYellow">
                LA NUEVA RIQUEZA
              </h5>
              <p className="font-monts">
                SE CONSOLIDA LA ENERGÍA COMO EL PRINCIPAL MOTOR DE DESARROLLO
                ELÉCTRICO EN MÉXICO
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
    }, 2000);
  });
  return (
    <>
      <div className="flex lg:flex-row flex-col items-center xl:gap-16 gap-10 h-[530px] xl:w-[1190px] lg:w-[930px] w-full mb-10">
        <div className="gap-5 flex lg:flex-col -ml-20">
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
