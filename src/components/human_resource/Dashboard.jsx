import React, { lazy, Suspense } from "react";
import Navbar from "../dashboard_components/NavbarSection";
import Sidebar from "../dashboard_components/Sidebar";
import NotificationSidebar from "../dashboard_components/NotificationSidebar";
import mainContentStyles from "../../assets/css/startup/MainContent.module.css";
import navbarStyles from "../../assets/css/startup/NavbarSection.module.css";
import notificationStyles from "../../assets/css/startup/NotificationSidebar.module.css";
import sidebarStyles from "../../assets/css/startup/Sidebar.module.css";
import Loader from "../loader/Loader";
const HumanResourceRouting = lazy(() => import("../../routes/HumanResource"));

const Dashboard = () => {
  const baseLink = "/human-resource/";

  const sidebarData = [
    {
      menu: "Space Booking",
      submenu: [
        { name: "All Details", link: "space-booking", icon: "bi bi-eye-fill" },
        { name: "Desk", link: "desk", icon: "fa-solid fa-chair" },
        { name: "Office", link: "office", icon: "fa-solid fa-person-shelter" },
        {
          name: "Meeting Room",
          link: "meeying-room",
          icon: "fa-solid fa-people-roof",
        },
      ],
    },
    {
      menu: "Equipment Booking",
      submenu: [
        {
          name: "Detials",
          link: "Details",
          icon: "fa-solid fa-screwdriver-wrench",
        },
      ],
    },
  ];

  return (
    <div className={mainContentStyles.app}>
      <Navbar className={navbarStyles.navbar} />
      <div className={mainContentStyles.containerFluid}>
        <div className={mainContentStyles.row}>
          <Sidebar
            baseLink={baseLink}
            dashboard={"Human Resource"}
            sidebarOption={sidebarData}
            className={sidebarStyles.sidebar}
          />
          <Suspense fallback={<Loader />}>
            <HumanResourceRouting />
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
