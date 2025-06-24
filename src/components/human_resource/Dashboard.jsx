import React, { lazy, Suspense } from "react";
import Navbar from "../dashboard_components/NavbarSection";
import Sidebar from "../dashboard_components/Sidebar";
import NotificationSidebar from "../dashboard_components/NotificationSidebar";
import mainContentStyles from "../../assets/css/dashboard/MainContent.module.css";
import navbarStyles from "../../assets/css/dashboard/NavbarSection.module.css";
import notificationStyles from "../../assets/css/dashboard/NotificationSidebar.module.css";
import sidebarStyles from "../../assets/css/dashboard/Sidebar.module.css";
import Loader from "../loader/Loader";
const HumanResourceRouting = lazy(() => import("../../routes/HumanResource"));

const Dashboard = () => {
  const baseLink = "/human-resource/";

  const sidebarData = [
    {
      menu: "Space Booking",
      submenu: [
        { name: "Space Booking", link: "space-booking", icon: "bi bi-eye-fill" },
        { name: "Desk ", link: "desk-booking", icon: "fa-solid fa-chair" },
        { name: "Office Room ", link: "officeRoom-booking", icon: "fa-solid fa-person-shelter" },
        { name: "Meeting Room", link: "meetingRoom-booking", icon: "fa-solid fa-people-roof",
        },
        { name: "FacilityTable", link: "facility-table", icon: "fa-solid fa-people-roof",
        },
      ],
    },
    {
      menu: "Equipment Booking",
      submenu: [
        {
          name: "Detials",
          link: "equipment-booking",
          icon: "fa-solid fa-screwdriver-wrench",
        },
      ],
    },
    {
      menu: "Prototype",
      submenu: [
        {
          name: "form",
          link: "prototype-form",
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
