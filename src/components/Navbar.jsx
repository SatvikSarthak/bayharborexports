"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/logo.png";
import arrow1 from "/public/arrow1.png";
import arrow2 from "/public/arrow2.png";
import { useState } from "react";
export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <nav className="w-full flex fixed items-center justify-between px-6 py-2 bg-white shadow-sm z-20">
      <div className="flex w-[300px] flex-shrink-0 h-[80px] items-center">
        <Link href="/">
          <Image src={Logo} className="" alt="logo" />
        </Link>
      </div>

      {/* Center Navigation */}
      <div className="flex items-center border py-1.5 border-gray-200 text-black rounded-full px-4 space-x-3">
        <div className="hover:bg-[#0a4174] hover:text-white   hover:rounded-full px-5 py-2">
          <Link href="/products" className=" font-medium  ">
            Products
          </Link>
        </div>
        <div className="hover:bg-[#0a4174] hover:text-white   hover:rounded-full px-5 py-2">
          <Link href="/about" className=" font-medium ">
            About Us
          </Link>
        </div>
        <div className="hover:bg-[#0a4174] hover:text-white  hover:rounded-full px-5 py-2">
          <Link href="/services" className=" font-medium ">
            Services
          </Link>
        </div>
        <div className="hover:bg-[#0a4174]  hover:text-white  hover:rounded-full px-5 py-2">
          <Link href="/contact-us" className=" font-medium">
            Contact Us
          </Link>
        </div>
      </div>


      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center hover:bg-[#0a4174] border border-gray-300 hover:text-white rounded-full px-5 py-2 space-x-2 transition"
      >
        <span className="font-medium">Get in Touch</span>
        <Image
          src={isHovered ? arrow2 : arrow1}
          alt="upright arrow"
          className="w-7 border rounded-full p-1 transition duration-300"
        />
      </button>
    </nav>
  );
}
