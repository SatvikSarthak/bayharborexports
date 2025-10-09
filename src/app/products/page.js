"use client";
import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Product from "../../components/product";
import { productsData } from "../../data/productsData";

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
    <div className="flex flex-col min-h-screen p-[40px]">
     
      <div>
         <h1 className="text-4xl font-bold mb-6 text-center">Our Products</h1>
      </div>
      <div className="flex flex-row pt-20 space-x-8">
         <div className="w-1/4 pr-6 border-r border-gray-200">
 
        <div
          className="flex items-center justify-between mb-4 cursor-pointer select-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h2 className="text-2xl font-semibold">Categories</h2>
          
          <div>
            {isOpen ? (
              <span className="text-xl"><svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12L18 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg></span> // replace with minus SVG
            ) : (
              <span className="text-xl"><svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M12 6V18" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg></span> // replace with plus SVG
            )}
          </div>
        </div>

    
        {isOpen && (
          <ul className="space-y-2 transition-all duration-300">
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
        )}
      </div>


      <div className="w-3/4 pl-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      </div>
      
    </div>
  );
}
