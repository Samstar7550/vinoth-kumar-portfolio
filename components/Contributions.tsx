import React from "react";
import { contributions } from "../constants";

const Contributions = () => {
  return (
    <div className="relative max-w-7xl min-h-4xl px-4 py-3 opacity-65 ">
      <div className="pb-4 z-10">
        <ol className="flex flex-col gap-4 list-decimal">
          <li>
            <h2 className="lg:text-xl text-normal font-bold text-white underline pb-2">
              HoD Association Chairperson:
            </h2>
            <ul className="flex flex-col gap-1 list-inside">
              {contributions.university.HoD_Association_Chairperson.map(
                (contributions, index) => (
                  <li
                    key={index}
                    className="lg:text-xl text-medium list-disc md:text-lg text-justify font-normal text-zinc-200"
                  >
                    {contributions}
                  </li>
                )
              )}
            </ul>
          </li>
          <li>
            <h2 className="lg:text-xl text-normal font-bold text-white underline pb-2">
              Guest Lecture:
            </h2>
            <ul className="flex flex-col gap-1 list-inside">
              {contributions.university.Guest_Lecture.map(
                (contributions, index) => (
                  <li
                    key={index}
                    className="lg:text-xl text-medium list-disc md:text-lg text-justify font-normal text-zinc-200"
                  >
                    {contributions}
                  </li>
                )
              )}
            </ul>
          </li>
          <li>
            <h2 className="lg:text-xl text-normal font-bold text-white underline pb-2">
              Membership Professional Bodies:
            </h2>
            <ul className="flex flex-col gap-1 list-inside">
              {contributions.university.Membership_Professional_Bodies.map(
                (contributions, index) => (
                  <li
                    key={index}
                    className="lg:text-xl text-medium list-disc md:text-lg text-justify font-normal text-zinc-200"
                  >
                    {contributions}
                  </li>
                )
              )}
            </ul>
          </li>
          <li>
            <h2 className="lg:text-xl text-normal font-bold text-white underline pb-2">
              NPTEL LC SPOC:
            </h2>
            <ul className="flex flex-col gap-1 list-inside">
              {contributions.university.NPTEL_LC_SPOC.map(
                (contributions, index) => (
                  <li
                    key={index}
                    className="lg:text-xl text-medium list-disc md:text-lg text-justify font-normal text-zinc-200"
                  >
                    {contributions}
                  </li>
                )
              )}
            </ul>
          </li>
          <li>
            <h2 className="lg:text-xl text-normal font-bold text-white underline pb-2">
              Network Coordinator:
            </h2>
            <ul className="flex flex-col gap-1 list-inside">
              {contributions.university.Network_Coordinator.map(
                (contributions, index) => (
                  <li
                    key={index}
                    className="lg:text-xl text-medium list-disc md:text-lg text-justify font-normal text-zinc-200"
                  >
                    {contributions}
                  </li>
                )
              )}
            </ul>
          </li>
          <li>
            <h2 className="lg:text-xl text-normal font-bold text-white underline pb-2">
              Training Placement Officer:
            </h2>
            <ul className="flex flex-col gap-1 list-inside">
              {contributions.university.Training_Placement_Officer.map(
                (contributions, index) => (
                  <li
                    key={index}
                    className="lg:text-xl text-medium list-disc md:text-lg text-justify font-normal text-zinc-200"
                  >
                    {contributions}
                  </li>
                )
              )}
            </ul>
          </li>
          <li>
            <h2 className="lg:text-xl text-normal font-bold text-white underline pb-2">
              Website Coordinator Administrator:
            </h2>
            <ul className="flex flex-col gap-1 list-inside">
              {contributions.university.Website_Coordinator_Administrator.map(
                (contributions, index) => (
                  <li
                    key={index}
                    className="lg:text-xl text-medium list-disc md:text-lg text-justify font-normal text-zinc-200"
                  >
                    {contributions}
                  </li>
                )
              )}
            </ul>
          </li>
          <li>
            <h2 className="lg:text-xl text-normal font-bold text-white underline pb-2">
              Reviewer Journals:
            </h2>
            <ul className="flex flex-col gap-1 list-inside">
              {contributions.university.Reviewer_Journals.map(
                (contributions, index) => (
                  <li
                    key={index}
                    className="lg:text-xl text-medium list-disc md:text-lg text-justify font-normal text-zinc-200"
                  >
                    {contributions}
                  </li>
                )
              )}
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Contributions;
