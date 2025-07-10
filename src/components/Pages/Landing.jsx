import LandingSections from "../reuseables/LandingSections";
export default function Landing() {
  return (
    <div className="OuterContainer h-screen min-w-screen text-[#e5e5e5] flex-col justify-center items-center">
      <LandingSections
        firstTop={
          <div className="firstTop flex flex-col gap-2">
            <p className="text-2xl font-semibold">ApplyLog</p>
            <p className="font-bold text-4xl">
              An easy way to track and manage your upcoming interviews
            </p>
          </div>
        }
        middle={
          <p className="text-2xl text-justify">
            Staying organized during the interview process will ensure you get
            hired faster.
            <p>
              Use ApplyLog to store all interview and job details securely in
              one place.
            </p>
          </p>
        }
        color={`bg-[#fca311]`}
        buttontext={"Sign up now"}
      />
    </div>
  );
}
