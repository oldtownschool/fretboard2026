"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  const navStyle = {
    background:
      "url('/web-background-texture1.png'), linear-gradient(to right, var(--tw-gradient-stops))",
    backgroundBlendMode: "screen",
  };
  return (
    <nav
      className="w-full bg-gradient-to-r from-[#322D35] to-[#4C454F]"
      style={navStyle}
    >
      {/* desktop layout */}
      <div className="flex flex-col py-4 sm:py-0">
        <div className="hidden sm:flex justify-center pt-1">
          <Image
            src="/Group22.png"
            width={300}
            height={32}
            alt="Fretboard Journal and Old Town School present"
          />
        </div>
        <a className="flex justify-center mt-1.5" href="/" >
          <Image
            src="/FS2026_Homepage_GlobalHeader_100325.png"
            alt="Fretboard Summit Logo"
            width={600}
            height={48}
            priority
          />
        </a>
        <div className="font-aurochs tracking-wide text-3xl hidden sm:flex justify-center">
          <ul className="hidden sm:flex text-[#4DB3AC]">
            <a href="/tickets" >
              <li className="mx-2 p-2 uppercase hover:bg-[#4DB3AC] hover:text-white">
                Tickets
              </li>
            </a>
            <a href="/music" >
              <li className="mx-2 p-2 uppercase hover:bg-[#4DB3AC] hover:text-white">
                Music
              </li>
            </a>
            <a href="/luthiers" >
              <li className="mx-2 p-2 uppercase hover:bg-[#4DB3AC] hover:text-white">
                Exhibitors
              </li>
            </a>
            <a href="/schedule" >
              <li className="mx-2 p-2 uppercase hover:bg-[#4DB3AC] hover:text-white">
                Schedule
              </li>
            </a>
            <a href="/chicago" >
              <li className="mx-2 p-2 uppercase hover:bg-[#4DB3AC] hover:text-white">
                Getting Here
              </li>
            </a>
            
          </ul>
        </div>
        <div
          onClick={() => handleNav(!menuOpen)}
          className="absolute top-5 left-5 sm:hidden cursor-pointer text-amber-100"
        >
          <AiOutlineMenu size={25} />
        </div>
      </div>

      {/* mobile layout */}
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[100%] sm:hidden h-screen bg-[#322D35] p-10 ease-in duration-500 z-10"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div
            onClick={() => handleNav(!menuOpen)}
            className="sm:hidden cursor-pointer pl-24 text-amber-100"
          >
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="font-aurochs tracking-wide text-3xl text-center flex-col py-4">
          {/* <a className="flex justify-center py-4" href="/">
            <Image
              src="/fslogo.png"
              alt="Fretboard Summit Logo"
              className=""
              width={300}
              height={48}
              priority
            />
          </a> */}
          <ul className="text-[#4DB3AC]">
            <a href="/tickets" >
              <li
                onClick={() => handleNav(!menuOpen)}
                className="py-4 uppercase hover:bg-[#4DB3AC] hover:text-white"
              >
                Tickets
              </li>
            </a>
            <a href="/music" >
              <li
                onClick={() => handleNav(!menuOpen)}
                className="py-4 uppercase hover:bg-[#4DB3AC] hover:text-white"
              >
                Music
              </li>
            </a>
            <a href="/luthiers" >
              <li
                onClick={() => handleNav(!menuOpen)}
                className="py-4 uppercase hover:bg-[#4DB3AC] hover:text-white"
              >
                Exhibitors
              </li>
            </a>
            <a href="/schedule" >
              <li
                onClick={() => handleNav(!menuOpen)}
                className="py-4 uppercase hover:bg-[#4DB3AC] hover:text-white"
              >
                Schedule
              </li>
            </a>
            <a href="/chicago" >
              <li
                onClick={() => handleNav(!menuOpen)}
                className="py-4 uppercase hover:bg-[#4DB3AC] hover:text-white"
              >
                Getting Here
              </li>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};
