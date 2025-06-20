import React from "react";
import styles from "../../assets/css/employee/EmployeeProfile.module.css";
import profile from "../../assets/image/img.png";
import { div } from "framer-motion/client";

function EmployeeDisplay() {
  const profileDetails = [
    {
      name: "Personal Information",
      icon: "fas fa-user me-2",
      details: [
        {
          icon: "far fa-calendar-alt",
          title: "Date of Birth",
          titleData: "15 March 1990",
        },
        {
          icon: "fas fa-phone",
          title: "Contact Number",
          titleData: "+1 (555) 123-456",
        },
        {
          icon: "fas fa-venus-mars",
          title: "Gender",
          titleData: "Female",
        },
        {
          icon: "far fa-envelope",
          title: "Email Address",
          titleData: "sarah.johnson@company.com",
        },
        { icon: "fas fa-ring", title: "Marital Status", titleData: "Married" },
        {
          icon: "fas fa-map-marker-alt",
          title: "Address",
          titleData: "123 Business Avenue, Suite 100, New York, NY 10001",
        },
      ],
    },
    {
      name: "Job Information",
      icon: "fas fa-briefcase me-2",
      details: [
        {
          icon: "fas fa-sitemap",
          title: "Department",
          titleData: "Product Development",
        },
        {
          icon: "fas fa-user-tie",
          title: "Reporting Manager",
          titleData: "John Smith",
        },
        {
          icon: "fas fa-venus-mars",
          title: "Designation",
          titleData: "Senior Product Manager",
        },
        {
          icon: "fas fa-building",
          title: "Work Location",
          titleData: "New York Office",
        },
        {
          icon: "fas fa-calendar-check",
          title: "Date of Joining",
          titleData: "01 January 2025",
        },
        {
          icon: "far fa-clock",
          title: "Shift Timing",
          titleData: "9:00 AM - 6:00 PM EST",
        },
      ],
    },
    {
      name: "Salary & Payroll Details",
      icon: "fas fa-user me-2",
      details: [
        {
          icon: "fas fa-dollar-sign",
          title: "Annual CTC",
          titleData: "$120,000",
        },
        {
          icon: "fas fa-file-invoice",
          title: "PF Number",
          titleData: "PF-2025-789456",
        },
        {
          icon: "fas fa-university",
          title: "Bank Accountr",
          titleData: "Female",
        },
        {
          icon: "fas fa-receipt",
          title: "Tax ID (PAN)",
          titleData: "ABCDE1234F",
        },
      ],
    },
  ];
  return (
    <div className={`${styles.container1} p-0`}>
      {/* Header Banner */}
      <div className={styles.profileHeader}>
        <div className={styles.container1}>
          {/* Profile Details */}
          <div className={styles.profileDetails}>
            <div className={styles.profileImgContainer}>
              <img src={profile} alt="Profile" className={styles.profileImg} />
            </div>
            {/* Profile Info */}
            <div className={styles.profileInfo}>
              <h1 className={styles.profileName}>Sarah Johnson</h1>
              <p className={styles.profileTitle}>Senior UX Designer</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.profileBadges}>
        <span className={styles.customBadges}>#EMP2025</span>
        <span className={styles.activeBtn}>
          <i className={`fas fa-circle ${styles.smallCircle}`}></i> Active
          Employee
        </span>
      </div>
      <div className="container mt-5">
        {/* Information Sections */}
        <div className="row">
          {profileDetails.map((data, i) => {
            return (
              <div className="col-lg-12 mb-4" key={i}>
                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <h5 className="mb-0">
                      <i className={data.icon}></i> {data.name}
                    </h5>
                  </div>
                  <div className={styles.cardBody}>
                    <div className="row">
                      {data.details.map((info, index) => {
                        return (
                          <div className="col-md-6 col-lg-6 mb-3" key={index}>
                            <div className="d-flex align-items-start">
                              <div className="info-icon me-3">
                                <i className={info.icon}></i>
                              </div>
                              <div className="info-content">
                                <div className="info-label">{info.title}</div>
                                <div className="info-value">
                                  {info.titleData}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const renderInfoItem = (icon, label, value) => {
  return (
    <div className="col-md-6 col-lg-6 mb-3">
      <div className="d-flex align-items-start">
        <div className="info-icon me-3">
          <i className={icon}></i>
        </div>
        <div className="info-content">
          <div className="info-label">{label}</div>
          <div className="info-value">{value}</div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDisplay;
