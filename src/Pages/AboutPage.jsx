import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import SEO from "../components/SEO.jsx";
import Reveal from "../components/Reveal.jsx";
import StickyNavbar from "../components/StickyNavbar.jsx";
import Footer from "../components/footer.jsx";
import "../App.css";

function AboutPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <SEO
        title="About Us | Man-Power"
        description="Learn about our mission to connect businesses with trusted manpower. We stand for honesty, reliability, and quality in every placement."
        keywords="about man-power, staffing agency mission, company values, recruitment team"
      />

      {/* Section - 1  */}
      <section className="bg-[url('/Aboutus/1.Aboutus.jpg')]  bg-cover bg-center bg-no-repeat lg:h-screen w-full text-white h-fit py-5">
        <StickyNavbar />
        <div className="flex flex-col w-full items-center gap-y-3 justify-center lg:h-[80%] h-fit">
          <p className="bg-white text-black w-fit px-4 py-2 rounded-3xl my-5">
            About us
          </p>

          <div className="font-semibold lg:text-6xl text-3xl text-center">
            <Reveal>
              <p className="lg:leading-14">
                Connecting Businesses with <br />
                <span className="text-blue-500 w-1/3">
                  Trusted Manpower
                </span>{" "}
                <br />
                for Every Role
              </p>
            </Reveal>
          </div>

          <p className="text-center">
            We provide fast, flexible manpower for your businesses. Our skilled
            workers help <br />
            you stay productive and grow.
          </p>
        </div>
      </section>

      {/* Company logos */}
      <div className="lg:h-[20vh] w-full">
        <p></p>
      </div>

      {/* Section - 2  */}
      <section className="bg-blue-50 w-full min-h-screen lg:px-30 lg:py-20 px-10 py-5">
        <p className="bg-gray-200 w-fit px-4 py-2 rounded-4xl my-5">About us</p>
        <div className="">
          <div className="lg:text-4xl text-2xl font-semibold">
            <Reveal>
              <p className="lg:text-5xl">
                The story of our beginning where
                <br /> passion <span> </span>
                <span className="relative inline-block">
                  met opportunity
                  <img
                    src="/line.svg"
                    alt=""
                    loading="lazy"
                    className="absolute -bottom-2 lg:-bottom-4 left-0 w-full h-auto"
                  />
                </span>
              </p>
            </Reveal>
          </div>
          <div className="lg:w-1/2 mt-10">
            <p className="lg:text-lg text-md mb-5">
              we make hiring simple, fast, and efficient. Our team connects
              companies with solid, verified talent across multiple industries
              delivering the right people exactly when you need them.
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-x-10 mt-10 gap-y-10 ">
          {/* card-1 */}
          <Reveal>
            <div className="max-w-98 bg-white  px-6 border-2 border-gray-300 rounded-xl py-4">
              <div className="flex gap-4 items-center">
                <div className="logo rounded-full w-15 h-15 bg-[url('/Aboutus/2.Mission.jpg')] bg-cover bg-center bg-no-repeat"></div>
                <h1 className="text-3xl font-semibold">Mission</h1>
              </div>
              <p className="mt-4">
                We aim to deliver reliable, skilled manpower that helps
                businesses work smarter and grow faster. Our mission is to
                provide seamless staffing support.
              </p>
            </div>
          </Reveal>

          {/* card-2 */}
          <Reveal delay={0.2}>
            <div className="max-w-98 bg-white bg-cover px-6 border-2 border-gray-300 rounded-xl py-4">
              <div className="flex gap-4 items-center">
                <div className="logo rounded-full w-15 h-15  bg-[url('/Aboutus/2.values.jpg')] bg-cover bg-center bg-no-repeat"></div>
                <h1 className="text-3xl font-semibold">Vision</h1>
              </div>
              <p className="mt-4">
                To become the most trusted manpower partner for industries
                worldwide. We envision a future where hiring is simple,
                efficient, and accessible for all.
              </p>
            </div>
          </Reveal>

          {/* card-3 */}
          <Reveal delay={0.4}>
            <div className="max-w-98 bg-white px-6 border-2 border-gray-300 rounded-xl py-4">
              <div className="flex gap-4 items-center">
                <div className="logo rounded-full w-15 h-15 bg-[url('/Aboutus/2.Vision.jpg')] bg-cover bg-center bg-no-repeat"></div>
                <h1 className="text-3xl font-semibold">Values</h1>
              </div>
              <p className="mt-4">
                We stand for honesty, reliability and a commitment to quality in
                every placement. Our approach is built on trust, teamwork, and a
                strong focus on people.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Image or section-3 */}
      <section className="bg-blue-50 w-full min-h-screen lg:px-30 lg:py-20 px-5 py-10 text-white flex items-center">
        <div className="bg-[url('/Aboutus/3.whychooseus.jpg')] bg-cover bg-center bg-no-repeat lg:h-[60vh] h-auto w-full mx-auto flex lg:flex-row flex-col justify-between items-center lg:gap-0 gap-10 py-10 lg:py-0 rounded-2xl overflow-hidden">
          <div className="lg:w-1/2 px-5">
            <Reveal>
              <p className="bg-white text-black w-fit px-4 py-2 rounded-4xl my-5">
                Why choose us?
              </p>
              <h1 className="text-white lg:text-4xl text-2xl font-semibold mt-2">
                Quality staffing you <br />
                can trust every time
              </h1>
              <p className="mt-2">
                We deliver reliable, skilled talent support your <br />
                business without delays
              </p>
            </Reveal>
          </div>

          <div className="lg:h-fit lg:w-[45%] w-full bg-white rounded-lg p-6 text-black shadow-xl mx-3">
            <h3 className="text-2xl font-bold mb-6 text-blue-900">
              Have questions? We're here to help.
            </h3>
            <div className="space-y-4">
              {[
                {
                  id: 1,
                  question: "How do you verify candidates?",
                  answer:
                    "We conduct rigorous background checks, skill assessments, and interviews to ensure every candidate meets our high standards before they are placed.",
                },
                {
                  id: 2,
                  question: "What industries do you serve?",
                  answer:
                    "We specialize in construction, manufacturing, logistics, and IT sectors, providing tailored staffing solutions for each industry's unique needs.",
                },
                {
                  id: 3,
                  question: "How quickly can you provide staff?",
                  answer:
                    "Our extensive database allows us to provide qualified candidates often within 24-48 hours, depending on the specific requirements of the role.",
                },
              ].map((faq, index) => {
                return (
                  <div
                    key={faq.id}
                    className="border-b border-gray-100 last:border-0 pb-4 last:pb-0"
                  >
                    <button
                      className="w-full flex justify-between items-center py-2 text-left font-semibold text-gray-800 hover:text-blue-600 transition-colors focus:outline-none"
                      onClick={() =>
                        setOpenFaq(openFaq === index ? null : index)
                      }
                    >
                      <span className="text-lg">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-blue-500 transition-transform duration-300 ${
                          openFaq === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        openFaq === index
                          ? "grid-rows-[1fr] opacity-100 mt-2"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* section - 4 */}
      <section className="bg-blue-50 w-full min-h-screen lg:px-30 lg:py-20 px-10 py-5 relative ">
        <div className="lg:flex items-center">
          <div className=" lg:text-4xl text-2xl font-semibold lg:w-1/2 relative">
            <Reveal>
              <p className="lg:text-5xl">
                Achievements made <br /> possible with
                <span> </span>
                <span className="text-blue-800 relative inline-block">
                  PrimeLink
                  <img
                    src="/line.svg"
                    alt=""
                    loading="lazy"
                    className="absolute -bottom-2 lg:-bottom-4 left-0 w-full h-auto"
                  />
                </span>
              </p>
            </Reveal>
          </div>
          <div className="lg:w-1/2 mt-5">
            <Reveal delay={0.2}>
              <p className="lg:text-xl text-lg mb-5">
                we make hiring simple, fast, and efficient. Our team connects
                companies with solid, verified talent across multiple industries
                delivering the right people exactly when you need them.
              </p>
            </Reveal>
          </div>
        </div>
        <Reveal delay={0.2} width="100%">
          <div className="flex justify-center lg:mt-40 mt-10 flex-col mx-auto w-full items-center">
            <div className="bg-white rounded-xl w-[90%] h-fit mt-26 flex justify-around text-gray-700 py-1 px-2">
              <div className="lg:flex justify-around">
                <div className="lg:w-[30%]">
                  <p className="lg:text-6xl text-3xl font-bold mb-5">5+</p>
                  <p className="lg:text-lg mb-3">
                    Experienced manpower support
                  </p>
                </div>
                <div className="lg:w-[30%]">
                  <p className="lg:text-6xl text-3xl font-bold mb-5">200+</p>
                  <p className="lg:text-lg  mb-3">Trusted industry partner</p>
                </div>
              </div>

              <div className="lg:flex justify-around">
                <div className="lg:w-[30%]">
                  <p className="lg:text-6xl text-3xl font-bold mb-5">10k+</p>
                  <p className="lg:text-lg  mb-3">
                    People have landed a job abroad
                  </p>
                </div>
                <div className="lg:w-[30%]">
                  <p className="lg:text-6xl text-3xl font-bold mb-5">100%</p>
                  <p className="lg:text-lg  mb-3">
                    Getting into a job Assurance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Looking to hire the right */}
      <section className="w-full min-h-screen">
        <div className="h-[80vh] w-full bg-[url('/Aboutus/4.contactnow.jpg')]  bg-cover bg-center bg-no-repeat text-white flex flex-col justify-center items-center text-center gap-y-5">
          <p className="text-lg bg-white/10 backdrop-blur-xl rounded-full px-4 py-2">
            Looking to hire the right
          </p>
          <h1 className="lg:text-6xl">
            Trusted support for providing consistent , <br /> skilled manpower
            solutions.
          </h1>
          <Link to="/contact">
            <button className="px-6 py-3 border border-[#152e44] text-white hover:cursor-pointer bg-[#152e44] rounded-lg font-semibold transition-colors hover:bg-transparent">
              Contact Now!
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default AboutPage;
