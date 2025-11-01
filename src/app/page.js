"use client";

import HeroBanner from "@/components/HeroBanner";
import LogoCarousel from "@/components/LogoCarousel";
import StatsCounter from "@/components/StatsCounter";
import FeaturesSection from "@/components/FeaturesSection";
import ExportJourney from "@/components/ExportJourney";
import { WorldMapDemo } from "@/components/Map";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <HeroBanner />

      {/* Logo Carousel */}
      <ScrollReveal offset={150}>
        <LogoCarousel />
      </ScrollReveal>

      {/* Features Section */}
      <ScrollReveal offset={150}>
        <FeaturesSection />
      </ScrollReveal>

      {/* Export Journey */}
      <ScrollReveal offset={150}>
        <ExportJourney />
      </ScrollReveal>

      {/* Stats Counter with Animation */}
      <ScrollReveal offset={150}>
        <StatsCounter />
      </ScrollReveal>

      {/* World Map */}
      <ScrollReveal offset={150}>
        <WorldMapDemo />
      </ScrollReveal>
    </div>
  );
}
