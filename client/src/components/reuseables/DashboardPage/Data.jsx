export default function Data({ company, date, status }) {
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

  const color = getStatusColor(status);
  return (
    <div className="w-full border h-1/8 grid grid-cols-3 gap-3 px-4 justify-center items-center text-center text-sm rounded-md border-zinc-700">
      <div className="">{company}</div>
      <div className="">{date}</div>
      <div className="">
        <div className={`border p-1 w-full rounded-md text-black ${color}`}>
          {status}
        </div>
      </div>
    </div>
  );
}
