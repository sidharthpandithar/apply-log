import { useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_BASE_URL;

export default function Data({
  company,
  position,
  status,
  date,
  id,
  handleDelete,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newStatus, setNewStatus] = useState(status);

  const [isEditingDate, setIsEditingDate] = useState(false);
  const [newDate, setNewDate] = useState(date?.slice(0, 10)); // for input[type=date]
  const [tempDate, setTempDate] = useState(newDate);

  const handleStatusChange = async (e) => {
    const updatedStatus = e.target.value;
    setNewStatus(updatedStatus);
    setIsEditing(false);

    try {
      await axios.patch(
        `${API}/api/interviews/update/${id}`,
        { status: updatedStatus },
        { withCredentials: true }
      );
      console.log("Status updated successfully");
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  const handleDateSave = async () => {
    try {
      await axios.patch(
        `${API}/api/interviews/update/${id}`,
        {
          status: newStatus, // existing status
          date: tempDate, // new date
        },
        { withCredentials: true }
      );
      setNewDate(tempDate);
      setIsEditingDate(false);
      console.log("Date updated successfully");
    } catch (error) {
      console.error("Failed to update date:", error);
    }
  };

  const handleDateCancel = () => {
    setTempDate(newDate);
    setIsEditingDate(false);
  };

  return (
    <tbody>
      <tr className="text-center">
        <td className="border border-[#3f3f46] p-2">{company}</td>
        <td className="border border-[#3f3f46] p-2">{position}</td>

        {/* Status Cell */}
        <td
          className="border border-[#3f3f46] p-2 cursor-pointer"
          onClick={() => setIsEditing(true)}
        >
          {isEditing ? (
            <select
              value={newStatus}
              onChange={handleStatusChange}
              className="bg-zinc-700 text-white p-1 rounded"
            >
              <option value="Applied">Applied</option>
              <option value="Phone Screening">Phone Screening</option>
              <option value="Technical">Technical</option>
              <option value="Final Interview">Final Interview</option>
              <option value="Offered">Offered</option>
              <option value="Rejected">Rejected</option>
              <option value="Accepted">Accepted</option>
            </select>
          ) : (
            newStatus
          )}
        </td>

        {/* Date Cell - ✅ FIXED */}
        <td className="border border-[#3f3f46] p-2 text-white">
          {isEditingDate ? (
            <div className="flex flex-col items-center gap-1">
              <input
                type="date"
                value={tempDate}
                onChange={(e) => setTempDate(e.target.value)}
                className="bg-zinc-700 text-white p-1 rounded"
              />
              <div className="flex gap-2 mt-1">
                <button
                  onClick={handleDateSave}
                  className="bg-green-600 px-2 py-1 rounded text-white text-sm"
                >
                  Save
                </button>
                <button
                  onClick={handleDateCancel}
                  className="bg-red-600 px-2 py-1 rounded text-white text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <span
              onClick={() => setIsEditingDate(true)}
              className="cursor-pointer"
            >
              {new Date(newDate).toLocaleDateString("en-IN")}
            </span>
          )}
        </td>

        <td
          onClick={() => handleDelete(id)}
          className="border border-[#3f3f46] p-2 cursor-pointer text-red-500"
        >
          Delete
        </td>
      </tr>
    </tbody>
  );
}
