import { GoOrganization } from "react-icons/go";
import { IoPersonSharp, IoMail, IoCall } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSearch, FaTrashAlt } from "react-icons/fa";
import NoData from "./NoData";
import Data from "./Data";
import AddContact from "./AddContact";
import { PopupContext } from "../../../contexts/PopupContext";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
const API = import.meta.env.VITE_API_BASE_URL;
export default function HRContactsContent() {
  const [contacts, setContacts] = useState([]);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this Contact?"))
      return;

    try {
      await axios.delete(`${API}/api/contacts/delete/${id}`, {
        withCredentials: true,
      });

      setContacts((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete interview.");
    }
  };

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get(`${API}/api/contacts/all`, {
          withCredentials: true,
        });

        const data = res.data.sort((a, b) => a.name.localeCompare(b.name));

        setContacts(data);
      } catch (err) {
        console.error("Error fetching interviews:", err);
      }
    };

    fetchContacts();
  }, []);

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

      {contacts.length === 0 && (
        <div className="HRContactsContainer flex-col gap-1   p-8 w-full h-full">
          {popup && <AddContact />}
          <NoData />
        </div>
      )}
      {!contacts.length === 0 && (
        <div className="HRContactsContainer flex flex-col gap-1   p-8 w-full h-full">
          <div className="tableWrapper overflow-auto text-[#e5e5e5] w-full h-full">
            <table className="table-auto w-full border-collapse border border-[#3f3f46]">
              <thead className="bg-[#27272A] font-bold">
                <tr>
                  <th className="border border-[#3f3f46] p-2 text-center">
                    <div className="flex gap-2 justify-center items-center">
                      <IoPersonSharp /> <p>HR Name</p>
                    </div>
                  </th>
                  <th className="border border-[#3f3f46] p-2 text-center">
                    <div className="flex gap-2 justify-center items-center">
                      <GoOrganization /> <p>Organization</p>
                    </div>
                  </th>
                  <th className="border border-[#3f3f46] p-2 text-center">
                    <div className="flex gap-2 justify-center items-center">
                      <IoMail className="text-md" /> <p>Mail</p>
                    </div>
                  </th>
                  <th className="border border-[#3f3f46] p-2 text-center">
                    <div className="flex gap-2 justify-center items-center">
                      <IoCall /> <p>Phone Number</p>
                    </div>
                  </th>
                  <th className="border border-[#3f3f46] p-2 text-center">
                    <div className="flex gap-2 justify-center items-center">
                      <IoLogoWhatsapp /> <p>Whatsapp</p>
                    </div>
                  </th>
                  <th className="border border-[#3f3f46] p-2 text-center">
                    <div className="flex gap-2 justify-center items-center">
                      <FaTrashAlt />
                      <p>Delete Contact</p>
                    </div>
                  </th>
                </tr>
              </thead>
              {contacts.map((contact, index) => (
                <Data
                  id={contact._id}
                  key={index}
                  name={contact.name}
                  phone={contact.phone}
                  email={contact.email}
                  whatsapp={contact.whatsapp}
                  company={contact.company}
                  handleDelete={handleDelete}
                />
              ))}
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
