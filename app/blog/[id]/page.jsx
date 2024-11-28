"use client";

import { assets, blog_data } from "@/Assets/assets";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import axios from "axios";
import Image from "next/image";

import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [data, setData] = useState(null);
  const [paramId, setParamId] = useState(null);

  // Function to fetch data based on the ID
  const fetchBlogData = async (id) => {
    try {
      const response = await axios.get("/api/blog", {
        params: { id: id },
      });
      // Set the data in the state
      setData(response.data.blog);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };

  // Unwrap the params promise and fetch data
  useEffect(() => {
    params
      .then((unwrappedParams) => {
        setParamId(unwrappedParams.id); // Unwrap the ID
        fetchBlogData(unwrappedParams.id); // Fetch data based on the unwrapped ID
      })
      .catch((error) => {
        console.error("Failed to unwrap params", error);
      });
  }, [params]);

  return data ? (
    <>
      <div>
        <Navbar />
        <hr className="border-gray-300 dark:border-[#333]" />
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <Image
            src={data.authorImg}
            alt=""
            width={60}
            height={60}
            className="mx-auto mt-6 border border-white rounded-full"
          />
          <p className="mt-1 text-lg pb-2 max-w-[740px] mx-auto">
            {data.author}
          </p>
        </div>
        <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
          <Image
            src={data.image}
            alt=""
            width={800}
            height={800}
            priority
            className="border-4 border-gray-300 "
          />
          <div
            className="blog-content mt-6"
            dangerouslySetInnerHTML={{ __html: data.description }}
          ></div>

          <div className="my-24">
            <p className="font-semibold my-4">
              Share this Article on Social Media
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
        <Footer />
      </div>
    </>
  ) : (
    <></>
  );
};

export default Page;
