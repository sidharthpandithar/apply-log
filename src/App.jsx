import Landing from "./components/Pages/Landing";

export default function App() {
  return (
    <div className="flex-col flex bg-gradient-to-r from-[#14213d] to-[#3d405b] min-h-screen min-w-screen">
      <Landing />
      <div className="flex border-2 border-amber-500 w-full h-screen">
        <div className="h-1/2 w-full">Hello</div>
      </div>
    </div>
  );
}
