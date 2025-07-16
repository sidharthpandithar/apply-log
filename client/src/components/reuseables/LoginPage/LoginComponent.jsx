import Button from "../SignupPage/Button";
import { Link } from "react-router";
export default function LoginComponent() {
  return (
    <div className="mainContent w-full h-full flex flex-col gap-5 justify-center items-center text-[#e5e5e5]">
      <div className="firstHalf flex flex-col items-center gap-4 w-full max-w-md ">
        <div className="flex items-center flex-col w-2/3 gap-4">
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-2 ">
              <label className="pl-2">Email Address</label>
              <input
                type="email"
                className="w-full h-[4vh] border rounded-md px-4"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="pl-2">Password</label>
              <input
                type="password"
                className="w-full h-[4vh] border rounded-md px-4"
                placeholder="Enter a password"
              />
            </div>
          </div>
          <div className="flex w-2/3 gap-4 justify-center items-center">
            <hr className="flex-grow border-t border-[#e5e5e5]" />
            <span className="text-[#e5e5e5]">OR</span>
            <hr className="flex-grow border-t border-[#e5e5e5]" />
          </div>
        </div>
        <Button imgSrc={"/google.png"} text={"Log in with Google"} />
        <Button imgSrc={"/github.png"} text={"Log in with Github"} />
        <div className="policySection w-full text-center px-5 text-sm  text-[#e5e5e5]">
          <p>Forgot your password?</p>
        </div>
      </div>
      <div className="secondHalf flex flex-col items-center gap-4 w-full max-w-md text-[#e5e5e5]">
        <div className="flex flex-col items-center gap-2 mt-6 text-sm w-full">
          <p>Not a member yet?</p>
          <Button text={"Sign up"} logovisibility={"hidden"} link={"/signup"} />
        </div>
      </div>
    </div>
  );
}
