"use client"
import { use, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { productsData } from "@/data/productsData";
import ProductInquiry from "@/components/ProductInquiry";

export default function Page({ params }) {
  const { slug } = use(params);
  const product = productsData.find((p) => p.slug === slug)
  const [selectedQuantity, setSelectedQuantity] = useState("5");
  const [customQuantity, setCustomQuantity] = useState("");
  const [isCustom, setIsCustom] = useState(false);

  // Determine if product is weight-based (Spices, Grains, Pulses) or unit-based (Fasteners)
  const isWeightBased = ["Spices", "Grains", "Pulses", "Spice Blends"].includes(product?.category);
  const quantityUnit = isWeightBased ? "kg" : "units";
  const quantityOptions = isWeightBased 
    ? ["5", "10", "20", "50", "100"] 
    : ["100", "500", "1000", "5000", "10000"];

  // Category-specific feature badges
  const getFeatureBadges = () => {
    if (isWeightBased) {
      return [
        { 
          icon: (
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.53 0-6.43-2.61-6.92-6H6v-2h-.92c.28-2.09 1.46-3.94 3.24-5.17L9 8.41 10.41 7l-.68-.68C10.94 6.11 11.46 6 12 6s1.06.11 1.68.32L13 7l1.41 1.41.68-1.58c1.78 1.23 2.96 3.08 3.24 5.17H18v2h.92c-.49 3.39-3.39 6-6.92 6z"/>
            </svg>
          ), 
          label: "100% Natural", 
          gradient: "from-green-50 to-emerald-50",
          color: "text-green-600"
        },
        { 
          icon: (
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
          ), 
          label: "Premium Grade", 
          gradient: "from-yellow-50 to-amber-50",
          color: "text-yellow-600"
        },
        { 
          icon: (
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm1.5-9H17V12h4.46L19.5 9.5zM6 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM20 8l3 4v5h-2c0 1.66-1.34 3-3 3s-3-1.34-3-3H9c0 1.66-1.34 3-3 3s-3-1.34-3-3H1V6c0-1.11.89-2 2-2h14v4h3zM3 6v9h.76c.55-.61 1.35-1 2.24-1s1.69.39 2.24 1H15V6H3z"/>
            </svg>
          ), 
          label: "Fast Shipping", 
          gradient: "from-blue-50 to-cyan-50",
          color: "text-blue-600"
        },
        { 
          icon: (
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
            </svg>
          ), 
          label: "Bulk Pricing", 
          gradient: "from-purple-50 to-pink-50",
          color: "text-purple-600"
        }
      ];
    } else {
      // For Fasteners and industrial products
      return [
        { 
          icon: (
            <Image src="/certified.png" alt="ISO Certified" width={30} height={30} />
          ), 
          label: "ISO Certified", 
          gradient: "from-blue-50 to-indigo-50",
          color: "text-blue-600"
        },
        { 
          icon: (
             <svg width="30px" height="30px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2501 3C21.4925 3 21.7176 3.11688 21.8574 3.30983L21.9119 3.39706L25.9186 10.9098L25.9615 11.0122L25.9731 11.05L25.9901 11.1273L25.9994 11.2153L25.9973 11.3147L26.0001 11.25C26.0001 11.3551 25.9785 11.4552 25.9394 11.5461L25.9106 11.6057L25.87 11.6723L25.8173 11.7408L14.6 24.7047C14.4999 24.8391 14.3628 24.9277 14.2139 24.9703L14.1559 24.9844L14.0585 24.9979L13.9999 25L13.8993 24.9932L13.8142 24.9771L13.7109 24.9432L13.6852 24.931C13.5949 24.8911 13.5119 24.8316 13.4425 24.7535L2.17081 11.7263L2.1087 11.6387L2.06079 11.5456L2.02611 11.4463L2.00297 11.3152L2.00269 11.1878L2.01755 11.0891L2.02714 11.0499L2.06104 10.9538L2.08838 10.8971L6.08838 3.39706C6.20243 3.18321 6.41149 3.0396 6.64753 3.00704L6.75014 3H21.2501ZM17.9061 12H10.0911L14.0011 22.16L17.9061 12ZM8.48514 12H4.38914L11.7621 20.518L8.48514 12ZM23.6081 12H19.5151L16.2421 20.511L23.6081 12ZM10.0241 4.499H7.19914L3.99814 10.5H8.42314L10.0241 4.499ZM16.4231 4.499H11.5761L9.97514 10.5H18.0231L16.4231 4.499ZM20.8001 4.499H17.9751L19.5761 10.5H23.9991L20.8001 4.499Z" fill="#0a4174"></path> </g></svg>
          
          ), 
          label: "Premium Quality", 
          gradient: "from-purple-50 to-violet-50",
          color: "text-purple-600"
        },
        { 
          icon: (
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
          ), 
          label: "Global Delivery", 
          gradient: "from-green-50 to-teal-50",
          color: "text-green-600"
        },
        { 
          icon: (
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-1-2-2-2zm-5 12H9v-2h6v2zm5-7H4V4h16v3z"/>
            </svg>
          ), 
          label: "Volume Discounts", 
          gradient: "from-orange-50 to-amber-50",
          color: "text-orange-600"
        }
      ];
    }
  };

  const featureBadges = getFeatureBadges();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Product not found</h1>
          <Link href="/products" className="text-[#0a4174] hover:underline">
            ← Back to Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
     
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex text-sm text-gray-600">
            <Link href="/" className="hover:text-[#0a4174]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-[#0a4174]">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          
          <div className="space-y-4">
           
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden group">
              <div className="aspect-square relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-[#0a4174] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Premium Quality
                </div>
              </div>
            </div>

          
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 shadow-md">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl mb-1">✓</div>
                  <div className="text-xs font-medium text-gray-700">Quality Certified</div>
                </div>
                <div>
                  <div className="text-2xl mb-1">🌍</div>
                  <div className="text-xs font-medium text-gray-700">Global Export</div>
                </div>
                <div>
                  <div className="text-2xl mb-1">📦</div>
                  <div className="text-xs font-medium text-gray-700">Bulk Orders</div>
                </div>
              </div>
            </div>
          </div>

          
          <div className="space-y-6">
          
            <div>
              <div className="inline-block bg-blue-100 text-[#0a4174] px-3 py-1 rounded-full text-sm font-semibold mb-3">
                {product.category}
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                {product.name}
              </h1>
              <p className="text-gray-600 mt-2 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {product.origin}
              </p>
            </div>

          
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Product Description</h2>
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            
            {/* Specifications */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Specifications</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Origin</span>
                  <span className="text-gray-900 font-semibold">{product.origin}</span>
                </div>
                
                {/* Quantity Selector in Specifications */}
                <div className="py-2 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-600 font-medium">Select Quantity ({quantityUnit})</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {quantityOptions.map((qty) => (
                      <button
                        key={qty}
                        onClick={() => {
                          setIsCustom(false);
                          setSelectedQuantity(qty);
                          setCustomQuantity("");
                        }}
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                          !isCustom && selectedQuantity === qty
                            ? "bg-[#0a4174] text-white shadow-md"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {qty} {quantityUnit}
                      </button>
                    ))}
                    <button
                      onClick={() => setIsCustom(true)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        isCustom
                          ? "bg-[#0a4174] text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      Custom
                    </button>
                  </div>
                  
                  {isCustom && (
                    <div className="mt-3 animate-fadeIn">
                      <input
                        type="number"
                        min="1"
                        value={customQuantity}
                        onChange={(e) => setCustomQuantity(e.target.value)}
                        placeholder={`Enter quantity in ${quantityUnit}`}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a4174] focus:border-transparent"
                      />
                    </div>
                  )}
                  
                  <div className="mt-3 bg-blue-50 border border-blue-200 rounded-lg p-2 text-sm text-blue-800">
                    <strong>Selected:</strong> {isCustom ? (customQuantity || "Not specified") : selectedQuantity} {quantityUnit}
                  </div>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Category</span>
                  <span className="text-gray-900 font-semibold">{product.category}</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-600 font-medium">MOQ</span>
                  <span className="text-gray-900 font-semibold">Contact for details</span>
                </div>
              </div>
            </div>            
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {featureBadges.map((badge, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${badge.gradient} rounded-lg p-4 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                >
                  <div className={`flex justify-center mb-2 ${badge.color}`}>
                    {badge.icon}
                  </div>
                  <div className="text-sm font-semibold text-gray-800">{badge.label}</div>
                </div>
              ))}
            </div>            {/* CTA Buttons */}
            <div className="space-y-3 pt-4">
              <ProductInquiry 
                product={product} 
                quantity={isCustom ? customQuantity : selectedQuantity}
              />
              
              <div className="grid grid-cols-2 gap-3">
                <Link 
                  href="/contact-us"
                  className="text-center border-2 border-[#0a4174] text-[#0a4174] px-6 py-3 rounded-lg hover:bg-[#0a4174] hover:text-white transition-all duration-300 font-semibold"
                >
                  Contact Sales
                </Link>
                <a 
                  href={`https://wa.me/918707759052?text=Hi! I'm interested in ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center bg-[#25D366] text-white px-6 py-3 rounded-lg hover:bg-[#20b358] transition-all duration-300 font-semibold flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.690z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>

           
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
              <p className="text-amber-800">
                <strong>💡 Note:</strong> Prices vary based on order quantity and shipping destination. 
                Contact us for a detailed quote and sample availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}