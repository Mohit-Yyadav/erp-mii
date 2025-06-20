import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "../../assets/css/dashboard/NavbarSection.module.css";
import { useAuth } from "../../../utils/ContextApi";

const NavbarSection = ({ upperLink, className, baseLink }) => {
  const { logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>MII FOUNDATION</div>

      {/* Kebab Menu */}
      {upperLink?.length > 0 && (
        <div className={styles.kebabMenu} onClick={toggleMobileMenu}>
          <i className="bi bi-three-dots-vertical"></i>
        </div>
      )}

      {upperLink && (
        <div
          className={`${styles.navLinks} ${
            isMobileMenuOpen ? styles.showMenu : ""
          }`}
        >
          {upperLink.map((data, index) => (
            <NavLink
              key={index}
              to={`${baseLink}${data.link}`}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {data.name}
            </NavLink>
          ))}
        </div>
      )}

      <div className={styles.iconContainer}>
        <NavLink
          to="/startup/NotificationPage"
          className="bi bi-bell mt-2"
        ></NavLink>

         <NavLink
          to="/startup/feedback"
          className="bi bi-chat-right-text mt-2"
        ></NavLink>

        
        <div className="dropdown">
          <button
            className="btn btn mt-2"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ padding: 0 }}
          >
            <i className="bi bi-person-circle"></i>
          </button>
          <ul
            className="dropdown-menu dropdown-menu-end mt-2"
            aria-labelledby="dropdownMenuButton"
          >
            {/* Profile Info Section */}
            <li className="dropdown-item text-center">
              <NavLink
                to={`${baseLink}profile`}
                className="text-decoration-none text-dark"
              >
                <img
                  src="./profile.jpeg" // Replace with user's profile image URL
                  alt="Profile"
                  className="rounded-circle mb-2"
                  width="50"
                  height="50"
                />
                <p className="mb-1 fw-bold">John Doe</p>{" "}
                {/* Replace with dynamic username */}
                <small className="text-muted">johndoe@example.com</small>{" "}
                {/* Optional */}
              </NavLink>
              <hr className="dropdown-divider" />
            </li>
            {/* Logout Option */}
            <li>
              <NavLink
                onClick={() => logout()}
                className={({ isActive }) =>
                  `dropdown-item text-center text-danger ${
                    isActive ? "active" : ""
                  }`
                }
              >
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSection;
