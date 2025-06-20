import { useEffect, useState } from "react"

  import styles from "../../assets/css/mentor/MentorDirectory.module.css";
  import { NavLink, useLocation } from "react-router-dom";
  import axios from "../../../utils/Axios";
  import { toast } from "react-toastify";
  import Loader from "../loader/Loader";
 

  const MentorDirectory = () => {
        const location = useLocation();
        const basePath = location.pathname.split('/')[1];
    const [mentors, setMentors] = useState([]);
   

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
      try {
        const result = await axios.get("/api/mentor/get-mentor");
        console.log(result);
        console.log(result);
        if (result) {
          toast.success("Data Inserted Successfully");
          setMentors(result.data.data);
         

        }
        
      } catch (error) {
        toast.error("Error in getting form data", error);
      }
    };

    const handleDelete = (id) => {
      setMentors(mentors.filter((mentor) => mentor.id !== id));
    };

    const handleEdit = (id) => {
      // Implement edit functionality
      console.log(`Edit mentor with id: ${id}`);
    };

    return Loader && (
       <div className={styles.mainContainer}>
            <div className={styles.headerContainer}>
          <h1 className={styles.title}>Mentor Directory</h1>
          <NavLink
             to='/startup/mentor-Form' 
            className={`btn btn-primary ${styles.addButton}`}
          >
            <i className="bi bi-plus"></i> Add Mentor Form
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
                placeholder="Search mentors..."
                aria-label="Search mentors"
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
              <option>All Mentors</option>
              <option>New Mentors</option>
              <option>Experienced Mentors</option>
            </select>
          </div>
        </div>

        <div className={styles.startupGrid}>
          {mentors?.map((mentor, i) => (
            <div key={mentor.id} className={styles.mentorCard}>
              <div className={styles.mentorCard}>
                <div className={styles.cardHeader}>
                  <div className={`dropdown ${styles.menuDropdown}`}>
                    <button
                      className={`btn btn-light dropdown-toggle${styles.menuButton}`}
                      type="button"
                      id="dropdown-mentor-id"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-three-dots-vertical"></i>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdown-mentor-id"
                    >
                      <li>
                        <button
                          type="button"
                          className="dropdown-item"
                          onClick={() => handleEdit(mentor.id)}
                        >
                          <i className="bi bi-pencil me-2"></i>Edit
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="dropdown-item"
                          onClick={() => handleDelete(mentor.id)}
                        >
                          <i className="bi bi-trash me-2"></i>Delete
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3 ">
                  <img
                      src={mentor.img}
                      alt={mentor.name}
                      className={styles.mentorImage}
                  />
                  <div className="ms-3">
                    <h5 className={styles.mentorName
                      
                    }>{mentor.name}</h5>
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
                    <span>{mentor.email}hello</span>
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <NavLink
                    to={`/${basePath}/mentor-display/${mentor.id}`}
                    className={styles.viewButton}
                  >
                    View Detail
                  </NavLink>
                  <NavLink
                    to={`/${basePath}/mentor-update-profile/${mentor.id}`}
                    className={styles.editStatusButton}
                  >
                    Edit Status {mentor.id}
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default MentorDirectory;
