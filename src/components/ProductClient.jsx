"use client";
import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Product from "@/components/product";
import { productsData } from "@/data/productsData";

export default function Products() {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get('category');
  
  const categories = useMemo(() => ["All", ...new Set(productsData.map((p) => p.category))], []);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isOpen, setIsOpen] = useState(false); 
  
  
  useEffect(() => {
    if (categoryFromUrl && categories.includes(categoryFromUrl)) {
      setSelectedCategory(categoryFromUrl);
    } else if (!categoryFromUrl) {
      
      setSelectedCategory("All");
    }
  }, [categoryFromUrl, categories]);

  const filteredProducts =
    selectedCategory === "All"
      ? productsData
      : productsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen p-[32px]">
     
      <div className="flex justify-center items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
           Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a4174] to-blue-600">
          Products
            </span>
          </h2>
      </div>
      <div className="flex flex-col lg:flex-row pt-20 md:space-x-8 lg3:space-x-3 space-y-6 md:space-y-0">
         <div className="w-full lg:w-[15%] lg:pr-3 md:border-r border-gray-200">
 
        <div
          className="flex items-center justify-between mb-4 cursor-pointer select-none md:cursor-default"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h2 className="text-2xl font-semibold">Categories</h2>
          
          <div className="lg:hidden">
            {isOpen ? (
              <span className="text-xl"><svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12L18 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg></span>
            ) : (
              <span className="text-xl"><svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M12 6V18" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg></span>
            )}
          </div>
        </div>

    
        <ul className={`space-y-2 transition-all duration-300 ${isOpen ? 'block' : 'hidden'} lg:block`}>
          {categories.map((cat) => (
            <li
              key={cat}
              className={`cursor-pointer p-2 rounded-md ${
                selectedCategory === cat
                  ? "bg-[#0a4174] text-white"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>


      <div className="w-full lg:w-3/4 md:pl-0 sm:pl-3 xxxs:pl-0 grid grid-cols-1 sm2:pl-6 xxs:pl-10 sm:grid-cols-2 lg2:grid-cols-3  gap-8">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      </div>
      
    </div>
  );
}
