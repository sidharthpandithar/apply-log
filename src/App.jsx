import Dashboard from "./components/Pages/Dashboard";
import Landing from "./components/Pages/Landing";
import Nav from "./components/reuseables/Nav";

export default function App() {
  return (
    <div className="overflow-hidden flex-col flex bg-gradient-to-r from-[#14213d] via-[#192b51] to-[#3d405b] min-h-screen w-full">
      <Dashboard />
    </div>
  );
}
