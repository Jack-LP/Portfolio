import React, { useState } from 'react';

const icons = [
  {
    src: 'nextdotjs.svg',
    alt: 'NextJS',
  },
  {
    src: 'react.svg',
    alt: 'React',
  },
  {
    src: 'git.svg',
    alt: 'Git',
  },
  {
    src: 'tailwindcss.svg',
    alt: 'Tailwind',
  },
  {
    src: 'chakraui.svg',
    alt: 'Chakra',
  },
  {
    src: 'sass.svg',
    alt: 'SCSS',
  },
];

const MySkills = () => {
  return (
    <div id='tech' className='flex flex-col gap-8'>
      <h2 className='font-body font-semibold text-8xl underline decoration-4 decoration-emerald-600 self-center'>
        Frontend Dev
      </h2>
      <div className='flex flex-col border-[3px] border-[#a3a3a3] w-2/3 mx-auto gap-4 p-6'>
        <div className='font-mono text-lg '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          delectus totam praesentium provident architecto consectetur
          temporibus, asperiores facilis impedit vel laborum veniam dignissimos
          dolorum, dolorem illum? Perferendis culpa at vero, exercitationem,
          sapiente magni eius sit a sequi ad nostrum assumenda?
        </div>
        <span className='font-mono text-xl font-semibold'>
          Here&apos;s what I use:
        </span>
        <div className='flex border-t-2 justify-around pt-4 pb-12'>
          {icons.map((icon) => (
            <div
              key={icon.alt}
              className='flex flex-col gap-4 items-center relative group'
            >
              <img
                src={`/img/icons/${icon.src}`}
                alt={icon.alt}
                className='invert w-14 group-hover:scale-110 transition duration-300 ease-out'
              />
              <span className='p-1 px-3 bg-white/10 group-hover:bg-white/20 transition duration-300 ease-out rounded-lg font-mono absolute top-[70px]'>
                {icon.alt}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySkills;
