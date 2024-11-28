import { connectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";
const fs = require("fs");

const LoadDB = async () => {
  await connectDB();
};

LoadDB();

//API Endpoints to get all Blogs
export async function GET(request) {
  const blogId = request.nextUrl.searchParams.get("id");
  if (blogId) {
    const blog = await BlogModel.findById(blogId);
    return NextResponse.json({ blog });
  } else {
    const blogs = await BlogModel.find({});
    return NextResponse.json({ blogs });
  }
}

// API Endpoints For Uploading Blogs
export async function POST(request) {
  try {
    const formData = await request.formData();
    console.log("Received form data:", formData);

    const timestamp = Date.now();

    // Handle image upload
    const image = formData.get("image");
    if (!image) throw new Error("No image found in form data");
    console.log("Received image:", image);
    const imageByteData = await image.arrayBuffer();
    const imageBuffer = Buffer.from(imageByteData);
    const imagePath = path.join(
      process.cwd(),
      "public",
      `${timestamp}_${image.name}`
    );
    await writeFile(imagePath, imageBuffer);
    const imageUrl = `/${timestamp}_${image.name}`;

    // Handle author image upload if it's a file
    const authorImg = formData.get("authorImg");
    let authorImgUrl;
    if (authorImg instanceof File) {
      console.log("Received author image as file:", authorImg);
      const authorImgByteData = await authorImg.arrayBuffer();
      const authorImgBuffer = Buffer.from(authorImgByteData);
      const authorImgPath = path.join(
        process.cwd(),
        "public",
        `${timestamp}_authorImg_${authorImg.name}`
      );
      await writeFile(authorImgPath, authorImgBuffer);
      authorImgUrl = `/${timestamp}_authorImg_${authorImg.name}`;
    } else {
      console.log("Received author image as URL:", authorImg);
      authorImgUrl = authorImg;
    }

    const blogData = {
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      author: formData.get("author"),
      image: imageUrl,
      authorImg: authorImgUrl,
    };

    await BlogModel.create(blogData);
    console.log("Blog saved successfully");
    return NextResponse.json({ success: true, msg: "Blog saved successfully" });
  } catch (error) {
    console.error("Error saving blog:", error);
    return NextResponse.json({
      success: false,
      msg: "Error saving blog",
      error: error.message,
    });
  }
}

//creating API Endpoints to delete a blog
export async function DELETE(request) {
  const id = await request.nextUrl.searchParams.get("id");
  const blog = await BlogModel.findById(id);
  fs.unlink(`./public${blog.image}`, () => {});
  await BlogModel.findByIdAndDelete(id);
  return NextResponse.json({ success: true, msg: "Blog deleted successfully" });
}
