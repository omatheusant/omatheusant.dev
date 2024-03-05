import Image from "next/image";
import React from "react";
import Info from "../Info";
import { Reveal } from "../utils/Reveal";

const Hero = () => {
  return (
    <div className="relative mt-16 w-full">
      <div className="relative">
        <Reveal>
          <h1 className="text-5xl sm:text-8xl">
            Hello <br /> I am Matheus
          </h1>
        </Reveal>
        <div className="absolute left-[35rem] mt-3">
          <Reveal delay={2} width="100%">

          <Image
            src="/assets/icons/arrow-move.svg"
            width={160}
            height={100}
            alt="arrow"
            className="rotate-[20deg] "

            />
            </Reveal>
          <div className="flex flex-col absolute -right-44 -bottom-5">
            <Reveal delay={0.30}>Developer</Reveal>
            <Reveal delay={0.40}>Web Designer</Reveal>
            <Reveal delay={0.50}>Freelancer</Reveal>
          </div>
        </div>
    
        <Info />
      </div>
    </div>
  );
};

export default Hero;
