import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const highlightText = (line) => {
  const keywords = [
    "Course:",
    "Institution:",
    "Grade:"
  ];

  return keywords.reduce((acc, keyword) => {
    if (acc.includes(keyword)) {
      return acc.replace(
        keyword,
        `<span class="text-teal-300 font-bold">${keyword}</span>`
      );
    }
    return acc;
  }, line);
};

const AboutMeCard = ({
  index,
  title,
  content,
  labels
}) => (
  <Tilt className='xs:w-[320px] w-full'>
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className='bg-black-200 p-5 rounded-3xl'
    >
      <div className='mt-1'>
        <div className='mt-1 flex flex-col'>
          <p className='text-white font-bold text-[24px]'>
            <span className='blue-text-gradient'>{title}</span>
          </p>
          <div className='mt-4 text-secondary text-[12px] flex flex-col gap-1'>
            {content.map((paragraph, index) => (
              <React.Fragment key={index}>
                {labels[index] && (
                  <span className='text-teal-300 font-bold'>{labels[index]}</span>
                )}
                <span dangerouslySetInnerHTML={{ __html: highlightText(paragraph) }} />
                {index < content.length - 1 && <div className='mt-2' />} {/* Add space between paragraphs */}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const AboutMe = () => {
  const aboutMeData = [
    {
      index: 0,
      title: "Background",
      content: [
        "I am the type of person who likes to wear different hats, whether it's 3D modelling, building a computer or a website from nothing, I've tried and enjoyed it all.",
        "Always looking for the next project or new toy to play around with."
      ],
      labels: [""]
    },
    {
      index: 1,
      title: "Education",
      content: [
        "Higher National Diploma (HND & HNC) in Computing - 2021-2024",
        "Highlands College",
        "First Class Honours."
      ],
      labels: ["Course:", "Institution:", "Grade:"]
    },
    {
      index: 2,
      title: "Hobbies",
      content: [
        "From music to gaming, reading, and especially learning new skills, I embrace a wide range of interests with enthusiasm and dedication.",
        "I strive to make the most out of every experience, ensuring that each activity not only brings joy but also contributes to my personal growth and development."
      ],
      labels: [""]
    },
  ];

  return (
    <div className={`bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()} className='mt-4'>
          <p className={styles.sectionSubText}>More About Me</p>
          <h2 className={styles.sectionHeadText}>Get to Know Me.</h2>
        </motion.div>
      </div>
      <div className={`-mt-16 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {aboutMeData.map((item) => (
          <AboutMeCard key={item.index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(AboutMe, "");
