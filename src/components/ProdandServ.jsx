import Image from "next/image";
import product from "/public/product3.jpeg";
import service from "/public/service2.jpeg"
export default function ProdandServices() {
  return (
    <section className="py-12 ">
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* Heading */}
        <h2 className="text-4xl text-center text-[#0a4174] font-bold py-8">What We Do</h2>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Spices */}
          <div className="rounded-lg shadow-md">
            <div className="relative w-full aspect-square">
              <Image
                src={product} 
                alt="Spices"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <h3 className="text-xl  text-[#0a4174] font-semibold py-3">Products</h3>
            <p className="text-gray-600 text-sm pb-3">
              We provide a variety of premium quality products sourced from
              different parts of India to ensure authenticity
            </p>
          </div>

          {/* Handicrafts */}
          <div className="bg-white rounded-lg shadow-md p-4 ">
            <div className="relative w-full aspect-square">
              <Image
                src={service}
                alt="Handicrafts"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <h3 className="text-xl  text-[#0a4174] font-semibold mt-4">Services</h3>
            <p className="text-gray-600 text-sm mt-2">
              Explore our wide collection of handmade crafts that showcase
              tradition, artistry, and sustainable practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
