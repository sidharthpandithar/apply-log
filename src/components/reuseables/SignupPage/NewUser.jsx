import Button from "./Button";

export default function NewUser() {
  return (
    <div className="mainContent w-full h-full flex flex-col justify-center items-center gap-8 text-[#e5e5e5]">
      <div className="flex flex-col items-center gap-6 w-full max-w-md">
        <div className="w-full flex flex-col gap-4 justify-center items-center">
          <div className="flex flex-col">
            <label className="pl-2">Email Address</label>
            <input
              type="email"
              className="w-full h-[4vh] border rounded-md px-4"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col">
            <label className="pl-2">Password</label>
            <input
              type="password"
              className="w-full h-[4vh] border rounded-md px-4"
              placeholder="Enter a password"
            />
          </div>
          <div className="flex flex-col">
            <label className="pl-2">Repeat Password</label>
            <input
              type="password"
              className="w-full h-[4vh] border rounded-md px-4"
              placeholder="Re-enter your password"
            />
          </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center gap-2 mt-5">
          <Button text={"Sign up"} logovisibility={"hidden"} />
          <div className="policySection text-center px-5 text-sm">
            <p>
              By signing up, you agree to the Terms of Service and Privacy
              Policy, including cookie use.
            </p>
          </div>
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
