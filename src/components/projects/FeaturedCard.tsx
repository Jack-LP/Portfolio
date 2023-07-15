import Button from '../common/Button';
import { Github, BoxArrowUpRight } from 'react-bootstrap-icons';

interface Props {
  projectId: number;
  img: string;
  title: string;
  github: string;
  liveSite: string;
  stack: string[];
}

const FeaturedCard = ({
  projectId,
  img,
  title,
  github,
  liveSite,
  stack,
}: Props) => {
  return (
    <div className='col-span-4 bg-dark-200 border-2 border-dark-100 rounded-md flex gap-5 h-[300px] group'>
      <div className='overflow-hidden w-1/2 rounded-l-md'>
        <img
          src={img}
          alt={title}
          className='w-full h-full object-cover rounded-l-md group-hover:scale-105 transition duration-200 ease-in-out'
        />
      </div>
      <div className='flex flex-col gap-3 justify-center'>
        <h2 className='text-3xl font-medium capitalize'>{title}</h2>
        <div className='flex flex-col border-l-2 border-dark-100 pl-3 gap-3'>
          <Button>View</Button>
          <div className='flex gap-2 flex-wrap'>
            {stack.map((item) => (
              <span
                key={item}
                className='p-1 px-2 border-[1px] border-dark-100 rounded-md font-spaceMono text-xs'
              >
                {item}
              </span>
            ))}
          </div>
          <div className='flex gap-2'>
            <a href={github}>
              <Github size={18} />
            </a>
            <a href={liveSite}>
              <BoxArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeaturedCard;
