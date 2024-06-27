import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ToggleButton({ setOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    setOpen((prev) => !prev);
  };

  return (
    <button onClick={toggleMenu}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
        />
        <motion.path
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={{
            closed: { opacity: 1, d: "M 2 11.5 L 20 11.5" },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
        />
        <motion.path
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={{
            closed: { d: "M 2 20.5 L 20 20.5" },
            open: { d: "M 3 2.5 L 17 16.5" }
          }}
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}
