"use client";
import { useState } from "react";

export default function Form({ onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    countryCode: "+91",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);


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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
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

  const saveToFile = (data) => {
    const timestamp = new Date().toISOString();
    const fullPhone = `${data.countryCode} ${data.phone}`;
    const formattedData = `
========================================
Submission Date: ${timestamp}
========================================
Name: ${data.name}
Email: ${data.email}
Company: ${data.company || "N/A"}
Phone: ${fullPhone}
Message: ${data.message || "N/A"}
========================================

`;

    const blob = new Blob([formattedData], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "formData.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
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
      saveToFile(formData);

      setSubmitStatus("success");

      if (onSubmitSuccess) {
        onSubmitSuccess({
          ...formData,
          fullPhone: `${formData.countryCode} ${formData.phone}`,
        });
      }

      // Reset the form on success
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        countryCode: "+91",
      });

      console.log("Form submitted successfully");
    } catch (error) {
      console.error("Error saving form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 rounded-2xl sm:p-1 xxxs:p-3 sm:w-full max-w-xl shadow-lg">
      <h2 className="sm:text-3xl xxxs:text-xl font-bold text-gray-800 pb-8 text-center">
        Let&#39;s Talk About Your Project
      </h2>

      <div className="space-y-6">
  
        <div>
          <label className="block text-sm font-semibold text-gray-700 pb-2">
            Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
            className="w-full px-4 xxxs:placeholder:text-sm sm:placeholder:text-base  py-3 border border-gray-200 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
        </div>


        <div>
          <label className="block text-sm font-semibold text-gray-700 pb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="We'll get back to you here"
            required
            className="w-full px-4 py-3 border xxxs:placeholder:text-sm sm:placeholder:text-base border-gray-200 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
        </div>


        <div>
          <label className="block text-sm font-semibold text-gray-700 pb-2">
            Company Name
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Let us know who you represent"
            className="w-full px-4 py-3 border border-gray-200  xxxs:placeholder:text-sm sm:placeholder:text-base rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
        </div>

  
        <div>
          <label className="block text-sm font-semibold text-gray-700 pb-2">
            Phone Number *
          </label>
          <div className="flex gap-2">
            <select
              value={formData.countryCode}
              onChange={handleCountryCodeChange}
              className="px-3 py-3  border xxxs:px-1 xxxs:py-1 xxxs:placeholder:text-sm sm:placeholder:text-base border-gray-200 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 cursor-pointer"
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
              placeholder="Enter phone number"
              required
              className="flex-1 xxxs:w-[100px] md:w-[70px] sm:w-auto xxxs:placeholder:text-sm sm:placeholder:text-base  px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 pb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message (optional)"
            rows={4}
            className="w-full px-4 py-3 border xxxs:placeholder:text-sm sm:placeholder:text-base border-gray-200 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          ></textarea>
        </div>
        <div className="pt-4">
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Sending...</span>
              </div>
            ) : (
              "Send Message"
            )}
          </button>
        </div>

       
        {submitStatus === "success" && (
          <div className="pt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">
                Message sent successfully! We&#39;ll get back to you soon.
              </span>
            </div>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="pt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">
                Please fill in all required fields and try again.
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
