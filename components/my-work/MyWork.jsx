import React from 'react';
import projecData from '../../projectData.json';
import ProjectCard from './ProjectCard';
import FeaturedCard from './FeaturedCard';

const featured = projecData[0];
const cards = projecData.slice(1, 3);

const MyWork = () => {
  return (
    <div id='work' className='flex flex-col gap-8 text-white'>
      <h2 className='font-body self-center md:self-start font-semibold text-5xl md:text-6xl lg:text-7xl xl:text-8xl underline decoration-4 decoration-cyan-600'>
        My <br className='hidden md:block' /> Work
      </h2>
      <span className='font-mono text-md md:text-lg self-center md:self-start text-center'>
        Here are some projects I&apos;ve worked on:
      </span>
      <div className='flex flex-col gap-12 md:gap-8'>
        {featured ? (
          <FeaturedCard
            img={featured.img}
            title={featured.title}
            github={featured.github}
            liveSite={featured.liveSite}
            stack={featured.stack}
          />
        ) : null}
        {cards ? (
          <div className='container mx-auto flex flex-col md:flex-row gap-12 md:gap-10'>
            {cards.map((project) => (
              <ProjectCard
                key={project.title}
                img={project.img}
                title={project.title}
                github={project.github}
                liveSite={project.liveSite}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MyWork;
