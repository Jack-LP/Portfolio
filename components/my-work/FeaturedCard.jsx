import React from 'react';
import { GithubFill, LinkOut } from 'akar-icons';

const FeaturedCard = ({
  projectId,
  img,
  title,
  github,
  liveSite,
  stack,
  setModal,
}) => {
  return (
    <div className='flex flex-col md:flex-row bg-charcoal-200 rounded-lg group'>
      <div className='md:w-1/2 rounded-t-lg md:rounded-l-lg overflow-hidden'>
        <img
          src={img}
          alt={title}
          onClick={() => setModal({ isOpen: true, id: projectId })}
          className='rounded-t-lg md:rounded-l-lg group-hover:scale-105 transition duration-200 ease-in-out'
        />
      </div>
      <div className='flex md:w-1/2 flex-col p-6 gap-4 justify-center items-start md:items-center'>
        <div className='flex flex-col gap-2 md:items-center'>
          <h2
            onClick={() => setModal({ isOpen: true, id: projectId })}
            className='font-body capitalize text-4xl font-semibold cursor-pointer'
          >
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
        <button
          onClick={() => setModal({ isOpen: true, id: projectId })}
          className='font-body p-2 border-2 border-cyan-600 rounded w-1/2 hover:bg-cyan-600 transition duration-300 ease-in-out'
        >
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
