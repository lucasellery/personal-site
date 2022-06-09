import React from 'react';
import { experiencesList } from '../../utils/workInfo';
import Title from '../Title';

interface IExperiences {
  company: string;
  position: string;
  date: string;
}

const Experiences: React.FC = () => {
  return (
    <div className="bg-brand-500 w-full h-auto rounded-2xl p-8 flex flex-col drop-shadow-lg my-7">
      <Title title="Experiências" />

      <div className='flex flex-col ml-4 mt-5'>
        {experiencesList?.map((experience: IExperiences) => (
          <div key={experience.date} className='flex flex-col mb-3 border-l-2 border-brand-700 pl-4'>
            <h2 className='font-bold text-brand-300 text-sm'>{experience?.company}</h2>
            <span className='text-brand-300 text-sm'>{experience?.date}</span>
            <span className='text-brand-300 text-sm font-semibold'>{experience?.position}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experiences;
