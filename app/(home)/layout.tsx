import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className="w-full h-full px-6 py-4">{children}</main>;
};

export default HomeLayout;
