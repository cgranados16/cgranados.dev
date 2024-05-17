'use client';
import TypeIt from 'typeit-react';

const TypeWriter = () => {
  return (
    <TypeIt
      as={'h2'}
      className="text-2xl lg:text-7xl font-bold"
      options={{ loop: true }}
      getBeforeInit={(instance) => {
        instance
          .pause(1000)
          .delete()
          .type('Fullstack Developer')
          .pause(1000)
          .delete()
          .type('SEO Expert')
          .pause(1000)
          .delete()
          .type('Project Manager')
          .pause(1000);
        return instance;
      }}
    >
      Computer Engineer
    </TypeIt>
  );
};

export function Hero() {
  return (
    <section className="py-12 flex flex-col md:justify-center min-h-screen">
      <div className="lg:mb-36">
        <h1 className="text-4xl lg:text-9xl font-bold">
          <span className="text-4xl lg:text-7xl font-bold text-gray-600/75 dark:text-gray-400/75">
            Hi, I am
          </span>{' '}
          <br />
          Carlos Granados
        </h1>
        <TypeWriter />
      </div>
    </section>
  );
}
