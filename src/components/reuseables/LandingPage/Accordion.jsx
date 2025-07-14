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
          <div className="flex flex-col text-justify" key={index}>
            <div
              className="text-2xl flex hover:cursor-pointer justify-between gap-2"
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
              <div className="text-xl text-zinc-300 pr-5 pl-2 py-2 leading-8">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
