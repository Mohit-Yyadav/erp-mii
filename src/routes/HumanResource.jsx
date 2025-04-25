import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainContent from '../components/dashboard_components/MainContent'
import SpaceBooking from '../components/human_resource/SpaceBooking'
import mainContentStyles from "../assets/css/startup/MainContent.module.css"
import PrototypeForm from '../components/human_resource/PrototypeForm'
import FacilityTable from '../components/human_resource/FacilityTable'

const HumanResource = () => {
  return (
       <Routes>
          <Route path='/' element={<MainContent className={mainContentStyles.mainContent} />} />
          <Route path='/space-booking' element={<SpaceBooking/>} />
          <Route path='/prototype-form' element={<PrototypeForm/>} />
          <Route path='/facilityTable'element={<FacilityTable/>} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
  )
}

export default HumanResource