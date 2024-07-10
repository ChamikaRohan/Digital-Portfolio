import React, { useRef } from 'react'
import "./Parallax.scss"
import {motion, useScroll, useTransform} from "framer-motion"

export default function Parallax({type}) {
  const ref = useRef();

  const {scrollYProgress} = useScroll({
    target:ref,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0,1], ["0%", "200%"]);
  const yBg = useTransform(scrollYProgress, [0,1], ["0%", "100%"]);

  return (
    <div ref={ref} className='parallax' style={{ background:type === "services" 
      ? "Linear-gradient(180deg, #111132, #0c0c1d)"
      : "Linear-gradient(180deg, #111132, #505064)" 
    }}>
        <motion.h1 style={{ y: yText }}>{type=="about" ? "About Me" : "My Work"}</motion.h1>
        <motion.div className="mountains"></motion.div>
        <motion.div className="planets" style={{  y: yBg,
          backgroundImage: `url(${type === "services" ? "/planets.png":"/sun.png"})`
        }}></motion.div>
        <motion.div style={{ x: yBg}} className="stars"></motion.div>
    </div>
  )
}
