import { ImCancelCircle } from "react-icons/im";
import { MdAdd } from "react-icons/md";
import { useContext } from "react";
import { PopupContext } from "../../../contexts/PopupContext";
import { useState } from "react";
import axios from "axios";
const API = import.meta.env.VITE_API_BASE_URL;

export default function AddInterview() {
  const [formData, setFormData] = useState({
    organization: "",
    position: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `${API}/api/interviews/add`,
        {
          company: formData.organization,
          position: formData.position,
          date: formData.date,
        },
        {
          withCredentials: true,
        }
      );

      setFormData({ organization: "", position: "", date: "" });
      setPopup(false); // Close popup after adding
    } catch (err) {
      console.error("Error adding interview:", err);
    }
  };

  const { popup, setPopup } = useContext(PopupContext);
  return (
    <div className="w-full absolute   md:bottom-10 md:left-25 z-9 left-10 mt-10 h-full flex  md:justify-center md:items-center  items-start">
      <div className="md:w-[60%] w-[80%] md:h-[40%] h-[30%] md:p-8 rounded-md bg-zinc-950 flex flex-col items-center ">
        <div className="flex flex-col w-full h-full md:border-zinc-800 rounded-md border  justify-start md:justify-center items-center">
          <form
            className="flex flex-col gap-5 md:gap-7 md:w-2/3  py-5 md:justify-center items-center"
            action=""
            onSubmit={handleSubmit}
          >
            <div className="flex text-[#e5e5e5] w-full justify-between px-5 items-center gap-3">
              <label htmlFor="organization" className="text-base md:text-xl">
                Organization
              </label>
              <input
                type="text"
                value={formData.organization}
                onChange={handleChange}
                id="organization"
                className="border md:w-1/3 w-1/2 pl-2 py-1 rounded-md"
                placeholder="Organization"
              />
            </div>
            <div className="flex text-[#e5e5e5] w-full justify-between px-5 items-center gap-3">
              <label htmlFor="position" className="text-base md:text-xl">
                Position
              </label>
              <input
                type="text"
                id="position"
                value={formData.position}
                onChange={handleChange}
                className="border md:w-1/3 w-1/2 pl-2 py-1 rounded-md"
                placeholder="Position"
              />
            </div>
            <div className="flex text-[#e5e5e5] w-full justify-between px-5 items-center gap-3">
              <label htmlFor="date" className="text-base md:text-xl">
                Date
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={handleChange}
                id="date"
                className="border md:w-1/3 w-1/2 pl-2 py-1 rounded-md"
                placeholder="Date"
              />
            </div>

            <div className="flex gap-7 md:gap-15 w-full md:w-2/3 md:h-full py-5  justify-center items-center text-black">
              <button
                type="submit"
                className="flex justify-center bg-[#a7c957] text-sm md:text-base items-center gap-2 rounded-md md:w-[10vw] w-[30vw] py-1"
              >
                <MdAdd /> <p>Add Contact</p>
              </button>
              <button
                onClick={() => setPopup(!popup)}
                className="flex justify-center bg-[#dd1017] text-sm md:text-base items-center gap-2 rounded-md md:w-[10vw] w-[30vw] py-1"
              >
                <ImCancelCircle /> <p>Cancel</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
