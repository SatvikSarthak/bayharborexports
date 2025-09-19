"use client"
import WorldMap from "@/components/ui/WorldMap";
import { motion } from "framer-motion";

export function WorldMapDemo() {
  return (
    <div className=" py-20  bg-white w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl text-[#0Affff] ">
          <span className="text-[#0a4174]">
            {"Where We Serve".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word === " " ? "\u00A0" : word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          Connecting businesses and people worldwide — no matter where you are,
          we deliver with precision and care.
        </p>
      </div>
      <WorldMap
        dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
              name: "Alaska, USA"
            },
            end: {
              lat: 34.0522,
              lng: -118.2437,
              name: "Los Angeles, USA"
            },
          },
          {
            start: { 
              lat: 64.2008, 
              lng: -149.4937,
              name: "Alaska, USA"
            },
            end: { 
              lat: -15.7975, 
              lng: -47.8919,
              name: "Brasília, Brazil"
            },
          },
          {
            start: { 
              lat: -15.7975, 
              lng: -47.8919,
              name: "Brasília, Brazil"
            },
            end: { 
              lat: 38.7223, 
              lng: -9.1393,
              name: "Lisbon, Portugal"
            },
          },
          {
            start: { 
              lat: 51.5074, 
              lng: -0.1278,
              name: "London, UK"
            },
            end: { 
              lat: 28.6139, 
              lng: 77.209,
              name: "New Delhi, India"
            },
          },
          {
            start: { 
              lat: 28.6139, 
              lng: 77.209,
              name: "New Delhi, India"
            },
            end: { 
              lat: 43.1332, 
              lng: 131.9113,
              name: "Vladivostok, Russia"
            },
          },
          {
            start: { 
              lat: 28.6139, 
              lng: 77.209,
              name: "New Delhi, India"
            },
            end: { 
              lat: -1.2921, 
              lng: 36.8219,
              name: "Nairobi, Kenya"
            },
          },
        ]}
      />
    </div>
  );
}