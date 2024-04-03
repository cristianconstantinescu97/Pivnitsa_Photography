import React from 'react';
import { motion } from 'framer-motion';

const pageTransitionVariants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
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
      transition={{ duration: 0.5 }}
      className="page"
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
