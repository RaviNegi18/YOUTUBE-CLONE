import React from "react";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdHistory } from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import {
  SiYoutubestudio,
  SiYoutubekids,
  SiYoutubemusic,
  SiTrendmicro,
} from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts, MdOutlineWatchLater } from "react-icons/md";
import { BiVideo } from "react-icons/bi";

const Sidebar = () => {
  const sidebarItems = [
    { id: 1, name: "Home", icon: <GoHome /> },
    { id: 2, name: "Shorts", icon: <SiYoutubeshorts /> },
    { id: 3, name: "Subscriptions", icon: <MdOutlineSubscriptions /> },
  ];

  const sidebarItems2 = [
    { id: 1, name: "Your Channel", icon: <PiUserSquareThin /> },
    { id: 2, name: "History", icon: <MdHistory /> },
    { id: 3, name: "Your Videos", icon: <BiVideo /> },
    { id: 4, name: "Watch Later", icon: <MdOutlineWatchLater /> },
    { id: 5, name: "Liked Videos", icon: <AiOutlineLike /> },
  ];

  const sidebarItems3 = [
    { id: 1, name: "Trending", icon: <SiTrendmicro /> },
    { id: 2, name: "Shopping", icon: <HiOutlineShoppingBag /> },
    { id: 3, name: "Music", icon: <SiYoutubemusic /> },
    { id: 4, name: "Films", icon: <PiFilmSlateLight /> },
    { id: 5, name: "Live", icon: <CgMediaLive /> },
    { id: 6, name: "Gaming", icon: <IoGameControllerOutline /> },
    { id: 7, name: "News", icon: <FaRegNewspaper /> },
    { id: 8, name: "Sport", icon: <TfiCup /> },
    { id: 9, name: "Courses", icon: <SiStylelint /> },
    { id: 10, name: "Fashion & Beauty", icon: <PiLightbulbLight /> },
    { id: 11, name: "Podcasts", icon: <MdPodcasts /> },
  ];

  const sidebarItems4 = [
    { id: 1, name: "YouTube Premium", icon: <FaYoutube /> },
    { id: 2, name: "YouTube Studio", icon: <SiYoutubestudio /> },
    { id: 3, name: "YouTube Music", icon: <SiYoutubemusic /> },
    { id: 4, name: "YouTube Kids", icon: <SiYoutubekids /> },
  ];

  return (
    <div className="px-4 w-1/5 h-[calc(100vh-6.625rem)] overflow-y-auto">
      {/* Home */}
      <div className="space-y-3">
        {sidebarItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center space-x-4 p-2 hover:bg-gray-300 rounded-lg cursor-pointer transition duration-200"
          >
            <div className="text-xl">{item.icon}</div>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <hr className="my-4" />

      {/* You Section */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2 font-semibold">
          <h1>You</h1>
          <FaChevronRight />
        </div>
        {sidebarItems2.map((item) => (
          <div
            key={item.id}
            className="flex items-center space-x-4 p-2 hover:bg-gray-300 rounded-lg cursor-pointer transition duration-200"
          >
            <div className="text-xl">{item.icon}</div>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <hr className="my-4" />

      {/* Explore Section */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2 font-semibold">
          <h1>Explore</h1>
          <FaChevronRight />
        </div>
        {sidebarItems3.map((item) => (
          <div
            key={item.id}
            className="flex items-center space-x-4 p-2 hover:bg-gray-300 rounded-lg cursor-pointer transition duration-200"
          >
            <div className="text-xl">{item.icon}</div>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <hr className="my-4" />

      {/* More from YouTube */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2 font-semibold">
          <h1>More from YouTube</h1>
          <FaChevronRight />
        </div>
        {sidebarItems4.map((item) => (
          <div
            key={item.id}
            className="flex items-center space-x-4 p-2 hover:bg-gray-300 rounded-lg cursor-pointer transition duration-200"
          >
            <div className="text-xl text-red-500">{item.icon}</div>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <hr className="my-4" />

      {/* Footer Section */}
      <div className="text-xs text-gray-500">
        <p>About • Press • Copyright</p>
        <p>Contact Us • Creators</p>
        <p>Advertise • Developers</p>
        <br />
        <p>Terms • Privacy • Safety</p>
        <p>How YouTube Works</p>
        <p>Test New Features</p>
      </div>

      <p className="text-xs text-gray-800 mt-2">© 2024 Learn Coding</p>
    </div>
  );
};

export default Sidebar;
