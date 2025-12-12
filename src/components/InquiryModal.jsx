"use client";
import { useState, useEffect } from "react";

export default function InquiryModal({ isOpen, onClose, productName, quantity }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: productName || "",
    quantity: quantity || "",
    message: "",
    countryCode: "+91",
  });

  const countryCodes = [
    { code: "+1", country: "US/CA", flag: "🇺🇸" },
    { code: "+44", country: "UK", flag: "🇬🇧" },
    { code: "+91", country: "India", flag: "🇮🇳" },
    { code: "+86", country: "China", flag: "🇨🇳" },
    { code: "+81", country: "Japan", flag: "🇯🇵" },
    { code: "+49", country: "Germany", flag: "🇩🇪" },
    { code: "+33", country: "France", flag: "🇫🇷" },
    { code: "+61", country: "Australia", flag: "🇦🇺" },
    { code: "+7", country: "Russia", flag: "🇷🇺" },
    { code: "+971", country: "UAE", flag: "🇦🇪" },
    { code: "+966", country: "Saudi", flag: "🇸🇦" },
    { code: "+65", country: "Singapore", flag: "🇸🇬" },
    { code: "+82", country: "S. Korea", flag: "🇰🇷" },
    { code: "+55", country: "Brazil", flag: "🇧🇷" },
    { code: "+52", country: "Mexico", flag: "🇲🇽" },
  ];

  // Update quantity when it changes from parent
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      quantity: quantity || ""
    }));
  }, [quantity]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCountryCodeChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      countryCode: e.target.value,
    }));
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^\d]/g, "");
    setFormData((prevState) => ({
      ...prevState,
      phone: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (!formData.name || !formData.email || !formData.phone) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Prepare data for FormSubmit
      const fullPhone = `${formData.countryCode} ${formData.phone}`;
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: fullPhone,
        product: formData.product,
        quantity: formData.quantity ? `${formData.quantity} kg` : "Not specified",
        message: formData.message || "No additional message",
        _captcha: "false",
        _next: "https://bayharborexports.com/thank-you",
      };

      const response = await fetch(
        "https://formsubmit.co/ajax/Info@bayharborexports.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) throw new Error("Network response was not ok");
      
      setSubmitStatus("success");
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          product: productName || "",
          quantity: quantity || "",
          message: "",
          countryCode: "+91",
        });
        setSubmitStatus(null);
        onClose();
      }, 2000);
      
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
  
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-semibold text-gray-800">
            Product Inquiry
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
          >
            ×
          </button>
        </div>

       
        <form onSubmit={handleSubmit} className="p-6">
         
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product of Interest
            </label>
            <input
              type="text"
              name="product"
              value={formData.product}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
              readOnly
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quantity (Optional)
            </label>
            <input
              type="text"
              name="quantity"
              value={formData.quantity ? `${formData.quantity} kg` : ""}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
              placeholder="No quantity selected"
            />
          </div>

   
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a4174] focus:border-transparent"
              placeholder="Enter your full name"
            />
          </div>

   
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a4174] focus:border-transparent"
              placeholder="Enter your email address"
            />
          </div>

      
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <div className="flex gap-2">
              <select
                value={formData.countryCode}
                onChange={handleCountryCodeChange}
                className="px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0a4174] focus:border-transparent transition-all cursor-pointer"
              >
                {countryCodes.map((item) => (
                  <option key={item.code} value={item.code}>
                    {item.flag} {item.code}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handlePhoneChange}
                required
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a4174] focus:border-transparent"
                placeholder="Enter phone number"
              />
            </div>
          </div>

          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Message (Optional)
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a4174] focus:border-transparent resize-none"
              placeholder="Any specific requirements or questions..."
            />
          </div>

          {submitStatus === "success" && (
            <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md">
              Thank you! Your inquiry has been submitted successfully.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
              Please fill in all required fields and try again.
            </div>
          )}

       
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-4 py-2 bg-[#0a4174] text-white rounded-md hover:bg-[#083356] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Inquiry"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}