import { univiaPro } from "@/utils/fonts";
import Image from "next/image";
import React from "react";
import { Reveal } from "./utils/Reveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  description: string;
  deployUrl: string;
  repoUrl: string;
  direction?: "right" | "left";
}

const ProjectCard = ({
  imageUrl,
  title,
  subtitle,
  description,
  direction = "left",
  repoUrl,
  deployUrl,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col gap-20">
      <Reveal>
        <div className="flex flex-col">
          <div className="flex sm:flex-row flex-col gap-9 ">
            <div
              className={`${
                direction === "left" ? "" : "order-2"
              } overflow-hidden cursor-pointer hover:scale-90 transition-all duration-1000 ease-in-out`}
            >
              <Link href={deployUrl} target="_blank">
                <Image
                  src={
                    imageUrl ||
                    "https://i.pinimg.com/564x/04/10/76/04107698f8f7f9612652ed33e150a392.jpg"
                  }
                  width={500}
                  height={120}
                  alt="Project image"
                  className=" w-[500px] h-[200px] object-cover hover:scale-125 duration-1000 transition-all ease-in-out grayscale-[50%]"
                  quality={100}
                />
              </Link>
            </div>
            <div
              className={`${
                direction === "left" ? "" : "order-1"
              } flex flex-col gap-1 order-1`}
            >
              <h3 className="text-lg">
                {title}_ <br />
                {subtitle}
              </h3>
              <p
                className={`${univiaPro.className} text-sm opacity-70 max-w-[400px] sm:ml-10 `}
              >
                {description}
              </p>
              <Link
                href={repoUrl}
                className=" flex  uppercase justify-end gap-2 mt-5 items-center text-[0.6rem] tracking-widest"
                target="_blank"
              >
                View on github <ArrowRight size={"1rem"} />
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default ProjectCard;
