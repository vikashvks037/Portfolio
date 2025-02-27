import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { services } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        data-options='{"max": 45, "scale": 1, "speed": 450}'
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-6">
      {/* Introduction Section */}
      <div className="flex items-start gap-8 mt-8">
        {/* Decorative Line (Fixed on Left) */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#54bee7]" />
          <div className="w-1 sm:h-72 h-40 violet-gradient" />
        </div>

        {/* Content (Pushed to Right) */}
        <div className="flex-1">
          {/* Heading */}
          <h1 className="mt-6 font-black text-white text-[50px] ">
            Hi, I'm <span className="text-[#53daf1]">Vikash Kumar</span>
          </h1>

          {/* Section Title */}
          <motion.div variants={textVariant()} className="mt-10">
            <p className="text-white font-black text-[28px] sm:text-[32px] lg:text-[36px]">
              Introduction
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            I'm a software developer with experience in JavaScript, working
            with frameworks like React, Node.js. I also works
            on Android Development. As a quick learner, I collaborate closely
            with clients to create efficient, scalable, and user-friendly
            solutions.
          </motion.p>
        </div>
      </div>

      {/* Services Section */}
      <div className="flex flex-wrap mt-6 gap-8 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
