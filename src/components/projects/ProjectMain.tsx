import projectData from '../../data/projectData.json';

import Heading from '../common/Heading';
import FeaturedCard from './FeaturedCard';
import ProjectCard from './ProjectCard';

const featured = projectData[0];
const cards = projectData.slice(1, 5);

const ProjectMain = () => {
  return (
    <div id='projects' className='flex items-center justify-center'>
      <div className='flex flex-col gap-4 w-full'>
        <Heading>Projects</Heading>
        <div className='flex flex-col gap-6'>
          <FeaturedCard
            projectId={featured.id}
            img={featured.img}
            title={featured.title}
            github={featured.github}
            liveSite={featured.liveSite}
            stack={featured.stack}
          />
          <div className='flex flex-col justify-between md:flex-row gap-6'>
            {cards.map((project) => (
              <ProjectCard
                projectId={project.id}
                key={project.title}
                img={project.img}
                title={project.title}
                github={project.github}
                liveSite={project.liveSite}
                stack={project.stack}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectMain;
