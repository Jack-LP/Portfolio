import React from 'react';
import ProjectModal from './ProjectModal';
import { GithubFill, LinkOut } from 'akar-icons';

const ProjectCard = ({
  projectId,
  img,
  title,
  github,
  liveSite,
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
            className='rounded-t-lg group-hover:scale-105 transition duration-200 ease-in-out'
          />
        </div>
        <div className='flex flex-col p-6 items-start gap-4'>
          <h2 className='font-body capitalize text-2xl font-semibold'>
            {title}
          </h2>
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
    </>
  );
};

export default ProjectCard;
