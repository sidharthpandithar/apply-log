import { MdAdd } from "react-icons/md";
import { FaChartBar } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoIosContacts } from "react-icons/io";
import { NavLink, Link } from "react-router";
export default function DashboardNav({
  children,
  title,
  description,
  buttonText,
}) {
  const nav_items = [
    { text: "Dashboard", logo: <FaChartBar />, link: "/dashboard" },
    { text: "Interviews", logo: <SlCalender />, link: "/interviews" },
    { text: "Resumes", logo: <IoDocumentTextOutline />, link: "/resumes" },
    { text: "HR Contacts", logo: <IoIosContacts />, link: "/contacts" },
  ];
  return (
    <div className="EntireNav min-h-screen flex">
      <div className="leftNav md:inline hidden border-r border-black bg-black/60 w-1/6 min-h-screen text-[#e5e5e5]">
        <div className="h-[12vh] w-full flex justify-center items-center ">
          <p className="text-3xl font-bold">ApplyLog</p>
        </div>
        <div className="h-full flex flex-col items-center gap-5 w-full p-4 ">
          {nav_items.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={item.link}
                className={({ isActive }) =>
                  `flex justify-center items-center gap-3 w-full p-3 rounded-md ${
                    isActive ? "bg-zinc-700" : "bg-zinc-800"
                  }`
                }
              >
                {item.logo} {item.text}
              </NavLink>
            );
          })}
        </div>
      </div>
      <div className="rightNav w-full flex flex-col min-h-screen">
        <div className="rightNavTop border-black bg-black/60 border-b flex h-[14vh] w-full justify-between">
          <div className="flex gap-10 p-4 md:w-3/4 w-[60%] text-[#e5e5e5]">
            <div className="justify-center  flex flex-col">
              <p className="md:text-2xl text-xl">{title}</p>
              <p className="text-zinc-300 md:text-base text-sm">
                {description}
              </p>
            </div>
          </div>
          <div className="p-4 flex flex-1 justify-end items-center">
            <button className="flex justify-center bg-[#a7c957] text-sm md:text-base items-center gap-2 rounded-md py-1 px-2 pr-4">
              <MdAdd /> {buttonText}
            </button>
          </div>
        </div>
        <div className="rightMainContent h-full w-full">{children}</div>
      </div>
    </div>
  );
}
