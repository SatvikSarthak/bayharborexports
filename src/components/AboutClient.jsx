"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredOffering, setHoveredOffering] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const offerings = [
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
      ),
      title: "Agro & Food Exports",
      description: "Premium quality agricultural products sourced from India's finest farms",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      items: [
        { name: "Indian Spices", desc: "Cumin, Turmeric, Coriander & more" },
        { name: "Pulses & Grains", desc: "Lentils, Chickpeas, Rice, Wheat" },
        { name: "Fresh Produce", desc: "Fruits & Vegetables" }, 
        { name: "Dry Fruits & Oils", desc: "Seeds & Edible Oils" }
      ]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
        </svg>
      ),
      title: "Industrial & Raw Materials",
      description: "High-grade industrial products for global manufacturing needs",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      items: [
        { name: "Fasteners", desc: "Nuts, Bolts, Screws, Washers" },
        { name: "Natural Stones", desc: "Granite, Marble, Sandstone" },
        { name: "Textiles & Handicrafts", desc: "Traditional & Modern designs" },
        { name: "Custom Sourcing", desc: "Any India-made product" }
      ]
    }
  ];

  const strengths = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Authentic Indian Sourcing",
      description: "Partnered with certified manufacturers and processors"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Quality Assurance",
      description: "Multi-level inspection before dispatch"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Global Trade Expertise",
      description: "Compliance-ready documentation and logistics"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Flexible Terms",
      description: "Supporting small and bulk orders (FOB, CIF, CNF)"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: "Custom Packaging",
      description: "Private labeling options available"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Trusted Partnership",
      description: "Integrity and customer satisfaction in every transaction"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - Minimal Design */}
      <section className="relative bg-white py-24 px-6 overflow-hidden border-b border-gray-100">
        {/* Subtle Background Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-50"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Small Badge */}
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-1.5 bg-[#0a4174]/10 text-[#0a4174] rounded-full text-sm font-medium">
              Trusted Global Export Partner
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 leading-tight text-gray-900">
            Connecting India&apos;s Best
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a4174] to-blue-600">
              to the World
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
            Your trusted export partner for premium spices, agro products, pulses, grains, dry fruits, and more — sourced directly from India&apos;s heartlands.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#0a4174] to-blue-600 text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <span>Explore Our Products</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link 
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-[#0a4174] hover:text-[#0a4174] transition-all duration-300"
            >
              <span>Partner With Us</span>
            </Link>
          </div>
        </div>

        
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0a4174] to-transparent opacity-20"></div>
      </section>

     
      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* Split Section - Image & Text */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Side - Image */}
          <div className="relative group">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder for container image - replace with actual image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0a4174] via-[#0d5490] to-[#1a6bb3] flex items-center justify-center">
                {/* Container Icon/Illustration */}
                <div className="text-center text-white">
                  <Image src="/cont1.png" alt="Container Illustration" layout="fill" objectFit="cover" />
                      </div>
              </div>
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              {/* Stats Overlay */}
              {/* <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="grid grid-cols-3 gap-4 text-white text-center">
                  <div>
                    <div className="text-3xl font-bold">50+</div>
                    <div className="text-xs opacity-90">Countries</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">1000+</div>
                    <div className="text-xs opacity-90">Shipments</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-xs opacity-90">Quality</div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="space-y-6">
            <div>
              <div className="inline-block bg-[#0a4174] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                About Bayharbor Exports Pvt. Ltd.
              </div>
               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Bridging India to the World —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a4174] to-blue-600">
              One Shipment at a Time
            </span>
          </h2>
             
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Bayharbor Exports Pvt. Ltd. is a <strong>globally focused export company</strong> based in India, dedicated to delivering premium agro commodities, spices, processed food products, industrial goods, and natural stones to clients across continents.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              We specialize in <strong>end-to-end sourcing, procurement, and export solutions</strong>, ensuring quality, reliability, and compliance at every stage of trade.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-2 mt-1">
                   <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Premium Quality Products</h3>
                  <p className="text-gray-600 text-sm">Sourced directly from certified manufacturers across India</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-2 mt-1">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Global Compliance</h3>
                  <p className="text-gray-600 text-sm">Meeting international standards and regulations</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-purple-100 rounded-full p-2 mt-1">
                  <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Reliable Partnership</h3>
                  <p className="text-gray-600 text-sm">Building long-term relationships with transparency</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What We Offer */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a4174] to-blue-600">
             We Offer
            </span>
          </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of premium products, carefully sourced and exported with excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {offerings.map((offering, index) => (
              <div 
                key={index}
                onMouseEnter={() => setHoveredOffering(index)}
                onMouseLeave={() => setHoveredOffering(null)}
                className="group relative bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${offering.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative p-8">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`bg-gradient-to-br ${offering.color} text-white p-4 rounded-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}>
                      {offering.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-blue-600 transition-all duration-300">
                        {offering.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {offering.description}
                      </p>
                    </div>
                  </div>

                  {/* Items Grid */}
                  <div className="space-y-3">
                    {offering.items.map((item, idx) => (
                      <div 
                        key={idx}
                        className={`${offering.bgColor} rounded-xl p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer border border-transparent hover:border-gray-200`}
                        style={{
                          transitionDelay: hoveredOffering === index ? `${idx * 50}ms` : '0ms',
                          transform: hoveredOffering === index ? 'translateX(0)' : 'translateX(-10px)',
                          opacity: hoveredOffering === index ? 1 : 0.8
                        }}
                      >
                        <div className="flex items-start gap-3">
                          <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${index === 0 ? 'text-green-600' : 'text-blue-600'}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900">{item.name}</h4>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* View Products Link */}
                  <Link 
                    href="/products"
                    className={`mt-6 inline-flex items-center text-sm font-semibold bg-gradient-to-r ${offering.color} text-transparent bg-clip-text hover:underline group/link`}
                  >
                    Explore Products
                    <svg className={`w-4 h-4 ml-1 transform transition-transform group-hover/link:translate-x-1 ${index === 0 ? 'text-green-600' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                {/* Decorative Corner */}
                <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${offering.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
              </div>
            ))}
          </div>
        </div>

       
               
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a4174] to-blue-600">
            Strengths
            </span>
          </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Built on a foundation of trust, quality, and innovation — discover what makes us your ideal export partner
            </p>
          </div>

          {/* Minimalistic Even Grid - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border border-gray-200 transition-all duration-300 hover:border-[#0a4174] hover:shadow-xl hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center text-[#0a4174] group-hover:bg-[#0a4174] group-hover:text-white transition-all duration-300">
                    {strength.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {strength.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>


        <div className="bg-gradient-to-r from-[#0a4174] to-blue-600 text-white px-8 py-12 mb-16 rounded-full font-semibold shadow-xl hover:shadow-2xl transform transition-all duration-300">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl leading-relaxed text-blue-100">
              To empower global trade partners with trusted Indian supply solutions while upholding integrity, consistency, and customer satisfaction in every transaction.
            </p>
          </div>
        </div>

 
        <div className="text-center bg-white rounded-2xl shadow-xl p-12 border border-gray-100">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Whether you&apos;re seeking premium Indian spices, durable fasteners, or high-grade natural stones — Bayharbor Exports Pvt. Ltd. stands as your reliable sourcing and export partner from India.
          </p>
          <Link 
            href="/contact-us"
            className="bg-gradient-to-r  from-[#0a4174] to-blue-600 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transform  transition-all duration-300"
          >
            Get In Touch Today
          </Link>
        </div>
      </section>
    </div>
  );
}
