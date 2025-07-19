export default function DataInterview({ company, position, date, status }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "Applied":
        return "bg-sky-700";
      case "Rejected":
        return "bg-[#9d0208]";
      case "Phone Screening":
        return "bg-[#f6bd60]";
      case "Offered":
        return "bg-[#90be6d]";
      default:
        return "bg-[#f6bd60]";
    }
  };

  let color = getStatusColor(status);

  return (
    <>
      <div className="md:hidden relative w-full border h-1/8 grid grid-cols-4 px-4 border-zinc-700 rounded-md justify-center items-center text-center">
        <div className="">{company}</div>
        <div className="">{position}</div>
        <div className="">{date}</div>
        <div className="">
          <div
            className={`border p-1 md:w-2/3 w-full rounded-md text-black ${color}`}
          >
            {status.trim().split(" ")[0]}
          </div>
        </div>
      </div>
      <div className="hidden w-full border h-1/8 md:grid grid-cols-4 border-zinc-700 rounded-md justify-center items-center text-center">
        <div className="">{company}</div>
        <div className="">{position}</div>
        <div className="">{date}</div>
        <div className="">
          <div
            className={`border p-1 md:w-3/4 w-full rounded-md text-black ${color}`}
          >
            {status}
          </div>
        </div>
      </div>
    </>
  );
}
