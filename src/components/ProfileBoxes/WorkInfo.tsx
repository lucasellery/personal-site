import { workInfo } from '../../utils/workInfo';

const WorkInfo: React.FC = () => {
  return (
    <div className="bg-brand-500 w-full h-auto rounded-2xl p-8 flex flex-col items-start justify-between drop-shadow-lg my-7">
      {workInfo.map((info) => (
        <div key={info.label} className="flex flex-row items-center py-3">
          <span>{info.icon}</span>
          <span className="text-brand-300 ml-5 hover:text-gray-300 hover:duration-200 text-xs md:text-sm lg:text-sm">
            {info.link ? (
              <a href={info.link} target="_blank" className="flex flex-row items-center">
                {info.label}
                {info.secondaryIcon && info.secondaryIcon}
              </a>
            ) : (
              info.label
            )}
          </span>
        </div>
      ))}
    </div>
  );
}

export default WorkInfo;
