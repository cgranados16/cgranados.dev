import {
  Hero,
  StarsSection,
  FeaturesSection,
} from '@cgranados.dev/portfolio/ui';

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className="container">
      <Hero />
      <StarsSection />
      <FeaturesSection />
      <div className="h-screen bg-red-950 mt-36"></div>
    </div>
  );
}
