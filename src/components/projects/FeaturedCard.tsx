import Button from '../common/Button';

const FeaturedCard = () => {
  const stack = ['test', 'test', 'test'];

  return (
    <div className='col-span-4 bg-dark-200 border-2 border-dark-100 rounded-md flex gap-5 h-[300px] group'>
      <div className='overflow-hidden w-1/2 rounded-l-md'>
        <img
          src='https://picsum.photos/700'
          alt=''
          className='w-full h-full object-cover rounded-l-md group-hover:scale-105 transition duration-200 ease-in-out'
        />
      </div>
      <div className='flex flex-col gap-3 justify-center'>
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
export default FeaturedCard;
