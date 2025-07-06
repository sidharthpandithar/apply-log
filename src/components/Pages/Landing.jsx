export default function Landing() {
  return (
    <div className="OuterContainer border-2 h-screen min-w-screen text-white flex justify-center items-center">
      <div className="InnerContainer border-2 text-white h-3/4 w-full">
        <div className="firstContainer h-full w-full flex gap-5 items-center">
          <div className="leftSection w-1/3 h-full border flex flex-col gap-5  justify-center items-center text-start p-2">
            <div className="firstTop flex flex-col gap-2">
              <p className="text-2xl font-semibold">ApplyLog</p>
              <p className="font-bold text-4xl">
                An easy way to track and manage your upcoming interviews
              </p>
            </div>
            <div className="flex gap-3">
              <p className="text-2xl text-justify">
                Staying organized during the interview process will ensure you
                get hired faster.
                <p>
                  Use ApplyLog to store all interview and job details securely
                  in one place.
                </p>
              </p>
            </div>
            <button>Sign up now</button>
          </div>
          <div className="rightSection w-3/4 h-3/4 border">hi</div>
        </div>
      </div>
    </div>
  );
}
