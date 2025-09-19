import AboutSection from "@/components/About";
import Banner from "@/components/Banner";
import LogoCarousel from "@/components/LogoCarousel";
import { WorldMapDemo } from "@/components/Map";
import ProdandServices from "@/components/ProdandServ";

export default function HomePage() {
  return (
    <div className=" ">
    <div className="flex justify-center items-center h-[600px] pt-16 md:pt-20">
        <Banner className="w-1/2" />
      </div>

      <AboutSection />
      <LogoCarousel />
      <ProdandServices />
      <WorldMapDemo />
    </div>
  );
}
