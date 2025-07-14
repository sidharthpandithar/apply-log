import Button from "../reuseables/SignupPage/Button";
import GridMotion from "../reuseables/SignupPage/GridMotion";
import SignupOptions from "../reuseables/SignupPage/SignupOptions";
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
    "Offer Rejected",
    "Interview Prep",
    "Mock Interview",
    "Follow-up Email",
    "Interview Scheduled",
    "Company Research",
    "Job Description",
    "ATS Status",
    "Recruiter Call",
    "Panel Interview",
    "Interview Feedback",
    "Rejection Email",
    "Shortlisted",
    "Background Check",
    "Onsite Interview",
    "Final Round",
  ];
  return (
    <div className="relative outerContainer w-full h-screen flex ">
      <GridMotion items={interviewItems} />
      <div className="leftContaienr w-3/4 h-full"></div>
      <div className="rightContainer blur-mask z-10 w-1/4 h-full flex ">
        <Outlet />
      </div>
    </div>
  );
}
