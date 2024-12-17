import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Devi",
      rating: 4.8,
      image: "/images/testimonial1.jpg",
      feedback:
        "Fast, reliable service. My parcels always arrive on time with accurate tracking updates.",
    },
    {
      name: "Manoj P",
      rating: 4.5,
      image: "/images/testimonial5.png",
      feedback:
        "அவர்கள் வழங்கும் போக்குவரத்து மற்றும் லாஜிஸ்டிக்ஸ் தீர்வுகள் அற்புதம். அவர்கள் எனது சப்ளை சேனுக்கான அனைத்து பணிகளையும் கையாள்ந்தனர், மற்றும் எல்லாம் திட்டமிட்டபடி வந்தது.",
    },

    {
      name: "Arun Kumar",
      rating: 4.8,
      image: "/images/testimonial3.jpg",
      feedback:
        "இந்த உள்ளூர் பார்சல் சேவையுடன் நான் மிகவும் மகிழ்ச்சியடைந்தேன்! எனது பார்சல்கள் நேரத்திற்குள் விநியோகிக்கப்பட்டன மற்றும் நேரடி டிராக்கிங் மூலம் என்னுடைய பர்ஸல்களை பின்தொடர்பது எளிதாக இருந்தது. பர்சல்களின் நிலையை எப்போது வேண்டுமானாலும் பின்தொடர்ந்து பார்க்க முடிந்தது, மேலும் இது எனக்கு மிகவும் உதவியாக இருந்தது. அவர்களின் சேவையின் நம்பகத்தன்மை மற்றும் விரைவான விநியோகம் எனக்கு மிகவும் இஷ்டமானது. நான் இதை மிகவும் பரிந்துரைக்கிறேன்! என் அனுபவம் மிகவும் சிறந்தது. அவர்கள் வழங்கும் சேவைகள் எளிதாக அணுகக்கூடியவை, மற்றும் அவர்கள் வாடிக்கையாளர்களுக்கான மகிழ்ச்சியுடன் கூடிய சேவைகளை வழங்குவதை சரியாக செய்யின்றனர். எனவே, இந்த சேவையை எவ்வளவு பரிந்துரைத்தாலும் குறைவாகவே இருக்கும்."
    },
    {
      name: "Vijaya kumar R",
      rating: 4.9,
      image: "/images/testimonial4.png",
      feedback:
        "இந்த களஞ்சிய மற்றும் சேமிப்பக தீர்வுகள் சிறந்தவை. அவர்கள் எனது சரக்குகளுக்கு பாதுகாப்பான இடத்தை வழங்கினர் மற்றும் அதைப் பிரமாணங்களுடன் கண்காணித்து நிர்வகிக்க புதிய தொழில்நுட்பங்களை பயன்படுத்தினர்.",
    },
    {
      name: "Krishna",
      rating: 4.7,
      image: "/images/testimonial2.jpg",
      feedback:
        "Great interstate shipping! Delivered my documents safely and on time. Highly recommend!",
    },
  ];

  return (
    <React.Fragment>
      <section className="my-20 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/4 px-4 order-2 md:order-1 my-5">
          <i className="sm:text-[45px] text-[35px] text-blue-900">
            <FaQuoteLeft />
          </i>
          <p className="font-bellota pt-3 text-justify sm:text-left">
            Feel free to explore testimonials from our valued clients, sharing
            their experiences and trust in our reliable and efficient services.
          </p>
        </div>

        <div className="w-full md:w-2/4 md:text-center px-4 order-1 md:order-2">
          <section className="font-manrope">
            <strong className="sm:text-[45px] text-[35px] text-blue-900">
              What Our
            </strong>
            <br />
            <strong className="sm:text-[45px] text-[35px] text-blue-900 pl-5 md:pl-0">
              Customers Says
            </strong>
          </section>
        </div>

        <div className="w-full md:w-1/4 px-4 mt-4 sm:mt-0 order-3 sm:order-3">
          <div className="flex justify-center sm:justify-end space-x-2">
            <button className="py-1 px-3 border hover:bg-blue-600 transition-all duration-300 hover:text-white border-blue-900 hover:border-blue-600">
              <IoIosArrowRoundBack />
            </button>
            <button className="py-1 px-3 border text-white hover:bg-blue-600 bg-blue-900">
              <IoIosArrowRoundForward />
            </button>
          </div>
        </div>
      </section>

      <section
        className="rounded-md mb-20"
      >
        <div className="flex flex-col md:flex-row  flex-wrap gap-7">
          <div
            className="flex flex-col space-y-7"
            style={{ flex: "0 0 440px" }}
          >
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border shadow-md">
                <img
                  src={testimonial.image}
                  className="rounded-full h-14 w-14 mb-4 mx-auto"
                />
                <p className="text-blue-900 mb-4 text-center font-manrope mt-3">
                  {testimonial.feedback}
                </p>
                <p className="text-blue-900 text-center font-sans mt-3">
                  - {testimonial.name}
                </p>
                <p className="flex justify-center items-center text-yellow-500 mt-3">
                  {Array(Math.round(testimonial.rating))
                    .fill()
                    .map((_, i) => (
                      <FaStar key={i} />
                    ))}
                </p>
              </div>
            ))}
          </div>
          <div className="flex-1 bg-white p-6 rounded-lg border shadow-md">
            <img
              src={testimonials[2].image}
              className="rounded-full h-14 w-14 mb-4 mx-auto"
            />
            <p className="text-blue-900 mb-4 text-center font-manrope mt-3">
              {testimonials[2].feedback}
            </p>
            <p className="text-blue-900 text-center font-sans mt-3 leading-relaxed">
              - {testimonials[2].name}
            </p>
            <p className="flex justify-center items-center text-yellow-500 mt-3">
              {Array(Math.round(testimonials[2].rating))
                .fill()
                .map((_, i) => (
                  <FaStar key={i} />
                ))}
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row mt-7 gap-7">
          {testimonials.slice(3).map((testimonial, index) => (
            <div
              key={index}
              className="flex-1 bg-white p-6 rounded-lg border shadow-md"
            >
              <img
                src={testimonial.image}
                className="rounded-full h-14 w-14 mb-4 mx-auto"
              />
              <p className="text-blue-900 mb-4 text-center font-manrope mt-3">
                {testimonial.feedback}
              </p>
              <p className="text-blue-900 text-center  font-sans">- {testimonial.name}</p>
              <p className="flex justify-center items-center text-yellow-500 mt-3">
                {Array(Math.round(testimonial.rating))
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} />
                  ))}
              </p>
            </div>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Testimonials;
