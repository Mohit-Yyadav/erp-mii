// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "../../assets/css/startup/StartupForm.module.css";

const StartupProfileForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className={`container my-5 ${styles.containerForm}`}>
      <h1 className={`${styles.textCenter} mb-2`}>Startup Profile Form</h1>
      <p className={`${styles.textMuted} mb-4`}>
        Please fill in all mandatory fields marked with *
      </p>

      <form className="startup-form" onSubmit={handleSubmit}>
        {/* Personal Information Section */}
        <div className={styles.formSection}>
          <h2>
            <i className="bi bi-person me-2"></i>Personal Information
          </h2>
          <div className="row g-4">
            <div className="col-md-6">
              <label className={styles.formLabel}>Full Name *</label>
              <input
                type="text"
                name="fullName"
                className={styles.formControl}
                placeholder="Enter full name"
                required
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label className={styles.formLabel}>Profile Picture</label>
              <div
                className={`${styles.uploadBox} col-md-6 d-flex align-items-center`}
              >
                <div className={`${styles.uploadIcon} col-md-6`}>
                  <i className="bi bi-image"></i>
                </div>
                <button
                  type="button"
                  className={`${styles.btnUpload} btn ms-3`}
                >
                  Upload
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <label className={styles.formLabel}>Date of Birth *</label>
              <input
                type="date"
                name="dob"
                className={styles.formControl}
                required
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label className={styles.formLabel}>Gender *</label>
              <select
                name="gender"
                className={styles.formSelect}
                required
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className={styles.formLabel}>Contact Number *</label>
              <input
                type="tel"
                name="contactNumber"
                className={styles.formControl}
                required
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label className={styles.formLabel}>Email Address *</label>
              <input
                type="email"
                name="email"
                className={styles.formControl}
                required
                onChange={handleChange}
              />
            </div>
            <div className="col-md-12">
              <label className={styles.formLabel}>LinkedIn Profile *</label>
              <input
                type="url"
                name="linkedin"
                className={styles.formControl}
                required
                onChange={handleChange}
              />
            </div>
            <div className="col-12">
              <label className={styles.formLabel}>Permanent Address</label>
              <textarea
                name="address"
                className={styles.formControl}
                rows="3"
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
        </div>

        {/* Company & Role Information */}
        <div className={styles.formSection}>
          <h2>
            <i className="bi bi-briefcase-fill me-2"></i>Company & Role
            Information
          </h2>
          <div className="row g-3">
            <div className="col-md-6">
              <label className={styles.formLabel}>Founder ID</label>
              <input
                type="text"
                name="founderId"
                className={styles.formControl}
                required
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label className={styles.formLabel}>Company Name *</label>
              <input
                type="text"
                name="companyName"
                className={styles.formControl}
                required
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label className={styles.formLabel}>Designation *</label>
              <input
                type="text"
                name="designation"
                className={styles.formControl}
                required
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label className={styles.formLabel}>
                Company Establishment Date *
              </label>
              <input
                type="date"
                name="companyEstDate"
                className={styles.formControl}
                required
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label className={styles.formLabel}>Company Website *</label>
              <input
                type="url"
                name="companyWebsite"
                className={styles.formControl}
                required
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label className={styles.formLabel}>Industry Type *</label>
              <select
                name="industryType"
                className={styles.formSelect}
                required
                onChange={handleChange}
              >
                <option value="">Select Industry</option>
                <option>Technology</option>
                <option>Finance</option>
                <option>Healthcare</option>
              </select>
            </div>
          </div>
        </div>

        {/* Professional Background */}
        <div className={styles.formSection}>
          <h2>
            <i className="bi bi-cash me-2"></i>Professional Background
          </h2>
          <div className="row g-3">
            <div className="col-12">
              <label className={styles.formLabel}>
                Previous Work Experience
              </label>
              <textarea
                name="workExperience"
                className={styles.formControl}
                rows="2"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="col-md-6">
              <label className={styles.formLabel}>
                Education Qualification *
              </label>
              <input
                type="text"
                name="education"
                className={styles.formControl}
                required
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label className={styles.formLabel}>Skills And Expertise *</label>
              <select
                name="skills"
                className={styles.formSelect}
                required
                onChange={handleChange}
              >
                <option value="">Select Skills</option>
                <option>Leadership</option>
                <option>Project Management</option>
                <option>Communication</option>
                <option>Problem Solving</option>
                <option>Critical Thinking</option>
                <option>Teamwork</option>
                <option>Technical Proficiency</option>
                <option>Data Analysis</option>
                <option>Creativity</option>
                <option>Time Management</option>
              </select>
            </div>
            <div className="col-12">
              <label className={styles.formLabel}>Notable Achievements</label>
              <textarea
                name="achievements"
                className={styles.formControl}
                rows="2"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="col-12">
              <label className={styles.formLabel}>Media/Press Mentions *</label>
              <input
                type="url"
                name="mediaMentions"
                className={styles.formControl}
                placeholder="https://"
                required
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Form Buttons */}
        <div
          className={`${styles.formButtons} d-flex justify-content-end gap-3 mt-4`}
        >
          <button className={`btn ${styles.btnLight}`} type="button">
            Cancel
          </button>
          <button className={`btn ${styles.btnPrimary}`} type="submit">
            Submit Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default StartupProfileForm;
