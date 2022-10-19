import React from 'react';
import { ArrowUp } from 'akar-icons';

const BackToTop = () => {
  return (
    <div className='fixed md:hidden z-20 bottom-4 right-4 p-2 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-md text-white'>
      <a href='#home'>
        <ArrowUp strokeWidth={2} size={24} />
      </a>
    </div>
  );
};

export default BackToTop;
