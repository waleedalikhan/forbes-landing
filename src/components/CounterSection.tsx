import React from "react";
import Counter from "@/components/Counter";

const CounterSection: React.FC = () => {
  return (
    <>
      <section className="py-10 bg-[#f9f9f9]">
        <div className="xl:container mx-auto xl:px-0 lg:px-6 px-4">
          <div className="flex justify-between lg:flex-nowrap flex-wrap items-center">
            <Counter counterValue="+600" counterLabel="asistentes en vivo" />
            <Counter counterValue="+800" counterLabel="impresiones" />
            <Counter counterValue="+100" counterLabel="medios asistentes" />
            <div className="lg:text-left text-center lg:w-auto md:w-1/2 w-full">
              <p className="text-primary font-bold text-[25px] uppercase">
                trending
              </p>
              <p className="text-black font-bold text-[25px] uppercase">
                topic
              </p>
              <p className="text-primary font-bold text-[25px] uppercase">
                nacional
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CounterSection;
