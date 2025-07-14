import Button from "./Button";
export default function LandingTextArea({ children }) {
  return (
    <div className="firstContainer h-[50vh] w-[40vw] flex gap-5 items-center hover:cursor-default">
      <div className="leftSection  h-full flex flex-col gap-5 justify-center  items-center text-start">
        {children}
      </div>
    </div>
  );
}
