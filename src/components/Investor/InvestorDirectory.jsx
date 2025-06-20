import { useEffect, useState } from "react"
import styles from "../../assets/css/investor/InvestorDirectory.module.css";
import { NavLink, useLocation } from "react-router-dom";
import axios from "../../../utils/Axios";
import { toast } from "react-toastify";
import Loader from "../loader/Loader";

const InvestorDirectory = () => {
    const location = useLocation();
    const basePath = location.pathname.split('/')[1];
  const [investors, setInvestors] = useState([]);

  const fetchData = async () => {
    try {
      const result = await axios.get("/api/investorform/get_data");
      if (result) {
        toast.success("Data Display Successfully");
        setInvestors(result.data.data);
      }
    } catch (error) {
      toast.error(`Error in getting form data: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (id) => {
    setInvestors(investors.filter((investor) => investor.id !== id))
  }

  const handleEdit = (id) => {
    // Implement edit functionality
    console.log(`Edit investor with id: ${id}`)
  }

  return (
    <div className={styles.mainContainer}>
          <div className={styles.headerContainer}>
        <h1 className={styles.title}>Investor Directory</h1>
        <NavLink to={`/${basePath}/investors-profile`} className={`btn btn-primary ${styles.addButton}`}>
          <i className="bi bi-plus"></i> Add Investor Form
      </NavLink>
      </div>

     <div className={styles.filtersContainer}>
             <div className={styles.searchBox}>
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0">
              <i className="bi bi-search text-muted"></i>
            </span>
            <input
              type="text"
              className="form-control border-start-0"
              placeholder="Search investors..."
              aria-label="Search investors"
            />
          </div>
        </div>
          <div className={styles.selectsContainer}>
          <select className="form-select">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
          <select className="form-select">
            <option>All Industries</option>
            <option>Technology</option>
            <option>Healthcare</option>
            <option>Finance</option>
          </select>
          <select className="form-select">
            <option>All Investors</option>
            <option>New Investors</option>
            <option>Experienced investors</option>
          </select>
        </div>
      </div>

     <div className={styles.startupGrid}>
        {investors?.map((investor,i) => (
          <div key={investor.id} className="col-md-6 col-lg-4 mb-4 mt-4">
            <div className={styles.investorCard}>
              <div className={styles.cardHeader}>
              <div className={`dropdown ${styles.menuDropdown}`}>
  <button className={`btn btn-light dropdown-toggle${styles.menuButton}`} type="button" id="dropdown-investor-id" data-bs-toggle="dropdown" aria-expanded="false">
    <i className="bi bi-three-dots-vertical"></i>
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdown-investor-id">
  <li>
  <button
    type="button"
    className="dropdown-item"
    onClick={() => handleEdit(investor.id)}
  >
    <i className="bi bi-pencil me-2"></i>Edit
  </button>
</li>
<li>
  <button
    type="button"
    className="dropdown-item"
    onClick={() => handleDelete(investor.id)}
  >
    <i className="bi bi-trash me-2"></i>Delete
  </button>
</li>
  </ul>
</div>

              </div>

              <div className="d-flex align-items-center mb-3">
                <img src={investor.image || "/placeholder.svg"} alt={investor.name} className={styles.investorImage} />
                <div className="ms-3">
                  <h5 className={styles.investorName}>{investor.name}</h5>
                  <p className={styles.investorTitle}>{investor.title}</p>
                </div>
              </div>

              <div className={styles.investorinfo}>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-building me-2"></i>
                  <span>Company: {investor.company_name}</span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-envelope me-2"></i>
                  <span>{investor.email_ID}</span>
                </div>
              </div>

              <div className={styles.cardFooter}>
                <NavLink to={`/${basePath}/investor-display`}className={styles.viewButton}>View Details</NavLink>
                <NavLink 
                       to={`/${basePath}/investors-updated-profile`}
  className={styles.editStatusButton}>
  Edit Status
</NavLink>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InvestorDirectory

