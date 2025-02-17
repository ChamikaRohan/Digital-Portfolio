import React, { useState } from 'react';
import './Sidebar.scss';
import ToggleButton from './toggleButton/ToggleButton';
import Links from './links/Links';
import { motion } from 'framer-motion';

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: 'circle(1200px at 50px 50px)',
      transition: {
        type: 'spring',
        stiffness: 20,
      },
    },
    closed: {
      clipPath: 'circle(30px at 50px 50px)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div className='Sidebar' animate={open ? 'open' : 'closed'}>
      <motion.div className='bg' variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
}
