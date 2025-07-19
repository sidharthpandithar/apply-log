import { MdAdd } from "react-icons/md";
import { FaChartBar } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoIosContacts } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";
import { NavLink, Link } from "react-router";
import { useState, useContext, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PopupContext } from "../../contexts/PopupContext";
import axios from "axios";
import { useNavigate } from "react-router";
const API = import.meta.env.VITE_API_BASE_URL;

export default function DashboardNav({
  children,
  title,
  description,
  buttonText,
  mobdescription,
}) {
  const navigate = useNavigate();
  const logout = async () => {
    try {
      const res = await axios.get(`${API}/api/users/logout`, {
        withCredentials: true,
      });
      navigate("/");
    } catch (err) {
      console.error("Error logging out", err);
    }
  };

  const storedUser = localStorage.getItem("user");
  let loggedUser = null;

  if (storedUser) {
    loggedUser = JSON.parse(storedUser);
    console.log("User Email:", loggedUser.email);
  }

  const [isOpen, setIsOpen] = useState(false);
  const { popup, setPopup } = useContext(PopupContext);

  const nav_items = [
    { text: "Dashboard", logo: <FaChartBar />, link: "/dashboard" },
    { text: "Interviews", logo: <SlCalender />, link: "/interviews" },
    { text: "Resumes", logo: <IoDocumentTextOutline />, link: "/resumes" },
    { text: "HR Contacts", logo: <IoIosContacts />, link: "/contacts" },
  ];
  return (
    <div className="EntireNav min-h-screen w-full border  flex">
      <div className="leftNav md:inline hidden border-r border-black bg-black w-1/6 min-h-screen text-[#e5e5e5]">
        <div className="h-[12vh] w-full flex justify-center items-center ">
          <p className="text-3xl font-bold">ApplyLog</p>
        </div>
        <div className="h-[88vh] flex flex-col items-center gap-5 w-full p-4 ">
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

          <p>{loggedUser?.user?.email}</p>
          <div
            onClick={logout}
            className="flex justify-center items-center gap-3 px-4 py-2 rounded-md bg-zinc-800 hover:bg-zinc-700 hover:cursor-pointer"
          >
            <p className="text-xl text-bold ">Log Out</p>
            <BiLogOut className="text-3xl" />
          </div>
        </div>
      </div>
      <div className="rightNav border  w-full flex flex-col  min-h-screen">
        <div className="rightNavTop  bg-black flex h-[14vh]  justify-between">
          <div className="hamburgerNav md:hidden flex flex-col w-[20vw] min-h-screen ">
            <div
              onClick={() => setIsOpen((prev) => !prev)}
              className="icon w-[20vw] h-[12vh] text-6xl flex justify-center items-center text-[#e5e5e5]"
            >
              <div className="z-11 ">
                <GiHamburgerMenu />
              </div>
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="flex-col menuContent mt-4 h-3/4 w-[70vw] bg-black z-10 rounded-br-md"
                >
                  <div className="flex flex-col gap-5 text-[#e5e5e5] p-4">
                    {nav_items.map((item, index) => (
                      <NavLink
                        key={index}
                        to={item.link}
                        className={({ isActive }) =>
                          `flex justify-center items-center gap-3 w-full p-3 rounded-md ${
                            isActive ? "bg-zinc-700" : "bg-zinc-800"
                          }`
                        }
                        onClick={() => setIsOpen(false)}
                      >
                        {item.logo} {item.text}
                      </NavLink>
                    ))}
                    <div
                      onClick={logout}
                      className="flex jflex justify-center items-center gap-3 w-full p-3 rounded-md  bg-zinc-800 hover:bg-zinc-700 hover:cursor-pointer"
                    >
                      <BiLogOut className="text-xl" />
                      <p className="text-md text-bold ">Log Out</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="md:flex hidden gap-10 p-4 md:w-3/4 w-[60%] text-[#e5e5e5]">
            <div className="justify-center  flex flex-col">
              <p className="md:text-2xl text-xl">{title}</p>
              <p className="text-zinc-300 md:text-base text-sm">
                {description}
              </p>
            </div>
          </div>
          <div className="md:hidden flex gap-10 p-4 md:w-3/4 w-[60%] text-[#e5e5e5]">
            <div className="justify-center  flex flex-col">
              <p className="md:text-2xl text-xl">{title}</p>
              <p className="text-zinc-300 md:text-base text-sm">
                {mobdescription}
              </p>
            </div>
          </div>
          <div className="p-4 flex flex-1 justify-end items-center">
            <button
              onClick={() => setPopup(!popup)}
              className="flex justify-center bg-[#a7c957] text-sm md:text-base items-center gap-2 rounded-md py-1 px-2 pr-4"
            >
              <MdAdd /> {buttonText}
            </button>
          </div>
        </div>
        <div className="rightMainContent h-full w-full">{children}</div>
      </div>
    </div>
  );
}
