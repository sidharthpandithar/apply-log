import Dashboard from "./components/Pages/Dashboard";
import HRContacts from "./components/Pages/HRContacts";
import Interviews from "./components/Pages/Interviews";
import Landing from "./components/Pages/Landing";
import Resumes from "./components/Pages/Resumes";
import { BrowserRouter, Routes, Route } from "react-router";

export default function App() {
  return (
    <div className="overflow-hidden flex-col flex bg-gradient-to-r from-neutral-900  to-neutral-800 min-h-screen w-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/interviews" element={<Interviews />} />
          <Route path="/contacts" element={<HRContacts />} />
          <Route path="/resumes" element={<Resumes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
