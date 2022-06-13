import React from "react";

type Props = {
  counterValue?: string;
  counterLabel?: string;
};

const Counter: React.FC<Props> = ({ counterValue, counterLabel }) => {
  return (
    <>
      <div className="lg:w-auto md:w-1/2 w-full lg:mb-0 mb-6 text-center">
        <h1 className="md:text-6xl text-4xl font-bold text-primary uppercase mb-3">
          {counterValue}
        </h1>
        <p className="text-sm text-[#191919] uppercase">{counterLabel}</p>
      </div>
    </>
  );
};

export default Counter;
