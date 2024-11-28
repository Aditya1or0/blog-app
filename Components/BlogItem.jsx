import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const BlogItem = ({ title, description, category, image, id }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleReadMoreClick = () => {
    setShowFullDescription(true);
  };

  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-white dark:bg-[#1b1b1b] border border-black overflow-hidden">
      <div className="transition duration-500 transform hover:scale-110">
        <Link href={`/blog/${id}`}>
          <Image
            src={image}
            alt=""
            width={400}
            height={400}
            priority
            className="border-b border-black"
          />
        </Link>
        <p className="ml-5 mt-5 px-1 inline-block text-sm bg-black text-white">
          {category}
        </p>
        <div className="p-5">
          <h5 className="mt-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p
            dangerouslySetInnerHTML={{ __html: description }}
            className={`mb-3 text-sm tracking-tight text-gray-700 dark:text-gray-300 ${
              !showFullDescription ? "line-clamp-5" : ""
            }`}
          ></p>
          {!showFullDescription && (
            <button
              onClick={handleReadMoreClick}
              className="inline-flex items-center py-2 font-semibold text-center text-black dark:text-white"
            >
              Read more
              <Image
                src={assets.arrow}
                alt=""
                width={12}
                className="ml-2 dark:invert"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
