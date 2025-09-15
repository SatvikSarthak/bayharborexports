import { Suspense } from "react";

export default function Banner() {
  return (
    
    <div className="relative w-full h-[800px] ">
      {/* Background Video */}

      <video
        src="/cargo_time_lapse.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 z-10">
        <h1 className="text-white text-5xl font-bold drop-shadow-lg">
          BayHarbor Exports
        </h1>
        <p className="text-gray-200 mt-4 text-lg">Reliable. Fast. Worldwide.</p>
      </div>
    </div>
  );
}
