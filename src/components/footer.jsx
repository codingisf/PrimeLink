import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";

function Footer() {
  return (
    <div className="bg-[#152e44] text-white pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Company Info Section */}
          <div className="lg:w-1/3 flex flex-col items-start space-y-6">
            <div className="flex items-center flex-col justify-center gap-4">
              <img
                src="/logo.svg"
                alt="Prime Link Logo"
                className="h-20 w-auto"
              />
              <div>
                <p className="text-3xl font-bold tracking-wide">PrimeLink</p>
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
                  Vedaranyam (TK), Nagapattinam (DT) <br />
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
                    href="/"
                    className="hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <span className="h-1 w-1 bg-blue-400 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <span className="h-1 w-1 bg-blue-400 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                    Service
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <span className="h-1 w-1 bg-blue-400 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/industries"
                    className="hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <span className="h-1 w-1 bg-blue-400 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                    Industries
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <span className="h-1 w-1 bg-blue-400 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                    Contact Us
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
                    href="/services#manpower-supply"
                    className="hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <span className="h-1 w-1 bg-blue-400 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                    Manpower Supply
                  </a>
                </li>
                <li>
                  <a
                    href="/services#overseas-requirement"
                    className="hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <span className="h-1 w-1 bg-blue-400 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                    Overseas Requirement
                  </a>
                </li>
                <li>
                  <a
                    href="/services#contract-staffing"
                    className="hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <span className="h-1 w-1 bg-blue-400 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                    Temporary & Contract Staffing
                  </a>
                </li>
                <li>
                  <a
                    href="/services#client-support"
                    className="hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <span className="h-1 w-1 bg-blue-400 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                    Clients & Candidate Support
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
                    href="/industries#construction"
                    className="hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <span className="h-1 w-1 bg-blue-400 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                    Construction & Engineering
                  </a>
                </li>
                <li>
                  <a
                    href="/industries#oil-gas"
                    className="hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <span className="h-1 w-1 bg-blue-400 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                    Oil & Gas Industry
                  </a>
                </li>
                <li>
                  <a
                    href="/industries#healthcare"
                    className="hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <span className="h-1 w-1 bg-blue-400 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                    Healthcare and Medical
                  </a>
                </li>
                <li>
                  <a
                    href="/industries#hospitality"
                    className="hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <span className="h-1 w-1 bg-blue-400 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                    Hospitality Services
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
              href="https://www.facebook.com/share/1DgrtcE4nm/"
              className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 group"
            >
              <Facebook
                size={18}
                className="text-gray-400 group-hover:text-white"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/primelink-manpower-and-staffing-92114039b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BV0RRFmXCTVSQg1L2bXlhIg%3D%3D"
              className="bg-gray-800 p-2 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 group"
            >
              <Linkedin
                size={18}
                className="text-gray-400 group-hover:text-white"
              />
            </a>
            <a
              href="https://www.instagram.com/primelinkmanpower/?utm_source=qr&igsh=N3I0czVtNHl4Z2Rs#"
              className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 hover:text-white transition-all duration-300 group"
            >
              <Instagram
                size={18}
                className="text-gray-400 group-hover:text-white"
              />
            </a>
            <a
              href="https://pin.it/8Zp6xszb4"
              className="bg-gray-800 p-2 rounded-full hover:bg-black hover:text-white transition-all duration-300 group"
            >
              
            </a>
            <a
              href="https://www.youtube.com/@PrimeLinkManpowerStaffing-c7r"
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
