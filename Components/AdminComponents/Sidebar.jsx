import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-slate-100 dark:bg-[#1b1b1b]">
      <div className="px-2 sm:pl-14 py-3 border border-gray-500">
        <Link href="/">
          <Image
            src={assets.logo}
            width={120}
            alt="logo"
            priority
            className="dark:invert"
          />
        </Link>
      </div>
      <div className="w-full sm:w-80 h-[100vh] relative py-12 border border-gray-500">
        <div className="w-[80%] sm:w-[80%] h-[1px] bg-black absolute right-0 ">
          <Link
            href="/admin/addProduct"
            className="flex items-center border border-gray-500 gap-3 font-medium px-3 py-2 bg-white dark:bg-[#333333] mb-2"
          >
            <Image
              src={assets.add_icon}
              width={28}
              alt="add"
              className="dark:invert"
            />
            <p className="text-black dark:text-gray-100 hidden sm:block">
              Add Blogs
            </p>
          </Link>
          <Link
            href="/admin/blogList"
            className="flex items-center border border-gray-500 gap-3 font-medium px-3 py-2 bg-white dark:bg-[#333333]"
          >
            <Image
              src={assets.blog_icon}
              width={28}
              alt="add"
              className="dark:invert"
            />
            <p className="text-black dark:text-gray-100 hidden sm:block">
              Blog List
            </p>
          </Link>
          <Link
            href="/admin/subscriptions"
            className="mt-2 flex items-center border border-gray-500 gap-3 font-medium px-3 py-2 bg-white dark:bg-[#333333]"
          >
            <Image
              src={assets.email_icon}
              width={28}
              alt="add"
              className="dark:invert"
            />
            <p className="text-black dark:text-gray-100 hidden sm:block">
              Subscription
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
