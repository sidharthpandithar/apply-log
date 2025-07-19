import Button from "../SignupPage/Button";
import { Link } from "react-router";
import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";

const API = import.meta.env.VITE_API_BASE_URL;
export default function LoginComponent() {
  const navigate = useNavigate();
  const [userdata, setUserdata] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${API}/api/users/login`,
        {
          email: userdata.email,
          password: userdata.password,
        },
        { withCredentials: true }
      );

      console.log("User Logged in:", res.data);

      localStorage.setItem("user", JSON.stringify(res.data));
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
      window.location.reload();
    } catch (err) {
      console.error("Login failed", err.response?.data || err.message);
    }
  };

  const handleChange = (e) => {
    setUserdata((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const formRef = useRef();
  return (
    <div className="mainContent w-full h-full flex flex-col gap-5 justify-center items-center text-[#e5e5e5]">
      <div className="firstHalf flex flex-col items-center gap-4 w-full max-w-md ">
        <div className="flex items-center flex-col w-full gap-4">
          <form
            onSubmit={handleSubmit}
            ref={formRef}
            action=""
            className="flex flex-col gap-4 w-2/3"
          >
            <div className="flex flex-col gap-2 ">
              <label className="pl-2">Email Address</label>
              <input
                id="email"
                value={userdata.email}
                onChange={handleChange}
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
                placeholder="Enter your password"
                value={userdata.password}
                onChange={handleChange}
                id="password"
              />
            </div>
          </form>
          <div className="w-full mt-3 flex justify-center items-center">
            <Button
              formRef={formRef}
              logovisibility={"hidden w-full"}
              text={"Log in"}
            />
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
