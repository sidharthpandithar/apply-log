import DashboardNav from "../reuseables/DashboardNav";
import HRContactsContent from "../reuseables/HRContactsPage/HRContactsContent";
import { useState } from "react";

export default function HRContacts() {
  return (
    <DashboardNav
      buttonText={"Add Contact"}
      title={"HR Contacts"}
      description={"Manage your professional contacts and HR connections"}
      mobdescription={"Manage your professional contacts"}
    >
      <HRContactsContent />
    </DashboardNav>
  );
}
