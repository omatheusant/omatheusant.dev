import React from "react";
import Section from "./Section";
import { Reveal } from "./utils/Reveal";
import ProjectCard from "./ProjectCard";
import { projects } from "@/constants";

const Projects = () => {
  return (
    <Section id="works">
      <Reveal delay={0.5} width="100%">
        <div className="flex justify-center mb-32">
          <h2 className="text-4xl sm:text-7xl">
            selected_ <br />
            works:
          </h2>
        </div>
        <div className="flex justify-center flex-col items-center gap-36">
          {projects.map((project, index) => {
            return (
              <Reveal delay={index - 1.5} key={index}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  subtitle={project.subtitle}
                  imageUrl={project.imageUrl}
                  direction={index % 2 !== 0 ? "left" : "right"}
                  deployUrl={project.deployUrl}
                  repoUrl={project.repoUrl}
                />
              </Reveal>
            );
          })}
        </div>
      </Reveal>

      <div className="flex flex-col text-left  items-center text-4xl md:5xl lg:text-7xl mt-32">
        <div className="max-w-[80%] flex flex-col">
          <div className="tracking-wide leading-tight">
            <Reveal delay={0.3}>I am always</Reveal>
            <Reveal delay={0.4}>Interested</Reveal>
            <Reveal delay={0.5}>
              About <strong className="text-warning">cool</strong> <br /> stuff.
            </Reveal>
            <Reveal delay={0.6}>
              Are you <br /> minding
              <br /> a <strong className="text-warning">project</strong>?
            </Reveal>
            <Reveal delay={0.7}>Lets talk. </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
