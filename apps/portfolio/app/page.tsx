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
      <div className="min-h-screen bg-slate-500">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
        reiciendis laborum aliquam eius vitae eligendi ad libero consectetur
        quaerat sed expedita nihil nulla at voluptas, quae, dicta hic, beatae
        molestiae?
      </div>
    </div>
  );
}
