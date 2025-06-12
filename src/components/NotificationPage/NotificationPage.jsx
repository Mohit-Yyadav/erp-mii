import React from 'react';
import styles from '../../assets/css/NotificationPage/NotificationPage.module.css'; 

const Header = () => {
  return (
    <div className={styles.notificationsHeader}>
      <div>
        <h2 className={`h3 mb-1 fw-bold ${styles.notificationTitleMain}`}>Notifications</h2>
        <p className="text-muted mb-0" style={{ fontSize: "0.875rem" }}>
          Stay updated with your latest activities
        </p>
      </div>
      <button className={styles.notificationMarkReadButton}>
        Mark all as read
      </button>
    </div>
  );
};

const NotificationItem = ({ icon, color, title, time }) => {
  
  let iconClass = "";
  if (color === "icon-blue") iconClass = styles.notificationIconBlue;
  else if (color === "icon-green") iconClass = styles.notificationIconGreen;
  else if (color === "icon-yellow") iconClass = styles.notificationIconYellow;
  else if (color === "icon-purple") iconClass = styles.notificationIconPurple;
  else if (color === "icon-red") iconClass = styles.notificationIconRed;
  else if (color === "icon-gray") iconClass = styles.notificationIconGray;

  return (
    <div className={styles.notificationItem + " d-flex align-items-center p-3 mb-2"}>
      <div className={styles.notificatioIcon + " me-3 " + iconClass}>
        <i className={`bi ${icon} fs-4`}></i>
      </div>
      <div className="flex-grow-1">
        <div className={styles.notificationTitle}>{title}</div>
        <div className={styles.notificationTime}>{time}</div>
      </div>
      <button className={styles.notificationActionButton}>
        <i className="bi bi-three-dots-vertical fs-5"></i>
      </button>
    </div>
  );
};

const TimeDivider = ({ label }) => {
  return <div className={styles.notificationTimeDivider}>{label}</div>;
};

const NotificationPage = () => {
  const notifications = [
    {
      section: "Today",
      items: [
        {
          icon: "bi-file-text",
          color: "icon-blue",
          title: "New invoice #INV-2025-004 has been generated",
          time: "2 hours ago",
        },
        {
          icon: "bi-person-plus",
          color: "icon-green",
          title: "Sarah Johnson joined the team",
          time: "5 hours ago",
        },
      ],
    },
    {
      section: "Yesterday",
      items: [
        {
          icon: "bi-file-bar-graph",
          color: "icon-yellow",
          title: "Monthly report for January 2025 is ready",
          time: "Yesterday at 4:30 PM",
        },
        {
          icon: "bi-chat-dots",
          color: "icon-purple",
          title: "Mike Peters commented on your task",
          time: "Yesterday at 2:15 PM",
        },
      ],
    },
    {
      section: "Previous",
      items: [
        {
          icon: "bi-exclamation-triangle",
          color: "icon-red",
          title: "System maintenance scheduled for next week",
          time: "2 days ago",
        },
        {
          icon: "bi-box",
          color: "icon-gray",
          title: "New product added to inventory: SKU-2025-789",
          time: "3 days ago",
        },
      ],
    },
  ];

  return (
    <div className={styles.notificationsContainer + " my-5"}>
      <Header />
      {notifications.map((group, index) => (
        <div key={index}>
          <TimeDivider label={group.section} />
          {group.items.map((item, idx) => (
            <NotificationItem key={idx} {...item} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default NotificationPage;
