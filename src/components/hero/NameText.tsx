import Button from '../common/Button';

const NameText = () => {
  return (
    <div className='flex flex-col gap-2 z-10'>
      <h1 className='text-9xl uppercase font-bold'>Jack Paget</h1>
      <h2 className='text-xl font-medium text-white/50'>
        Front-end developer working with the latest tech.
      </h2>
      <div className='flex gap-3 mt-2'>
        <Button>Projects</Button>
        <Button>Contact</Button>
      </div>
    </div>
  );
};
export default NameText;
