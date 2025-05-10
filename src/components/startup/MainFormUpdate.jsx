import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import styles from "../../assets/css/startup/StartupUpdatedForm.module.css";
import { useParams } from "react-router-dom";
import axios from "../../../utils/Axios";
import Loader from "../loader/Loader";

const MainFormUpdate = () => {
  const [formData, setFormData] = useState();
  const { id } = useParams();
  const fetchData = async () => {
    try {
      const result = await axios.get(`/api/mainform/get-edit/${id}`);
      if (result) {
        toast.success("Fetching edit Data Successfully");
        setFormData(result.data.data);
      }
    } catch (error) {
      toast.error("Error in getting form data", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

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

  return !formData ? (
    <Loader />
  ) : (
    <div className={`container my-5 ${styles.containerForm}`}>
      <h1 className={`${styles.textCenter} mb-2`}>Main Data Update Form</h1>
      <p className={`${styles.textMuted} mb-4`}>
        Please fill in all mandatory fields marked with *
      </p>

      <form className="startup-form" onSubmit={handleSubmit}>
        {/* Personal Information Section */}
        <div className={styles.formSection}>
          <h2>
            <i className="bi bi-person me-2"></i>Personal Information
          </h2>
          <input type="hidden" name="id" value={formData.id} />
          <div className="row g-4">
            <div className="col-md-6">
              <label className={styles.formLabel}>Full Name *</label>
              <input
                type="text"
                name="fullName"
                className={styles.formControl}
                placeholder="place your full n ame"
                required
                value={formData.personal_name}
                onChange={handleChange}
              />
            </div>
            {/* <div className="col-md-6">
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
            </div> */}

            <div className="col-md-6">
  <label className={styles.formLabel}>Year of Study</label>
  <input
    type="date"
    name="year"
    className={styles.formControl}
    required
    value={formData.year}
    onChange={handleChange}
  />
</div>
           <div className="col-md-6">
              <label className={styles.formLabel}>Department/Course</label>
              <select
                name="industryType"
                className={styles.formSelect}
                required
                value={formData.dept}
                onChange={handleChange}
              >
                <option value={formData.dept}>{formData.dept}</option>
                <option>Technology</option>
                <option>Finance</option>
                <option>Healthcare</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className={styles.formLabel}>Contact Number *</label>
              <input
                type="number"
                name="contactNumber"
                className={styles.formControl}
                required
                value={formData.phone}
              />
            </div>
            <div className="col-md-6">
              <label className={styles.formLabel}>Email Address *</label>
              <input
                type="email"
                name="email"
                className={styles.formControl}
                required
                value={formData.email_id}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label className={styles.formLabel}>Startup Name</label>
              <input
                type="email"
                name="email"
                className={styles.formControl}
                required
                value={formData.startup_name}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label className={styles.formLabel}>Current Stage</label>
              <input
                type="email"
                name="email"
                className={styles.formControl}
                required
                value={formData.stage}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label className={styles.formLabel}>Industry Sector</label>
              <input
                type="email"
                name="email"
                className={styles.formControl}
                required
                value={formData.industry}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-12">
              <label className={styles.formLabel}>Website/Social Media</label>
              <input
                type="url"
                name="linkedin"
                className={styles.formControl}
                required
                value={formData.lwebsite}
                onChange={handleChange}
              />
            </div>

            <div className="col-12">
              <label className={styles.formLabel}>Brief Description</label>
              <textarea
                name="address"
                className={styles.formControl}
                rows="3"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-md-12">
              <label className={styles.formLabel}>
                Problem Statement And Solution
              </label>
              <input
                type="url"
                name="linkedin"
                className={styles.formControl}
                required
                value={formData.problem_soln}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Company & Role Information */}
        <div className={styles.formSection}>
          <h2>
            <i className="bi bi-briefcase-fill me-2"></i>Business Details
          </h2>
          <div className="row g-3">
            <div className="col-md-6">
              <label className={styles.formLabel}>Functioning Required</label>
              <input
                type="checkbox"
                name="founderId"
                className={styles.formControl}
                required
                value={formData.fun_required}
                checked={formData.fun_required == "1"}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label className={styles.formLabel}>Expected Investment</label>
              <input
                type="text"
                name="companyName"
                className={styles.formControl}
                required
                value={formData.invesment}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label className={styles.formLabel}>Revenue Model</label>
              <input
                type="text"
                name="designation"
                value={formData.revenue}
                className={styles.revenue}
                required
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label className={styles.formLabel}>             
                    Expected Investment
              </label>
              <input
                type="text"
                name="companyEstDate"
                className={styles.formControl}
                required
                value={formData.invesment}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label className={styles.formLabel}>Competition Anaylysis</label>
              <input
                type="url"
                name="companyWebsite"
                className={styles.formControl}
                required
                value={formData.analysis}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label className={styles.formLabel}>Office Space</label>
              <select
                name="industryType"
                className={styles.formSelect}
                required
                value={formData.office_space}
                onChange={handleChange}
              >
                <option value="">{formData.office_space}</option>
                <option>Technology</option>
                <option>Finance</option>
                <option>Healthcare</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className={styles.formLabel}>Mentorship Required</label>
              <div className="form-check">
                <input
                  type="radio"
                  id="mentorshipYes"
                  name="mentorshipRequired"
                  value="yes"
                  checked={formData.mentorship == "yes"}
                  className={`form-check-input ${styles.mentorship}`}
                />
                <label htmlFor="mentorshipYes" className="form-check-label">
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  id="mentorshipNo"
                  name="mentorshipRequired"
                  value="no"
                  checked={formData.mentorship == "no"}
                  className={`form-check-input ${styles.mentorship}`}
                />
                <label htmlFor="mentorshipNo" className="form-check-label">
                  No
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <label className={styles.formLabel}>Networking Support</label>
              <div className="form-check">
                <input
                  type="radio"
                  id="NetworkingYes"
                  name="NetworkingRequired"
                  value="yes"
                  checked={formData.networking == "yes"}
                  className={`form-check-input ${styles.mentorship}`}
                />
                <label htmlFor="NetworkingYes" className="form-check-label">
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  id="NetworkingNo"
                  name="NetworkingRequired"
                  value="no"
                  checked={formData.networking == "no"}
                  className={`form-check-input ${styles.mentorship}`}
                />
                <label htmlFor="NetworkingNo" className="form-check-label">
                  No
                </label>
              </div>
            </div>

            
          </div>
        </div>

        {/* Professional Background */}
        {/* <div className={styles.formSection}>
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
        </div> */}

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

export default MainFormUpdate;
