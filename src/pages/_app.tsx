import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import MotionWrapper from '@/components/MotionWrapper';
import SplashScreen from '@/components/SplashScreen';
import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps, router }: AppProps) {
  const [splashDone, setSplashDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashDone(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!splashDone && <SplashScreen />}
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <MotionWrapper key={router.route}>
          <Component {...pageProps} />
        </MotionWrapper>
      </AnimatePresence>
    </>
  );
}
