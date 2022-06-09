import { AiOutlineFolder, AiOutlineStar, AiOutlineBranches } from 'react-icons/ai';
import { FaCircle } from 'react-icons/fa';
import {BsBoxArrowInUpRight} from 'react-icons/bs';

export interface RepositoriesProps {
  name: string;
  description: string;
  stargazers_count: number;
  forks: number;
  language: string;
  homepage?: string;
  id?: number;
}

const Repos: React.FC<RepositoriesProps> = ({
  name,
  description ,
  stargazers_count,
  forks,
  language ,
  homepage,
}) => {
  return (
    <div className="bg-brand-500 rounded-2xl p-8 drop-shadow-lg">
      <header className="flex flex-row items-center gap-3 text-brand-300">
        <AiOutlineFolder style={{ width: 20, height: 20 }} />
        <div className="flex flex-row items-center">
          <h3 className="text-sm md:text-lg">{name}</h3>
          {homepage && (
            <a
              href={homepage}
              target="_blank"
              className="ml-1 text-brand-300"
            >
              <BsBoxArrowInUpRight style={{ marginLeft: 4 }} />
            </a>
          )}
        </div>
      </header>

      <main className="mt-4">
        <p className="text-brand-300 text-sm">
          {description}
        </p>
      </main>

      <footer className="flex flex-row items-center justify-between mt-10">
        <div className="flex flex-row items-center gap-4">
          <div className="flex flex-row items-center gap-2 text-brand-300">
            <AiOutlineStar style={{ width: 18, height: 18 }} />
            <span className="text-sm">{stargazers_count}</span>
          </div>

          <div className="flex flex-row items-center gap-2 text-brand-300">
            <AiOutlineBranches style={{ width: 18, height: 18 }} />
            <span className="text-sm">{forks}</span>
          </div>
        </div> 

        <div className="flex flex-row items-center gap-2">
          <FaCircle color={language === "JavaScript" ? "#e6dc52" : "#295ec2"} />
          <span className="text-sm text-brand-300">{language}</span>
        </div>
      </footer>
    </div>
  );
}

export default Repos;