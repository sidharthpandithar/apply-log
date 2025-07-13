import { useState } from "react";
export default function Data() {
  const [editing, setEditing] = useState(false);
  const [status, setStatus] = useState("Applied");
  return (
    <div className="tableWrapper overflow-auto text-[#e5e5e5] w-full h-full">
      <table className="table-auto w-full border-collapse border border-[#3f3f46]">
        <thead className="bg-[#27272A] font-bold">
          <tr>
            <th className="border border-[#3f3f46] p-2 text-center">
              Organization
            </th>
            <th className="border border-[#3f3f46] p-2 text-center">
              Position
            </th>
            <th className="border border-[#3f3f46] p-2 text-center">
              Current Status
            </th>
            <th className="border border-[#3f3f46] p-2 text-center">
              Updated On
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
