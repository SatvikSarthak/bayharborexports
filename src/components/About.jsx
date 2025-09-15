"use client";

import { useState } from "react";
import Image from "next/image";
import arrow1 from "/public/arrow1.png";

export default function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-24 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-sm uppercase tracking-widest text-gray-500">
          About Us
        </h2>
        <h1 className="text-4xl font-bold mt-2">Who We Are</h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Our logistics company is dedicated to redefining the way goods move
          across the world. Our global network, coupled with experienced
          professionals, guarantees timely and secure transportation of your
          goods, regardless of the destination.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          {[
            {
              title: "Security",
              content:
                "We prioritize the safety of your goods with top-notch security measures and strict handling protocols.",
            },
            {
              title: "Reliability",
              content:
                "Our logistics company guarantees dependable and timely delivery across the globe.",
            },
            {
              title: "Eco-Friendly",
              content:
                "Our logistics company is dedicated to redefining the way goods move across the world. Our global network, coupled with experienced professionals, guarantees timely and secure transportation of your goods, regardless of the destination.",
            },
            {
              title: "Expertise",
              content:
                "With years of experience, our team provides unmatched expertise and guidance for your logistics needs.",
            },
          ].map((section, index) => (
            <div
              key={index}
              className={`border-b pb-4 cursor-pointer transition-colors ${
                activeIndex === index ? "border-gray-300" : "border-gray-200"
              }`}
              onClick={() => handleToggle(index)}
            >
              {/* Title Row */}
              <div className="flex justify-between items-center">
                <h3
                  className={`text-xl font-medium transition-colors ${
                    activeIndex === index
                      ? "text-black font-semibold"
                      : "text-gray-500"
                  }`}
                >
                  {section.title}
                </h3>

                {activeIndex === index ? (
                  <Image src={arrow1} alt="arrow" className="w-3 h-3" />
                ) : null}
              </div>

              {/* Content */}
              {activeIndex === index && (
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {section.content}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Right - Image */}
        <div className="relative rounded-lg overflow-hidden">
          {/* <Image
            src="/images/packing.jpg" // Place your image inside public/images folder
            alt="Packing"
            width={500}
            height={500}
            className="w-full h-auto object-cover rounded-lg shadow-md"
          /> */}
        </div>
      </div>
    </section>
  );
}
