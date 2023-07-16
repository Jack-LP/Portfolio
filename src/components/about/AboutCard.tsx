const AboutCard = () => {
  const skills = ['javascript', 'react', 'tailwind', 'git', 'sass'];

  return (
    <div className='flex flex-col gap-5 bg-dark-200 border-2 border-dark-100 rounded-md p-5 font-spaceMono'>
      <p>
        As a self-taught web developer with a passion for front-end
        technologies, I have honed my skills in HTML, CSS, and Javascript
        through hands-on projects and self-directed learning. With a keen eye
        for detail and a dedication to creating intuitive user experiences, I am
        eager to bring my skills to a junior web development position. This
        portfolio showcases a selection of my projects, demonstrating my ability
        to create responsive, visually appealing, and functional websites.
      </p>
      <div className='w-full h-[2px] bg-dark-100'></div>
      <div className='flex flex-wrap justify-around gap-10'>
        {skills.map((item) => (
          <div className='flex flex-col items-center gap-2 group'>
            <img
              src={`/img/icons/${item}.svg`}
              className='w-12 invert group-hover:scale-110 transition duration-300 ease-out'
              alt=''
            />
            <span className='border-2 border-dark-100 px-2 rounded-md capitalize'>
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AboutCard;
