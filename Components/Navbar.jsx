"use client";
import { assets } from "@/Assets/assets";
import Image from "next/image";
import { ModeToggle } from "./ThemeButton";
import { Button } from "./ui/button";
import Link from "next/link";
import { toast } from "react-toastify";
import { Badge } from "@/components/ui/badge";

const Navbar = () => {
  const handleClick = () => {
    toast.error("You do not have permission to Login. ");
  };
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Link href={"/"}>
          {" "}
          <Image
            src={assets.logo}
            alt="logo"
            className="dark:invert w-[130px]  sm:w-auto"
            width={140}
            height={50}
            priority
          />
        </Link>
        <div className="flex items-center gap-3">
          <Link href="/admin">
            <Badge variant="destructive">Admin Panel</Badge>
          </Link>
          <ModeToggle />

          <Button onClick={handleClick}>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
