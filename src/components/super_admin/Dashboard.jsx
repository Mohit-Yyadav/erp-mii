import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import MainContent from './MainContent'
import Rightcom from './Rightcom'
import '../../assets/css/dashboard.css'

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
