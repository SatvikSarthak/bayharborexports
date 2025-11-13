"use client";

import Form from "/src/components/Form.jsx";

export default function Page() {
  const handleFormSubmit = (data) => {
    console.log("Form data received in parent:", data);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Us",
      details: "info@bayharborexports.com",
      subtext: "We'll respond within 24 hours",
      link: "mailto:info@bayharborexports.com"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Call Us",
      details: "+91 XXXX XXXXXX",
      subtext: "Mon-Sat, 9AM to 6PM IST",
      link: "tel:+91XXXXXXXXXX"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Visit Us",
      details: "Lucknow, Uttar Pradesh, India",
      subtext: "By appointment only",
      link: null
    }
  ];

  const whyContact = [
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      text: "Request product quotations"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      text: "Discuss custom requirements"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      text: "Order samples for quality check"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      text: "Get export documentation help"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      text: "Partnership opportunities"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      text: "Any other inquiries"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white py-20 px-6 overflow-hidden border-b border-gray-100">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-50 to-transparent opacity-50"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-1.5 bg-[#0a4174]/10 text-[#0a4174] rounded-full text-sm font-medium">
              Contact Us
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 leading-tight text-gray-900">
            Get in Touch
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a4174] to-blue-600">
              With Us
            </span>
          </h1>

          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
            We&apos;re here to answer your questions, discuss your shipments, and help you find the best solutions for your export needs. Reach out to us, and let&apos;s start building something great.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0a4174] to-transparent opacity-20"></div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Contact Info & Why Contact */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Information Cards */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="group bg-white border border-gray-200 rounded-xl p-5 hover:border-[#0a4174] hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#0a4174] to-blue-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        {info.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-gray-900 mb-1">{info.title}</h3>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-[#0a4174] font-medium hover:underline block truncate"
                          >
                            {info.details}
                          </a>
                        ) : (
                          <p className="text-gray-900 font-medium">{info.details}</p>
                        )}
                        <p className="text-sm text-gray-500 mt-1">{info.subtext}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Contact Us */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">How Can We Help?</h3>
              <ul className="space-y-3">
                {whyContact.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="text-[#0a4174] mt-0.5">
                      {item.icon}
                    </div>
                    <span className="text-sm text-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Response Badge */}
            <div className="bg-gradient-to-r from-[#0a4174] to-blue-600 rounded-2xl p-6 text-white text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2">Quick Response</h4>
              <p className="text-blue-100 text-sm">
                We typically respond to all inquiries within 24 hours during business days
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                <p className="text-gray-600">
                  Fill out the form below and we&apos;ll get back to you as soon as possible
                </p>
              </div>
              <Form onSubmitSuccess={handleFormSubmit} />
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className=" py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Monday - Friday</span>
                    <span className="text-[#0a4174] font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Saturday</span>
                    <span className="text-[#0a4174] font-semibold">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-700 font-medium">Sunday</span>
                    <span className="text-gray-500">Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#0a4174]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Time Zone
                </h4>
                <p className="text-gray-700">
                  All times are in <strong>Indian Standard Time (IST)</strong>
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  UTC +5:30
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
