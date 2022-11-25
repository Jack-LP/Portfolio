import React from 'react';
import ProjectModal from './ProjectModal';
import { GithubFill, LinkOut } from 'akar-icons';

const ProjectCard = ({
  projectId,
  img,
  title,
  github,
  liveSite,
  stack,
  modal,
  setModal,
}) => {
  return (
    <>
      <ProjectModal modal={modal} setModal={setModal} />
      <div className='flex flex-col overflow-hidden bg-charcoal-200 rounded-lg group'>
        <div className='overflow-hidden'>
          <img
            src={img}
            alt={title}
            onClick={() => setModal({ isOpen: true, id: projectId })}
            className='rounded-t-lg group-hover:scale-105 transition duration-200 ease-in-out'
          />
        </div>
        <div className='flex flex-col p-6 items-start gap-4'>
          <h2
            onClick={() => setModal({ isOpen: true, id: projectId })}
            className='font-body capitalize text-2xl font-semibold cursor-pointer'
          >
            {title}
          </h2>
          <div className='flex gap-2 flex-wrap'>
            {stack.map((item) => (
              <span
                key={item}
                className='p-1 px-3 bg-white/10 rounded-lg font-mono text-xs'
              >
                {item}
              </span>
            ))}
          </div>
          <button
            onClick={() => setModal({ isOpen: true, id: projectId })}
            className='font-body p-2 border-2 border-cyan-600 rounded w-1/2 hover:bg-cyan-600 transition duration-300 ease-in-out'
          >
            View
          </button>
          <div className='flex gap-2 items-center'>
            <a href={github} target='_blank' rel='noreferrer'>
              <GithubFill size={20} />
            </a>
            <a href={liveSite} target='_blank' rel='noreferrer'>
              <LinkOut size={20} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
