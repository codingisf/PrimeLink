import React, { useRef } from "react";
import Reveal from "../components/Reveal.jsx";
import SEO from "../components/SEO.jsx";
import StickyNavbar from "../components/StickyNavbar.jsx";
import Footer from "../components/footer.jsx";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "../index.css";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

function HomePage() {
  const testimonials = [
    // Add more items as needed
    {
      name: "Kani Kumar",
      role: "Welder",
      testimonial:
        "Your Manpower agency has been delivering consistent and professional service. The recruitment process is well Organized. Communication, Follow ups, and document handling are handled efficiently. Overall, we are satisfied with the quality of service",
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
        "Working with Primelinkmanpower and staffing was an exceptional experience from start to finish. I was kept informed with prompt updates, and their encouragement gave me the confidence to excel in interviews. Thanks for their professionalism and genuine care!",
      url: "/Fedback-4.jpeg",
    },
    {
      name: "Balakumar",
      role: "Civil Engineer- Central Africa",
      testimonial:
        "They worked collaboratively, guiding me through each stage of my recruitment journey with clear communication and genuine care. Their teamwork and dedication made what can often be a stressful experience feel seamless and positive.",
      url: "/Fedback-5.jpeg",
    },
  ];

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const FlipCard = ({ image, title, roles }) => {
    return (
      <div className="group perspective">
        <div className="relative h-[22rem] w-[18rem] preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
          {/* Front Side */}
          <div
            className="absolute inset-0 rounded-lg bg-cover bg-center bg-no-repeat backface-hidden"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute bottom-0 w-full rounded-b-lg backdrop-blur-lg bg-white/10 py-3 px-5">
              <p className="text-white font-semibold text-xl">{title}</p>
            </div>
          </div>

          {/* Back Side (IMPORTANT ROTATION) */}
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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  const [Firstopen, setfirstOpen] = React.useState(false);
  const handlefirstOpen = () => setfirstOpen(!Firstopen);

  const [Secondopen, setsecondOpen] = React.useState(false);
  const handlesecondOpen = () => setsecondOpen(!Secondopen);

  const [Thirdopen, setthirdOpen] = React.useState(false);
  const handlethirdOpen = () => setthirdOpen(!Thirdopen);

  const [fourthopen, setfourthOpen] = React.useState(false);
  const handlefourthOpen = () => setfourthOpen(!fourthopen);

  return (
    <>
      <SEO
        title="Man-Power | Reliable Staffing Solutions"
        description="Connect with trusted manpower for every role. We provide skilled, verified professionals for construction, oil & gas, healthcare, and more."
        keywords="manpower, staffing, recruitment, overseas jobs, skilled labor, construction, healthcare"
      />

      {/* Home Section */}
      <section className="bg-[url('/Homepage/1_Home_content.jpg')] flex flex-col bg-cover bg-center bg-no-repeat min-h-[100vh] py-3 w-full text-white">
        {/* NavBar */}
        <StickyNavbar />
        <div className="flex flex-col flex-1 justify-center px-6 lg:px-20 w-full lg:w-[60vw] text-white space-y-6">
          <Reveal delay={0.1}>
            <p className="text-lg">An International Manpower Agency</p>
          </Reveal>
          <Reveal>
            <div className="relative">
              <h1 className="text-3xl md:text-5xl  leading-snug">
                Reliable <span className="font-bold">Manpower & Staffing </span>{" "}
                <br />
                solutions for{" "}
                <span className="font-bold relative inline-block">
                  Every Industry
                  <img
                    src="/line.svg"
                    alt=""
                    loading="lazy"
                    className="absolute -bottom-2 lg:-bottom-4 left-0 w-full h-auto"
                  />
                </span>
              </h1>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <p className=" text-base md:text-lg">
              We provide end-to-end manpower and staffing services designed to
              help businesses stay agile, efficient, and future-ready. From
              workforce supply to overseas recruitment and contract staffing,
              our solutions are tailored to your needs.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a href="/services">
                <button className="px-6 py-3 border border-[#152e44] text-white hover:cursor-pointer bg-[#152e44] rounded-lg font-semibold transition-colors hover:bg-transparent">
                  Get Started!
                </button>
              </a>

              <a href="/contact">
                <button className="px-6 py-3 border border-white bg-white text-black rounded-lg font-semibold transition-colors hover:bg-transparent hover:text-white">
                  Hire Talent
                </button>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* About section */}
      <section className="w-full min-h-screen lg:px-30 lg:py-20 px-10 py-5">
        <Reveal>
          <p className="bg-gray-200 w-fit px-4 py-2 rounded-4xl my-5">
            About us
          </p>
        </Reveal>
        <div className="lg:flex">
          <div className=" lg:text-4xl text-2xl font-semibold lg:w-1/2 relative">
            <Reveal delay={0.3}>
              <p className="lg:text-5xl">
                Refining How <br /> Business{" "}
                <span className="text-blue-800 relative inline-block">
                  Find Talent !
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
            <Reveal delay={0.4}>
              <p className="lg:text-lg text-md mb-5">
                we make hiring simple, fast, and efficient. Our team connects
                companies with solid, verified across multiple industries
                delivering the right people exactly when you need them.
              </p>

              <a href="/about">
                <button className="px-6 py-3 border border-[#152e44] text-white hover:text-black hover:cursor-pointer bg-[#152e44] rounded-lg font-semibold transition-colors hover:bg-transparent">
                  Learn More
                </button>
              </a>
            </Reveal>
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
        </div>
      </section>

      {/* What we do */}
      <section className="w-full min-h-screen px-10 py-5 lg:px-30 lg:py-20">
        <div className="flex flex-col w-full items-center gap-y-3">
          <Reveal>
            <p className="bg-gray-200 w-fit px-4 py-2 rounded-4xl my-5">
              What we do
            </p>
          </Reveal>

          <div className="font-semibold lg:text-4xl text-3xl text-center lg:w-1/2 flex flex-col w-full items-center">
            <Reveal delay={0.2}>
              <p className="leading-10">
                Modern{" "}
                <span className="text-blue-800 w-1/3">Manpower Services</span>{" "}
                <br />
                Build for Every Industry!
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            <p className="text-center">
              We provide fast, flexible manpower for your businesses. Our
              skilled workers help <br />
              you stay productive and grow.
            </p>
          </Reveal>
        </div>

        {/* Image sections */}

        <div className=" mt-5">
          <div className="flex lg:flex-row flex-col justify-evenly w-full items-center gap-y-10">
            <Reveal>
              <div
                className="bg-[url('/Homepage/3.ManPowerSupply.png')] bg-cover bg-center bg-no-repeat lg:w-[390px] gap-y-5 h-60 rounded-xl relative "
                onClick={handlefirstOpen}
              >
                <div className="bg-gray-800 absolute w-[90%] min-h-10 bottom-1 rounded-t-xl">
                  <h1 className="text-xl lg:text-3xl text-white font-semibold p-2">
                    Man Power Supply
                  </h1>
                </div>
              </div>
            </Reveal>
            {/* Model for first image*/}
            <Dialog
              open={Firstopen}
              handler={handlefirstOpen}
              className="z-[9999]"
            >
              <DialogHeader>Man Power Supply</DialogHeader>
              <DialogBody>
                PrimeLink Manpower & Staffing delivers dependable manpower
                supply solutions, providing skilled and unskilled workforce to
                meet global business demands. We ensure quality recruitment,
                timely deployment and complete compliance for seamless workforce
                management.
                <br />
                <ul className="list-disc px-16 py-5">
                  <li>Temporary Staffing</li>
                  <li>Contract Staffing</li>
                  <li>Permanent Staffing</li>
                  <li>Skilled and Unskilled manpower</li>
                  <li>Specialized manpower</li>
                  <li>General Labour</li>
                </ul>
              </DialogBody>
              <DialogFooter>
                <Button
                  variant="text"
                  color="red"
                  onClick={handlefirstOpen}
                  className="mr-1"
                >
                  <span>Close</span>
                </Button>
              </DialogFooter>
            </Dialog>

            <Reveal>
              <div
                className="bg-[url('/Homepage/3.OvearseasRequirement.jpg')] bg-cover bg-center bg-no-repeat lg:w-[390px] gap-y-5 h-60 rounded-xl relative"
                onClick={handlesecondOpen}
              >
                <div className="bg-gray-800 absolute  w-[90%] min-h-10 bottom-1 rounded-t-xl ">
                  <h1 className="text-xl lg:text-3xl text-white font-semibold p-2">
                    Overseas Requirement
                  </h1>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Model for Second image*/}
          <Dialog
            open={Secondopen}
            handler={handlesecondOpen}
            className="z-[9999]"
          >
            <DialogHeader>Overseas Requirement</DialogHeader>
            <DialogBody>
              PrimeLink Manpower & Staffing specializes in overseas recruitment
              solutions, connecting global employers with qualified, reliable,
              and job-ready professionals from diverse talent pools. We help
              organizations meet their international workforce requirements
              efficiently, compliantly, and on time.
              <br />
              <ul className="list-disc px-16 py-5">
                <li>Construction & Engineering</li>
                <li>Oil & Gas Supply Industries</li>
                <li>Healthcare & Medical Industry</li>
                <li>Hospitality & Catering Services</li>
                <li>Manufacturing & Maintenance</li>
                <li>Security & Facility Management</li>
              </ul>
            </DialogBody>
            <DialogFooter>
              <Button
                variant="text"
                color="red"
                onClick={handlesecondOpen}
                className="mr-1"
              >
                <span>Close</span>
              </Button>
            </DialogFooter>
          </Dialog>

          <div className="flex lg:flex-row flex-col mt-10 w-full items-center justify-evenly gap-y-10 ">
            <Reveal>
              <div
                className="bg-[url('/Homepage/3.Temporaryandcontractstaffing.jpg')]  bg-cover bg-center bg-no-repeat lg:w-[390px] gap-y-5 h-60 rounded-xl relative"
                onClick={handlethirdOpen}
              >
                <div className="bg-gray-800 absolute  w-[90%] min-h-10 bottom-1 rounded-t-xl ">
                  <h1 className="text-xl lg:text-3xl text-white font-semibold p-2">
                    Temporary and Contract Staffing
                  </h1>
                </div>
              </div>
            </Reveal>
            {/* Model for Third image*/}
            <Dialog
              open={Thirdopen}
              handler={handlethirdOpen}
              className="z-[9999]"
            >
              <DialogHeader>Temporary and Contract Staffing</DialogHeader>
              <DialogBody>
                PrimeLink Manpower & Staffing provides flexible temporary and
                contract staffing solutions to help businesses. We supply
                qualified professionals for short-term, long-term, and
                project-based assignments across multiple industries. From
                urgent staffing needs to specialized contract roles, we ensure
                the right talent is available at the right time.
                <br />
                <ul className="list-disc px-16 py-5">
                  <li>Temporary staffing for short-term requirements</li>
                  <li>Contract staffing for fixed-duration roles</li>
                  <li>Project-based and seasonal workforce supply</li>
                  <li>Payroll and compliance management support</li>
                </ul>
              </DialogBody>
              <DialogFooter>
                <Button
                  variant="text"
                  color="red"
                  onClick={handlethirdOpen}
                  className="mr-1"
                >
                  <span>Close</span>
                </Button>
              </DialogFooter>
            </Dialog>

            <Reveal>
              <div
                className="bg-[url('/Homepage/3.Clientsandcandidatessupport.jpg')] bg-cover bg-center bg-no-repeat lg:w-[390px] gap-y-5 h-60 rounded-xl relative"
                onClick={handlefourthOpen}
              >
                <div className="bg-gray-800 absolute  w-[90%] min-h-10 bottom-1 rounded-t-xl ">
                  <h1 className="text-xl lg:text-3xl text-white font-semibold p-2">
                    Client and Candidates Support
                  </h1>
                </div>
              </div>
            </Reveal>
            {/* Model for Fourth image*/}
            <Dialog
              open={fourthopen}
              handler={handlefourthOpen}
              className="z-[9999]"
            >
              <DialogHeader>Client and Candidates Support</DialogHeader>
              <DialogBody>
                PrimeLink Manpower & Staffing Covers the complete hiring
                lifecycle - from candidate sourcing and screening to
                documentation, visa processing and final deployment. With
                in-depth knowledge of international labour markets and country-
                specific regulations, we ensure smooth and transparent
                recruitment for both employers and candidates. Our Client and
                Candidates Support Services Include:
                <br />
                <ul className="list-disc px-16 py-5">
                  <li>Understanding Client Requirements</li>
                  <li>Sourcing and Screening Candidates</li>
                  <li>Legal Documentation and Compliance</li>
                  <li>Deployment and Workforce Management</li>
                  <li>Manufacturing & Maintenance</li>
                  <li>Ongoing Support</li>
                </ul>
              </DialogBody>
              <DialogFooter>
                <Button
                  variant="text"
                  color="red"
                  onClick={handlefourthOpen}
                  className="mr-1"
                >
                  <span>Close</span>
                </Button>
              </DialogFooter>
            </Dialog>
          </div>
        </div>

        <div className="flex justify-center pt-10">
          <button
            className="px-6 py-3 border border-[#152e44] text-white bg-[#152e44] hover:cursor-pointer rounded-lg font-semibold 
    transition-all duration-300 hover:bg-transparent hover:text-[#152e44]"
            onClick={handleOpen}
          >
            Learn More
          </button>
          {/* Model for learn more */}
          <Dialog open={open} handler={handleOpen} className="z-[9999]">
            <DialogHeader>
              Here learn more option you add Why Choose PrimeLink Manpower &
              Staffing?
            </DialogHeader>
            <DialogBody>
              Strict candidate screening and quality assurance Compliance with
              international labor laws Fast turnaround time Cost-effective
              staffing solutions Dedicated client support <br />
              Our goal is to become your trusted manpower partner by delivering
              dependable workforce solutions that drive business growth and
              long-term success.
            </DialogBody>
            <DialogFooter>
              <Button
                variant="text"
                color="red"
                onClick={handleOpen}
                className="mr-1"
              >
                <span>Close</span>
              </Button>
            </DialogFooter>
          </Dialog>
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
            <Reveal>
              <h1 className="lg:leading-13 text-2xl lg:text-5xl font-semibold">
                Reliable manpower <br /> solutions{" "}
                <span className="text-blue-800 relative inline-block">
                  you can trust
                  <img
                    src="/line.svg"
                    alt=""
                    className="absolute -bottom-2 lg:-bottom-4 left-0 w-full h-auto"
                  />
                </span>
              </h1>
            </Reveal>
          </div>

          <div className="lg:w-1/2 flex flex-col justify-center">
            <Reveal delay={0.3}>
              <p className="text-lg mb-5">
                We make hiring simple, fast, and efficient. Our team connects
                companies with skilled, verified talent across multiple
                industries delivering the right people exactly when you need
                them
              </p>

              <a href="/">
                <button className="px-6 py-3 border w-fit border-[#152e44] text-white hover:text-black hover:cursor-pointer bg-[#152e44] rounded-lg font-semibold transition-colors hover:bg-transparent">
                  Learn More
                </button>
              </a>
            </Reveal>
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
                  We supply trained, reliable workers who are screened and ready
                  to perform from day 1.
                </p>
              </div>
            </div>
            <div className="h-8 border-l border-dashed border-blue-800 lg:ml-[10%] ml-10"></div>

            <div className="flex justify-around items-center">
              <div className="h-16 w-16 rounded-full bg-[url('/Homepage/4.Fast.jpg')] bg-cover bg-center bg-no-repeat"></div>
              <div className="w-[70%]">
                <h1 className="lg:text-xl text-lg">Fast & Flexible Hiring</h1>
                <p className="">
                  Get manpower quickly whether you need a single worker or a
                  full team on short notice.
                </p>
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
                  We manage recruitment, documentation, deployment and ongoing
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
            We provide fast, flexible manpower for your businesses. Our skilled
            workers help <br />
            you stay productive and grow.
          </p>
        </div>

        {/* Image rows */}
        <div className="mt-10 mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-y-10 gap-x-10">
            <Reveal>
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
            </Reveal>

            <Reveal delay={0.1}>
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
            </Reveal>

            <Reveal delay={0.2}>
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
            </Reveal>

            <Reveal delay={0.3}>
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

        <div className="flex justify-center pt-10">
          <a href="/industries">
            <button
              className="px-6 py-3 border border-[#152e44] text-white bg-[#152e44] hover:cursor-pointer rounded-lg font-semibold 
    transition-all duration-300 hover:bg-transparent hover:text-[#152e44]"
            >
              Learn More
            </button>
          </a>
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
              <span className="text-blue-800 relative inline-block">
                industry we serve
                <img
                  src="/line.svg"
                  alt=""
                  className="absolute -bottom-2 lg:-bottom-4 left-0 w-full h-auto"
                />
              </span>
            </h1>
          </div>

          <div className="lg:w-[40%] flex flex-col justify-center items-center">
            <p className="text-md mb-5">
              We make hiring simple, fast, and efficient. Our team connects
              companies with skilled, verified talent across multiple industries
              delivering the right people exactly you need them.
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="relative w-full lg:mt-32">
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
                className="w-[250px] min-w-[250px] bg-white shadow-lg rounded-2xl p-5 flex-shrink-0 flex flex-col gap-y-20"
              >
                <div className="flex gap-x-5">
                  <img
                    src={item.url}
                    alt="Testimonial Avatar"
                    loading="lazy"
                    className="h-20 w-20 rounded-full"
                  />
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
    </>
  );
}

export default HomePage;
