import DashboardNav from "../reuseables/DashboardNav";
import DashboardContent from "../reuseables/DashboardPage/DashboardContent";

export default function Dashboard() {
  return (
    <>
      <DashboardNav
        buttonText={"Add Interview"}
        title={"Dashboard"}
        description={"Welcome back! Here's your interview overview."}
      >
        <DashboardContent />
      </DashboardNav>
    </>
  );
}
