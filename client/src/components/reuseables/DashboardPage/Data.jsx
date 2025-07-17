export default function Data({ company, date, status }) {
  return (
    <div className="w-full border h-1/8 grid grid-cols-3 px-4 justify-center items-center text-center text-sm rounded-md border-zinc-700">
      <div className="">{company}</div>
      <div className="">{date}</div>
      <div className="">
        <div className="border p-1 w-full rounded-md text-black bg-green-500">
          {status}
        </div>
      </div>
    </div>
  );
}
