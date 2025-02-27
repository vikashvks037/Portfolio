import React, { useState } from "react";
import { motion } from "framer-motion";
import EarthCanvas from "./canvas/Earth";
import SectionWrapper from "../hoc/SectionWrapper";
import { slideIn } from "../utils/motion";

const Contact = () => {
 
  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      {/* Left Section - Contact Info & Form */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-10 rounded-2xl shadow-xl border border-gray-700"
      >
        <div className="text-center mb-6">
          <h2 className="text-white text-3xl lg:text-5xl font-extrabold">
            Get in Touch
          </h2>
        </div>

        <div className="bg-gray-800 p-8 rounded-lg space-y-4">
          {/* Social Links - Single Row */}
          <div className="flex flex-wrap justify-center gap-6  ">
            <a
              href="https://github.com/vikashvks037"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-400 transition duration-300 text-lg flex items-center"
            >
              🐙 GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/vikash-kumar-848734343"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 transition duration-300 text-lg flex items-center"
            >
              🔗 LinkedIn
            </a>
            <a
              href="https://www.instagram.com/vikash_vks037"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-500 transition duration-300 text-lg flex items-center"
            >
              📸 Instagram
            </a>
          </div>

          {/* Contact Details */}
          <p className="text-gray-300 text-lg">
            <strong>Name:</strong> Vikash Kumar
          </p>
          <p className="text-gray-300 text-lg">
            <strong>Email:</strong> vikash.vks037@gmail.com
          </p>
          <p className="text-gray-300 text-lg">
            <strong>Contact:</strong> 8405057280
          </p>
        </div>
      </motion.div>

      {/* Right Section - Earth Animation */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[400px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
