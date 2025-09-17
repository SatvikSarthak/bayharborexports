import AboutSection from "@/components/About";
import Banner from "@/components/Banner";
import LogoCarousel from "@/components/LogoCarousel";
import { WorldMapDemo } from "@/components/Map";
import ProdandServices from "@/components/ProdandServ";

export default function HomePage() {
  return (
    <div className=" ">
      <Banner />

      <AboutSection />
      <LogoCarousel />
      <ProdandServices />
      <WorldMapDemo />
    </div>
  );
}
