"use client";

import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [hoveredService, setHoveredService] = useState(null);

  const coreServices = [
    {
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "Product Sourcing",
      description: "Direct sourcing from certified manufacturers and suppliers across India",
      features: [
        "Verified supplier network",
        "Quality-first procurement",
        "Competitive pricing",
        "Custom product requirements"
      ]
    },
    {
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Quality Control",
      description: "Multi-level inspection and testing to ensure product excellence",
      features: [
        "Pre-shipment inspection",
        "Laboratory testing",
        "Certification assistance",
        "Quality documentation"
      ]
    },
    {
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Documentation",
      description: "Complete export paperwork, certifications, and customs compliance",
      features: [
        "Export licenses",
        "Commercial invoices",
        "Phytosanitary certificates",
        "Certificate of origin"
      ]
    },
    {
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: "Logistics & Delivery",
      description: "Efficient shipping and tracking from warehouse to your destination",
      features: [
        "FOB, CIF, CNF terms",
        "Container optimization",
        "Real-time tracking",
        "Door-to-door delivery"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      ),
      title: "Private Labeling",
      description: "Custom branding and packaging solutions for your business identity"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: "Custom Packaging",
      description: "Tailored packaging designs to meet your market requirements"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Market Research",
      description: "Industry insights and market analysis for informed decisions"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Payment Solutions",
      description: "Flexible payment terms including L/C, T/T, and escrow options"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: "Sample Management",
      description: "Product samples for quality verification before bulk orders"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "24/7 Support",
      description: "Round-the-clock customer support for your export queries"
    }
  ];

  const process = [
    {
      number: "01",
      title: "Inquiry & Consultation",
      description: "Share your requirements and we'll provide detailed quotations with product specifications",
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "02",
      title: "Sample Approval",
      description: "Review samples to ensure quality meets your expectations before placing bulk orders",
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "03",
      title: "Order Processing",
      description: "We source, inspect, and prepare your order with complete documentation",
      color: "from-pink-500 to-pink-600"
    },
    {
      number: "04",
      title: "Shipment & Delivery",
      description: "Secure packaging and timely delivery with end-to-end tracking support",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white py-24 px-6 overflow-hidden border-b border-gray-100">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-50"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-1.5 bg-[#0a4174]/10 text-[#0a4174] rounded-full text-sm font-medium">
              Our Services
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 leading-tight text-gray-900">
            Complete Export Solutions
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a4174] to-blue-600">
              Tailored for Your Success
            </span>
          </h1>

          <p className="text-xl text-gray-600 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
            From sourcing to delivery, we handle every aspect of your export needs with precision, transparency, and unwavering commitment to quality.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0a4174] to-transparent opacity-20"></div>
      </section>

      {/* Core Services Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Core{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a4174] to-blue-600">
              Services
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive export services designed to streamline your international trade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {coreServices.map((service, index) => (
            <div 
              key={index}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#0a4174] transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#0a4174]/10 to-blue-600/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-[#0a4174] to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li 
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-700"
                      style={{
                        transitionDelay: hoveredService === index ? `${idx * 50}ms` : '0ms',
                        transform: hoveredService === index ? 'translateX(0)' : 'translateX(-5px)',
                        opacity: hoveredService === index ? 1 : 0.7
                      }}
                    >
                      <svg className="w-4 h-4 text-[#0a4174] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Solutions Banner */}
        <div className="bg-gradient-to-r from-[#0a4174] to-blue-600 rounded-2xl p-8 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold mb-3">Custom Solutions Available</h4>
            <p className="text-blue-100 mb-6">
              Need private labeling, custom packaging, or specific certifications? We tailor our services to match your exact requirements.
            </p>
            <Link 
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-white text-[#0a4174] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span>Discuss Your Needs</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Additional{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a4174] to-blue-600">
                Value-Added Services
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Extra support services to enhance your export experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#0a4174] transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-[#0a4174]/10 rounded-lg flex items-center justify-center text-[#0a4174] mb-4">
                  {service.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a4174] to-blue-600">
              Work
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A seamless 4-step process from inquiry to delivery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-[#0a4174] transition-all duration-300 h-full">
                <div className={`text-6xl font-bold bg-gradient-to-r ${step.color} text-transparent bg-clip-text mb-4`}>
                  {step.number}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              {index < process.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#0a4174] via-[#0d5490] to-[#1a6bb3] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Export Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Partner with Bayharbor Exports for reliable, efficient, and hassle-free export solutions from India to the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0a4174] rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <span>Browse Products</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link 
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0a4174] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Get in Touch</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}