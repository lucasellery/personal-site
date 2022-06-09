import Title from "../Title";
import {BsBoxArrowInUpRight} from 'react-icons/bs';

const MyProjects: React.FC = () => {
  return (
    <div className="h-20 bg-brand-500 rounded-2xl w-full flex flex-row justify-between items-center p-8 drop-shadow-lg">
      <Title title="Meus projetos" />
      <div className="flex flex-row items-center justify-center">
        <a
          href="https://github.com/lucasellery?tab=repositories"
          target="_blank"
          className="font-normal text-brand-300 hover:text-gray-300 hover:duration-200"
        >
          Veja todos
        </a>
        <BsBoxArrowInUpRight style={{ marginLeft: 10, color: '#837E9F' }} />
      </div>
    </div>
  );
}

export default MyProjects;
