import axios from "axios";
import { Link } from "react-router";
import { useNavigate } from "react-router";
const API = import.meta.env.VITE_API_BASE_URL;

export default function Nav() {
  const navigate = useNavigate();
  const isLoggedin = !!localStorage.getItem("token");
  const logout = async () => {
    try {
      const res = await axios.get(`${API}/api/users/logout`, {
        withCredentials: true,
      });
      navigate("/");
      localStorage.clear();
    } catch (err) {
      console.error("Error logging out", err);
    }
  };
  return (
    <div className="flex flex-col fixed w-full  backdrop-filter backdrop-blur-lg z-20">
      <div className="flex justify-between px-10 py-5">
        <p className="text-[#e5e5e5] font-bold text-2xl">ApplyLog </p>
        {isLoggedin ? (
          <div className="flex gap-5 justify-center items-center text-xl">
            <Link to={"/dashboard"}>
              <button className="px-2 py-1 text-sm bg-[#fca311] rounded-md hover:cursor-pointer hover:scale-105">
                My Dashboard
              </button>
            </Link>
            <p
              onClick={logout}
              className="text-[#e5e5e5] text-sm hover:bg-[#fca311] px-2 py-1 rounded-md hover:cursor-pointer hover:text-black"
            >
              Log out
            </p>
          </div>
        ) : (
          <div className="flex gap-5 justify-center items-center text-xl">
            <Link to={"/login"}>
              <p className="text-[#e5e5e5] text-sm hover:bg-[#fca311] px-2 py-1 rounded-md hover:cursor-pointer hover:text-black">
                Log in
              </p>
            </Link>
            <Link to={"/signup"}>
              <button className="px-2 py-1 text-sm bg-[#fca311] rounded-md hover:cursor-pointer hover:scale-105">
                Sign up for free
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
