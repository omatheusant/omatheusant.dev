import Header from "@/components/Header";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="size-full bg-primary text-primary px-10 py-4">
      <Header />
      {children}
    </main>
  );
};

export default HomeLayout;
