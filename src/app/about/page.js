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
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-4.41 0-8-3.59-8-8V8.3l8-4.5 8 4.5V12c0 4.41-3.59 8-8 8z"/>
        </svg>
      ),
      title: "Authentic Indian Sourcing",
      description: "Partnered with certified manufacturers and processors",
      color: "from-[#0a4174] to-[#0d5490]"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      ),
      title: "Quality Assurance",
      description: "Multi-level inspection before dispatch",
      color: "from-[#0c4d7d] to-[#0e5a94]"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      ),
      title: "Global Trade Expertise",
      description: "Compliance-ready documentation and logistics",
      color: "from-[#094070] to-[#0b4d85]"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/>
        </svg>
      ),
      title: "Flexible Terms",
      description: "Supporting small and bulk orders (FOB, CIF, CNF)",
      color: "from-[#0a4276] to-[#0c4f8a]"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-1-2-2-2zm-5 12H9v-2h6v2zm5-7H4V4h16v3z"/>
        </svg>
      ),
      title: "Custom Packaging",
      description: "Private labeling options available",
      color: "from-[#0b4579] to-[#0d5291]"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      ),
      title: "Trusted Partnership",
      description: "Integrity and customer satisfaction in every transaction",
      color: "from-[#083d6f] to-[#0a4a81]"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0a4174] to-[#0d5490] text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Connecting India&apos;s Best to the World
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-blue-100">
            Your trusted export partner for premium spices, agro products, pulses, grains, dry fruits, and more — sourced directly from India&apos;s heartlands with uncompromised quality and reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/products"
              className="px-8 py-4 bg-white text-[#0a4174] whitespace-nowrap overflow-hidden  rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-1-2-2-2zm-5 12H9v-2h6v2zm5-7H4V4h16v3z"/>
              </svg>
              Explore Our Products
            </Link>
            <Link 
              href="/contact-us"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#0a4174] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
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
                  <Image src="/cont1.jpeg" alt="Container Illustration" layout="fill" objectFit="cover" />
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

        {/* Our Strengths - Even Grid */}
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

          {/* Equal Size Grid - 3 columns, 2 rows */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {strengths.map((strength, index) => {
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] cursor-pointer"
                >
                  {/* Minimal Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${strength.color} transition-all duration-500`}></div>
                  
                  {/* Subtle Pattern Overlay */}
                  <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                      backgroundSize: '24px 24px'
                    }}></div>
                  </div>


                  <div className="relative h-full p-8 flex flex-col text-white min-h-[280px]">
                   
                    <div className="mb-6 transform transition-all duration-500 group-hover:scale-110">
                      <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 border border-white/20">
                        {strength.icon}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 group-hover:translate-x-1 transition-transform duration-300">
                      {strength.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base text-white/90 leading-relaxed flex-grow">
                      {strength.description}
                    </p>
                  </div>

                 
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold text-[#0a4174] mb-2">100+</div>
              <div className="text-sm text-gray-600">Certified Suppliers</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold text-[#0a4174] mb-2">50+</div>
              <div className="text-sm text-gray-600">Export Countries</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold text-[#0a4174] mb-2">1000+</div>
              <div className="text-sm text-gray-600">Successful Shipments</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold text-[#0a4174] mb-2">24/7</div>
              <div className="text-sm text-gray-600">Customer Support</div>
            </div>
          </div> */}
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
            className="bg-gradient-to-r from-[#0a4174] to-blue-600 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Get In Touch Today
          </Link>
        </div>
      </section>
    </div>
  );
}
