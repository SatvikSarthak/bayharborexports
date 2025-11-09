"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function FeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const router = useRouter();

  const features = [
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Quality Certified",
      description: "All products undergo rigorous quality checks and meet international standards",
      stat: "ISO 9001",
      color: "from-[#0a4174] to-blue-600",
      bgPattern: "bg-blue-50"
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Global Reach",
      description: "Exporting to 50+ countries with efficient logistics and timely delivery",
      stat: "50+ Countries",
      color: "from-[#0a4174] to-blue-600",
      bgPattern: "bg-blue-50"
    },
    {
      icon: (
       <svg xmlns="http://www.w3.org/2000/svg"  className="w-16 h-16" viewBox="0 0 640 512"><path fill="#0a4174" d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"/></svg>
      ),
      title: "Fast Shipping",
      description: "Reliable shipping partners ensuring your products reach on time",
      stat: "On Time Delivery",
      color: "from-[#0a4174] to-blue-600",
      bgPattern: "bg-blue-50"
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "24/7 Support",
      description: "Dedicated customer service team ready to assist you anytime",
      stat: "Always Online",
      color: "from-[#0a4174] to-blue-600",
      bgPattern: "bg-blue-50"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header with Badge */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-[#0a4174]/10 text-[#0a4174] rounded-full text-sm font-semibold">
              ✨ Our Advantages
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a4174] to-blue-600">
              Bayharbor Exports?
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We combine quality, reliability, and expertise to deliver exceptional export solutions
          </p>
        </div>


        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative ${
                index % 2 === 0 ? 'md:translate-y-8' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card */}
              <div className={`relative bg-white rounded-3xl p-8 border-2 transition-all duration-500 overflow-hidden
                ${hoveredIndex === index 
                  ? 'border-[#0a4174] shadow-2xl -translate-y-2 scale-105' 
                  : 'border-gray-200 shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Background Pattern */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${feature.bgPattern} rounded-full -mr-16 -mt-16 opacity-50 transition-all duration-500 ${hoveredIndex === index ? 'scale-150' : 'scale-100'}`}></div>
                
                {/* Icon with Floating Animation */}
                <div className={`relative mb-6 flex items-center justify-between`}>
                  <div className={`w-20 h-20 flex items-center justify-center transform transition-all duration-500 ${hoveredIndex === index ? 'scale-125 rotate-12' : 'scale-100'}`}>
                    <div className={`text-[#0a4174] transition-colors duration-300`}>
                      {feature.icon}
                    </div>
                  </div>
                  
                  {/* Stat Badge */}
                  <div className={`px-4 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r ${feature.color} shadow-lg transform transition-all duration-300 ${hoveredIndex === index ? 'scale-110' : 'scale-100'}`}>
                    {feature.stat}
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className={`text-2xl font-bold mb-3 transition-all duration-300 text-[#0a4174]`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  
                  {/* Animated Progress Bar */}
                  <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${feature.color} rounded-full transition-all duration-700 ${hoveredIndex === index ? 'w-full' : 'w-0'}`}
                    ></div>
                  </div>
                </div>

                {/* Corner Accent */}
                {hoveredIndex === index && (
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-br from-[#0a4174]/10 to-transparent rounded-tr-full"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center mt-16">
          <div 
            onClick={() => router.push('/products')}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0a4174] to-blue-600 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <span>Explore Our Products</span>
            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
