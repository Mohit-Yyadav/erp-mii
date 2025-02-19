import React, { useState } from "react";

const Sidebar = ({ isSidebarVisible }) => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (id) => {
    setDropdownOpen(dropdownOpen === id ? null : id);
  };

  return (
    <div className={`sidebar ${isSidebarVisible ? "active" : ""}`} id="sidebar">
      <li className="ps-4">Overview</li>
      <li className="ps-4">Project</li>
      <div className="p-4">
        {/* Startup Dropdown */}
        <div className={`dropdown mb-3 ${dropdownOpen === 1 ? "open" : ""}`}>
          <button
            className="nav-link dropdown-toggle w-100 text-start"
            onClick={() => toggleDropdown(1)}
          >
            <i className={`fas fa-home me-2 ${dropdownOpen === 1 ? "rotate" : ""}`}></i>
            <span>Startup</span>
          </button>
          <div className={`dropdown-content ${dropdownOpen === 1 ? "open" : ""}`}>
            {dropdownOpen === 1 && (
              <>
                <a className="dropdown-item" href="#">New Startup</a>
                <a className="dropdown-item" href="#">Startup List</a>
                <a className="dropdown-item" href="#">Add Funding</a>
              </>
            )}
          </div>
        </div>

        {/* Admin Dropdown */}
        <div className={`dropdown mb-3 ${dropdownOpen === 2 ? "open" : ""}`}>
          <button
            className="nav-link dropdown-toggle w-100 text-start"
            onClick={() => toggleDropdown(2)}
          >
            <i className={`fas fa-user-shield me-2 ${dropdownOpen === 2 ? "rotate" : ""}`}></i>
            <span>Admin</span>
          </button>
          <div className={`dropdown-content ${dropdownOpen === 2 ? "open" : ""}`}>
            {dropdownOpen === 2 && (
              <>
                <a className="dropdown-item" href="#">delete</a>
                <a className="dropdown-item" href="#">Update</a>
              </>
            )}
          </div>
        </div>

        {/* Incubation Status Dropdown */}
        <div className={`dropdown mb-3 ${dropdownOpen === 5 ? "open" : ""}`}>
          <button
            className="nav-link dropdown-toggle w-100 text-start"
            onClick={() => toggleDropdown(5)}
          >
            <i className={`fas fa-chart-line me-2 ${dropdownOpen === 5 ? "rotate" : ""}`}></i>
            <span>Incubation Status</span>
          </button>
          <div className={`dropdown-content ${dropdownOpen === 5 ? "open" : ""}`}>
            {dropdownOpen === 5 && (
              <>
                <a className="dropdown-item" href="#">View Progress</a>
                <a className="dropdown-item" href="#">Update Status</a>
                <a className="dropdown-item" href="#">Request Feedback</a>
              </>
            )}
          </div>
        </div>

        {/* Milestone Dropdown */}
        <div className={`dropdown mb-3 ${dropdownOpen === 6 ? "open" : ""}`}>
          <button
            className="nav-link dropdown-toggle w-100 text-start"
            onClick={() => toggleDropdown(6)}
          >
            <i className={`fas fa-flag me-2 ${dropdownOpen === 6 ? "rotate" : ""}`}></i>
            <span>Milestone</span>
          </button>
          <div className={`dropdown-content ${dropdownOpen === 6 ? "open" : ""}`}>
            {dropdownOpen === 6 && (
              <>
                <a className="dropdown-item" href="#">View Milestones</a>
                <a className="dropdown-item" href="#">Add Milestone</a>
                <a className="dropdown-item" href="#">Completed Milestones</a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
