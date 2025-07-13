import { IoMdDownload } from "react-icons/io";
import { MdDelete } from "react-icons/md";
export default function Data() {
  return (
    <div className="outerContainer w-full h-full grid grid-cols-7 auto-rows-[25vh] gap-10 p-4 ">
      <div className="resumeContainter border  flex flex-col rounded-md shadow-xl shadow-zinc-800">
        <div className="thumbnail w-full h-3/4"></div>
        <div className="textInfo flex flex-col gap-2 pt-2 flex-1">
          <div className="titleBox w-full text-center pt-2 border-t border-black text-[#e5e5e5]">
            Resume Title
          </div>
          <div className="interactiveButtons flex justify-between px-6 pb-1 text-2xl w-full h-full items-center">
            <div className="downloadOptions text-[#a7c957]">
              <IoMdDownload />
            </div>
            <div className="deleteOption text-[#9D0208]">
              <MdDelete />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
