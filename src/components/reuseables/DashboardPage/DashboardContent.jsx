import DashboardBox from "./DashboardBox";
import { FaLocationArrow } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { SiStagetimer } from "react-icons/si";
import { LuBuilding } from "react-icons/lu";
import NoData from "./NoData";

export default function DashboardContent() {
  const firstContainer = [
    {
      Logo: <FaLocationArrow />,
      text: "Total Applications",
      number: 0,
      bgcolor: "bg-sky-700",
    },
    {
      Logo: <SiStagetimer />,
      text: "In Progress",
      number: 0,
      bgcolor: "bg-[#f6bd60]",
    },
    {
      Logo: <IoIosMailOpen />,
      text: "Offers",
      number: 0,
      bgcolor: "bg-[#90be6d]",
    },
    { Logo: <ImCross />, text: "Rejected", number: 0, bgcolor: "bg-[#9d0208]" },
  ];
  return (
    <div className="fullContainer w-full h-full  flex flex-col">
      <div className="firstContainer text-[#e5e5e5] pt-8 w-full md:h-1/5 md:flex grid grid-cols-2 gap-4 p-4 justify-around items-center">
        {firstContainer.map((item, index) => (
          <DashboardBox
            Logo={item.Logo}
            text={item.text}
            number={item.number}
            bgcolor={item.bgcolor}
          />
        ))}
      </div>
      <div className="SecondContainer flex-1 h-full flex w-full md:flex-row flex-col text-[#e5e5e5]">
        <div className="leftMainContent w-full flex  p-4 h-full justify-center items-center">
          <div className="recentInterviewsContainer shadow-xl shadow-zinc-900 rounded-md w-full h-full flex flex-col">
            <div className="upcomingInterviewTop w-full md:h-1/5 bg-zinc-900 rounded-t-md border-b border-black flex justify-between items-center p-7">
              <p className="text-2xl font-bold">Recent Interviews</p>
              <button className="md:hover:text-black px-4 py-2 rounded-md md:hover:bg-[#f6bd60] hover:cursor-pointer md:text-[#e5e5e5] text-black bg-[#f6bd60] md:bg-transparent">
                View All
              </button>
            </div>
            <div className="recentInterviewsContent rounded-b-md bg-zinc-800 flex flex-col w-full md:h-full h-[50vh] justify-center items-center">
              <div className="noInterview flex flex-col gap-5">
                <div className="flex justify-center items-center w-full h-full text-9xl text-zinc-400">
                  <LuBuilding />
                </div>
                <div className="text-center flex flex-col items-center gap-3">
                  <p className="text-zinc-300 text-xl">No interviews yet</p>
                  <p className="text-zinc-300">
                    Add your first interview to get started
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rightMainContent md:w-1/3 h-full flex p-4 justify-center items-center">
          <div className="upcomingInterviewsContainer shadow-xl shadow-zinc-900 rounded-md w-full h-full flex flex-col">
            <div className="titleSection w-full md:h-1/5 bg-zinc-900 rounded-t-md border-b border-black flex justify-between items-center p-7">
              <p className="text-xl font-bold">Upcoming Interviews</p>
            </div>
            <div className="upcomingInterviewsContent rounded-b-md bg-zinc-800 flex flex-col w-full md:h-full h-[50vh] justify-center items-center">
              <NoData />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
