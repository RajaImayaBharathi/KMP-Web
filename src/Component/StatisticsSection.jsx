/* eslint-disable react/prop-types */
import React from "react";

const StatisticBlock = ({ number, label }) => (
  <div className="text-center">
    <h1 className="text-4xl font-bold">{number}</h1>
    <p className="text-gray-600">{label}</p>
  </div>
);

const StatisticsSection = () => {
  return (
    <React.Fragment>
      <section className="flex justify-center items-center h-screen">
        <div className="flex justify-between w-full max-w-4xl px-4">
          <StatisticBlock number="323k" label="Delivered Items" />
          <StatisticBlock number="210k" label="Reviews" />
          <StatisticBlock number="1245" label="Happy Clients" />
          <StatisticBlock number="45,875" label="Total Store" />
        </div>
      </section>
    </React.Fragment>
  );
};

export default StatisticsSection;
