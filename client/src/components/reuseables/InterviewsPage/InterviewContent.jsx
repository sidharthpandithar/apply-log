import { FaSearch, FaTrashAlt } from "react-icons/fa";
import NoData from "./NoData";
import Data from "./Data";
import { PopupContext } from "../../../contexts/PopupContext";
import { useContext, useState, useEffect } from "react";
import AddInterview from "./AddInterview";
import axios from "axios";
import { FaBarsProgress } from "react-icons/fa6";
import { GoOrganization } from "react-icons/go";
import { ImProfile } from "react-icons/im";
import { BsCalendarDateFill } from "react-icons/bs";

const API = import.meta.env.VITE_API_BASE_URL;

export default function InterviewContent() {
  const [interviews, setInterviews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this interview?"))
      return;

    try {
      await axios.delete(`${API}/api/interviews/delete/${id}`, {
        withCredentials: true,
      });

      setInterviews((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete interview.");
    }
  };

  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        const res = await axios.get(`${API}/api/interviews/all`, {
          withCredentials: true,
        });

        const sorted = res.data.sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );

        setInterviews(sorted);
      } catch (err) {
        console.error("Error fetching interviews:", err);
      }
    };

    fetchInterviews();
  }, []);

  const filteredInterviews = interviews.filter((item) => {
    const matchesSearch =
      item.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.position.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || item.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const { popup, setPopup } = useContext(PopupContext);
  return (
    <div className="fullContent flex flex-col w-full h-full">
      <div className="searchContainer w-full h-1/8 flex  justify-between">
        <div className="searchBar w-full gap-5 flex justify-center border-b items-center p-4">
          <div className="relative w-3/4">
            <input
              type="text"
              className="h-10 pl-10 pr-4 py-2 w-full border rounded-md text-zinc-500"
              placeholder="Search interviews..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-zinc-500" />
          </div>
          <div className="dropDownflex-1 flex h-10 md:w-1/5 w-1/2 justify-center items-center border border-zinc-500 rounded-md text-zinc-500">
            <select
              name="interviews"
              className="w-full  h-10 md:text-base text-sm"
              id="interviews"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Interviews</option>
              <option value="Applied">Applied</option>
              <option value="Phone Screening">Phone Screen</option>
              <option value="Technical">Technical</option>
              <option value="Final">Final Interview</option>
              <option value="Offered">Offered</option>
              <option value="Rejected">Rejected</option>
              <option value="Accepted">Accepted</option>
            </select>
          </div>
        </div>
      </div>
      <div className="interviewContainer p-8 flex w-full h-full">
        {popup && <AddInterview />}
        {interviews.length === 0 && <NoData />}
        {interviews.length !== 0 && (
          <>
            <div className="tableWrapper overflow-auto text-[#e5e5e5] w-full h-full">
              <table className="table-auto w-full border-collapse border border-[#3f3f46]">
                <thead className="bg-[#27272A] font-bold">
                  <tr>
                    <th className="border border-[#3f3f46] p-2 text-center">
                      <div className="flex gap-2 justify-center items-center">
                        <GoOrganization /> <p>Organization</p>
                      </div>
                    </th>
                    <th className="border border-[#3f3f46] p-2 text-center">
                      <div className="flex gap-2 justify-center items-center">
                        <ImProfile />
                        <p>Position</p>
                      </div>
                    </th>
                    <th className="border border-[#3f3f46] p-2 text-center">
                      <div className="flex gap-2 justify-center items-center">
                        <FaBarsProgress /> <p>Current Status</p>
                      </div>
                    </th>
                    <th className="border border-[#3f3f46] p-2 text-center">
                      <div className="flex gap-2 justify-center items-center">
                        <BsCalendarDateFill />
                        <p>Date</p>
                      </div>
                    </th>
                    <th className="border border-[#3f3f46] p-2 text-center">
                      <div className="flex gap-2 justify-center items-center">
                        <FaTrashAlt />
                        <p>Delete Interview</p>
                      </div>
                    </th>
                  </tr>
                </thead>
                {filteredInterviews.map((item, index) => (
                  <Data
                    id={item._id}
                    key={index}
                    handleDelete={handleDelete}
                    company={item.company}
                    position={item.position}
                    date={new Date(item.date).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                    status={item.status}
                  />
                ))}
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
