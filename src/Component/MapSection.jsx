/* eslint-disable react/no-unescaped-entities */
import React from "react";

const MapSection = () => {
  return (
    <React.Fragment>
      <main className="py-16 font-manrope">
        <section className="pb-16">
          <strong className="sm:text-[45px] text-[35px] text-blue-900">
            Explore Our
          </strong>
          <br />
          <strong className="sm:text-[45px] text-[35px] text-blue-900 pl-5">
            Nearest Branches
          </strong>
        </section>

        <section
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px 0",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3916.0373333668317!2d77.02668862425838!3d11.035825895474158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDAyJzE2LjAiTiA3N8KwMDEnNDIuMyJF!5e0!3m2!1sen!2sin!4v1734378759165!5m2!1sen!2sin"
            width="100%"
            height="450"
            loading="lazy"
            className="rounded-md"
          ></iframe>
        </section>

        <section className="text-center my-8">
          <p className="text-lg mb-4">
            Looking for a branch? Can't find what you're looking for on the map?
          </p>
          <button className="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            View Branches with Contact Details
          </button>
        </section>
      </main>
    </React.Fragment>
  );
};

export default MapSection;
