import DashboardNav from "../reuseables/DashboardNav";
import InterviewContent from "../reuseables/InterviewsPage/InterviewContent";
export default function Interviews() {
  return (
    <>
      <DashboardNav
        buttonText={"Add Interview"}
        title={"Interviews"}
        description={"Manage your interview applications and track progress"}
        mobdescription={"Manage and track your interviews"}
      >
        <InterviewContent />
      </DashboardNav>
    </>
  );
}
