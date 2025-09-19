"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Banner = () => {
  const images = ["/product3.jpeg", "/service2.jpeg", "/logo_msme.png"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Determine the position of each image
  const getPosition = (index) => {
    const position = (index - currentIndex + images.length) % images.length;

    switch (position) {
      case 0: // Active image
        return { x: 0, scale: 1, zIndex: 3, opacity: 1 };
      case 1: // Next image (right side)
        return { x: 60, scale: 0.9, zIndex: 2, opacity: 0.5 };
      case 2: // Last image (left side)
        return { x: -60, scale: 0.9, zIndex: 1, opacity: 0.5 };
      default:
        return { x: 0, scale: 0.8, zIndex: 0, opacity: 0 };
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-8 ">
      <div className="flex items-center justify-between gap-16">
        {/* Image Carousel Section */}
        <div className="flex-shrink-0">
          <div className="relative w-[350px] h-[400px] overflow-visible">
            {images.map((src, index) => {
              const position = getPosition(index);

              return (
                <motion.div
                  key={index}
                  className="absolute w-[280px] h-[400px] rounded-2xl overflow-hidden shadow-2xl"
                  style={{
                    zIndex: position.zIndex,
                  }}
                  animate={{
                    x: position.x,
                    scale: position.scale,
                    opacity: position.opacity,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                >
                  <img
                    src={src}
                    alt={`Carousel ${index}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

   
        <div className="flex-1 flex flex-col justify-center pl-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-[#0a4174] leading-tight">
              Bayharbor exports
            </h1>
            <div className="w-16 h-1 bg-blue-500 rounded"></div>
            <p className="text-lg text-gray-600 max-w-md">
              Your trusted partner in global trade and export solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;



// export default function Banner() {
//   return (

//     <div className="relative w-full h-[800px] ">
//       {/* Background Video */}

//       <video
//         src="/cargo_time_lapse.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//       />

//       {/* Text Overlay */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 z-10">
//         <h1 className="text-white text-5xl font-bold drop-shadow-lg">
//           BayHarbor Exports
//         </h1>
//         <p className="text-gray-200 mt-4 text-lg">Reliable. Fast. Worldwide.</p>
//       </div>
//     </div>
//   );
// }
