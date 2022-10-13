import React from 'react';

const RepoCard = ({ title, desc, lang, link }) => {
  return (
    <a href={link} className='flex flex-col gap-2 bg-charcoal-200 w-full p-2'>
      <div className='flex gap-2 items-center'>
        <span className='text-lg font-semibold text-emerald-600'>{`/${title}`}</span>
        <span className='text-xs text-white/75'>{`(${lang})`}</span>
      </div>

      <p className='text-white/75 text-sm'>{desc ? desc : 'No description'}</p>
    </a>
  );
};

export default RepoCard;
