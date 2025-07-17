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

  return (
    <tbody>
      <tr className="text-center">
        <td className="border border-[#3f3f46] p-2">{company}</td>
        <td className="border border-[#3f3f46] p-2">{position}</td>
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
        <td className="border border-[#3f3f46] p-2">{date}</td>
        <td
          onClick={() => handleDelete(id)}
          className="border border-[#3f3f46] p-2"
        >
          Delete
        </td>
      </tr>
    </tbody>
  );
}
