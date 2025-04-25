import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const MilestoneTrackingForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(); 
  };

  return (
    <form onSubmit={handleSubmit}>
    
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="card shadow p-4">
              <h3 className="text-center text-primary mb-4" style={{ textDecoration: "underline", fontWeight: "bold" }}>Milestone Tracking System</h3>
              
                <div className="row g-3">
                  <div className="col-12">
                    <label className="form-label fw-bold">Name</label>
                    <input type="text" className="form-control" placeholder="Enter milestone name" style={{ backgroundColor: "#1F2937", color: "#B7B7B7" }}/>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold">Start Date</label>
                    <input type="date" className="form-control" style={{ backgroundColor: "#1F2937", color: "#B7B7B7" }}/>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold">End Date</label>
                    <input type="date" className="form-control" style={{ backgroundColor: "#1F2937", color: "#B7B7B7" }}/>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label fw-bold">Status</label>
                    <select className="form-select" style={{ backgroundColor: "#1F2937", color: "#B7B7B7" }}>
                      <option>Select status</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label fw-bold">Competition</label>
                    <select className="form-select" style={{ backgroundColor: "#1F2937", color: "#B7B7B7" }}>
                      <option>Select competition</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label fw-bold">Priority</label>
                    <select className="form-select" style={{ backgroundColor: "#1F2937", color: "#B7B7B7" }}>
                      <option>Select priority</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-bold">Responsible</label>
                    <input type="text" className="form-control" placeholder="Enter responsible person" style={{ backgroundColor: "#1F2937", color: "#B7B7B7" }}/>
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-bold">Comments</label>
                    <textarea className="form-control" placeholder="Enter additional comments" rows="3" style={{ backgroundColor: "#1F2937", color: "#B7B7B7" }}></textarea>
                  </div>
                  <div className="col-12 text-center">
                    <button type="submit" className="btn btn-primary px-4">Submit Milestone</button>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
     
    </form>
  );
};

export default MilestoneTrackingForm;
