import React, { useState } from "react";
import { Input } from "@/Components/ui/input.jsx";
import { Button } from "./ui/button.jsx";
import axios from "axios";
import { toast } from "react-toastify";

const Header = () => {
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);

    try {
      const response = await axios.post("/api/email", formData);
      if (response.data.success) {
        toast.success(response.data.msg);
        setEmail("");
      } else {
        toast.error(response.data.msg);
      }
    } catch (error) {
      console.error("Error submitting the form:", error); // Log the error
      toast.error("Something went wrong while submitting the form.");
    }
  };

  return (
    <div className="text-center my-12">
      <h1 className="text-3xl font-medium sm:text-5xl">Latest Blogs</h1>
      <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
        Discover the newest trends, tutorials, and news in the world of
        technology.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10"
        action=""
      >
        <div className="flex w-full items-center space-x-2">
          <Input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email"
            className="flex-1 p-2 border border-gray-600 rounded-l-md bg-transparent dark:text-white dark:bg-transparent"
          />
          <Button
            type="submit"
            className="px-6 py-2 text-white dark:text-black"
          >
            Subscribe
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Header;
