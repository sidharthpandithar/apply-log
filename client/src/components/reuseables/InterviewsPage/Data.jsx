import { FaBarsProgress } from "react-icons/fa6";
import { GoOrganization } from "react-icons/go";
import { ImProfile } from "react-icons/im";
import { useState } from "react";
import { BsCalendarDateFill } from "react-icons/bs";
export default function Data() {
  const [editing, setEditing] = useState(false);
  const [status, setStatus] = useState("Applied");
  return (
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
                <p>Updated On</p>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="border border-[#3f3f46] p-2">Amazon</td>
            <td className="border border-[#3f3f46] p-2">SDE 1</td>
            <td
              className="border border-[#3f3f46] p-2"
              onClick={() => setEditing(true)}
            >
              {editing ? (
                <select
                  value={status}
                  onChange={(e) => {
                    setStatus(e.target.value);
                    setEditing(false);
                  }}
                  className="bg-zinc-800 text-white rounded p-2"
                >
                  <option>Applied</option>
                  <option>Phone Screen</option>
                  <option>Technical Round</option>
                  <option>Final Interview</option>
                  <option>Offered</option>
                  <option>Rejected</option>
                </select>
              ) : (
                <span className="cursor-pointer">{status}</span>
              )}
            </td>
            <td className="border border-[#3f3f46] p-2">13/07/2025</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
