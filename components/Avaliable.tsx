import React from "react";
import moment from "moment";
import { univiaPro } from "@/utils/fonts";
import Image from "next/image";

const Avaliable = () => {
  const month = moment().format("MMM");
  const day = moment().format("DD");

  return (
    <div className="flex gap-3 absolute items-center left-56  top-[300px]" >
      <Image src="/assets/images/circle.svg" width={1000} height={1000} alt="circle" className="absolute -top-16 -left-44 opacity-50 rotate-12"/>
      <span className="text-7xl text-stroke text-transparent z-10">{day}</span>
      <div className="uppercase flex flex-col tracking-widest justify-end w-[200px]  z-10 text-sm">
        {month}
        <span className={`lowercase -mt-1  ${univiaPro.className} z-10 text-xs`}>avaliable for work</span>
      </div>
    </div>
  );
};

export default Avaliable;
