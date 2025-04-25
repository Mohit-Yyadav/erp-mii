import React from "react";
import styles from "../../assets/css/meetingSchedule/MeetingSchedulePage.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const MeetingSchedulePage = () => {
  return (  

    <div className={styles.meetingBody}>
      <div className={`${styles.meetingContainer} mt-4`}>
        
        <div className={`${styles.meetingTitle} d-flex justify-content-between align-items-center title-container`}>
          <h2>Meeting Schedule</h2>
          <button className={styles.meetingCreateMeetingButton}>Create New Meeting</button>
        </div>

        <div className={`${styles.meetingCard} p-4 mb-4`}>
          <h4>Schedule New Meeting</h4>
          <div className="row mt-3">
            <div className="col-md-6">
              <label className="form-label">Meeting Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter meeting title"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Purpose of Meeting</label>
              <textarea
                className="form-control"
                placeholder="Describe the meeting purpose"
              ></textarea>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <label className="form-label">Date and Time</label>
              <input type="datetime-local" className="form-control" />
            </div>

            <div className="col-md-6">
              <label className="form-label">Attendees</label>
              <select className="form-control" multiple>
                <option>John Smith</option>
                <option>Jane Doe</option>
                <option>Michael Brown</option>
              </select>
            </div>
          </div>

          <div className="row mt-1">
            <div className="col-md-6">
              <label className="form-label">Location</label>
              <select className="form-control">
                <option>Select meeting room</option>
                <option>Room A</option>
                <option>Room B</option>
              </select>
            </div>
          </div>

          <div className="mt-3 d-flex justify-content-end">
            <button className={styles.meetingCancel}>Cancel</button>
            <button className={styles.meetingSaveMeetingButton}>Save Meeting</button>
          </div>
        </div>

        <div className={`${styles.meetingCard} p-4`}>
          <h4>Upcoming Meetings</h4>
          <div className={styles.meetingbar}>No upcoming meetings</div>
        </div>
      </div>
    </div>
    
  );
};

export default MeetingSchedulePage;
