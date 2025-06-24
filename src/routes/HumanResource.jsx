// import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainContent from '../components/dashboard_components/MainContent'
import SpaceBooking from '../components/human_resource/SpaceBooking'
import mainContentStyles from "../assets/css/dashboard/MainContent.module.css"
import PrototypeForm from '../components/human_resource/PrototypeForm'
import FacilityTable from '../components/human_resource/FacilityTable'
import DeskBooking from '../components/human_resource/desk-booking'
import EquipmentBooking from '../components/human_resource/equipment-booking'
import MeetRoomBooking from '../components/human_resource/meeting-room'
import OfficeRoomBooking from '../components/human_resource/office-booking'

const HumanResource = () => {
  return (
    <Routes>
      <Route path='/' element={<MainContent className={mainContentStyles.mainContent} />} />
      <Route path='/space-booking' element={<SpaceBooking />} />
      <Route path='/prototype-form' element={<PrototypeForm />} />
      <Route path='/facility-table' element={<FacilityTable />} />
      <Route path='/desk-booking' element={<DeskBooking />} />
      <Route path='/equipment-booking' element={<EquipmentBooking />} />
      <Route path='/meetingRoom-booking' element={<MeetRoomBooking />} />
         <Route path='/officeRoom-booking'element={<OfficeRoomBooking/>} />
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  )
}

export default HumanResource