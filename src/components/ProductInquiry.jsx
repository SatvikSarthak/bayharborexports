"use client";
import { useState } from "react";
import InquiryModal from "./InquiryModal";

export default function ProductInquiry({ product, quantity }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full bg-[#0a4174] text-white px-6 py-4 rounded-lg hover:bg-[#083356] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
      >
        Inquire Now
      </button>

      <InquiryModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        productName={product.name}
        quantity={quantity}
      />
    </>
  );
}