import { AiFillGithub } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import GradientText from "./GradientText";
export default function Footer() {
  return (
    <div className="justify-center items-center flex w-full">
      <div className="md:h-[12vh] w-2/3 border-t-2 mt-10 flex flex-col gap-3 border-zinc-800">
        <div className="allLinks mt-4">
          <div className="myLinks text-zinc-500 flex flex-col md:flex-row gap-3 h-1/3 text-sm md:text-3xl justify-around items-center">
            <div className="flex text-lg gap-10 ">
              <div
                onClick={() =>
                  window.open("https://github.com/sidharthpandithar", "_blank")
                }
                className="flex gap-1 items-center hover:text-white active:text-white hover:cursor-pointer group"
              >
                <span>Github</span>
                <AiFillGithub className="group-hover:text-[#6e5494]" />
              </div>
            </div>
            <div className="flex text-lg gap-10 hover:text-white active:text-white hover:cursor-pointer ">
              <div
                onClick={() =>
                  window.open("mailto:sidharth27111999@gmail.com", "_blank")
                }
                className="flex gap-1 items-center "
              >
                <span>Email</span>
                <IoMdMail />
              </div>
            </div>
            <div className="flex text-lg gap-10 hover:text-white active:text-white hover:cursor-pointer group">
              <div
                onClick={() =>
                  window.open("https://wa.me/917715036706", "_blank")
                }
                className="flex gap-1 items-center "
              >
                <span>WhatsApp</span>
                <FaWhatsapp className="group-hover:text-[#25D366]" />
              </div>
            </div>
            <div className="flex text-lg gap-10 hover:text-white active:text-white hover:cursor-pointer group">
              <div
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/sidharth-pandithar/",
                    "_blank"
                  )
                }
                className="flex gap-1 items-center "
              >
                <span>Linkedin</span>
                <FaLinkedin className="group-hover:text-[#0077B5]" />
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() =>
            window.open("https://github.com/sidharthpandithar", "_blank")
          }
          className="flex animate-bounce justify-center items-center text-lg font-semibold text-zinc-500 hover:text-white hover:cursor-pointer"
        >
          <GradientText
            colors={["#fbbf24", "#34d399", "#3b82f6"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
          >
            &copy; 2025 Sidharth Pandithar
          </GradientText>
        </div>
      </div>
    </div>
  );
}
