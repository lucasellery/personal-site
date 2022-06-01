import { ProfileColumn } from "../components/ProfileColumn";
import ProjectsColumn from "../components/ProjectsColumn";

export function Main() {
  return (
    <div className="w-full flex flex-col gap-16 p-10 md:flex-row">
      <ProfileColumn />
      <ProjectsColumn />
    </div>
  )
}
