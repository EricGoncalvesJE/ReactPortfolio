import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-1 bg-black-100 p-8 rounded-2xl"
        style={{ flexBasis: "50%" }}
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="mt-12 flex flex-col gap-8">
          <div className="bg-primary p-6 rounded-lg">
            <label className="flex flex-col">
              <span className="text-white font-medium text-lg mb-4">Phone Number</span>
              <input
                type="text"
                value="07700 331734"
                readOnly
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-lg"
              />
            </label>
          </div>
          <div className="bg-primary p-6 rounded-lg">
            <label className="flex flex-col">
              <span className="text-white font-medium text-lg mb-4">Email Address</span>
              <input
                type="email"
                value="ericnelson.121@gmail.com"
                readOnly
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-lg"
              />
            </label>
          </div>
        </div>
      </motion.div>

      <div className="flex-1" style={{ flexBasis: "50%" }}>
        <EarthCanvas />
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
