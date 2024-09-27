import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

const Tech = () => {
  return (
    <div className='flex justify-center items-center'>
      <BallCanvas />
    </div>
  );
};

export default SectionWrapper(Tech, "");
