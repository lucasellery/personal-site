import Education from "./ProfileBoxes/Education";
import Experiences from "./ProfileBoxes/Experiences";
import { PersonalInfo } from "./ProfileBoxes/PersonalInfo";
import Technologies from "./ProfileBoxes/Technologies";
import WorkInfo from "./ProfileBoxes/WorkInfo";

export function ProfileColumn() {
  return (
    <div className="row-span-2 lg:w-3/12 md:w-full">
      <PersonalInfo />
      <WorkInfo />
      <Technologies />
      <Experiences />
      <Education />
    </div>
  )
}
