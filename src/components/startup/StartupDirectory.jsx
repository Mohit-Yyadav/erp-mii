import { useState } from "react"
import styles from "../../assets/css/startup/StartupDirectory.module.css"
import { Dropdown } from "react-bootstrap"

const StartupDirectory = () => {
  const [startups, setStartups] = useState([
    
      {
        id: 1,
        name: 'TechVision AI',
        logo: '/logos/techvision.png',
        status:'Growth',
        statusClass: styles.growth,
        mentor: 'Sarah Johnson',
        email: 'sarah.j@techvision.com',
      },
      {
        id: 2,
        name: 'HealthTech Pro',
        logo: '/logos/healthtech.png',
        status:'Funded',
        statusClass: styles.funded,
        mentor: 'Michael Chen',
        email: 'm.chen@healthtech.com',
      },
      {
        id: 3,
        name: 'FinFlow',
        logo: '/logos/finflow.png',
        status: 'Scaling',
        statusClass: styles.scaling,
        mentor: 'Alex Thompson',
        email: 'alex.t@finflow.com',
      },
    ])

  const handleDelete = (id) => {
    setStartups(startups.filter((startup) => startup.id !== id))
  }

  const handleEdit = (id) => {
       console.log(`Edit startup with id: ${id}`)
  }

  return (
    <div className={styles.mainContainer}>
                <div className={styles.headerContainer}>
              <h1 className={styles.title}>Startup Directory</h1>
        <button className={`btn btn-primary ${styles.addButton}`}>
          <i className="bi bi-plus"></i> Add Startups
        </button>
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
            />
          </div>
        </div>
            <div className={styles.selectsContainer}>
          <select className="form-select">
          <option>All Status</option>
            <option>Growth</option>
            <option>Funded</option>
            <option>Scaling</option>
          </select>
          <select className="form-select">
            <option>All Industries</option>
            <option>Technology</option>
            <option>Healthcare</option>
            <option>Finance</option>
          </select>
          <select className="form-select">
            <option>All Startups</option>
            <option>New Startups</option>
            <option>Experienced Startups</option>
          </select>
        </div>
      </div>
     
        <div className={styles.startupGrid}>
        {startups.map((startup) => (
           <div key={startup.id} className={styles.mentorCard}>
            <div className={styles.startupCard}>
              <div className={styles.cardHeader}>
                <Dropdown className={styles.menuDropdown}>
                  <Dropdown.Toggle variant="light" id={`dropdown-${startup.id}`} className={styles.menuButton}>
                    <i className="bi bi-three-dots-vertical"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleEdit(startup.id)}>
                      <i className="bi bi-pencil me-2"></i>Edit
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleDelete(startup.id)}>
                      <i className="bi bi-trash me-2"></i>Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
             
              <div className="d-flex align-items-center mb-3 ">
                <img src={startup.image || "/placeholder.svg"} alt={startup.name} className={styles.startupImage} />
                <div className="ms-3">
                  <h5 className={styles.startupName}>{startup.name}</h5>
                  <p className={styles.startupStatus}>{startup.status}</p>
                </div>
              </div>

              <div className={styles.startupInfo}>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-person  me-2"></i>
                  <span>Mentor: {startup.mentor}</span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-envelope me-2"></i>
                  <span>{startup.email}</span>
                </div>
              </div>

              <div className={styles.cardFooter }>
                <button className={styles.viewButton}>View Details</button>
                <button className={styles.editStatusButton}>Edit Status</button>
              </div>
            </div>
          </div>
         
        ))}
      </div>
    </div>
  )
}

export default StartupDirectory;




 

      


