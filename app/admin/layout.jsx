import { assets } from "@/Assets/assets";
import Sidebar from "@/Components/AdminComponents/Sidebar";
import { ModeToggle } from "@/Components/ThemeButton";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <ToastContainer theme="dark" />
        <Sidebar />
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black dark:border-gray-500">
            <h3 className="font-medium">Admin Panel</h3>
            <div className="flex gap-5">
              <Link href="/">
                <Image
                  src={assets.home}
                  width={36}
                  height={36}
                  alt="home"
                  className="invert dark:invert-0 hover:scale-105 transition-transform duration-300 ease-in-out"
                  priority
                  style={{
                    width: "36px",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </Link>
              <ModeToggle />
              <Image
                src={assets.profile_icon}
                width={40}
                height={40}
                alt="profile"
                style={{ width: "40px", height: "40px", objectFit: "contain" }}
              />
            </div>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
