import AboutSection from "@/components/About";
import Banner from "@/components/Banner";
import LogoCarousel from "@/components/LogoCarousel";
import { WorldMapDemo } from "@/components/Map";

export default function HomePage() {
  return (
    <div className=" ">
      <Banner />

      <AboutSection />
      <LogoCarousel />
      <WorldMapDemo />
    </div>
  );
}
