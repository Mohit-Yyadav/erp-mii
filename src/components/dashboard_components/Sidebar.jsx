import { useState } from "react";
import styles from "../../assets/css/startup_admin/Sidebar.module.css";

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isNestedMenuOpen, setNestedMenuOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const toggleNestedMenu = () => setNestedMenuOpen(!isNestedMenuOpen);

  return (
    <>
      {/* Three-dot menu (visible only on mobile) */}
      <div className={styles.kebabMenu} onClick={toggleSidebar}>
        <i className="bi bi-three-dots-vertical"></i>
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
                onClick={toggleNestedMenu}
                             
              >
                <i className={`bi bi-play-fill `}></i>
                Startup
              </div>

              <ul className={`${styles.nestedMenu} ${isNestedMenuOpen ? styles.show : ""}`}>
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
