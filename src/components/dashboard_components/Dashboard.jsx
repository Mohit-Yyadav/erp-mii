import React, { lazy, Suspense, useState } from "react";
import Navbar from "./NavbarSection";
import Sidebar from "./Sidebar";
import NotificationSidebar from "./NotificationSidebar";
import mainContentStyles from "../../assets/css/dashboard/MainContent.module.css";
import navbarStyles from "../../assets/css/dashboard/NavbarSection.module.css";
import notificationStyles from "../../assets/css/dashboard/NotificationSidebar.module.css";
import sidebarStyles from "../../assets/css/dashboard/Sidebar.module.css";
import Loader from "../loader/Loader";
const StartupRouting = lazy(() => import("../../routes/StartupRouting"));
const Dashboard = () => {

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const baseLink = "/startup/";
  const sidebarData = [
    {
      menu: "Startup",
      submenu: [
        { name: "Directory", link: "startup-directory", icon: "bi bi-briefcase" },
        { name: "ApprovalDirectory", link: "startup-pending-directory", icon: "bi bi-check-circle-fill" },
        { name: " PendingDirectory", link: "startup-pending-approval-directory", icon: "bi bi-check-circle" },
      ],
    },
    // {
    //   menu: "Mentor",
    //   submenu: [
    //     { name: "Directory", link: "mentor-directory", icon: "bi bi-person-badge" },
    //   ],
    // },
    // {
    //   menu: "Investor",
    //   submenu: [
    //     { name: "Directory", link: "investor-directory", icon: "bi bi-currency-dollar" },
    //   ],
    // },
    // {
    //   menu: "Employee",
    //   submenu: [
    //     { name: "Directory", link: "employee-directory", icon: "bi bi-people" },
    //   ],
    // },
    {
      menu: "Milestone",
      submenu: [
        { name: "Form", link: "milestone-funtion", icon: "bi bi-flag" },
      ],
    },
    {
      menu: "Meeting",
      submenu: [
        { name: "Schedule", link: "meetingSchedule", icon: "bi bi-calendar-event" },
         { name: "MeetingDetails", link: "meeting-directory", icon: "bi bi-calendar" },
      ],
    },
  ];
  
  return (
    <div className={mainContentStyles.app}>
      <Navbar className={navbarStyles.navbar}
      toggleMobileMenu={toggleMobileMenu}
      isMobileMenuOpen={isMobileMenuOpen}
      />
      <div className={mainContentStyles.containerFluid}>
        <div className={mainContentStyles.row}>
          <Sidebar
          baseLink={baseLink}
            dashboard={"Startup"}
            sidebarOption={sidebarData}
            className={sidebarStyles.sidebar}
          />
          <Suspense fallback={<Loader />}>
            <StartupRouting />
          </Suspense>
          <NotificationSidebar
            className={notificationStyles.notificationSidebar}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
