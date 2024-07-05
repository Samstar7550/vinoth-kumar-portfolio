import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { CardBody, CardContainer, CardItem } from "./ui/Card3D";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="pb-20 h-full w-screen">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="-top-4 0 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.02] bg-grid-black/[0.2] absolute flex items-center top-0 left-0 justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-20 ">
        <div className="flex justify-center relative mt-5 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[40vw] flex flex-col items-center justify-center">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black-100 dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border  ">
                  <CardItem translateZ="100" className="w-full">
                    <Image
                      src="Profile.jpg"
                      height="1000"
                      width="1000"
                      className="h-[28rem] lg:h-[32rem] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </div>
        </div>
        <div className="flex justify-center relative z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center">
            <TextGenerateEffect
              className={`text-left text-[40px] text-white md:text-5xl lg:text-6xl`}
              words="Hi, I'm Vinoth Kumar"
              type="name"
            />
            <TextGenerateEffect
              className="text-xl md:text-2xl lg:text-3xl pr-20 font-normal text-left mb-2 md:mb-0 lg:mb-0 "
              words="A Professor Transforming Knowledge into Seamless Learning Experiences"
              type="description"
            />
            <a href="#qualification">
              <MagicButton
                title="View Qualifications"
                icon={<FaLocationArrow />}
                position="right"
                otherClasses="text-base"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
