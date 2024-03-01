import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="flex px-6 py-10 justify-end items-center fixed top-0 left-0 w-full">
      <Navbar />
    </header>
  );
};

export default Header;
