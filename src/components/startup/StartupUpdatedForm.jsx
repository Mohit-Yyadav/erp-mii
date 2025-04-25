import React, { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import styles from "../../assets/css/startup/StartupUpdatedForm.module.css";

const StartupUpdatedForm = () => {
  const [formData, setFormData] = useState({
    fullName: "Sam",
    dob: "1999-05-20",
    gender: "Male",
    contactNumber: "9876543210",
    email: "sam@example.com",
    linkedin: "https://linkedin.com/in/sam",
    address: "123, Startup Lane, Bangalore",
    founderId: "FD123456",
    companyName: "Sam Innovations",
    designation: "Founder & CEO",
    companyEstDate: "2020-08-15",
    companyWebsite: "https://saminno.com",
    industryType: "Technology",
    workExperience: "3 years at TechCorp as Product Manager",
    education: "B.Tech in Computer Science",
    skills: "Leadership",
    achievements: "Winner of Startup India Award 2023",
    mediaMentions: "https://newsportal.com/sam-innovations-feature",
  });

  const [profileImage, setProfileImage] = useState(
    "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
  );

  const [uploadedFile, setUploadedFile] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size must be less than 5MB");
        return;
      }
      setUploadedFile(file);
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const { register, reset } = useForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    if (uploadedFile) {
      console.log("Uploaded Profile Image:", uploadedFile);
    }
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
                placeholder="place your full n ame"
                required
                value={formData.fullName}
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

                <img
                  src={profileImage}
                  alt="Profile"
                  className="ms-3 rounded-circle"
                  style={{ width: "64px", height: "64px", objectFit: "cover" }}
                />

                <button
                  type="button"
                  className={`${styles.btnUpload} btn ms-3`}
                  onClick={() => document.getElementById("fileInput").click()}
                >
                  Edit
                </button>

                <input
                  {...register("profile")}
                  name="profile"
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageUpload}
                />
              </div>
            </div>

            <div className="col-md-6">
              <label className={styles.formLabel}>Date of Birth *</label>
              <input
                type="date"
                name="dob"
                className={styles.formControl}
                required
                value={formData.dob}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label className={styles.formLabel}>Gender *</label>
              <select
                name="gender"
                className={styles.formSelect}
                required
                value={formData.gender}
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
                type="number"
                name="contactNumber"
                className={styles.formControl}
                required
                value={formData.contactNumber}
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
                value={formData.email}
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
                value={formData.linkedin}
                onChange={handleChange}
              />
            </div>
            <div className="col-12">
              <label className={styles.formLabel}>Permanent Address</label>
              <textarea
                name="address"
                className={styles.formControl}
                rows="3"
                value={formData.address}
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
                value={formData.founderId}
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
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label className={styles.formLabel}>Designation *</label>
              <input
                type="text"
                name="designation"
                value={formData.designation}
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
                value={formData.companyEstDate}
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
                value={formData.companyWebsite}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label className={styles.formLabel}>Industry Type *</label>
              <select
                name="industryType"
                className={styles.formSelect}
                required
                value={formData.industryType}
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
                value={formData.workExperience}
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
                value={formData.education}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label className={styles.formLabel}>Skills And Expertise *</label>
              <select
                name="skills"
                className={styles.formSelect}
                required
                value={formData.skills}
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
                value={formData.achievements}
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
                value={formData.mediaMentions}
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

export default StartupUpdatedForm;
