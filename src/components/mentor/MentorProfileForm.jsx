import { useState } from "react";
import React from "react";
import styles from "../../assets/css/startup/MentorProfile.module.css";
import { useForm } from "react-hook-form";

function MentorProfileForm() {
  const [profileImage, setProfileImage] = useState(null);
    const { register, handleSubmit, reset} = useForm();
const submitData = (data) =>{
  console.log(data)
  data.preventDefault();
}

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.mentorBody}>
      <div className={styles.mentorContainer}>
        <h2 className={styles.mentorFormTitle}>Mentor Profile Form</h2>
        <p className={styles.mentorFormSubtitle}>
          Please fill in all mandatory fields marked with *
        </p>

        <form onSubmit={handleSubmit((data)=>submitData(data))}>
          {/* Personal Information Section */}
          <div className={styles.mentorSectionCard}>
            <div className={styles.mentorSectionHeader}>
              <i className="bi bi-person"></i>
              <h5 className="fw-bold">Personal Information</h5>
            </div>

            <div className={styles.mentorFormRow}>
              <div className={styles.mentorFormGroup}>
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  required
                  className={styles.mentorInput}
                />
              </div>

              <div className={styles.mentorFormGroup}>
                <label htmlFor="profilePicture">Profile Picture</label>
                <div className={styles.mentorUploadContainer}>
                  {profileImage && (
                    <>
                      <img
                        src={profileImage || "/placeholder.svg"}
                        alt="Profile"
                        className={styles.mentorProfilePreview}
                      />
                      <button
                        type="button"
                        className={styles.mentorUploadBtn}
                        onClick={() =>
                          document.getElementById("fileInput").click()
                        }
                      >
                        Edit
                      </button>
                    </>
                  )}
                  {!profileImage && (
                    <>
                      <button
                        type="button"
                        className={styles.mentorUploadBtn}
                        onClick={() =>
                          document.getElementById("fileInput").click()
                        }
                      >
                        Upload
                      </button>
                    </>
                  )}
                  <input
                    id="fileInput"
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageUpload}
                  />
                </div>
              </div>
            </div>

            <div className={styles.mentorFormRow}>
              <div className={styles.mentorFormGroup}>
                <label htmlFor="dateOfBirth">Date of Birth *</label>
                <input
                  type="date"
                  id="dateOfBirth"
                  required
                  className={styles.mentorInput}
                />
              </div>

              <div className={styles.mentorFormGroup}>
                <label htmlFor="gender">Gender *</label>
                <select id="gender" required className={styles.mentorInput}>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className={styles.mentorFormRow}>
              <div className={styles.mentorFormGroup}>
                <label htmlFor="contactNumber">Contact Number *</label>
                <input
                  type="tel"
                  id="contactNumber"
                  required
                  className={styles.mentorInput}
                />
              </div>

              <div className={styles.mentorFormGroup}>
                <label htmlFor="emailAddress">Email Address *</label>
                <input
                  type="email"
                  id="emailAddress"
                  required
                  className={styles.mentorInput}
                />
              </div>
            </div>

            <div className={styles.mentorFormGroup}>
              <label htmlFor="linkedInProfile">LinkedIn Profile *</label>
              <textarea
                id="linkedInProfile"
                rows="2"
                className={styles.mentorTextarea}
              ></textarea>
            </div>

            <div className={styles.mentorFormGroup}>
              <label htmlFor="permanentAddress">Permanent Address</label>
              <textarea
                id="permanentAddress"
                rows="4"
                className={styles.mentorTextarea}
              ></textarea>
            </div>
          </div>

          {/* Professional Background */}
          <div className={styles.mentorSectionCard}>
            <div className={styles.mentorSectionHeader}>
              <i className="bi bi-briefcase"></i>
              <h5 className="fw-bold">Professional Background</h5>
            </div>

            <div className={styles.mentorFormGroup}>
              <label htmlFor="jobTitle">Job Title</label>
              <input
                type="text"
                id="jobTitle"
                required
                className={styles.mentorInput}
              />
            </div>

            <div className={styles.mentorFormRow}>
              <div className={styles.mentorFormGroup}>
                <label htmlFor="educationQualification">
                  Education Qualification *
                </label>
                <input
                  type="text"
                  id="educationQualification"
                  required
                  className={styles.mentorInput}
                />
              </div>

              <div className={styles.mentorFormGroup}>
                <label htmlFor="industryField">Industry/Field*</label>
                <select
                  id="industryField"
                  required
                  className={styles.mentorInput}
                >
                  <option value="">Select</option>
                  <option value="skill1">Select-1</option>
                  <option value="skill2">Select-2</option>
                  <option value="skill3">Select-3</option>
                  <option value="skill4">Select-4</option>
                </select>
              </div>
            </div>

            <div className={styles.mentorFormGroup}>
              <label htmlFor="companyOrganization">Company/Organization</label>
              <input
                type="text"
                id="companyOrganization"
                required
                className={styles.mentorInput}
              />
            </div>
          </div>

          {/* Mentorship Info */}
          <div className={styles.mentorSectionCard}>
            <div className={styles.mentorSectionHeader}>
              <i className="bi bi-briefcase"></i>
              <h5 className="fw-bold">Mentorship Info</h5>
            </div>

            <div className={styles.mentorFormRow}>
              <div className={styles.mentorFormGroup}>
                <label htmlFor="expertiseTopics">Expertise/Topics</label>
                <input
                  type="text"
                  id="expertiseTopics"
                  required
                  className={styles.mentorInput}
                />
              </div>

              <div className={styles.mentorFormGroup}>
                <label htmlFor="availability">Availability *</label>
                <input
                  type="text"
                  id="availability"
                  className={styles.mentorInput}
                />
              </div>
            </div>

            <div className={styles.mentorFormGroup}>
              <label htmlFor="personalWebsiteBlog">Personal Website/Blog</label>
              <input
                type="text"
                id="personalWebsiteBlog"
                required
                className={styles.mentorInput}
              />
            </div>
          </div>

          <div className={styles.mentorFormActions}>
            <button type="button" className={styles.mentorCancelBtn}>
              Cancel
            </button>
            <button type="submit" className={styles.mentorSubmitBtn}>
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MentorProfileForm;
