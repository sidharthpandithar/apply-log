export default function DashboardBox({ Logo, text, number, bgcolor }) {
  return (
    <div className="md:w-1/5 md:h-full h-[18vh] shadow-zinc-800 shadow-xl rounded-md bg-zinc-900 flex md:flex-row flex-col gap-3 px-3 md:justify-around justify-center items-center">
      <div
        className={`logoBox ${bgcolor} shadow-md shadow-zinc-700 md:h-1/2 md:w-[4vw] h-1/3 w-2/3 md:ml-3 rounded-md flex justify-center items-center text-3xl text-zinc-800`}
      >
        {Logo}
      </div>
      <div className="textBox md:h-full h-1/3 md:flex-1 flex flex-col justify-center items-center">
        <p>{text}</p>
        <p className="md:text-3xl text-xl font-bold">{number}</p>
      </div>
    </div>
  );
}
