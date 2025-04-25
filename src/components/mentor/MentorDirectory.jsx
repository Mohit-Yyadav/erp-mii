

import { useState } from "react"

import styles from "../../assets/css/startup/MentorDirectory.module.css";
import { NavLink } from "react-router-dom";


const MentorDirectory = () => {
  const [mentors, setMentors] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Software Engineer",
      company: "Tech Corp",
      email: "sarah.j@techvision.com",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "UI Designer",
      company: "Tech Corp",
      email: "m.chen@healthtech.com",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      title: "Software Engineer",
      company: "Tech Corp",
      email: "sarah.j@techvision.com",
      image: "/placeholder.svg?height=60&width=60",
    },
  ])

  const handleDelete = (id) => {
    setMentors(mentors.filter((mentor) => mentor.id !== id))
  }

  const handleEdit = (id) => {
    // Implement edit functionality
    console.log(`Edit mentor with id: ${id}`)
  }

  return (
    <div className="container"
    >
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className={styles.title}>Mentor Directory</h1>
        <NavLink to="/startup/mentor-form" className={`btn btn-primary ${styles.addButton}`}>
          <i className="bi bi-plus"></i> Add Mentor Form
        </NavLink>
      </div>

      <div className="row mb-4">
        <div className="col-md-6">
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0">
              <i className="bi bi-search text-muted"></i>
            </span>
            <input
              type="text"
              className="form-control border-start-0"
              placeholder="Search mentors..."
              aria-label="Search mentors"
            />
          </div>
        </div>
        <div className="col-md-6 d-flex gap-2 mt-3 mt-md-0">
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
            <option>All Mentors</option>
            <option>New Mentors</option>
            <option>Experienced Mentors</option>
          </select>
        </div>
      </div>
     
      <div className="row bg-light">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="col-md-6 col-lg-4 mb-4 mt-4">
            <div className={styles.mentorCard}>
              <div className={styles.cardHeader}>
              <div className={`dropdown ${styles.menuDropdown}`}>
  <button className={`btn btn-light dropdown-toggle${styles.menuButton}`} type="button" id="dropdown-mentor-id" data-bs-toggle="dropdown" aria-expanded="false">
    <i className="bi bi-three-dots-vertical"></i>
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdown-mentor-id">
    <li><a className="dropdown-item" href="#" onclick="handleEdit(mentor.id)"><i className="bi bi-pencil me-2"></i>Edit</a></li>
    <li><a className="dropdown-item" href="#" onclick="handleDelete(mentor.id)"><i className="bi bi-trash me-2"></i>Delete</a></li>
  </ul>
</div>

              </div>
             
              <div className="d-flex align-items-center mb-3 ">
                <img src={mentor.image || "/placeholder.svg"} alt={mentor.name} className={styles.mentorImage} />
                <div className="ms-3">
                  <h5 className={styles.mentorName}>{mentor.name}</h5>
                  <p className={styles.mentorTitle}>{mentor.title}</p>
                </div>
              </div>

              <div className={styles.mentorInfo}>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-building me-2"></i>
                  <span>Company: {mentor.company}</span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-envelope me-2"></i>
                  <span>{mentor.email}</span>
                </div>
              </div>

              <div className={styles.cardFooter }>
                <NavLink to="/startup/mentor-display" className={styles.viewButton}>View Detail</NavLink>
                <NavLink 
  to="/startup/mentor-update-profile" 
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

export default MentorDirectory

