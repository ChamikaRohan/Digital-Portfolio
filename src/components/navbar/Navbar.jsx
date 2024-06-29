import React from 'react'
import "./Navbar.scss"
import {motion} from "framer-motion"
import Sidebar from '../sidebar/Sidebar'

export default function Navbar() {
  return (
    <div className='navbar'>
        {/* Sidebar */}
        <Sidebar/>
        <div className='wrapper'>
            <motion.span 
            initial ={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.5}}
            >Digital Portfolio</motion.span>
            <div className='social'>
                <a href="https://facebook.com/chamika.rohan.1"><img src="/facebook.png" alt="facebook"/></a>
                <a href="https://instagram.com/chamika_rohan"><img src="/instagram.png" alt="instagram"/></a>
                <a href="https://linkedin.com/in/chamikarohan"><img src="/linkedin.png" alt="linkedin"/></a>
                <a href="https://github.com/ChamikaRohan"><img src="/github.png" alt="github"/></a>
            </div>
        </div>
    </div>
  )
}
 