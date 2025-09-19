"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

import DottedMap from "dotted-map";

import { useTheme } from "next-themes";

export default function WorldMap({ dots = [], lineColor = "#0ea5e9" }) {
  const svgRef = useRef(null);
  const [tooltip, setTooltip] = useState({ show: false, content: '', x: 0, y: 0 });
  const map = new DottedMap({ height: 100, grid: "diagonal" });

  const { theme } = useTheme();

  const svgMap = map.getSVG({
    radius: 0.22,
    color: theme === "dark" ? "#FFFFFF40" : "#00000040",
    shape: "circle",
    backgroundColor: theme === "dark" ? "black" : "white",
  });

  const projectPoint = (lat, lng) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (start, end) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  // Get unique locations to avoid duplicate labels
  const getUniqueLocations = () => {
    const locationMap = new Map();
    
    dots.forEach((dot) => {
      const startKey = `${dot.start.lat}-${dot.start.lng}`;
      const endKey = `${dot.end.lat}-${dot.end.lng}`;
      
      if (!locationMap.has(startKey)) {
        locationMap.set(startKey, {
          ...dot.start,
          point: projectPoint(dot.start.lat, dot.start.lng)
        });
      }
      
      if (!locationMap.has(endKey)) {
        locationMap.set(endKey, {
          ...dot.end,
          point: projectPoint(dot.end.lat, dot.end.lng)
        });
      }
    });
    
    return Array.from(locationMap.values());
  };

  const handleMouseEnter = (e, location) => {
    const rect = svgRef.current.getBoundingClientRect();
    setTooltip({
      show: true,
      content: location.name || 'Location',
      x: e.clientX - rect.left,
      y: e.clientY - rect.top - 10
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ show: false, content: '', x: 0, y: 0 });
  };

  return (
    <div className="w-full aspect-[2/1] bg-white rounded-lg relative font-sans">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 select-none"
      >
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1"
                initial={{
                  pathLength: 0,
                }}
                animate={{
                  pathLength: 1,
                }}
                transition={{
                  duration: 2,
                  delay: 0.5 * i,
                  repeat: Infinity,
                  repeatDelay: 5,
                  repeatType: "loop",
                  ease: "easeOut",
                }}
                key={`start-upper-${i}`}
              ></motion.path>
            </g>
          );
        })}

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots.map((dot, i) => (
          <g key={`points-group-${i}`}>
            <g key={`start-${i}`}>
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r="2"
                fill={lineColor}
                className="cursor-pointer"
                onMouseEnter={(e) => handleMouseEnter(e, dot.start)}
                onMouseLeave={handleMouseLeave}
              />
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r="2"
                fill={lineColor}
                opacity="0.5"
                className="pointer-events-none"
              >
                <animate
                  attributeName="r"
                  from="2"
                  to="8"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
            <g key={`end-${i}`}>
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r="2"
                fill={lineColor}
                className="cursor-pointer"
                onMouseEnter={(e) => handleMouseEnter(e, dot.end)}
                onMouseLeave={handleMouseLeave}
              />
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r="2"
                fill={lineColor}
                opacity="0.5"
                className="pointer-events-none"
              >
                <animate
                  attributeName="r"
                  from="2"
                  to="8"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </g>
        ))}
      </svg>
      
      {/* Tooltip */}
      {tooltip.show && (
        <div
          className="absolute bg-slate-900 text-white px-3 py-2 rounded-lg shadow-lg text-sm font-medium z-10 pointer-events-none"
          style={{
            left: tooltip.x,
            top: tooltip.y,
            transform: 'translate(-50%, -100%)'
          }}
        >
          {tooltip.content}
          <div className="absolute left-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900 transform -translate-x-1/2" />
        </div>
      )}
    </div>
  );
}