import NoData from "./NoData";
import Data from "./Data";
import AddResume from "./AddResume";
import { useContext, useEffect, useState } from "react";
import { PopupContext } from "../../../contexts/PopupContext";
import axios from "axios";
const API = import.meta.env.VITE_API_BASE_URL;
import PdfThumbnail from "./PDFThumbnail";

export default function ResumeContent() {
  const [resumes, setResumes] = useState([]);

  const handleDownload = (filename) => {
    const link = document.createElement("a");
    link.href = `${API}/uploads/resumes/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this resume?")) return;

    try {
      await axios.delete(`${API}/api/resumes/${id}`, {
        withCredentials: true,
      });
      setResumes((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Error deleting resume:", err);
      alert("Failed to delete resume.");
    }
  };

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const res = await axios.get(`${API}/api/resumes/all`, {
          withCredentials: true,
        });
        setResumes(res.data.resumes);
      } catch (err) {
        console.error("Error fetching resumes:", err);
      }
    };

    fetchResumes();
  }, []);

  const { popup } = useContext(PopupContext);
  return (
    <div className="fullContent flex flex-col w-full h-full">
      {popup && <AddResume />}
      {resumes.length === 0 && <NoData />}
      {resumes.length !== 0 && (
        <div className="outerContainer flex flex-wrap gap-10 p-4 ">
          {resumes.map((item, index) => (
            <Data
              title={item.title}
              key={index}
              thumbnail={
                <PdfThumbnail
                  fileUrl={`${API}/uploads/resumes/${item.filename}`}
                />
              }
              onDownload={() => handleDownload(item.filename)}
              onDelete={() => handleDelete(item._id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
