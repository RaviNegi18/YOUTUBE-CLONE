import React from "react";
import { MdOutlineMenu } from "react-icons/md";
import logo from "../../public/images/youtube.png";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa6";
import Avatar from "react-avatar";
import profile from "../../public/images/profile.jpg";
const Navbar = () => {
  return (
    <div className="flex fixed top-0 w-[100%] bg-white justify-between  px-6 py-2">
      <div className="border  flex space-x-4 items-center">
        <MdOutlineMenu className="text-xl cursor-pointer" />
        <img src={logo} alt="logo" className="w-28 cursor-pointer" />
      </div>
      <div className=" w-[35%]  flex items-center">
        <div className="w-[100%] px-3 py-2 border rounded-1-full">
          <input type="text" placeholder="Search" className="outline-none" />
        </div>
        <button className="px-4 py-2  bg-gray-100 rounded-r-full ">
          <CiSearch size={"24px"} />
        </button>
        <IoMdMic
          size={"42px"}
          className="ml-3  rounded-s-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
        />
      </div>
      <div className=" flex items-center space-x-5">
        <RiVideoAddLine className="text-2xl" />
        <FaRegBell className="text-2xl" />
        <Avatar src={profile} size="32" className="rounded-full" />
      </div>
    </div>
  );
};

export default Navbar;
