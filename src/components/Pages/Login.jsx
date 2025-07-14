import Particles from "../reuseables/LoginPage/Particles";
import LoginComponent from "../reuseables/LoginPage/LoginComponent";
export default function Login() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Particles />
      <div className="absolute z-10 flex right-0 items-center h-full w-1/4 text-white">
        <div className="rightContainer blur-mask z-10 w-full h-full flex ">
          <LoginComponent />
        </div>
      </div>
    </div>
  );
}
