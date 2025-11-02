"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Premium Indian Exports",
      highlight: "Worldwide",
      subtitle: "From India's finest producers to your doorstep — experience quality that speaks for itself",
      badge: " Global Export Partner"
    },
    {
      title: "Quality Certified Products",
      highlight: "You Can Trust",
      subtitle: "ISO certified excellence in every shipment. Your success is our commitment.",
      badge: "ISO 9001 Certified"
    },
    {
      title: "50+ Countries Served",
      highlight: "And Growing",
      subtitle: "Join thousands of satisfied clients across the globe. Fast, reliable, and secure.",
      badge: " Worldwide Delivery"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); 

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner2.png"
          alt="Bay Harbor Exports Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-[#0a4174]/40 to-slate-800/50"></div>
      </div>

      {/* Animated Accent Shapes */}
      <div className="absolute inset-0 z-[1] overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="min-h-screen flex items-center">
          <div className="w-full max-w-4xl py-20">
            {/* Content - Rotating Text */}
            <div className="space-y-8 animate-fadeIn">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="text-sm font-medium text-white">
                  {slides[currentSlide].badge}
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                {slides[currentSlide].title}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mt-2">
                  {slides[currentSlide].highlight}
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
                {slides[currentSlide].subtitle}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/products"
                  className="px-8 py-4 bg-white text-[#0a4174] rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  Explore Products
                </Link>
                <Link 
                  href="/contact-us"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold border-2 border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>

              {/* Slide Indicators */}
              <div className="flex gap-2 pt-8">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'w-12 bg-white' 
                        : 'w-8 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
