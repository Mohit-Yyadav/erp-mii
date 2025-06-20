import { useState } from "react";
import styles from "../../assets/css/investor/InvestorForm.module.css";
import { useForm } from "react-hook-form";
import axios from "../../../utils/Axios";
import { toast } from "react-toastify";


function InvestorProfileForm() {
  const [profileImage, setProfileImage] = useState(null);
  const { register, handleSubmit, reset} = useForm();

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

    const formData = new FormData();
  
    // Append all form fields to FormData
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
  
    // Append the profile image if uploaded
    if (profileImage) {
      formData.append("photo", profileImage);
    }

      // ✅ Log FormData before sending the request

  

    try {
      const result = await axios.post("/api/investorform/insert-data", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
     if(result){
      reset();
      toast.success(result.data.message);
     }
    } catch (error) {
      console.error("Error Details:", error.response || error.message);
      toast.error("Error in Submitting form");
    }
  };
  

  return (
    <div className={styles.investorBody}>
    <div className={styles.investorContainer}>
      <h2 className={styles.investorFormTitle}>Investor Profile Form</h2>
      <p className={styles.investorFormSubtitle}>
        Please fill in all mandatory fields marked with *
      </p>

       <form
            action=""
            onSubmit={handleSubmit((data) => submitData(data))}
            >
        {/* Personal Information Section */}

        <div className={styles.investorSectionCard}>
          <div className={styles.investorSectionHeader}>
            <i className="bi bi-person"></i>
            <h5>Personal Information</h5>
          </div>

          <div className={styles.investorFormRow}>
            <div className={styles.investorFormGroup}>
              <label className={styles.investorLabel} htmlFor="fullName">
                Full Name *
              </label>
              <input {...register('name')}
              name="name"
                className={styles.investorInput}
                type="text"
                id="fullName"
                required
              />
            </div>

            <div className={styles.investorFormGroup}>
              <label className={styles.investorLabel} htmlFor="profilePicture">
                Profile Picture
              </label>
              <div className={styles.investorUploadContainer}>
                {profileImage && (
                  <>
                    <img
                      src={profileImage || "/placeholder.svg"}
                      alt="Profile"
                      className={styles.investorProfilePreview}
                    />
                    <button
                      type="button"
                      className={styles.investorSubmitBtn}
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
                      className={styles.investorSubmitBtn}
                      onClick={() =>
                        document.getElementById("fileInput").click()
                      }
                    >
                      Upload
                    </button>
                  </>
                )}
                <input {...register('profile')}
                name="profile"
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageUpload}
                />
              </div>
            </div>
          </div>

          <div className={styles.investorFormRow}>
            <div className={styles.investorFormGroup}>
              <label className={styles.investorLabel} htmlFor="dateOfBirth">
                Date of Birth *
              </label>
              <input  {...register('date_of_birth')}
              name="date_of_birth"
                className={styles.investorInput}
                type="date"
                id="dateOfBirth"
                required
              />
            </div>

            <div className={styles.investorFormGroup}>
              <label className={styles.investorLabel} htmlFor="gender">
                Gender *
              </label>
              <select  {...register('gender')}  name="gender"  className={styles.investorSelect} id="gender" required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className={styles.investorFormRow}>
            <div className={styles.investorFormGroup}>
              <label className={styles.investorLabel} htmlFor="contactNumber">
                Contact Number *
              </label>
              <input  {...register('contact_number')}
              name="contact_number"
                className={styles.investorInput}
                type="tel"
                id="contactNumber"
                required
              />
            </div>

            <div className={styles.investorFormGroup}>
              <label className={styles.investorLabel} htmlFor="emailAddress">
                Email Address *
              </label>
              <input  {...register('email')}
              name="email"
                className={styles.investorInput}
                type="email"
                id="emailAddress"
                required
              />
            </div>
          </div>

          <div className={styles.investorFormGroup}>
            <label className={styles.investorLabel} htmlFor="linkedInProfile">
              LinkedIn Profile *
            </label>
            <textarea  {...register('linked_in_profile')}
            name="linked_in_profile"
              className={styles.investorTextarea}
              id="linkedInProfile"
              rows="2"
            ></textarea>
          </div>

          <div className={styles.investorFormGroup}>
            <label className={styles.investorLabel} htmlFor="permanentAddress">
              Permanent Address
            </label>
            <textarea  {...register('permanent_add')}
            name="permanent_add"
              className={styles.investorTextarea}
              id="permanentAddress"
              rows="4"
            ></textarea>
          </div>
        </div>

        {/* Job Information Section */}

        <div className={styles.investorSectionCard}>
          <div className={styles.investorSectionHeader}>
            <i className="bi bi-briefcase"></i>
            <h5>Professional Information</h5>
          </div>

          <div className={styles.investorFormRow}>
            <div className={styles.investorFormGroup}>
              <label className={styles.investorLabel} htmlFor="industryType">
                Industry Type *
              </label>
              <select  {...register('industry_type')}
              name="industry_type"
                className={styles.investorSelect}
                id="industryType"
                required
              >
                <option value="">Select Type</option>
                <option value="Type 1">Type-1</option>
                <option value="Type 2">Type-2</option>
                <option value="Type 3">Type-3</option>
                <option value="Type 4">Type-4</option>
                <option value="Type 5">Type-5</option>
                <option value="Type 6">Type-6</option>
              </select>
            </div>

            <div className={styles.investorFormGroup}>
              <label className={styles.investorLabel} htmlFor="companyName">
                Company Name *
              </label>
              <input  {...register('company_name')}
              name="company_name"
                className={styles.investorInput}
                type="text"
                id="companyName"
                required
              />
            </div>
          </div>

          <div className={styles.investorFormRow}>
            <div className={styles.investorFormGroup}>
              <label className={styles.investorLabel} htmlFor="companyWebsite">
                Company Website *
              </label>
              <input  {...register('company_web')}
              name="company_web"
                className={styles.investorInput}
                type="text"
                id="companyWebsite"
                required
              />
            </div>

            <div className={styles.investorFormGroup}>
              <label className={styles.investorLabel} htmlFor="dateOfJoining">
                Company Establishment Date *
              </label>
              <input  {...register('establishment_date')}
              name="establishment_date"
                className={styles.investorInput}
                type="date"
                id="dateOfJoining"
                required
              />
            </div>
          </div>

          <div className={styles.investorFormRow}>
            <div className={styles.investorFormGroup}>
              <label
                className={styles.investorLabel}
                htmlFor="yearOfInvestmentExperience"
              >
                Year Of Investment Experience *
              </label>
              <input {...register('year_of_experience')}
              name="year_of_experience"
                className={styles.investorInput}
                type="text"
                id="yearOfInvestmentExperience"
                required
              />
            </div>

            <div className={styles.investorFormGroup}>
              <label
                className={styles.investorLabel}
                htmlFor="noOfStartupInvested"
              >
                No. of Startups Invested
              </label>
              <input  {...register('no_of_startup')}
              name="no_of_startup"
                className={styles.investorInput}
                type="text"
                id="noOfStartupInvested"
                required
              />
            </div>
          </div>
        </div>

        {/* Investment Preference */}

        <div className={styles.investorSectionCard}>
          <div className={styles.investorSectionHeader}>
            <i className="bi bi-currency-dollar"></i>
            <h5>Investment Preferences</h5>
          </div>

          <div className={styles.investorFormGroup}>
            <label
              className={styles.investorLabel}
              htmlFor="preferredInvestment"
            >
              Preferred Investment Sector
            </label>
            <select  {...register('investment_sector')}
            name="investment_sector"
              className={styles.investorSelect}
              id="preferredInvestment"
              required
            >
              <option value="">Select Sector</option>
              <option value="Sector1">Sector-1</option>
              <option value="Sector2">Sector-2</option>
              <option value="Sector3">Sector-3</option>
              <option value="Sector4">Sector-4</option>
            </select>
          </div>

          <div className={styles.investorFormRow}>
            <div className={styles.investorFormGroup}>
              <label className={styles.investorLabel} htmlFor="investmentStage">
                Investment Stage *
              </label>
              <input  {...register('investment_stage')}
              name="investment_stage"
                className={styles.investorInput}
                type="text"
                id="investmentStage"
                required
              />
            </div>

            <div className={styles.investorFormGroup}>
              <label className={styles.investorLabel} htmlFor="investmentRange">
                Investment Range *
              </label>
              <input {...register('investment_range')}
              name="investment_range"
                className={styles.investorInput}
                type="text"
                id="investmentRange"
                required
              />
            </div>
          </div>
        </div>

        <div className={styles.investorFormActions}>
          <button type="button" className={styles.investorCancelBtn}>
            Cancel
          </button>
          <button type="submit" className={styles.investorSubmitBtn}>
            Submit Form
          </button>
        </div>

      </form>
    </div>
    </div>
  );
}

export default InvestorProfileForm;
