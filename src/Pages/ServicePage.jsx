import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import SEO from "../components/SEO.jsx";
import Reveal from "../components/Reveal.jsx";
import StickyNavbar from "../components/StickyNavbar.jsx";
import Footer from "../components/footer.jsx";
import "../App.css";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

function Servicepage() {
  const [openFaq, setOpenFaq] = useState(null);

  const [Firstopen, setfirstOpen] = React.useState(false);
  const handlefirstOpen = () => setfirstOpen(!Firstopen);

  const [Secondopen, setsecondOpen] = React.useState(false);
  const handlesecondOpen = () => setsecondOpen(!Secondopen);

  const [Thirdopen, setthirdOpen] = React.useState(false);
  const handlethirdOpen = () => setthirdOpen(!Thirdopen);

  const [Fourthopen, setfourthOpen] = React.useState(false);
  const handlefourthOpen = () => setfourthOpen(!Fourthopen);

  return (
    <>
      <SEO
        title="Services | Man-Power"
        description="Comprehensive manpower services including overseas requirement, contract staffing, and client support."
        keywords="manpower services, contract staffing, overseas recruitment, client support"
      />

      {/* ================= HERO SECTION ================= */}
      <section className="bg-[url('/Servicepage/1.ServicePage.jpg')] bg-cover bg-center bg-no-repeat w-full text-white py-5 lg:h-screen ">
        <StickyNavbar />

        <div className="flex flex-col items-center justify-center gap-y-4 lg:h-[80%] px-6">
          <p className="bg-white text-black px-4 py-2 rounded-full mt-5 lg:mt-0">
            Services
          </p>

          <div className="font-semibold text-center text-3xl lg:text-6xl">
            <Reveal>
              <p>
                Quality Manpower Support for <br />
                Diverse <span className="text-blue-800">Service Needs</span>
              </p>
            </Reveal>
          </div>

          <p className="text-center max-w-3xl">
            We make hiring simple, fast and efficient. Our team connects
            companies with skilled, verified talent across multiple industries,
            delivering the right people exactly when you need them.
          </p>
        </div>
      </section>

      {/* ================= PROCESS SECTION ================= */}
      <section className="bg-blue-50 min-h-screen px-10 py-10 lg:px-28 lg:py-20">
        <div className="lg:flex gap-10">
          <div className="lg:w-1/2 font-semibold text-2xl lg:text-5xl">
            <Reveal>
              <p>
                How Our Staffing <br />
                Process <span className="text-blue-800">Really Works?</span>
              </p>
            </Reveal>
          </div>

          <div className="lg:w-1/2 mt-5">
            <p className="text-base lg:text-lg mb-5">
              We make hiring simple, fast, and efficient. Our team connects
              companies with solid, verified talent across multiple industries.
            </p>

            <Link to="/contact">
              <button className="px-6 py-3 bg-[#152e44] text-white border border-[#152e44] rounded-lg font-semibold transition hover:bg-transparent hover:text-black">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* ================= PROCESS CARDS ================= */}
        <div className="grid lg:grid-cols-3 gap-10 mt-16 justify-items-center">
          <Reveal>
            <div className="h-96 w-80 bg-[url('/Servicepage/2.share.jpg')] bg-cover bg-center rounded-lg relative cursor-pointer">
              <div className="absolute bottom-0 w-[90%] bg-[#152e44]/80 backdrop-blur-md rounded-t-lg">
                <p className="text-white text-xl font-semibold px-5 py-3">
                  1. Share Your Requirements
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="h-96 w-80 bg-[url('/Servicepage/2.WeSource.jpg')] bg-cover bg-center rounded-lg relative cursor-pointer">
              <div className="absolute bottom-0 w-[90%] bg-[#152e44]/80 backdrop-blur-md rounded-t-lg">
                <p className="text-white text-xl font-semibold px-5 py-3">
                  2. We Source & Screen Talent
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="h-96 w-80 bg-[url('/Servicepage/2.Deploy.jpg')] bg-cover bg-center rounded-lg relative cursor-pointer">
              <div className="absolute bottom-0 w-[90%] bg-[#152e44]/80 backdrop-blur-md rounded-t-lg">
                <p className="text-white text-xl font-semibold px-5 py-3">
                  3. Deploy & Support
                </p>
              </div>
            </div>
          </Reveal>
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
            <Reveal width={null} className="w-full lg:w-fit">
              <div
                id="manpower-supply"
                className="bg-[url('/Homepage/3.ManPowerSupply.png')] bg-gray-200 bg-cover bg-center bg-no-repeat w-full lg:w-[390px] gap-y-5 h-60 rounded-xl relative "
                onClick={handlefirstOpen}
              >
                <div className="bg-gray-800 absolute w-[90%] min-h-10 bottom-1 rounded-t-xl">
                  <h1 className="text-xl lg:text-3xl text-white font-semibold p-2">
                    Manpower Supply
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
              <DialogHeader>Manpower Supply</DialogHeader>
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

            <Reveal width={null} className="w-full lg:w-fit">
              <div
                id="overseas-requirement"
                className="bg-[url('/Homepage/3.OvearseasRequirement.jpg')] bg-gray-200 bg-cover bg-center bg-no-repeat w-full lg:w-[390px] gap-y-5 h-60 rounded-xl relative"
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
            <Reveal width={null} className="w-full lg:w-fit">
              <div
                id="contract-staffing"
                className="bg-[url('/Homepage/3.Temporaryandcontractstaffing.jpg')] bg-gray-200  bg-cover bg-center bg-no-repeat w-full lg:w-[390px] gap-y-5 h-60 rounded-xl relative"
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

            <Reveal width={null} className="w-full lg:w-fit">
              <div
                id="client-support"
                className="bg-[url('/Homepage/3.Clientsandcandidatessupport.jpg')] bg-gray-200 bg-cover bg-center bg-no-repeat w-full lg:w-[390px] gap-y-5 h-60 rounded-xl relative"
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
              open={Fourthopen}
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
      </section>

      {/* ================= QUALITY GUARANTEE ================= */}
      <section className="bg-blue-50 min-h-screen px-10 py-10 lg:px-28 lg:py-20 flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2">
          <h1 className="text-3xl lg:text-6xl">
            The <span className="text-blue-800">PrimeLink</span>
            <br />
            Quality Guarantee
          </h1>

          <p className="text-lg mt-5">
            Our promise: reliable talent, smooth service, and trusted staffing
            every time.
          </p>

          {/* CARD 1 */}
          <div className="bg-white rounded-lg flex gap-5 px-6 py-4 mt-6">
            <div className="h-16 w-14 bg-[url('/Servicepage/4.Quality.jpg')] bg-cover bg-center" />
            <div>
              <h3 className="text-xl font-semibold">Quality You Can Trust</h3>
              <p>Every candidate is evaluated to meet industry standards.</p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-lg flex gap-5 px-6 py-4 mt-4">
            <div className="h-16 w-14 bg-[url('/Servicepage/4.Service.jpg')] bg-cover bg-center" />
            <div>
              <h3 className="text-xl font-semibold">Reliable Service</h3>
              <p>On-time deployment and consistent workforce management.</p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-lg flex gap-5 px-6 py-4 mt-4">
            <div className="h-16 w-14 bg-[url('/Servicepage/4.Support.jpg')] bg-cover bg-center" />
            <div>
              <h3 className="text-xl font-semibold">Ongoing Support</h3>
              <p>Continuous assistance even after deployment.</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 h-[70vh] bg-[url('/Servicepage/5.Qualitygurantee.jpg')] bg-cover bg-center bg-no-repeat" />
      </section>

      {/* ================= FAQ ================= */}
      <section className="min-h-screen px-10 py-10 lg:px-28 lg:py-20">
        <div className="flex flex-col items-center gap-y-4">
          <p className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-full">
            FAQ's
          </p>

          <h2 className="font-semibold text-3xl lg:text-4xl text-center">
            Frequently Asked Questions
          </h2>

          <p className="text-center mb-10">
            All you need to know before needing a service
          </p>

          <div className="w-full max-w-3xl bg-white rounded-lg p-6 shadow-xl">
            <div className="space-y-4">
              {[
                {
                  id: 1,
                  question: "What types of services do you offer?",
                  answer:
                    "We offer comprehensive staffing solutions including permanent recruitment, temporary staffing, contract labor, and specialized workforce management across various industries.",
                },
                {
                  id: 2,
                  question: "Do you provide temporary staffing?",
                  answer:
                    "Yes, we specialize in providing flexible temporary staffing solutions to help businesses manage peak workloads, seasonal demands, or short-term projects efficiently.",
                },
                {
                  id: 3,
                  question: "How do you ensure candidate quality?",
                  answer:
                    "We employ a rigorous screening process that includes background checks, skills testing, and behavioral interviews to ensure we only present the most qualified candidates.",
                },
                {
                  id: 4,
                  question: "Can you handle large-volume recruitment?",
                  answer:
                    "Absolutely. Our team is equipped to manage large-scale recruitment drives, ensuring you get the required number of qualified personnel within your specified timeline.",
                },
                {
                  id: 5,
                  question: "What industries do you specialize in?",
                  answer:
                    "We have deep expertise in construction, manufacturing, logistics, warehousing, and IT, allowing us to understand and meet the specific needs of these sectors.",
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

      <Footer />
    </>
  );
}

export default Servicepage;
