import React from "react";

type Props = {
  heading?: string;
  linkTitle?: string;
  linkPath?: string;
};

const SectionHeading: React.FC<Props> = ({ heading, linkTitle, linkPath }) => {
  return (
    <>
      <h1 className="font-bold text-black md:text-[45px] text-3xl uppercase mb-4">
        {heading}
      </h1>
      <a
        href={linkPath}
        className="text-sm text-primary font-semibold hover:underline"
      >
        {linkTitle}
      </a>
    </>
  );
};

export default SectionHeading;
