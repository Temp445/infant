"use client";

import React from "react";
import { PiCertificate } from "react-icons/pi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineVerifiedUser } from "react-icons/md";

const CertificationCard = () => {
  return (
    <section className="w-full px-4 z-30 lg:my-10 bg-light-gray">
      <div className=" lg:py-8 lg:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center items-center max-w-7xl mx-auto">

        <div className="flex flex-col items-center justify-center bg-white rounded p-6 border border-silver shadow-lg hover:shadow-2xl transition-all duration-300">
          <PiCertificate className="text-gunmetal text-5xl mb-3" />
          <div className="text-xl sm:text-2xl lg:text-3xl font-oswald mb-2 relative">
            Quality Certification
          </div>
          <p className="text-sm sm:text-base mt-2 leading-snug">
            ISO 9001:2015, IATF 16949:2016, <br className="hidden sm:block" />
            AS9100 D Certified
          </p>
        </div>

        <div className="flex flex-col items-center justify-center bg-white rounded p-6 md:p-5 lg:p-4 xl:p-6 border border-silver shadow-lg hover:shadow-2xl transition-all duration-300">
          <MdOutlineVerifiedUser className="text-industrial-red text-5xl mb-3" />
          <div className="text-xl sm:text-2xl lg:text-3xl font-oswald mb-2 relative">
            OEM Approved
          </div>
          <p className="text-sm  mt-2 leading-snug">
            100 PPM Certified by Hyundai <br />
            Green Vendor: Maruti Suzuki, TATA Motors, Mahindra
          </p>
        </div>

        <div className="flex flex-col items-center justify-center bg-white rounded  p-9 xl:p-8 md:hidden lg:flex border border-silver shadow-lg hover:shadow-2xl transition-all duration-300">
          <FaRegCalendarAlt className="text-gunmetal text-5xl mb-3" />
          <div className="text-xl sm:text-2xl md:text-3xl font-oswald">
            35+
          </div>
          <p className="text-metallic-gray text-sm sm:text-base mt-2">
            Years of Excellence
          </p>
        </div>

      </div>
    </section>
  );
};

export default CertificationCard;
