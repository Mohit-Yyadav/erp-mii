import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../components/startup/Dashboard'



import Profile from "../components/startup/Profile";
import MainContent from "../components/dashboard_components/MainContent";
import mainContentStyles from "../assets/css/startup/MainContent.module.css";
import StartupDirectory from "../components/startup/StartupDirectory.jsx";
import StartupProfileForm from "../components/startup/StartupForm";
import StartupDisplay from "../components/startup/StartupDisplay";
import MilestoneFunc from "../components/milestones/MilestoneFunc";
import MeetingSchedulePage from '../components/meetingSchedule/MeetingSchedulePage';
import StartupUpdatedForm from "../components/startup/StartupUpdatedForm.jsx";


import EmployeeDataForm from "../components/employee/EmployeeDataForm";
import EmployeeDirectory from "../components/employee/EmployeeDirectory";
import EmployeeDisplay from "../components/employee/EmployeeDisplay";


import InvestorDirectory from "../components/Investor/InvestorDirectory";
import InvestorDisplay from "../components/Investor/InvestorDisplay";
import InvestorProfileForm from "../components/Investor/InvestorProfileForm";
import InvestorProfileUpdatedForm from "../components/Investor/InvestorProfileUpdatedForm.jsx";


import MentorAttendance from "../components/mentor/MentorAttendance";
import MentorDirectory from "../components/mentor/MentorDirectory";
import MentorDisplay from "../components/mentor/MentorDisplay";
import MentorProfileForm from "../components/mentor/MentorProfileForm";

import StartupAttendance from "../components/startup/StartupAttendance";
import ProjectTimeLinee from "../components/startup/ProjectTimeLinee.jsx";

import FacilityTable from "../components/human_resource/FacilityTable.jsx";

import NotificationPage from "../components/NotificationPage/NotificationPage.jsx";
import EmployeeDataUpdateForm from "../components/employee/EmployeeDataUpdateForm.jsx";
import MentorProfileUpdateForm from "../components/mentor/MentorProfileUpdateForm.jsx";
import  Feedback from "../components/feedback/Feedback.jsx";
import MeetingDirectory from "../components/meetingSchedule/Meetingdirectory.jsx";
import StartupPendingApprovalDirectory from "../components/startup/StartupPendingApprovalDirectory.jsx";

const SuperAdminRouting = () => {
  return (
    <Routes>
         <Route path='/' element={<MainContent className={mainContentStyles.mainContent} />} />
     
         <Route path="/profile" element={<Profile />} />
      <Route path="/startup-directory" element={<StartupDirectory />} />
      <Route path="/startup-Form" element={<StartupProfileForm />} />
      <Route path="/startup-display" element={<StartupDisplay />} />
      <Route path="/startup-attendance" element={<StartupAttendance />} />
      <Route path="/startup-Updated-Form" element={<StartupUpdatedForm />} />
      <Route path="/startup-pending-directory" element={<StartupPendingApprovalDirectory/>}/>

      <Route path="/milestone-funtion" element={<MilestoneFunc />} />

      <Route path="/employee-form" element={<EmployeeDataForm />} />
      <Route path="/employee-directory" element={<EmployeeDirectory />} />
      <Route path="/employee-display" element={<EmployeeDisplay />} />
<Route path="/employee-update-form" element={<EmployeeDataUpdateForm/>}/>

      <Route path="/investor-directory" element={<InvestorDirectory />} />
      <Route path="/investor-display" element={<InvestorDisplay />} />
      <Route path="/investors-profile" element={<InvestorProfileForm />} />
      <Route path="/investors-updated-profile" element={<InvestorProfileUpdatedForm />} />


      <Route path="/mentor-attendance" element={<MentorAttendance />} />
      <Route path="/mentor-directory" element={<MentorDirectory />} />
      <Route path="/mentor-display" element={<MentorDisplay />} />
      <Route path="/mentor-form" element={<MentorProfileForm />} />
      <Route path="/mentor-update-profile" element={<MentorProfileUpdateForm/>}/>

      <Route path="/meetingSchedule/*" element={<MeetingSchedulePage />} />
      <Route path="/meeting-directory" element={<MeetingDirectory/>}/>
      
      <Route path="/facilityTable/*" element={<FacilityTable />} />
      <Route path="/project-time-line" element={<ProjectTimeLinee />} />
      <Route path="/NotificationPage/*" element={<NotificationPage />} />
    <Route path="/feedback/*" element={<Feedback/>}
     />
     
         <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  )
}

export default SuperAdminRouting
