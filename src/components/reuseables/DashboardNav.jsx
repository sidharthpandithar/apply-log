import { MdAdd } from "react-icons/md";
export default function DashboardNav({ children }) {
  const nav_items = ["Dashboard", "Interviews", "Resumes", "HR Contacts"];
  return (
    <div className="EntireNav flex">
      <div className="leftNav w-1/6 min-h-screen text-[#e5e5e5]">
        <div className="h-[12vh] w-full flex justify-center items-center ">
          <p className="text-3xl font-bold">ApplyLog</p>
        </div>
        <div className=" flex flex-col items-center">
          {nav_items.map((item, index) => {
            return (
              <div key={index} className="text-start">
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <div className="rightNav w-full flex flex-col min-h-screen">
        <div className="rightNavTop flex h-[14vh] w-full justify-between">
          <div className="flex gap-10 p-4 text-[#e5e5e5]">
            <div className="justify-center  flex flex-col">
              <p className="text-2xl">Dashboard</p>
              <p className="text-zinc-300">
                Welcome back! Here's your interview overview.
              </p>
            </div>
          </div>
          <div className="p-4 flex justify-center items-center">
            <button className="flex justify-center bg-[#a7c957] items-center gap-2 rounded-md py-1 px-2 pr-4">
              <MdAdd /> Add Interview
            </button>
          </div>
        </div>
        <div className="rightMainContent h-full w-full">{children}</div>
      </div>
    </div>
  );
}
