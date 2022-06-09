import { ProfileColumn } from "../components/ProfileColumn";
import ProjectsColumn from "../components/ProjectsColumn";

export function Main() {
  return (
    <div className="w-full flex flex-col p-10 md:flex-row gap-7 md:gap-16">
      <ProfileColumn />
      <ProjectsColumn />
    </div>
  )
}
