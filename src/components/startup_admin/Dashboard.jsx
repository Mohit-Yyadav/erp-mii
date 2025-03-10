import React from 'react'
import Navbar from '../dashboard_components/NavbarSection'
import Sidebar from '../dashboard_components/Sidebar'
import MainContent from '../dashboard_components/MainContent'
import NotificationSidebar from '../dashboard_components/NotificationSidebar'
import mainContentStyles from "../../assets/css/startup_admin/MainContent.module.css";
import navbarStyles from "../../assets/css/startup_admin/NavbarSection.module.css";
import notificationStyles from "../../assets/css/startup_admin/NotificationSidebar.module.css";
import sidebarStyles from "../../assets/css/startup_admin/Sidebar.module.css";

const Dashboard = () => {
  return (
    <div className={mainContentStyles.app}>
    <Navbar className={navbarStyles.navbar} />
     <div className={mainContentStyles.containerFluid}>
       <div className={mainContentStyles.row}>
         <Sidebar className={sidebarStyles.sidebar} />
        <MainContent className={mainContentStyles.mainContent} />
        <NotificationSidebar className={notificationStyles.notificationSidebar} />
       </div>
     </div>
   </div>
  )
}

export default Dashboard
