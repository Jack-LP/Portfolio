import React from 'react';
import projecData from '../../projectData.json';
import ProjectCard from './ProjectCard';
import FeaturedCard from './FeaturedCard';

const featured = projecData[0];
const cards = projecData.slice(1, 3);

const MyWork = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8'>
      <h2 className='font-body font-semibold text-5xl underline decoration-4 decoration-emerald-600'>
        My Work
      </h2>
      <div className='flex flex-col gap-8'>
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
          <div className='container mx-auto flex gap-10'>
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
