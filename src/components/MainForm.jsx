import React from "react";
import styles from "../assets/css/MainForm.module.css";

const MainForm = () => {
  const updateProgress = () => {
    console.log("Progress updated!");
  };

  return (
    <>
      <form className={styles.formBody}>
        <div className="container mt-5">
          <div id="header-text" className={styles.headerText}>
            <h2 className="text-decoration-underline mb-5">
              Startup Registration Form
            </h2>
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
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="year_of_study" className={styles.formLabel}>
                      Year Of Study
                    </label>
                    <input
                      type="date"
                      className={styles.formControl}
                      id="year_of_study"
                      placeholder="Year of Study"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="phone_number" className={styles.formLabel}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className={styles.formControl}
                      id="phone_number"
                      placeholder="Phone Number"
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
                    <label htmlFor="startup_name" className="form-label">
                      Startup Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="startup_name"
                      placeholder="Enter Startup Name"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="industry_sector" className="form-label">
                      Industry Sector
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="industry_sector"
                      placeholder="Enter Industry Sector"
                      required
                    />
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
                    <label htmlFor="expected_investment" className="form-label">
                      Expected Investment
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="expected_investment"
                      placeholder="Enter Expected Investment"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="revenue_model" className="form-label">
                      Revenue Model
                    </label>
                    <textarea
                      className="form-control"
                      id="revenue_model"
                      rows="3"
                      placeholder="Describe Revenue Model"
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
                <div className="col-md-4">
                  <label className="form-label fw-bold">Office Space</label>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="cabin"
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
                    />
                    <label className="form-check-label" htmlFor="bench">
                      Bench
                    </label>
                  </div>
                </div>
                <div className="col-md-4">
                  <label className="form-label fw-bold">
                    Mentorship Required
                  </label>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="yes_mentorship"
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
                    />
                    <label className="form-check-label" htmlFor="no_mentorship">
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
              onClick={updateProgress}
            >
              Submit Application
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default MainForm;
