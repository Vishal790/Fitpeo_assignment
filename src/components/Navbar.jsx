import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import Profile from "../assets/profile.png";

const Navbar = () => {
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <div className="h-[4rem] p-2 flex justify-between items-center pr-10 bg-background-dark relative">
      <div className="relative flex items-center gap-x-10">
        <img className="h-[50px]" src={Logo} alt="Logo" />
        <div className="relative hidden lg:flex">
          <CiSearch className="absolute left-3 top-3 cursor-pointer text-white" size={20} />
          <input
            className="form-style pl-10 pr-2 max-h-[40px] max-w-[200px] sm:max-w-[300px] md:max-w-[400px]"
            placeholder="Search"
            type="text"
          />
        </div>
      </div>
      <div className="flex gap-x-4 items-center text-white">
        {/* Mobile Search Toggle */}
        <button
          onClick={toggleSearch}
          className="lg:hidden text-white bg-richblack-400 p-2 rounded-full"
        >
          <CiSearch className="text-lg lg:text-2xl" />
        </button>
        {searchVisible && (
          <input
            className="form-style pl-10 pr-2 max-h-[40px] w-[200px] absolute top-20 right-42 text-white z-50"
            placeholder="Search"
            type="text"
            autoFocus
            style={{ transition: "all 0.3s ease-in-out" }}
          />
        )}
        <div className="bg-richblack-400 p-2 rounded-full">
          <CiMail className="text-lg lg:text-2xl" />
        </div>
        <div className="bg-richblack-400 p-2 rounded-full">
          <CiSettings className="text-lg lg:text-2xl" />
        </div>
        <div className="relative bg-richblack-400 p-2 rounded-full">
          <IoIosNotificationsOutline className="text-lg lg:text-2xl" />
          <div className="absolute z-10 w-[10px] h-[10px] translate-x-5 -translate-y-8 rounded-full bg-red-400"></div>
        </div>
        <div className="w-[40px] lg:w-[50px] rounded-full">
          <img
            src={Profile}
            alt="Profile"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
