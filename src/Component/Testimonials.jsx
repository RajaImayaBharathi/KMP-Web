import React from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const Testimonials = () => {
  return (
    <React.Fragment>
      <section className="py-16">
        <h2 className="text-5xl font-bold text-blue-900">Explore Our</h2>
        <h2 className="text-5xl font-bold text-blue-900 ml-12 pt-2">
          Stories and Blogs
        </h2>
        <div className="space-x-2 sm:mt-2 mt-4">
            <button className="py-1 px-3 border hover:bg-blue-900 transition-all duration-300 hover:text-white border-blue-900">
              <IoIosArrowRoundBack />
            </button>
            <button className="py-1 px-3 border text-white bg-blue-900">{/* bg-[#1e1e1e] */}
              <IoIosArrowRoundForward />
            </button>
          </div>
      </section>
    </React.Fragment>
  );
};

export default Testimonials;
