import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

function Footer() {
  return (
    <div className="bg-[#152e44] text-white pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Company Info Section */}
          <div className="lg:w-1/3 flex flex-col items-start space-y-6">
            <div className="flex items-center gap-4">
              <img
                src="/logo.svg"
                alt="Prime Link Logo"
                className="h-20 w-auto"
              />
              <div>
                <p className="text-3xl font-bold uppercase tracking-wide">
                  Prime Link
                </p>
                <p className="text-sm tracking-widest text-gray-300">
                  MANPOWER & STAFFING
                </p>
              </div>
            </div>

            <div className="space-y-4 w-full">
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-colors">
                  <Phone size={20} className="text-blue-400" />
                </div>
                <div className="flex flex-col text-sm text-gray-300">
                  <a
                    href="tel:+919976667152"
                    className="hover:text-white transition-colors"
                  >
                    +91 9976667152
                  </a>
                  <a
                    href="tel:+916379743825"
                    className="hover:text-white transition-colors"
                  >
                    +91 6379743825
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-colors">
                  <Mail size={20} className="text-blue-400" />
                </div>
                <a
                  href="mailto:admin@primelinkmanpower.com"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  admin@primelinkmanpower.com
                </a>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="p-2 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-colors mt-1">
                  <MapPin size={20} className="text-blue-400" />
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Palayakaram, Ayakkaranpulam, <br />
                  Vedaranyam(TK), Nagapattinam(DT) <br />
                  Pin 614707
                </p>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 lg:pl-10">
            <div>
              <h3 className="font-bold text-lg mb-6 text-white border-b border-blue-500/30 pb-2 inline-block">
                Platform
              </h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <span className="h-1 w-1 bg-blue-400 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <span className="h-1 w-1 bg-blue-400 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                    Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <span className="h-1 w-1 bg-blue-400 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <span className="h-1 w-1 bg-blue-400 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6 text-white border-b border-blue-500/30 pb-2 inline-block">
                Services
              </h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <span className="h-1 w-1 bg-blue-400 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                    Manpower supply
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <span className="h-1 w-1 bg-blue-400 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                    Overseas requirement
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <span className="h-1 w-1 bg-blue-400 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                    Temporary & contract staffing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <span className="h-1 w-1 bg-blue-400 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                    Clients & candidate support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6 text-white border-b border-blue-500/30 pb-2 inline-block">
                Industries
              </h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <span className="h-1 w-1 bg-blue-400 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                    Construction & Engineering
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <span className="h-1 w-1 bg-blue-400 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                    Oil & gas industry
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <span className="h-1 w-1 bg-blue-400 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                    Healthcare and medical
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <span className="h-1 w-1 bg-blue-400 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                    Hospitality services
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-700/50 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500">
          <div className="text-center md:text-left">
            <p>&copy; 2025 Primelink Manpower Agencies. All rights reserved.</p>
            <div className="flex gap-3 justify-center md:justify-start mt-2">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 group"
            >
              <Facebook
                size={18}
                className="text-gray-400 group-hover:text-white"
              />
            </a>
            <a
              href="#"
              className="bg-gray-800 p-2 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 group"
            >
              <Linkedin
                size={18}
                className="text-gray-400 group-hover:text-white"
              />
            </a>
            <a
              href="#"
              className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 hover:text-white transition-all duration-300 group"
            >
              <Instagram
                size={18}
                className="text-gray-400 group-hover:text-white"
              />
            </a>
            <a
              href="#"
              className="bg-gray-800 p-2 rounded-full hover:bg-black hover:text-white transition-all duration-300 group"
            >
              <Twitter
                size={18}
                className="text-gray-400 group-hover:text-white"
              />
            </a>
            <a
              href="#"
              className="bg-gray-800 p-2 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 group"
            >
              <Youtube
                size={18}
                className="text-gray-400 group-hover:text-white"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
