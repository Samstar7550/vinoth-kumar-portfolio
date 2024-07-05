"use client";

import React from "react";
import { Experience, experiences } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";

const ExperenceCard = ({ experience }: { experience: Experience }) => {
  return (
    <VerticalTimelineElement
      visible={true}
      contentStyle={{ background: "#1d1836", color: "#ffff" }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={`${experience.dateOfJoining} - ${experience.dateOfLeaving}`}
      iconStyle={{ background: "#000319", color: "#fff" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={`${experience.icon}`}
            alt={experience.institution}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <h3 className="text-white text-[24px] font-bold">
        {experience.designation}
      </h3>
      <h4
        className="text-zinc-400 text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.institution}
      </h4>
      <p>{experience.experience}</p>
    </VerticalTimelineElement>
  );
};

const Experiences = () => {
  return (
    <section id="experience" className="w-full mt-10">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 1 }}
        className="pb-2 pt-6"
      >
        <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
          My Job Journey
        </p>
        <h2 className="font-black text-white lg:text-[70px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
          Experiences
        </h2>
      </motion.div>
      <div className="max-w-7xl mx-auto">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperenceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experiences;
