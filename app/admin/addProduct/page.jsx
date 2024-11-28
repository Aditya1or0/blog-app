"use client";

import { assets } from "@/Assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select.jsx";
import { Button } from "@/Components/ui/button.jsx";
import axios from "axios";
import { toast } from "react-toastify";

const Page = () => {
  const [image, setImage] = useState(null);
  const [authorImageFile, setAuthorImageFile] = useState(null);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "All",
    author: "Aditya Sharma",
    authorImg: "/author_img.png",
  });

  const onCategoryChange = (value) => {
    setData((data) => ({ ...data, category: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);

    // Handle author image correctly
    if (authorImageFile) {
      formData.append("authorImg", authorImageFile);
    } else {
      formData.append("authorImg", data.authorImg);
    }

    formData.append("image", image);

    for (let [key, value] of formData.entries()) {
      // console.log(`${key}: ${value}`);
    }

    try {
      const response = await axios.post("/api/blog", formData);
      if (response.data.success) {
        toast.success(response.data.msg);
      } else {
        toast.error(response.data.msg);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      toast.error("Something went wrong while submitting the form.");
    }
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
        <p className="text-xl">Upload Thumbnail</p>
        <label htmlFor="image">
          <Image
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            width={0}
            height={0}
            alt="upload"
            style={{ height: "auto", width: "140px" }}
            priority
            className="mt-4"
          />
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          hidden
          required
        />
        <p className="text-xl mt-4">Author Image</p>

        <input
          onChange={(e) => setAuthorImageFile(e.target.files[0])}
          type="file"
          id="authorImage"
          hidden
        />
        <p className="text-xl mt-4">Blog Title</p>
        <input
          onChange={(e) => setData({ ...data, title: e.target.value })}
          value={data.title}
          name="title"
          type="text"
          placeholder="Title"
          required
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
        />
        <p className="text-xl mt-4">Blog Description</p>
        <textarea
          onChange={(e) => setData({ ...data, description: e.target.value })}
          value={data.description}
          name="description"
          placeholder="Blog Description"
          rows={10}
          required
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
        />
        <p className="text-xl mt-4">Blog Category</p>
        <Select value={data.category} onValueChange={onCategoryChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue>{data.category}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Technology">Technology</SelectItem>
            <SelectItem value="Coding">Coding</SelectItem>
            <SelectItem value="Tech Tools">Tech Tools</SelectItem>
          </SelectContent>
        </Select>
        <br />
        <Button className="mb-2" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
};

export default Page;
