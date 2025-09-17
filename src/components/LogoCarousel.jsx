"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  "/logo_fieo.svg", // replace with actual image paths
  "/logo_spice.png",
  "/logo_apeda.png",

  "/FSSAI_Logo.png",
  "/logo_msme.png",
];
export default function LogoCarousel() {
  return (
    <div className="relative w-full overflow-hidden bg-white py-6 space-y-10">
      <div className=" flex flex-col text-center justify-center items-center text-4xl">
        <p className="text-[#0a4174] font-bold ">Our Licences</p>
        <p className="text-sm text-gray-600 mx-auto max-w-2xl  py-4">
          Certified and accredited by recognized national and international
          authorities, ensuring trust and compliance.
        </p>
      </div>
      <div className="flex w-max space-x-28">
        <motion.div
          className="flex space-x-28 items-center"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20, // Adjust speed
          }}
        >
          {logos.map((logo, idx) => (
            <div key={`set1-${idx}`} className="flex-shrink-0">
              <Image
                src={logo}
                alt={`logo-${idx}`}
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>

        <motion.div
          className="flex space-x-28 items-center"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {logos.map((logo, idx) => (
            <div key={`set2-${idx}`} className="flex-shrink-0">
              <Image
                src={logo}
                alt={`logo-${idx}`}
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
