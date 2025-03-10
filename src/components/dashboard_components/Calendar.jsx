import React, { useState } from "react";
import styles from "../../assets/css/startup_admin/Calendar.module.css";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);
  const [selectedTime, setSelectedTime] = useState("09:00");

  const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  const handlePrevMonth = () => {
    const newDate = new Date(currentDate.setMonth(currentDate.getMonth() - 1));
    setCurrentDate(new Date(newDate));
  };

  const handleNextMonth = () => {
    const newDate = new Date(currentDate.setMonth(currentDate.getMonth() + 1));
    setCurrentDate(new Date(newDate));
  };

  const handleDateClick = (day) => {
    const newSelectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(newSelectedDate);
  };

  const renderDays = () => {
    const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const daysArray = [];

    // Fill empty slots before the first day
    for (let i = 0; i < firstDay; i++) {
      daysArray.push(<div key={`empty-${i}`} className={styles.empty}></div>);
    }

    // Fill the actual days
    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected =
        selectedDate.getDate() === day &&
        selectedDate.getMonth() === currentDate.getMonth() &&
        selectedDate.getFullYear() === currentDate.getFullYear();

      daysArray.push(
        <div
          key={day}
          className={`${styles.day} ${isSelected ? styles.selected : ""}`}
          onClick={() => handleDateClick(day)}
        >
          {day}
        </div>
      );
    }

    return daysArray;
  };

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.header}>
        <button onClick={() => setCurrentDate(new Date())} className={styles.todayBtn}>Today</button>
        <span className={styles.monthYear}>
          {months[currentDate.getMonth()]} {currentDate.getFullYear()}
        </span>
        <div className={styles.navButtons}>
          <button onClick={handlePrevMonth} className={styles.navBtn}>❮</button>
          <button onClick={handleNextMonth} className={styles.navBtn}>❯</button>
        </div>
      </div>

      <div className={styles.weekdays}>
        {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
          <div key={day} className={styles.weekday}>{day}</div>
        ))}
      </div>

      <div className={styles.daysGrid}>
        {renderDays()}
      </div>

      <div className={styles.footer}>
        <label className={styles.addTimeLabel}>
          Add time
          <input
            type="checkbox"
            checked={showTime}
            onChange={() => setShowTime(!showTime)}
            className={styles.toggle}
          />
        </label>

        {showTime && (
          <input
            type="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className={styles.timeInput}
          />
        )}
      </div>
    </div>
  );
};

export default Calendar;
