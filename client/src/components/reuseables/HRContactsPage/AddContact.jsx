import { ImCancelCircle } from "react-icons/im";
import { MdAdd } from "react-icons/md";
import { useContext, useState } from "react";
import { PopupContext } from "../../../contexts/PopupContext";
import axios from "axios";
const API = import.meta.env.VITE_API_BASE_URL;

export default function AddContact() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    whatsapp: "",
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
        `${API}/api/contacts/add`,
        {
          company: formData.organization,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          whatsapp: formData.whatsapp,
        },
        {
          withCredentials: true,
        }
      );

      setFormData({
        name: "",
        organization: "",
        email: "",
        phone: "",
        whatsapp: "",
      });
      setPopup(false); // Close popup after adding
    } catch (err) {
      console.error("Error adding interview:", err);
    }
  };

  const { popup, setPopup } = useContext(PopupContext);
  return (
    <div className="md:w-3/4 md:h-3/4 h-[80%] w-[85%] absolute z-12 justify-center items-center">
      <div className="md:w-[80%] w-full md:h-[80%] h-2/3 absolute md:left-[15%] md:p-8 rounded-md bg-zinc-950 flex flex-col items-center">
        <div className="flex flex-col w-full h-full md:border-zinc-800 rounded-md border  justify-start md:justify-center items-center">
          <form
            className="flex flex-col gap-5 md:gap-7 md:w-2/3  py-5 md:justify-center items-center"
            action=""
            onSubmit={handleSubmit}
          >
            <div className="flex text-[#e5e5e5] w-full justify-between px-5 items-center gap-3">
              <label htmlFor="name" className="text-base md:text-xl">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="border md:w-1/3 w-1/2 pl-2 py-1 rounded-md"
                placeholder="Contact Name"
              />
            </div>
            <div className="flex text-[#e5e5e5] w-full justify-between px-5 items-center gap-3">
              <label htmlFor="organization" className="text-base md:text-xl">
                Organization
              </label>
              <input
                value={formData.organization}
                onChange={handleChange}
                type="text"
                id="organization"
                className="border md:w-1/3 w-1/2 pl-2 py-1 rounded-md"
                placeholder="Organization Name"
              />
            </div>
            <div className="flex text-[#e5e5e5] w-full justify-between px-5 items-center gap-3">
              <label htmlFor="email" className="text-base md:text-xl">
                Email
              </label>
              <input
                value={formData.email}
                onChange={handleChange}
                type="email"
                id="email"
                className="border md:w-1/3 w-1/2 pl-2 py-1 rounded-md"
                placeholder="Email address"
              />
            </div>
            <div className="flex text-[#e5e5e5] w-full justify-between px-5 items-center gap-3">
              <label htmlFor="phone" className="text-base md:text-xl">
                Phone Number
              </label>
              <input
                value={formData.phone}
                onChange={handleChange}
                type="text"
                id="phone"
                className="border md:w-1/3 w-1/2 pl-2 py-1 rounded-md"
                placeholder="Phone number"
              />
            </div>
            <div className="flex text-[#e5e5e5] w-full justify-between px-5 items-center gap-3">
              <label htmlFor="whatsapp" className="text-base md:text-xl">
                Whatsapp Number
              </label>
              <input
                type="text"
                value={formData.whatsapp}
                onChange={handleChange}
                id="whatsapp"
                className="border md:w-1/3 w-1/2 pl-2 py-1 rounded-md"
                placeholder="Whatsapp Number"
              />
            </div>
            <div className="flex gap-7 md:gap-15 w-full md:w-2/3 md:h-full py-5  justify-center items-center">
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
