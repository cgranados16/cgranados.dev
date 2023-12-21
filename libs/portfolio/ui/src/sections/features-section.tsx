'use client';
import { motion } from 'framer-motion';
import { FeaturesCard } from '../components/features/card';

const AnimatedTitle = ({ children }) => {
  return (
    <motion.h2
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 'all' }}
      className="text-3xl font-bold leading-tight tracking-tighter md:text-7xl lg:leading-[1.1]"
    >
      {children}
    </motion.h2>
  );
};

const OptimizeYourWebsite = () => {
  return (
    <div className="min-h-screen flex flex-col space-y-12">
      <AnimatedTitle>
        Optimize your <span className="text-red-600">Website</span>
      </AnimatedTitle>
      <div className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Sites that rank on search engines are fast, have well-structured
        content, and are accessible to everyone.
      </div>
      <div className="grid grid-cols-3 gap-5">
        <FeaturesCard title="Largest Contentful Paint">LCP</FeaturesCard>
        <FeaturesCard title="First Input Delay" color={'green'}>
          FID
        </FeaturesCard>
        <FeaturesCard title="Cumulative Layout Shift" color="blue">
          CLS
        </FeaturesCard>
      </div>
    </div>
  );
};

const BoostYourRankings = () => {
  return (
    <div className="min-h-screen flex flex-col space-y-12">
      <AnimatedTitle>
        Boost your <span className="text-green-600">Rankings</span>
      </AnimatedTitle>
      <div className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Using the latest web technologies and performance optimization
        techniques, Framer outputs websites that score well on Google
        Lighthouse, a popular performance analysis tool used to evaluate the
        quality of web pages. Out of the box, websites created with Framer are
        optimized for fast loading times, efficient use of resources, and a
        great user experience, leading to high scores on Google Lighthouse
        metrics such as First Contentful Paint, Speed Index, and Time to
        Interactive.
      </div>
    </div>
  );
};

const CreateUniqueExperiences = () => {
  return (
    <div className="min-h-screen flex flex-col space-y-12">
      <AnimatedTitle>
        Create Unique <span className="text-blue-600">Experiences</span>
      </AnimatedTitle>
      <div className="scroll-m-20 text-2xl font-semibold tracking-tight">
        {/* Text about UX design */}I love minimalism and simplicity. I believe
        that less is more, and that the best designs are the ones that are
        invisible to the user. I also believe that great design is a result of a
        deep understanding of the problem and the user. I strive to create
        unique experiences that are simple, intuitive, and delightful. I am
        passionate about creating products that are not only beautiful, but also
        functional and accessible.
      </div>
    </div>
  );
};

export function FeaturesSection() {
  return (
    <>
      <OptimizeYourWebsite />
      <BoostYourRankings />
      <CreateUniqueExperiences />
    </>
  );
}
// export function FeaturesSection() {
//   return (
//     <div className="h-screen flex items-center">
//       <AnimatedTitle>
//         Optimize your <span className="text-red-600">Website</span>
//       </AnimatedTitle>
//     </div>
//   );
// }
