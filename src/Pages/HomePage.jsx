import React, { useRef } from "react";
import StickyNavbar from "../components/StickyNavbar.jsx";
import Footer from "../components/footer.jsx";
import { ArrowLeft, ArrowRight } from "lucide-react";

function HomePage() {
  const testimonials = [
    // Add more items as needed
    {
      name: "Alice",
      role: "Frontend Developer",
      testimonial: "Great service!",
    },
    {
      name: "Bob",
      role: "Backend Developer",
      testimonial: "Amazing experience!",
    },
    { name: "Charlie", role: "Designer", testimonial: "Loved the quality!" },
    {
      name: "David",
      role: "Product Manager",
      testimonial: "Fantastic results!",
    },
    { name: "Eva", role: "DevOps Engineer", testimonial: "Highly efficient!" },
    { name: "Frank", role: "Tester", testimonial: "Reliable and fast!" },
    { name: "Grace", role: "CEO", testimonial: "Top-notch delivery!" },
  ];

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="">
      {/* Home Section */}
      <section className="bg-[url('/Homepage/1_Home_content.jpg')]  bg-cover bg-center bg-no-repeat lg:h-[80vh] py-3 w-full text-white">
        {/* NavBar */}
        <StickyNavbar />
        <div className="flex flex-col justify-center h-full px-6 lg:px-20 w-full lg:w-[60vw] text-white space-y-6 mt-10 lg:mt-0">
          <p className="text-lg">An International Manpower Agency</p>
          <div className="relative">
            <h1 className="text-3xl md:text-5xl  leading-snug">
              Reliable <span className="font-bold">Manpower & Staffing </span>{" "}
              <br />
              solutions for <span className="font-bold">Every Industry</span>
            </h1>
            <img
              src="/line.svg"
              alt=""
              className="lg:block absolute hidden w-80  lg:right-[22%] right-[10%]"
            />
          </div>

          <p className=" text-base md:text-lg">
            We provide end-to-end manpower and staffing services designed to
            help businesses stay agile, efficient, and future-ready. From
            workforce supply to overseas recruitment and contract staffing, our
            solutions are tailored to your needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button className="px-6 py-3 border border-[#152e44] text-white hover:cursor-pointer hover:text-black bg-[#152e44] rounded-lg font-semibold transition-colors hover:bg-transparent">
              Get Started!
            </button>
            <button className="px-6 py-3 border border-white bg-white text-black rounded-lg font-semibold transition-colors hover:bg-transparent hover:text-white">
              Hire Talent
            </button>
          </div>
        </div>
      </section>

      {/* Company logos */}
      <div className="lg:h-[20vh] w-full">
        <p></p>
      </div>

      {/* About section */}
      <section className="w-full min-h-screen lg:px-30 lg:py-20 px-10 py-5">
        <p className="bg-gray-200 w-fit px-4 py-2 rounded-4xl my-5">About us</p>
        <div className="lg:flex">
          <div className=" lg:text-4xl text-2xl font-semibold lg:w-1/2 relative">
            <p className="lg:text-5xl">
              Refining How <br /> Bussiness{" "}
              <span className="text-blue-800">Find Talent !</span>
            </p>
            <img
              src="/line.svg"
              alt=""
              className="absolute lg:w-76 w-35 lg:right-[22%] right-[30%]"
            />
          </div>
          <div className="lg:w-1/2 mt-5">
            <p className="lg:text-lg text-md mb-5">
              we make hiring simple ,fast , and efficient. Our team connects
              companies with solid, verified across multiple industries
              delivering the right people exactly when you need them.
            </p>
            <button className="px-6 py-3 border border-[#152e44] text-white hover:text-black hover:cursor-pointer bg-[#152e44] rounded-lg font-semibold transition-colors hover:bg-transparent">
              Learn More
            </button>
          </div>
        </div>

        <div className="bg-[url('/Homepage/2Aboutushome.jpg')] bg-cover bg-center bg-no-repeat lg:w-[90%] mx-auto mt-8 gap-y-5 h-[80vh] rounded relative">
          <div className="flex justify-center">
            <div className="bg-white rounded-xl w-[90%] h-fit absolute bottom-10 flex justify-around  text-gray-700 py-1 px-2">
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
                    People has landed a job abroad
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
        </div>
      </section>

      {/* What we do */}
      <section className="w-full min-h-screen px-10 py-5 lg:px-30 lg:py-20">
        <div className="flex flex-col w-full items-center gap-y-3">
          <p className="bg-gray-200 w-fit px-4 py-2 rounded-4xl my-5">
            What we do
          </p>

          <div className="font-semibold lg:text-4xl text-3xl text-center lg:w-1/2">
            <p className="leading-10">
              Modern{" "}
              <span className="text-blue-800 w-1/3">Manpower Services</span>{" "}
              <br />
              Build for Every Industry!
            </p>
          </div>

          <p className="text-center">
            We provide fast , flexiable manpower for your businesses. Our
            skilled worker help <br />
            you stay productive and grow.
          </p>
        </div>

        {/* Image sections */}

        <div className="">
          <div className="flex lg:flex-row flex-col justify-around gap-y-10 my-5">
            <div className="bg-[url('/Homepage/3.ManPowerSupply.png')] bg-cover bg-center bg-no-repeat lg:w-[390px] gap-y-5 h-60 rounded-xl relative ">
              <div className="bg-gray-800 absolute w-[90%] min-h-10 bottom-1 rounded-t-xl">
                <h1 className="text-xl lg:text-3xl text-white font-semibold p-2">
                  Man Power Supply
                </h1>
              </div>
            </div>
            <div className="bg-[url('/Homepage/3.OvearseasRequirement.jpg')] bg-cover bg-center bg-no-repeat lg:w-[390px] gap-y-5 h-60 rounded-xl relative">
              <div className="bg-gray-800 absolute  w-[90%] min-h-10 bottom-1 rounded-t-xl ">
                <h1 className="text-xl lg:text-3xl text-white font-semibold p-2">
                  Overseas Requirement
                </h1>
              </div>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col justify-around gap-y-10 my-5">
            <div className="bg-[url('/Homepage/3.Temporaryandcontractstaffing.jpg')]  bg-cover bg-center bg-no-repeat lg:w-[390px] gap-y-5 h-60 rounded-xl relative">
              <div className="bg-gray-800 absolute  w-[90%] min-h-10 bottom-1 rounded-t-xl ">
                <h1 className="text-xl lg:text-3xl text-white font-semibold p-2">
                  Temorary and Contract Staffing
                </h1>
              </div>
            </div>
            <div className="bg-[url('/Homepage/3.Clientsandcandidatessupport.jpg')] bg-cover bg-center bg-no-repeat lg:w-[390px] gap-y-5 h-60 rounded-xl relative">
              <div className="bg-gray-800 absolute  w-[90%] min-h-10 bottom-1 rounded-t-xl ">
                <h1 className="text-xl lg:text-3xl text-white font-semibold p-2">
                  Client and Candidates Support
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-10">
          <button
            className="px-6 py-3 border border-[#152e44] text-white bg-[#152e44] hover:cursor-pointer rounded-lg font-semibold 
    transition-all duration-300 hover:bg-transparent hover:text-[#152e44]"
          >
            Learn More
          </button>
        </div>
      </section>

      {/* Why choose us */}
      <section className="w-full min-h-screen px-10 py-5 lg:px-30 lg:py-20 bg-blue-100">
        <p className="bg-white w-fit px-4 py-2 rounded-4xl my-5 ">
          Why choose us?
        </p>

        {/* Top */}
        <div className="flex flex-col gap-y-5 lg:flex-row align-middle">
          <div className=" lg:w-1/2 relative">
            <h1 className="lg:leading-13 text-2xl lg:text-5xl font-semibold">
              Reliable manpower <br /> solutions{" "}
              <span className="text-blue-800">you can trust</span>
            </h1>
            <img
              src="/line.svg"
              alt=""
              className="absolute w-36 right-[28%] lg:w-80 lg:right-[22%] "
            />
          </div>

          <div className="lg:w-1/2 flex flex-col justify-center">
            <p className="text-lg mb-5">
              We make hiring simple, fast, and efficient. Our team connects
              companies with skilled, verified talent across multiple industries
              delivering the right people exactly you need them
            </p>

            <button className="px-6 py-3 border w-fit border-[#152e44] text-white hover:text-black hover:cursor-pointer bg-[#152e44] rounded-lg font-semibold transition-colors hover:bg-transparent">
              Learn More
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex lg:flex-row flex-col justify-between gap-y-20">
          <div className="h-96 lg:w-[40%] bg-[url('/Homepage/4.Whychooseusimage.jpg')] bg-cover bg-center bg-no-repeat rounded-xl"></div>
          <div className="lg:w-[50%] ">
            <div className="flex justify-around items-center">
              <div className="h-16 w-16 rounded-full bg-[url('/Homepage/4.verified.jpg')] bg-cover bg-center bg-no-repeat"></div>
              <div className="w-[70%]">
                <h1 className="lg:text-xl text-md">
                  Verified & skilled Talent
                </h1>
                <p className="">
                  We supply trained, reliable worker who are screened and ready
                  to perform from day 1.
                </p>
              </div>
            </div>
            <div className="h-8 border-l border-dashed border-blue-800 lg:ml-[10%] ml-10"></div>

            <div className="flex justify-around items-center">
              <div className="h-16 w-16 rounded-full bg-[url('/Homepage/4.Fast.jpg')] bg-cover bg-center bg-no-repeat"></div>
              <div className="w-[70%]">
                <h1 className="lg:text-xl text-lg">Fast & Flexible Hiring</h1>
                <p className="">Get manpower quickly whether y</p>ou need a
                single worker or a full team on short notice.
              </div>
            </div>
            <div className="h-8 border-l border-dashed border-blue-800 lg:ml-[10%] ml-10"></div>

            <div className="flex justify-around items-center">
              <div className="h-16 w-16 rounded-full bg-[url('/Homepage/4.Industry.jpg')] bg-cover bg-center bg-no-repeat"></div>
              <div className="w-[70%]">
                <h1 className="lg:text-xl text-lg">
                  Industry-Specific Expertise
                </h1>
                <p className="">
                  From construction to healthcare, we understand your
                  requirements and provide the right talent for every industry.
                </p>
              </div>
            </div>
            <div className="h-8 border-l border-dashed border-blue-800 lg:ml-[10%] ml-10"></div>

            <div className="flex justify-around items-center">
              <div className="h-16 w-16 rounded-full bg-[url('/Homepage/4.End.jpg')] bg-cover bg-center bg-no-repeat"></div>
              <div className="w-[70%]">
                <h1 className="lg:text-xl text-lg">End-to-End Support</h1>
                <p className="">
                  We manage recuirement, documentation, deployment and ongoing
                  support - so you can focus on your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry we serve */}
      <section className="w-full min-h-screen px-10 py-5 lg:px-30 lg:py-20">
        {/* Top */}
        <div className="flex flex-col w-full items-center gap-y-3">
          <p className="bg-gray-200 w-fit px-4 py-2 rounded-4xl my-5">
            Industry we serve
          </p>

          <div className="font-semibold lg:text-4xl text-3xl text-center lg:w-1/2">
            <p className="leading-10">
              providing skilled manpower for <br /> a
              <span className="text-blue-800 w-1/3"> wide range</span> of
              Industry!
            </p>
          </div>

          <p className="text-center">
            We provide fast , flexiable manpower for your businesses. Our
            skilled worker help <br />
            you stay productive and grow.
          </p>
        </div>

        {/* Image rows */}
        <div className="flex justify-around gap-x-10">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-y-10 mt-10 gap-x-10">
            <div className="h-90 w-70 bg-[url('/Homepage/5.Construction&Engineering.jpg')] bg-cover bg-center bg-no-repeat rounded-lg relative">
              <div className="absolute min-h-15 w-full bottom-0 rounded-lg backdrop-blur-lg bg-white/10">
                <p className="text-white font-semibold text-xl w-[80%] px-5">
                  Construction & Engineering
                </p>
              </div>
              
            </div>
            <div className="h-90 w-70 bg-[url('/Homepage/5.Oil&Gassupply.jpg')] bg-cover bg-center bg-no-repeat rounded-lg relative">
              <div className="absolute min-h-15 w-full bottom-0 rounded-lg backdrop-blur-lg bg-white/10">
                <p className="text-white font-semibold text-xl w-[80%] px-5">
                  Oil & Gas supply Industries
                </p>
              </div>
            </div>
            <div className="h-90 w-70 bg-[url('/Homepage/5.Healthcare&MedicalIndustry.jpg')] bg-cover bg-center bg-no-repeat rounded-lg relative">
              <div className="absolute min-h-15 w-full bottom-0 rounded-lg backdrop-blur-lg bg-white/10">
                <p className="text-white font-semibold text-xl w-[80%] px-5">
                  Healthcare & Medical Industry
                </p>
              </div>
            </div>
            <div className="h-90 w-70 bg-[url('/Homepage/5.Hospitality&CateringService.jpg')] bg-cover bg-center bg-no-repeat rounded-lg relative">
              <div className="absolute min-h-15 w-full bottom-0 rounded-lg backdrop-blur-lg bg-white/10">
                <p className="text-white font-semibold text-xl w-[80%] px-5">
                  Hospitality & Catering Services
                </p>
              </div>
            </div>
            <div className="h-90 w-70 bg-[url('Homepage/5.Manufacturing&Maintenance.jpg')] bg-cover bg-center bg-no-repeat rounded-lg relative">
              <div className="absolute min-h-15 w-full bottom-0 rounded-lg backdrop-blur-lg bg-white/10">
                <p className="text-white font-semibold text-xl w-[80%] px-5">
                  Manufacturing & Maintenance
                </p>
              </div>
            </div>
            <div className="h-90 w-70 bg-[url('/Homepage/5.Security&FacilityManagement.jpg')] bg-cover bg-center bg-no-repeat rounded-lg relative">
              <div className="absolute min-h-15 w-full bottom-0 rounded-lg backdrop-blur-lg bg-white/10">
                <p className="text-white font-semibold text-xl w-[80%] px-5">
                  Security & Facility Management
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-10">
          <button
            className="px-6 py-3 border border-[#152e44] text-white bg-[#152e44] hover:cursor-pointer rounded-lg font-semibold 
    transition-all duration-300 hover:bg-transparent hover:text-[#152e44]"
          >
            Learn More
          </button>
        </div>
      </section>

      {/* Our Testimonials */}
      <section className="w-full min-h-screen px-10 py-5 lg:px-30 lg:py-20">
        <p className="bg-white border-4 border-gray-300 w-fit px-4 py-2 rounded-2xl my-5 ">
          Our Testimonials
        </p>

        {/* Top */}
        <div className="flex flex-col gap-y-5 lg:flex-row align-middle">
          <div className=" lg:w-1/2 relative">
            <h1 className="lg:leading-13 text-2xl lg:text-5xl font-semibold">
              We got the right workers <br /> for every{" "}
              <span className="text-blue-800">industry we serve</span>
            </h1>
            <img
              src="/line.svg"
              alt=""
              className="absolute lg:w-98 w-50 right-[12%] lg:right-[8%]"
            />
          </div>

          <div className="lg:w-[40%] flex flex-col justify-center items-center">
            <p className="text-md mb-5">
              We make hiring simple, fast, and efficient. Our team connects
              companies with skilled, verified talent across multiple industries
              delivering the right people exactly you need them
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="relative w-full lg:mt-30">
          {/* Arrow Left */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-3 rounded-full shadow z-10"
          >
            <ArrowLeft />
          </button>

          {/* Cards Container */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth px-10 scrollbar-hide"
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="w-[250px] min-w-[250px] bg-white shadow-lg rounded-2xl p-5 flex-shrink-0"
              >
                <p className="text-lg italic">"{item.testimonial}"</p>
                <p className="mt-4 font-semibold">
                  - {item.name}, <span className="text-sm">{item.role}</span>
                </p>
              </div>
            ))}
          </div>

          {/* Arrow Right */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-3 rounded-full shadow z-10"
          >
            <ArrowRight />
          </button>
        </div>
      </section>

      {/* Contact on prime */}
      <section className="w-full lg:h-screen h-[50vh] ">
        <div className="lg:h-[80vh] w-full py-5 bg-[url('/Homepage/6.ContactonPrimelink.jpg')]  bg-cover bg-center bg-no-repeat text-white flex flex-col justify-center items-center text-center gap-y-5">
          <p>if you needed</p>
          <h1 className="lg:text-6xl">
            Your trusted partner for consistent, <br /> high-quality manpower.
          </h1>
          <button className="px-6 py-3 bg-white/10 backdrop-blur-xl rounded-lg font-bold w-fit mt-5 hover:cursor-pointer">
            Hire Talent
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;

