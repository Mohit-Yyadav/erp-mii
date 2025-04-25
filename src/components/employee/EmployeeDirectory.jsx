

import { useState } from "react"


import styles from "../../assets/css/startup/EmployeeDirectory.module.css";
import { NavLink } from "react-router-dom";

const EmployeeDirectory = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      employeeId: "EMP-2025-001",
      mentor: "Sarah Johnson",
      email: "sarah.j@techvision.com",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      name: "Michael Chen",
      employeeId: "EMP-2025-001",
      mentor: "Michael Chen",
      email: "m.chen@healthtech.com",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      employeeId: "EMP-2025-001",
      mentor: "Sarah Johnson",
      email: "sarah.j@techvision.com",
      image: "/placeholder.svg?height=60&width=60",
    },
  ])

  const handleDelete = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id))
  }

  const handleEdit = (id) => {
    console.log(`Edit employee with id: ${id}`)
  }

  return (
    <div className="container"
  >
         <div className="d-flex justify-content-between align-items-center mb-4">
           <h1 className={styles.title}>employee Directory</h1>
         <NavLink to="/startup/employee-form" className={`btn btn-primary ${styles.addButton}`}>
             <i className="bi bi-plus"></i> Add Employee Form
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
                 placeholder="Search employees..."
                 aria-label="Search employees"
               />
             </div>
          </div>
          <div className="col-md-6 d-flex gap-2 mt-3 mt-md-0">
          <select className="form-select">
              <option>All Industries</option>
              <option>Technology</option>
              <option>Healthcare</option>
              <option>Finance</option>
            </select>
            <select className="form-select">
              <option>All Mentors</option>
              <option>Sarah Johnson</option>
              <option>Michael Chen</option>
            </select>
            <select className="form-select">
            <option>All Employee</option>
            <option>New Employee</option>
            <option>Experienced Employee</option>
          </select>
          </div>
      </div>

      <div className="row bg-light">
        {employees.map((employee) => (
          <div key={employee.id} className="col-md-6 col-lg-4 mb-4 mt-4">
            <div className={styles.employeeCard}>
              <div className={styles.cardHeader}>
                <div className={`dropdown ${styles.menuDropdown}`}>
  <button className={`btn btn-light dropdown-toggle${styles.menuButton}`}  type="button" id="dropdown-employee-id" data-bs-toggle="dropdown" aria-expanded="false">
    <i className="bi bi-three-dots-vertical"></i>
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdown-employee-id">
    <li><a className="dropdown-item" href="#" onclick="handleEdit(employee.id)"><i className="bi bi-pencil me-2"></i>Edit</a></li>
    <li><a className="dropdown-item" href="#" onclick="handleDelete(employee.id)"><i className="bi bi-trash me-2"></i>Delete</a></li>
  </ul>
</div>

              </div>
             
              <div className="d-flex align-items-center mb-3 ">
                <img src={employee.image || "/placeholder.svg"} alt={employee.name} className={styles.employeeImage} />
                <div className="ms-3">
                  <h5 className={styles.employeeName}>{employee.name}</h5>
                  <p className={styles.employeeId}>{employee.employeeId}</p>
                </div>
              </div>

              <div className={styles.employeeInfo}>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-person  me-2"></i>
                  <span>Mentor: {employee.mentor}</span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-envelope me-2"></i>
                  <span>{employee.email}</span>
                </div>
              </div>

              <div className={styles.cardFooter }>
                <NavLink  to="/startup/employee-display"className={styles.viewButton}>View Details</NavLink>
                <NavLink 
  to="/startup/employee-update-form" 
  className={styles.editStatusButton}
>
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

export default EmployeeDirectory;

 

      


