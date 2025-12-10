import Navbar from "@/components/Navbar";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { Suspense } from "react";
import Loading from "./loading";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";

const montserrat = Montserrat({
  subsets: ["latin"], // required
  weight: ["400", "500", "600", "700"], // choose font weights you need
  display: "swap", // prevents layout shift
});

export const metadata = {
  title:{
   default: "BayHarbor Exports – Trusted Indian Exporter of Quality Goods & Products Worldwide",
   template:"%s | Bayharbor Exports",
  },
  description: "BayHarbor Exports is a leading Indian exporter of high-quality products. We offer top-grade, ISO-certified goods with reliable logistics and global shipping to over 50 countries. Partner with us for your export needs!",
  keywords:["Indian exporters", "wholesale supplier India", "global sourcing","B2B trade India",
"bulk export products", "Indian spices exporter", "agro exporter India",
"industrial materials exporter", "natural stones India","Bayharbor Exports"
],


};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased `}>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <main className="">{children}</main>
        </Suspense>
        <Footer />
        <FloatingContactButton />
      </body>
    </html>
  );
}
