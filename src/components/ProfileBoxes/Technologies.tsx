import { technologiesList } from "../../utils/workInfo";
import Title from "../Title";

interface ITechs {
  tech: string;
  background: string;
  color: string;
}

const Technologies: React.FC = () => {
  return (
    <div className="bg-brand-500 w-full h-auto rounded-2xl p-8 flex flex-col drop-shadow-lg">
      <Title title="Tecnologias" />

      <div className="grid grid-cols-3 gap-3 mt-5">
        {technologiesList?.map((technology: ITechs) => (
          <span
            className="flex items-center justify-center p-2 rounded-3xl font-bold text-xs uppercase text-center"
            style={{ backgroundColor: technology?.background, color: technology?.color }}
          >
            {technology?.tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Technologies;