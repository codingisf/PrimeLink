import SEO from "../components/SEO.jsx";
import Reveal from "../components/Reveal.jsx";
import StickyNavbar from "../components/StickyNavbar.jsx";
import Footer from "../components/footer.jsx";
import { Phone, Mail, MapPin } from "lucide-react";
import "../App.css";

function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Us | Prime Link"
        description="Get in touch with Prime Link Manpower for your staffing needs. We provide fast and reliable manpower support."
        keywords="contact manpower, hiring inquiries, staffing support, office location"
      />

      {/* Hero Section */}
      <section className="bg-[url('/Contactus/Contactus.jpg')] bg-cover bg-center lg:h-[80vh] h-[50vh] w-full text-white relative overlay-dark">
        <div className="absolute inset-0 bg-black/50"></div>
        <StickyNavbar />
        <div className="relative z-10 flex flex-col w-full items-center justify-center h-[80%] px-4">
          <p className="bg-white/10 backdrop-blur-md border border-white/20 text-white w-fit px-6 py-2 rounded-full mb-6 uppercase tracking-wider text-sm">
            Contact Us
          </p>

          <Reveal>
            <h1 className="text-4xl lg:text-6xl font-bold text-center mb-4 leading-tight">
              Speak with us today to hire <br />
              <span className="text-blue-400">skilled professionals.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-center text-gray-200 lg:text-lg max-w-2xl mt-4">
              We make hiring simple, fast, and efficient. Connecting companies
              with verified talent exactly when you need them.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats Section */}
      <div className="flex justify-around relative z-20 mb-20 w-full">
        <Reveal>
          <div className="bg-white rounded-xl w-[90%] h-fit flex flex-col md:flex-row justify-around text-gray-700 py-6 px-4">
            <div className="flex justify-around w-full md:w-1/2 mb-6 md:mb-0">
              <div className="w-[45%] text-center">
                <p className="text-3xl lg:text-5xl font-bold mb-3">5+</p>
                <p className="lg:text-lg text-gray-600">
                  Experienced manpower support
                </p>
              </div>
              <div className="w-[45%] text-center">
                <p className="text-3xl lg:text-5xl font-bold mb-3">200+</p>
                <p className="lg:text-lg text-gray-600">
                  Trusted industry partner
                </p>
              </div>
            </div>

            <div className="flex justify-around w-full md:w-1/2">
              <div className="w-[45%] text-center">
                <p className="text-3xl lg:text-5xl font-bold mb-3">10k+</p>
                <p className="lg:text-lg text-gray-600">
                  People has landed a job abroad
                </p>
              </div>
              <div className="w-[45%] text-center">
                <p className="text-3xl lg:text-5xl font-bold mb-3">100%</p>
                <p className="lg:text-lg text-gray-600">
                  Getting into a job Assurance
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Main Contact Section */}
      <section className="container mx-auto px-6 lg:px-20 pb-20">
        <div className="flex flex-col items-center text-center mb-16">
          <Reveal>
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">
              Get in touch
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
              Ready to grow your team?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
              Whether you have a hiring need or are looking for skilled
              manpower, we're here to provide fast, reliable support.
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 item-start">
          {/* Contact Form */}
          <div className="lg:w-3/5">
            <Reveal>
              <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Send us a Message
                </h3>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="email@example.com"
                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Service Interest
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Manpower Supply"
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      rows="4"
                      placeholder="Tell us about your requirements..."
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    ></textarea>
                  </div>
                  <button className="w-full py-4 bg-[#152e44] text-white font-bold rounded-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1 shadow-md">
                    Send Message
                  </button>
                </form>
              </div>
            </Reveal>
          </div>

          {/* Contact Info & Map */}
          <div className="lg:w-2/5 space-y-8">
            <Reveal delay={0.2}>
              <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-full text-blue-600 shadow-sm shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <div className="text-gray-600 mt-1 flex flex-col">
                        <a
                          href="tel:+919976667152"
                          className="hover:text-blue-600 transition-colors"
                        >
                          +91 9976667152
                        </a>
                        <a
                          href="tel:+916379743825"
                          className="hover:text-blue-600 transition-colors"
                        >
                          +91 6379743825
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-full text-blue-600 shadow-sm shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a
                        href="mailto:admin@primelinkmanpower.com"
                        className="text-gray-600 mt-1 block hover:text-blue-600 transition-colors break-words"
                      >
                        admin@primelinkmanpower.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-full text-blue-600 shadow-sm shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Office Address
                      </p>
                      <p className="text-gray-600 mt-1 leading-relaxed">
                        Palayakaram, Ayakkaranpulam,
                        <br />
                        Vedaranyam(TK), Nagapattinam(DT)
                        <br />
                        Pin 614707
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="w-full h-64 rounded-2xl overflow-hidden shadow-md border border-gray-200 mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3924.1684809759704!2d79.76202007503673!3d10.40818998971906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDI0JzI5LjUiTiA3OcKwNDUnNTIuNSJF!5e0!3m2!1sen!2sin!4v1766727731716!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ContactPage;
