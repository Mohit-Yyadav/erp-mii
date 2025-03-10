import styles from "../../assets/css/startup_admin/NotificationSidebar.module.css";

const NotificationSidebar = () => {
  return (
    <div className={styles.notificationSidebar}>
      <div className={styles.positionSticky}>
         <div className={styles.notificationSection}>
          <h6 className={styles.notificationTitle}>Notifications</h6>
          <div className={styles.notificationItem}>
            <i className="bi bi-exclamation-circle"></i>
            <div>
              <p>You have a bug that needs...</p>
              <small>Just now</small>
            </div>
          </div>
          <div className={styles.notificationItem}>
            <i className="bi bi-person-plus-fill"></i>
            <div>
              <p>New user registered</p>
              <small>59 minutes ago</small>
            </div>
          </div>
          <div className={styles.notificationItem}>
            <i className="bi bi-exclamation-circle"></i>
            <div>
              <p>You have a bug that needs...</p>
              <small>12 hours ago</small>
            </div>
          </div>
          <div className={styles.notificationItem}>
            <i className="bi bi-person-check-fill"></i>
            <div>
              <p>Andi Lane subscribed to you</p>
              <small>Today, 11:59 AM</small>
            </div>
          </div>
        </div>

        <div className={styles.feedbackSection}>
          <h6 className={styles.feedbackTitle}>Feedback</h6>
          <div className={styles.notificationItem}>
            <i className="bi bi-exclamation-circle"></i>
            <div>
              <p>You have a bug that needs...</p>
              <small>Just now</small>
            </div>
          </div>
          <div className={styles.notificationItem}>
            <i className="bi bi-stars"></i>
            <div>
              <p>Released a new version</p>
              <small>59 minutes ago</small>
            </div>
          </div>
          <div className={styles.notificationItem}>
            <i className="bi bi-bug-fill"></i>
            <div>
              <p>Submitted a bug</p>
              <small>12 hours ago</small>
            </div>
          </div>
          <div className={styles.notificationItem}>
            <i className="bi bi-pencil-square"></i>
            <div>
              <p>Modified A data in Page X</p>
              <small>Today, 11:59 AM</small>
            </div>
          </div>
          <div className={styles.notificationItem}>
            <i className="bi bi-x-circle-fill"></i>
            <div>
              <p>Deleted a page in Project X</p>
              <small>Feb 2, 2023</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSidebar;
