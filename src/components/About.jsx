import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full hidden md:block'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 2,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-20 h-20 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Introduction!</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl leading-relaxed'
      >
        Hi there! I’m <span className='text-[#2f97c4]'>Eric</span>, a passionate developer with a deep love for technology and innovation. Ever since I wrote my first line of code, I’ve been captivated by the endless possibilities that technology offers. Whether it’s creating interactive web applications, exploring the realms of 3D graphics with Three.js, or diving into the latest tech trends, I’m always eager to learn and push the boundaries of what’s possible.<br /><br />

        My journey in the tech industry has been driven by a desire to develop cool and impactful projects. I thrive on solving complex problems and turning ideas into reality. Each project is an opportunity to grow, learn, and improve my skills, and I’m excited to share some of my favorite works with you here.<br /><br />

        In addition to software development, I have a huge passion for fixing and troubleshooting physical tech issues. From assembling custom PCs to diagnosing hardware malfunctions, I enjoy the hands-on aspect of working with technology and ensuring everything runs smoothly.<br /><br />

        Thank you for visiting my portfolio. I hope you enjoy exploring my projects as much as I enjoyed creating them!
      </motion.p>

      {/* Download CV Button */}
      <div className='mt-10 flex justify-center items-center'>
        <a href='./CV.pdf' target='_blank' rel='noopener noreferrer'>
          <button
            className='bg-teal-400 text-black-200 text-2xl font-bold py-4 px-8 rounded-xl transition-colors duration-350 hover:bg-gray-900 hover:text-teal-400'
            onClick={(e) => {
              e.preventDefault();
              window.open('./CV.pdf', '_blank');
              const link = document.createElement('a');
              link.href = './CV.pdf';
              link.download = './CV.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            Download My CV
          </button>
        </a>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
