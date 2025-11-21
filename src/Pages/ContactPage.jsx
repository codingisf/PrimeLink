import React from "react";
import StickyNavbar from "../components/StickyNavbar.jsx";
import Footer from "../components/footer.jsx";


function ContactPage() {
  return (
    <>
        {/* Section - 1  */}
      <section className="bg-[url('/Contactus/Contactus.jpg')] bg-cover bg-center lg:h-[80vh] w-full text-white h-fit py-5">
        <StickyNavbar />
        <div className="flex flex-col w-full items-center gap-y-3 justify-center lg:h-[80%] h-fit">
          <p className="bg-white text-black w-fit px-4 py-2 rounded-4xl my-8 lg:my-3">
            Contact us
          </p>

          <div className="font-semibold lg:text-6xl text-3xl text-center relative">
            <p className="lg:leading-14">
              speak with us today to hire <br />
              <span className="text-blue-600 w-1/3"> skilled professionals.</span>
            </p>
            <img
              src="/line.svg"
              alt=""
              className="lg:block absolute hidden w-96  lg:right-[15%] right-[10%]"
            />
          </div>

          <p className="text-center">
            we make hiring simple ,fast , and efficient. Our team connects companies with solid, verified across multiple industries <br /> delivering the right people exactly when you need them.
          </p>
        </div>
      </section>

       {/* Company logos */}
      <div className="flex justify-center">
            <div className="bg-white rounded-xl w-[90%] h-fit flex justify-around  text-gray-700 py-1 px-2">
              <div className="lg:flex justify-around w-1/2">
                <div className="lg:w-[30%]">
                  <p className="lg:text-6xl text-3xl font-bold mb-5">5+</p>
                  <p className="lg:text-lg mb-3">Experienced manpower support</p>
                </div>
                <div className="lg:w-[30%]">
                  <p className="lg:text-6xl text-3xl font-bold mb-5">200+</p>
                  <p className="lg:text-lg  mb-3">Trusted industry partner</p>
                </div>
              </div>

              <div className="lg:flex justify-around w-1/2">
                <div className="lg:w-[30%]">
                  <p className="lg:text-6xl text-3xl font-bold mb-5">10k+</p>
                  <p className="lg:text-lg  mb-3">People has landed a job abroad</p>
                </div>
                <div className="lg:w-[30%]">
                  <p className="lg:text-6xl text-3xl font-bold mb-5">100%</p>
                  <p className="lg:text-lg  mb-3">Getting into a job Assurance</p>
                </div>
              </div>
            </div>
          </div>
    
    {/* Contact us */}
    <section className="bg-blue-50 w-full min-h-screen lg:px-30 lg:py-20 px-10 py-5">
    <p className="bg-gray-200 w-fit px-4 py-2 rounded-4xl my-5">Contact us</p>
        <div className="">
          <div className="lg:text-4xl text-2xl font-semibold">
            <p className="lg:text-5xl lg:w-[60%]">
              Raech out now and connect with out
              <span className="relative text-blue-600"> manpower experts.</span>
              <img
                src="/line.svg"
                alt=""
                className="absolute lg:w-76 w-45 lg:right-[65%] right-[35%] lg:mt-2"
              />
            </p>
          </div>
          <div className="lg:w-1/2 mt-10">
            <p className="lg:text-lg text-md mb-5">
              Have a hiring need or looking for skilled manpower? Reach out to us we'er here to provide fast, reliable support for every requirement.
            </p>
          </div>
        </div>


        {/* Contact form and map */}
        <section className="flex flex-col lg:flex-row lg:gap-x-40 w-full gap-y-20">


          <div className="lg:w-1/2">
          <p className="text-lg lg:text-xl">Let's Talk About Their Services</p>
          <div className="border border-gray-300 px-5 py-3 rounded mt-5">
            <p className="w-full">Name</p>
            <input type="text" placeholder="Your Name" className="border border-gray-300 w-full p-1 bg-white rounded my-2 focus:outline-none"/>
            <p className="w-full">Email Address</p>
            <input type="text" placeholder="Your Email Address" className="border border-gray-300 w-full p-1 bg-white rounded my-2 focus:outline-none"/>
            <p className="w-full">Company</p>
            <input type="text" placeholder="Your Company" className="border border-gray-300 w-full p-1 bg-white rounded my-2 focus:outline-none"/>
            <p className="w-full">Service</p>
            <input type="text" placeholder="Your Service" className="border border-gray-300 w-full p-1 bg-white rounded my-2 focus:outline-none"/>
            <p className="w-full">Message</p>
            <textarea placeholder="Your Message get's here" className="border border-gray-300 w-full p-1 bg-white rounded my-2 focus:outline-none"/>

            <button className="px-6 py-3 w-full border border-[#152e44] text-white hover:cursor-pointer hover:text-black bg-[#152e44] rounded-lg font-semibold transition-colors hover:bg-transparent">
              Send a Message
            </button>
          </div>
          </div>

          <div className="lg:w-1/2">
          <p className="text-lg lg:text-xl">Let's Talk About Their Services</p>
          <div className="flex items-center py-2">
            <p>📞</p>
            <p>+91 9876543210</p>
          </div>
          <div className="flex items-center py-2">
            <p>📧</p>
            <p>hello@gmail.com</p>
          </div>
          <div className="flex items-center py-2">
            <p>📍</p>
            <p>Nagapattinam , tamilnadu , india</p>
          </div>

          {/* map */}
          <div className="w-full h-1/2 mt-5">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62710.64003090368!2d79.78144605405865!3d10.779492928436518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a556c9797ef6927%3A0xc869efbb726e6072!2sNagapattinam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1763712874855!5m2!1sen!2sin"
    className="w-full h-full border-0 rounded-xl"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

          </div>
        </section>

    </section>

    {/* Footer */}
    <Footer/>
    </>
  )
}

export default ContactPage
