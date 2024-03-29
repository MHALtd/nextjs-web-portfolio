"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border-b-2 border-opacity-40 border-tartiary top-0 left-0 right-0 z-10 bg-bg bg-opacity-100">
      <div className="flex container flex-wrap items-center justify-between mx-auto p-5">
        <Link href={"/"} className="text-tartiary text-2xl md:text-4xl font-semibold">
          MHALtd
        </Link>
        <div className="block md:hidden">
          {!navbarOpen ? (
            <button
              className="flex items-center px-3 py-2 border rounded text-tartiary border-tartiary hover:text-white hover:border-white"
              onClick={() => setNavbarOpen(true)}>
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              className="flex items-center px-3 py-2 border rounded text-tartiary border-tartiary hover:text-white hover:border-white"
              onClick={() => setNavbarOpen(false)}>
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="hidden md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex p-4 md:p-0  rounded-lg flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => {
              return (
                <li key={index}>
                  <NavLink key={link.title} title={link.title} href={link.path} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
