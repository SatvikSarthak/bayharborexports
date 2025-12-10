"use client";
import Image from "next/image";
import Link from "next/link";
//import logo from "/example.jpg";

export default function 
Product({ product }) {
  // Return early if product is undefined
  if (!product) {
    return null;
  }

  return (
    <div className="flex flex-col xxxs:mt-6 lg:mt-0 bg-white rounded-lg shadow-lg xxxs:w-[250px] md:w-[300px] lg4:w-[300px] lg2:w-[250px]  min-h-[150px]  border-gray-200  border-[2px]  hover:shadow-xl transition-shadow duration-300">
      
      <div className="mb-3 flex justify-center">
        <Image
          className="w-full h-48 object-cover rounded-md"
          src={product.image}
          alt={product.name || "Product"}
          width={300}
          height={200}
        />
      </div>
      <div className="flex flex-col space-y-3 p-4">
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-xl font-semibold  text-gray-800 text-center hover:text-[#0a4174] transition-colors duration-300 cursor-pointer">
            {product.name}
          </h3>
        </Link>

        <p className="text-gray-600 text-sm text-center">
          {product.description}
        </p>

        <div className="text-sm text-gray-500 space-y-1 whitespace-nowrap text-center">
          <p><span className="font-medium">Origin:</span> {product.origin}</p>
          <p><span className="font-medium">Packaging:</span> {product.packaging}</p>
        </div>

        <Link href={`/products/${product.slug}`}>
          <button 
            className="w-full px-8 py-4 text-white bg-[#0a4174] rounded-lg font-semibold hover:bg-white hover:text-[#0a4174] hover:border-gray-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Inquire Now
          </button>
        </Link>
      </div>
    </div>
  );
}
