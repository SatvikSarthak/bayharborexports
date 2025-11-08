"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ExportJourney() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end end'],
  });

  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  
  // Card opacity animations
  const card1Opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const card2Opacity = useTransform(scrollYProgress, [0.25, 0.45], [0, 1]);
  const card3Opacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
  const card4Opacity = useTransform(scrollYProgress, [0.75, 0.95], [0, 1]);
  
  const cardOpacities = [card1Opacity, card2Opacity, card3Opacity, card4Opacity];
  const cardY = useTransform(scrollYProgress, [0, 1], ['40px', '0px']);

  // Checkpoint colors
  const checkpoint1Color = useTransform(scrollYProgress, [0, 0.2], ['#e5e7eb', '#0a4174']);
  const checkpoint2Color = useTransform(scrollYProgress, [0.24, 0.45], ['#e5e7eb', '#10b981']);
  const checkpoint3Color = useTransform(scrollYProgress, [0.49, 0.7], ['#e5e7eb', '#8b5cf6']);
  const checkpoint4Color = useTransform(scrollYProgress, [0.74, 0.95], ['#e5e7eb', '#f59e0b']);

  const steps = [
    {
      id: 1,
      title: "Source",
      icon: "🏭",
      description: "Premium products from trusted Indian suppliers",
      detail: "Direct partnerships with 100+ verified suppliers",
      color: "from-[#0a4174] to-blue-600",
      bgColor: "bg-blue-50",
      checkpointColor: checkpoint1Color
    },
    {
      id: 2,
      title: "Quality Check",
      icon: "✓",
      description: "ISO-certified quality assurance process",
      detail: "Multi-stage inspection & certification",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      checkpointColor: checkpoint2Color
    },
    {
      id: 3,
      title: "Package",
      icon: "📦",
      description: "Secure export-ready packaging",
      detail: "International shipping standards compliance",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      checkpointColor: checkpoint3Color
    },
    {
      id: 4,
      title: "Ship",
      icon: "🚢",
      description: "Fast worldwide delivery to 50+ countries",
      detail: "Real-time tracking & insurance included",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      checkpointColor: checkpoint4Color
    }
  ];

  return (
    <section ref={targetRef} className="relative h-[200vh] w-full ">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-4 py-16">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-[#0a4174]/10 text-[#0a4174] rounded-full text-sm font-semibold">
              ✨ Our Process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a4174] to-blue-600">
              Export Journey
            </span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            From India's finest suppliers to your doorstep - scroll to see the seamless process
          </p>
        </div>

        {/* Timeline Progress Bar */}
        <div className="w-full max-w-5xl relative mb-16">
          <div className="h-2 bg-gray-200 rounded-full shadow-inner">
            <motion.div 
              style={{ width }} 
              className="h-full bg-gradient-to-r from-[#0a4174] via-green-500 via-purple-500 to-orange-500 rounded-full shadow-lg"
            />
          </div>
          
          {/* Checkpoints */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="relative w-full h-full">
              {/* Checkpoint 1 */}
              <motion.div
                className="absolute top-1/2 left-0 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white shadow-lg"
                style={{ backgroundColor: checkpoint1Color }}
              />
              
              {/* Checkpoint 2 */}
              <motion.div
                className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white shadow-lg"
                style={{ backgroundColor: checkpoint2Color }}
              />
              
              {/* Checkpoint 3 */}
              <motion.div
                className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white shadow-lg"
                style={{ backgroundColor: checkpoint3Color }}
              />
              
              {/* Checkpoint 4 */}
              <motion.div
                className="absolute top-1/2 right-0 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white shadow-lg"
                style={{ backgroundColor: checkpoint4Color }}
              />
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              style={{ opacity: cardOpacities[index], y: cardY }}
              className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="mb-4">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-3xl shadow-lg`}>
                  {step.icon}
                </div>
              </div>

              {/* Step Number */}
              <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r ${step.color} text-white text-sm font-bold mb-3`}>
                {step.id}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-700 mb-2 font-medium">
                {step.description}
              </p>

              {/* Detail */}
              <p className="text-xs text-gray-600 italic">
                {step.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-700 mb-4 text-sm md:text-base">
            Ready to experience hassle-free exports?
          </p>
          <a
            href="/products"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#0a4174] to-blue-600 text-white font-semibold rounded-full
              hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Start Your Journey →
          </a>
        </div>
      </div>
    </section>
  );
}
