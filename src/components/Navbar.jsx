"use client";
import Link from "next/link";
import Image from "next/image";
//import logo from "/logo.png";
//import arrow1 from "/arrow1.png";
//import arrow2 from "/arrow2.png";
import { useState } from "react";
import { productsData } from "../data/productsData";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const [isGetInTouchHovered, setIsGetInTouchHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const router = useRouter();
  
  
  const categories = [...new Set(productsData.map((p) => p.category))];
  
  return (
    <nav className="w-full flex fixed items-center justify-between px-6 py-2 bg-white shadow-sm z-20">
      <div className="flex w-[300px] xxxs:w-[200px] xs:w-[300px] flex-shrink-0 h-[80px] items-center">
        <Link href="/">
          <Image src="/logo.png" className="" width={200}  height={150} alt="logo" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg4:flex items-center border py-1.5 border-gray-200 text-black rounded-full px-4 space-x-3">
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
        <div className="hover:bg-[#0a4174] hover:text-white hover:rounded-full px-5 py-2">
          <Link href="/about" className="font-medium">
            About Us
          </Link>
        </div>
        <div className="hover:bg-[#0a4174] hover:text-white hover:rounded-full px-5 py-2">
          <Link href="/services" className="font-medium">
            Services
          </Link>
        </div>
        <div className="hover:bg-[#0a4174] hover:text-white hover:rounded-full px-5 py-2">
          <Link href="/contact-us" className="font-medium">
            Contact Us
          </Link>
        </div>
        <div className="hover:bg-[#0a4174] hover:text-white hover:rounded-full px-5 py-2">
          <Link href="/blog" className="font-medium">
            Blogs
          </Link>
        </div>
      </div>

      {/* Desktop Get in Touch Button */}
      <button
        onMouseEnter={() => setIsGetInTouchHovered(true)}
        onMouseLeave={() => setIsGetInTouchHovered(false)}
        onClick={() => router.push('/contact-us')}
        className="hidden lg4:flex items-center hover:scale-105 bg-gradient-to-r from-[#0a4174] to-blue-600 text-white border border-gray-300 hover:text-white rounded-full px-5 py-2 space-x-2 transition"
      >
        <span className="font-medium">Get in Touch</span>
        <div className="w-7 h-7 border rounded-full p-1 flex items-center justify-center transition-all duration-300 overflow-hidden">
          {isGetInTouchHovered ? (
            <svg className="w-4 h-4 animate-bounce-small transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          ) : (
            <Image
              src="/arrow2.png"
              alt="upright arrow"
             width={6} height={6}
              className="w-full h-full object-contain transition-all duration-300"
            />
          )}
        </div>
      </button>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg4:hidden flex items-center 
         justify-center w-10 h-10 text-gray-700 hover:text-[#0a4174] transition-colors"
      >
        {isMobileMenuOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[96px] bg-black/50 backdrop-blur-sm z-40" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="bg-white w-full max-w-sm ml-auto h-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col p-6 space-y-2">
              {/* Products with Dropdown */}
              <div className="border-b border-gray-200 pb-2">
                <button
                  onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-900 hover:bg-gray-100 hover:text-[#0a4174] rounded-lg font-medium transition-colors"
                >
                  <span>Products</span>
                  <svg
                    className={`w-5 h-5 transition-transform ${isMobileProductsOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isMobileProductsOpen && (
                  <div className="mt-2 ml-4 space-y-1">
                    <Link
                      href="/products"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#0a4174] rounded-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      All Products
                    </Link>
                    {categories.map((category) => (
                      <Link
                        key={category}
                        href={`/products?category=${encodeURIComponent(category)}`}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#0a4174] rounded-lg text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="px-4 py-3 text-gray-900 hover:bg-gray-100 hover:text-[#0a4174] rounded-lg font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>

              <Link
                href="/services"
                className="px-4 py-3 text-gray-900 hover:bg-gray-100 hover:text-[#0a4174] rounded-lg font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>

              <Link
                href="/contact-us"
                className="px-4 py-3 text-gray-900 hover:bg-gray-100 hover:text-[#0a4174] rounded-lg font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>

              <Link
                href="/blog"
                className="px-4 py-3 text-gray-900 hover:bg-gray-100 hover:text-[#0a4174] rounded-lg font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blogs
              </Link>

              {/* Mobile Get in Touch Button */}
              <button
                onClick={() => {
                  router.push('/contact-us');
                  setIsMobileMenuOpen(false);
                }}
                className="mt-4 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#0a4174] to-blue-600 text-white rounded-lg px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <span>Get in Touch</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
