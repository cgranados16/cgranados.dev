'use client';
import { motion } from 'motion/react';
import { StarField } from '../components/star-field';

type StarFieldContainerProps = {
  children: React.ReactNode;
};

export const StarFieldContainer: React.FC<StarFieldContainerProps> = ({
  children,
}) => {
  return (
    <div className="relative mb-16 flex min-h-screen items-center justify-center">
      <div className="absolute top-0 h-full w-screen">
        <StarField />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export function StarsSection() {
  return (
    <StarFieldContainer>
      <section className="flex min-h-screen items-center justify-center">
        <motion.h2
          className="text-center text-5xl font-bold lg:text-7xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          I will help you build your dream website
        </motion.h2>
      </section>
    </StarFieldContainer>
  );
}
