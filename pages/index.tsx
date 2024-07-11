import Image from "next/image";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { BiHomeCircle, BiMoney, BiUser } from "react-icons/bi";
import { BiHash } from "react-icons/bi";
import React from "react";
import { title } from "process";
import FeedCard from "@/componets/FeedCard";
import { SlOptions } from "react-icons/sl";


interface TwitterSidebarButton {
  title: string,
  icon: React.ReactNode
}

const SidebarMenuItems: TwitterSidebarButton[] = [
  {

    title: 'Home',
    icon: <BiHomeCircle />,
  },
  {

    title: 'Explore',
    icon: <BiHash />,
  },
  {

    title: 'Notifications',
    icon: <BsBell />,
  },
  {

    title: 'Message',
    icon: <BsEnvelope />,
  },
  {

    title: 'Bookmarks',
    icon: <BsBookmark />,
  },
  {

    title: 'Twitter Blue',
    icon: <BiMoney />,
  },
  {

    title: 'Profile',
    icon: <BiUser />,
  },
  {

    title: 'More',
    icon: <SlOptions />,
  },
  

]

export default function Home() {
  return (
    <div >
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 mt-1  px-4">
          <div className="text-2xl h-fit w-fit hover:bg-gray-800 rounded-full p-4 cursor-pointer transition-all">

            <BsTwitter />
          </div>
          <div className=" text-lg mr-4">
            <ul>

            {SidebarMenuItems.map((item) => (<li className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-5 py-2 w-fit cursor-pointer mt-[1.8px]" key={item.title}><span>{item.icon}</span><span>{item.title}</span></li>))}
            </ul>
            <div className="mt-5 px-5 ">

            <button className="bg-[#1d9bf0] font-thin py-2  rounded-[0.798em] w-[80%] border-solid transition-all hover:bg-black hover:font-semibold border  hover:border-white">Tweet</button>
            </div>
          </div>
        </div>
        <div className="col-span-6 border-l-[1px] h-screen overflow-scroll no-scrollbar    border-r-[1px] border-gray-800">


          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
