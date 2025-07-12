import { MdAdd } from "react-icons/md";
import { FaChartBar } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoIosContacts } from "react-icons/io";
import { useState } from "react";

export default function DashboardNav({ children }) {
  const nav_items = [
    { text: "Dashboard", logo: <FaChartBar /> },
    { text: "Interviews", logo: <SlCalender /> },
    { text: "Resumes", logo: <IoDocumentTextOutline /> },
    { text: "HR Contacts", logo: <IoIosContacts /> },
  ];
  return (
    <div className="EntireNav flex">
      <div className="leftNav border-r w-1/6 min-h-screen text-[#e5e5e5]">
        <div className="h-[12vh] w-full flex justify-center items-center ">
          <p className="text-3xl font-bold">ApplyLog</p>
        </div>
        <div className="h-full flex flex-col items-center gap-5 w-full p-4 ">
          {nav_items.map((item, index) => {
            return (
              <div
                key={index}
                className="flex justify-center items-center gap-3 border w-full p-3 rounded-md"
              >
                {item.logo} {item.text}
              </div>
            );
          })}
        </div>
      </div>
      <div className="rightNav w-full flex flex-col min-h-screen">
        <div className="rightNavTop border-[#e5e5e5] border-b flex h-[14vh] w-full justify-between">
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
