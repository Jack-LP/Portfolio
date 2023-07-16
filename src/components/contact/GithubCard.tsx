const GithubCard = ({ title, desc, lang, link }) => {
  return (
    <a
      href={link}
      target='_blank'
      className='flex flex-col gap-2 bg-dark-300 rounded-md w-full p-2'
    >
      <div className='flex gap-2 items-center'>
        <span className='text-lg font-space font-medium underline underline-offset-1 decoration-plum-100 decoration-2'>{`/${title}`}</span>
        <span className='text-xs text-white/75'>{`(${lang})`}</span>
      </div>

      <p className='text-white/75 text-sm'>{desc ? desc : 'No description'}</p>
    </a>
  );
};

export default GithubCard;
