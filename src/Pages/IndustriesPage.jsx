import React, { useRef } from "react";
import StickyNavbar from "../components/StickyNavbar.jsx";
import Footer from "../components/footer.jsx";
import { ArrowLeft, ArrowRight } from "lucide-react";

function IndustriesPage() {
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
    <>
    {/* Section - 1  */}
      <section className="bg-[url('Industries/1.Industrieshome.jpg')] bg-cover bg-center lg:h-[80vh] w-full text-white h-fit py-5">
        <StickyNavbar />
        <div className="flex flex-col w-full items-center gap-y-3 justify-center lg:h-[80%] h-fit">
          <p className="bg-white text-black w-fit px-4 py-2 rounded-4xl my-5">
            Industries
          </p>

          <div className="font-semibold lg:text-6xl text-3xl text-center relative">
            <p className="lg:leading-14">
              Providing Reliable Talent for <br /> Role Across
              <span className="text-blue-800 w-1/3"> All Industries</span>
            </p>
            <img
              src="/line.svg"
              alt=""
              className="lg:block absolute hidden w-96  lg:right-[5%] right-[10%]"
            />
          </div>

          <p className="text-center">
            we make hiring simple ,fast , and efficient. Our team connects companies with solid, verified across multiple industries <br /> delivering the right people exactly when you need them.
          </p>
        </div>
      </section>

       {/* Company logos */}
      <div className="lg:h-[20vh] w-full">
        <p></p>
      </div>

      {/* Section - 2  */}
      <section className="bg-blue-50 text-center w-full min-h-screen lg:px-30 lg:py-20 px-10 py-5">
        <p className="bg-gray-200 w-fit px-4 py-2 rounded-4xl my-5 mx-auto">Our Journey on industry</p>
        <div className="">
          <div className="lg:text-4xl text-2xl font-semibold">
            <p className="lg:text-5xl">
              The Start of Our Journey , Built on a Passion <br /> to Serve
              <span className="relative text-blue-800"> Every Sector</span>
              <img
                src="/line.svg"
                alt=""
                className="absolute lg:w-76 w-35 lg:right-[35%] right-[30%] mt-2"
              />
            </p>
          </div>
          <div className="text-center lg:w-[70%] mx-auto mt-10">
            <p className="lg:text-lg text-md mb-5">
              we make hiring simple ,fast , and efficient. Our team connects
              companies with solid, verified across multiple industries
              delivering the right people exactly when you need them.
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-around mt-10 gap-y-10">
          {/* card-1 */}
          <div className="max-w-98 bg-white px-6 border-2 border-gray-300 rounded-xl py-4">
            <div className="text-center">
              <h1 className="text-3xl font-semibold">Vision to support industries</h1>
            </div>
            <p className="mt-4">
              We aim to deliver reliable, skilled manpower tha helips businesses
              work smarter and grow faster. Our mission is to provide seamless
              staffing support.
            </p>
          </div>

          {/* card-2 */}
          <div className="max-w-98 bg-white px-6 border-2 border-gray-300 rounded-xl py-4">
            <div className="text-center">
              
              <h1 className="text-3xl font-semibold">Building Trust Through Quality</h1>
            </div>
            <p className="mt-4">
              From day one, we focused on skilled, verified talent and reliable service-erning the trust of businesses across industries.
            </p>
          </div>

          {/* card-3 */}
          <div className="max-w-98 bg-white px-6 border-2 border-gray-300 rounded-xl py-4">
            <div className="text-center">
            
              <h1 className="text-3xl font-semibold">Growing with Every Partnership</h1>
            </div>
            <p className="mt-4">
              Every client, project and worker helped shape our journey, allowing us to grow into a dependable staffing partner for all sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Section - 3 */}
      <section className="bg-[url('/Industries/2.IndustriesForward.jpg')] bg-cover bg-center bg-no-repeat lg:w-[90%] mx-auto mt-8 gap-y-5 h-[80vh] rounded relative">
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
            <div className="h-90 w-70 bg-[url('Homepage/5.Construction&Engineering.jpg')] bg-cover bg-center bg-no-repeat rounded-lg relative">
              <div className="absolute min-h-15 w-full bottom-0 rounded-lg backdrop-blur-lg bg-white/10">
                <p className="text-white font-semibold text-xl w-[80%] px-5">
                  Construction & Engineering
                </p>
              </div>
              
            </div>
            <div className="h-90 w-70 bg-[url('Homepage/5.Oil&Gassupply.jpg')] bg-cover bg-center bg-no-repeat rounded-lg relative">
              <div className="absolute min-h-15 w-full bottom-0 rounded-lg backdrop-blur-lg bg-white/10">
                <p className="text-white font-semibold text-xl w-[80%] px-5">
                  Oil & Gas supply Industries
                </p>
              </div>
            </div>
            <div className="h-90 w-70 bg-[url('Homepage/5.Healthcare&MedicalIndustry.jpg')] bg-cover bg-center bg-no-repeat rounded-lg relative">
              <div className="absolute min-h-15 w-full bottom-0 rounded-lg backdrop-blur-lg bg-white/10">
                <p className="text-white font-semibold text-xl w-[80%] px-5">
                  Healthcare & Medical Industry
                </p>
              </div>
            </div>
            <div className="h-90 w-70 bg-[url('Homepage/5.Hospitality&CateringService.jpg')] bg-cover bg-center bg-no-repeat rounded-lg relative">
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
            <div className="h-90 w-70 bg-[url('Homepage/5.Security&FacilityManagement.jpg')] bg-cover bg-center bg-no-repeat rounded-lg relative">
              <div className="absolute min-h-15 w-full bottom-0 rounded-lg backdrop-blur-lg bg-white/10">
                <p className="text-white font-semibold text-xl w-[80%] px-5">
                  Security & Facility Management
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image grid */}
      <section className="w-full min-h-[70vh]"></section>

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
      <section className="w-full min-h-screen">
        <div className="h-[80vh] w-full bg-blue-400 text-white flex flex-col justify-center items-center text-center gap-y-5">
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
    </>
  )
}

export default IndustriesPage