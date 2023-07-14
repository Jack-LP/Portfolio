import Button from '../common/Button';
const ProjectCard = () => {
  const stack = ['test', 'test', 'test'];

  return (
    <div className='bg-dark-200 border-2 border-dark-100 rounded-md flex flex-col h-[300px] group'>
      <div className='h-1/2 overflow-hidden rounded-t-md'>
        <img
          src='https://picsum.photos/500'
          alt=''
          className='object-cover rounded-t-md h-full w-full group-hover:scale-105 transition duration-200 ease-in-out'
        />
      </div>
      <div className='flex flex-col items-start p-3 gap-2'>
        <h2>Name</h2>
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
          <a href=''>S</a>
          <a href=''>E</a>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
