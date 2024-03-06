import React from "react";
import Section from "./Section";
import { Reveal } from "./utils/Reveal";
import Image from "next/image";
import { univiaPro } from "@/utils/fonts";

const About = () => {
  return (
    <Section>
      <Reveal delay={0.8} width="100%">
        <div className="flex mt-10 justify-center text-left mb-10">
          <h2 className="text-4xl sm:text-7xl">
            about_ <br />
            me:
          </h2>
        </div>
      </Reveal>
      <Reveal delay={0.5} width="100%">
        <div className="flex justify-evenly items-center">
          <div
            className={`${univiaPro.className} text-xl uppercase  max-w-[500px] tracking-wide leading-snug indent-24`}
          >
            My <strong className="text-warning">passion </strong> lies in
            dreaming up ideas and turning them into reality. I collaborate with
            companies, startups, and individuals to craft a blueprint for
            digital <strong className="text-warning">success</strong>. I&apos;m
            always open to new opportunities and eager to explore potential
            collaborations. I love minimal and brutalist design. I love nature,
            pizza and art.
          </div>
          <Image
            src="/assets/images/michelangello.png"
            width={400}
            height={400}
            alt="Michellangello David"
            className=""
          />
        </div>
      </Reveal>
    </Section>
  );
};

export default About;
