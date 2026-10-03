import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const testimonials = [
  {
    name: "Anjali Verma",
    title: "Recovered Patient",
    review:
      "Amazing experience! The physiotherapy sessions were very helpful. Highly recommended.",
    rating: 5,
  },
  {
    name: "Rahul Mehra",
    title: "Home Visit Patient",
    review:
      "Convenient and effective treatment. Home visit service was a game changer for me.",
    rating: 4,
  },
  {
    name: "Priya Sharma",
    title: "Chronic Pain Relief",
    review:
      "Very caring and professional team. My knee pain has improved drastically.",
    rating: 5,
  },
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);
  const [aosEffect, setAosEffect]=useState("slide-right")

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [index]);

  const handleNext = () => {
    setAosEffect("slide-left")
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setAosEffect("slide-right")
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const { name, title, review, rating } = testimonials[index];

  return (
    <section className="w-full bg-tel-50 py-12 px-4 sm:px-6 lg:px-12 font-marcellus">
      <p className="text-2xl text-amber-800 text-center border-y-2 py-2 border-gray-400 my-6">Care 2 Cure Physiotheraphy for their Patients</p>
     
      <div
        key={index}
        data-aos={aosEffect}
        className="bg-white max-w-4xl mx-auto shadow-md rounded-xl px-6 py-8 transition-all duration-700"
      >
        <p className="text-gray-700 text-lg italic leading-relaxed mb-6">
          "{review}"
        </p>
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold text-amber-700">{name}</h3>
            <p className="text-gray-500 text-sm">{title}</p>
          </div>
          <div className="flex text-yellow-400 mt-4 sm:mt-0">
            {[...Array(rating)].map((_, i) => (
              <i key={i} className="bi bi-star-fill text-xl mr-1"></i>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-6 mt-8 text-4xl text-amber-600">
        <i className="bi bi-arrow-left-circle hover:text-amber-700 cursor-pointer" onClick={handlePrev}></i> 
        <i className="bi bi-arrow-right-circle hover:text-amber-700 cursor-pointer" onClick={handleNext}></i>  
      </div>
    </section>
  );
};

export default TestimonialSection;
