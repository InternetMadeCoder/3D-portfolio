import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28 relative group" key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <div
            className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300 
            bg-[#1d1836] text-white px-3 py-1 rounded-lg text-sm pointer-events-none
            shadow-lg border border-[#2f2d52] whitespace-nowrap"
          >
            {technology.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
