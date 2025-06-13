import React, { useState } from "react";
import styles from '../../assets/css/human_resource/booking.module.css';
import "bootstrap/dist/css/bootstrap.min.css";

const MeetRoomBooking = () => {
  const [selectedDesk, setSelectedDesk] = useState(null);
  const [date, setDate] = useState("");
  const [purpose, setPurpose] = useState("");

  return (
    <div className={`${styles.container}  px-5 px-md-5 my-4 ${styles.containerDesk}`}>
      <h2 className="fw-bold">Meeting Room Booking</h2>
      <p>Select your preferred room for booking</p>

      <div className="mb-3">
        <input
          type="date"
          className="form-control w-25"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      
      <div className="mb-3">
        <input type="radio" name="status" id="vacant" />
        <label htmlFor="vacant" className="me-3 ms-1">Vacant</label>
        <input type="radio" name="status" id="occupied" />
        <label htmlFor="occupied" className="me-3 ms-1">Occupied</label>
        <input type="radio" name="status" id="selected" />
        <label htmlFor="selected" className="ms-1">Selected</label>
      </div>

      <div className="row g-3" id="deskGrid">
        {[...Array(4)].map((_, i) => (
          <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={i}>
            <div
              className={` p-3 text-center border rounded ${styles.deskCard}`}
              style={{
                backgroundColor:
                  selectedDesk === i + 1 ? "#d1e7dd" : "#F8F9FA",
                cursor: "pointer",
              }}
              onClick={() => setSelectedDesk(i + 1)}
            >
              <h6>Room {i + 1}</h6>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <label htmlFor="purpose" className="form-label">Purpose</label>
        <textarea
          id="purpose"
          className="form-control"
          placeholder="Enter Purpose"
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
        ></textarea>
      </div>

      <div className={`mt-4 p-3${styles.summaryCardDesk}`}>
        <h5>Booking Summary</h5>
        <div className="row">
          <div className="col-3">
            <strong>Selected Room</strong>
            <p>{selectedDesk ? `Desk ${selectedDesk}` : "No Desk selected"}</p>
          </div>
          <div className="col-3">
            <strong>Date</strong>
            <p>{date || "No Date"}</p>
          </div>
          <div className="col-3">
            <strong>Duration</strong>
            <p>No Time</p>
          </div>
          <div className="col-3">
            <strong>Purpose</strong>
            <p>{purpose || "No Purpose"}</p>
          </div>
        </div>
        <button className="btn btn-dark mt-2">Confirm Booking</button>
      </div>
    </div>
  );
};
export default MeetRoomBooking;
