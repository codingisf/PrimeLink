import React from "react";

function footer() {
  return (
    <div className="min-h-120 max-w-screen bg-blue-950 px-10 py-5 lg:px-30 lg:py-10 text-white">
     
      <div className="flex justify-around lg:flex-row flex-col">
        <div className="lg:w-[40%] text-start">
          <img src="/logo.svg" alt="" className="lg:h-40 lg:w-40 h-20 w-40" />
          <p className="lg:text-5xl text-3xl font-semibold">Prime Link</p>
          <p className="text-xl">MANPOWER & STAFFING</p>
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
        </div>
        <div className="flex gap-x-15 mt-5">
            <ul className="list-none">
                <li className="font-bold text-lg">Platform</li>
                <li className="py-1">Home</li>
                <li className="py-1">Service</li>
                <li className="py-1">About us</li>
                <li className="py-1">Contact us</li>
            </ul>
            <ul className="list-none">
                <li className="font-bold text-lg">Services</li>
                <li className="py-1">Manpower supply</li>
                <li className="py-1">overseas requirment</li>
                <li className="py-1">Temorary and contact staffing</li>
                <li className="py-1">Clients & candidate support</li>
            </ul>
            <ul className="list-none">
                <li className="font-bold text-lg">Industries</li>
                <li className="py-1">Construction & Engineering</li>
                <li className="py-1">Oil & gas industry</li>
                <li className="py-1">Healthcare and medical</li>
                <li className="py-1">Hospitality services</li>
            </ul>
        </div>
      </div>

      <div className="flex justify-around mt-10 items-center lg:flex-row flex-col gap-y-5">
        <div className="">@ 2025 Primelink Manpower Agencies. All rights reserved. <br />| privacy policy | Terms of Service |</div>
        <div className="flex flex-row gap-x-4"> 
            <p className="">FB</p>
            <p className="">Ln</p>
            <p className="">IN</p>
            <p className="">X</p>
            <p className="">YOU</p>
        </div>
      </div>
    </div>
  );
}

export default footer;
