import DashboardBox from "./DashboardBox";
import { FaLocationArrow } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { SiStagetimer } from "react-icons/si";
import AddInterview from "./AddInterview";
import { useEffect, useState, useContext } from "react";
import { PopupContext } from "../../../contexts/PopupContext";
import axios from "axios";
const API = import.meta.env.VITE_API_BASE_URL;

import NoData from "./NoData";
import NoDataInterview from "./NoDataInterview";
import DataInterview from "./DataInterview";
import Data from "./Data";

export default function DashboardContent() {
  const [interviews, setInterviews] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [totalInterviews, setTotalInterviews] = useState(0);
  const [inProgress, setInprogress] = useState(0);
  const [offers, setOffers] = useState(0);
  const [rejected, setRejected] = useState(0);

  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        const res = await axios.get(`${API}/api/interviews/all`, {
          withCredentials: true,
        });

        const sorted = res.data
          .sort((a, b) => new Date(a.date) - new Date(b.date))
          .slice(0, 6);

        setInterviews(sorted);

        const upcomingSorted = res.data
          .filter(
            (interview) =>
              new Date(interview.date) >= new Date() &&
              interview.status == "Applied"
          )
          .sort((a, b) => new Date(a.date) - new Date(b.date))
          .slice(0, 6);
        setUpcoming(upcomingSorted);

        const totalapps = res.data.length;
        setTotalInterviews(totalapps);

        const appsinprogress = res.data.filter(
          (item) =>
            item.status !== "Rejected" &&
            item.status !== "Offered" &&
            item.status !== "Accepted"
        ).length;

        setInprogress(appsinprogress);

        const appsOffers = res.data.filter(
          (item) => item.status == "Offered"
        ).length;
        setOffers(appsOffers);

        const appsRejections = res.data.filter(
          (item) => item.status == "Rejected"
        ).length;

        setRejected(appsRejections);

        console.log(totalapps);
      } catch (err) {
        console.error("Error fetching interviews:", err);
      }
    };

    fetchInterviews();
  }, []);

  const { popup } = useContext(PopupContext);
  const firstContainer = [
    {
      Logo: <FaLocationArrow />,
      text: "Applications",
      number: totalInterviews,
      bgcolor: "bg-sky-700",
    },
    {
      Logo: <SiStagetimer />,
      text: "In Progress",
      number: inProgress,
      bgcolor: "bg-[#f6bd60]",
    },
    {
      Logo: <IoIosMailOpen />,
      text: "Offers",
      number: offers,
      bgcolor: "bg-[#90be6d]",
    },
    {
      Logo: <ImCross />,
      text: "Rejected",
      number: rejected,
      bgcolor: "bg-[#9d0208]",
    },
  ];
  return (
    <div className="fullContainer w-full h-full  flex flex-col">
      <div className="firstContainer text-[#e5e5e5] pt-8 w-full md:h-1/5 md:flex grid grid-cols-2 gap-4 p-4 justify-around items-center">
        {popup && <AddInterview />}
        {firstContainer.map((item, index) => (
          <DashboardBox
            Logo={item.Logo}
            text={item.text}
            number={item.number}
            bgcolor={item.bgcolor}
            key={index}
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
            {interviews.length === 0 && (
              <div className="recentInterviewsContent border-white rounded-b-md bg-zinc-800 flex flex-col w-full md:h-full h-[50vh] justify-center items-center">
                <NoDataInterview />
              </div>
            )}
            {interviews.length !== 0 && (
              <div className="recentInterviewsContent p-2 rounded-b-md bg-zinc-800 flex flex-col w-full md:h-full h-[50vh] justify-start items-center">
                <div className="flex flex-col gap-5 w-full h-full">
                  {interviews.map((interview, index) => (
                    <DataInterview
                      key={index}
                      company={interview.company}
                      position={interview.position}
                      status={interview.status}
                      date={new Date(interview.date).toLocaleDateString(
                        "en-GB",
                        {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        }
                      )}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="rightMainContent md:w-1/3 h-full flex p-4 justify-center items-center">
          <div className="upcomingInterviewsContainer shadow-xl shadow-zinc-900 rounded-md w-full h-full flex flex-col">
            <div className="titleSection w-full md:h-1/5 bg-zinc-900 rounded-t-md border-b border-black flex justify-between items-center p-7">
              <p className="text-xl font-bold">Upcoming Interviews</p>
            </div>
            {interviews.length === 0 && (
              <div className="upcomingInterviewsContent rounded-b-md bg-zinc-800 flex flex-col w-full md:h-full h-[50vh] mb-5 justify-center items-center">
                <NoData />
              </div>
            )}
            {interviews.length !== 0 && (
              <div className="upcomingInterviewsContent p-2 rounded-b-md bg-zinc-800 flex flex-col w-full md:h-full h-[50vh] mb-5 justify-center items-center">
                <div className="flex flex-col gap-5 w-full h-full">
                  {upcoming.map((interview, index) => (
                    <Data
                      key={index}
                      company={interview.company}
                      status={interview.status}
                      date={new Date(interview.date).toLocaleDateString(
                        "en-GB",
                        {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        }
                      )}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
