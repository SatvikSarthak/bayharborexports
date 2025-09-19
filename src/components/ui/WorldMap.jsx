"use client";
import { useRef, useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";

import DottedMap from "dotted-map";

import { useTheme } from "next-themes";

export default function WorldMap({ dots = [], lineColor = "#0ea5e9" }) {
  const svgRef = useRef(null);
  const [tooltip, setTooltip] = useState({ show: false, content: '', x: 0, y: 0 });
  
  const { theme } = useTheme();

  // Memoize the map creation to avoid recreating on every render
  const map = useMemo(() => new DottedMap({ height: 100, grid: "diagonal" }), []);

  // Memoize the SVG map to avoid regenerating
  const svgMap = useMemo(() => {
    return map.getSVG({
      radius: 0.22,
      color: theme === "dark" ? "#FFFFFF40" : "#00000040",
      shape: "circle",
      backgroundColor: theme === "dark" ? "black" : "white",
    });
  }, [map, theme]);

  // Memoize the projection function
  const projectPoint = useCallback((lat, lng) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  }, []);

  // Memoize the curved path creation
  const createCurvedPath = useCallback((start, end) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  }, []);

  // Memoize projected points to avoid recalculating on every render
  const projectedDots = useMemo(() => {
    return dots.map(dot => ({
      ...dot,
      startPoint: projectPoint(dot.start.lat, dot.start.lng),
      endPoint: projectPoint(dot.end.lat, dot.end.lng),
    }));
  }, [dots, projectPoint]);

  // Optimized hover handlers with throttling
  const handleMouseEnter = useCallback((e, location) => {
    e.stopPropagation();
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect) return;
    
    setTooltip({
      show: true,
      content: location.name || 'Location',
      x: e.clientX - rect.left,
      y: e.clientY - rect.top - 10
    });
  }, []);

  const handleMouseLeave = useCallback((e) => {
    e.stopPropagation();
    setTooltip(prev => ({ ...prev, show: false }));
  }, []);

  // Throttled mouse move for tooltip positioning
  const handleMouseMove = useCallback((e, location) => {
    if (!tooltip.show) return;
    
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect) return;
    
    setTooltip(prev => ({
      ...prev,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top - 10
    }));
  }, [tooltip.show]);

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
        {/* Animated paths */}
        {projectedDots.map((dot, i) => (
          <g key={`path-group-${i}`}>
            <motion.path
              d={createCurvedPath(dot.startPoint, dot.endPoint)}
              fill="none"
              stroke="url(#path-gradient)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                delay: 0.5 * i,
                repeat: Infinity,
                repeatDelay: 5,
                repeatType: "loop",
                ease: "easeOut",
              }}
            />
          </g>
        ))}

        {/* Gradient definition */}
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Location points */}
        {projectedDots.map((dot, i) => (
          <g key={`points-group-${i}`}>
            {/* Start point */}
            <g key={`start-${i}`}>
              {/* Main interactive circle */}
              <circle
                cx={dot.startPoint.x}
                cy={dot.startPoint.y}
                r="6"
                fill="transparent"
                className="cursor-pointer"
                onMouseEnter={(e) => handleMouseEnter(e, dot.start)}
                onMouseLeave={handleMouseLeave}
                onMouseMove={(e) => handleMouseMove(e, dot.start)}
              />
              {/* Visible circle */}
              <circle
                cx={dot.startPoint.x}
                cy={dot.startPoint.y}
                r="2"
                fill={lineColor}
                className="pointer-events-none"
              />
              {/* Animated pulse circle */}
              <circle
                cx={dot.startPoint.x}
                cy={dot.startPoint.y}
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
            
            {/* End point */}
            <g key={`end-${i}`}>
              {/* Main interactive circle */}
              <circle
                cx={dot.endPoint.x}
                cy={dot.endPoint.y}
                r="6"
                fill="transparent"
                className="cursor-pointer"
                onMouseEnter={(e) => handleMouseEnter(e, dot.end)}
                onMouseLeave={handleMouseLeave}
                onMouseMove={(e) => handleMouseMove(e, dot.end)}
              />
              {/* Visible circle */}
              <circle
                cx={dot.endPoint.x}
                cy={dot.endPoint.y}
                r="2"
                fill={lineColor}
                className="pointer-events-none"
              />
              {/* Animated pulse circle */}
              <circle
                cx={dot.endPoint.x}
                cy={dot.endPoint.y}
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
      
      {/* Optimized tooltip with CSS transitions */}
      <div
        className={`absolute bg-slate-900 text-white px-3 py-2 rounded-lg shadow-lg text-sm font-medium z-10 pointer-events-none transition-opacity duration-150 ${
          tooltip.show ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: tooltip.x,
          top: tooltip.y,
          transform: 'translate(-50%, -100%)',
          willChange: 'transform, opacity'
        }}
      >
        {tooltip.content}
        <div className="absolute left-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900 transform -translate-x-1/2" />
      </div>
    </div>
  );
}