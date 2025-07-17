export default function DataInterview({ company, position, date, status }) {
  return (
    <div className="w-full border h-1/8 grid grid-cols-4 px-4 border-zinc-700 rounded-md justify-center items-center text-center">
      <div className="">{company}</div>
      <div className="">{position}</div>
      <div className="">{date}</div>
      <div className="">
        <div className="border p-1 w-full rounded-md text-black bg-green-500">
          {status}
        </div>
      </div>
    </div>
  );
}
