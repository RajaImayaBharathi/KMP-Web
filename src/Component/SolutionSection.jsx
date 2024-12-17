import React from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const SolutionSection = () => {
  const cards = [
    {
      title: "Domistic Speed Parcel Solutions",
      description:
        "Fast and reliable delivery within your city or region. Same-day or next-day delivery with real-time tracking ensures your parcels reach on time.",
      link: "/",
      image: "/images/Frame_14613-removebg-preview.png",
    },
    {
      title: "Interstate Speed Shipping Solutions",
      description:
        "Quick and efficient parcel delivery across states. Enjoy real-time tracking and reliable shipping for documents and goods.",
      link: "/",
      image: "/images/image-removebg-preview.png",
    },
    {
      title: "Warehousing and Storage Solutions",
      description:
        "Secure and scalable storage for your inventory needs. Flexible options with advanced technology for efficient management.",
      link: "/",
      image: "/images/warehousing-removebg-preview.png",
    },
    {
      title: "Logistics And transportation Solution",
      description:
        "Comprehensive logistics solutions for efficient supply chain management. From pickup to delivery, we handle it all.",
      link: "/",
      image: "/images/truck-fleet-cost-management-concept.png",
    },
  ];

  return (
    <React.Fragment>
      <section className="my-16 font-manrope">
        <div className="sm:flex justify-between items-center">
          <div className="flex items-center">
            <strong className="sm:text-[45px] text-[35px] text-blue-900">
              Solutions
            </strong>
            <button className="py-1 px-3 border border-blue-900 text-blue-900 hover:text-white hover:bg-blue-900 transition-all duration-300 ml-6 mt-2 sm:text-[16px] text-[12px] font-bellota">
              See All
            </button>
          </div>
          <div className="space-x-2 sm:mt-2 mt-4">
            <button className="py-1 px-3 border hover:bg-blue-900 transition-all duration-300 hover:text-white border-blue-900">
              <IoIosArrowRoundBack />
            </button>
            <button className="py-1 px-3 border text-white bg-blue-900">
              {/* bg-[#1e1e1e] */}
              <IoIosArrowRoundForward />
            </button>
          </div>
        </div>

        <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4 sm:mt-14 mt-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-5 border border-blue-900 rounded shadow-sm bg-white hover:bg-blue-900 text-blue-900 hover:text-white hover:-translate-y-1.5 hover:shadow-md transition-all duration-300"
            >
              <div className="">
                <div className="flex items-center justify-center w-26 h-20 mb-6 rounded-full bg-white shadow-md text-blue-900 border">
                  <img
                    src={card.image}
                    alt=""
                    className="w-28 rounded-md my-3"
                  />
                </div>
                <h6 className="mb-4 font-semibold leading-5 ">{card.title}</h6>
                <p className="mb-3 text-sm font-bellota">{card.description}</p>
              </div>
              <a
                href={card.link}
                className="flex items-center font-semibold mt-3"
              >
                <p className="bellota">Explore more </p>
                <IoIosArrowRoundForward className="mt-1 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
};

export default SolutionSection;
