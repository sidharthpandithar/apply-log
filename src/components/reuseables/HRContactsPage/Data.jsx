export default function Data() {
  return (
    <div className="tableWrapper overflow-auto text-[#e5e5e5] w-full h-full">
      <table className="table-auto w-full border-collapse border border-[#3f3f46]">
        <thead className="bg-[#27272A] font-bold">
          <tr>
            <th className="border border-[#3f3f46] p-2 text-center">HR Name</th>
            <th className="border border-[#3f3f46] p-2 text-center">
              Organization
            </th>
            <th className="border border-[#3f3f46] p-2 text-center">Mail</th>
            <th className="border border-[#3f3f46] p-2 text-center">
              Phone Number
            </th>
            <th className="border border-[#3f3f46] p-2 text-center">
              Whatsapp
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="border border-[#3f3f46] p-2">Sidharth</td>
            <td className="border border-[#3f3f46] p-2">Amazon</td>
            <td className="border border-[#3f3f46] p-2">
              sidharthpandithar@gmail.com
            </td>
            <td className="border border-[#3f3f46] p-2">7715036706</td>
            <td className="border border-[#3f3f46] p-2">7715036706</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
