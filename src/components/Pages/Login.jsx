import Particles from "../reuseables/LoginPage/Particles";
import LoginComponent from "../reuseables/LoginPage/LoginComponent";
export default function Login() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Particles />

      <div className="absolute z-10 flex justify-end items-center h-full w-full text-white">
        <div className="w-1/3 h-full relative blur-mask">
          <LoginComponent />
        </div>
      </div>
    </div>
  );
}
