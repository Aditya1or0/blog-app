import { assets } from "@/Assets/assets";
import Image from "next/image";
import React from "react";
import { toast } from "react-toastify";

const BlogTableItem = ({
  authorImg,
  title,
  author,
  date,
  deleteBlog,
  mongoId,
}) => {
  const handleClick = () => {
    toast.error("You do not have permission to delete. ");
  };

  const blogDate = new Date(date);

  return (
    <tr className="bg-white dark:bg-transparent border-b">
      <th
        scope="row"
        className="px-6 py-4 gap-3 hidden sm:flex items-center font-medium text-gray-900 whitespace-nowrap "
      >
        <Image
          src={authorImg ? authorImg : assets.profile_icon}
          width={40}
          height={40}
          alt="profile"
        />
        <p className="text-[#6B7280] dark:text-gray-400">
          {author ? author : "No Author"}
        </p>
      </th>
      <td className="px-6 py-4 dark:text-gray-400">
        {title ? title : "Blog Title"}
      </td>
      <td className="px-6 py-4 dark:text-gray-400">
        {blogDate.toDateString()}
      </td>
      <td
        onClick={handleClick}
        className="px-6 py-4 font-bold text-red-500 cursor-pointer"
      >
        X
      </td>
    </tr>
  );
};

export default BlogTableItem;
