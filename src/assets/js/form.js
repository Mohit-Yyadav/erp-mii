document.addEventListener("DOMContentLoaded", function () {
    // Toggle logic for switches (Yes/No)
    document.querySelectorAll(".mentorship-switch").forEach((input) => {
      input.addEventListener("change", function () {
        if (this.checked) {
          document.querySelectorAll(".mentorship-switch").forEach((other) => {
            if (other !== this) other.checked = false;
          });
        }
      });
    });
  
    document.querySelectorAll(".facility-switch").forEach((input) => {
      input.addEventListener("change", function () {
        if (this.checked) {
          document.querySelectorAll(".facility-switch").forEach((other) => {
            if (other !== this) other.checked = false;
          });
        }
      });
    });
  });
  
  function toggleExclusive(checkedId, uncheckedId) {
    let checkedElement = document.getElementById(checkedId);
    let uncheckedElement = document.getElementById(uncheckedId);
  
    if (checkedElement.checked) {
      uncheckedElement.checked = false;
    }
  }
  
  const updateProgress = (data) => {
    let completedSections = 0;
  
    // Personal Details
    if (data.name && data.email && data.studentID && data.phone_number) {
      completedSections++;
    }
  
    // Startup Details
    if (
      data.startup_name &&
      data.industry_sector &&
      data.description &&
      data.problemStatementAndSolution &&
      data.currentStage &&
      data.website_socialMedia
    ) {
      completedSections++;
    }
  
    // Business Details
    if (
      data.revenue_model &&
      data.expected_investment &&
      data.competition_analysis
    ) {
      completedSections++;
    }
  
    // Facilities Required
    if (data.office_space && data.mentorship && data.networking) {
      completedSections++;
    }
  
    setProgress(completedSections * 25);
  };
  
  // Attach event listeners to all input fields to track progress
  document.querySelectorAll("input, textarea, select").forEach((input) => {
    input.addEventListener("input", updateProgress);
  });