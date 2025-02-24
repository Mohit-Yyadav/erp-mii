import React from 'react';
import "../../assets/css/startup/profile.module.css";


const Profile = () => {
  const employeeData = {
    name: "Sarah Johnson",
    designation: "Senior UX Designer",
    employeeId: "EMP2023",
    profileImage:
      "https://img.freepik.com/free-photo/smart-looking-teacher_53876-23045.jpg",
    dob: "15 March 1990",
    gender: "Female",
    address: "123 Main Street, City",
    currentAddress: "123 Business Ave, Suite 100, San Francisco, CA 94107",
    emergencyContact: "John Smith (Spouse) +1 (555) 987-6543",
    department: "Design Department",
    employmentType: "Full-Time",
    joiningDate: "01 January 2025",
    reportingManager: "Mike Anderson",
    workLocation: "San Francisco HQ",
    shiftTiming: "9:00 AM - 6:00 PM",
    annualCTC: "120,000",
    monthlySalary: "8,500",
    bankAccount: "XXXX-XXXX-1234",
    pfNumber: "PF98765432",
    panNumber: "ABCDE123F",
  };

  return (
    <div className="container-fluid py-4">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-7">
          <div className="profile-container card shadow">
            <div className="card-body p-4">
              {/* Profile Header */}
              <div className="d-flex align-items-center">
                <img
                  src={employeeData.profileImage || "/placeholder.svg"}
                  alt="Profile"
                  className="rounded-circle"
                  style={{ width: "60px", height: "60px", objectFit: "cover" }}
                />
                <div className="ms-3">
                  <h4 className="mb-0">{employeeData.name}</h4>
                  <p className="text-muted mb-0">{employeeData.designation}</p>
                  <div className="d-flex align-items-center mt-1">
                    <span className="badge bg-primary me-2">
                      #{employeeData.employeeId}
                    </span>
                    <span className="d-flex align-items-center">
                      <span>Active Employee</span>
                      <i
                        className="bi bi-circle-fill text-success ms-2"
                        style={{ fontSize: "12px" }}
                      ></i>
                    </span>
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                {/* Left Column */}
                <div className="col-md-8">
                  {/* Personal Information */}
                  <div className="card mb-4">
                    <div className="card-header bg-light">
                      <h5 className="mb-0">
                        <i className="bi bi-person me-2"></i>
                        Personal Information
                      </h5>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="text-muted">Date of Birth</label>
                            <p className="$dark-text-emphasis">
                              <i className="fa-solid fa-calendar me-2"></i>
                              {employeeData.dob}
                            </p>
                          </div>
                          <div className="mb-3">
                            <label className="text-muted">Gender</label>
                            <p className="$dark-text-emphasis">
                              <i className="fa-regular fa-face-smile me-2"></i>
                              {employeeData.gender}
                            </p>
                          </div>
                          <div className="mb-3">
                            <label className="text-muted">Address</label>
                            <p className="mb-0$dark-text-emphasis">
                              <i className="fa-solid fa-phone me-2"></i>
                              {employeeData.address}
                            </p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="text-muted">
                              Current Address
                            </label>
                            <p className="$dark-text-emphasis">
                              <i className="fa-solid fa-location-pin me-3"></i>
                              {employeeData.currentAddress}
                            </p>
                          </div>
                          <div className="mb-3">
                            <label className="text-muted">
                              Emergency Contact
                            </label>
                            <p className="$dark-text-emphasis">
                              <i className="fa-solid fa-phone-volume me-3"></i>
                              {employeeData.emergencyContact}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Job Information */}
                  <div className="card">
                    <div className="card-header bg-light">
                      <h5 className="mb-0">
                        <i className="bi bi-briefcase me-2"></i>
                        Job Information
                      </h5>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="text-muted">Department</label>
                            <p className="$dark-text-emphasis">
                              <i className="fa-solid fa-building me-2"></i>
                              {employeeData.department}
                            </p>
                          </div>
                          <div className="mb-3">
                            <label className="text-muted">
                              Employment Type
                            </label>
                            <p className="mb-0">
                              <i className="fa-solid fa-briefcase me-2"></i>
                              {employeeData.employmentType}
                            </p>
                          </div>
                          <div className="mb-3">
                            <label className="text-muted">
                              Date of Joining
                            </label>
                            <p className="mb-0">
                              <i className="fa-regular fa-calendar me-2"></i>
                              {employeeData.joiningDate}
                            </p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="text-muted">
                              Reporting Manager
                            </label>
                            <p className="mb-0">
                              <i className="fa-solid fa-user-tie me-2"></i>
                              {employeeData.reportingManager}
                            </p>
                          </div>
                          <div className="mb-3">
                            <label className="text-muted">Work Location</label>
                            <p className="mb-0">
                              <i className="fa-solid fa-location-dot me-2"></i>
                              {employeeData.workLocation}
                            </p>
                          </div>
                          <div className="mb-3">
                            <label className="text-muted">Shift Timing</label>
                            <p className="mb-0">
                              <i className="fa-regular fa-clock me-2"></i>
                              {employeeData.shiftTiming}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="col-md-4">
                  {/* Salary Information */}
                  <div className="card mb-4">
                    <div className="card-header bg-light">
                      <h5 className="mb-0">
                        <i className="bi bi-cash-stack me-2"></i>
                        Salary Information
                      </h5>
                    </div>
                    <div className="card-body">
                      <div className="mb-3">
                        <label className="text-muted">Annual CTC</label>
                        <p className="mb-0 fw-bold">
                          <i className="fa-solid fa-dollar-sign me-2"></i>
                          {employeeData.annualCTC}
                        </p>
                      </div>
                      <div className="mb-3">
                        <label className="text-muted">Monthly In-hand</label>
                        <p className="mb-0">
                          <i className="fa-solid fa-dollar-sign me-2"></i>
                          {employeeData.monthlySalary}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bank & Tax Details */}
                  <div className="card">
                    <div className="card-header bg-light">
                      <h5 className="mb-0">
                        <i className="bi bi-bank me-2"></i>
                        Bank & Tax Details
                      </h5>
                    </div>
                    <div className="card-body">
                      <div className="mb-3">
                        <label className="text-muted">Bank Account</label>
                        <p className="mb-0">
                          <i className="fa-solid fa-building-columns me-2"></i>
                          {employeeData.bankAccount}
                        </p>
                      </div>
                      <div className="mb-3">
                        <label className="text-muted">PF Number</label>
                        <p className="mb-0">
                          <i className="fa-solid fa-file me-2"></i>
                          {employeeData.pfNumber}
                        </p>
                      </div>
                      <div className="mb-3">
                        <label className="text-muted">PAN</label>
                        <p className="mb-0">
                          <i className="fa-solid fa-id-card me-2"></i>
                          {employeeData.panNumber}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
