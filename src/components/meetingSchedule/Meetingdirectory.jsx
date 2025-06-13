import React, { useState, useRef, useEffect } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "../../assets/css/meetingSchedule/Meetingdirectory.module.css";

const MeetingDirectory = () => {
  const calendarInputRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");
  const [viewType, setViewType] = useState("list");
  const [filterDropdownVisible, setFilterDropdownVisible] = useState(false);

  useEffect(() => {
    if (calendarInputRef.current) {
      flatpickr(calendarInputRef.current, {
        dateFormat: "F j, Y",
        onChange: function (selectedDates, dateStr) {
          setSelectedDate(`Selected: ${dateStr}`);
          setCalendarVisible(false);
        },
      });
    }
  }, []);

  const toggleCalendar = () => {
    setCalendarVisible(!calendarVisible);
    setTimeout(() => {
      calendarInputRef.current?.focus();
    }, 0);
  };

  const toggleFilterDropdown = () => {
    setFilterDropdownVisible((prev) => !prev);
  };

  const handleFilterSelect = (status) => {
    setFilterStatus(status);
    setFilterDropdownVisible(false);
  };

  const meetings = [
    {
      title: "Product Review",
      status: "confirmed",
      time: "10:00 AM – 11:30 AM",
      date: "March 15, 2025",
      location: "Conference Room A",
      avatars: [1, 2, 3],
      extra: "+2",
    },
    {
      title: "Team Sync",
      status: "in-progress",
      time: "2:00 PM – 3:00 PM",
      date: "March 15, 2025",
      location: "Meeting Room B",
      avatars: [4, 5, 6],
      extra: null,
    },
    {
      title: "Client Meeting",
      status: "pending",
      time: "4:00 PM – 5:00 PM",
      date: "March 15, 2025",
      location: "Virtual Meeting",
      avatars: [7, 8, 9],
      extra: "+4",
    },
  ];

  const filteredMeetings =
    filterStatus === "all"
      ? meetings
      : meetings.filter((m) => m.status === filterStatus);

  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <div className={styles.header}>Scheduled Meetings</div>
        <div className={`${styles.container} mt-4`}>
          {/* Search and Filter */}
          <div className={`row align-items-center mb-3 ${styles.searchBar}`}>
            <div className="col-md-6 mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Search meetings..."
              />
            </div>

            {/* Dropdown Filter */}
            <div className="col-md-3 mb-2">
              <select
                className="form-select"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">All Attendees</option>
                <option value="confirmed">Confirmed</option>
                <option value="in-progress">In Progress</option>
                <option value="pending">Pending</option>
              </select>
            </div>

            {/* Filter Button */}
            <div className="col-md-3 mb-2 position-relative">
              <button
                className={`btn w-100 ${styles.btnFilter}`}
                onClick={toggleFilterDropdown}
              >
                <i className="bi bi-funnel-fill me-1"></i> Filter
              </button>

              {filterDropdownVisible && (
                <ul
                  className="list-group position-absolute w-100 mt-1"
                  style={{ zIndex: 1000 }}
                >
                  <li
                    className="list-group-item"
                    onClick={() => handleFilterSelect("all")}
                  >
                    All Attendees
                  </li>
                  <li
                    className="list-group-item"
                    onClick={() => handleFilterSelect("confirmed")}
                  >
                    Confirmed
                  </li>
                  <li
                    className="list-group-item"
                    onClick={() => handleFilterSelect("in-progress")}
                  >
                    In Progress
                  </li>
                  <li
                    className="list-group-item"
                    onClick={() => handleFilterSelect("pending")}
                  >
                    Pending
                  </li>
                </ul>
              )}
            </div>
          </div>

          {/* View Switch + Calendar + New Meeting */}
          <div className="d-flex flex-wrap justify-content-between align-items-center mb-3 gap-2">
            <div className="d-flex flex-wrap align-items-center gap-2">
              {/* List Button */}
              <button
                className={`btn ${styles.btnList}`}
                onClick={() => setViewType("list")}
              >
                <i className="bi bi-list-ul me-1"></i> List
              </button>

              {/* Calendar Button */}
              <div className="position-relative">
                <button
                  className="btn btn-outline-secondary"
                  onClick={toggleCalendar}
                >
                  <i className="bi bi-calendar-event me-1"></i> Calendar
                </button>
                <input
                  type="text"
                  id="calendarPicker"
                  className={`form-control position-absolute top-100 mt-1 ${styles.calendarPicker}`}
                  style={{ display: calendarVisible ? "block" : "none" }}
                  ref={calendarInputRef}
                />
              </div>
              <span
                id="selectedDate"
                className={`ms-2 mt-1 text-muted ${styles.selectedDate}`}
              >
                {selectedDate}
              </span>
            </div>

            <div className="mt-2 mt-md-0">
              <button className={`btn ${styles.btnNew}`}>+ New Meeting</button>
            </div>
          </div>

          {/* Meeting List View */}
          {viewType === "list" ? (
            <div className="row g-3">
              {filteredMeetings.map((meeting, index) => (
                <div className="col-md-4" key={index}>
                  <div className={`card p-3 ${styles.meetingCard}`}>
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="fw-bold mb-0">{meeting.title}</h6>
                      <span
                        className={`${styles.statusBadge} ${
                          styles[meeting.status.replace("-", "")]
                        }`}
                      >
                        {meeting.status.charAt(0).toUpperCase() +
                          meeting.status.slice(1)}
                      </span>
                    </div>
                    <div className={`mt-2 ${styles.meetingTime}`}>
                      <i className="bi bi-clock"></i> {meeting.time}
                    </div>
                    <div className={styles.meetingDate}>
                      <i className="bi bi-calendar-event"></i> {meeting.date}
                    </div>
                    <div className={`d-flex mt-2 ${styles.avatarGroup}`}>
                      {meeting.avatars.map((img, idx) => (
                        <img
                          key={idx}
                          src={`https://i.pravatar.cc/30?img=${img}`}
                          alt="avatar"
                        />
                      ))}
                      {meeting.extra && (
                        <span className="ms-2 fw-semibold">
                          {meeting.extra}
                        </span>
                      )}
                    </div>
                    <div className={`mt-2 ${styles.meetingLocation}`}>
                      <i className="bi bi-geo-alt-fill"></i> {meeting.location}
                    </div>
                    <div className="d-flex justify-content-between mt-3">
                      <button className={`btn ${styles.btnLight}`}>
                        <i className="bi bi-pencil-square"></i> Edit
                      </button>
                      <button className={`btn ${styles.btnLight}`}>
                        <i className="bi bi-trash"></i> Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <p className="text-muted">Calendar view not yet implemented.</p>
            </div>
          )}
        </div>
      </div>{" "}
    </div>
  );
};

export default MeetingDirectory;
