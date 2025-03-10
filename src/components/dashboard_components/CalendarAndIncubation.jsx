import Calendar from "./Calendar";
import PieChart from "./Piechart";
import styles from "../../assets/css/startup_admin/CalendarAndIncubation.module.css";

const incubationData = [
  { name: "Incubation Count", value: 38.6, color: "#1C1C1C" },
  { name: "Incubation Stage", value: 22.5, color: "#B9F5D8" },
  { name: "Pending Status", value: 30.8, color: "#9DB2FF" },
  { name: "Other", value: 8.1, color: "#B5E8F0" },
];

const CalendarAndIncubation = () => {
  return (
    <div className={`row ${styles.calendarAndIncubation}`}>
      <div className={`col-md-6 ${styles.calendarSection}`}>
        <div className="card border-0 shadow-sm">
          <div className="card-body">
            <Calendar />
          </div>
        </div>
      </div>

      <div className={`col-md-6 ${styles.incubationSection}`}>
        <div className="card border-0 shadow-sm">
          <div className="card-body">
            <h5 className="fw-bold fs-6 text-decoration-underline">Incubation Status</h5>
            <div className="d-flex align-items-center">
              <PieChart data={incubationData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarAndIncubation;
