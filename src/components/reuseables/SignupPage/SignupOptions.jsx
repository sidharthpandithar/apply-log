import Button from "./Button";
import { Link } from "react-router";
export default function SignupOptions() {
  return (
    <div className="mainContent  w-full h-full flex flex-col gap-5 justify-center items-center">
      <div className="firstHalf w-full h-2/3 flex flex-col gap-5 justify-end items-center">
        <Button imgSrc={"/google.png"} text={"Sign up with Google"} />
        <Button imgSrc={"/github.png"} text={"Sign up with Github"} />
        <div className="flex items-center w-2/3 gap-4">
          <hr className="flex-grow border-t border-[#e5e5e5]" />
          <span className="text-[#e5e5e5]">OR</span>
          <hr className="flex-grow border-t border-[#e5e5e5]" />
        </div>
        <Button
          text={"Sign up with Email"}
          logovisibility={"hidden"}
          link={"newuser"}
        />
        <div className="policySection w-full text-center px-5 text-sm  text-[#e5e5e5]">
          <p>
            By signing up, you agree to the Terms of Service and Privacy Policy,
            including cookie use.
          </p>
        </div>
      </div>
      <div className="secondHalf flex-col h-1/3 flex  w-full text-center text-[#e5e5e5]">
        <div className="flex flex-col items-center gap-2 mt-6 text-sm">
          <p>Already have an account?</p>
          <Button text={"Log in"} logovisibility={"hidden"} link={"/login"} />
        </div>
      </div>
    </div>
  );
}
