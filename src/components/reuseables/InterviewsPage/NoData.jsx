import { IoMdAdd } from "react-icons/io";
import { MdAdd } from "react-icons/md";
export default function NoData() {
  return (
    <div className="noInterview gap-3 w-full h-2/3 flex justify-center items-center flex-col">
      <IoMdAdd className="text-9xl text-zinc-700 h-[150px] w-[150px] rounded-full bg-zinc-900" />
      <p className="text-zinc-600 text-2xl font-bold">No interviews found</p>
      <p className="text-zinc-600">
        Get started by adding your first interview application.
      </p>
      <div className="flex justify-center pt-2 items-center">
        <button className="flex justify-center bg-[#a7c957] items-center gap-2 rounded-md py-1 px-2 pr-4">
          <MdAdd /> Add Interview
        </button>
      </div>
    </div>
  );
}
