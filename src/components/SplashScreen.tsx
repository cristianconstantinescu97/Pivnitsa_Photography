import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

const SplashScreen: React.FC = () => {
  const containerVariant = {
    initial: { opacity: 1 },
    animate: { opacity: 0, transition: { delay: 2.5, duration: 0.5 } },
  };

  const logoVariants = {
    initial: { opacity: 0, scale: 1.5 },
    animate: { opacity: 1, scale: 1.5, transition: { duration: 2, delay: 0.75 } },
  };

  const lineVariants = {
    initial: { width: 0 },
    animate: { width: "30vw", transition: { duration: 1.5, ease: "easeInOut", delay: 0.5 } },
  };

  return (
    <AnimatePresence>
      <motion.div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-100"
                   variants={containerVariant} animate="animate">
        <div className="relative">
          <motion.img src="/logo.png" alt="logo" className="w-32 h-32 z-100" variants={logoVariants} initial="initial" animate="animate"/>
        </div>
        <div className="flex absolute" style={{ marginBottom: "-30vh" }}>
          <motion.div className="h-0.5 bg-black" variants={lineVariants}></motion.div>
          <motion.div className="h-0.5 bg-black" variants={lineVariants}></motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
