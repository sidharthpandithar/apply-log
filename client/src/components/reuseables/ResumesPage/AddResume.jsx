import { ImCancelCircle } from "react-icons/im";
import { MdAdd } from "react-icons/md";
import { useContext, useState } from "react";
import { PopupContext } from "../../../contexts/PopupContext";
import axios from "axios";
const API = import.meta.env.VITE_API_BASE_URL;

export default function UploadResume() {
  const { popup, setPopup } = useContext(PopupContext);

  const [title, setTitle] = useState("");
  const [resumeFile, setResumeFile] = useState(null);

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !resumeFile) {
      alert("Both title and resume file are required");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("resume", resumeFile);

    try {
      const res = await axios.post(`${API}/api/resumes/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      console.log("Upload success:", res.data);
      setTitle("");
      setResumeFile(null);
      setPopup(false); // Close popup
    } catch (err) {
      console.error("Upload failed:", err);
    }
  };
  return (
    <div className="md:w-3/4 md:h-3/4 h-[80%] w-[85%] absolute z-9 justify-center items-center">
      <div className="md:w-[80%] w-full md:h-[80%] h-2/3 absolute md:left-[15%] md:p-8 rounded-md bg-zinc-950 flex flex-col items-center">
        <div className="flex flex-col w-full h-full md:border-zinc-800 rounded-md border justify-start md:justify-center items-center">
          <form
            className="flex flex-col gap-5 md:gap-7 md:w-2/3 py-5 md:justify-center items-center"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className="flex text-[#e5e5e5] w-full justify-between px-5 items-center gap-3">
              <label htmlFor="title" className="text-base md:text-xl">
                Resume Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border md:w-1/3 w-1/2 pl-2 py-1 rounded-md"
                placeholder="e.g. Frontend Developer Resume"
              />
            </div>

            <div className="flex text-[#e5e5e5] w-full justify-between px-5 items-center gap-3">
              <label htmlFor="resume" className="text-base md:text-xl">
                Upload Resume
              </label>
              <input
                type="file"
                id="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="border md:w-1/3 w-1/2 py-1 text-white"
              />
            </div>

            <div className="flex gap-7 md:gap-15 w-full md:w-2/3 md:h-full py-5 justify-center items-center">
              <button
                type="submit"
                className="flex justify-center bg-[#a7c957] text-sm md:text-base items-center gap-2 rounded-md md:w-[10vw] w-[30vw] py-1"
              >
                <MdAdd /> <p>Upload Resume</p>
              </button>
              <button
                type="button"
                onClick={() => setPopup(false)}
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
