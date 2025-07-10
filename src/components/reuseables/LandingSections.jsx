import Button from "./Button";
export default function LandingSections({
  firstTop,
  middle,
  color,
  buttontext,
}) {
  return (
    <div className="InnerContainer h-full w-full">
      <div className="firstContainer h-3/4 w-full flex gap-5 items-center">
        <div className="leftSection w-2/5 h-full flex flex-col gap-5  justify-center items-center text-start pl-6">
          <div className="firstTop flex flex-col gap-2">{firstTop}</div>
          <div className="Middle flex gap-3">{middle}</div>
          <div className="flex w-full justify-end">
            <Button color={color} buttontext={buttontext} />
          </div>
        </div>
        <div className="rightSection w-3/5 h-3/4 border-2"></div>
      </div>
    </div>
  );
}
