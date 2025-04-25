import React, { useState } from "react";
import TaskCreationForm from "./TaskCreationSystemForm";
import MilestoneTrackingForm from "./MilestoneTrackingForm";
import MetricTrackingForm from "./MetricTrackingForm";


const MilestoneFunc = () => {
  const [step, setStep] = useState(1);

  const handleTaskSubmit = () => {
    setStep(2); // Show MilestoneTrackingForm
  };

  const handleMilestoneSubmit = () => {
    setStep(3); // Show MetricTrackingForm
  };

  const handleMetricSubmit = () => {
    alert("All Forms Submitted! ✅");
    setStep(1); // Reset to TaskCreationForm
  };

  return (
    <div className="container mt-5">
      {step === 1 && <TaskCreationForm onSubmit={handleTaskSubmit} />}
      {step === 2 && <MilestoneTrackingForm onSubmit={handleMilestoneSubmit} />}
      {step === 3 && <MetricTrackingForm onSubmit={handleMetricSubmit} />}
    </div>
  );
};

export default MilestoneFunc;
