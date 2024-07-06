import Image from "next/image";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { BiHomeCircle, BiUser } from "react-icons/bi";
import { BiHash } from "react-icons/bi";
import { Inter } from "next/font/google";
import React from "react";
import { title } from "process";

const inter = Inter({ subsets: ["latin"] });

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

    title: 'Profile',
    icon: <BiUser />,
  },
  {

    title: 'More',
    icon: <BiHash />,
  },
  

]

export default function Home() {
  return (
    <div >
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3  pt-8 px-4">
          <div className="text-4xl h-fit w-fit hover:bg-gray-800 rounded-full p-4 cursor-pointer transition-all">

            <BsTwitter />
          </div>
          <div className="mt-4 text-xl mr-4">
            <ul>

            {SidebarMenuItems.map((item) => (<li className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-5 py-2 w-fit cursor-pointer mt-[1.8px]" key={item.title}><span>{item.icon}</span><span>{item.title}</span></li>))}
            </ul>
            <div className="mt-5 px-5 ">

            <button className="bg-[#1d9bf0] font-thin p-3 rounded-[0.798em] w-full border-solid transition-all hover:bg-black hover:font-semibold border  hover:border-white">Tweet</button>
            </div>
          </div>
        </div>
        <div className="col-span-6 border-l-[1px] border-r-[1px] border-gray-500"></div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
