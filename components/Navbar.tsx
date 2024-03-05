"use client";

import { navRoutes } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-6 items-center justify-between">
      {navRoutes.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;
        return (
          <Link
            href={item.route}
            key={item.route}
            className={`${
              isActive ? "drop-shadow-light" : ""
            } text-xs sm:text-base hover:drop-shadow-light transition-all duration-300 ease-in-out`}
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
