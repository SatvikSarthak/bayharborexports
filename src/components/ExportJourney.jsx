"use client";

import { useState, useEffect } from "react";

export default function ExportJourney() {
  const [activeStep, setActiveStep] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  const steps = [
    {
      id: 1,
      title: "Source",
      icon: "🏭",
      description: "Premium products from trusted Indian suppliers",
      detail: "Direct partnerships with 100+ verified suppliers",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-500"
    },
    {
      id: 2,
      title: "Quality Check",
      icon: "✓",
      description: "ISO-certified quality assurance process",
      detail: "Multi-stage inspection & certification",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-500"
    },
    {
      id: 3,
      title: "Package",
      icon: "📦",
      description: "Secure export-ready packaging",
      detail: "International shipping standards compliance",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-500"
    },
    {
      id: 4,
      title: "Ship",
      icon: "🚢",
      description: "Fast worldwide delivery to 50+ countries",
      detail: "Real-time tracking & insurance included",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-500"
    }
  ];

  // Auto-cycle through steps with back and forth animation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100 && direction === 1) {
          setDirection(-1);
          return 99;
        } else if (prev <= 0 && direction === -1) {
          setDirection(1);
          return 1;
        }
        return prev + direction;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [direction]);

  const startAnimation = () => {
    setIsAnimating(true);
    setActiveStep(1);
    let currentStep = 1;
    const stepInterval = setInterval(() => {
      currentStep++;
      if (currentStep <= 4) {
        setActiveStep(currentStep);
      } else {
        clearInterval(stepInterval);
        setTimeout(() => {
          setIsAnimating(false);
          setActiveStep(null);
        }, 1000);
      }
    }, 800);
  };

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-10 right-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-10 left-1/2 w-32 h-32 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-[#0a4174]/10 text-[#0a4174] rounded-full text-sm font-semibold">
              ✨ Our Process
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a4174] mb-3">
            Your Export Journey
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mb-6">
            From India's finest suppliers to your doorstep - a seamless process
          </p>
          
          {/* Play Animation Button */}
          <button
            onClick={startAnimation}
            disabled={isAnimating}
            className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300
              ${isAnimating 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-gradient-to-r from-[#0a4174] to-blue-600 text-white hover:shadow-lg hover:scale-105'
              }`}
          >
            {isAnimating ? '🎬 Playing...' : '▶️ Watch Journey'}
          </button>
        </div>

  
        <div className="relative">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
            <div className="absolute top-10 right-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
            <div className="absolute bottom-10 left-1/2 w-32 h-32 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
          </div>

          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-2 bg-gray-200 rounded-full -translate-y-1/2 z-0">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

      
          <div className="hidden md:block absolute inset-0">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`absolute rounded-full ${step.bgColor} opacity-20 animate-blob`}
                style={{
                  width: `${index * 10 + 60}px`,
                  height: `${index * 10 + 60}px`,
                  top: `${index * 20}px`,
                  left: `${index * 20}px`,
                  animationDelay: `${index * 1000}ms`
                }}
              />
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="flex flex-col items-center"
                onMouseEnter={() => !isAnimating && setActiveStep(step.id)}
                onMouseLeave={() => !isAnimating && setActiveStep(null)}
              >
                
                <div className="relative">
                  <div
                    className={`w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br ${step.color} 
                      flex items-center justify-center text-3xl md:text-4xl
                      transform transition-all duration-500 cursor-pointer
                      ${activeStep === step.id ? 'scale-110 shadow-2xl rotate-12' : 'shadow-lg hover:scale-105'}
                      relative z-20`}
                  >
                    <span className="filter drop-shadow-lg transition-transform duration-300">
                      {step.icon}
                    </span>
                  </div>
                  
                  
                  {activeStep === step.id && (
                    <div className="absolute inset-0 -m-2">
                      <div className={`w-24 h-24 md:w-28 md:h-28 rounded-full border-4 ${step.borderColor} animate-spin-slow opacity-50`} 
                        style={{ 
                          borderStyle: 'dashed',
                          animationDuration: '3s' 
                        }}
                      />
                    </div>
                  )}

                 
                  {(activeStep >= step.id || (isAnimating && activeStep >= step.id)) && (
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg animate-bounce-once z-30">
                      ✓
                    </div>
                  )}
                </div>

              
                <div className={`mt-3 w-8 h-8 rounded-full text-white text-sm font-bold flex items-center justify-center transition-all duration-300
                  ${activeStep === step.id ? 'bg-gradient-to-r from-[#0a4174] to-blue-600 scale-110' : 'bg-[#0a4174]'}`}>
                  {step.id}
                </div>

               
                <h3 className={`mt-2 text-lg md:text-xl font-bold text-center transition-all duration-300
                  ${activeStep === step.id ? 'text-transparent bg-clip-text bg-gradient-to-r ' + step.color : 'text-[#0a4174]'}`}>
                  {step.title}
                </h3>

              
                <div
                  className={`mt-3 text-center transition-all duration-500 overflow-hidden
                    ${activeStep === step.id ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0 md:max-h-0 md:opacity-0'}`}
                >
                  <div className={`${step.bgColor} rounded-lg p-3 shadow-md border-l-4 ${step.borderColor}`}>
                    <p className="text-xs md:text-sm text-gray-700 font-medium mb-1">
                      {step.description}
                    </p>
                    <p className="text-xs text-gray-600 italic">
                      {step.detail}
                    </p>
                  </div>
                </div>

                {/* Arrow Connector - Only on Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] text-2xl text-gray-400">
                    <span className={`transition-all duration-300 ${activeStep === step.id ? 'text-4xl' : ''}`}>
                      →
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

       
        <div className="text-center mt-12">
          <p className="text-gray-700 mb-4 text-sm md:text-base">
            Ready to experience hassle-free exports?
          </p>
          <a
            href="/products"
            className="inline-block px-6 py-3 bg-gradient-to-r from-[#0a4174] to-blue-600 text-white font-semibold rounded-full
              hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Start Your Journey →
          </a>
        </div>
      </div>
    </section>
  );
}
