"use client";

import { useState, useEffect, useRef } from "react";

export default function StatsCounter() {
  const [counts, setCounts] = useState({
    suppliers: 0,
    countries: 0,
    shipments: 0,
    support: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const targets = {
      suppliers: 100,
      countries: 50,
      shipments: 1000,
      support: 24
    };

    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounts({
        suppliers: Math.floor(targets.suppliers * progress),
        countries: Math.floor(targets.countries * progress),
        shipments: Math.floor(targets.shipments * progress),
        support: Math.floor(targets.support * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);
  };

  const stats = [
    {
      count: `${counts.suppliers}+`,
      label: "Certified Suppliers"
    },
    {
      count: `${counts.countries}+`,
      label: "Export Countries"
    },
    {
      count: `${counts.shipments}+`,
      label: "Successful Shipments"
    },
    {
      count: `${counts.support}/7`,
      label: "Customer Support"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a4174] to-blue-600">
            Track Record
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Numbers that speak for our commitment to excellence and global reach
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Count */}
              <div className="text-7xl xxxs:text-2xl  xxs:text-4xl sm:text-5xl font-bold text-[#0a4174] mb-2 transition-all duration-300">
                {stat.count}
              </div>

              {/* Label */}
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-700 mb-6 text-lg">
            Join hundreds of satisfied clients worldwide
          </p>
           <a
            href="/contact-us"
            className="inline-block px-6 py-3 bg-gradient-to-r from-[#0a4174] to-blue-600 text-white font-semibold rounded-full
              hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Partner with us today →
          </a>
        </div>
      </div>
    </section>
  );
}
