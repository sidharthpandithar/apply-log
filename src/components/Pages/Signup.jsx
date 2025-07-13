import Button from "../reuseables/SignupPage/Button";
export default function Signup() {
  return (
    <div className="outerContainer w-full h-screen flex">
      <div className="leftContainer w-3/4 border h-full border-amber-50"></div>
      <div className="rightContainer flex-1">
        <div className="mainContent w-full h-full flex flex-col gap-5 justify-center items-center">
          <div className="firstHalf w-full h-2/3 flex flex-col gap-5 justify-center items-center border border-white">
            <Button imgSrc={"/google.png"} text={"Sign up with Google"} />
            <Button imgSrc={"/github.png"} text={"Sign up with Github"} />
            <div className="flex items-center w-2/3 gap-4">
              <hr className="flex-grow border-t border-[#e5e5e5]" />
              <span className="text-[#e5e5e5]">OR</span>
              <hr className="flex-grow border-t border-[#e5e5e5]" />
            </div>
            <Button text={"Sign up with Email"} logovisibility={"hidden"} />
            <div className="policySection w-full text-center px-5  text-[#e5e5e5]">
              <p>
                By signing up, you agree to the Terms of Service and Privacy
                Policy, including cookie use.
              </p>
            </div>
          </div>
          <div className="secondHalf flex-col h-1/3 border flex  w-full text-center text-[#e5e5e5]">
            <div className="loginSection w-full flex items-center flex-col gap-4 justify-center h-1/2 text-center text-[#e5e5e5]">
              <p>Already have an account?</p>
              <Button text={"Log in"} logovisibility={"hidden"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
