import React from "react";
import Section from "./Section";
import Link from "next/link";
import { univiaPro } from "@/utils/fonts";

const Footer = () => {
  return (
    <Section
      id="contact-me"
      className="absolute bottom-0 left-0"
      customPaddings="lg:py-2 lg:px-1"
    >
      <footer className="w-full bg-accent items-center lg:py-10 lg:px-60 flex flex-col md:flex-row py-5 px-10 justify-between text-dark rounded-sm">
        <ul className="flex gap-3 ">
          <li>
            <Link href="https://linkedin.com/in/omatheussant">Linkedin</Link>
          </li>
          <li>
            <Link href="https://github.com/omatheusant">Github</Link>
          </li>
          <li>
            <Link href="mailto:mat.alvessantana@gmail.com">Email</Link>
          </li>
        </ul>

        <Link href="#" className={`${univiaPro.className}`}>
          back to top
        </Link>
      </footer>
    </Section>
  );
};

export default Footer;
