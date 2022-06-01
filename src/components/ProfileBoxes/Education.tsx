import { educationList } from "../../utils/workInfo";
import Title from "../Title";

interface IEducation {
  institution: string;
  course: string;
  date?: string;
}

const Education: React.FC = () => {
  return (
    <div className="bg-brand-500 w-full h-auto rounded-2xl p-8 flex flex-col drop-shadow-lg">
      <Title title="Educação" />

      <div className='flex flex-col ml-4 mt-5'>
        {educationList?.map((experience: IEducation) => (
          <div className='flex flex-col mb-3 border-l-2 border-brand-700 pl-4'>
            <h2 className='font-bold text-brand-300 text-sm'>{experience?.institution}</h2>
            <span className='text-brand-300 text-sm'>{experience?.date}</span>
            <span className='text-brand-300 text-sm font-semibold'>{experience?.course}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
