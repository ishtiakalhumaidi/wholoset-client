import React, { use, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const featuresPromise = fetch("/features.json").then((res) => res.json());

const WhyChoose = () => {
  const features = use(featuresPromise);
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <section className="py-16 bg-base-100">
      <h2 className="text-4xl md:text-6xl font-bold text-center text-primary mb-12 font-secondary">
        Why Choose Wholoset
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
        {features.map((item, i) => (
          <div
            key={i}
            className="group cursor-pointer card bg-base-200 border border-base-300 hover:shadow-2xl transition-all hover:border-primary rounded-2xl p-8 text-center duration-1000 "
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
             
          <img src={item.icon} className=" mb-4  w-16 place-self-center transition-transform duration-300 group-hover:scale-110"  alt="" />
            <h3 className="text-xl font-semibold text-base-content mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-base-content opacity-80">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
