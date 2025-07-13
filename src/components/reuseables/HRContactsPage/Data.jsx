import { GoOrganization } from "react-icons/go";
import { IoPersonSharp, IoMail, IoCall } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
export default function Data() {
  return (
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
