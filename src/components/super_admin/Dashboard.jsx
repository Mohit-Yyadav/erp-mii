import React from 'react'
import Navbar from '../dashboard_components/Navbar'
import Sidebar from '../dashboard_components/Sidebar'
import MainContent from './MainContent'
import Rightcom from '../dashboard_components/Rightcom'
import '../../assets/css/super_admin/dashboard.css'


const Dashboard = () => {
  return (
    <>
        <Navbar />
        <Sidebar />
       <MainContent />
       <Rightcom />
    </>
  )
}

export default Dashboard
