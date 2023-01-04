import React, { useState } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { useDarkMode } from "../useDarkMode";
export const NavBar = ({ isMobile }: any) => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <>
      <nav className="flex items-center">
        <div className="flex items-center">
          <div className="text-20 font-bold mr-2">NerdCard</div>
          {isDarkMode ? (
            <BsSunFill
              size={"24px"}
              color={"#e9c46a"}
              className="cursor-pointer"
              onClick={() => toggleDarkMode(!isDarkMode)}
            />
          ) : (
            <BsMoonFill
              size={"24px"}
              color={"#e9c46a"}
              className="cursor-pointer"
              onClick={() => toggleDarkMode(!isDarkMode)}
            />
          )}
        </div>
        <ul className="ml-auto text-16 font-semibold md:flex md:gap-10">
          {openMenu && isMobile ? (
            <MdOutlineClose
              size={"24px"}
              className="cursor-pointer"
              onClick={handleOpenMenu}
            />
          ) : !openMenu && isMobile ? (
            <HiOutlineMenu
              size={"24px"}
              className="cursor-pointer"
              onClick={handleOpenMenu}
            />
          ) : (
            <>
              <li className="cursor-pointer hover:text-purple-400 transition-all duration-200">
                Features
              </li>
              <li className="cursor-pointer hover:text-purple-400 transition-all duration-200">
                Menu
              </li>
              <li className="cursor-pointer hover:text-purple-400 transition-all duration-200">
                Our Story
              </li>
              <li className="cursor-pointer hover:text-purple-400 transition-all duration-200">
                Contact
              </li>
            </>
          )}
          {openMenu && (
            <div className="absolute right-8 bg-white p-8 text-black text-16">
              <li>Features</li>
              <li>Menu</li>
              <li>Our Story</li>
              <li>Contact</li>
            </div>
          )}
        </ul>
      </nav>
    </>
  );
};
