import React from "react";
import { Tabs } from "./ui/Tabs";
import Hero from "./Hero";
import Publications from "./Publications";
import EventsParticipated from "./EventsParticipated";
import EventsOrganized from "./EventsOrganized";
import Contributions from "./Contributions";

const MultiTab = () => {
  const tabs = [
    {
      title: "Publications",
      value: "Publications",
      content: (
        <div className="max-w-7xl overflow-y-scroll overflow-x-hidden relative bg-[#0c0c3a] h-full rounded-2xl p-5 shadow-sm shadow-white-200/50 bg-gradient-to-br from-purple-700 to-violet-900">
          <Publications />
        </div>
      ),
    },
    {
      title: "Participated",
      value: "Participated",
      content: (
        <div className="max-w-7xl overflow-y-scroll overflow-x-hidden relative bg-[#0c0c3a] h-full rounded-2xl p-5 shadow-sm shadow-white-200/50 bg-gradient-to-br from-purple-700 to-violet-900">
          <EventsParticipated />
        </div>
      ),
    },
    {
      title: "Organized",
      value: "Organized",
      content: (
        <div className="max-w-7xl overflow-y-scroll overflow-x-hidden relative bg-[#0c0c3a] h-full rounded-2xl p-5 shadow-sm shadow-white-200/50 bg-gradient-to-br from-purple-700 to-violet-900">
          <EventsOrganized />
        </div>
      ),
    },
    {
      title: "Contributions",
      value: "Contributions",
      content: (
        <div className="max-w-7xl overflow-y-scroll overflow-x-hidden relative bg-[#0c0c3a] h-full rounded-2xl p-5 shadow-sm shadow-white-200/50 bg-gradient-to-br from-purple-700 to-violet-900">
          <Contributions />
        </div>
      ),
    },
  ];
  return (
    <section id="events" className="w-full h-fit mt-14">
      <div className="pb-2 pt-10">
        <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
          Organized & Participated
        </p>
        <h2 className="font-black text-white lg:text-[70px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
          Events and Workshops
        </h2>
      </div>
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-7xl mx-auto w-full  items-start justify-start">
        <Tabs tabs={tabs} />
      </div>
    </section>
  );
};

export default MultiTab;

const DummyContent = () => {
  return <Hero />;
};
