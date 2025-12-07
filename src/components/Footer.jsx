//import logo from "/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 xs2:px-6 py-6 xs2:py-8 md:py-10">
        <div className="grid grid-cols-1 sm2:grid-cols-2 lg2:grid-cols-4 gap-6 xs2:gap-8">
          
          {/* Company Info */}
          <div className="space-y-3 xs2:space-y-4">
            <div className="w-36  xs2:w-40  h-[40px] relative">
              <Link href="/">
                <Image 
                  src="/logo.png"
                  alt="BayHarbor Exports Logo" 
                  className="object-contain h-full w-full"
                  fill
                />
              </Link>
            </div>
            <p className="text-sm xs2:text-sm text-gray-600 leading-relaxed">
              Your trusted partner in global export solutions, delivering quality products worldwide.
            </p>
            
            {/* Social Media Links */}
            <div className="flex items-center gap-2 xs2:gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 xs2:w-9 xs2:h-9 bg-gray-100 hover:bg-gradient-to-r hover:from-[#0a4174] hover:to-blue-600 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 50 50"
                  fill="currentColor"
                >
                  <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 xs2:w-9 xs2:h-9 bg-gray-100 hover:bg-gradient-to-r hover:from-[#0a4174] hover:to-blue-600 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 50 50"
                  fill="currentColor"
                >
                  <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 xs2:w-9 xs2:h-9 bg-gray-100 hover:bg-gradient-to-r hover:from-[#0a4174] hover:to-blue-600 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 50 50"
                  fill="currentColor"
                >
                  <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 xs2:space-y-4">
            <h3 className="text-base xs2:text-base font-bold text-gray-900">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-sm xs2:text-sm text-gray-600 hover:text-[#0a4174] hover:translate-x-1 transition-all duration-200 flex items-center gap-2"
              >
                <span className="w-1 h-1 bg-[#0a4174] rounded-full"></span>
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm xs2:text-sm text-gray-600 hover:text-[#0a4174] hover:translate-x-1 transition-all duration-200 flex items-center gap-2"
              >
                <span className="w-1 h-1 bg-[#0a4174] rounded-full"></span>
                About Us
              </Link>
              <Link
                href="/products"
                className="text-sm xs2:text-sm text-gray-600 hover:text-[#0a4174] hover:translate-x-1 transition-all duration-200 flex items-center gap-2"
              >
                <span className="w-1 h-1 bg-[#0a4174] rounded-full"></span>
                Products
              </Link>
              <Link
                href="/services"
                className="text-sm xs2:text-sm text-gray-600 hover:text-[#0a4174] hover:translate-x-1 transition-all duration-200 flex items-center gap-2"
              >
                <span className="w-1 h-1 bg-[#0a4174] rounded-full"></span>
                Services
              </Link>
              <Link
                href="/blog"
                className="text-sm xs2:text-sm text-gray-600 hover:text-[#0a4174] hover:translate-x-1 transition-all duration-200 flex items-center gap-2"
              >
                <span className="w-1 h-1 bg-[#0a4174] rounded-full"></span>
                Blog
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 xs2:space-y-4">
            <h3 className="text-base xs2:text-base font-bold text-gray-900">
              Contact Us
            </h3>
            <div className="flex flex-col space-y-2 xs2:space-y-2.5">
              <a
                href="mailto:bayharborexports@gmail.com"
                className="flex items-start gap-2 text-sm xs2:text-sm text-gray-600 hover:text-[#0a4174] transition-colors group"
              >
                <Mail className="w-3.5 h-3.5 xs2:w-4 xs2:h-4 mt-0.5 text-[#0a4174] group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="break-all">info@bayharborexports.com</span>
              </a>
              <a
                href="tel:8800826659"
                className="flex items-center gap-2 text-sm xs2:text-sm text-gray-600 hover:text-[#0a4174] transition-colors group"
              >
                <Phone className="w-3.5 h-3.5 xs2:w-4 xs2:h-4 text-[#0a4174] group-hover:scale-110 transition-transform flex-shrink-0" />
                <span>+91 8800826659</span>
              </a>
              <div className="flex items-start gap-2 text-sm xs2:text-sm text-gray-600">
                <MapPin className="w-3.5 h-3.5 xs2:w-4 xs2:h-4 mt-0.5 text-[#0a4174] flex-shrink-0" />
                <span>Lucknow, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-3 xs2:space-y-4">
            <h3 className="text-base xs2:text-base font-bold text-gray-900">
              Get in Touch
            </h3>
            <p className="text-sm xs2:text-sm text-gray-600 leading-relaxed">
              Ready to start your export journey? Contact us today.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0a4174] to-blue-600 text-white font-semibold px-4 xs2:px-5 py-2 xs2:py-2.5 rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5 transition-all duration-300 text-xs xs2:text-sm"
            >
              <Send className="w-3.5 h-3.5 xs2:w-4 xs2:h-4" />
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 xs2:px-6 py-4">
          <div className="flex flex-col xs3:flex-row items-center justify-between gap-2 xs2:gap-3">
            <p className="text-xs text-gray-500 text-center xs3:text-left">
              © {currentYear} BayHarbor Exports. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
              <Link
                href="/privacy-policy"
                className="text-gray-500 hover:text-[#0a4174] transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                href="/terms-of-service"
                className="text-gray-500 hover:text-[#0a4174] transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
