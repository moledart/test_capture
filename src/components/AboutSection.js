import React from "react";
import home1 from "../img/home1.png";
//Styled components
import styled from "styled-components";
import { StyledSection, Description, Image, Hide } from "../styles";
//Framer motion
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>true.</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photography or videography ideas that you have. We have
          professionals with amazing skills.
        </p>
        <button>Contact us</button>
      </Description>
      <Image>
        <img src={home1} alt="cameraman" />
      </Image>
    </About>
  );
};

const About = styled(StyledSection)``;

export default AboutSection;
