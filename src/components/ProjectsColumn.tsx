import MainRepos from "./ProjectsBoxes/MainRepos";
import MyProjects from "./ProjectsBoxes/MyProjects";

const ProjectsColumn: React.FC = () => {
  return (
    <div className="lg:h-32 row-span-2 lg:w-9/12 sm:w-full">
      <MyProjects />
      <MainRepos />
    </div>
  );
}

export default ProjectsColumn;
