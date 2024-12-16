/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "../App.css";

const Section6 = () => {
  return (
    <React.Fragment>
      {/* first part */}
      <div className=" overflow-hidden">{/* app-container */}
       {/*  <div className="grid-background"></div> {/* Grid background */}
        <div className="content flex w-full">
          <div className="w-1/3 p-6">
            <strong className="text-xl font-bold">20+</strong>
            <br />
            <strong className="text-lg">Years Experienced</strong>
            <div className="my-2">
              <div className="h-[1px] w-full rounded-full bg-zinc-900"></div>
            </div>
            <p className="mt-2 text-sm">
              With over 20 years of experience, Logistics & Transportation
              Solution is a trusted leader in the logistics and transportation
              industry, offering comprehensive and tailored solutions...
            </p>
          </div>
          <div className="w-2/3 p-6">
            <h2 className="text-2xl font-semibold">
              Logistics & Transportation Solutions
            </h2>
            <p className="mt-4 text-base">
              Here you can add more details about your logistics and
              transportation solutions. Provide your content here, explaining
              the services you offer, their benefits, and why you're a trusted
              leader in the industry.
            </p>
          </div>
        </div>
        {/* second part */}
        <div className="flex">
          <div className="w-1/3 p-6">
            <strong className="text-xl font-bold">Process</strong>
          </div>
          <div className="w-2/3 p-6">
            <p>
              Logistics And transport Solutions is your dependable partner for
              all your logistics and transportation needs. With our rich
              experience, comprehensive service offerings, and unwavering
              dedication to customer satisfaction, we ensure that your goals are
              transporated efficiently, safely, and on time. trust us to
              optimize your supply chain and drive your business forward.
            </p>
          </div>
        </div>
        {/* thrid part */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center py-16 border-t border-b px-4">
          <Stat title="Delivered Items" value="323k" />
          <Stat title="Reviews" value="210k" />
          <Stat title="Happy Clients" value="1245" />
          <Stat title="Total Store" value="45,875" />
        </section>
        {/* Forth part */}
        <div className="font-sans max-w-[1300px] mx-auto">
          <section className="text-center py-16 px-4">
            <h2 className="text-5xl font-bold text-blue-600">Our Latest</h2>
            <h2 className="text-5xl font-bold text-blue-600">News & Blogs</h2>
          </section>
          <section className=" max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-8 py-16 px-4">
            <Blog
              date="05 June 2024"
              title="The Car Industry Squirms, As It Gets As What It Asked For Done."
              /* imgSrc="https://placehold.co/600x400" */
              imgSrc="/images/sunsetview.jpg"
              description="It reflects a period of significant change, where the industry faces the very innovations and shifts it has long pursued. Whether it's the push for electric vehicles, autonomous driving technology, or sustainable manufacturing practices, this tagline..."
            />
            <Blog
              date="05 May 2024"
              title="Green logistics and sustainable transport solutions"
              imgSrc="/images/parking.jpg"
              description="At the forefront of eco-friendly innovation, our company is dedicated to revolutionizing the logistics industry with green logistics and sustainable transport solutions. Our approach prioritizes environmental responsibility, efficiency, and forward..."
            />
          </section>
          <section className="text-center py-16 px-4">
            <blockquote className="text-4xl font-bold text-blue-600">
              <i className="fas fa-quote-left"></i>
              <p className="inline-block mx-4">What Our Customer Says</p>
              <i className="fas fa-quote-right"></i>
            </blockquote>
            <p className="mt-4 text-lg max-w-2xl mx-auto">
              Our modern and user-friendly website serves as a comprehensive hub
              for all your logistics needs, providing you with the tools and
              information necessary to manage your supply chain with ease.
            </p>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};

// Stat Component
const Stat = ({ title, value }) => (
  <div>
    <h2 className="text-4xl font-bold text-blue-600">{value}</h2>
    <p className="mt-2 text-lg">{title}</p>
  </div>
);

// Blog Component
const Blog = ({ date, title, imgSrc, description }) => (
  <div className="p-4">
    <p className="text-sm text-gray-500">{date}</p>
    <h3 className="text-2xl font-bold mt-2 text-blue-600">{title}</h3>
    <img src={imgSrc} alt={title} className="mt-4 w-full h-auto" />
    <p className="mt-4 text-lg">{description}</p>
  </div>
);

export default Section6;
