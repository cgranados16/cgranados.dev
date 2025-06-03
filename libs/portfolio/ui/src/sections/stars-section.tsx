'use client';
import { StarField } from '../components/star-field';
import { motion } from 'framer-motion';

type StarFieldContainerProps = {
  children?: React.ReactNode;
};

export const StarFieldContainer: React.FC<StarFieldContainerProps> = ({
  children,
}) => {
  return (
    <div className="relative min-h-screen flex justify-center items-center mb-16">
      <div className="absolute top-0 w-screen h-full">
        <StarField />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export function StarsSection() {
  return (
    <StarFieldContainer>
      <section className="min-h-screen flex justify-center items-center">
        <motion.h2
          className="text-5xl lg:text-7xl font-bold text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          I will help you build your dream website
        </motion.h2>
      </section>
    </StarFieldContainer>
  );
}
