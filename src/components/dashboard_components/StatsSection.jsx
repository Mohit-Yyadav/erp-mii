import styles from "../../assets/css/startup/StatsSection.module.css"

const StatsSection = () => {
  return (
    <div className={`row row-cols-1 row-cols-sm-2 row-cols-md-4 g-2 mb-2 justify-content-center ${styles.statsSection}`}>
      <div className="col">
        <div className={`card rounded-5 ${styles.statCard}`}>
          <div className="card-body">
            <h5 className="card-title">Total No. of Startups</h5>
            <p className="card-text ">721</p>
          </div>
        </div>
      </div>
      <div className="col">
      <div className={`card rounded-5 ${styles.statCard}`}>
          <div className="card-body">
            <h5 className="card-title">No. of Meetings</h5>
            <p className="card-text ">36</p>
          </div>
        </div>
      </div>
      <div className="col">
      <div className={`card rounded-5 ${styles.statCard}`}>
          <div className="card-body">
            <h5 className="card-title">Total Employees</h5>
            <p className="card-text ">1,156</p>
          </div>
        </div>
      </div>
      <div className="col">
      <div className={`card rounded-5 ${styles.statCard}`}>
          <div className="card-body">
            <h5 className="card-title">Pending Applications</h5>
            <p className="card-text ">239</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsSection
