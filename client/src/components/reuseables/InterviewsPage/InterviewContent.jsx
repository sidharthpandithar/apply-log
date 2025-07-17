import { FaSearch } from "react-icons/fa";
import NoData from "./NoData";
import Data from "./Data";
import { PopupContext } from "../../../contexts/PopupContext";
import { useContext } from "react";
import AddInterview from "./AddInterview";
export default function InterviewContent() {
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
            />
            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-zinc-500" />
          </div>
          <div className="dropDownflex-1 flex h-10 md:w-1/5 w-1/2 justify-center items-center border border-zinc-500 rounded-md text-zinc-500">
            <select
              name="interviews"
              className="w-full  h-10 md:text-base text-sm"
              id="interviews"
            >
              <option value="all">All Interviews</option>
              <option value="applied">Applied</option>
              <option value="phone">Phone Screen</option>
              <option value="technical">Technical</option>
              <option value="final">Final Interview</option>
              <option value="offered">Offered</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>
      </div>
      <div className="interviewContainer flex w-full h-full">
        {popup && <AddInterview />}
        <NoData />
      </div>
    </div>
  );
}
