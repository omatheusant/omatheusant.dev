import Avaliable from "@/components/Avaliable";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="mt-16 w-full">
      <div className="relative">
        <h1 className="text-5xl sm:text-8xl">
          Hello <br /> I am Matheus 
        </h1>
        <Avaliable/>
        <div className="absolute left-[35rem] mt-3">
          <Image
            src="/assets/icons/arrow-move.svg"
            width={160}
            height={100}
            alt="arrow"
            className="rotate-[20deg] "
          />
          <div className="flex flex-col absolute -right-44 -bottom-5">
            <span>Developer</span>
            <span>Web Designer</span>
            <span>Freelancer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
