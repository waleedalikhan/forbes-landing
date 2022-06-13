import React from "react";

const BannerComponent: React.FC = () => {
  return (
    <>
      <main className="lg:h-[801px] h-full lg:py-0 py-5 w-full relative banner-gradient">
        <div className="xl:container mx-auto xl:px-0 lg:px-6 px-4 h-full">
          <div className="flex flex-col flex-wrap h-full justify-between md:pt-6 md:pb-20">
            <div className="lg:mb-0 md:mb-20 mb-10">
              <img src="/logo.svg" alt="" className="md:w-[300px] w-[150px]" />
            </div>
            <div className="md:w-[400px] w-full">
              <h1 className="text-primary md:text-5xl text-3xl uppercase font-bold mb-2">
                FORBES Events
              </h1>
              <p className="text-white md:text-[40px] text-2xl uppercase font-bold leading-tight">
                CONTENIDO Y HOSPITALIDAD DE PRIMERA CLASE
              </p>
              <div className="my-5">
                <a
                  href="#"
                  className="text-primary text-[17px] font-bold uppercase hover:underline"
                >
                  foroforbes.com
                </a>
              </div>
              <p className="text-white text-[17px]">
                FORO FORBES REINVENTANDO MÉXICO SEPTIEMBRE 2017.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BannerComponent;
