import { ProfileColumn } from "../components/ProfileColumn";

export function Main() {
  return (
    <div className="w-full flex flex-col gap-16 p-10 md:flex-row">
      <ProfileColumn />
      <div className="bg-sky-400 w-9/12 h-32">
        Luana
      </div>
    </div>
  )
}
