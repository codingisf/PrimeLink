import React from "react";
import StickyNavbar from "../components/StickyNavbar.jsx";
import Footer from "../components/footer.jsx";

function AboutPage() {
  return (
    <>
    
      {/* Section - 1  */}
      <section className="bg-[url('/Aboutus/1Aboutus.jpg')]  bg-cover bg-center bg-no-repeat lg:h-screen w-full text-white h-fit py-5">
        <StickyNavbar />
        <div className="flex flex-col w-full items-center gap-y-3 justify-center lg:h-[80%] h-fit">
          <p className="bg-white text-black w-fit px-4 py-2 rounded-4xl my-5">
            About us
          </p>

          <div className="font-semibold lg:text-6xl text-3xl text-center">
            <p className="lg:leading-14">
              Connecting Businesses with <br />
              <span className="text-blue-500 w-1/3">Trusted Manpower</span>{" "}
              <br />
              for Every Role
            </p>
          </div>

          <p className="text-center">
            We provide fast , flexiable manpower for your businesses. Our
            skilled worker help <br />
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
            <p className="lg:text-5xl">
              The story of our beginning where <br />
              <span className="relative">passion met opportunity</span>
              <img
                src="/line.svg"
                alt=""
                className="absolute lg:w-76 w-35 lg:right-[55%] right-[30%] mt-2"
              />
            </p>
          </div>
          <div className="lg:w-1/2 mt-10">
            <p className="lg:text-lg text-md mb-5">
              we make hiring simple ,fast , and efficient. Our team connects
              companies with solid, verified across multiple industries
              delivering the right people exactly when you need them.
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-around mt-10 gap-y-10">
          {/* card-1 */}
          <div className="max-w-98 bg-white  px-6 border-2 border-gray-300 rounded-xl py-4">
            <div className="flex gap-4 items-center">
              <div className="logo rounded-full w-15 h-15 bg-[url('/Aboutus/2.Mission.jpg')] bg-cover bg-center bg-no-repeat"></div>
              <h1 className="text-3xl font-semibold">Mission</h1>
            </div>
            <p className="mt-4">
              We aim to deliver reliable, skilled manpower tha helips businesses
              work smarter and grow faster. Our mission is to provide seamless
              staffing support.
            </p>
          </div>

          {/* card-2 */}
          <div className="max-w-98 bg-white bg-cover px-6 border-2 border-gray-300 rounded-xl py-4">
            <div className="flex gap-4 items-center">
              <div className="logo rounded-full w-15 h-15  bg-[url('/Aboutus/2.values.jpg')] bg-cover bg-center bg-no-repeat"></div>
              <h1 className="text-3xl font-semibold">Vision</h1>
            </div>
            <p className="mt-4">
              To become the most trusted manpower partner for industries
              worldwide. We wnvision a future where hiring is simple,efficient,
              and accessible for all.
            </p>
          </div>

          {/* card-3 */}
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
        </div>
      </section>

      {/* Image or section-3 */}
      <section className="bg-blue-50 w-full min-h-screen lg:px-30 lg:py-20 px-10 py-5 text-white flex items-center">
        <div className="bg-[url('/Aboutus/3.whychooseus.jpg')]  bg-cover bg-center bg-no-repeat h-[60vh] w-full mx-auto flex lg:flex-row flex-col justify-around items-center">
          <div className="lg:w-1/2">
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
            <div className="w-[80%] h-18 mt-5 rounded-xl bg-white"></div>
          </div>
          <div className="h-80 w-80 bg-white rounded-lg"></div>
        </div>
      </section>

      {/* section - 4 */}
      <section className="bg-blue-50 w-full min-h-screen lg:px-30 lg:py-20 px-10 py-5 relative">
        <div className="lg:flex items-center">
          <div className=" lg:text-4xl text-2xl font-semibold lg:w-1/2 relative">
            <p className="lg:text-5xl">
              Achievements made <br /> possible with
              <span className="text-blue-800"> PrimeLink</span>
            </p>
            <img
              src="/line.svg"
              alt=""
              className="absolute lg:w-70 w-35 lg:right-[18%] right-[26%]"
            />
          </div>
          <div className="lg:w-1/2 mt-5">
            <p className="lg:text-xl text-lg mb-5">
              we make hiring simple ,fast , and efficient. Our team connects
              companies with solid, verified across multiple industries
              delivering the right people exactly when you need them.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-20 flex-col mx-auto items-center">
          <div className="bg-white rounded-xl w-[90%] h-fit absolute mt-26 flex justify-around  text-gray-700 py-1 px-2">
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
                  People has landed a job abroad
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

      {/* People */}
      <section className="bg-blue-50 w-full min-h-screen lg:px-30 lg:py-20 px-10 py-5">
        <div className="flex flex-col w-full items-center gap-y-3">
          <p className="bg-gray-200 w-fit px-4 py-2 rounded-4xl my-5">People</p>

          <div className="font-semibold lg:text-4xl text-3xl text-center lg:w-1/2">
            <p className="leading-10">
              The Creators Behind the
              <br />
              <span className="text-blue-800 w-1/3">
                PrimeLink Mission
              </span>{" "}
            </p>
          </div>

          <p className="text-center">
            A dedicated team working together to build smarter staffing solutions.
          </p>
        </div>

        {/* Card */}
        <div className="flex justify-around gap-x-10">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-y-10 mt-10 gap-x-10">
            <div className="h-90 w-70 bg-blue-400 rounded-lg relative">
              <div className="absolute min-h-15 w-full bottom-0 rounded-lg backdrop-blur-lg bg-white/10">
                <p className="text-white font-semibold text-xl w-[80%] px-5">
                  lorem founder
                </p>
              </div>
            </div>
            <div className="h-90 w-70 bg-blue-400 rounded-lg relative">
              <div className="absolute min-h-15 w-full bottom-0 rounded-lg backdrop-blur-lg bg-white/10">
                <p className="text-white font-semibold text-xl w-[80%] px-5">
                  co-founder
                </p>
              </div>
            </div>
            <div className="h-90 w-70 bg-blue-400 rounded-lg relative">
              <div className="absolute min-h-15 w-full bottom-0 rounded-lg backdrop-blur-lg bg-white/10">
                <p className="text-white font-semibold text-xl w-[80%] px-5">
                 ceo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Looking to hire the right */}
      <section className="w-full min-h-screen">
        <div className="h-[80vh] w-full bg-[url('/Aboutus/4.contactnow.jpg')]  bg-cover bg-center bg-no-repeat text-white flex flex-col justify-center items-center text-center gap-y-5">
          <p className="text-lg bg-white/10 backdrop-blur-xl rounded-full px-4 py-2">Looking to hire the right</p>
          <h1 className="lg:text-6xl">
            Trusted support for providing consistent , <br /> skilled manpower solutions.
          </h1>
          <button className="px-6 py-3 border border-[#152e44] text-white hover:cursor-pointer bg-[#152e44] rounded-lg font-semibold transition-colors hover:bg-transparent">
              Contact Now!
            </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default AboutPage;
