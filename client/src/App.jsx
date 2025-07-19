import Dashboard from "./components/Pages/Dashboard";
import HRContacts from "./components/Pages/HRContacts";
import Interviews from "./components/Pages/Interviews";
import Landing from "./components/Pages/Landing";
import Resumes from "./components/Pages/Resumes";
import { BrowserRouter, Routes, Route } from "react-router";
import Signup from "./components/Pages/Signup";
import SignupOptions from "./components/reuseables/SignupPage/SignupOptions";
import NewUser from "./components/reuseables/SignupPage/NewUser";
import Login from "./components/Pages/Login";
import AuthRoute from "./components/reuseables/AuthRoute/AuthRoute";
import { PopupProvider } from "./contexts/PopupContext";

export default function App() {
  return (
    <PopupProvider>
      <div className="overflow-hidden flex-col flex bg-gradient-to-r from-neutral-900  to-neutral-800 min-h-screen w-full">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />

            <Route
              path="/dashboard"
              element={
                <AuthRoute>
                  <Dashboard />
                </AuthRoute>
              }
            />

            <Route path="/interviews" element={<Interviews />} />
            <Route path="/contacts" element={<HRContacts />} />
            <Route path="/resumes" element={<Resumes />} />

            <Route path="signup" element={<Signup />}>
              <Route index element={<SignupOptions />} />
              <Route path="newuser" element={<NewUser />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </PopupProvider>
  );
}
