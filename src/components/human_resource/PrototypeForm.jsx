import { useState } from "react";
import styles from '../../assets/css/human_resource/PrototypeForm.module.css'

function PrototypeForm() {
  const [profileImage, setProfileImage] = useState(null);

  return (
    <div className={styles.prototypeBody}>
      <div className={styles.prototypeContainer}>
        <h2 className={styles.prototypeFormTitle}>Prototype-Development Request Form</h2>
        <p className={styles.prototypeFormSubtitle}>
          Please fill in all mandatory fields marked with *
        </p>

        <form>
          {/* Basic Project Details */}

          <div className={styles.prototypeSectionCard}>
            <div className={styles.prototypeSectionHeader}>
              <i className="bi bi-person"></i>
              <h5 className="fw-bold">Basic Project Details</h5>
            </div>

            <div className={styles.prototypeFormRow}>
              <div className={styles.prototypeFormGroup}>
                <label htmlFor="projectName">Project Name *</label>
                <input
                  type="text"
                  id="projectName"
                  required
                  className={styles.prototypeInput}
                />
              </div>

              <div className={styles.prototypeFormGroup}>
                <label htmlFor="projectObjective">Project Objective *</label>
                <input
                  type="text"
                  id="projectObjective"
                  required
                  className={styles.prototypeInput}
                />
              </div>
            </div>

            <div className={styles.prototypeFormGroup}>
              <label htmlFor="keyFeatures">Key Features *</label>
              <textarea
                id="keyFeatures"
                className={styles.prototypeTextarea}
              ></textarea>
            </div>

            <div className={styles.prototypeFormGroup}>
              <label htmlFor="intendedUseCase">Intended Use Case</label>
              <textarea
                id="intendedUseCase"
                rows="6"
                className={styles.prototypeTextarea}
              ></textarea>
            </div>
          </div>

          {/* Technical Specification */}

          <div className={styles.prototypeSectionCard}>
            <div className={styles.prototypeSectionHeader}>
              <i className="bi bi-briefcase"></i>
              <h5 className="fw-bold">Technincal Specification</h5>
            </div>

            <div className={styles.prototypeFormGroup}>
              <label htmlFor="materialTechnology">Material/Technology</label>
              <select
                id="industryField"
                required
                className={styles.prototypeInput}
              >
                <option value="">Select</option>
                <option value="skill1">Select-1</option>
                <option value="skill2">Select-2</option>
                <option value="skill3">Select-3</option>
                <option value="skill4">Select-4</option>
              </select>
            </div>

            <div className={styles.prototypeFormGroup}>
              <label htmlFor="designRequirement">Design Requirement *</label>
              <input
                type="text"
                id="designRequirement"
                required
                className={styles.prototypeInput}
              ></input>
            </div>

            <div className={styles.prototypeFormGroup}>
              <label htmlFor="functionalityExpectation">
                Functionality Expectation *
              </label>
              <input
                type="text"
                id="functionalityExpectation"
                required
                className={styles.prototypeInput}
              />
            </div>
          </div>

          {/* Development Timeline And Budget */}

          <div className={styles.prototypeSectionCard}>
            <div className={styles.prototypeSectionHeader}>
              <i className="bi bi-currency-dollar"></i>
              <h5 className="fw-bold">Development Timeline And Budget</h5>
            </div>

            <div className={styles.prototypeFormRow}>
              <div className={styles.prototypeFormGroup}>
                <label htmlFor="desiredCompletionDate">
                  Desired Completion Date *
                </label>
                <input
                  type="date"
                  id="desiredCompletionDate"
                  required
                  className={styles.prototypeInput}
                />
              </div>

              <div className={styles.prototypeFormGroup}>
                <label htmlFor="budgetConstraints">Budget Constraints *</label>
                <input
                  type="text"
                  id="budgetConstraints"
                  className={styles.prototypeInput}
                />
              </div>
            </div>
          </div>

          <div className={styles.prototypeFormActions}>
            <button type="button" className={styles.prototypeCancelBtn}>
              Cancel
            </button>
            <button type="submit" className={styles.prototypeSubmitBtn}>
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PrototypeForm;
