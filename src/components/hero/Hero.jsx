import React from 'react';
import "./Hero.scss";
import { motion } from "framer-motion";

export default function Hero() {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity
      }
    }
  };

  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        duration: 20,
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };

  return (
    <div className='hero'>
      <div className="wrapper">
        <motion.div 
          className='textContainer' 
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>CHAMIKA ROHAN</motion.h2>
          <motion.h1 variants={textVariants}>Software Engineer  <br /> AI Enthusiast</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants} class="lat-button"><span class="lat-button-content">See the Latest Works</span></motion.button>
            <motion.button variants={textVariants} class="lat-button"><span class="lat-button-content">Contact Me</span></motion.button>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
        </motion.div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">Software Engineer AI Enthusiast</motion.div>
        <div className='imageContainer'>
          <img src="/hero.png" alt="" />
        </div>
      </div>
    </div>
  );
}
