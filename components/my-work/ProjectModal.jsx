import React from 'react';
import projectData from '../../projectData.json';
import {
  GithubFill,
  LinkOut,
  Cross,
  TriangleFill,
  Home,
  GameController,
  Clock,
  Image,
} from 'akar-icons';

const ProjectModal = ({ modal, setModal }) => {
  let filteredProject = projectData.filter((item) => item.id === modal.id);
  let modalData = filteredProject[0];

  return modal.isOpen ? (
    <div
      onClick={() => setModal((prev) => ({ ...prev, isOpen: false }))}
      className='fixed z-20 inset-0 bg-charcoal-100/50 backdrop-blur-md flex items-center justify-center font-body'
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='container mx-auto w-[95vw] lg:w-[65vw] xl:w-[45vw] flex flex-col gap-4 bg-charcoal-200 p-4 rounded-lg text-white'
      >
        <div className='flex justify-between items-center text-xs text-neutral-300 font-mono'>
          {modalData.id === 1 ? (
            <Home size={14} />
          ) : modalData.id === 2 ? (
            <GameController size={14} />
          ) : modalData.id === 3 ? (
            <Clock size={14} />
          ) : modalData.id === 4 ? (
            <Image size={14} />
          ) : (
            <TriangleFill size={14} />
          )}
          <span>project-{modalData.title.replace(/\s+/g, '-')}</span>
          <Cross
            onClick={() => setModal((prev) => ({ ...prev, isOpen: false }))}
            className='cursor-pointer'
            size={14}
          />
        </div>
        <img
          className='w-full rounded-md self-center'
          src={modalData.img}
          alt={modalData.title}
        />
        <div className='flex flex-col gap-2'>
          <span className='text-xl md:text-2xl xl:text-3xl capitalize font-semibold'>
            {modalData.title}
          </span>
          <div className='flex gap-2 flex-wrap'>
            {modalData.stack.map((item) => (
              <span
                key={item}
                className='p-1 px-3 bg-white/10 rounded-lg font-mono text-xs'
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <p className='text-sm md:text-md xl:text-[15px] text-neutral-300'>
            {modalData.desc}
          </p>
          <div className='flex gap-2 items-center'>
            <a className='w-full' href={modalData.github}>
              <button className='w-full bg-charcoal-100 flex items-center justify-center p-2 xl:p-3 rounded-md'>
                <GithubFill size={20} />
              </button>
            </a>
            <a className='w-full' href={modalData.liveSite}>
              <button className='w-full bg-charcoal-100 flex items-center justify-center p-2 xl:p-3 rounded-md'>
                <LinkOut size={20} />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ProjectModal;
