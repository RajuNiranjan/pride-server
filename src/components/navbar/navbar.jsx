"use client";
import React, { useState } from "react";
import SearchIcon from "@/asserts/searchIcon.png";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="h-16 flex justify-between md:justify-center md:items-center  bg-[#212731] sticky top-0 z-30 ">
      <div className="flex px-5 md:px-0 w-full items-center justify-between md:justify-center gap-x-14 ">
        <div className="flex h-9 px-1 gap-1  rounded-md items-center border bg-white w-max">
          <Image
            src={SearchIcon}
            alt="searchIcon"
            width={50}
            height={50}
            className="w-6 h-6 text-xl cursor-pointer"
          />
          <input
            type="text"
            placeholder="search..."
            className="focus:outline-none overflow-hidden"
          />
        </div>
        <div className="hidden md:inline">
          <ul className="flex items-center gap-20 justify-between text-[#D1D6DA] ">
            <li className="cursor-pointer ">Categoried</li>
            <li className="cursor-pointer ">Website Builders</li>
            <li className="cursor-pointer ">Today&apos;s Deals</li>
          </ul>
        </div>
        <div className="relative md:hidden ">
          {showMenu ? (
            <MdClose className="text-white text-xl" onClick={handleShowMenu} />
          ) : (
            <GiHamburgerMenu
              className="text-white text-xl"
              onClick={handleShowMenu}
            />
          )}
        </div>
        {showMenu && (
          <div className="absolute w-[200px] md:hidden left-0 h-screen  bg-[#eaeaea] shadow-md border text-black top-[64px]">
            <ul className="flex flex-col  items-start text-sm border gap-1   p-1 justify-between  ">
              <li className="cursor-pointer hover:bg-white w-full p-1 rounded-md ">
                Categoried
              </li>
              <li className="cursor-pointer hover:bg-white w-full p-1 rounded-md ">
                Website Builders
              </li>
              <li className="cursor-pointer hover:bg-white w-full p-1 rounded-md ">
                Today&apos;s Deals
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
