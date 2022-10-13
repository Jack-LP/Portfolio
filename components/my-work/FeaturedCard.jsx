import React from 'react';
import { GithubFill, LinkOut } from 'akar-icons';

const FeaturedCard = ({ img, title, github, liveSite, stack }) => {
  return (
    <div className='flex bg-charcoal-200 rounded-lg group'>
      <div className='w-1/2 rounded-l-lg overflow-hidden'>
        <img
          src={img}
          alt={title}
          className='rounded-l-lg group-hover:scale-105 transition duration-200 ease-in-out'
        />
      </div>
      <div className='flex w-1/2 flex-col p-6 gap-4 justify-center items-center'>
        <div className='flex flex-col gap-2 items-center'>
          <h2 className='font-body capitalize text-4xl font-semibold'>
            {title}
          </h2>
          <div className='flex gap-2'>
            {stack.map((item) => (
              <span
                key={item}
                className='p-1 px-3 bg-white/10 rounded-lg font-mono text-xs'
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <button className='font-body p-2 border-2 border-cyan-600 rounded w-1/2 hover:bg-cyan-600 transition duration-300 ease-in-out'>
          View
        </button>
        <div className='flex gap-2 items-center'>
          <a href={github}>
            <GithubFill size={20} />
          </a>
          <a href={liveSite}>
            <LinkOut size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
