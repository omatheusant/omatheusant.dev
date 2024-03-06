import React from "react";
import moment from "moment";
import { univiaPro } from "@/utils/fonts";
import Image from "next/image";
import { Reveal } from "./utils/Reveal";

const Info = () => {
  const month = moment().format("MMM");
  const day = moment().format("DD");

  return (
    <div className="flex gap-3 absolute items-center left-56  top-[300px] mt-7">
      <Image
        src="/assets/images/circle.svg"
        width={1000}
        height={1000}
        alt="circle"
        className="absolute -top-16 -left-44  rotate-12 opacity-30"
      />
      <Reveal delay={1}>
        <span className="text-7xl text-stroke text-transparent z-10">
          {day}
        </span>
      </Reveal>

      <Reveal delay={1}>
        <div className="uppercase flex flex-col tracking-widest justify-end w-[200px]  z-10 text-sm">
          {month}
          <span
            className={`lowercase -mt-1  ${univiaPro.className} z-10 text-xs animate-pulse`}
          >
            avaliable for work
          </span>
        </div>
      </Reveal>
      <span
        className={`${univiaPro.className} font-thin absolute tracking-[10px] -left-[4.75rem] text-sm uppercase -bottom-[3.80rem] opacity-40`}
      >
        SHOW <br />
        CREATIVITY
      </span>
      <div
        className={`${univiaPro.className} absolute font-light min-w-[500px] left-16 -bottom-[14rem]`}
      >
        <Reveal delay={0.5}>
          <p className="text-lg">
            I am a{" "}
            <strong className="text-warning">Full-stack Developer</strong> and a
            UX/UI Design based in Brazil with one year of experience. National
            customers have relied on me for design, implementation and
            management of their digital products.
          </p>
        </Reveal>
      </div>
    </div>
  );
};

export default Info;
