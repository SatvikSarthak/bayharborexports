"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/logo.png";
import arrow1 from "/public/arrow1.png";
import arrow2 from "/public/arrow2.png";
import { useState } from "react";
import { productsData } from "../data/productsData";
export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  
  // Get unique categories from products data
  const categories = [...new Set(productsData.map((p) => p.category))];
  
  return (
    <nav className="w-full flex fixed items-center justify-between px-6 py-2 bg-white shadow-sm z-20">
      <div className="flex w-[300px] flex-shrink-0 h-[80px] items-center">
        <Link href="/">
          <Image src={Logo} className="" alt="logo" />
        </Link>
      </div>

  
      <div className="flex items-center border py-1.5 border-gray-200 text-black rounded-full px-4 space-x-3">
        <div 
          className="relative group"
          onMouseEnter={() => setShowProductDropdown(true)}
          onMouseLeave={() => setShowProductDropdown(false)}
        >
          <div className="hover:bg-[#0a4174] hover:text-white hover:rounded-full px-5 py-2">
            <Link href="/products" className="font-medium">
              Products
            </Link>
          </div>
          
        
          {showProductDropdown && (
            <div className="absolute top-full left-0 pt-1 w-48 z-30">
              <div className="bg-white border border-gray-200 rounded-lg shadow-lg">
                <div className="py-2">
                  <Link 
                    href="/products"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#0a4174] font-medium"
                    onClick={() => setShowProductDropdown(false)}
                  >
                    All Products
                  </Link>
                  {categories.map((category) => (
                    <Link
                      key={category}
                      href={`/products?category=${encodeURIComponent(category)}`}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#0a4174]"
                      onClick={() => setShowProductDropdown(false)}
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
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
