import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../assets/css/dashboard/StatsSection.module.css";
const StatsSection = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <div className={`row row-cols-1 row-cols-sm-2 row-cols-md-4 g-2 mb-2 justify-content-center ${styles.statsSection}`}>
      <div className="col">
        <div className={`card rounded-5 ${styles.statCard}`} onClick={() => handleNavigate("/startup/startup-directory")} style={{ cursor: "pointer" }}>
          <div className="card-body text-center">
            <h5 className="card-title">Total No. of Startups</h5>
            <p className="card-text ">721</p>
          </div>
        </div>
      </div>
      <div className="col">
      <div className={`card rounded-5 ${styles.statCard}`} onClick={() => handleNavigate("/startup/meeting-directory")} style={{ cursor: "pointer" }}>
          <div className="card-body text-center">
            <h5 className="card-title">No. of Meetings</h5>
            <p className="card-text ">36</p>
          </div>
        </div>
      </div>
      <div className="col">
    <div className={`card rounded-5 ${styles.statCard}`} onClick={() => handleNavigate("/startup/employee-directory")} style={{ cursor: "pointer" }}>
          <div className="card-body text-center">
            <h5 className="card-title">Total Employees</h5>
            <p className="card-text ">1,156</p>
          </div>
        </div>
      </div>
      <div className="col">
      <div className={`card rounded-5 ${styles.statCard}`} onClick={() => handleNavigate("/startup/startup-pending-directory")} style={{ cursor: "pointer" }}>
          <div className="card-body text-center">
            <h5 className="card-title">Pending Applications</h5>
            <p className="card-text ">239</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsSection
