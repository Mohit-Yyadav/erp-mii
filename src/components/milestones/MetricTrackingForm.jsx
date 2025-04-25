import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MetricTrackingForm = ({ onSubmit }) => {
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
              <h3 className="text-center text-primary mb-4" style={{ textDecoration: "underline", fontWeight: "bold" }}>Metric Tracking System</h3>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label fw-bold">Milestone</label>
              <select className="form-select bg-dark text-light">
                <option>Select Milestone</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label fw-bold">Metric</label>
              <input type="text" className="form-control bg-dark text-light" placeholder="Enter Metric" />
            </div>
            <div className="col-md-6">
              <label className="form-label fw-bold">Target Value</label>
              <input type="text" className="form-control bg-dark text-light" placeholder="Enter Target Value" />
            </div>
            <div className="col-md-6">
              <label className="form-label fw-bold">Current Value</label>
              <select className="form-select bg-dark text-light">
                <option>Select Value</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label fw-bold">Date Recorded</label>
              <input type="date" className="form-control bg-dark text-light" />
            </div>
            <div className="col-md-6">
              <label className="form-label fw-bold">Trend</label>
              <select className="form-select bg-dark text-light">
                <option>Select Trend</option>
              </select>
            </div>
            <div className="col-12">
              <label className="form-label fw-bold">Notes</label>
              <textarea className="form-control bg-dark text-light" rows="3" placeholder="Enter any additional note"></textarea>
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

export default MetricTrackingForm;
