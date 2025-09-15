import AboutSection from "@/components/About";
import Banner from "@/components/Banner";
import { WorldMapDemo } from "@/components/Map";
export default function HomePage() {
  return (
    <div className=" ">
      <Banner/>
      <AboutSection/>
      <WorldMapDemo/>
    </div>
  );
}
