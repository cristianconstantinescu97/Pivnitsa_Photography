import React from 'react';
import { motion } from 'framer-motion';

const pageTransitionVariants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

type MotionWrapperProps = {
  children: React.ReactNode;
};

const MotionWrapper: React.FC<MotionWrapperProps> = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={pageTransitionVariants}
      transition={{ type: 'linear' }}
      className="page"
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
