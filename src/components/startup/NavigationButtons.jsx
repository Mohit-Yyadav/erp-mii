import { Link } from "react-router-dom";

const NavigationButtons = () => {
  return (
    <div className="container mt-3">
      <Link to="/startup-admin/" className="btn btn-primary m-2">
        Dashboard
      </Link>
      <Link to="/startup-admin/employee-form" className="btn btn-secondary m-2">
        Employee Data Form
      </Link>
      <Link to="/startup-admin/employee-directory" className="btn btn-success m-2">
        Employee Directory
      </Link>
      <Link to="/startup-admin/employee-display" className="btn btn-danger m-2">
        Employee Display
      </Link>
      <Link to="/startup-admin/investor-directory" className="btn btn-warning m-2">
        Investor Directory
      </Link>
      <Link to="/startup-admin/investor-display" className="btn btn-info m-2">
        Investor Display
      </Link>
      <Link to="/startup-admin/mentor-attendance" className="btn btn-light m-2">
        Mentor Attendance
      </Link>
      <Link to="/startup-admin/mentor-directory" className="btn btn-dark m-2">
        Mentor Directory
      </Link>
      <Link to="/startup-admin/mentor-display" className="btn btn-primary m-2">
        Mentor Display
      </Link>
      <Link to="/startup-admin/mentor-profile-form" className="btn btn-secondary m-2">
        Mentor Profile Form
      </Link>
      <Link to="/startup-admin/project-time-line" className="btn btn-success m-2">
        Project Timeline
      </Link>
      <Link to="/startup-admin/startup-attendance" className="btn btn-primary m-2">
        Startup Attendance
      </Link>
    </div>
  );
};

export default NavigationButtons;
