"use client";

import { navRoutes } from "@/constants";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [pathname, setPathname] = useState("");
  const [openNavigation, setOpenNavigation] = useState(false);

  const params = useParams();

  useEffect(() => {
    setPathname(window.location.hash);
  }, [params]);

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
