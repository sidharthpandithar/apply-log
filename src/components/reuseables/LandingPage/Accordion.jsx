import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineExpandMore, MdOutlineExpandLess } from "react-icons/md";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-3 w-1/2">
      {items.map((item, index) => (
        <div className="flex flex-col text-justify" key={index}>
          <div
            className="text-2xl flex hover:cursor-pointer justify-between gap-2"
            onClick={() => handleClick(index)}
          >
            {item.title}
            {openIndex === index ? (
              <MdOutlineExpandLess />
            ) : (
              <MdOutlineExpandMore />
            )}
          </div>

          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="text-xl text-zinc-300 pr-5 pl-2 py-2 leading-8">
                  {item.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
