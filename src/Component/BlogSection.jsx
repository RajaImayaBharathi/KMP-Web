/* eslint-disable react/prop-types */
import React from 'react'


const BlogSection = () => {
  return (
    <React.Fragment>
      <section>
      <div className="font-manrope">
          <section className="py-16">
            <strong className="sm:text-[45px] text-[35px] text-blue-900">Explore Our</strong><br />
            <strong className="sm:text-[45px] text-[35px] text-blue-900 pl-5">Stories and Blogs</strong>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Blog
              tags="Delivery Excellence"
              title="Real Stories, Real Speed"
              imgSrc="/images/sunsetview.jpg"
              description="See how we’ve made timely deliveries and built trust with our clients. Our commitment to speed and precision ensures that every package reaches its destination without delay. From small parcels to large shipments, we prioritize accuracy and reliability at every step."
            />
            <Blog
              tags="Holiday Logistics"
              title="Special Festive Deliveries"
              imgSrc="/images/parking.jpg"
              description="Let us handle the logistics while you focus on the celebrations. Our reliable services add convenience and peace of mind to your memorable events. Count on us to deliver joy and smiles, one package at a time."
            />
          </section>
        </div>
      </section>
    </React.Fragment>
  )
}
// Blog Component
const Blog = ({ tags, title, imgSrc, description }) => (
    <div className="p-4">
      <p className="text-sm text-blue-900">{tags}</p>
      <h3 className="text-2xl font-bold mt-2 text-blue-900">{title}</h3>
      <img src={imgSrc} alt={title} className="mt-4 w-full h-auto" />
      <p className="mt-4 text-lg font-bellota text-justify">{description}</p>
    </div>
  );

export default BlogSection
