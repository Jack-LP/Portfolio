import Heading from '../common/Heading';
import FeaturedCard from './FeaturedCard';
import ProjectCard from './ProjectCard';

const ProjectMain = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='flex flex-col gap-3 w-full'>
        <Heading>Projects</Heading>
        <div className='grid grid-cols-4 grid-rows-2 gap-5'>
          <FeaturedCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};
export default ProjectMain;
