import React, { lazy, Suspense, useState } from "react";
import Navbar from "../dashboard_components/NavbarSection";
import Sidebar from "../dashboard_components/Sidebar";
import NotificationSidebar from "../dashboard_components/NotificationSidebar";
import mainContentStyles from "../../assets/css/startup/MainContent.module.css";
import navbarStyles from "../../assets/css/startup/NavbarSection.module.css";
import notificationStyles from "../../assets/css/startup/NotificationSidebar.module.css";
import sidebarStyles from "../../assets/css/startup/Sidebar.module.css";
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
        { name: "Schedule", link: "meetingSchedule", icon: "bi bi-calendar-event" },
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
