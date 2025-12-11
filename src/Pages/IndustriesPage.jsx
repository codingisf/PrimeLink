import React, { useRef } from "react";
import StickyNavbar from "../components/StickyNavbar.jsx";
import Footer from "../components/footer.jsx";
import { ArrowLeft, ArrowRight } from "lucide-react";

function IndustriesPage() {
  const testimonials = [
    {
      name: "Kani Kumar",
      role: "Welder",
      testimonial: "Your Manpower agency has been delivering consistent and professional service. The recruitment process is well Organized. Communication, Follow ups, and document handling are handled efficiently. Overall, we are satisfied with the quality of service",
      url:"/Fedback-1.jpg",
    },
    {
      name: "Sarathy",
      role: "Restaurant Supervisor",
      testimonial: "Excellent service, Thank you to PrimeLink Manpower & Staffing for arranging me with a job abroad at the best possible time with a great salary ",
      url:"/Fedback-2.jpg",
    },
    {
      name: "Mano",
      role: "A.C Technician",
      testimonial: "Great company, great service. An example of a good company is proper communication.That way, whenever this company contacts you, they give you a correct and clear explanation",
      url:"/Fedback-3.jpg",
    },
  ];

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

    const FlipCard = ({ image, title, roles }) => {
    return (
      <div className="group perspective">
        <div className="relative h-[22rem] w-[18rem] transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
          {/* Front Side */}
          <div
            className="absolute inset-0 rounded-lg bg-cover bg-center bg-no-repeat backface-hidden"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute bottom-0 w-full rounded-b-lg backdrop-blur-lg bg-white/10 py-3 px-5">
              <p className="text-white font-semibold text-xl">{title}</p>
            </div>
          </div>

          {/* Back Side */}
          <div className="absolute inset-0 rounded-lg bg-gray-900 text-white p-5 rotate-y-180 backface-hidden flex flex-col justify-start overflow-auto">
            <h2 className="text-2xl font-bold mb-3">{title}</h2>
            <ul className="list-disc list-inside text-base opacity-80 space-y-1">
              {roles.map((role, index) => (
                <li key={index}>{role}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
    {/* Section - 1  */}
      <section className="bg-[url('/Industries/1.Industrieshome.jpg')] bg-cover bg-center lg:h-[80vh] w-full text-white h-fit py-5">
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
      <section className="w-full min-h-screen px-10 py-5 lg:px-30 lg:py-20 z-10">
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
                <div className="mt-10 mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-y-10 gap-x-10">
            <FlipCard
              image="/Homepage/5.Construction&Engineering.jpg"
              title="Construction & Engineering"
              roles={[
                "Civil Engineer",
                "Architect",
                "Foreman",
                "Surveyor",
                "Health & Safety Inspector",
                "Brick Mason",
                "Tiles Mason",
                "Carpenter",
                "Plumber",
                "Electrician",
                "Welder",
                "Painter",
                "Pipe Fitter",
              ]}
            />

            <FlipCard
              image="/Homepage/5.Oil&Gassupply.jpg"
              title="Oil & Gas Supply Industries"
              roles={[
                "Chemical Engineer",
                "Drilling Engineer",
                "Production Engineer",
                "Pipeline Technician",
                "Rig Operator",
                "Gas Plant Operator",
                "Welder",
                "Driller",
                "Supply Chain Manager",
              ]}
            />

            <FlipCard
              image="/Homepage/5.Healthcare&MedicalIndustry.jpg"
              title="Healthcare & Medical Industry"
              roles={[
                "Physicians and Surgeons",
                "Nursing and Midwifery",
                "Pharmacist",
                "Laboratory Technician",
                "Dietitian",
                "Dental Assistant",
                "Biomedical Engineer",
                "OT Technician",
                "Receptionist",
                "Optometrist",
                "Administrative Assistant",
              ]}
            />

            <FlipCard
              image="/Homepage/5.Hospitality&CateringService.jpg"
              title="Hospitality & Catering Services"
              roles={[
                "Hotel Manager",
                "Receptionist",
                "Housekeeper",
                "Room Attendant",
                "Chef",
                "Restaurant Manager",
                "Catering Manager",
                "Waiter",
                "Travel Agent",
              ]}
            />

            <FlipCard
              image="/Homepage/5.Manufacturing&Maintenance.jpg"
              title="Manufacturing & Maintenance"
              roles={[
                "Production Worker",
                "Machine Operator",
                "Quality Control Inspector",
                "Welder",
                "Industrial Engineer",
                "Mechanical Engineer",
                "Supply Chain & Logistics Manager",
                "General Labour",
              ]}
            />

            <FlipCard
              image="/Homepage/5.Security&FacilityManagement.jpg"
              title="Security & Facility Management"
              roles={[
                "Security Service",
                "Housekeeping Service",
                "CCTV Operator",
                "General Labour",
              ]}
            />
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
                className="w-[250px] min-w-[250px] bg-white shadow-lg rounded-2xl p-5 flex-shrink-0 flex flex-col justify-between"
              >
                <img src={item.url} alt="No image :(" className="h-55 w-60"/>
                <div className="align-text-bottom h-[50%]">
                <p className="text-md italic">"{item.testimonial}"</p>
                <p className="mt-4 font-semibold text-right">
                  - {item.name}, <br /><span className="text-sm">{item.role}</span>
                </p>
                </div>
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
