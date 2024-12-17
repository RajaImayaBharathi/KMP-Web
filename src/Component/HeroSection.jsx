import React from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const HeroSection = () => {
  return (
    <React.Fragment>
      <main className="my-20 sm:space-y-20">
        <section className="sm:flex w-full font-manrope items-center">
          <div className="sm:w-2/3 lg:text-[140px] md:text-[100px] sm:text-[80px] text-[65px] sm:text-left text-center">
            <strong>Transport</strong>
          </div>
          <div className="flex flex-col sm:w-1/3 text-right sm:items-end sm:justify-end items-center justify-center">
            <div>
              <p className="sm:text-right text-center md:pl-5 lg:text-[14px] md:text-[12px] text-[11px]">
                Explore more about KMP in ensuring the efficiency, reliability,
                and sustainability of parcels and supply chains across various
                industries.
              </p>
            </div>
            <button className="inline-flex items-center space-x-2 py-2 px-4 mt-4 bg-blue-900 hover:bg-blue-500 text-white transition-all ease-in-out">
              <p className="text-[12px] lg:text-[16px] md:text-[14px] sm:text-[13px]">
                Explore
              </p>
              <i className="pt-[2px]">
                <IoIosArrowRoundForward />
              </i>
            </button>
          </div>
        </section>

        <section className="flex flex-col sm:flex-row w-full font-manrope items-center sm:items-start justify-center sm:justify-start">
          <div className="flex flex-col sm:w-1/3 order-2 sm:order-1 text-left sm:text-left text-center items-center sm:items-start justify-center sm:justify-start">
            <div>
              <p className="md:pr-5 lg:text-[14px] md:text-[12px] text-[11px]">
                Explore more about KMP in ensuring the efficiency, reliability,
                and sustainability of parcels and supply chains across various
                industries.
              </p>
            </div>
            <div className="space-x-2 sm:mt-2 mt-4">
              <button className="py-1 px-3 border hover:bg-blue-500 transition-all duration-300 hover:text-white border-blue-900 hover:border-blue-500">
                <IoIosArrowRoundBack />
              </button>
              <button className="py-1 px-3 border text-white bg-blue-900 hover:bg-blue-500 transition-all ease-in-out">
                <IoIosArrowRoundForward />
              </button>
            </div>
          </div>
          <div className="sm:w-2/3 order-1 sm:order-2 w-[200px] lg:text-[118px] md:text-[86px] sm:text-[75px] text-[65px] text-center flex items-center justify-center sm:items-end sm:justify-end">
            <strong>& Logistics</strong>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default HeroSection;
