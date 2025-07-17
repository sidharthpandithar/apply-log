import { FaSearch } from "react-icons/fa";
import NoData from "./NoData";
import Data from "./Data";
import AddContact from "./AddContact";
import { PopupContext } from "../../../contexts/PopupContext";
import { useContext } from "react";

export default function HRContactsContent() {
  const { popup } = useContext(PopupContext);
  return (
    <div className="fullContent flex flex-col w-full h-full">
      <div className="searchContainer w-full h-1/8 flex  justify-between">
        <div className="searchBar w-full gap-5 flex justify-center border-b items-center p-4">
          <div className="relative w-3/4">
            <input
              type="text"
              className="h-10 pl-10 pr-4 py-2 w-full border rounded-md text-zinc-500"
              placeholder="Search Contacts ..."
            />
            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-zinc-500" />
          </div>
        </div>
      </div>
      <div className="HRContactsContainer flex flex-col gap-1   p-8 w-full h-full">
        {popup && <AddContact />}
      </div>
    </div>
  );
}
