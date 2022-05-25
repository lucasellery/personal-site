import { PersonalInfo } from "./ProfileBoxes/PersonalInfo";
import WorkInfo from "./ProfileBoxes/WorkInfo";

export function ProfileColumn() {
  return (
    <div className="row-span-2 md:w-3/12">
      <PersonalInfo />
      <WorkInfo />
    </div>
  )
}
