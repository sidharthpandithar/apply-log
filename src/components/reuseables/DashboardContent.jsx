import DashboardBox from "./DashboardBox";
import { FaLocationArrow } from "react-icons/fa";
import { RiProgress2Line } from "react-icons/ri";
import { IoIosMailOpen } from "react-icons/io";
import { ImCross } from "react-icons/im";

export default function DashboardContent() {
  const firstContainer = [
    { Logo: <FaLocationArrow />, text: "Total Applications", number: 0 },
    { Logo: <RiProgress2Line />, text: "In Progress", number: 0 },
    { Logo: <ImCross />, text: "Offers", number: 0 },
    { Logo: <IoIosMailOpen />, text: "Rejected", number: 0 },
  ];
  return (
    <div className="fullContainer w-full h-full flex flex-col">
      <div className="firstContainer text-[#e5e5e5] pt-8  w-full h-1/5 flex gap-4 p-4 justify-around items-center">
        {firstContainer.map((item, index) => (
          <DashboardBox
            Logo={item.Logo}
            text={item.text}
            number={item.number}
          />
        ))}
      </div>
      <div className="SecondContainer flex-1 border h-full w-full text-[#e5e5e5]"></div>
    </div>
  );
}
