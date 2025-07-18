import { IoMdDownload } from "react-icons/io";
import { MdDelete } from "react-icons/md";
export default function Data({ title, thumbnail, onDelete, onDownload }) {
  return (
    <div className="resumeContainter w-[160px] border border-white flex flex-col rounded-md shadow-xl shadow-zinc-800">
      <div className="thumbnail w-full h-3/4">{thumbnail}</div>
      <div className="textInfo w-full h-full  bg-black rounded-b-md border-white flex flex-col gap-2 pt-2 ">
        <div className="titleBox w-full text-center pt-2 border-t border-black text-[#e5e5e5]">
          {title}
        </div>
        <div className="interactiveButtons flex justify-between px-6 pb-1 text-2xl w-full h-full items-center">
          <div className="downloadOptions text-[#a7c957]" onClick={onDownload}>
            <IoMdDownload />
          </div>
          <div onClick={onDelete} className="deleteOption text-[#9D0208]">
            <MdDelete />
          </div>
        </div>
      </div>
    </div>
  );
}
