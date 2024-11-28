"use client";
import BlogList from "@/Components/BlogList";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Header from "@/Components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

export default function Home() {
  return (
    <>
      <ToastContainer theme="dark" />
      <Navbar />
      <Header />
      <BlogList />
      <Footer />
    </>
  );
}