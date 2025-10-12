"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "/public/example.jpg";
import InquiryModal from "./InquiryModal";

export default function Product({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Return early if product is undefined
  if (!product) {
    return null;
  }

  const handleInquiryClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg max-w-[300px]  min-h-[150px]  border-gray-200  border-[2px]  hover:shadow-xl transition-shadow duration-300">
      
      <div className="mb-3 flex justify-center">
        <Image
          className="w-full h-48 object-cover rounded-md"
          src={product.image || logo}
          alt={product.name || "Product"}
          width={300}
          height={200}
        />
      </div>
      <div className="flex flex-col space-y-3 p-4">
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-xl font-semibold text-gray-800 text-center hover:text-[#0a4174] transition-colors duration-300 cursor-pointer">
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

        <button 
          onClick={handleInquiryClick}
          className="w-full bg-[#0a4174] text-white py-3 px-4 rounded-md hover:bg-[#083356] transition-colors duration-300 font-medium mt-4"
        >
          Inquire Now
        </button>
      </div>

      {/* Inquiry Modal */}
      <InquiryModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        productName={product.name}
      />
    </div>
  );
}
