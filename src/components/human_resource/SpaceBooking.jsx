import React from "react";
import main from "../../assets/css/startup/MainContent.module.css";
import styles from "../../assets/css/human_resource/spaceBooking.module.css"

const SpaceBooking = () => {
  const spaces = ["Desk", "Office", "Meeting Room"];

  return (
    <div className={main["container-fluid"]}>
      <div className={`d-flex justify-content-center flex-wrap gap-3 ${styles.spaceCardContainer}`}>
        {spaces.map((space, index) => (
          <div key={index} className={`col-sm-12 col-md-4 col-lg-4 ${styles.spaceCard}`}>
            <div className={`card border-0 rounded ${styles.cardColor}`}>
              <div className="card-body">
              <div className="d-flex justify-content-between pb-4">
    <h5 className="card-title m-0"><u>{space}</u></h5>
    <h5 className="card-title  m-0">{/* Subtitle here */} <button type="button" className={`btn border-0 rounded px-1 py-0 text-muted py-1 px-2 ${styles.cardTitleButton}`} >Avilable</button></h5>
  </div>
                <small className="card-text text-muted">
                <i className="fa-regular fa-clock"></i> <span className={styles.cardText}>Avaliable 9am-6pm</span>
                </small> <br/>
                <small className="card-text text-muted">
                <i className="fa-solid fa-user"></i> <span className={styles.cardText}> Capicity: 1-2 </span>
                </small>
                <div className="d-flex justify-content-center p-0 m-0 mt-3">
                  <button className="w-100 rounded border-0 py-1 text-light" style={{backgroundColor:"#0E0F10"}}>Book Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpaceBooking;
