import React from "react";
import Image from "next/image";

export default function CompareDemo() {
  const traditionalPoints = [
    "Multiple intermediaries",
    "Inconsistent quality checks",
    "Limited tracking visibility",
    "Complex documentation",
    "Delayed communication"
  ];

  const bayharborPoints = [
    "Direct sourcing network",
    "Multi-level quality assurance",
    "Real-time shipment tracking",
    "Simplified export process",
    "24/7 customer support"
  ];

  return (
    <section className="py-20 px-6 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Bold Text */}
          <div className="space-y-6">
            <div className="inline-block bg-[#0a4174]/10 text-[#0a4174] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              The Bayharbor Difference
            </div>
            
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
              <span className="text-gray-900">Why Choose</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a4174] via-blue-600 to-[#0a4174] animate-gradient bg-300%">
                Bayharbor Exports?
              </span>
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              Experience the next generation of export excellence. We've reimagined every step of the export process to deliver unmatched quality, transparency, and reliability.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#0a4174]">50+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#0a4174]">1000+</div>
                <div className="text-sm text-gray-600">Shipments</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#0a4174]">100%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Side - Comparison */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Traditional Export */}
            <div className="group relative bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-gray-300 transition-all duration-300">
              <div className="absolute -top-3 left-6 bg-gray-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Traditional Export
              </div>

              <div className="mt-6 mb-6">
                <div className="relative h-40 rounded-xl overflow-hidden bg-gray-100">
                  <Image
                    src="/rajma.png"
                    alt="Traditional Export"
                    fill
                    className="object-cover opacity-60"
                  />
                </div>
              </div>

              <ul className="space-y-3">
                {traditionalPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bayharbor Export */}
            <div className="group relative bg-gradient-to-br from-[#0a4174] to-blue-600 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
              <div className="absolute -top-3 left-6 bg-white text-[#0a4174] px-4 py-1 rounded-full text-sm font-bold shadow-md">
                Bayharbor Exports
              </div>

              <div className="mt-6 mb-6">
                <div className="relative h-40 rounded-xl overflow-hidden ring-2 ring-white/30">
                  <Image
                    src="/nuts.png"
                    alt="Bayharbor Exports"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <ul className="space-y-3">
                {bayharborPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-white">
                    <svg className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
