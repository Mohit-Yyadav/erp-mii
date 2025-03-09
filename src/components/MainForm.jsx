import React, { useState } from "react";
import styles from "../assets/css/MainForm.module.css";




const MainForm = () => {
  const [progress, setProgress] = useState(0);


  const updateProgress = () => {
    let completedSections = 0;
  
    // Personal Details
    const fullName = document.getElementById("name")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const studentId = document.getElementById("StudentId")?.value.trim();
    const phone = document.getElementById("phone_number")?.value.trim();
  
    if (fullName && email && studentId && phone) {
      completedSections++;
    }
  
    // Startup Details
    const startupName = document.getElementById("startup_name")?.value.trim();
    const industrySector = document.getElementById("industry_sector")?.value.trim();
    const description = document.getElementById("description")?.value.trim();
    const problemStatement = document.getElementById("problemStatementAndSolution")?.value.trim();
    const currentStage = document.getElementById("current_stage")?.value.trim();
    const website = document.getElementById("website_socialMedia")?.value.trim(); 
  
    if (startupName && industrySector && description && problemStatement && currentStage && website) {
      completedSections++;
    }
  
    // Business Details
    const revenueModel = document.getElementById("revenue_model")?.value.trim();
    const expectedInvestment = document.getElementById("expected_investment")?.value.trim();
    const competitionAnalysis = document.getElementById("competition_analysis")?.value.trim();
  
    if (revenueModel && expectedInvestment && competitionAnalysis) {
      completedSections++;
    }
  
    // Facilities Required
    const officeSpace = document.querySelector("input[name='office_space']:checked");
    const mentorship = document.querySelector("input[name='mentorship']:checked");
    const networking = document.querySelector("input[name='networking']:checked");
  
    if (officeSpace && mentorship && networking) {
      completedSections++;
    }
  
    setProgress(completedSections * 25);
  };
  
  

  const [selectedOfficeSpace, setSelectedOfficeSpace] = useState("");
  const [selectedMentorship, setSelectedMentorship] = useState("");
  const [selectedNetworking, setSelectedNetworking] = useState("");


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
      <div className="container mt-5">
        <form className={styles.formBody}>
          <div className="container mt-5">
            <div id="header-text" className={styles.headerText}>
              <h2 className="text-decoration-underline mb-5 text-center">
                Startup Registration Form
              </h2>
            </div>


            <div className="progress mb-4">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: `${progress}%` }}
                aria-valuenow={progress}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {progress}%
              </div>
            </div>


            {/* Personal Details */}
            <section className={styles.formCard}>
              <div className="card-body">
                <h4 className="card-title mb-4 text-decoration-underline">
                  Personal Details
                </h4>


                <div className="row">
                  {/* Left column */}


                  <div className="col-md-6">
                    <div className="mb-4">
                      <label htmlFor="name" className={styles.formLabel}>
                        Full Name
                      </label>
                      <input
                        type="text"
                        className={styles.formControl}
                        id="name"
                        placeholder="Full Name"
                        onChange={updateProgress}
                        required
                      />
                    </div>


                    <div className="mb-3">
                      <label htmlFor="email" className={styles.formLabel}>
                        Email ID
                      </label>
                      <input
                        type="email"
                        className={styles.formControl}
                        id="email"
                        placeholder="Email"
                        onChange={updateProgress}
                        required
                      />
                    </div>


                    <div className="mb-3">
                      <label htmlFor="department" className={styles.formLabel}>
                        Department/Course
                      </label>
                      <select
                        className={styles.formControl}
                        id="department"
                        onChange={updateProgress}
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
                      <label htmlFor="StudentId" className={styles.formLabel}>
                        Student ID
                      </label>
                      <input
                        type="text"
                        className={styles.formControl}
                        id="StudentId"
                        placeholder="Student ID"
                        onChange={updateProgress}
                        required
                      />
                    </div>


                    <div className="mb-4">
                      <label
                        htmlFor="year_of_study"
                        className={styles.formLabel}
                      >
                        Year Of Study
                      </label>
                      <input
                        type="date"
                        className={styles.formControl}
                        id="year_of_study"
                        placeholder="Year of Study"
                        onChange={updateProgress}
                        required
                      />
                    </div>


                    <div className="mb-4">
                      <label
                        htmlFor="phone_number"
                        className={styles.formLabel}
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className={styles.formControl}
                        id="phone_number"
                        placeholder="Phone Number"
                        onChange={updateProgress}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>


            {/* Startup Details */}


            <section className={`${styles.formCard} mt-5`}>
              <div className="card-body">
                <h4 className="card-title mb-4 text-decoration-underline">
                  Startup Details
                </h4>


                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label
                        htmlFor="startup_name"
                        className={styles.formLabel}
                      >
                        Startup Name
                      </label>
                      <input
                        type="text"
                        className={styles.formControl}
                        id="startup_name"
                        placeholder="Enter Startup Name"
                        onChange={updateProgress}
                        required
                      />
                    </div>
                  </div>


                  <div className="col-md-6">
                    <div className="mb-3">
                      <label
                        htmlFor="industry_sector"
                        className={styles.formLabel}
                      >
                        Industry Sector
                      </label>
                      <input
                        type="text"
                        className={styles.formControl}
                        id="industry_sector"
                        placeholder="Enter Industry Sector"
                        onChange={updateProgress}
                        required
                      />
                    </div>
                  </div>
                </div>


                <div className="mb-2">
                  <label htmlFor="description" className={styles.formLabel}>
                    Brief Description
                  </label>
                  <textarea
                    className={styles.formControl}
                    id="description"
                    onChange={updateProgress}
                    required
                    rows="3"
                  ></textarea>
                </div>


                <div className="mb-3">
                  <label
                    htmlFor="problemStatementAndSolution"
                    className={styles.formLabel}
                  >
                    Problem Statement And Solution
                  </label>
                  <textarea
                    className={styles.formControl}
                    id="problemStatementAndSolution"
                    onChange={updateProgress}
                    required
                    rows="3"
                  ></textarea>
                </div>


                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label
                        htmlFor="current_stage"
                        className={styles.formLabel}
                      >
                        Current Stage
                      </label>
                      <textarea
                        className={styles.formControl}
                        id="currentStage"
                        placeholder="Idea, Prototype, MVP, Revenue Generate"
                        onChange={updateProgress}
                        required
                      ></textarea>
                    </div>
                  </div>


                  <div className="col-md-6">
                    <div className="mb-3">
                      <label
                        htmlFor="website/socialMedia"
                        className={styles.formLabel}
                      >
                        Website/Social Media
                      </label>
                      <textarea
                        type="url"
                        className={styles.formControl}
                        id="website_socialMedia"
                        onChange={updateProgress}
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </section>


            {/* Business Details */}
            <section className="card shadow-lg mt-5">
              <div className="card-body">
                <h4 className="card-title mb-4 text-decoration-underline">
                  Business Details
                </h4>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="checkboxId" className={styles.formLabel}>
                        Functioing Required
                      </label>
                      <input
                        type="checkbox"
                        className={styles.formcheckinput}
                        id="checkboxId"
                        placeholder="Enter Functioing Required"
                        onChange={updateProgress}
                        required
                      />
                    </div>
                  </div>


                  <div className="col-md-6">
                    <div className="mb-3">
                      <label
                        htmlFor="expected_investment"
                        className={styles.formLabel}
                      >
                        Expected Investment
                      </label>
                      <textarea
                        className={styles.formControl}
                        id="industry_sector"
                        rows="3"
                        placeholder="Describe Revenue Model"
                        onChange={updateProgress}
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>


                <div className="mb-2">
                  <label htmlFor="revenue_model" className={styles.formLabel}>
                    Revenue Model
                  </label>
                  <textarea
                    className={styles.formControl}
                    id="revenue_model"
                    onChange={updateProgress}
                    rows="3"
                  ></textarea>
                </div>


                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label
                        htmlFor="competition_analysis"
                        className={styles.formLabel}
                      >
                        Competition Anaylysis
                      </label>
                      <textarea
                        className={styles.formControl}
                        id="competition_analysis"
                        placeholder="Existing Competitor,Market Size etc...."
                        onChange={updateProgress}
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </section>


            {/* Facility Required */}
            <section className="card shadow-lg mt-5">
              <div className="card-body">
                <h4 className="card-title mb-4 text-decoration-underline">
                  Facility Required
                </h4>


                <div className="row">
                  {/* Office Space Section */}


                  <div className="col-md-4">
                    <label className="form-label fw-bold">Office Space</label>


                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="cabin"
                        checked={selectedOfficeSpace === "cabin"}
                        onChange={(e) => {
                          handleOfficeSpaceChange(e);
                          updateProgress();
                        }}
                      />
                      <label className="form-check-label" htmlFor="cabin">
                        Cabin
                      </label>
                    </div>


                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="bench"
                        checked={selectedOfficeSpace === "bench"}
                        onChange={(e) => {
                          handleOfficeSpaceChange(e);
                          updateProgress();
                        }}
                      />
                      <label className="form-check-label" htmlFor="bench">
                        Bench
                      </label>
                    </div>
                  </div>


                  {/* Mentorship Required Section */}
                  <div className="col-md-4">
                    <label className="form-label fw-bold">
                      Mentorship Required
                    </label>


                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="yes_mentorship"
                        checked={selectedMentorship === "yes_mentorship"}
                        onChange={(e) => {
                          handleMentorshipChange(e);
                          updateProgress();
                        }}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="yes_mentorship"
                      >
                        Yes
                      </label>
                    </div>


                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="no_mentorship"
                        checked={selectedMentorship === "no_mentorship"}
                        onChange={(e) => {
                          handleMentorshipChange(e);
                          updateProgress();
                        }}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="no_mentorship"
                      >
                        No
                      </label>
                    </div>
                  </div>


                  {/* Networking Support Section */}
                  <div className="col-md-4">
                    <label className="form-label fw-bold">
                      Networking Support
                    </label>


                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="yes_networking"
                        checked={selectedNetworking === "yes_networking"}
                        onChange={(e) => {
                          handleNetworkingChange(e);
                          updateProgress();
                        }}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="yes_networking"
                      >
                        Yes
                      </label>
                    </div>


                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="no_networking"
                        checked={selectedNetworking === "no_networking"}
                        onChange={(e) => {
                          handleNetworkingChange(e);
                          updateProgress();
                        }}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="no_networking"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </section>


            {/* Submit Button */}
            <div className="container mt-5 text-center">
              <button
                type="submit"
                className={styles.btnPrimary}
              >
                Submit Application
              </button>
            </div>


          </div>
        </form>
      </div>
    </>
  );
};


export default MainForm;
