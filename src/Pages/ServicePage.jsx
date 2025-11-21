import React from "react";
import StickyNavbar from "../components/StickyNavbar.jsx";
import Footer from "../components/footer.jsx";

function ServicePage() {
  return (
    <>
      {/* Section - 1  */}
      <section className="bg-[url('Servicepage/1.ServicePage.jpg')]  bg-cover bg-center bg-no-repeat lg:h-screen w-full text-white h-fit py-5">
        <StickyNavbar />
        <div className="flex flex-col w-full items-center gap-y-3 justify-center lg:h-[80%] h-fit">
          <p className="bg-white text-black w-fit px-4 py-2 rounded-4xl my-5">
            Services
          </p>

          <div className="font-semibold lg:text-6xl text-3xl text-center">
            <p className="lg:leading-14 relative">
              Quality Manpower Support for <br /> Diverse
              <span className="text-blue-800 w-1/3"> Service Needs</span> <br />
            </p>
            <img
              src="/line.svg"
              alt=""
              className="lg:block absolute hidden w-92  lg:right-[30%] right-[10%]"
            />
          </div>

          <p className="text-center">
            We make hiring-simple, fast and efficient. Our team connects
            companies with skilled, verified talent across multiple industries{" "}
            <br />
            delivering the right people exactly when you need them.
          </p>
        </div>
      </section>

      {/* Section - 2 */}
      <section className="bg-blue-50 w-full min-h-screen lg:px-30 lg:py-20 px-10 py-5">
        <div className="lg:flex">
          <div className=" lg:text-4xl text-2xl font-semibold lg:w-1/2 relative">
            <p className="lg:text-5xl">
              How Our Staffing <br /> Process{" "}
              <span className="text-blue-800">Really Works ?</span>
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

        {/* Card */}
        <div className="flex justify-around gap-x-10">
          <div className="grid lg:grid-cols-3 grid-cols-1 items-center gap-y-10 mt-10 gap-x-10">
            <div className="h-90 w-70 bg-[url('Servicepage/2.share.jpg')]  bg-cover bg-center bg-no-repeat rounded-lg relative">
              <div className="absolute min-h-15 w-[90%] bottom-0 rounded-t-lg backdrop-blur-lg bg-[#152e44]">
                <p className="text-white font-semibold text-xl w-[80%] px-5">
                  1.Share Your Requirements
                </p>
              </div>
            </div>
            <div className="h-90 w-70 bg-[url('Servicepage/2.WeSource.jpg')]  bg-cover bg-center bg-no-repeat rounded-lg relative">
              <div className="absolute min-h-15 w-[90%] bottom-0 rounded-t-lg backdrop-blur-lg bg-[#152e44]">
                <p className="text-white font-semibold text-xl w-[80%] px-5">
                  2.We source & screen Talent
                </p>
              </div>
            </div>
            <div className="h-90 w-70 bg-[url('Servicepage/2.Deploy.jpg')]  bg-cover bg-center bg-no-repeat rounded-lg relative">
              <div className="absolute min-h-15 w-[90%] bottom-0 rounded-t-lg backdrop-blur-lg bg-[#152e44]">
                <p className="text-white font-semibold text-xl w-[80%] px-5">
                  3.Deploy & Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* what we do */}
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
            <div className="bg-[url('Homepage/3.Temporaryandcontractstaffing.jpg')]  bg-cover bg-center bg-no-repeat lg:w-[390px] gap-y-5 h-60 rounded-xl relative">
              <div className="bg-gray-800 absolute  w-[90%] min-h-10 bottom-1 rounded-t-xl ">
                <h1 className="text-xl lg:text-3xl text-white font-semibold p-2">
                  Temorary and Contract Staffing
                </h1>
              </div>
            </div>
            <div className="bg-[url('Homepage/3.Clientsandcandidatessupport.jpg')] bg-cover bg-center bg-no-repeat lg:w-[390px] gap-y-5 h-60 rounded-xl relative">
              <div className="bg-gray-800 absolute  w-[90%] min-h-10 bottom-1 rounded-t-xl ">
                <h1 className="text-xl lg:text-3xl text-white font-semibold p-2">
                  Client and Candidates Support
                </h1>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Guarantee */}
      <section className="w-full min-h-screen ">
        <div className="bg-blue-50 w-full min-h-[80vh] lg:px-30 lg:py-20 px-10 py-5 my-auto flex flex-col lg:flex-row items-center justify-around">
          <div className="lg:w-1/2">
            <div className="">
              <h1 className="lg:text-6xl text-3xl">
                The <span className="text-blue-800">PrimeLink</span>
                <br /> Quality Guarantee
              </h1>
              <p className="text-lg mt-5">
                Our promise: reliable talent,smooth service and trusted staffing
                every time
              </p>
            </div>
            <div className="">
              <div className="min-h-20 px-6 py-4 mt-4 bg-white rounded-lg flex items-center gap-5">
                <div className="bg-[url('Servicepage/4.Quality.jpg')] h-15 w-40 lg:w-20 bg-cover bg-center bg-no-repeat"></div>
                <div className="">
                <h1 className="lg:text-2xl text-lg font-semibold">Quality You Can Trust</h1>
                <p>Every candidate is carefully evaluated to ensure they meet industry standards and perform with reliablity</p>
                </div>
              </div>
              <div className="min-h-20 px-6 py-4 mt-4 bg-white rounded-lg flex items-center gap-5">
                <div className="bg-[url('Servicepage/4.Service.jpg')] h-15 w-40 lg:w-20 bg-cover bg-center bg-no-repeat"></div>
                <div className="">
                <h1 className="lg:text-2xl text-lg font-semibold">Quality You Can Trust</h1>
                <p>Every candidate is carefully evaluated to ensure they meet industry standards and perform with reliablity</p>
                </div>
              </div>
              <div className="min-h-20 px-6 py-4 mt-4 bg-white rounded-lg flex items-center gap-5">
               <div className="bg-[url('Servicepage/4.Support.jpg')] h-15 w-40 lg:w-20 bg-cover bg-center bg-no-repeat"></div>
               <div className="">
                <h1 className="lg:text-2xl text-lg font-semibold">Quality You Can Trust</h1>
                <p>Every candidate is carefully evaluated to ensure they meet industry standards and perform with reliablity</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[url('Servicepage/5.Qualitygurantee.jpg')]  bg-cover bg-center bg-no-repeat h-[70vh] lg:w-[45%] w-full"></div>
        </div>
      </section>

      {/* FAQ */}
      <section className=" w-full min-h-screen lg:px-30 lg:py-20 px-10 py-5">
        <div className="flex flex-col w-full items-center gap-y-3">
          <p className="bg-white text-blue-600 font-semibold w-fit px-4 py-2 rounded-4xl my-3">
            FAQ's
          </p>

          <div className="font-semibold lg:text-4xl text-3xl text-center lg:w-1/2">
            <p className="leading-10">
              Frequently Asked Question
            </p>
          </div>

          <p className="text-center">
            All you need to know before a needed a service
          </p>
        </div>

      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default ServicePage;
