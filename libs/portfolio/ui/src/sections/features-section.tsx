'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Title, TitleHighlight } from '../components/features/Title';
import { useRef } from 'react';

const MotionTitle = motion(Title, { forwardMotionProps: true });

export function FeaturesSection() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
  const fontSize = useTransform(scrollYProgress, [0, 1], ['6rem', '4.5rem']);
  return (
    <div ref={scrollRef}>
      <div className="flex items-center justify-center sticky top-px pt-16 pb-8 bg-background ">
        <MotionTitle
          className="md:text-8xl"
          viewport={{ root: scrollRef }}
          style={{ x, fontSize }}
        >
          Optimize your <TitleHighlight text="Website." color={'red'} />
        </MotionTitle>
      </div>
      <div className="h-screen bg-slate-900"></div>
    </div>
  );
}
