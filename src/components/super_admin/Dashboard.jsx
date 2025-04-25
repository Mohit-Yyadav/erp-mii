import React, { lazy, Suspense } from "react";
import Navbar from "../dashboard_components/NavbarSection";
import Sidebar from "../dashboard_components/Sidebar";
import MainContent from "../dashboard_components/MainContent";
import NotificationSidebar from "../dashboard_components/NotificationSidebar";
import mainContentStyles from "../../assets/css/startup/MainContent.module.css";
import navbarStyles from "../../assets/css/startup/NavbarSection.module.css";
import notificationStyles from "../../assets/css/startup/NotificationSidebar.module.css";
import sidebarStyles from "../../assets/css/startup/Sidebar.module.css";
import Loader from "../loader/Loader";

const SuperAdminRouting = lazy(() => import("../../routes/SuperAdminRouting"));
const Dashboard = () => {

  const baseLink = "/super-admin/";

  const upperData = [
    { name: "Startup", link: "startup" },
    { name: "Mentor", link: "Mentor" },
    { name: "Facility", link: "Facility" },
    { name: "Office", link: "Office" },
    { name: "Finance & Funding", link: "Finance & Funding" },
    { name: "Event", link: "Event" },
    { name: "Report & Analytics", link: "Report & Analytics" },
  ];

  const sidebarData = [
    {
      menu: "Startup",
      submenu: [
        { name: "Directory", link: "startup-directory", icon: "bi bi-briefcase" },
        { name: "ApprovalDirectory", link: "startup-pending-directory", icon: "bi bi-check-circle" },
      ],
    },
    {
      menu: "Mentor",
      submenu: [
        { name: "Directory", link: "mentor-directory", icon: "bi bi-person-badge" },
      ],
    },
    {
      menu: "Investor",
      submenu: [
        { name: "Directory", link: "investor-directory", icon: "bi bi-currency-dollar" },
      ],
    },
    {
      menu: "Employee",
      submenu: [
        { name: "Directory", link: "employee-directory", icon: "bi bi-people" },
      ],
    },
    {
      menu: "Milestone",
      submenu: [
        { name: "Form", link: "milestone-funtion", icon: "bi bi-flag" },
      ],
    },
    {
      menu: "Meeting",
      submenu: [
        { name: "Directory", link: "meeting-directory", icon: "bi bi-calendar-event" },
      ],
    },
  ];

  return (
    <div className={mainContentStyles.app}>
      <Navbar upperLink={upperData} className={navbarStyles.navbar} baseLink={baseLink} />

      <div className={mainContentStyles.containerFluid}>
        <div className={mainContentStyles.row}>
          <Sidebar
           baseLink={baseLink}
            dashboard={"Super Admin"}
            sidebarOption={sidebarData}
            className={sidebarStyles.sidebar}
          />
         <div className={mainContentStyles.main}>
          <Suspense fallback={<Loader />}>
            <SuperAdminRouting />
          </Suspense>{" "}
          </div>
          <NotificationSidebar
            className={notificationStyles.notificationSidebar}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
