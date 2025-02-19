import React from 'react';
import { Bell, Bug, User, Download, Edit, Trash } from 'lucide-react';

const Rightcom = () => {
  return (
    <div className="p-3 bg-white rounded shadow d-none d-lg-block" style={{ position: 'fixed', top: '0', right: '0', width: '300px', height: '100vh', overflowY: 'auto' }}>
      {/* Notifications Section */}
      <div className="mb-4">
        <h2 className="h6 mb-3 mt-5 fw-bold">Notifications</h2>
        <div className="list-group">
          <NotificationItem 
            icon={<Bug className="w-4 h-4 " />}
            text="You have a bug that needs..."
            time="Just now"
          />
          <NotificationItem 
            icon={<User className="w-4 h-4" />}
            text="New user registered"
            time="30 minutes ago"
          />
          <NotificationItem 
            icon={<Bug className="w-4 h-4" />}
            text="You have a bug that needs..."
            time="1 hour ago"
          />
          <NotificationItem 
            icon={<Bell className="w-4 h-4" />}
            text="Andi Love subscribed to you"
            time="Today, 11:30 AM"
          />
        </div>
      </div>

      {/* Feedback Section */}
      <div>
        <h2 className="h6 mb-3 fw-bold">Feedback</h2>
        <div className="list-group">
          <FeedbackItem 
            icon="🐞"
            text="You have a bug that needs..."
            time="Just now"
          />
          <FeedbackItem 
            icon="⬇️"
            text="Released a new version"
            time="20 minutes ago"
          />
          <FeedbackItem 
            icon="🐞"
            text="Submitted a bug"
            time="1 hour ago"
          />
          <FeedbackItem 
            icon="✏️"
            text="Modified data in Page X"
            time="Feb 1, 2023"
          />
          <FeedbackItem 
            icon="🗑️"
            text="Deleted a page in Project X"
            time="Feb 2, 2023"
          />
        </div>
      </div>
    </div>
  );
};

const NotificationItem = ({ icon, text, time }) => {
  return (
    <div className="d-flex align-items-start p-2">
      <div className="p-2 bg-light rounded-circle">
        {icon}
      </div>
      <div className="ms-3">
        <p className="mb-0">{text}</p>
        <small className="text-muted">{time}</small>
      </div>
    </div>
  );
};

const FeedbackItem = ({ icon, text, time }) => {
  return (
    <div className="d-flex align-items-start p-2">
      <div className="p-2 bg-light rounded-circle shadow" style={{ fontSize: '24px', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', width: '32px', height: '32px' }}>
        {icon}
      </div>
      <div className="ms-3">
        <p className="mb-0">{text}</p>
        <small className="text-muted">{time}</small>
      </div>
    </div>
  );
};

export default Rightcom;
