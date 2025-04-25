import React from "react";
import { useState } from "react";
import styles from "../../assets/css/startup/EmployeeDataForm.module.css";
import { useForm } from "react-hook-form";
import axios from "../../../utils/Axios";
import { toast } from "react-toastify";



const EmployeeDataForm = () => {
  const [profileImage, setProfileImage] = useState(null);
  const { register, handleSubmit, reset } = useForm();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    
    if (file) {
      // Ensure the file is within the allowed size (e.g., 5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size must be less than 5MB");
        return;
      }
      setProfileImage(file); // ✅ Store file directly
    }
  };

  const submitData = async (data) => {
    console.log("Submitted Data Before Sending:", data);
  
    const formData = new FormData();
  
    // Append all form fields to FormData
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
  
    // Append the profile image if uploaded
    if (profileImage) {
      formData.append("picture", profileImage);
    }
  
    try {
      const result = await axios.post("/api/emp_data/emp_insert", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      console.log("API Response:", result);
      toast.success("Data Inserted Successfully");
    } catch (error) {
      console.error("Error Details:", error.response?.data || error.message);
      toast.error("Error in Submitting form");
    }
  };
  

  return (
    <div className={styles.empBody}>
      <div className={styles.empContainer}>
        <h2 className={styles.empFormTitle}>Employee Data Form</h2>
        <p className={styles.empFormSubtitle}>
          Please fill in all mandatory fields marked with *
        </p>
        <form 
          onSubmit={handleSubmit((data) => submitData(data))}
        >
          {/* Personal Information Section */}

          <div className={styles.empContainer}>
            <div className={styles.empSectionCard}>
              <div className={styles.empSectionHeader}>
                <i className="fa fa-user"></i>
                <h5 className={styles.empSectionTitle}>Personal Information</h5>
              </div>

              <div className={styles.empFormRow}>
                <div className={styles.empFormGroup}>
                  <label htmlFor="fullName" className={styles.empLabel}>
                    Full Name *
                  </label>
                  <input
                    {...register("name")}
                    name="name"
                    type="text"
                    id="fullName"
                    className={styles.empInput}
                    required
                  />
                </div>
                <div className={styles.empFormGroup}>
                  <label htmlFor="profilePicture" className={styles.empLabel}>
                    Profile Picture
                  </label>
                  <div className={styles.empUploadContainer}>
                    {profileImage && (
                      <>
                        <img
                          src={profileImage || "/placeholder.svg"}
                          alt="Profile"
                          className={styles.empProfilePreview}
                        />
                        <button
                          type="button"
                          className={styles.empUploadBtn}
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
                          className={styles.empUploadBtn}
                          onClick={() =>
                            document.getElementById("fileInput").click()
                          }
                        >
                          Upload
                        </button>
                      </>
                    )}
                    <input
                      {...register("picture")}
                      name="picture"
                      id="fileInput"
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleImageUpload}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.empFormRow}>
                <div className={styles.empFormGroup}>
                  <label htmlFor="dateOfBirth" className={styles.empLabel}>
                    Date of Birth *
                  </label>
                  <div className={styles.empDateInput}>
                    <input
                      {...register("dob")}
                      name="dob"
                      type="date"
                      id="dateOfBirth"
                      className={styles.empInput}
                      required
                    />
                    <span className={styles.empCalendarIcon}>
                      <i className="bi bi-calendar"></i>
                    </span>
                  </div>
                </div>
                <div className={styles.empFormGroup}>
                  <label htmlFor="gender" className={styles.empLabel}>
                    Gender *
                  </label>
                  <select
                    {...register("gender")}
                    name="gender"
                    id="gender"
                    className={styles.empSelect}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className={styles.empFormRow}>
                <div className={styles.empFormGroup}>
                  <label htmlFor="contactNumber" className={styles.empLabel}>
                    Contact Number *
                  </label>
                  <input
                    {...register("contact")}
                    name="contact"
                    type="tel"
                    id="contactNumber"
                    className={styles.empInput}
                    required
                  />
                </div>
                <div className={styles.empFormGroup}>
                  <label htmlFor="emailAddress" className={styles.empLabel}>
                    Email Address *
                  </label>
                  <input
                    {...register("email")}
                    name="email"
                    type="email"
                    id="emailAddress"
                    className={styles.empInput}
                    required
                  />
                </div>
              </div>

              <div className={styles.empFormGroup}>
                <label htmlFor="currentAddress" className={styles.empLabel}>
                  Current Address
                </label>
                <textarea
                  {...register("curr_address")}
                  name="curr_address"
                  id="currentAddress"
                  className={styles.empTextarea}
                  rows="3"
                ></textarea>
              </div>

              <div className={styles.empFormGroup}>
                <label htmlFor="permanentAddress" className={styles.empLabel}>
                  Permanent Address
                </label>
                <textarea
                  {...register("per_address")}
                  name="per_address"
                  id="permanentAddress"
                  className={styles.empTextarea}
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>
          {/* Job Information Section */}

          <div className={styles.empSectionCard}>
            <div className={styles.empSectionHeader}>
              <i className="bi bi-briefcase"></i>
              <h5 className={styles.empSectionTitle}>Job Information</h5>
            </div>

            <div className={styles.empFormRow}>
              <div className={styles.empFormGroup}>
                <label htmlFor="employeeId" className={styles.empLabel}>
                  Employee ID *
                </label>
                <input
                  {...register("emp_id")}
                  name="emp_id"
                  type="text"
                  id="employeeId"
                  className={styles.empInput}
                  required
                />
              </div>
              <div className={styles.empFormGroup}>
                <label htmlFor="department" className={styles.empLabel}>
                  Department *
                </label>
                <select
                  {...register("department")}
                  name="department"
                  id="department"
                  className={styles.empSelect}
                  required
                >
                  <option value="">Select Department</option>
                  <option value="it">IT</option>
                  <option value="hr">HR</option>
                  <option value="finance">Finance</option>
                  <option value="marketing">Marketing</option>
                  <option value="operations">Operations</option>
                </select>
              </div>
            </div>

            <div className={styles.empFormRow}>
              <div className={styles.empFormGroup}>
                <label htmlFor="designation" className={styles.empLabel}>
                  Designation *
                </label>
                <input
                  {...register("designation")}
                  name="designation"
                  type="text"
                  id="designation"
                  className={styles.empInput}
                  required
                />
              </div>
              <div className={styles.empFormGroup}>
                <label htmlFor="dateOfJoining" className={styles.empLabel}>
                  Date of Joining *
                </label>
                <div className={styles.empDateInput}>
                  <input
                    {...register("date_of_joining")}
                    name="date_of_joining"
                    type="date"
                    id="dateOfJoining"
                    className={styles.empInput}
                    required
                  />
                  <span className={styles.empCalendarIcon}>
                    <i className="bi bi-calendar"></i>
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.empFormRow}>
              <div className={styles.empFormGroup}>
                <label className={styles.empLabel}>Employment Type *</label>
                <div className={styles.empRadioGroup}>
                  <div className={styles.empRadioOption}>
                    <input
                      {...register("emp_type")}
                      type="radio"
                      name="emp_type"
                      id="fullTime"
                      value="fullTime"
                      required
                    />
                    <label htmlFor="fullTime">Full-time</label>
                  </div>
                  <div className={styles.empRadioOption}>
                    <input
                      {...register("emp_type")}
                      type="radio"
                      name="emp_type"
                      id="partTime"
                      value="partTime"
                    />
                    <label htmlFor="partTime">Part-time</label>
                  </div>
                  <div className={styles.empRadioOption}>
                    <input
                      {...register("emp_type")}
                      type="radio"
                      name="emp_type"
                      id="contract"
                      value="contract"
                    />
                    <label htmlFor="contract">Contract</label>
                  </div>
                </div>
              </div>

              <div className={styles.empFormGroup + " " + styles.empSplitGroup}>
                <div className={styles.empFormGroup + " " + styles.empHalf}>
                  <label htmlFor="workLocation" className={styles.empLabel}>
                    Work Location *
                  </label>
                  <select
                    {...register("work_location")}
                    name="work_location"
                    id="workLocation"
                    className={styles.empSelect}
                    required
                  >
                    <option value="">Select Location</option>
                    <option value="hq">Headquarters</option>
                    <option value="branch1">Branch Office 1</option>
                    <option value="branch2">Branch Office 2</option>
                    <option value="remote">Remote</option>
                  </select>
                </div>
                <div className={styles.empFormGroup + " " + styles.empHalf}>
                  <label htmlFor="shift" className={styles.empLabel}>
                    Shift *
                  </label>
                  <select
                    {...register("shift_timing")}
                    name="shift_timing"
                    id="shift"
                    className={styles.empSelect}
                    required
                  >
                    <option value="">Select Shift</option>
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="night">Night</option>
                    <option value="rotating">Rotating</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Salary & Payroll Details Section */}

          <div className={styles.empSectionCard}>
            <div className={styles.empSectionHeader}>
              <i className="bi bi-currency-dollar"></i>
              <h5 className={styles.empSectionTitle}>
                Salary & Payroll Details
              </h5>
            </div>

            <div className={styles.empFormRow}>
              <div className={styles.empFormGroup}>
                <label className={styles.empLabel} htmlFor="account">
                  CTC (Annual) *
                </label>
                <input
                  {...register("ctc")}
                  name="ctc"
                  className={styles.empInput}
                  type="text"
                  id="account"
                  required
                />
              </div>
              <div className={styles.empFormGroup}>
                <label className={styles.empLabel} htmlFor="bankName">
                  Bank no *
                </label>
                <input
                  {...register("bank_no")}
                  name="bank_no"
                  className={styles.empInput}
                  type="text"
                  id="bankName"
                  required
                />
              </div>
            </div>

            <div className={styles.empFormRow}>
              <div className={styles.empFormGroup}>
                <label className={styles.empLabel} htmlFor="accountNumber">
                  Account Number *
                </label>
                <input
                  {...register("account_no")}
                  name="account_no"
                  className={styles.empInput}
                  type="text"
                  id="accountNumber"
                  required
                />
              </div>
              <div className={styles.empFormGroup}>
                <label className={styles.empLabel} htmlFor="ifscCode">
                  IFSC Code *
                </label>
                <input
                  {...register("ifsc_no")}
                  name="ifsc_no"
                  className={styles.empInput}
                  type="text"
                  id="ifscCode"
                  required
                />
              </div>
            </div>

            <div className={styles.empFormRow}>
              <div className={styles.empFormGroup}>
                <label className={styles.empLabel} htmlFor="pfNumber">
                  PF Number
                </label>
                <input
                  {...register("pf_no")}
                  name="pf_no"
                  className={styles.empInput}
                  type="text"
                  id="pfNumber"
                />
              </div>
              <div className={styles.empFormGroup}>
                <label className={styles.empLabel} htmlFor="taxId">
                  Tax ID/PAN *
                </label>
                <input
                  {...register("pan_no")}
                  name="pan_no"
                  className={styles.empInput}
                  type="text"
                  id="taxId"
                  required
                />
              </div>
            </div>
          </div>

          <div className={styles.empFormActions}>
            <button type="button" className={styles.empCancelBtn}>
              Cancel
            </button>
            <button type="submit" className={styles.empSubmitBtn}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeDataForm;
