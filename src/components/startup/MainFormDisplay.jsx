import React, { useEffect, useState } from "react";
import styles from "../../assets/css/startup/StartupDisplay.module.css";
import axios from "../../../utils/Axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import Loader from "../loader/Loader";

const MainFormDisplay = () => {

    const [formData, setFormData] = useState();
    const { id } = useParams();
    const fetchData = async () => {
      try {
        const result = await axios.get(`/api/mainform/get-edit/${id}`);
        if (result) {
          console.log(result)
          toast.success("Fetching edit Data Successfully");
          setFormData(result.data.data);
        }
      } catch (error) {
        toast.error("Error in getting form data", error);
      }
    };
    useEffect(() => {
      fetchData();
    }, [],formData);

  return !formData ? <Loader/> :(
    <div className={styles.profileContainer}>
      {/* Profile Header */}
      <div className={styles.card}>
        <div className={styles.profileHeader}>
          <div className="row">
            <div className="col-auto">
              <img
                src="images/profilePhoto.png"
                alt="Sarah Anderson"
                className={styles.profileImg}
              />
            </div>
            <div className="col">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h1 className="fs-4 fw-bold mb-1">{formData.personal_name}</h1>
                  <p
                    className={`text-small text-muted mb-3 ${styles.textSmall} ${styles.textMuted}`}
                  >
                    Founder & CEO at TechVision Solutions
                  </p>

                  <div className={styles.contactInfo}>
                    <div className={`row ${styles.contactRow}`}>
                      {/* Date of Birth */}
                      <div className={`col-md-6 ${styles.contactItem}`}>
                        <i
                          className={`far fa-calendar ${styles.textMuted}`}
                        ></i>
                        <span className={styles.textSmall}>
                          Born: March 17, 1985
                        </span>
                      </div>

                      {/* Email */}
                      <div className={`col-md-6 ${styles.contactItem}`}>
                        <i
                          className={`fas fa-envelope ${styles.textMuted}`}
                        ></i>
                        <a
                          href="mailto:sarah@techvision.com"
                          className={`${styles.textSmall} ${styles.textPrimary} text-decoration-none`}
                        >
                          sarah@techvision.com
                        </a>
                      </div>
                    </div>

                    <div className={`row ${styles.contactRow}`}>
                      {/* Phone */}
                      <div className={`col-md-6 ${styles.contactItem}`}>
                        <i className={`fas fa-phone ${styles.textMuted}`}></i>
                        <span className={styles.textSmall}>
                          +1 (555) 123-4567
                        </span>
                      </div>

                      {/* Location */}
                      <div className={`col-md-6 ${styles.contactItem}`}>
                        <i
                          className={`fas fa-map-marker-alt ${styles.textMuted}`}
                        ></i>
                        <span className={styles.textSmall}>
                          San Francisco, CA
                        </span>
                      </div>
                    </div>

                    <div className={`row ${styles.contactRow}`}>
                      {/* LinkedIn */}
                      <div className={`col-md-12 ${styles.contactItem}`}>
                        <i
                          className={`fa-brands fa-linkedin ${styles.textMuted}`}
                        ></i>
                        <a
                          href="#"
                          className={`${styles.textSmall} ${styles.textPrimary} text-decoration-none`}
                        >
                          linkedin.com/in/sarahanderson
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <button className={`btn btn-primary ${styles.contactBtn}`}>
                  <i className="fas fa-envelope me-2"></i> Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Information */}
      <div className={styles.card}>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="fs-5 fw-bold">Company Information</h2>
            <span className={styles.founderId}>Founder ID: FD78392</span>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6 d-flex">
              <div className={styles.pressIcon}>
                <i className={`fas fa-building ${styles.textMuted}`}></i>
              </div>
              <div>
                <h3 className="fs-6 fw-bold mb-1">TechVision Solutions</h3>
                <p className={`${styles.textSmall} ${styles.textMuted} mb-0`}>
                  AI & Machine Learning Solutions
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-2">
                <i className={`fas fa-industry me-2 ${styles.textMuted}`}></i>
                <span className={styles.textSmall}>Industry: Technology</span>
              </div>
              <div className="mb-2">
                <i className={`fas fa-users me-2 ${styles.textMuted}`}></i>
                <span className={styles.textSmall}>
                  Team Size: 50-100 employees
                </span>
              </div>
              <div className="mb-2">
                <i
                  className={`fas fa-map-marker-alt me-2 ${styles.textMuted}`}
                ></i>
                <span className={styles.textSmall}>
                  HQ: 123 Tech Street, San Francisco, CA
                </span>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <div className="mb-2">
              <i className={`far fa-calendar me-2 ${styles.textMuted}`}></i>
              <span className={styles.textSmall}>Est. 2020</span>
            </div>
            <div>
              <i className={`fas fa-globe me-2 ${styles.textMuted}`}></i>
              <a
                href="http://www.techvision.com"
                className={`${styles.textSmall} ${styles.textPrimary} text-decoration-none`}
              >
                www.techvision.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Background */}
      <div className={styles.card}>
        <div className="card-body">
          <h2 className="fs-5 fw-bold mb-4">Professional Background</h2>

          {/* Skills & Expertise */}
          <div className="mb-4">
            <h3 className="fs-6 fw-bold mb-3">Skills & Expertise</h3>
            <div>
              <span className={styles.badgeSkill}>AI/ML</span>
              <span className={styles.badgeSkill}>Leadership</span>
              <span className={styles.badgeSkill}>Product Strategy</span>
              <span className={styles.badgeSkill}>Business Development</span>
              <span className={styles.badgeSkill}>Team Management</span>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-4">
            <h3 className="fs-6 fw-bold mb-3">Experience</h3>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineLine}></div>
              <h4 className="fs-6 mb-1">CEO & Founder</h4>
              <p className={`${styles.textSmall} ${styles.textMuted} mb-1`}>
                TechVision Solutions • 2020 - Present
              </p>
              <p className={`${styles.textSmall} mb-0`}>
                Leading AI-driven solutions for enterprise clients
              </p>
            </div>

            <div
              className={`${styles.timelineItem} ${styles.lastTimelineItem}`}
            >
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineLine}></div>
              <h4 className="fs-6 mb-1">Product Manager</h4>
              <p className={`${styles.textSmall} ${styles.textMuted} mb-1`}>
                Tech Growth Inc. • 2015 - 2020
              </p>
              <p className={`${styles.textSmall} mb-0`}>
                Led product strategy and development
              </p>
            </div>
          </div>

          {/* Notable Achievements & Press Mentions Section */}
          <div className={`${styles.achievementsPressContainer} mb-4`}>
            {/* Notable Achievements */}
            <div className={styles.achievementsContainer}>
              <h3 className="fs-6 fw-bold mb-3">Notable Achievements</h3>
              <div className="row">
                <div className="col-md-6">
                  <div className={styles.achievementBox}>
                    <div className={styles.achievementIcon}>
                      <i className="fa-solid fa-trophy"></i>
                    </div>
                    <div>
                      <h4 className="fs-6 fw-bold mb-1">Forbes 30 Under 30</h4>
                      <p
                        className={`${styles.textSmall} ${styles.textMuted} mb-0`}
                      >
                        Technology Category, 2023
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className={styles.achievementBox}>
                    <div className={styles.achievementIcon}>
                      <i className="fa-solid fa-medal"></i>
                    </div>
                    <div>
                      <h4 className="fs-6 fw-bold mb-1">Best AI Startup</h4>
                      <p
                        className={`${styles.textSmall} ${styles.textMuted} mb-0`}
                      >
                        Tech Awards 2024
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Press Mentions */}
            <div className={styles.pressMentionsContainer}>
              <h3 className="fs-6 fw-bold mb-3">Press Mentions</h3>
              <div className="row">
                <div className="col-md-6">
                  <div className={styles.pressBox}>
                    <div className={styles.pressIcon}>
                      <i className={`fas fa-newspaper ${styles.textMuted}`}></i>
                    </div>
                    <div>
                      <h4 className="fs-6 fw-bold mb-1">TechCrunch</h4>
                      <p
                        className={`${styles.textSmall} ${styles.textMuted} mb-0`}
                      >
                        TechVision's Revolutionary AI Platform
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className={styles.pressBox}>
                    <div className={styles.pressIcon}>
                      <i className={`fas fa-newspaper ${styles.textMuted}`}></i>
                    </div>
                    <div>
                      <h4 className="fs-6 fw-bold mb-1">Forbes</h4>
                      <p
                        className={`${styles.textSmall} ${styles.textMuted} mb-0`}
                      >
                        Rising Stars in Tech: Sarah Anderson
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFormDisplay;
