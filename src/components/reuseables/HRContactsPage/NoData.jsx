import { MdAdd } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";
export default function NoData() {
  return (
    <div className="noResume gap-3 w-full h-2/3 flex justify-center items-center flex-col">
      <IoIosContacts className="text-9xl text-zinc-700 rounded-full p-4 h-[150px] w-[150px] bg-zinc-900" />
      <p className="text-zinc-600 text-2xl font-bold">No contacts found</p>
      <p className="text-zinc-600">Add your first contact to get started.</p>
      <div className="flex justify-center pt-2 items-center">
        <button className="flex justify-center bg-[#a7c957] items-center gap-2 rounded-md py-1 px-2 pr-4">
          <MdAdd /> Add Contact
        </button>
      </div>
    </div>
  );
}
