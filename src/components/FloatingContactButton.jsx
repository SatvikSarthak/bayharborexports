"use client";
import { useState } from "react";

export default function FloatingContactButton() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you can add your API call to save the data
      console.log("Contact Form Data:", formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus("success");
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
        setSubmitStatus(null);
        setIsFormOpen(false);
      }, 2000);
      
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setSubmitStatus(null);
  };

  const whatsappNumber = "+918707759052"; 
  const whatsappMessage = "Hello! I'm interested in your export services."; 

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Floating Buttons Container */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-40">
        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="bg-[#25D366] text-white py-3 px-1 rounded-full shadow-lg hover:bg-[#20b358] transition-all duration-300 flex items-center justify-center hover:scale-105 group"
          title="Chat on WhatsApp"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-6 h-6"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.690z"/>
          </svg>
          <span className="absolute right-full mr-3 bg-gray-800 text-white px-1 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Chat on WhatsApp
          </span>
        </button>

        {/* Contact Us Button */}
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-[#0a4174] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#083356] transition-all duration-300 flex items-center space-x-2 hover:scale-105"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-5 h-5"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" 
            />
          </svg>
          <span className="font-medium text-sm">Contact Us</span>
        </button>
      </div>

      {/* Contact Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-800">
                Contact Us
              </h2>
              <button
                onClick={handleCloseForm}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit} className="p-6">
              {/* Name */}
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
                  Email *
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

              {/* Phone */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a4174] focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a4174] focus:border-transparent resize-none"
                  placeholder="Your message or inquiry..."
                />
              </div>

              {/* Submit Status */}
              {submitStatus === "success" && (
                <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={handleCloseForm}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-4 py-2 bg-[#0a4174] text-white rounded-md hover:bg-[#083356] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}