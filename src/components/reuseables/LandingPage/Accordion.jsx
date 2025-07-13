import { useState } from "react";
import { MdOutlineExpandMore, MdOutlineExpandLess } from "react-icons/md";

export default function Accordion({ items }) {
  function handleClick(index) {
    setOpenIndex(openIndex == index ? null : index);
  }
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="flex flex-col gap-3 w-1/2">
      {items.map((item, index) => {
        return (
          <div className="flex flex-col text-justify gap-2" key={index}>
            <div
              className="text-2xl flex hover:cursor-pointer justify-between"
              onClick={() => handleClick(index)}
            >
              {item.title}
              {openIndex == index ? (
                <MdOutlineExpandLess />
              ) : (
                <MdOutlineExpandMore />
              )}
            </div>

            {openIndex == index && (
              <div className="text-xl text-zinc-300 bg-[#19294c] pr-5 pl-2 py-5 leading-8">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
