import Title from "../Title";

const MyProjects: React.FC = () => {
  return (
    <div className="h-20 bg-brand-500 rounded-2xl w-full flex flex-row justify-between items-center p-8 drop-shadow-lg">
      <Title title="Meus projetos" />
      <a
        href="https://github.com/lucasellery?tab=repositories"
        target="_blank"
        className="font-normal text-brand-300 hover:text-gray-300 hover:duration-200">
        Veja todos
      </a>
    </div>
  );
}

export default MyProjects;