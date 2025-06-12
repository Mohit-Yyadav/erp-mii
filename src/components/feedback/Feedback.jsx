import React, { useState, useEffect } from "react";
import styles from "../../components/feedback/Feedback.module.css";

const Feedback = () => {
  const feedbacks = [
    {
      name: "Sarah Johnson",
      message:
        "The new inventory management module is great, but it would be helpful to have bulk editing capabilities for product details.",
      tags: ["Feature Request", "Medium Priority"],
      time: "2 hours ago",
      starred: true,
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "Michael Chen",
      message:
        "Found a bug in the reporting module. When generating monthly sales reports, the totals don’t match with the individual entries.",
      tags: ["Bug Report", "High Priority"],
      time: "1 day ago",
      starred: false,
      avatar: "https://via.placeholder.com/40",
      unstarredMessage: "☆",
    },
    {
      name: "Emily Rodriguez",
      message:
        "The UI is much cleaner now after the update. Really loving the new dashboard layout and the quick access toolbar.",
      tags: ["Feedback", "Low Priority"],
      time: "3 days ago",
      starred: true,
      avatar: "https://via.placeholder.com/40",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("latest");
  const [filterType, setFilterType] = useState("all");
  const [filteredFeedbacks, setFilteredFeedbacks] = useState(feedbacks);

  const parseRelativeTime = (timeStr) => {
    const now = new Date();
    const [amount, unit] = timeStr.split(" ");
    const num = parseInt(amount);

    switch (unit) {
      case "minute":
      case "minutes":
        return new Date(now - num * 60000);
      case "hour":
      case "hours":
        return new Date(now - num * 3600000);
      case "day":
      case "days":
        return new Date(now - num * 86400000);
      default:
        return now;
    }
  };

  useEffect(() => {
    let updated = [...feedbacks];

    // Filter by search term
    if (searchTerm.trim()) {
      const lower = searchTerm.toLowerCase();
      updated = updated.filter(
        (f) =>
          f.name.toLowerCase().includes(lower) ||
          f.message.toLowerCase().includes(lower)
      );
    }

    // Filter by feedback type
    if (filterType === "starred") {
      updated = updated.filter((f) => f.starred);
    } else if (filterType === "recent") {
      updated = updated.filter((f) => {
        const timeDiff = new Date() - parseRelativeTime(f.time);
        return timeDiff < 24 * 3600000; // within 1 day
      });
    }

    // Sort
    if (sortOption === "oldest") {
      updated.sort(
        (a, b) => parseRelativeTime(a.time) - parseRelativeTime(b.time)
      );
    } else if (sortOption === "latest") {
      updated.sort(
        (a, b) => parseRelativeTime(b.time) - parseRelativeTime(a.time)
      );
    }

    setFilteredFeedbacks(updated);
  }, [searchTerm, sortOption, filterType]);

  return (
    <div className={`${styles.feedbackContainer} container mt-4`}>
      <div className={styles.feedbackHeader}>
        <h3>Feedback Center</h3>
        <input
          type="text"
          placeholder="Search Feedback..."
          className={`form-control ${styles.feedbackSearchInput}`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className={`${styles.feedbackCardBack} p-4 `}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div
            className={`d-flex align-items-center gap-2 ${styles.feedbackFilterOption}`}
          >
            <button
              className={`btn ${
                filterType === "all" ? "btn-dark" : "btn-light"
              }`}
              onClick={() => setFilterType("all")}
            >
              All Feedback
            </button>
            <button
              className={`btn ${
                filterType === "starred" ? "btn-dark" : "btn-light"
              }`}
              onClick={() => setFilterType("starred")}
            >
              Starred
            </button>
            <button
              className={`btn ${
                filterType === "recent" ? "btn-dark" : "btn-light"
              }`}
              onClick={() => setFilterType("recent")}
            >
              Recent
            </button>
          </div>
          <div className={styles.feedbackSortByButton}>
            <select
              id="sort"
              className={styles.feedbackSortByButton}
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="latest">Sort By: Latest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>

        <div className="feedbackList">
          {filteredFeedbacks.map((feedback, index) => (
            <div
              key={index}
              className={`${styles.feedbackCard} card p-3 mb-3 d-flex flex-row align-items-start`}
            >
              <img
                src={feedback.avatar}
                alt={feedback.name}
                className={`${styles.feedbackAvatar} me-3`}
              />
              <div className="w-100">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-1">{feedback.name}</h5>
                  <div className="d-flex align-items-center">
                    <small className="text-muted me-2">{feedback.time}</small>
                    {feedback.starred && (
                      <span className="text-warning">⭐</span>
                    )}
                    {!feedback.starred && feedback.unstarredMessage && (
                      <span className="text-muted ms-2">
                        {feedback.unstarredMessage}
                      </span>
                    )}
                  </div>
                </div>
                <p className="mb-1">{feedback.message}</p>
                <div className={styles.feedbackTags}>
                  {feedback.tags.map((tag, i) => (
                    <span key={i} className="badge bg-secondary me-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-center">
          <button className={`${styles.feedbackBtn} btn btn-dark`}>
            Load More Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
