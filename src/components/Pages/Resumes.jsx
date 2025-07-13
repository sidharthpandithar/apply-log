import DashboardNav from "../reuseables/DashboardNav";
import ResumeContent from "../reuseables/ResumesPage/ResumeContent";
export default function Resumes() {
  return (
    <>
      <DashboardNav
        buttonText={"Upload Resume"}
        title={"Resumes"}
        description={"Manage your resume versions for different job profiles"}
      >
        <ResumeContent />
      </DashboardNav>
    </>
  );
}
