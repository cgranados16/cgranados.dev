const Hero: React.FC = () => {
  return (
    <section className="absolute py-24 flex md:items-center min-h-screen">
      <div className="lg:mb-36">
        <p className="text-4xl lg:text-7xl font-bold text-gray-400">Hi, I am</p>
        <h1 className="text-4xl lg:text-9xl font-bold">Carlos Granados</h1>
        <h2 id="animated-title" className="text-2xl lg:text-7xl font-bold">
          Computer Engineer
        </h2>
      </div>
    </section>
  );
};

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className="container relative">
      <Hero />
    </div>
  );
}
