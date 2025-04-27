"use client"

import { useState, useEffect } from "react"
import styles from "../../assets/css/startup/StartupDirectoryApproval.module.css"

const StartupDirectoryApproval= () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")
  const [industryFilter, setIndustryFilter] = useState("All")
  const [departmentFilter, setDepartmentFilter] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)

  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false)
  const [industryDropdownOpen, setIndustryDropdownOpen] = useState(false)
  const [departmentDropdownOpen, setDepartmentDropdownOpen] = useState(false)

  const setPage = (page) => {
    setCurrentPage(page)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target
      if (!target.closest(".dropdown")) {
        setStatusDropdownOpen(false)
        setIndustryDropdownOpen(false)
        setDepartmentDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const [startups] = useState([
    {
      id: 1,
      name: "Startup Name",
      logo: "/placeholder.svg?height=40&width=40",
      logoColor: "primary",
      profile: "This section contains details about the startup, including its mission, vision, and values.",
      status: "Active",
      industry: "Technology",
      department: "Engineering",
      mentor: "John Doe",
      contact: "johndoe@example.com",
    },
    {
      id: 2,
      name: "Startup Name",
      logo: "/placeholder.svg?height=40&width=40",
      logoColor: "warning",
      profile: "This section contains details about the startup, including its mission, vision, and values.",
      status: "Active",
      industry: "Healthcare",
      department: "Marketing",
      mentor: "John Doe",
      contact: "johndoe@example.com",
    },
    {
      id: 3,
      name: "Startup Name",
      logo: "/placeholder.svg?height=40&width=40",
      logoColor: "secondary",
      profile: "This section contains details about the startup, including its mission, vision, and values.",
      status: "Active",
      industry: "Finance",
      department: "Sales",
      mentor: "John Doe",
      contact: "johndoe@example.com",
    },
    {
      id: 4,
      name: "Startup Name",
      logo: "/placeholder.svg?height=40&width=40",
      logoColor: "success",
      profile: "This section contains details about the startup, including its mission, vision, and values.",
      status: "Active",
      industry: "Technology",
      department: "Engineering",
      mentor: "John Doe",
      contact: "johndoe@example.com",
    },
  ])

  const filteredStartups = startups.filter((startup) => {
    const matchesSearch = startup.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "All" || startup.status === statusFilter
    const matchesIndustry = industryFilter === "All" || startup.industry === industryFilter
    const matchesDepartment = departmentFilter === "All" || startup.department === departmentFilter
    return matchesSearch && matchesStatus && matchesIndustry && matchesDepartment
  })

  const toggleDropdown = (dropdown) => {
    if (dropdown === "status") {
      setStatusDropdownOpen(!statusDropdownOpen)
      setIndustryDropdownOpen(false)
      setDepartmentDropdownOpen(false)
    } else if (dropdown === "industry") {
      setIndustryDropdownOpen(!industryDropdownOpen)
      setStatusDropdownOpen(false)
      setDepartmentDropdownOpen(false)
    } else if (dropdown === "department") {
      setDepartmentDropdownOpen(!departmentDropdownOpen)
      setStatusDropdownOpen(false)
      setIndustryDropdownOpen(false)
    }
  }

  return (
    <div className={styles.mainContentArea}>
      {/* Header Section */}
      <div className={styles.headerSection}>
        <h2 className={styles.sectionTitle}>Startup Directory -  Approval</h2>

        {/* Search and Filters */}
        <div className={styles.filtersContainer}>
          <div className={styles.searchContainer}>
            <div className="input-group">
              <span className="input-group-text bg-grey border-end-0">
                <i className="bi bi-search"></i>
              </span>
              <input
                type="text"
                className="form-control bg-light border-start-0"
                placeholder="Search startups..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.dropdownsContainer}>
            {/* Status Dropdown */}
            <div className={styles.dropdownWrapper}>
              <div className="dropdown w-100 position-relative">
                <button
                  className="btn btn-light dropdown-toggle w-100 d-flex align-items-center justify-content-between border border-2 rounded py-1"
                  onClick={() => toggleDropdown("status")}
                >
                  <span>Status</span>
                </button>
                {statusDropdownOpen && (
                  <ul className="dropdown-menu w-100 show position-absolute">
                    {["All", "Active", "Pending"].map((item) => (
                      <li key={item}>
                        <button
                          className="dropdown-item"
                          onClick={() => {
                            setStatusFilter(item)
                            setStatusDropdownOpen(false)
                          }}
                        >
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Industry Dropdown */}
            <div className={styles.dropdownWrapper}>
              <div className="dropdown w-100 position-relative">
                <button
                  className="btn btn-light dropdown-toggle w-100 d-flex align-items-center justify-content-between border border-2 rounded py-1"
                  onClick={() => toggleDropdown("industry")}
                >
                  <span>Industry</span>
                </button>
                {industryDropdownOpen && (
                  <ul className="dropdown-menu w-100 show position-absolute">
                    {["All", "Technology", "Healthcare"].map((item) => (
                      <li key={item}>
                        <button
                          className="dropdown-item"
                          onClick={() => {
                            setIndustryFilter(item)
                            setIndustryDropdownOpen(false)
                          }}
                        >
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Department Dropdown */}
            <div className={styles.dropdownWrapper}>
              <div className="dropdown w-100 position-relative">
                <button
                  className="btn btn-light dropdown-toggle w-100 d-flex align-items-center justify-content-between border border-2 rounded py-1"
                  onClick={() => toggleDropdown("department")}
                >
                  <span>Department</span>
                </button>
                {departmentDropdownOpen && (
                  <ul className="dropdown-menu w-100 show position-absolute">
                    {["All", "Engineering", "Marketing"].map((item) => (
                      <li key={item}>
                        <button
                          className="dropdown-item"
                          onClick={() => {
                            setDepartmentFilter(item)
                            setDepartmentDropdownOpen(false)
                          }}
                        >
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className={styles.cardsContainer}>
        <div className={styles.cardsGrid}>
          {filteredStartups.map((startup) => (
            <div key={startup.id} className={styles.cardWrapper}>
              <div className={`card h-100 shadow-sm bg-light ${styles.startupCard}`}>
                <div className="card-body">
                  <div className="d-flex align-items-center mb-2">
                    <img
                      src={startup.logo || "/placeholder.svg"}
                      alt="logo"
                      className="me-2 rounded"
                      width="32"
                      height="32"
                    />
                    <h5 className="mb-0 fs-6">{startup.name}</h5>
                  </div>
                  <div className="mb-2">
                    <p className="text-muted mb-1 small fw-bold">Profile Section</p>
                    <p className="small">{startup.profile}</p>
                  </div>
                  <div className="mb-2">
                    <p className="text-muted mb-1 small fw-bold">Status Section</p>
                    <span className={`badge bg-success px-2 py-1 rounded-pill ${styles.statusBadge}`}>
                      {startup.status}
                    </span>
                  </div>
                  <div className="mb-2">
                    <p className="text-muted mb-1 small fw-bold">Mentor Assigned Section</p>
                    <p className="small mb-1">Mentor: {startup.mentor}</p>
                    <p className="small text-muted">Contact: {startup.contact}</p>
                  </div>
                </div>
                <div className="card-footer bg-light border-0 p-2">
                  <button className="btn bg-success btn-sm w-100">Approval</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className={styles.paginationContainer}>
          <nav>
            <ul className={`pagination ${styles.customPagination}`}>
              {/* Previous */}
              <li
                className={styles.pageItem}
                onClick={() => currentPage > 1 && setPage(currentPage - 1)}
                style={{ opacity: currentPage === 1 ? 0.5 : 1, pointerEvents: currentPage === 1 ? "none" : "auto" }}
              >
                <span>&lt;</span>
              </li>

              {/* Page Numbers */}
              {[1, 2, 3].map((page) => (
                <li
                  key={page}
                  className={`${styles.pageItem} ${currentPage === page ? styles.active : ""}`}
                  onClick={() => setPage(page)}
                >
                  <span>{page}</span>
                </li>
              ))}

              {/* Next */}
              <li
                className={styles.pageItem}
                onClick={() => currentPage < 3 && setPage(currentPage + 1)}
                style={{ opacity: currentPage === 3 ? 0.5 : 1, pointerEvents: currentPage === 3 ? "none" : "auto" }}
              >
                <span>&gt;</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Submit Button */}
      <div className={styles.footerSection}>
        <button className={`btn btn-dark px-3 py-1 ${styles.submitButton}`}>
          <i className="bi bi-plus"></i>
          Submit New Startup
        </button>
      </div>
    </div>
  )
}

export default StartupDirectoryApproval
