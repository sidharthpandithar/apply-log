import { useRef, useState } from "react";
import Button from "./Button";
import axios from "axios";
import { useNavigate } from "react-router";

const API = import.meta.env.VITE_API_BASE_URL;

export default function NewUser() {
  const navigate = useNavigate();
  const [userdata, setUserdata] = useState({
    email: "",
    password: "",
    repassword: "",
  });

  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userdata.password !== userdata.repassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post(
        `${API}/api/users/signup`,
        {
          email: userdata.email,
          password: userdata.password,
        },
        { withCredentials: true }
      );

      console.log("User registered:", res.data);

      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/dashboard");
      window.location.reload();
    } catch (err) {
      console.error("Registration failed", err.response?.data || err.message);
    }
  };

  const handleChange = (e) => {
    setUserdata((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <div className="mainContent w-full h-full flex flex-col justify-center items-center gap-8  text-[#e5e5e5]">
      <div className="flex flex-col items-center gap-6 w-full max-w-md">
        <form
          className="w-full flex flex-col gap-4 justify-center items-center"
          action=""
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <div className="flex flex-col">
            <label className="pl-2">Email Address</label>
            <input
              type="email"
              value={userdata.email}
              id="email"
              onChange={handleChange}
              className="w-full h-[4vh] border rounded-md px-4"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col">
            <label className="pl-2">Password</label>
            <input
              onChange={handleChange}
              id="password"
              value={userdata.password}
              type="password"
              className="w-full h-[4vh] border rounded-md px-4"
              placeholder="Enter a password"
            />
          </div>
          <div className="flex flex-col">
            <label className="pl-2">Repeat Password</label>
            <input
              value={userdata.repassword}
              id="repassword"
              onChange={handleChange}
              type="password"
              className="w-full h-[4vh] border rounded-md px-4"
              placeholder="Re-enter your password"
            />
          </div>
        </form>

        <div className="flex flex-col w-full  justify-center items-center gap-5 mt-5">
          <Button
            text={"Sign up"}
            logovisibility={"hidden"}
            formRef={formRef}
          />
          <div className="policySection text-center px-5 text-sm">
            <p>
              By signing up, you agree to the Terms of Service and Privacy
              Policy, including cookie use.
            </p>
          </div>
        </div>
      </div>
      <div className="secondHalf flex-col h-1/3 flex  w-full text-center text-[#e5e5e5]">
        <div className="flex flex-col items-center gap-5 mt-6 text-sm">
          <p>Already have an account?</p>
          <Button text={"Log in"} logovisibility={"hidden"} link={"/login"} />
        </div>
      </div>
    </div>
  );
}
