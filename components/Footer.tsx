import React from "react";
import Section from "./Section";
import Link from "next/link";
import { univiaPro } from "@/utils/fonts";

const Footer = () => {
  return (
    <Section className="absolute bottom-0 left-0" customPaddings="py-2 px-1">
      <footer className="w-full bg-accent items-center py-10 px-60 flex justify-between text-dark rounded-sm">
        <ul className="flex gap-3 ">
          <li>
            <Link href="https://linkedin.com/in/omatheussant">Linkedin</Link>
          </li>
          <li>
            <Link href="https://linkedin.com/in/omatheussant">Github</Link>
          </li>
          <li>
            <Link href="https://linkedin.com/in/omatheussant">Email</Link>
          </li>
        </ul>

        <Link href="#hero" className={`${univiaPro.className}`}>
          back to top
        </Link>
      </footer>
    </Section>
  );
};

export default Footer;
