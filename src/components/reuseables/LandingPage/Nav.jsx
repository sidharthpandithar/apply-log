import Button from "./Button";

export default function Nav() {
  return (
    <div className="flex flex-col fixed w-full  backdrop-filter backdrop-blur-lg z-20">
      <div className="flex justify-between px-10 py-5">
        <p className="text-[#e5e5e5] font-bold text-2xl">ApplyLog </p>
        <div className="flex gap-5 justify-center items-center text-xl">
          <p className="text-[#e5e5e5]"> Log in</p>
          <button className="px-2 py-1 bg-[#fca311] rounded-md">
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}
