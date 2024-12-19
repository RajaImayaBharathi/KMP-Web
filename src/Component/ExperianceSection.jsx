import React from "react";
const headingClass =
  "lg:text-[80px] md:text[75px] sm:text-[55px] text-[45px] text-blue-900 font-bold ";/* md:text-right */

const ExperianceSection = () => {
  return (
    <React.Fragment>
      <section className="md:flex w-full mb-10 justify-center items-center font-manrope">
        <div className="flex flex-col md:w-1/3 ">
          <strong className="lg:text-[150px] md:text-[130px] text-[95px] text-blue-900 font-bold">
            20+
          </strong>
          <strong className="sm:text-[25px] text-[15px] text-blue-900">
            Years Experienced
          </strong>
          <div className="my-2">
            <div className="h-[1px] w-full rounded-full bg-zinc-900"></div>
          </div>
          <p className="mt-2 text-sm font-bellota text-blue-900">
            With over 20 years of experience, KMP Logistics & Transportation
            Solution is a trusted leader in the logistics and transportation
            industry, offering comprehensive and tailored solutions.
          </p>
        </div>
        <div className="md:ml-20 md:w-2/3 mt-6 md:mt-0">
          <h2 className={headingClass}>Logistics & Transportation Solutions</h2>
        </div>
      </section>

      <div className="my-2">
        <div className="h-[1px] w-full rounded-full bg-zinc-900"></div>
      </div>

      <section className="md:flex w-full mb-20 justify-center items-center font-manrope">
        <div className="flex flex-col md:w-1/3">
          <strong className={headingClass}>Process</strong>
        </div>
        <div className="md:ml-20 md:w-2/3 ">
          <p className="mt-2 text-sm font-bellota text-blue-900">
            KMP Speed Parcel Service is your dependable partner for all your Speed Parcel Serves, Logistics and Transportion needs. With our rich experience, comprehensive service offerings, and unwavering dedication to customer satisfaction, we ensure that your goods are transported efficiently, safely, and on time. trust us to optimize you supply chain and drive your busniess forward.
          </p>
        </div>
      </section>
    </React.Fragment> 
  );
};



export default ExperianceSection;
