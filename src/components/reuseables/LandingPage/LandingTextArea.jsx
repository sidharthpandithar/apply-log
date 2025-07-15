import Button from "./Button";
export default function LandingTextArea({ children }) {
  return (
    <div className="firstContainer  justify-center  md:w-[40vw] w-full flex gap-5 items-center hover:cursor-default">
      <div className="leftSection  h-1/2 flex flex-col gap-5 justify-center  items-center text-start">
        {children}
      </div>
    </div>
  );
}
