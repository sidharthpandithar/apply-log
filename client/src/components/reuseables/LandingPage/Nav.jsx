import { Link } from "react-router";
export default function Nav() {
  return (
    <div className="flex flex-col fixed w-full  backdrop-filter backdrop-blur-lg z-20">
      <div className="flex justify-between px-10 py-5">
        <p className="text-[#e5e5e5] font-bold text-2xl">ApplyLog </p>
        <div className="flex gap-5 justify-center items-center text-xl">
          <Link to={"/login"}>
            <p className="text-[#e5e5e5] text-sm hover:bg-[#fca311] px-2 py-1 rounded-md hover:cursor-pointer hover:text-black">
              Log in
            </p>
          </Link>
          <Link to={"/signup"}>
            <button className="px-2 py-1 text-sm bg-[#fca311] rounded-md hover:cursor-pointer hover:scale-105">
              Sign up for free
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
