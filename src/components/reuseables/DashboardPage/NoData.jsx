import { AiOutlineLoading3Quarters } from "react-icons/ai";
export default function NoData() {
  return (
    <div className="noInterview flex flex-col gap-5">
      <div className="flex justify-center items-center w-full h-full text-9xl text-zinc-400">
        <AiOutlineLoading3Quarters />
      </div>
      <div className="text-content flex flex-col items-center justify-center text-center gap-3">
        <p className="text-xl">No interviews yet</p>
        <p className="text-zinc-300">Add your first interview to get started</p>
      </div>
    </div>
  );
}
