import React from 'react';

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

const About = () => {
  return (
    <div id='about' className='flex flex-col gap-8 text-white'>
      <h2 className='font-body font-semibold text-5xl md:text-6xl lg:text-7xl xl:text-8xl underline decoration-4 decoration-cyan-600 self-center'>
        Frontend Dev
      </h2>
      <div className='flex flex-col border-[3px] border-[#a3a3a3] w-11/12 xl:w-2/3 mx-auto gap-6 p-6'>
        <div className='font-mono text-lg leading-7'>
          As a{' '}
          <span className='underline decoration-cyan-600 decoration-2'>
            self-taught
          </span>{' '}
          web developer with a passion for front-end technologies, I have honed
          my skills in{' '}
          <span className='underline decoration-cyan-600 decoration-2'>
            HTML, CSS, and Javascript
          </span>{' '}
          through hands-on projects and self-directed learning. With a keen eye
          for detail and a dedication to creating{' '}
          <span className='underline decoration-cyan-600 decoration-2'>
            intuitive
          </span>{' '}
          user experiences, I am eager to bring my skills to a junior web
          development position. This portfolio showcases a selection of my
          projects, demonstrating my ability to create{' '}
          <span className='underline decoration-cyan-600 decoration-2'>
            responsive, visually appealing, and functional
          </span>{' '}
          websites.
        </div>
        <span className='font-mono text-xl font-semibold'>
          Here&apos;s what I use:
        </span>
        <div className='grid justify-center grid-cols-3 gap-y-4 lg:grid-cols-6 border-t-2 pt-4'>
          {icons.map((icon) => (
            <div
              key={icon.alt}
              className='flex flex-col gap-4 items-center relative group'
            >
              <img
                src={`/img/icons/${icon.src}`}
                alt={icon.alt}
                className='invert w-10 md:w-12 lg:w-14 group-hover:scale-110 transition duration-300 ease-out'
              />
              <span className='p-1 px-3 bg-white/10 group-hover:bg-white/20 transition duration-300 ease-out rounded-lg font-mono'>
                {icon.alt}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
