"use client";
import { blog_data } from "@/Assets/assets";
import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import axios from "axios";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get("/api/blog");
    setBlogs(response.data.blogs);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        <button
          onClick={() => setMenu("All")}
          className={
            menu === "All"
              ? "bg-black dark:bg-[#FAFAFA] dark:text-gray-900 text-white py-1 px-4 rounded-sm"
              : ""
          }
        >
          All
        </button>
        <button
          className={
            menu === "Technology"
              ? "bg-black dark:bg-[#FAFAFA] dark:text-gray-900 text-white py-1 px-4 rounded-sm"
              : ""
          }
          onClick={() => setMenu("Technology")}
        >
          Technology
        </button>{" "}
        <button
          className={
            menu === "Coding"
              ? "bg-black dark:bg-[#FAFAFA] dark:text-gray-900 text-white py-1 px-4 rounded-sm"
              : ""
          }
          onClick={() => setMenu("Coding")}
        >
          Coding
        </button>{" "}
        <button
          className={
            menu === "Tech Tools"
              ? "bg-black dark:bg-[#FAFAFA] dark:text-gray-900 text-white py-1 px-4 rounded-sm"
              : ""
          }
          onClick={() => setMenu("Tech Tools")}
        >
          Tech Tools
        </button>
      </div>
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {blogs
          .filter((item) => (menu === "All" ? true : item.category === menu))
          .map((item, idx) => {
            return (
              <BlogItem
                key={idx}
                id={item._id}
                image={item.image}
                title={item.title}
                description={item.description}
                category={item.category}
              />
            );
          })}
      </div>
    </div>
  );
};

export default BlogList;
