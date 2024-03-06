import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="flex px-6 py-5 justify-end items-center fixed top-0 left-0 w-full z-20 backdrop-blur-sm">
      <Navbar />
    </header>
  );
};

export default Header;
