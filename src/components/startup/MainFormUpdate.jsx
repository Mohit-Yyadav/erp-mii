import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import styles from "../../assets/css/startup/StartupUpdatedForm.module.css";
import { useParams } from "react-router-dom";
import axios from "../../../utils/Axios";
import Loader from "../loader/Loader";

const MainFormUpdate = () => {
  const [formData, setFormData] = useState();
    const { register, handleSubmit, reset } = useForm();
  const { id } = useParams();
  const fetchData = async () => {
    try {
      const result = await axios.get(`/api/mainform/get-edit/${id}`);
      if (result) {
         reset({
          name: result.data.data.personal_name,
          year_of_study: result.data.data.year,
          department: result.data.data.dept,
          phone_number: result.data.data.phone,
          email: result.data.data.email_id,
          startup_name: result.data.data.startup_name,
          currentStage: result.data.data.stage,
          industry_sector: result.data.data.industry,
          website_socialMedia: result.data.data.lwebsite,
          description: result.data.data.description,
          problemStatementAndSolution: result.data.data.problem_soln,
          checkboxId: result.data.data.fun_required,
          expected_investment: result.data.data.invesment,
          revenue_model: result.data.data.revenue,
          competition_analysis: result.data.data.analysis,
          office_space: result.data.data.office_space,
          mentorship: result.data.data.mentorship,
          networking: result.data.data.networking
        });
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

  const submitData = async (data) => {
    console.log(data);
    try {
      const result = await axios.put(`/api/mainform/update-data/${id}`, data);
      if (result) {
        toast.success("Data Updated Successfully");
      }
      reset(); // Reset the form after submission
    } catch (error) {
      toast.error("Error in updating form", error);
    }
  };

  const [profileImage, setProfileImage] = useState(
    "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
  );

  const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};


  return !formData ? (
    <Loader />
  ) : (
    <div className={`container my-5 ${styles.containerForm}`}>
      <h1 className={`${styles.textCenter} mb-2`}>Main Data Update Form</h1>
      <p className={`${styles.textMuted} mb-4`}>
        Please fill in all mandatory fields marked with *
      </p>

      <form className="startup-form" onSubmit={handleSubmit((data)=>submitData(data))}>
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
              {...register("name")}
                type="text"
                name="name"
                className={styles.formControl}
                placeholder="place your full n ame"
                required
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
  <label className={styles.formLabel}>Year of Study</label>
  <span>: <b>{formData.year}</b></span>
  <input
  {...register("year_of_study")}
    type="date"
    name="year"
    className={styles.formControl}
    required
    onChange={handleChange}
  />
</div>
           <div className="col-md-6">
              <label className={styles.formLabel}>Department/Course</label>
              <select
               {...register("department")}
                name="industryType"
                className={styles.formSelect}
                required
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
              {...register("phone_number")}
                type="number"
                name="phone_number"
                className={styles.formControl}
                required
              />
            </div>
            <div className="col-md-6">
              <label className={styles.formLabel}>Email Address *</label>
              <input
              {...register("email")}
                type="email"
                name="email"
                className={styles.formControl}
                required
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label className={styles.formLabel}>Startup Name</label>
              <input
              {...register("startup_name")}
                type="text"
                name="startup_name"
                className={styles.formControl}
                required
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label className={styles.formLabel}>Current Stage</label>
              <input
               {...register("currentStage")}
                type="text"
                name="currentStage"
                className={styles.formControl}
                required
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label className={styles.formLabel}>Industry Sector</label>
              <input
              {...register("industry_sector")}
                type="text"
                name="industry_sector"
                className={styles.formControl}
                required
                onChange={handleChange}
              />
            </div>
            <div className="col-md-12">
              <label className={styles.formLabel}>Website/Social Media</label>
              <input
              {...register("website_socialMedia")}
                type="url"
                name="website_socialMedia"
                className={styles.formControl}
                required
                onChange={handleChange}
              />
            </div>

            <div className="col-12">
              <label className={styles.formLabel}>Brief Description</label>
              <textarea
              {...register("description")}
                name="description"
                className={styles.formControl}
                rows="3"
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-md-12">
              <label className={styles.formLabel}>
                Problem Statement And Solution
              </label>
              <input
              {...register("problemStatementAndSolution")}
                type="text"
                name="problemStatementAndSolution"
                className={styles.formControl}
                required
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
               {...register("checkboxId")}
                type="checkbox"
                name="founderId"
                className={styles.formControl}
                required
                checked={formData.fun_required == "1"}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label className={styles.formLabel}>Expected Investment</label>
              <input
              {...register("expected_investment")}
                type="text"
                name="expected_investment"
                className={styles.formControl}
                required
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label className={styles.formLabel}>Revenue Model</label>
              <input
               {...register("revenue_model")}
                type="text"
                name="revenue_model"
                className={styles.revenue}
                required
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label className={styles.formLabel}>Competition Anaylysis</label>
              <input
              {...register("competition_analysis")}
                type="text"
                name="competition_analysis"
                className={styles.formControl}
                required
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label className={styles.formLabel}>Office Space</label>
              <select
              {...register("office_space", { required: true })}
                name="office_space"
                className={styles.formSelect}
                required
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
                 {...register("mentorship", { required: true })}
                  type="radio"
                  id="mentorshipYes"
                  name="mentorshipRequired"
                  value="yes"
                  className={`form-check-input ${styles.mentorship}`}
                />
                <label htmlFor="mentorshipYes" className="form-check-label">
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input
                {...register("mentorship", { required: true })}
                  type="radio"
                  id="mentorshipNo"
                  name="mentorshipRequired"
                  value="no"
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
                {...register("networking", { required: true })}
                  type="radio"
                  id="NetworkingYes"
                  name="NetworkingRequired"
                  value="yes"
                  className={`form-check-input ${styles.mentorship}`}
                />
                <label htmlFor="NetworkingYes" className="form-check-label">
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input
                {...register("networking", { required: true })}
                  type="radio"
                  id="NetworkingNo"
                  name="NetworkingRequired"
                  value="no"
                  className={`form-check-input ${styles.mentorship}`}
                />
                <label htmlFor="NetworkingNo" className="form-check-label">
                  No
                </label>
              </div>
            </div>

            
          </div>
        </div>
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
