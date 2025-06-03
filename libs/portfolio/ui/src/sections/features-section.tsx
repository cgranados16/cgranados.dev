'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Title, TitleHighlight } from '../components/features/Title';
import { useRef } from 'react';

const MotionTitle = motion(Title, { forwardMotionProps: true });

type FeatureProps = {
  title: React.ReactNode[];
  xValues: string[];
  children: React.ReactNode;
};

export function Feature({ title, xValues, children }: FeatureProps) {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end start'],
  });
  const x = useTransform(scrollYProgress, [0, 0.3], xValues);
  const fontSize = useTransform(scrollYProgress, [0, 0.3], ['6rem', '3.5rem']);
  return (
    <div ref={scrollRef}>
      <div className="flex items-center justify-center sticky top-px pt-16 pb-8 bg-background mt-96 z-10">
        <MotionTitle className="md:text-8xl" style={{ x, fontSize }}>
          {title.map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </MotionTitle>
      </div>
      {children}
    </div>
  );
}

export function FeaturesSection() {
  return (
    <>
      <Feature
        title={[
          'Optimize your ',
          <TitleHighlight text="Website." color={'red'} />,
        ]}
        xValues={['0%', '-76%']}
      >
        <motion.div
          className="h-screen my-48"
          initial={{ opacity: 0, y: '100' }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.5 },
          }}
          viewport={{ once: true, amount: 0.3 }}
        ></motion.div>
      </Feature>
      <Feature
        title={[
          'Boost your ',
          <TitleHighlight text="Sales." color={'purple'} />,
        ]}
        xValues={['0%', '-120%']}
      >
        <motion.div
          className="h-screen  rounded-xl"
          initial={{ opacity: 0, y: '100' }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.5 },
          }}
          viewport={{ once: true, amount: 0.3 }}
        ></motion.div>
      </Feature>
    </>
  );
}
