import React from "react";
import { publications, workshops } from "../constants";

const EventsParticipated = () => {
  return (
    <div className="relative max-w-7xl min-h-4xl px-4 py-3 opacity-65 ">
      <div className="pb-4 z-10">
        <ul className="flex flex-col gap-4">
          {workshops.map((events, index) => (
            <li
              key={index}
              className="lg:text-xl text-medium list-disc md:text-lg text-justify font-normal text-zinc-200"
            >
              {events}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventsParticipated;
