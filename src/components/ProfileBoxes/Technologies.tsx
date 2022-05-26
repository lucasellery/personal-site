
const Technologies: React.FC = () => {

  const technologiesList = [
    {
      tech: 'Javascript',
      color: '#ffe8c2',
    },
    {
      tech: 'HTML5',
      color: '#f78764',
    },
    {
      tech: 'CSS3',
      color: '#80a1d4',
    },
    {
      tech: 'ReactJS',
      color: '#18206f',
    },
    {
      tech: 'React Native',
      color: '#4f1271',
    },
    {
      tech: 'TypeScript',
      color: '#88ccf1',
    },
    {
      tech: 'Styled Components',
      color: '#e0acd5',
    },
    {
      tech: 'TailwindCSS',
      color: '#177e89',
    },
  ];

  return (
    <div className="bg-brand-500 w-full h-auto rounded-2xl p-8 flex flex-col drop-shadow-lg">
      <h1 className="text-xl text-brand-300 font-bold mb-5">
        Tecnologias
      </h1>

      <div className="grid grid-cols-3 gap-3">
        {technologiesList?.map((technology: any) => (
          <span className="bg-red-500 flex items-center justify-center p-2 rounded-3xl font-bold text-xs uppercase text-center">
            {technology.tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Technologies;