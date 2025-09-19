"use client";

import Image from "next/image";

const logos = [
  "/logo_fieo.svg", 
  "/logo_spice.png",
  "/logo_apeda.png",
  "/FSSAI_Logo.png",
  "/logo_msme.png",
];

export default function LogoCarousel() {
  return (
    <div className="relative w-full overflow-hidden bg-white py-6 space-y-10">
      <div className="flex flex-col text-center justify-center items-center text-4xl">
        <p className="text-[#0a4174] font-bold">Our Licences</p>
        <p className="text-sm text-gray-600 mx-auto max-w-2xl py-4">
          Certified and accredited by recognized national and international
          authorities, ensuring trust and compliance.
        </p>
      </div>
      
      <div className="relative overflow-hidden mask-gradient">
        <div className="flex animate-scroll-logos">
          {/* Create enough copies to ensure smooth infinite scroll */}
          {Array(4).fill(logos).flat().map((logo, idx) => (
            <div key={`logo-${idx}`} className="flex-shrink-0 mx-14 flex items-center justify-center">
              <Image
                src={logo}
                alt={`logo-${idx % logos.length}`}
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll-logos {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }
        
        .animate-scroll-logos {
          animation: scroll-logos 20s linear infinite;
          width: max-content;
        }
        
        .mask-gradient {
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
        }
      `}</style>
    </div>
  );
}