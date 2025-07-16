import GridMotion from "../reuseables/SignupPage/GridMotion";
import { Outlet } from "react-router-dom";

export default function Signup() {
  const interviewItems = [
    "Resume Review",
    "Cover Letter",
    "Application Sent",
    "HR Screening",
    "Phone Interview",
    "Technical Round",
    "Coding Test",
    "System Design",
    "Behavioral Round",
    "Managerial Round",
    "Offer Received",
    "Offer Accepted",
    "Interview Scheduled",
    "Company Research",
    "Job Description",
    "Recruiter Call",
    "Panel Interview",
    "Interview Feedback",
    "Shortlisted",
    "Background Check",
    "Onsite Interview",
    "Final Round",
  ];
  return (
    <div className="relative outerContainer w-full h-screen flex ">
      <GridMotion items={interviewItems} />
      <div className="leftContaienr w-3/4 h-full hidden md:flex"></div>
      <div className="rightContainer backdrop-blur-md md:backdrop-blur-none blur-mask z-10 md:w-1/4 h-full w-full flex ">
        <Outlet />
      </div>
    </div>
  );
}
