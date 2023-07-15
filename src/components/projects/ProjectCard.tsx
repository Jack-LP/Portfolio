import { Github, BoxArrowUpRight } from 'react-bootstrap-icons';

interface Props {
  projectId: number;
  img: string;
  title: string;
  github: string;
  liveSite: string;
  stack: string[];
}

const ProjectCard = ({
  projectId,
  img,
  title,
  github,
  liveSite,
  stack,
}: Props) => {
  return (
    <div className='bg-dark-200 border-2 border-dark-100 rounded-md flex flex-col h-[300px] group'>
      <div className='h-1/2 overflow-hidden rounded-t-md'>
        <img
          src={img}
          alt={title}
          className='object-cover rounded-t-md h-full w-full group-hover:scale-105 transition duration-200 ease-in-out'
        />
      </div>
      <div className='flex flex-col items-start p-3 gap-2'>
        <h2 className='capitalize font-medium text-xl'>{title}</h2>
        <div className='pl-3 border-l-2 border-dark-100 flex flex-col gap-3'>
          <div className='flex gap-2 flex-wrap'>
            {stack.map((item) => (
              <span
                key={item}
                className='py-1 px-2 border-[1px] border-dark-100 rounded-md font-spaceMono text-xs'
              >
                {item}
              </span>
            ))}
          </div>
          <div className='flex gap-2'>
            <a href={github} target='_blank'>
              <Github size={18} />
            </a>
            <a href={liveSite} target='_blank'>
              <BoxArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
