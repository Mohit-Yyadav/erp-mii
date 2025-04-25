import { useState } from "react";
import styles from "../../assets/css/startup/Sidebar.module.css";
import { NavLink } from "react-router-dom";

const Sidebar = ({baseLink,dashboard,sidebarOption}) => {

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
      <nav
        id="sidebar"
        className={`${styles.sidebar} ${isSidebarOpen ? styles.show : ""}`}
      >
        <div className={styles.positionSticky}>
          {/* <a className={`navbar-brand mx-auto ${styles.navbarBrand}`}>
            MII FOUNDATION
          </a> */}

          <ul className={styles.nav}>
            <li className={styles.textMuted}>{dashboard}</li>
{ sidebarOption.map((data,i)=>{
  return (
            <li key={i}>
              <div
                onClick={() => toggleNestedMenu(`${data.menu}`)}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                { data.submenu ? (
                <i
                  className="bi bi-chevron-right"
                  style={{
                    transform: openMenus[`${data.menu}`]
                      ? "rotate(90deg)"
                      : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                ></i>):("")
              }
                <span style={{ marginLeft: "8px" }}>
                  <i className="bi bi-folder"></i> {data.menu}
                </span>
              </div>

              {/* Dropdown Menu */}
              { data.submenu ? (
              <ul
                className={`${styles.nestedMenu} ${
                  openMenus[`${data.menu}`] ? styles.show : ""
                }`}
              >
                { data.submenu.map((data,i)=>{
                  return(
                <li key={i}>
                 <NavLink  className={`link-underline link-underline-opacity-0 text-dark ${({ isActive }) => isActive ? "active-link" : ""}`}  to={`${baseLink|| "baselink"}${data.link}`}> <i className={data.icon}></i> {data.name} </NavLink>
                </li>
                )
                })
                }
              </ul>
              ):("")
              }
            </li>
            )})
          }
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;