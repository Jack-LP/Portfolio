import React from 'react';

const SectionTemplate = ({ children, sectionTitle }) => {
  return (
    <div className='flex flex-col gap-8'>
      <h2 className='font-body font-semibold text-5xl underline decoration-4 decoration-emerald-600'>
        {sectionTitle}
      </h2>
      {children}
    </div>
  );
};

export default SectionTemplate;
