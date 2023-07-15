const NameText = () => {
  return (
    <div className='flex flex-col items-center md:items-start text-center md:text-start gap-2 z-10'>
      <h1 className='text-5xl md:text-9xl uppercase font-bold'>Jack Paget</h1>
      <h2 className='text-sm md:text-xl font-medium text-white/50'>
        Front-end developer working with the latest tech.
      </h2>
      <div className='flex gap-3 mt-2'>
        <a
          href='#projects'
          className='bg-plum-200 font-spaceMono rounded-md px-2 py-1'
        >
          Projects
        </a>
        <a
          href='#contact'
          className='bg-plum-200 font-spaceMono rounded-md px-2 py-1'
        >
          Contact
        </a>
      </div>
    </div>
  );
};
export default NameText;
