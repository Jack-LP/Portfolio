import React from 'react';

const HeroText = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-6xl md:text-[122px] lg:text-[152px] xl:text-[192px] font-body uppercase font-semibold text-center text-white'>
        Jack Paget
      </h1>
      <h2 className='text-md md:text-xl  lg:text-2xl font-mono uppercase text-center text-white/75'>
        front-end developer working with the latest tech.
      </h2>
    </div>
  );
};

export default HeroText;
