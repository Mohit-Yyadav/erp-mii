import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Profile from '../components/startup/Profile'
import Dashboard from '../components/startup/Dashboard'
import Startup_directory from '../components/startup/Startup_directory'

const Startup = () => {
  return (
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/startup-directory" element={<Startup_directory />} />
    </Routes>
  )
}

export default Startup
