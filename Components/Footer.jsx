import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="py-5">
      <hr className="border-gray-300 dark:border-[#333]" />
      <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row items-center mt-5">
        <Link href={"/"}>
          <Image
            src={assets.logo}
            alt="logo"
            width={120}
            className="dark:invert"
          />
        </Link>
        <p className="text-sm dark:text-white">
          All rights reserved. © 2024 Aditya.
        </p>
        <div className="flex gap-3">
          <Image
            src={assets.github_icon}
            alt="github"
            width={25}
            className="dark:invert transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
          <Image
            src={assets.linkedin_icon}
            alt="linkedin"
            width={25}
            className="dark:invert transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
          <Image
            src={assets.email_icon}
            alt="email"
            width={25}
            className="dark:invert transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
