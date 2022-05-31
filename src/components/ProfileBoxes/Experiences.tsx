import React from 'react';

interface IExperiences {
  company: string;
  position: string;
  date: string;
}

const Experiences: React.FC = () => {

  const experiencesList = [
    {
      company: 'OSF Digital',
      date: 'Novembro de 2021 - atualmente',
      position: 'Front end Developer - Junior 1',
    },
    {
      company: 'Somapay',
      date: 'Setembro de 2021 - novembro de 2021',
      position: 'Front end Developer',
    },
    {
      company: 'Somapay',
      date: 'Setembro de 2020 - Setembro de 2021',
      position: 'Front end Developer - intern',
    },
    {
      company: 'Casa Magalhães',
      date: 'Março 2020',
      position: 'Java developer - intern',
    },
    {
      company: 'IFCE (bolsista)',
      date: 'Novembro 2019 - fevereiro 2020',
      position: 'Flutter developer',
    },
  ];

  return (
    <div className="bg-brand-500 w-full h-auto rounded-2xl p-8 flex flex-col drop-shadow-lg my-7">
      <h1 className="text-xl text-brand-300 font-bold mb-5">Experiências</h1>

      <div className='flex flex-col ml-7'>
        {experiencesList?.map((experience: IExperiences) => (
          <div className='flex flex-col mb-3'>
            <h2 className='font-bold text-brand-300 text-sm'>{experience?.company}</h2>
            <span className='text-brand-300 text-sm'>{experience?.date}</span>
            <span className='text-brand-300 text-sm'>{experience?.position}</span>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Experiences;
