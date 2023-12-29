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
  });
  const x = useTransform(scrollYProgress, [0, 0.5], xValues);
  const fontSize = useTransform(scrollYProgress, [0, 0.5], ['6rem', '3.5rem']);
  return (
    <div ref={scrollRef}>
      <div className="flex items-center justify-center sticky top-px pt-16 pb-8 bg-background">
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
        <div className="h-screen bg-slate-900"></div>
        <div className="h-screen bg-red-900"></div>
      </Feature>
      <Feature
        title={[
          'Boost your ',
          <TitleHighlight text="Sales." color={'purple'} />,
        ]}
        xValues={['0%', '-120%']}
      >
        <div className="h-screen bg-blue-900"></div>
      </Feature>
    </>
  );
}
