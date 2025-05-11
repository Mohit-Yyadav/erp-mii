import { useEffect, useState } from "react"

import styles from "../../assets/css/startup/StartupDirectory.module.css";
import { NavLink, useLocation } from "react-router-dom";
import axios from "../../../utils/Axios";
import { toast } from "react-toastify";
import Loader from "../loader/Loader";


const StartupDirectory = () => {
  const location = useLocation();
  const basePath = location.pathname.split('/')[1]
  const [startups, setStartups] = useState([])

  const fetchData = async()=>{
    try {
      const result = await axios.get("/api/mainform/get-data");
      if (result) {
        toast.success("Fetching Data Successfully");
        setStartups(result.data.data);
      }
    } catch (error) {
      toast.error("Error in getting form data", error);
    }
  }
  useEffect(() => {
    fetchData();
  },[])

  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("All Status")
  const [industryFilter, setIndustryFilter] = useState("All Industries")
  const [startupTypeFilter, setStartupTypeFilter] = useState("All Startups")

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }



  return <Loader/> && (
    <div className={styles.mainContainer}>
         <div className={styles.headerContainer}>
        <h1 className={styles.title}>Startup Directory</h1>
        <NavLink
        to='/startup/startup-Form'className={`btn btn-primary ${styles.addButton}`}>
          <i className="bi bi-plus"></i> Add Startup Form
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
              placeholder="Search startups..."
              aria-label="Search startups"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className={styles.selectsContainer}>
          <select className="form-select" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
            <option>All Status</option>
            <option>Growth</option>
            <option>Funded</option>
            <option>Scaling</option>
          </select>
          <select className="form-select" value={industryFilter} onChange={(e) => setIndustryFilter(e.target.value)}>
            <option>All Industries</option>
            <option>Technology</option>
            <option>Healthcare</option>
            <option>Finance</option>
          </select>
          <select
            className="form-select"
            value={startupTypeFilter}
            onChange={(e) => setStartupTypeFilter(e.target.value)}
          >
            <option>All Startups</option>
            <option>New Startups</option>
            <option>Experienced Startups</option>
          </select>
        </div>
      </div>

     <div className={styles.startupGrid}>
        {startups?.map((startup,i) => {
          return(
          <div key={i} className={styles.startupCard} >
           <div className={styles.cardHeader}>
                <div className="dropdown">
                  <button
                    className={`btn ${styles.menuButton}`}
                    type="button"
                    id={`dropdown-${startup.id}`}
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-three-dots-vertical"></i>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby={`dropdown-${startup.id}`}>
                    <li>
                      <a className="dropdown-item" href="#" onClick={() => handleEdit(startup.id)}>
                        <i className="bi bi-pencil me-2"></i>Edit
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#" onClick={() => handleDelete(startup.id)}>
                        <i className="bi bi-trash me-2"></i>Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="d-flex align-items-center mb-3 ">
                <img src={startup.image || "/placeholder.svg"} alt={startup.personal_name} className={styles.startupImage} />
                <div className="ms-3">
                  <h5 className={styles.startupName}>{startup.personal_name}</h5>
                  <p className={styles.startupStatus}>{startup.stage}</p>
                </div>
              </div>

              <div className={styles.startupInfo}>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-person  me-2"></i>
                  <span>Mentor: {startup.mentorship}</span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-envelope me-2"></i>
                  <span>{startup.email_id}</span>
                </div>
              </div>

              <div className={styles.cardFooter}>
                <NavLink to ={`/${basePath}/main-form-display/${startup.id}`} className={styles.viewButton}>View Details</NavLink>
               <NavLink 
                 to={`/${basePath}/main-form-update/${startup.id}` }
                 className={styles.editStatusButton}
               >
                 Edit Status
               </NavLink>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default StartupDirectory

