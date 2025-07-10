import Button from "./Button";
export default function LandingSections({
  firstTop,
  middle,
  color,
  buttontext,
  leftwidth,
  rightContent,
  view,
}) {
  return (
    <div className="InnerContainer p-10 h-full w-full">
      <div className="firstContainer h-[50vh] w-full flex gap-5 items-center">
        <div
          className={`leftSection ${leftwidth} h-full flex flex-col gap-5 justify-center items-center text-start`}
        >
          <div className="firstTop flex flex-col gap-2">{firstTop}</div>
          <div className="Middle flex gap-3">{middle}</div>
          <div className="flex w-full justify-end">
            <Button color={color} buttontext={buttontext} view={view} />
          </div>
        </div>
        <div className="rightSection flex-1 h-full">
          <div className="">{rightContent}</div>
        </div>
      </div>
    </div>
  );
}
