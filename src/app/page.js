"use client";

import AboutSection from "@/components/About";
import Banner from "@/components/Banner";
import LogoCarousel from "@/components/LogoCarousel";
import { WorldMapDemo } from "@/components/Map";
import ProdandServices from "@/components/ProdandServ";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="flex justify-center items-center h-[600px] pt-16 md:pt-20">
        <Banner className="w-1/2" />
      </div>

      <ScrollReveal offset={150}>
        <LogoCarousel />
      </ScrollReveal>

      <ScrollReveal offset={150}>
        <ProdandServices />
      </ScrollReveal>

      <ScrollReveal offset={150}>
        <WorldMapDemo />
      </ScrollReveal>
    </div>
  );
}
