import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import Reveal from "../components/Reveal.jsx";
import StickyNavbar from "../components/StickyNavbar.jsx";
import Footer from "../components/footer.jsx";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "../App.css";

function IndustriesPage() {
  const testimonials = [
    // Add more items as needed
    {
      name: "Kani Kumar",
      role: "Welder",
      testimonial:
        "Your Manpower agency has been delivering consistent and professional service. The recruitment process is well organized. Communication, follow-ups, and document handling are handled efficiently. Overall, we are satisfied with the quality of service",
      url: "/Fedback-1.jpg",
    },
    {
      name: "Sarathy",
      role: "Restaurant Supervisor",
      testimonial:
        "Excellent service, Thank you to PrimeLink Manpower & Staffing for arranging me with a job abroad at the best possible time with a great salary ",
      url: "/Fedback-2.jpg",
    },
    {
      name: "Mano",
      role: "A.C Technician",
      testimonial:
        "Great company, great service. An example of a good company is proper communication. That way, whenever this company contacts you, they give you a correct and clear explanation",
      url: "/Fedback-3.jpg",
    },
    {
      name: "Samson",
      role: "Operation Theatre Technician",
      testimonial:
        "Working with Prime Link Manpower and staffing was an exceptional experience from start to finish. I was kept informed with prompt updates, and their encouragement gave me the confidence to excel in interviews. Thanks for their professionalism and genuine care!",
      url: "/Fedback-4.jpeg",
    },
    {
      name: "Balakumar",
      role: "Civil Engineer- Central Africa",
      testimonial:
        "They worked collaboratively, guiding me through each stage of my recruitment journey with clear communication and genuine care. Their teamwork and dedication made what can often be a stressful experience feel seamless and positive.",
      url: "/Fedback-5.jpeg",
    },
    {
      name: "Manoj",
      role: "Pharmacist",
      testimonial:
        "I’m truly grateful for their efforts in helping me secure a role that I can step into with confidence, and I can’t recommend their service highly enough.",
      // url: "/Fedback-5.jpeg",
    },
    {
      name: "Karthik",
      role: "Mechanical Engineer",
      testimonial:
        "They worked collaboratively, guiding me through each stage of my recruitment journey with clear communication and genuine care. Their teamwork and dedication made what can often be a stressful experience feel seamless and positive.",
      // url: "/Fedback-5.jpeg",
    },
    {
      name: "Rajesh",
      role: "ICU nurse",
      testimonial:
        "I have had an outstanding experience with Your Recruit, thanks to the incredible support from Your Recruit agency. From start to finish, their customer service has been second to none friendly, professional, and highly adaptable to my needs throughout the process.",
      // url: "/Fedback-5.jpeg",
    },
  ];

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  /* Drag to Scroll Logic */
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  const handleMouseDown = (e) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftPos(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeftPos - walk;
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const FlipCard = ({ image, title, roles }) => {
    return (
      <div className="group perspective">
        <div className="relative h-[22rem] w-[18rem] transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
          {/* Front Side */}
          <div className="absolute inset-0 rounded-lg backface-hidden overflow-hidden">
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 w-full rounded-b-lg backdrop-blur-lg bg-white/10 py-3 px-5">
              <p className="text-white font-semibold text-xl">{title}</p>
            </div>
          </div>

          {/* Back Side */}
          <div className="absolute inset-0 rounded-lg bg-gray-900 text-white p-5 rotate-y-180 backface-hidden flex flex-col justify-start overflow-auto">
            <h2 className="text-2xl font-bold mb-3">{title}</h2>
            <hr className="border-white/20 mb-3" />
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
      <SEO
        title="Industries We Serve | Man-Power"
        description="Providing skilled manpower for construction, oil & gas, healthcare, hospitality, manufacturing, and security industries."
        keywords="industries served, construction manpower, oil and gas jobs, healthcare staffing, hospitality workers"
      />

      {/* Section - 1  */}
      <section className="relative lg:h-[100vh] w-full text-white h-fit py-5 flex flex-col">
        <div className="absolute inset-0 z-[-1]">
          <img
            src="/Industries/1.Industrieshome.jpg"
            alt="Background"
            fetchpriority="high"
            className="w-full h-full object-cover"
          />
        </div>
        <StickyNavbar />
        <div className="flex flex-col w-full items-center gap-y-3 justify-center lg:h-[80%] h-fit">
          <p className="bg-white text-black w-fit px-4 py-2 rounded-3xl my-5">
            Industries
          </p>

          <div className="font-semibold lg:text-6xl text-3xl text-center relative">
            <p className="lg:leading-14">
              Providing Reliable Talent for <br /> Roles Across{" "}
              <span className="text-blue-800 relative inline-block">
                All Industries
                <img
                  src="/line.svg"
                  alt=""
                  loading="lazy"
                  className="absolute -bottom-2 lg:-bottom-4 left-0 w-full h-auto"
                />
              </span>
            </p>
          </div>
          <p className="text-center">
            we make hiring simple, fast, and efficient. Our team connects
            companies with solid, verified talent across multiple industries{" "}
            <br /> delivering the right people exactly when you need them.
          </p>
        </div>
      </section>

      {/* Section - 2  */}
      <section className="bg-blue-50 text-center w-full min-h-screen lg:px-30 lg:py-20 px-10 py-5">
        <p className="bg-white w-fit px-4 py-2 rounded-3xl my-5 mx-auto">
          Our Journey in the Industry
        </p>
        <Reveal>
          <div className="mx-auto">
            <div className="lg:text-4xl text-2xl font-semibold">
              <p className="lg:text-5xl">
                The Start of Our Journey, Built on a Passion <br /> to Serve{" "}
                <span className="relative inline-block text-blue-800">
                  Every Sector
                  <img
                    src="/line.svg"
                    alt=""
                    loading="lazy"
                    className="absolute -bottom-2 lg:-bottom-4 left-0 w-full h-auto"
                  />
                </span>
              </p>
            </div>

            <div className="text-center lg:w-[70%] mx-auto mt-10 ">
              <p className="lg:text-lg text-md mb-5">
                we make hiring simple, fast, and efficient. Our team connects
                companies with solid, verified talent across multiple industries
                delivering the right people exactly when you need them.
              </p>
            </div>
          </div>
        </Reveal>
        <div className="flex lg:flex-row flex-col justify-around mt-10 gap-y-10 lg:gap-x-20">
          {/* card-1 */}
          <Reveal>
            <div className="max-w-98 bg-white px-6 border-2 border-gray-300 rounded-xl py-4">
              <div className="text-center">
                <h1 className="text-3xl font-semibold">
                  Vision to support industries
                </h1>
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
            <div className="max-w-98 bg-white px-6 border-2 border-gray-300 rounded-xl py-4">
              <div className="text-center">
                <h1 className="text-3xl font-semibold">
                  Building Trust Through Quality
                </h1>
              </div>
              <p className="mt-4">
                From day one, we focused on skilled, verified talent and
                reliable service - earning the trust of businesses across
                industries.
              </p>
            </div>
          </Reveal>

          {/* card-3 */}
          <Reveal delay={0.4}>
            <div className="max-w-98 bg-white px-6 border-2 border-gray-300 rounded-xl py-4">
              <div className="text-center">
                <h1 className="text-3xl font-semibold">
                  Growing with Every Partnership
                </h1>
              </div>
              <p className="mt-4">
                Every client, project and worker helped shape our journey,
                allowing us to grow into a dependable staffing partner for all
                sectors.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section - 3 */}
      <section className="relative lg:w-[90%] mx-auto mt-8 gap-y-5 h-[80vh] rounded overflow-hidden">
        <img
          src="/Industries/2.IndustriesForward.jpg"
          alt="Industries Forward"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="flex justify-center">
          <div className="bg-white rounded-xl w-[90%] h-fit absolute bottom-10 flex justify-around  text-gray-700 py-1 px-2">
            <div className="lg:flex justify-around">
              <div className="lg:w-[30%]">
                <p className="lg:text-6xl text-3xl font-bold mb-5">5+</p>
                <p className="lg:text-lg mb-3">Experienced manpower support</p>
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
                <p className="lg:text-lg  mb-3">Getting into a job Assurance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry we serve */}
      <section className="w-full min-h-screen px-10 py-5 lg:px-30 lg:py-20 z-10">
        {/* Top */}
        <div className="flex flex-col w-full items-center gap-y-3">
          <Reveal>
            <p className="bg-gray-200 w-fit px-4 py-2 rounded-3xl my-5">
              Industry we serve
            </p>
          </Reveal>

          <div className="font-semibold lg:text-4xl text-3xl flex justify-center text-center lg:w-1/2 mx-auto">
            <Reveal>
              <p className="leading-tight lg:leading-snug mx-auto text-center">
                Providing skilled manpower for <br /> a{" "}
                <span className="text-blue-800">wide range</span> of Industry!
              </p>
            </Reveal>
          </div>

          <Reveal>
            <p className="text-center">
              We provide fast, flexible manpower for your businesses. Our
              skilled workers help <br />
              you stay productive and grow.
            </p>
          </Reveal>
        </div>

        {/* Image rows */}
        <div className="mt-10 mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-items-center gap-y-10 gap-x-10">
            <Reveal>
              <div id="construction">
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
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div id="oil-gas">
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
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div id="healthcare">
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
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div id="hospitality">
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
              </div>
            </Reveal>

            <Reveal delay={0.4}>
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
            </Reveal>

            <Reveal delay={0.5}>
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
            </Reveal>
          </div>
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
            <Reveal>
              <h1 className="lg:leading-13 text-2xl lg:text-5xl font-semibold">
                We got the right workers <br /> for every{" "}
                <span className="text-blue-800 relative inline-block">
                  industry we serve
                  <img
                    src="/line.svg"
                    alt=""
                    className="absolute -bottom-2 lg:-bottom-4 left-0 w-full h-auto"
                  />
                </span>
              </h1>
            </Reveal>
          </div>

          <div className="lg:w-[40%] flex flex-col justify-center items-center">
            <Reveal>
              <p className="text-md mb-5">
                We make hiring simple, fast, and efficient. Our team connects
                companies with skilled, verified talent across multiple
                industries delivering the right people exactly you need them.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Testimonials */}
        <div className="relative w-full lg:mt-32">
          <Reveal width="100%">
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
              className={`flex gap-4 overflow-x-auto px-10 pb-4 ${
                isDragging ? "cursor-grabbing" : "cursor-grab scroll-smooth"
              }`}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="w-[250px] min-w-[250px] bg-white shadow-lg rounded-2xl p-5 flex-shrink-0 flex flex-col gap-y-20"
                >
                  <div className="flex gap-x-5">
                    {item.url && (
                      <img
                        src={item.url}
                        alt="Testimonial Avatar"
                        loading="lazy"
                        className="h-20 w-20 rounded-full"
                      />
                    )}
                    <p className="mt-4 font-semibold text-right">
                      - {item.name}, <br />
                      <span className="text-sm">{item.role}</span>
                    </p>
                  </div>

                  <div className="relative">
                    <p className="text-md italic">"{item.testimonial}"</p>
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
          </Reveal>
        </div>
      </section>

      {/* Contact on prime */}
      <section className="w-full min-h-screen">
        <div className="relative h-[80vh] w-full text-white flex flex-col justify-center items-center text-center gap-y-5">
          <img
            src="/Homepage/6.ContactonPrimelink.jpg"
            alt="Contact"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover -z-10"
          />
          <p>If you need</p>
          <h1 className="lg:text-6xl">
            Your trusted partner for consistent, <br /> high-quality manpower.
          </h1>
          <Link to="/contact">
            <button className="px-6 py-3 bg-white/10 backdrop-blur-xl rounded-lg font-bold w-fit mt-5 hover:cursor-pointer">
              Hire Talent
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default IndustriesPage;
