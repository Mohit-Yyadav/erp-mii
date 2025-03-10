import styles from "../../assets/css/startup_admin/ChartAndFundings.module.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons

const ChartAndFundings = () => {
  return (
    <div className={`row mb-3 ${styles.chartAndFundings}`}>
      {/* Profile Creation Section */}
      <div className="col-md-8">
        <div className="card border-0">
          <div className="card-body">
            <div className={`${styles.chartPlaceholder} mt-2`}>
              <h5 className="fw-bold fs-6 text-decoration-underline">Profile Creation</h5>

              {/* Create Profile Button */}
              <div className={` ${styles.createProfile} w-100 p-2`}>
                <i className="bi bi-person-fill me-2"></i> Create Profile
                <i className="bi bi-chevron-down ms-auto"></i>
              </div>

              {/* Static Profile List */}
              <div className={`${styles.profileContainer} mt-3`}>
                <div className={styles.profileItem}>
                  <i className="bi bi-person-badge-fill me-2"></i> Employee Profile
                </div>
                <div className={styles.profileItem}>
                  <i className="bi bi-mortarboard-fill me-2"></i> Student Profile
                </div>
                <div className={styles.profileItem}>
                  <i className="bi bi-people-fill me-2"></i> Admin Profile
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fundings Section */}
      <div className="col-md-4">
        <div className="card border-0">
          <div className="card-body">
            <div className={styles.funding}>
              <h5 className="fw-bold fs-6 text-decoration-underline">Fundings</h5>
              <ul className="list-unstyled">
                <li className="mb-1">Google</li>
                <li className="mb-1">YouTube</li>
                <li className="mb-1">Instagram</li>
                <li className="mb-1">Pinterest</li>
                <li className="mb-1">Facebook</li>
                <li className="mb-1">Twitter</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartAndFundings;
