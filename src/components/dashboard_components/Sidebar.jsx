import { useState } from "react";
import styles from "../../assets/css/startup_admin/Sidebar.module.css";

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({});

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const toggleNestedMenu = (menuKey) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey], // Toggle only the clicked menu
    }));
  };
  return (
    <>
      {/* Hamburger menu (visible only on mobile) */}
      <div className={styles.humMenu} onClick={toggleSidebar}>
        <i className="bi bi-list"></i>
      </div>

      {/* Sidebar */}
      <nav id="sidebar" className={`${styles.sidebar} ${isSidebarOpen ? styles.show : ""}`}>
        <div className={styles.positionSticky}>
          <a className={`navbar-brand mx-auto ${styles.navbarBrand}`}>MII FOUNDATION</a>

          <ul className={styles.nav}>
            <li>• Overview</li>
            <li>• Projects</li>
            <li className={styles.textMuted}>Dashboards</li>

            <li>
        <div
          onClick={() => toggleNestedMenu("startup")}
          style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
        >
          <i
            className="bi bi-chevron-right"
            style={{
              transform: openMenus["startup"] ? "rotate(90deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
            }}
          ></i>
          <span style={{ marginLeft: "8px" }}>
            <i className="bi bi-folder"></i> Startup
          </span>
        </div>

        {/* Dropdown Menu */}
        <ul className={`${styles.nestedMenu} ${openMenus["startup"] ? styles.show : ""}`}>
          <li><i className="bi bi-person"></i> Admin</li>
          <li><i className="bi bi-trash"></i> Delete</li>
          <li><i className="bi bi-pencil-square"></i> Update</li>
        </ul>
      </li>

      {/* Second Menu Item */}
      <li>
        <div
          onClick={() => toggleNestedMenu("incubation")}
          style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
        >
          <i
            className="bi bi-chevron-right"
            style={{
              transform: openMenus["incubation"] ? "rotate(90deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
            }}
          ></i>
          <span style={{ marginLeft: "8px" }}>
            <i className="bi bi-folder"></i> Incubation Status
          </span>
        </div>

        {/* Dropdown Menu */}
        <ul className={`${styles.nestedMenu} ${openMenus["incubation"] ? styles.show : ""}`}>
          <li><i className="bi bi-person"></i> Admin</li>
          <li><i className="bi bi-trash"></i> Delete</li>
          <li><i className="bi bi-pencil-square"></i> Update</li>
        </ul>
      </li>




            <li>
              <i className="bi bi-chevron-right"></i>
              <i className="bi bi-envelope"></i> Incubation Status
            </li>

            <li>
              <i className="bi bi-chevron-right"></i>
              <i className="bi bi-folder"></i> Milestone
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
