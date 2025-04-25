import React, { useState, useEffect } from "react";
import styles from "../assets/css/MainForm.module.css";
import { useForm } from "react-hook-form";
import axios from "../../utils/Axios";
import { toast } from "react-toastify";

const MainForm = () => {
  const [progress, setProgress] = useState(0);
  const { register, handleSubmit, reset, watch } = useForm();
  const formData = watch();

  const [selectedOfficeSpace, setSelectedOfficeSpace] = useState("");
  const [selectedMentorship, setSelectedMentorship] = useState("");
  const [selectedNetworking, setSelectedNetworking] = useState("");

  const submitData = async (data) => {
    try {
      const result = await axios.post("/api/mainform/insert-data", data);
      if (result) {
        toast.success("Data Inserted Successfully");
      }
      reset(); // Reset the form after submission
    } catch (error) {
      toast.error("Error in Submitting form", error);
    }
  };

  const updateProgress = (data) => {
    let completedSections = 0;

    // Personal Details
    if (data.name && data.email && data.studentID && data.phone_number) {
      completedSections++;
    }

    // Startup Details
    if (
      data.startup_name &&
      data.industry_sector &&
      data.description &&
      data.problemStatementAndSolution &&
      data.currentStage &&
      data.website_socialMedia
    ) {
      completedSections++;
    }

    // Business Details
    if (
      data.revenue_model &&
      data.expected_investment &&
      data.competition_analysis
    ) {
      completedSections++;
    }

    // Facilities Required
    if (data.office_space && data.mentorship && data.networking) {
      completedSections++;
    }

    setProgress(completedSections * 25);
  };

  useEffect(() => {
    updateProgress(formData);
  }, [formData]);

  const handleOfficeSpaceChange = (event) => {
    setSelectedOfficeSpace(event.target.id);
  };

  const handleMentorshipChange = (event) => {
    setSelectedMentorship(event.target.id);
  };

  const handleNetworkingChange = (event) => {
    setSelectedNetworking(event.target.id);
  };

  return (
    <>
      <div className={styles.bgBlackTheme}>
        <div className={`${styles.formFixedHeader} container-fluid`}>
          <div className="container mt-3">
            <div id="header-text" className={styles.headerText}>
              <h2 className="text-decoration-underline mb-3 text-center text-white">
                Startup Registration Form
              </h2>
            </div>

            <div className="progress mb-4">
              <div
                className="progress-bar rgba(55, 65, 81, 1)"
                role="progressbar"
                style={{ width: `${progress}%` }}
                aria-valuenow={progress}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {progress}%
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="container mt-5 pt-5">
          <form
            action=""
            onSubmit={handleSubmit((data) => submitData(data))}
            className={styles.formBody}
          >
            <div className="container mt-5">
              {/* Personal Details */}
              <section className={styles.formCard}>
                <div className="card-body">
                  <h4 className="card-title mb-4 text-decoration-underline text-white">
                    Personal Details
                  </h4>

                  <div className="row">
                    {/* Left column */}
                    <div className="col-md-6">
                      <div className="mb-4">
                        <label
                          htmlFor="name"
                          className={`${styles.formLabel} text-white`}
                        >
                          Full Name
                        </label>
                        <input
                          {...register("name")}
                          type="text"
                          className={styles.formControl}
                          id="name"
                          name="name"
                          placeholder="Full Name"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label
                          htmlFor="email"
                          className={`${styles.formLabel} text-white`}
                        >
                          Email ID
                        </label>
                        <input
                          {...register("email")}
                          name="email"
                          type="email"
                          className={styles.formControl}
                          id="email"
                          placeholder="Email"
                          required
                        ></input>
                      </div>

                      <div className="mb-3">
                        <label
                          htmlFor="department"
                          className={`${styles.formLabel} text-white`}
                        >
                          Department/Course
                        </label>
                        <select
                          {...register("department")}
                          name="department"
                          className={`${styles.formControl} text-white`}
                          id="department"
                          required
                        >
                          <option value="" disabled hidden>
                            Select Department / Course
                          </option>
                          <option value="A">Subject-1</option>
                          <option value="B">Subject-2</option>
                          <option value="C">Subject-3</option>
                          <option value="D">Subject-4</option>
                          <option value="E">Subject-5</option>
                        </select>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-md-6">
                      <div className="mb-4">
                        <label
                          htmlFor="StudentId"
                          className={`${styles.formLabel} text-white`}
                        >
                          Student ID
                        </label>
                        <input
                          {...register("studentID")}
                          type="text"
                          name="studentID"
                          className={styles.formControl}
                          id="StudentID"
                          placeholder="Student ID"
                          required
                        ></input>
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="year_of_study"
                          className={`${styles.formLabel} text-white`}
                        >
                          Year Of Study
                        </label>
                        <input
                          {...register("year_of_study")}
                          name="year_of_study"
                          type="date"
                          className={styles.formControl}
                          id="year_of_study"
                          placeholder="Year of Study"
                          required
                        ></input>
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="phone_number"
                          className={`${styles.formLabel} text-white`}
                        >
                          Phone Number
                        </label>
                        <input
                          {...register("phone_number")}
                          name="phone_number"
                          type="tel"
                          className={styles.formControl}
                          id="phone_number"
                          placeholder="Phone Number"
                          required
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Startup Details */}
              <section className={`${styles.formCard} mt-5`}>
                <div className="card-body">
                  <h4 className="card-title mb-4 text-decoration-underline text-white">
                    Startup Details
                  </h4>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="startup_name"
                          className={`${styles.formLabel} text-white`}
                        >
                          Startup Name
                        </label>
                        <input
                          {...register("startup_name")}
                          name="startup_name"
                          type="text"
                          className={styles.formControl}
                          id="startup_name"
                          placeholder="Enter Startup Name"
                          required
                        ></input>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="industry_sector"
                          className={`${styles.formLabel} text-white`}
                        >
                          Industry Sector
                        </label>
                        <input
                          {...register("industry_sector")}
                          type="text"
                          className={styles.formControl}
                          id="industry_sector"
                          placeholder="Enter Industry Sector"
                          required
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="mb-2">
                    <label
                      htmlFor="description"
                      className={`${styles.formLabel} text-white`}
                    >
                      Brief Description
                    </label>
                    <input
                      {...register("description")}
                      name="description"
                      className={styles.formControl}
                      id="description"
                      required
                      rows="3"
                    ></input>
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="problemStatementAndSolution"
                      className={`${styles.formLabel} text-white`}
                    >
                      Problem Statement And Solution
                    </label>
                    <input
                      {...register("problemStatementAndSolution")}
                      name="problemStatementAndSolution"
                      className={styles.formControl}
                      id="problemStatementAndSolution"
                      required
                      rows="3"
                    ></input>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="current_stage"
                          className={`${styles.formLabel} text-white`}
                        >
                          Current Stage
                        </label>
                        <input
                          {...register("currentStage")}
                          name="currentStage"
                          className={styles.formControl}
                          id="currentStage"
                          placeholder="Idea, Prototype, MVP, Revenue Generate"
                          required
                        ></input>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="website/socialMedia"
                          className={`${styles.formLabel} text-white`}
                        >
                          Website/Social Media
                        </label>
                        <input
                          {...register("website_socialMedia")}
                          name="website_socialMedia"
                          type="url"
                          className={styles.formControl}
                          id="website_socialMedia"
                          required
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Business Details */}
              <section className={`${styles.formCard} shadow-lg mt-5`}>
                <div className="card-body">
                  <h4 className="card-title mb-4 text-decoration-underline text-white">
                    Business Details
                  </h4>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="checkboxId"
                          className={`${styles.formLabel} text-white`}
                        >
                          Functioning Required 
                        </label>
                        <input
                          {...register("checkboxId")}
                          name="checkboxId"
                          type="checkbox"
                          className={styles.formcheckinput}
                          id="checkboxId"
                          placeholder="Enter Functioing Required"
                          required
                        ></input>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="expected_investment"
                          className={`${styles.formLabel} text-white`}
                        >
                          Expected Investment
                        </label>
                        <input
                          {...register("expected_investment")}
                          name="expected_investment"
                          className={styles.formControl}
                          id="expected_investment"
                          rows="3"
                          placeholder="Describe Revenue Model"
                          required
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="mb-2">
                    <label
                      htmlFor="revenue_model"
                      className={`${styles.formLabel} text-white`}
                    >
                      Revenue Model
                    </label>
                    <input
                      {...register("revenue_model")}
                      name="revenue_model"
                      className={styles.formControl}
                      id="revenue_model"
                      rows="3"
                    ></input>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="competition_analysis"
                          className={`${styles.formLabel} text-white`}
                        >
                          Competition Anaylysis
                        </label>
                        <input
                          {...register("competition_analysis")}
                          name="competition_analysis"
                          className={styles.formControl}
                          id="competition_analysis"
                          placeholder="Existing Competitor,Market Size etc...."
                          required
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Facility Required */}
              <section className={`${styles.formCard} shadow-lg mt-5`}>
                <div className="card-body">
                  <h4 className="card-title mb-4 text-decoration-underline text-white">
                    Facility Required
                  </h4>

                  <div className="d-flex align-items-center flex-wrap gap-4">
                    {/* Office Space */}
                    <div className="mb-3 mt-4 ms-5 me-5">
                      <label
                        htmlFor="office_space"
                        className={`${styles.formLabel} text-white`}
                      >
                        Office Space
                      </label>
                      <select
                        {...register("office_space", { required: true })}
                        name="office_space"
                        className={`${styles.formControl} form-select bg-dark text-white`}
                        id="office_space"
                      >
                        <option value="" disabled hidden>
                          Select office_space
                        </option>
                        <option value="A">Cabin</option>
                        <option value="B">Bench</option>
                        <option value="C">None</option>
                      </select>
                    </div>

                    {/* Mentorship Required */}
                    <div className="d-flex flex-column mt-3 ms-5 me-5">
                      <label className="form-label fw-bold text-white">
                        Mentorship Required
                      </label>
                      <div className="d-flex gap-3">
                        <div className="form-check">
                          <input
                            {...register("mentorship", { required: true })}
                            type="radio"
                            className="form-check-input"
                            id="mentorship_yes"
                            value="yes"
                            onChange={(e) => {
                              setSelectedMentorship(e.target.value);
                            }}
                          />
                          <label
                            className="form-check-label text-white"
                            htmlFor="mentorship_yes"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            {...register("mentorship", { required: true })}
                            type="radio"
                            className="form-check-input"
                            id="mentorship_no"
                            value="no"
                            onChange={(e) => {
                              setSelectedMentorship(e.target.value);
                            }}
                          />
                          <label
                            className="form-check-label text-white"
                            htmlFor="mentorship_no"
                          >
                            No
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Networking Support */}
                    <div className="d-flex flex-column ms-5 mt-3">
                      <label className="form-label fw-bold text-white">
                        Networking Support
                      </label>
                      <div className="d-flex gap-3">
                        <div className="form-check">
                          <input
                            {...register("networking", { required: true })}
                            type="radio"
                            className="form-check-input"
                            id="networking_yes"
                            value="yes"
                            onChange={(e) => {
                              setSelectedNetworking(e.target.value);
                            }}
                          />
                          <label
                            className="form-check-label text-white"
                            htmlFor="networking_yes"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            {...register("networking", { required: true })}
                            type="radio"
                            className="form-check-input"
                            id="networking_no"
                            value="no"
                            onChange={(e) => {
                              setSelectedNetworking(e.target.value);
                            }}
                          />
                          <label
                            className="form-check-label text-white"
                            htmlFor="networking_no"
                          >
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Submit Button */}
              <div className="container mt-5 text-center">
                <button type="submit" className={styles.formSubmitButton}>
                  Submit Application
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MainForm;
