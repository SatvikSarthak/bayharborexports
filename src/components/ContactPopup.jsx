"use client";

import { useState, useEffect } from "react";
import { X, Send } from "lucide-react";

export default function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
    countryCode: "+91",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

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

  useEffect(() => {
    // Show popup after 2 seconds when page loads
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
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
    // Clear phone error when user starts typing
    if (errors.phone) {
      setErrors({
        ...errors,
        phone: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation (optional field, but if provided must be valid)
    if (formData.phone && formData.phone.length < 6) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Country validation (optional)
    if (formData.country && formData.country.trim().length < 2) {
      newErrors.country = "Please enter a valid country name";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Validate form
    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      // Prepare data for FormSubmit
      const fullPhone = formData.phone ? `${formData.countryCode} ${formData.phone}` : "";
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: fullPhone,
        country: formData.country,
        message: formData.message,
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
      setFormData({
        name: "",
        email: "",
        phone: "",
        country: "",
        message: "",
        countryCode: "+91",
      });
      setErrors({});

      setTimeout(() => {
        setIsOpen(false);
        setSubmitStatus(null);
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 xs2:p-6">
     
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={handleClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-xl xs2:rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 xs2:top-4 right-3 xs2:right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5 xs2:w-6 xs2:h-6" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-br from-[#0a4174] to-blue-600 text-white p-6 xs2:p-8 rounded-t-xl xs2:rounded-t-2xl">
          <h2 className="text-xl xs2:text-2xl font-bold mb-2">Get in Touch</h2>
          <p className="text-sm xs2:text-base text-blue-100">
            Fill out the form below and we'll get back to you shortly
          </p>
        </div>

        
        <form onSubmit={handleSubmit} className="p-6 xs2:p-8 space-y-4 xs2:space-y-5">
          {/* Name Field (Required) */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-3 xs2:px-4 py-2 xs2:py-2.5 border rounded-lg focus:ring-2 focus:ring-[#0a4174] focus:border-transparent outline-none transition-all text-sm xs2:text-base ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Your full name"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-600">{errors.name}</p>
            )}
          </div>

          {/* Email Field (Required) */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 xs2:px-4 py-2 xs2:py-2.5 border rounded-lg focus:ring-2 focus:ring-[#0a4174] focus:border-transparent outline-none transition-all text-sm xs2:text-base ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Phone Field (Optional) */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
              Phone
            </label>
            <div className="flex gap-2">
              <select
                value={formData.countryCode}
                onChange={handleCountryCodeChange}
                className="px-2 xs2:px-3 py-2 xs2:py-2.5 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0a4174] focus:border-transparent transition-all cursor-pointer text-sm xs2:text-base"
              >
                {countryCodes.map((item) => (
                  <option key={item.code} value={item.code}>
                    {item.flag} {item.code}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handlePhoneChange}
                className={`flex-1 px-3 xs2:px-4 py-2 xs2:py-2.5 border rounded-lg focus:ring-2 focus:ring-[#0a4174] focus:border-transparent outline-none transition-all text-sm xs2:text-base ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter phone number"
              />
            </div>
            {errors.phone && (
              <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
            )}
          </div>

          {/* Country Field (Optional) */}
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1.5">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className={`w-full px-3 xs2:px-4 py-2 xs2:py-2.5 border rounded-lg focus:ring-2 focus:ring-[#0a4174] focus:border-transparent outline-none transition-all text-sm xs2:text-base ${
                errors.country ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Your country"
            />
            {errors.country && (
              <p className="mt-1 text-xs text-red-600">{errors.country}</p>
            )}
          </div>

          {/* Message Field (Optional) */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              className="w-full px-3 xs2:px-4 py-2 xs2:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0a4174] focus:border-transparent outline-none transition-all resize-none text-sm xs2:text-base"
              placeholder="Tell us about your inquiry..."
            ></textarea>
          </div>

          {/* Submit Status */}
          {submitStatus === "success" && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
              Thank you! We'll be in touch soon.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {Object.keys(errors).length > 0
                ? "Please fix the errors above and try again."
                : "Something went wrong. Please try again."}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#0a4174] to-blue-600 text-white font-semibold py-2.5 xs2:py-3 px-6 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm xs2:text-base"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 xs2:w-5 xs2:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 xs2:w-5 xs2:h-5" />
                Send Message
              </>
            )}
          </button>

          {/* Privacy Note */}
          <p className="text-xs text-gray-500 text-center mt-3">
            We respect your privacy. Your information will never be shared.
          </p>
        </form>
      </div>
    </div>
  );
}
