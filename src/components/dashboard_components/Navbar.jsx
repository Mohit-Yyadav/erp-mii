import React, { useState } from "react";
import Sidebar from "./Sidebar";

function Navbar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
        <div className="container-fluid">
          {/* Hamburger Icon */}
          <button
            className="btn text-black d-lg-none me-3"
            onClick={toggleSidebar}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Navbar Brand */}
          <a className="navbar-brand text-black" id="mii" href="#">
            MII FOUNDATION
          </a>
          {/* Collapsible Navbar Toggle */}
          <button
            className="navbar-toggler text-black"
            type="button"
            onClick={toggleNav}
          >
            <i className="fas fa-ellipsis-v"></i>
          </button>
          {/* Navbar Items */}
          <div
            className={`navbar-collapse custom-collapse ${isNavOpen ? "show" : ""}`}
            id="topNav"
          >
            <ul className="navbar-nav ms-0 align-items-center px-2">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Startup
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Mentor
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Facility
                </a>
              </li>
          
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Office
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Finance & Funding
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Event
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Learnind & Developement
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Report & Analytics
                </a>
              </li>
              {/* More items */}
            </ul>
          </div>
          <li className="nav-item">
            <i className="bi bi-bell-fill"></i>
          </li>
          <li className="nav-item">
            <i className="bi bi-person-circle m-2"></i>
          </li>
        </div>
      </nav>

      {/* Sidebar Component */}
      <Sidebar isSidebarVisible={isSidebarVisible} />
    </>
  );
}

export default Navbar;
