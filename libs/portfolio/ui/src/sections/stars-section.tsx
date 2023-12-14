'use client';
import { useRef } from 'react';
import { StarField } from '../components/star-field';
import { motion, useInView } from 'framer-motion';

export function StarsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative min-h-screen flex justify-center items-center mb-16">
      <div className="absolute top-0 w-screen h-full">
        <StarField />
      </div>
      <motion.h2
        ref={ref}
        className="text-7xl font-bold text-center relative z-10"
        style={{
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        I will help you build your dream website
      </motion.h2>
    </section>
  );
}
