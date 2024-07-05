import React from "react";
import { HoverEffect } from "./ui/CardHoverEffect";
import { qualifications } from "../constants";

const Qualifications = () => {
  return (
    <section id="qualification" className="w-full mt-14">
      <div className="pb-2 pt-6">
        <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
          Academic Qualifications
        </p>
        <h2 className="font-black text-white lg:text-[70px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
          M.E., M.B.A., Ph.D.
        </h2>
      </div>
      <div className="max-w-7xl mx-auto">
        <HoverEffect items={qualifications} className="w-full h-full" />
      </div>
    </section>
  );
};

export default Qualifications;
