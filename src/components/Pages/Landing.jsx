import Button from "../reuseables/Button";

export default function Landing() {
  return (
    <div className="InnerContainer p-10 h-full w-full">
      <div className="firstContainer h-[50vh] w-full flex gap-5 items-center">
        <div className="leftSection  h-full flex flex-col gap-5 justify-center items-center text-start">
          <div className="firstTop flex flex-col gap-2">
            <p className="text-2xl font-semibold">ApplyLog</p>
            <p className="font-bold text-4xl">
              An easy way to track and manage your upcoming interviews
            </p>
          </div>
          <div className="Middle flex gap-3">
            <div className="text-2xl text-justify flex flex-col gap-2">
              <p>
                Staying organized during the interview process will ensure you
                get hired faster.
              </p>
              <p>
                Use ApplyLog to store all interview and job details securely in
                one place.
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-end"></div>
      </div>
      <div className="rightSection flex-1 h-full"></div>
    </div>
  );
}
