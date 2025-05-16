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
        console.log(result);
        toast.success("Fetching edit Data Successfully");
        setFormData(result.data.data);
      }
    } catch (error) {
      toast.error("Error in getting form data", error);
    }
  };
  useEffect(
    () => {
      fetchData();
    },
    [],
    formData
  );

  return !formData ? (
    <Loader />
  ) : (
    <div className={styles.profileContainer}>
      {/* Profile Header */}
      <div className={styles.card}>
        <div className={styles.profileHeader}>
          <div className="row">
            <div className="col-auto">
              {/* <img
                src="images/profilePhoto.png"
                alt="Sarah Anderson"
                className={styles.profileImg}
              /> */}
            </div>
            <div className="col">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h1 className="fs-4 fw-bold mb-1">
                    {formData.personal_name}
                  </h1>
                  <p
                    className={`text-small text-muted mb-3 ${styles.textSmall} ${styles.textMuted}`}
                  >
                    Founder & CEO at {formData.startup_name}
                  </p>

                  <div className={styles.contactInfo}>
                    <div className={`row ${styles.contactRow}`}>
                      {/* Date of Birth */}
                      <div className={`col-md-6 ${styles.contactItem}`}>
                        <i
                          className={`far fa-calendar ${styles.textMuted}`}
                        ></i>
                        <span className={styles.textSmall}>
                          Year of Study: {formData.year}
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
                          {formData.email_id}
                        </a>
                      </div>
                    </div>

                    <div className={`row ${styles.contactRow}`}>
                      {/* Phone */}
                      <div className={`col-md-6 ${styles.contactItem}`}>
                        <i className={`fas fa-phone ${styles.textMuted}`}></i>
                        <span className={styles.textSmall}>
                          {formData.phone}
                        </span>
                      </div>

                      {/* Location */}
                      <div className={`col-md-6 ${styles.contactItem}`}>
                        <i
                          className={`fas fa-map-marker-alt ${styles.textMuted}`}
                        ></i>
                        <span className={styles.textSmall}>
                          Contact: {formData.phone}
                        </span>
                      </div>
                      <div className={`col-md-6 ${styles.contactItem}`}>
                        <i
                          className={`fas fa-map-marker-alt ${styles.textMuted}`}
                        ></i>
                        <span className={styles.textSmall}>
                          Department/Course: {formData.dept}
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
                          Student ID:{formData.student_id}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href={`mailto:${formData.email_id}`}
                  className={`btn btn-primary ${styles.contactBtn}`}
                >
                  <i className="fas fa-envelope me-2"></i> Contact
                </a>
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
            <span className={styles.founderId}>
              Startup Name {formData.startup_name}
            </span>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6 d-flex">
              <div className={styles.pressIcon}>
                <i className={`fas fa-building ${styles.textMuted}`}></i>
              </div>
              <div>
                <h3 className="fs-6 fw-bold mb-1"> {formData.problem_soln}</h3>
                <p className={`${styles.textSmall} ${styles.textMuted} mb-0`}>
                  {formData.description}
                </p>
              </div>
              
            </div>
            <div className="col-md-6">
              <div className="mb-2">
                <i className={`fas fa-industry me-2 ${styles.textMuted}`}></i>
                <span className={styles.textSmall}>
                  Industry Sector: {formData.industry}
                </span>
              </div>
              <div className="mb-2">
                <i className={`fas fa-users me-2 ${styles.textMuted}`}></i>
                <span className={styles.textSmall}>
                  Competition Anaylysis: {formData.analysis}
                </span>
              </div>
              <div className="mb-2">
                <i className={`fas fa-users me-2 ${styles.textMuted}`}></i>
                <span className={styles.textSmall}>
                  Expected Investment: {formData.invesment}
                </span>
              </div>
               <div className="mb-2">
                <i className={`fas fa-users me-2 ${styles.textMuted}`}></i>
                <span className={styles.textSmall}>
                  Revenue Model: {formData.revenue}
                </span>
              </div>
              <div className="mb-2">
                <i className={`fas fa-users me-2 ${styles.textMuted}`}></i>
                <span className={styles.textSmall}>
                  Office Space: {formData.office_space}
                </span>
              </div>
              <div className="mb-2">
                <i className={`fas fa-users me-2 ${styles.textMuted}`}></i>
                <span className={styles.textSmall}>
                  Mentorship Required: {formData.mentorship}
                </span>
              </div>
              <div className="mb-2">
                <i className={`fas fa-users me-2 ${styles.textMuted}`}></i>
                <span className={styles.textSmall}>
                  Networking Support: {formData.networking}
                </span>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="funRequiredCheckbox"
                  checked={formData.fun_required}
                  readOnly
                />
                <label
                  className="form-check-label"
                  htmlFor="funRequiredCheckbox"
                >
                  <i className={`fas fa-industry me-2 ${styles.textMuted}`}></i>
                  <span className={styles.textSmall}>
                    Functioning Required: {formData.fun_required ? "Yes" : "No"}
                  </span>
                </label>
              </div>
              {/* <div className="mb-2">
                <i
                  className={`fas fa-map-marker-alt me-2 ${styles.textMuted}`}
                ></i>
                <span className={styles.textSmall}>
                  HQ: 123 Tech Street, San Francisco, CA
                </span>
              </div> */}
            </div>
            <div className="col-md-6">
          
              <div className="mb-2">
                <i className={`fas fa-users me-2 ${styles.textMuted}`}></i>
                <span className={styles.textSmall}>
                Current Stage: {formData.stage}
                </span>
              </div>
             
            </div>
          </div>
          <div className="mt-3">
            {/* <div className="mb-2">
              <i className={`far fa-calendar me-2 ${styles.textMuted}`}></i>
              <span className={styles.textSmall}>Est. 2020</span>
            </div> */}
            <div>
              <i className={`fas fa-globe me-2 ${styles.textMuted}`}></i>
              <a
                href="http://www.techvision.com"
                className={`${styles.textSmall} ${styles.textPrimary} text-decoration-none`}
              >
                {formData.lwebsite}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Background */}
         </div>
  );
};

export default MainFormDisplay;
