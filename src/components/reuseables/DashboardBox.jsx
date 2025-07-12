export default function DashboardBox({ Logo, text, number, bgcolor }) {
  return (
    <div className="w-1/5 h-full shadow-zinc-800 shadow-md rounded-md bg-[#001d3d] flex gap-3 justify-around items-center">
      <div
        className={`logoBox ${bgcolor} h-1/2 w-1/4 ml-3 rounded-md flex justify-center items-center text-3xl text-zinc-800`}
      >
        {Logo}
      </div>
      <div className="textBox  h-full flex-1 flex flex-col justify-center items-center">
        <p>{text}</p>
        <p className="text-3xl font-bold">{number}</p>
      </div>
    </div>
  );
}
