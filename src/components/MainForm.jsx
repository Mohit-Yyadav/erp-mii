import React from "react";
import styles from "../assets/css/MainForm.module.css"; // Import the CSS Module


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

            <div className="container mt-4 position-relative" style={{ width: "63%" }}>
              <div
                className={`${styles.dFlex} text-white justify-content-between px-2`}
                style={{ position: "absolute", width: "100%", top: "-25px" }}
              >
                <span>Personal</span>
                <span>Startup</span>
                <span>Business</span>
                <span>Facility</span>
              </div>

              <div className={styles.progressBar}>
                <div
                  id="progress-bar"
                  className={styles.progressBarFill}
                  role="progressbar"
                  style={{ width: "0%" }}
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>

          {/* Personal Details */}
          <section className={styles.formCard}>
            <div className="card-body">
              <h4 className="card-title mb-4 text-decoration-underline">
                Personal Details
              </h4>

              <div className="row">
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
                      className={`${styles.formControl} form-select`}
                      id="department"
                      required
                    >
                      <option value="" disabled hidden selected>
                        Select Department/Course
                      </option>
                      <option value="A">Subject-1</option>
                      <option value="B">Subject-2</option>
                      <option value="C">Subject-3</option>
                      <option value="D">Subject-4</option>
                      <option value="E">Subject-5</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-4">
                    <label htmlFor="studentID" className={styles.formLabel}>
                      Student ID
                    </label>
                    <input
                      type="text"
                      className={styles.formControl}
                      id="studentID"
                      placeholder="Student ID"
                      required
                    />
                  </div>

                  <div className="mb-3">
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

                  <div className="mb-3">
                    <label htmlFor="year_of_study" className={styles.formLabel}>
                      Year of Study
                    </label>
                    <input
                      type="date"
                      className={styles.formControl}
                      id="year_of_study"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Submit Button */}
          <div className="container mt-5 mb-5 text-center">
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
