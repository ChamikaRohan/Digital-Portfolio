import React from 'react';
import { motion } from 'framer-motion';

export default function Links() {
  const items = [
    "HomePage",
    "Services",
    "Portfolio",
    "Contact",
    "About",
  ];

  return (
    <motion.div className='links'>
      {items.map((item, index) => (
        <motion.a
          href={`#${item}`}
          key={item}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.5, duration: 0.6 }} // Staggering effect
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
}
