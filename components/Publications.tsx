import React from "react";
import { publications } from "../constants";
import { Spotlight } from "./ui/Spotlight";

const Publications = () => {
  return (
    <div className="relative max-w-7xl min-h-4xl px-4 py-3 opacity-65 ">
      <div className="pb-4 z-10">
        <ul className="flex flex-col gap-4">
          {publications.map((publication, index) => (
            <li
              key={index}
              className="lg:text-xl text-medium list-disc md:text-lg text-justify font-normal text-zinc-200"
            >
              {publication}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Publications;
