
const Technologies: React.FC = () => {

  const technologiesList = [
    {
      tech: 'Javascript',
      background: '#ffe8c2',
      color: '#111',
    },
    {
      tech: 'HTML5',
      background: '#f78764',
      color: '#111',
    },
    {
      tech: 'CSS3',
      background: '#80a1d4',
      color: '#111',
    },
    {
      tech: 'ReactJS',
      background: '#18206f',
      color: '#fff',
    },
    {
      tech: 'React Native',
      background: '#4f1271',
      color: '#fff',
    },
    {
      tech: 'TypeScript',
      background: '#88ccf1',
      color: '#c1c11',
    },
    {
      tech: 'Styled Components',
      background: '#e0acd5',
      color: '#c1c11',
    },
    {
      tech: 'TailwindCSS',
      background: '#177e89',
      color: '#fff'
    },
  ];

  return (
    <div className="bg-brand-500 w-full h-auto rounded-2xl p-8 flex flex-col drop-shadow-lg">
      <h1 className="text-xl text-brand-300 font-bold mb-5">
        Tecnologias
      </h1>

      <div className="grid grid-cols-3 gap-3">
        {technologiesList?.map((technology: any) => (
          <span
            className="flex items-center justify-center p-2 rounded-3xl font-bold text-xs uppercase text-center"
            style={{ backgroundColor: technology.background, color: technology.color }}
          >
            {technology.tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Technologies;