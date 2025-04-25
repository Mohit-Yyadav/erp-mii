

import { useState } from "react"

import styles from "../../assets/css/startup/StartupDirectory.module.css";
import { NavLink } from "react-router-dom";


const StartupDirectory = () => {
  const [startups, setStartups] = useState([
    {
      id: 1,
      name: "TechVision AI",
      logo: "/logos/techvision.png",
      status: "Growth",
      statusClass: styles.growth,
      mentor: "Sarah Johnson",
      email: "sarah.j@techvision.com",
      industry: "Technology",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      name: "HealthTech Pro",
      logo: "/logos/healthtech.png",
      status: "Funded",
      statusClass: styles.funded,
      mentor: "Michael Chen",
      email: "m.chen@healthtech.com",
      industry: "Healthcare",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      name: "FinFlow",
      logo: "/logos/finflow.png",
      status: "Scaling",
      statusClass: styles.scaling,
      mentor: "Alex Thompson",
      email: "alex.t@finflow.com",
      industry: "Finance",
      image: "/placeholder.svg?height=60&width=60",
    },
  ])
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("All Status")
  const [industryFilter, setIndustryFilter] = useState("All Industries")
  const [startupTypeFilter, setStartupTypeFilter] = useState("All Startups")

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const filteredStartups = startups.filter((startup) => {
    const matchesSearch =
      startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      startup.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      startup.mentor.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "All Status" || startup.status === statusFilter
    const matchesIndustry = industryFilter === "All Industries" || startup.industry === industryFilter

    // For demo purposes, we'll just check if name contains "new" for new startups
    const isNewStartup = startup.name.toLowerCase().includes("new")
    const matchesStartupType =
      startupTypeFilter === "All Startups" ||
      (startupTypeFilter === "New Startups" && isNewStartup) ||
      (startupTypeFilter === "Experienced Startups" && !isNewStartup)

    return matchesSearch && matchesStatus && matchesIndustry && matchesStartupType
  })

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
        {filteredStartups.map((startup) => (
          <div key={startup.id} className={styles.startupCard}>
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

              <div className={styles.cardFooter}>
                <NavLink to ="/startup/startup-display" className={styles.viewButton}>View Details</NavLink>
               <NavLink 
                 to="/startup/startup-Updated-Form" 
                 className={styles.editStatusButton}
               >
                 Edit Status
               </NavLink>
              </div>
            </div>
          
        ))}
      </div>
    </div>
  )
}

export default StartupDirectory

