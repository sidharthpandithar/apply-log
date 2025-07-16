import { LuBuilding } from "react-icons/lu";
export default function NoDataInterview() {
  return (
    <div className="noInterview flex flex-col gap-5">
      <div className="flex justify-center items-center w-full h-full text-9xl text-zinc-400">
        <LuBuilding />
      </div>
      <div className="text-center flex flex-col items-center gap-3">
        <p className="text-zinc-300 text-xl">No interviews yet</p>
        <p className="text-zinc-300">Add your first interview to get started</p>
      </div>
    </div>
  );
}
