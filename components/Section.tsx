import React, { ReactNode } from "react";

interface SectionProps {
  className?: string;
  id?: string;
  crosses?: boolean;
  crossesOffset?: string;
  customPaddings?: string;
  children?: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, customPaddings, children }) => {
  return (
    <div
      id={id}
      className={`w-full
      relative 
      ${customPaddings || `py-10 lg:py-16 xl:py-20 `} `}
    >
      {children}
    </div>
  );
};

export default Section;
